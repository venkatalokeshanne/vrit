param([switch]$DryRun, [switch]$Backup = $true)

Write-Host "Image Tag Converter" -ForegroundColor Cyan
Write-Host "Mode: $(if($DryRun){'DRY RUN'}else{'LIVE'})" -ForegroundColor Yellow
Write-Host ""

$files = Get-ChildItem -Path "src" -Recurse -Include "*.js","*.jsx" | Where-Object { $_.Name -notmatch "node_modules" }
$processed = 0
$modified = 0

foreach ($file in $files) {
    $processed++
    try {
        $content = (Get-Content $file.FullName) -join "`n"
        $original = $content
    
    if ($content -match '<img\s+[^>]*src=\{[^}]+\}') {
        Write-Host "Processing: $($file.Name)" -ForegroundColor Yellow
        
        # Add import if missing
        if ($content -notmatch "import.*Image.*from.*next/image") {
            $content = "import Image from 'next/image';`n$content"
            Write-Host "  + Added import" -ForegroundColor Green
        }
        
        # Convert img to Image
        $content = $content -replace '<img\s+([^>]*)src=\{([^}]+)\}([^>]*)/>', '<Image src={$2} alt="Image" width={1200} height={630} $1$3 />'
        
        if ($content -ne $original) {
            $modified++
            if ($DryRun) {
                Write-Host "  [DRY RUN] Would update" -ForegroundColor Yellow
            } else {
                if ($Backup) {
                    Copy-Item $file.FullName "$($file.FullName).backup"
                }
                Set-Content $file.FullName $content
                Write-Host "  Updated!" -ForegroundColor Green
            }
        }
    } catch {
        Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "Processed: $processed" -ForegroundColor White
Write-Host "Modified: $modified" -ForegroundColor Green

if ($DryRun) {
    Write-Host "Run without -DryRun to apply changes" -ForegroundColor Yellow
}
