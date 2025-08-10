# PowerShell script to fix all SAP course pages by replacing <a> tags with <Link> components

# List of SAP course pages that need fixing
$sapPages = @(
    "sap-leonardo-training-hyderabad",
    "sap-mm-online-training", 
    "sap-ewm-online-training",
    "sap-hana-admin-training",
    "sap-sd-online-training-in-hyderabad",
    "sap-s4Hana-simple-logistics-training",
    "sap-security-training",
    "sap-fico-training-in-hyderabad"
)

foreach ($page in $sapPages) {
    $filePath = "src\app\$page\page.js"
    
    if (Test-Path $filePath) {
        Write-Host "Fixing $filePath..."
        
        # Read the file content
        $content = Get-Content -Path $filePath -Raw
        
        # Add Link import if not present
        if ($content -notmatch "import Link from 'next/link';") {
            $content = $content -replace "import React from 'react';", "import React from 'react';`nimport Link from 'next/link';"
        }
        
        # Replace all <a href="/sap- with <Link href="/sap-
        $content = $content -replace '<a href="(/sap-[^"]*)"', '<Link href="$1"'
        
        # Replace all </a> with </Link>
        $content = $content -replace '</a>', '</Link>'
        
        # Write the content back to the file
        Set-Content -Path $filePath -Value $content -NoNewline
        
        Write-Host "Fixed $filePath"
    }
    else {
        Write-Host "File not found: $filePath"
    }
}

Write-Host "All SAP course pages have been fixed!"
