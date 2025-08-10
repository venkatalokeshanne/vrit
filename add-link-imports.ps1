# PowerShell script to add 'import Link from "next/link";' to all page.js files
# Only adds the import if it doesn't already exist

Write-Host "Starting to add Link import to all page.js files..." -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green

# Get all page.js files in the workspace
$pageFiles = Get-ChildItem -Path "." -Recurse -Name "page.js" | Where-Object {
    # Filter out node_modules and .next directories
    $_ -notmatch "node_modules" -and $_ -notmatch "\.next"
}

$processedCount = 0
$skippedCount = 0
$updatedCount = 0

foreach ($file in $pageFiles) {
    $processedCount++
    $fullPath = Resolve-Path $file
    Write-Host "`nProcessing [$processedCount/$($pageFiles.Count)]: $file" -ForegroundColor Yellow
    
    try {
        # Read the current content
        $content = Get-Content $fullPath -Raw -Encoding UTF8
        
        if (-not $content) {
            Write-Host "  ⚠️  Empty file, skipping..." -ForegroundColor Yellow
            $skippedCount++
            continue
        }
        
        # Check if Link import already exists (various formats)
        $hasLinkImport = $content -match "import\s+.*Link.*\s+from\s+['""]next/link['""]" -or
                        $content -match "import\s+Link\s+from\s+['""]next/link['""]" -or
                        $content -match "import\s+\{\s*Link\s*\}\s+from\s+['""]next/link['""]"
        
        if ($hasLinkImport) {
            Write-Host "  ✅ Link import already exists, skipping..." -ForegroundColor Green
            $skippedCount++
            continue
        }
        
        # Determine where to insert the import
        $lines = $content -split "`r?`n"
        $insertIndex = 0
        $foundReactImport = $false
        $foundFirstImport = $false
        
        # Find the best position to insert the Link import
        for ($i = 0; $i -lt $lines.Length; $i++) {
            $line = $lines[$i].Trim()
            
            # Skip comments and empty lines at the top
            if ($line -eq "" -or $line.StartsWith("//") -or $line.StartsWith("/*")) {
                continue
            }
            
            # Skip 'use client' directive
            if ($line -eq "'use client';" -or $line -eq '"use client";') {
                $insertIndex = $i + 1
                continue
            }
            
            # If we find React import, insert Link import right after it
            if ($line -match "import\s+.*React.*\s+from\s+['""]react['""]") {
                $insertIndex = $i + 1
                $foundReactImport = $true
                break
            }
            
            # If we find any import statement, note it
            if ($line.StartsWith("import ") -and -not $foundFirstImport) {
                $insertIndex = $i
                $foundFirstImport = $true
                # Don't break here, keep looking for React import
            }
            
            # If we hit non-import content and haven't found React import, 
            # insert at the position we found (before first import or at the beginning)
            if (-not $line.StartsWith("import ") -and -not $line.StartsWith("//") -and $line -ne "" -and -not $foundReactImport) {
                break
            }
        }
        
        # Create new content with Link import
        $newLines = @()
        
        # Add all lines up to insertion point
        for ($i = 0; $i -lt $insertIndex; $i++) {
            if ($i -lt $lines.Length) {
                $newLines += $lines[$i]
            }
        }
        
        # Add the Link import
        $newLines += "import Link from 'next/link';"
        
        # Add remaining lines
        for ($i = $insertIndex; $i -lt $lines.Length; $i++) {
            $newLines += $lines[$i]
        }
        
        # Join lines back together and preserve original line endings
        $newContent = $newLines -join "`n"
        
        # Detect original line ending style
        if ($content -match "`r`n") {
            $newContent = $newContent -replace "`n", "`r`n"
        }
        
        # Write the updated content back to file
        [System.IO.File]::WriteAllText($fullPath, $newContent, [System.Text.Encoding]::UTF8)
        
        Write-Host "  ✅ Added Link import successfully!" -ForegroundColor Green
        $updatedCount++
        
    } catch {
        Write-Host "  ❌ Error processing file: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`n=============================================" -ForegroundColor Green
Write-Host "Summary:" -ForegroundColor Green
Write-Host "  Total files processed: $processedCount" -ForegroundColor White
Write-Host "  Files updated: $updatedCount" -ForegroundColor Green
Write-Host "  Files skipped (already had import): $skippedCount" -ForegroundColor Yellow
Write-Host "  Empty files skipped: $emptyCount" -ForegroundColor Yellow
Write-Host "  Errors encountered: $errorCount" -ForegroundColor Red
Write-Host "=============================================" -ForegroundColor Green
