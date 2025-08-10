# PowerShell Script to Convert <img> tags to Next.js <Image /> components
# This script safely updates React/Next.js files with proper backup and validation

param(
    [string]$SourcePath = "src",
    [switch]$DryRun = $false,
    [switch]$CreateBackup = $true,
    [switch]$Verbose = $false
)

# Configure error handling
$ErrorActionPreference = "Stop"

# Define colors for output
$Colors = @{
    Success = "Green"
    Warning = "Yellow"
    Error = "Red"
    Info = "Cyan"
    Progress = "Magenta"
}

function Write-ColorOutput {
    param([string]$Message, [string]$Color = "White")
    Write-Host $Message -ForegroundColor $Colors[$Color]
}

function Test-FileIntegrity {
    param([string]$FilePath)
    
    try {
        $content = Get-Content $FilePath -Raw -ErrorAction Stop
        
        # Basic syntax checks
        $openBraces = ($content -split '\{').Count - 1
        $closeBraces = ($content -split '\}').Count - 1
        $openParens = ($content -split '\(').Count - 1
        $closeParens = ($content -split '\)').Count - 1
        
        if ($openBraces -ne $closeBraces) {
            throw "Mismatched braces: $openBraces open, $closeBraces close"
        }
        
        if ($openParens -ne $closeParens) {
            throw "Mismatched parentheses: $openParens open, $closeParens close"
        }
        
        # Check for basic React/JSX structure
        if ($content -match "export\s+(default\s+)?function" -or $content -match "const\s+\w+\s*=.*=>") {
            return $true
        }
        
        Write-ColorOutput "Warning: File may not be a React component: $FilePath" "Warning"
        return $true
    }
    catch {
        Write-ColorOutput "File integrity check failed for ${FilePath}: $($_.Exception.Message)" "Error"
        return $false
    }
}

function Add-NextImageImport {
    param([string]$Content)
    
    # Check if Image import already exists
    if ($Content -match "import\s+Image\s+from\s+['""]next/image['""]") {
        return $Content
    }
    
    # Find the best place to add the import
    $lines = $Content -split "`n"
    $importInserted = $false
    $newLines = @()
    
    for ($i = 0; $i -lt $lines.Count; $i++) {
        $line = $lines[$i]
        $newLines += $line
        
        # Add after existing next imports but before component imports
        if (-not $importInserted -and $line -match "import.*from\s+['""]next/" -and 
            ($i + 1 -lt $lines.Count) -and 
            ($lines[$i + 1] -notmatch "import.*from\s+['""]next/")) {
            $newLines += "import Image from 'next/image';"
            $importInserted = $true
        }
        # Fallback: add after first import
        elseif (-not $importInserted -and $line -match "import\s+" -and 
                ($i + 1 -lt $lines.Count) -and 
                ($lines[$i + 1] -notmatch "import\s+")) {
            $newLines += "import Image from 'next/image';"
            $importInserted = $true
        }
    }
    
    # If no good place found, add at the beginning after any 'use client' directive
    if (-not $importInserted) {
        $finalLines = @()
        $added = $false
        
        foreach ($line in $newLines) {
            $finalLines += $line
            if (-not $added -and ($line -match "^['""]use client['""]" -or $line -match "^'use client'")) {
                $finalLines += ""
                $finalLines += "import Image from 'next/image';"
                $added = $true
            }
        }
        
        if (-not $added) {
            $finalLines = @("import Image from 'next/image';", "") + $finalLines
        }
        
        return $finalLines -join "`n"
    }
    
    return $newLines -join "`n"
}

function Convert-ImgToImage {
    param([string]$Content)
    
    # Pattern to match img tags with src={mainImageUrl} or similar dynamic sources
    $imgPattern = '(?s)<img\s+([^>]*?)src=\{([^}]+)\}([^>]*?)(?:/>|></img>)'
    
    $updatedContent = $Content
    $matches = [regex]::Matches($Content, $imgPattern)
    
    foreach ($match in $matches) {
        $fullMatch = $match.Value
        $beforeSrc = $match.Groups[1].Value
        $srcValue = $match.Groups[2].Value
        $afterSrc = $match.Groups[3].Value
        
        # Extract alt text
        $altMatch = [regex]::Match($fullMatch, 'alt\s*=\s*["\']([^"\']*)["\']')
        $altText = if ($altMatch.Success) { $altMatch.Groups[1].Value } else { "Image" }
        
        # Extract className
        $classMatch = [regex]::Match($fullMatch, 'className\s*=\s*["\']([^"\']*)["\']')
        $className = if ($classMatch.Success) { $classMatch.Value } else { "" }
        
        # Extract style
        $styleMatch = [regex]::Match($fullMatch, 'style\s*=\s*\{[^}]+\}')
        $style = if ($styleMatch.Success) { $styleMatch.Value } else { "" }
        
        # Extract onError handler
        $onErrorMatch = [regex]::Match($fullMatch, 'onError\s*=\s*\{[^}]+\}')
        $onError = if ($onErrorMatch.Success) { $onErrorMatch.Value } else { "" }
        
        # Determine dimensions (default to common image sizes)
        $width = "1200"
        $height = "630"
        
        # Check for specific patterns to adjust dimensions
        if ($className -match "w-20 h-20" -or $altText -match "thumbnail|icon") {
            $width = "80"
            $height = "80"
        }
        elseif ($className -match "h-10|h-12" -or $altText -match "logo") {
            $width = "48"
            $height = "48"
        }
        elseif ($className -match "h-32") {
            $width = "384"
            $height = "128"
        }
        elseif ($style -match "aspectRatio.*1200/630" -or $altText -match "course|training") {
            $width = "1200"
            $height = "630"
        }
        
        # Build the new Image component
        $newImageTag = "<Image"
        $newImageTag += "`n            src={$srcValue}"
        $newImageTag += "`n            alt=`"$altText`""
        $newImageTag += "`n            width={$width}"
        $newImageTag += "`n            height={$height}"
        
        if ($className) {
            $newImageTag += "`n            $className"
        }
        
        if ($style) {
            $newImageTag += "`n            $style"
        }
        
        if ($onError) {
            $newImageTag += "`n            $onError"
        }
        
        $newImageTag += "`n          />"
        
        $updatedContent = $updatedContent.Replace($fullMatch, $newImageTag)
        
        if ($Verbose) {
            Write-ColorOutput "Converted img tag with src={$srcValue}" "Progress"
        }
    }
    
    return $updatedContent
}

function Process-File {
    param([string]$FilePath)
    
    try {
        Write-ColorOutput "Processing: $FilePath" "Info"
        
        # Read original content
        $originalContent = Get-Content $FilePath -Raw -ErrorAction Stop
        
        # Check if file needs processing
        if ($originalContent -notmatch '<img\s+[^>]*src=\{[^}]+\}') {
            if ($Verbose) {
                Write-ColorOutput "  No img tags with dynamic src found, skipping" "Info"
            }
            return @{ Success = $true; Changed = $false; Message = "No changes needed" }
        }
        
        # Validate file integrity
        if (-not (Test-FileIntegrity $FilePath)) {
            return @{ Success = $false; Changed = $false; Message = "File integrity check failed" }
        }
        
        # Create backup if requested
        if ($CreateBackup -and -not $DryRun) {
            $backupPath = "$FilePath.backup.$(Get-Date -Format 'yyyyMMdd-HHmmss')"
            Copy-Item $FilePath $backupPath
            Write-ColorOutput "  Created backup: $backupPath" "Info"
        }
        
        # Process content
        $updatedContent = Add-NextImageImport $originalContent
        $updatedContent = Convert-ImgToImage $updatedContent
        
        # Check if content actually changed
        if ($updatedContent -eq $originalContent) {
            return @{ Success = $true; Changed = $false; Message = "No changes needed" }
        }
        
        # Validate updated content
        $tempFile = [System.IO.Path]::GetTempFileName()
        try {
            Set-Content $tempFile $updatedContent -ErrorAction Stop
            if (-not (Test-FileIntegrity $tempFile)) {
                return @{ Success = $false; Changed = $false; Message = "Updated content failed integrity check" }
            }
        }
        finally {
            if (Test-Path $tempFile) {
                Remove-Item $tempFile -Force
            }
        }
        
        # Apply changes or show dry run
        if ($DryRun) {
            Write-ColorOutput "  [DRY RUN] Would update file" "Warning"
            return @{ Success = $true; Changed = $true; Message = "Would be updated (dry run)" }
        }
        else {
            Set-Content $FilePath $updatedContent -ErrorAction Stop
            Write-ColorOutput "  Successfully updated" "Success"
            return @{ Success = $true; Changed = $true; Message = "Successfully updated" }
        }
    }
    catch {
        Write-ColorOutput "  Error processing file: $($_.Exception.Message)" "Error"
        return @{ Success = $false; Changed = $false; Message = $_.Exception.Message }
    }
}

# Main execution
function Main {
    Write-ColorOutput "=== Next.js Image Tag Converter ===" "Progress"
    Write-ColorOutput "Source Path: $SourcePath" "Info"
    Write-ColorOutput "Dry Run: $DryRun" "Info"
    Write-ColorOutput "Create Backup: $CreateBackup" "Info"
    Write-ColorOutput "" "Info"
    
    # Validate source path
    if (-not (Test-Path $SourcePath)) {
        Write-ColorOutput "Source path does not exist: $SourcePath" "Error"
        exit 1
    }
    
    # Find all JavaScript/TypeScript React files
    $filePatterns = @("*.js", "*.jsx", "*.ts", "*.tsx")
    $allFiles = @()
    
    foreach ($pattern in $filePatterns) {
        $files = Get-ChildItem -Path $SourcePath -Recurse -Filter $pattern | Where-Object { 
            $_.FullName -notmatch "node_modules|\.next|\.git|dist|build" 
        }
        $allFiles += $files
    }
    
    if ($allFiles.Count -eq 0) {
        Write-ColorOutput "No React files found in $SourcePath" "Warning"
        exit 0
    }
    
    Write-ColorOutput "Found $($allFiles.Count) files to process" "Info"
    Write-ColorOutput "" "Info"
    
    # Process files
    $results = @{
        Total = $allFiles.Count
        Success = 0
        Changed = 0
        Failed = 0
        Skipped = 0
    }
    
    foreach ($file in $allFiles) {
        $result = Process-File $file.FullName
        
        if ($result.Success) {
            $results.Success++
            if ($result.Changed) {
                $results.Changed++
            }
            else {
                $results.Skipped++
            }
        }
        else {
            $results.Failed++
        }
    }
    
    # Summary
    Write-ColorOutput "" "Info"
    Write-ColorOutput "=== Summary ===" "Progress"
    Write-ColorOutput "Total files: $($results.Total)" "Info"
    Write-ColorOutput "Successfully processed: $($results.Success)" "Success"
    Write-ColorOutput "Files changed: $($results.Changed)" "Success"
    Write-ColorOutput "Files skipped (no changes): $($results.Skipped)" "Info"
    Write-ColorOutput "Failed: $($results.Failed)" "Error"
    
    if ($DryRun) {
        Write-ColorOutput "" "Warning"
        Write-ColorOutput "This was a DRY RUN. No files were actually modified." "Warning"
        Write-ColorOutput "Run again without -DryRun to apply changes." "Warning"
    }
    
    if ($results.Failed -gt 0) {
        Write-ColorOutput "Some files failed to process. Check the output above for details." "Error"
        exit 1
    }
    
    Write-ColorOutput "Script completed successfully!" "Success"
}

# Run the script
try {
    Main
}
catch {
    Write-ColorOutput "Script failed with error: $($_.Exception.Message)" "Error"
    exit 1
}
