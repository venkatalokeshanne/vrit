# Simple Next.js Image Tag Converter
param(
    [switch]$DryRun = $false,
    [switch]$Backup = $true
)

Write-Host "=== Next.js Image Tag Converter ===" -ForegroundColor Cyan
Write-Host "Mode: $(if($DryRun){'DRY RUN'}else{'LIVE'})" -ForegroundColor $(if($DryRun){'Yellow'}else{'Green'})
Write-Host ""

$processedCount = 0
$modifiedCount = 0
$errorCount = 0

# Get all React files
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
            if ($content -notmatch "import\s+Image\s+from\s+['`"]next/image['`"]") {
                Write-Host "  + Adding Image import" -ForegroundColor Green
                
                # Simple import insertion at the beginning
                if ($content -match "^['`"]use client['`"]") {
                    $content = $content -replace "(^['`"]use client['`"];?\s*\n)", "`$1import Image from 'next/image';`n"
                }
                else {
                    $content = "import Image from 'next/image';`n" + $content
                }
                $modified = $true
            }
            
            # Convert img tags - simple pattern
            $content = $content -replace '<img\s+([^>]*?)src=\{([^}]+)\}([^>]*?)/?>', '<Image src={$2} alt="Image" width={1200} height={630} $1$3 />'
            
            # Fix specific patterns for better dimensions
            $content = $content -replace '(<Image[^>]*alt="[^"]*logo[^"]*"[^>]*width=\{)\d+(\}[^>]*height=\{)\d+(\})', '${1}48${2}48${3}'
            $content = $content -replace '(<Image[^>]*className="[^"]*w-20 h-20[^"]*"[^>]*width=\{)\d+(\}[^>]*height=\{)\d+(\})', '${1}80${2}80${3}'
            
            if ($content -ne $originalContent) {
                $modified = $true
            }
            
            # Apply changes
            if ($modified) {
                if ($DryRun) {
                    Write-Host "  [DRY RUN] Would save changes" -ForegroundColor Yellow
                } else {
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
        
    } catch {
        Write-Host "  ✗ Error processing $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
        $errorCount++
    }
}

# Summary
Write-Host ""
Write-Host "=== Summary ===" -ForegroundColor Cyan
Write-Host "Files processed: $processedCount" -ForegroundColor White
Write-Host "Files modified: $modifiedCount" -ForegroundColor Green
Write-Host "Errors: $errorCount" -ForegroundColor Red

if ($DryRun) {
    Write-Host ""
    Write-Host "This was a DRY RUN - no files were actually modified." -ForegroundColor Yellow
    Write-Host "Run without -DryRun to apply changes: .\fix-images-quick.ps1" -ForegroundColor Yellow
} elseif ($modifiedCount -gt 0) {
    Write-Host ""
    Write-Host "✓ Successfully updated $modifiedCount files!" -ForegroundColor Green
    if ($Backup) {
        Write-Host "✓ Backup files created with .backup extension" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Script completed!" -ForegroundColor Cyan
