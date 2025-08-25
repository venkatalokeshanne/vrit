# PowerShell script to add <DynamicSEOHeaders> component usage to page.js files
# This script adds the component in the return statement after the opening <>

$rootDir = "C:\Users\annev\workspace\vrit\src\app"
$componentUsage = "      <DynamicSEOHeaders seoHeaders={courseMetadata?.seoHeaders} />"

function Test-ComponentExists {
    param([string]$filePath)
    $content = Get-Content $filePath -Raw
    return $content -match "<DynamicSEOHeaders"
}

function Add-ComponentToFile {
    param([string]$filePath)
    
    try {
        $lines = Get-Content $filePath
        if ($lines.Count -eq 0) { return $false }
        
        # Find return statement with <>
        $insertPosition = -1
        for ($i = 0; $i -lt $lines.Count; $i++) {
            $line = $lines[$i].TrimEnd()
            
            # Look for patterns like "return (" followed by "<>" on next lines
            if ($line -match "return\s*\(" -and $i -lt ($lines.Count - 3)) {
                # Check next few lines for opening <>
                for ($j = $i + 1; $j -lt [Math]::Min($i + 4, $lines.Count); $j++) {
                    $nextLine = $lines[$j].Trim()
                    if ($nextLine -eq "<>") {
                        $insertPosition = $j + 1
                        break
                    }
                }
                if ($insertPosition -ne -1) { break }
            }
        }
        
        if ($insertPosition -eq -1) {
            Write-Host "  No suitable insertion point found" -ForegroundColor Yellow
            return $false
        }
        
        # Insert component
        $newLines = @()
        for ($i = 0; $i -lt $lines.Count; $i++) {
            $newLines += $lines[$i]
            if ($i -eq $insertPosition - 1) {
                $newLines += $componentUsage
            }
        }
        
        $newLines | Set-Content $filePath -Encoding UTF8
        Write-Host "  ✓ Added component" -ForegroundColor Green
        return $true
        
    } catch {
        Write-Host "  ✗ Error: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}
}

Write-Host "🚀 Adding DynamicSEOHeaders component to page.js files..." -ForegroundColor Cyan

$pageFiles = Get-ChildItem -Path $rootDir -Filter "page.js" -Recurse
$processedCount = 0
$skippedCount = 0

foreach ($file in $pageFiles) {
    $relativePath = $file.FullName.Replace("$rootDir\", "")
    Write-Host "Processing: $relativePath" -ForegroundColor White
    
    if (Test-ComponentExists -filePath $file.FullName) {
        Write-Host "  ⚠️  Component already exists" -ForegroundColor Yellow
        $skippedCount++
    } else {
        if (Add-ComponentToFile -filePath $file.FullName) {
            $processedCount++
        }
    }
}

Write-Host ""
Write-Host "📊 SUMMARY" -ForegroundColor Cyan
Write-Host "✅ Files updated: $processedCount" -ForegroundColor Green
Write-Host "⏭️  Files skipped: $skippedCount" -ForegroundColor Yellow
Write-Host "✨ Done!" -ForegroundColor Cyan
