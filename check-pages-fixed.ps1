# Page Check Script
$pages = @(
    "workday-training-in-hyderabad",
    "machine-learning-with-python-online-training-in-hyderabad",
    "machine-learning-with-python-training-in-hyderabad",
    "sap-ewm-online-training",
    "full-stack-developer-training-in-hyderabad",
    "sap-central-finance-online-training-in-hyderabad",
    "sap-central-finance-online-training",
    "sas-clinical-online-training-in-hyderabad",
    "sas-clinical-training-in-bangalore",
    "sas-clinical-training-in-chennai",
    "sas-clinical-training-in-pune",
    "sas-clinical-online-training-in-us-uk-canada-australia",
    "salesforce-training-in-us-uk-canada-australia",
    "azure-devops-training-in-us-uk-canada-australia",
    "data-science-training-in-us-uk-canada-australia",
    "pega-training-in-us-uk-canada-australia",
    "machine-learning-with-python-training-in-us-uk-canada-australia",
    "google-cloud-training-in-us-uk-canada-australia",
    "edi-training-in-us-uk-canada-australia",
    "workday-training-in-us-uk-canada-australia",
    "sap-sd-training-in-us-uk-canada-australia",
    "sap-fico-training-in-us-uk-canada-australia",
    "sap-ewm-training-in-us-uk-canada-australia",
    "sap-sd-online-training-in-hyderabad",
    "sap-mm-online-training",
    "sap-fico-online-training-in-hyderabad",
    "sap-fico-training-in-hyderabad",
    "sap-security-training",
    "sap-leonardo-training-hyderabad",
    "sap-s4hana-simple-logistics-training",
    "sap-hana-admin-training",
    "sap-basis-online-training",
    "pega-training-in-hyderabad",
    "python-online-training",
    "python-with-aws-training",
    "mulesoft-training-in-hyderabad",
    "hadoop-online-training",
    "data-science-training-in-hyderabad",
    "salesforce-training-in-hyderabad",
    "servicenow-training-in-hyderabad",
    "snowflake-training-in-hyderabad",
    "informatica-mdm-training",
    "devops-training-in-hyderabad",
    "google-cloud-training",
    "azure-devops-training-in-hyderabad",
    "azure-devops-online-training-in-bangalore",
    "azure-devops-online-training-in-noida",
    "azure-devops-online-training-in-pune",
    "azure-devops-online-training-in-chennai",
    "edi-training",
    "blog",
    "contactus",
    "refund-and-course-rescheduling-policy",
    "terms-and-conditions",
    "privacy-policy",
    "index",
    "aboutus",
    "courses"
)

Write-Output "Checking for pages in src/app directory..."
Write-Output ""

$found = @()
$missing = @()

foreach ($page in $pages) {
    $path = "src/app/$page"
    if (Test-Path $path) {
        $found += $page
        Write-Output "Found: $page"
    } else {
        $missing += $page
        Write-Output "Missing: $page"
    }
}

Write-Output ""
Write-Output "=== SUMMARY ==="
Write-Output "Total pages checked: $($pages.Count)"
Write-Output "Found: $($found.Count)"
Write-Output "Missing: $($missing.Count)"

if ($missing.Count -gt 0) {
    Write-Output ""
    Write-Output "=== MISSING PAGES ==="
    foreach ($page in $missing) {
        Write-Output "- $page"
    }
}
