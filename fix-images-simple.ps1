# Simple Next.js Image Tag Converter
# Safely converts <img> tags to <Image /> components

param(
    [switch]$DryRun = $false,
    [switch]$Backup = $true
)

Write-Host "=== Next.js Image Tag Converter ===" -ForegroundColor Cyan
Write-Host "Mode: $(if($DryRun){'DRY RUN - No files will be modified'}else{'LIVE - Files will be updated'})" -ForegroundColor $(if($DryRun){'Yellow'}else{'Green'})
Write-Host ""

$processedCount = 0
$modifiedCount = 0
$errorCount = 0

# Get all React/Next.js files in src directory
$files = Get-ChildItem -Path "src" -Recurse -Include "*.js","*.jsx","*.ts","*.tsx" | 
    Where-Object { $_.FullName -notmatch "node_modules|\.next|\.git" }

Write-Host "Found $($files.Count) files to scan..." -ForegroundColor Cyan
Write-Host ""

foreach ($file in $files) {
    try {
        $content = Get-Content $file.FullName -Raw -ErrorAction Stop
        $originalContent = $content
        $modified = $false
        
        # Check if file has img tags that need conversion
        if ($content -match '<img\s+[^>]*src=\{[^}]+\}') {
            Write-Host "Processing: $($file.Name)" -ForegroundColor Yellow
            
            # Add Image import if missing
            if ($content -notmatch "import\s+Image\s+from\s+['""]next/image['""]") {
                Write-Host "  + Adding Image import" -ForegroundColor Green
                
                # Find best insertion point for import
                $lines = $content -split "`n"
                $insertIndex = 0
                
                # Look for existing imports
                for ($i = 0; $i -lt $lines.Count; $i++) {
                    if ($lines[$i] -match "^import\s+") {
                        $insertIndex = $i + 1
                    }
                    elseif ($lines[$i] -match "^['""]use client['""]") {
                        $insertIndex = $i + 1
                    }
                }
                
                # Insert the import
                $newLines = @()
                $newLines += $lines[0..($insertIndex-1)]
                $newLines += "import Image from 'next/image';"
                if ($insertIndex -lt $lines.Count) {
                    $newLines += $lines[$insertIndex..($lines.Count-1)]
                }
                
                $content = $newLines -join "`n"
                $modified = $true
            }
            
            # Convert img tags to Image components
            $imgPattern = '(?s)<img\s+([^>]*?)src=\{([^}]+)\}([^>]*?)(?:/>|></img>)'
            $matches = [regex]::Matches($content, $imgPattern)
            
            foreach ($match in $matches) {
                $fullTag = $match.Value
                $srcValue = $match.Groups[2].Value
                
                Write-Host "  + Converting img with src={$srcValue}" -ForegroundColor Green
                
                # Extract attributes
                $altMatch = [regex]::Match($fullTag, 'alt\s*=\s*["'']([^"'']*)["'']')
                $altText = if ($altMatch.Success) { $altMatch.Groups[1].Value } else { "Image" }
                
                $classMatch = [regex]::Match($fullTag, 'className\s*=\s*["'']([^"'']*)["'']')
                $className = if ($classMatch.Success) { " className=`"$($classMatch.Groups[1].Value)`"" } else { "" }
                
                $styleMatch = [regex]::Match($fullTag, 'style\s*=\s*\{[^}]+\}')
                $style = if ($styleMatch.Success) { " $($styleMatch.Value)" } else { "" }
                
                $onErrorMatch = [regex]::Match($fullTag, 'onError\s*=\s*\{[^}]+\}')
                $onError = if ($onErrorMatch.Success) { " $($onErrorMatch.Value)" } else { "" }
                
                # Determine dimensions based on context
                $width = "1200"
                $height = "630"
                
                if ($className -match "w-20 h-20" -or $altText -match "thumbnail") {
                    $width = "80"; $height = "80"
                }
                elseif ($className -match "h-10" -or $altText -match "logo") {
                    $width = "40"; $height = "40"
                }
                elseif ($className -match "h-12" -or $altText -match "logo") {
                    $width = "48"; $height = "48"
                }
                elseif ($className -match "h-32") {
                    $width = "384"; $height = "128"
                }
                
                # Build new Image tag
                $newTag = "<Image src={$srcValue} alt=`"$altText`" width={$width} height={$height}$className$style$onError />"
                
                $content = $content.Replace($fullTag, $newTag)
                $modified = $true
            }
            
            # Apply changes
            if ($modified) {
                if ($DryRun) {
                    Write-Host "  [DRY RUN] Would save changes" -ForegroundColor Yellow
                }
                else {
                    # Create backup
                    if ($Backup) {
                        $backupPath = "$($file.FullName).backup"
                        Copy-Item $file.FullName $backupPath -Force
                        Write-Host "  + Created backup: $($file.Name).backup" -ForegroundColor Cyan
                    }
                    
                    # Save updated content
                    Set-Content $file.FullName $content -ErrorAction Stop
                    Write-Host "  ✓ File updated successfully" -ForegroundColor Green
                }
                $modifiedCount++
            }
        }
        
        $processedCount++
        
    }
    catch {
        Write-Host "  ✗ Error processing $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
        $errorCount++
    }
    
    Write-Host ""
}

# Summary
Write-Host "=== Summary ===" -ForegroundColor Cyan
Write-Host "Files processed: $processedCount" -ForegroundColor White
Write-Host "Files modified: $modifiedCount" -ForegroundColor Green
Write-Host "Errors: $errorCount" -ForegroundColor Red

if ($DryRun) {
    Write-Host ""
    Write-Host "This was a DRY RUN - no files were actually modified." -ForegroundColor Yellow
    Write-Host "Run without -DryRun to apply changes: .\fix-image-tags.ps1" -ForegroundColor Yellow
}
elseif ($modifiedCount -gt 0) {
    Write-Host ""
    Write-Host "✓ Successfully updated $modifiedCount files!" -ForegroundColor Green
    if ($Backup) {
        Write-Host "✓ Backup files created with .backup extension" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Script completed!" -ForegroundColor Cyan
