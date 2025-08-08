# Script to create remaining missing pages
$missingPages = @(
    @{
        slug = "sap-central-finance-online-training"
        template = "sap-central-finance-online-training-in-hyderabad"
        title = "SAP Central Finance Online Training"
        location = ""
    },
    @{
        slug = "workday-training-in-us-uk-canada-australia"
        template = "workday-training-in-hyderabad"
        title = "Workday Training in US, UK, Canada, Dubai and Australia"
        location = "in US, UK, Canada, Dubai and Australia"
    },
    @{
        slug = "sap-sd-training-in-us-uk-canada-australia"
        template = "sap-sd-online-training-in-hyderabad"
        title = "SAP SD Training in US, UK, Canada, Dubai and Australia"
        location = "in US, UK, Canada, Dubai and Australia"
    },
    @{
        slug = "sap-fico-training-in-us-uk-canada-australia"
        template = "sap-fico-online-training-in-hyderabad"
        title = "SAP Fico Training in US, UK, Canada, Dubai and Australia"
        location = "in US, UK, Canada, Dubai and Australia"
    },
    @{
        slug = "sap-ewm-training-in-us-uk-canada-australia"
        template = "sap-ewm-online-training"
        title = "SAP EWM Training in US, UK, Canada, Dubai and Australia"
        location = "in US, UK, Canada, Dubai and Australia"
    },
    @{
        slug = "sap-fico-training-in-hyderabad"
        template = "sap-fico-online-training-in-hyderabad"
        title = "SAP Fico Training in Hyderabad"
        location = "in Hyderabad"
    }
)

foreach ($page in $missingPages) {
    $dir = "src/app/$($page.slug)"
    Write-Output "Creating directory: $dir"
    
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force
        Write-Output "✓ Created directory: $dir"
    } else {
        Write-Output "Directory already exists: $dir"
    }
}

Write-Output ""
Write-Output "Directories created successfully!"
Write-Output "Note: You'll need to manually create the page.js files for each directory."
