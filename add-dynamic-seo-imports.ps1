# PowerShell script to add DynamicSEOHeaders import to all page.js files
# This script will add the import statement as the second line (after the first import)

# Set the root directory for the vrit project
$rootDir = "C:\Users\annev\workspace\vrit\src\app"

# The import statement to add
$importStatement = "import DynamicSEOHeaders from '../components/DynamicSEOHeaders';"

# Function to check if import already exists
function Test-ImportExists {
    param([string]$filePath)
    $content = Get-Content $filePath -Raw
    return $content -match "import DynamicSEOHeaders"
}

# Function to add import to file
function Add-ImportToFile {
    param([string]$filePath)
    
    try {
        # Read all lines from the file
        $lines = Get-Content $filePath
        
        if ($lines.Count -eq 0) {
            Write-Host "Skipping empty file: $filePath" -ForegroundColor Yellow
            return
        }
        
        # Find the position to insert (after the first import line)
        $insertPosition = -1
        for ($i = 0; $i -lt $lines.Count; $i++) {
            if ($lines[$i] -match "^import\s+.*from\s+.*$") {
                $insertPosition = $i + 1
                break
            }
        }
        
        if ($insertPosition -eq -1) {
            Write-Host "No import statement found in: $filePath" -ForegroundColor Yellow
            return
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
        Write-Host "Added import to: $filePath" -ForegroundColor Green
        
    } catch {
        Write-Host "Error processing file $filePath : $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Main execution
Write-Host "Starting to add DynamicSEOHeaders import to all page.js files..." -ForegroundColor Cyan
Write-Host "Root directory: $rootDir" -ForegroundColor Cyan
Write-Host ""

# Find all page.js files recursively
$pageFiles = Get-ChildItem -Path $rootDir -Name "page.js" -Recurse | ForEach-Object {
    Join-Path $rootDir $_
}

if ($pageFiles.Count -eq 0) {
    Write-Host "No page.js files found in $rootDir" -ForegroundColor Yellow
    exit 1
}

Write-Host "Found $($pageFiles.Count) page.js files" -ForegroundColor Cyan
Write-Host ""

$processedCount = 0
$skippedCount = 0
$errorCount = 0

foreach ($file in $pageFiles) {
    Write-Host "Processing: $file"
    
    # Check if file exists
    if (!(Test-Path $file)) {
        Write-Host "File not found: $file" -ForegroundColor Red
        $errorCount++
        continue
    }
    
    # Check if import already exists
    if (Test-ImportExists -filePath $file) {
        Write-Host "Import already exists, skipping: $file" -ForegroundColor Yellow
        $skippedCount++
        continue
    }
    
    # Add import to file
    try {
        Add-ImportToFile -filePath $file
        $processedCount++
    } catch {
        Write-Host "Failed to process: $file - $($_.Exception.Message)" -ForegroundColor Red
        $errorCount++
    }
    
    Write-Host ""
}

# Summary
Write-Host "=" * 50 -ForegroundColor Cyan
Write-Host "SUMMARY" -ForegroundColor Cyan
Write-Host "=" * 50 -ForegroundColor Cyan
Write-Host "Total files found: $($pageFiles.Count)"
Write-Host "Files processed: $processedCount" -ForegroundColor Green
Write-Host "Files skipped (import exists): $skippedCount" -ForegroundColor Yellow
Write-Host "Files with errors: $errorCount" -ForegroundColor Red
Write-Host ""

if ($processedCount -gt 0) {
    Write-Host "Import statement added to $processedCount files!" -ForegroundColor Green
    Write-Host "Import: $importStatement" -ForegroundColor Cyan
} else {
    Write-Host "No files were modified." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Script completed!" -ForegroundColor Cyan
