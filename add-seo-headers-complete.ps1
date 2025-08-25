# Enhanced PowerShell script to add DynamicSEOHeaders import and component usage to all page.js files
# This script will:
# 1. Add the import statement after the first import line
# 2. Add the <DynamicSEOHeaders> component in the return statement

# Set the root directory for the vrit project
$rootDir = "C:\Users\annev\workspace\vrit\src\app"

# The import statement to add
$importStatement = "import DynamicSEOHeaders from '../components/DynamicSEOHeaders';"

# The component usage to add (will be inserted after return ( and <>)
$componentUsage = "      <DynamicSEOHeaders seoHeaders={courseMetadata?.seoHeaders} />"

# Function to check if import already exists
function Test-ImportExists {
    param([string]$filePath)
    $content = Get-Content $filePath -Raw
    return $content -match "import DynamicSEOHeaders"
}

# Function to check if component usage already exists
function Test-ComponentExists {
    param([string]$filePath)
    $content = Get-Content $filePath -Raw
    return $content -match "<DynamicSEOHeaders"
}

# Function to add import to file
function Add-ImportToFile {
    param([string]$filePath)
    
    try {
        # Read all lines from the file
        $lines = Get-Content $filePath
        
        if ($lines.Count -eq 0) {
            Write-Host "  Skipping empty file" -ForegroundColor Yellow
            return $false
        }
        
        # Find the position to insert (after the first import line)
        $insertPosition = -1
        for ($i = 0; $i -lt $lines.Count; $i++) {
            if ($lines[$i] -match "^import\s+.*from\s+['\"].*['\"];?\s*$") {
                $insertPosition = $i + 1
                break
            }
        }
        
        if ($insertPosition -eq -1) {
            Write-Host "  No import statement found" -ForegroundColor Yellow
            return $false
        }
        
        # Create new array with the import statement inserted
        $newLines = @()
        for ($i = 0; $i -lt $lines.Count; $i++) {
            $newLines += $lines[$i]
            if ($i -eq $insertPosition - 1) {
                $newLines += $importStatement
            }
        }
        
        # Write back to file
        $newLines | Set-Content $filePath -Encoding UTF8
        Write-Host "  ✓ Added import statement" -ForegroundColor Green
        return $true
        
    } catch {
        Write-Host "  ✗ Error adding import: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Function to add component usage to file
function Add-ComponentToFile {
    param([string]$filePath)
    
    try {
        # Read all lines from the file
        $lines = Get-Content $filePath
        
        if ($lines.Count -eq 0) {
            Write-Host "  Skipping empty file for component" -ForegroundColor Yellow
            return $false
        }
        
        # Find the position to insert (after return ( and <> pattern)
        $insertPosition = -1
        $inReturnStatement = $false
        
        for ($i = 0; $i -lt $lines.Count; $i++) {
            $line = $lines[$i].Trim()
            
            # Look for return statement
            if ($line -match "return\s*\(" -or ($inReturnStatement -and $line -match "^\s*<>")) {
                $inReturnStatement = $true
                
                # If we find <> on the same line or next lines, insert after it
                if ($line -match "^\s*<>\s*$" -or $line -match "return\s*\(\s*<>\s*$") {
                    $insertPosition = $i + 1
                    break
                }
            }
        }
        
        if ($insertPosition -eq -1) {
            Write-Host "  No suitable insertion point found for component" -ForegroundColor Yellow
            return $false
        }
        
        # Create new array with the component usage inserted
        $newLines = @()
        for ($i = 0; $i -lt $lines.Count; $i++) {
            $newLines += $lines[$i]
            if ($i -eq $insertPosition - 1) {
                $newLines += $componentUsage
            }
        }
        
        # Write back to file
        $newLines | Set-Content $filePath -Encoding UTF8
        Write-Host "  ✓ Added component usage" -ForegroundColor Green
        return $true
        
    } catch {
        Write-Host "  ✗ Error adding component: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Main execution
Write-Host "🚀 Starting to add DynamicSEOHeaders to all page.js files..." -ForegroundColor Cyan
Write-Host "📁 Root directory: $rootDir" -ForegroundColor Cyan
Write-Host ""

# Find all page.js files recursively
$pageFiles = Get-ChildItem -Path $rootDir -Name "page.js" -Recurse | ForEach-Object {
    $fullPath = Get-ChildItem -Path $rootDir -Filter "page.js" -Recurse | Where-Object { $_.Name -eq "page.js" }
}

$pageFiles = Get-ChildItem -Path $rootDir -Filter "page.js" -Recurse

if ($pageFiles.Count -eq 0) {
    Write-Host "❌ No page.js files found in $rootDir" -ForegroundColor Yellow
    exit 1
}

Write-Host "📄 Found $($pageFiles.Count) page.js files" -ForegroundColor Cyan
Write-Host ""

$processedCount = 0
$skippedCount = 0
$errorCount = 0

foreach ($file in $pageFiles) {
    $relativePath = $file.FullName.Replace("$rootDir\", "")
    Write-Host "🔄 Processing: $relativePath" -ForegroundColor White
    
    $importAdded = $false
    $componentAdded = $false
    $fileModified = $false
    
    # Check and add import
    if (Test-ImportExists -filePath $file.FullName) {
        Write-Host "  ⚠️  Import already exists" -ForegroundColor Yellow
    } else {
        $importAdded = Add-ImportToFile -filePath $file.FullName
        if ($importAdded) { $fileModified = $true }
    }
    
    # Check and add component
    if (Test-ComponentExists -filePath $file.FullName) {
        Write-Host "  ⚠️  Component already exists" -ForegroundColor Yellow
    } else {
        $componentAdded = Add-ComponentToFile -filePath $file.FullName
        if ($componentAdded) { $fileModified = $true }
    }
    
    # Update counters
    if ($fileModified) {
        $processedCount++
        Write-Host "  ✅ File updated successfully!" -ForegroundColor Green
    } elseif (!$importAdded -and !$componentAdded) {
        if ((Test-ImportExists -filePath $file.FullName) -and (Test-ComponentExists -filePath $file.FullName)) {
            $skippedCount++
            Write-Host "  ⏭️  Already up to date" -ForegroundColor Yellow
        } else {
            $errorCount++
            Write-Host "  ❌ Failed to update" -ForegroundColor Red
        }
    }
    
    Write-Host ""
}

# Summary
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host "📊 SUMMARY" -ForegroundColor Cyan
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host "📄 Total files found: $($pageFiles.Count)"
Write-Host "✅ Files modified: $processedCount" -ForegroundColor Green
Write-Host "⏭️  Files skipped (already updated): $skippedCount" -ForegroundColor Yellow
Write-Host "❌ Files with errors: $errorCount" -ForegroundColor Red
Write-Host ""

if ($processedCount -gt 0) {
    Write-Host "🎉 Successfully updated $processedCount files!" -ForegroundColor Green
    Write-Host "📝 Import added: $importStatement" -ForegroundColor Cyan
    Write-Host "🧩 Component added: $componentUsage" -ForegroundColor Cyan
} else {
    Write-Host "ℹ️  No files were modified." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✨ Script completed!" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor White
Write-Host "1. Review the changes in your files" -ForegroundColor Gray
Write-Host "2. Test your application to ensure everything works" -ForegroundColor Gray
Write-Host "3. Add SEO headers in your Sanity Studio" -ForegroundColor Gray
