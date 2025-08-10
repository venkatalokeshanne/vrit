# Fix Image Tags - Simple and Safe
param([switch]$DryRun = $false, [switch]$Backup = $true)

Write-Host "=== Image Tag Converter ===" -ForegroundColor Cyan
if ($DryRun) { Write-Host "DRY RUN MODE - No files will be changed" -ForegroundColor Yellow }
Write-Host ""

$count = 0
$changed = 0

Get-ChildItem -Path "src" -Recurse -Include "*.js","*.jsx","*.ts","*.tsx" | ForEach-Object {
    $file = $_
    $count++
    
    try {
        $content = Get-Content $file.FullName -Raw
        $original = $content
        
        # Check if file needs Image import
        if ($content -match '<img\s+[^>]*src=\{[^}]+\}' -and $content -notmatch "import.*Image.*from.*next/image") {
            Write-Host "Processing: $($file.Name)" -ForegroundColor Yellow
            
            # Add import
            if ($content -match "^'use client'") {
                $content = $content -replace "('use client';?\s*)", "`$1`nimport Image from 'next/image';"
            } else {
                $content = "import Image from 'next/image';`n$content"
            }
            
            Write-Host "  + Added Image import" -ForegroundColor Green
        }
        
        # Convert img tags
        if ($content -match '<img\s+[^>]*src=\{[^}]+\}') {
            $imgCount = ([regex]::Matches($content, '<img\s+[^>]*src=\{[^}]+\}')).Count
            
            # Simple replacement
            $content = $content -replace '<img\s+([^>]*?)src=\{([^}]+)\}([^>]*?)/?>', '<Image src={$2} alt="Image" width={1200} height={630} $1$3 />'
            
            # Fix logo dimensions
            $content = $content -replace '(<Image[^>]*alt="[^"]*logo[^"]*"[^>]*width=\{)1200(\}[^>]*height=\{)630(\})', '${1}48${2}48${3}'
            
            Write-Host "  + Converted $imgCount img tags" -ForegroundColor Green
        }
        
        # Save if changed
        if ($content -ne $original) {
            if ($DryRun) {
                Write-Host "  [DRY RUN] Would update file" -ForegroundColor Yellow
            } else {
                if ($Backup) {
                    Copy-Item $file.FullName "$($file.FullName).backup" -Force
                }
                Set-Content $file.FullName $content
                Write-Host "  ✓ Updated" -ForegroundColor Green
            }
            $changed++
        }
        
    } catch {
        Write-Host "  ✗ Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Processed: $count files" -ForegroundColor Cyan
Write-Host "Modified: $changed files" -ForegroundColor Green

if ($DryRun) {
    Write-Host ""
    Write-Host "Run without -DryRun to apply changes" -ForegroundColor Yellow
}

Write-Host "Done!" -ForegroundColor Cyan
