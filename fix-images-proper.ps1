# Script to convert img tags to Next.js Image components properly
param(
    [string]$SourceDir = "src"
)

# Get all JavaScript/React files
$files = Get-ChildItem -Path $SourceDir -Recurse -Include "*.js", "*.jsx" | Where-Object { $_.FullName -notlike "*node_modules*" }

$totalFiles = $files.Count
$updatedFiles = 0
$processedFiles = 0

Write-Host "Processing $totalFiles files..." -ForegroundColor Green

foreach ($file in $files) {
    $processedFiles++
    Write-Progress -Activity "Converting img tags" -Status "Processing $($file.Name)" -PercentComplete (($processedFiles / $totalFiles) * 100)
    
    try {
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
        $originalContent = $content
        
        # Check if file has img tags
        if ($content -match '<img[^>]*>') {
            Write-Host "Found img tags in: $($file.FullName)" -ForegroundColor Yellow
            
            # Create backup
            $backupFile = $file.FullName + ".backup2"
            Copy-Item $file.FullName $backupFile -Force
            
            # Add Image import if not present and img tags exist
            if ($content -notmatch 'import\s+.*Image.*from\s+[''"]next/image[''"]' -and $content -match '<img[^>]*>') {
                # Find the best place to add the import
                if ($content -match '(import\s+.*from\s+[''"][^''"]*[''"];?\s*\n)') {
                    # Add after existing imports
                    $lastImportMatch = [regex]::Matches($content, 'import\s+.*from\s+[''"][^''"]*[''"];?\s*\n') | Select-Object -Last 1
                    $insertPosition = $lastImportMatch.Index + $lastImportMatch.Length
                    $content = $content.Insert($insertPosition, "import Image from 'next/image'`n")
                } else {
                    # Add at the beginning
                    $content = "import Image from 'next/image'`n" + $content
                }
            }
            
            # Convert img tags to Image components
            # This regex properly captures and preserves all attributes
            $content = [regex]::Replace($content, '<img\s+([^>]*?)/?>', {
                param($match)
                $attributes = $match.Groups[1].Value.Trim()
                
                # Parse attributes to avoid duplicates
                $attrPattern = '(\w+)=({[^}]+}|"[^"]*"|''[^'']*'')'
                $matches = [regex]::Matches($attributes, $attrPattern)
                
                $srcAttr = ""
                $altAttr = 'alt="Image"'
                $otherAttrs = @()
                
                foreach ($attrMatch in $matches) {
                    $attrName = $attrMatch.Groups[1].Value
                    $attrValue = $attrMatch.Groups[2].Value
                    
                    if ($attrName -eq "src") {
                        $srcAttr = "src=$attrValue"
                    } elseif ($attrName -eq "alt") {
                        $altAttr = "alt=$attrValue"
                    } else {
                        $otherAttrs += "$attrName=$attrValue"
                    }
                }
                
                # Ensure we have width and height
                $hasWidth = $otherAttrs | Where-Object { $_ -match "^width=" }
                $hasHeight = $otherAttrs | Where-Object { $_ -match "^height=" }
                
                if (-not $hasWidth) {
                    $otherAttrs += "width={1200}"
                }
                if (-not $hasHeight) {
                    $otherAttrs += "height={630}"
                }
                
                # Build the Image tag
                $allAttrs = @($srcAttr, $altAttr) + $otherAttrs | Where-Object { $_ -ne "" }
                return "<Image " + ($allAttrs -join " ") + " />"
            })
            
            # Only write if content changed
            if ($content -ne $originalContent) {
                Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
                $updatedFiles++
                Write-Host "Updated: $($file.Name)" -ForegroundColor Green
            }
        }
    }
    catch {
        Write-Host "Error processing $($file.FullName): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`nProcessing complete!" -ForegroundColor Green
Write-Host "Files processed: $processedFiles" -ForegroundColor Cyan
Write-Host "Files updated: $updatedFiles" -ForegroundColor Cyan
