# PowerShell script to update course pages with CourseActionButtons
$coursePages = @(
    "pega-training-in-hyderabad",
    "devops-training-in-hyderabad",
    "mulesoft-training-in-hyderabad", 
    "workday-training-in-hyderabad",
    "snowflake-training-in-hyderabad",
    "machine-learning-with-python-training-in-hyderabad",
    "hadoop-online-training",
    "data-science-training-in-hyderabad",
    "python-online-training",
    "python-with-aws-training",
    "sap-basis-online-training",
    "sap-ewm-online-training", 
    "sap-sd-online-training-in-hyderabad",
    "sap-mm-online-training",
    "sap-fico-online-training-in-hyderabad",
    "sas-clinical-online-training-in-hyderabad",
    "sas-clinical-training-in-bangalore",
    "sas-clinical-training-in-chennai",
    "sas-clinical-training-in-pune",
    "sas-clinical-online-training-in-us-uk-canada-australia",
    "simple-finance-training-in-hyderabad",
    "sap-leonardo-training-hyderabad",
    "sap-security-training",
    "sap-s4Hana-simple-logistics-training",
    "google-cloud-training",
    "full-stack-developer-training-in-hyderabad",
    "informatica-mdm-training",
    "edi-training",
    "azure-devops-online-training-in-bangalore", 
    "azure-devops-online-training-in-chennai",
    "azure-devops-online-training-in-pune",
    "azure-devops-online-training-in-noida"
)

function Get-CourseName($pageName) {
    switch -Wildcard ($pageName) {
        "*azure-devops*bangalore*" { return "Azure DevOps Online Training in Bangalore" }
        "*azure-devops*chennai*" { return "Azure DevOps Online Training in Chennai" }
        "*azure-devops*pune*" { return "Azure DevOps Online Training in Pune" }
        "*azure-devops*noida*" { return "Azure DevOps Online Training in Noida" }
        "*pega*" { return "Pega Training in Hyderabad" }
        "*devops*" { return "DevOps Training in Hyderabad" }
        "*mulesoft*" { return "MuleSoft Training in Hyderabad" }
        "*workday*" { return "Workday Training in Hyderabad" }
        "*snowflake*" { return "Snowflake Training in Hyderabad" }
        "*machine-learning*" { return "Machine Learning with Python Training in Hyderabad" }
        "*hadoop*" { return "Hadoop Online Training" }
        "*data-science*" { return "Data Science Training in Hyderabad" }
        "*python-online*" { return "Python Online Training" }
        "*python-with-aws*" { return "Python with AWS Training" }
        "*sap-basis*" { return "SAP Basis Online Training" }
        "*sap-ewm*" { return "SAP EWM Online Training" }
        "*sap-sd*" { return "SAP SD Online Training in Hyderabad" }
        "*sap-mm*" { return "SAP MM Online Training" }
        "*sap-fico*" { return "SAP FICO Online Training in Hyderabad" }
        "*sas-clinical*hyderabad*" { return "SAS Clinical Online Training in Hyderabad" }
        "*sas-clinical*bangalore*" { return "SAS Clinical Training in Bangalore" }
        "*sas-clinical*chennai*" { return "SAS Clinical Training in Chennai" }
        "*sas-clinical*pune*" { return "SAS Clinical Training in Pune" }
        "*sas-clinical*us-uk*" { return "SAS Clinical Online Training in US, UK, Canada, Australia" }
        "*simple-finance*" { return "SAP S/4 HANA Simple Finance Training in Hyderabad" }
        "*sap-leonardo*" { return "SAP Leonardo Training Hyderabad" }
        "*sap-security*" { return "SAP Security Training" }
        "*sap-s4hana*" { return "SAP S/4 HANA Simple Logistics Training" }
        "*google-cloud*" { return "Google Cloud Training" }
        "*full-stack*" { return "Full Stack Developer Training in Hyderabad" }
        "*informatica*" { return "Informatica MDM Training" }
        "*edi*" { return "EDI Training" }
        default { return $pageName -replace '-', ' ' }
    }
}

Write-Host "🚀 Starting batch update of course pages..." -ForegroundColor Green

foreach ($course in $coursePages) {
    $pageFile = "src\app\$course\page.js"
    
    if (-not (Test-Path $pageFile)) {
        Write-Host "⚠️  File not found: $pageFile" -ForegroundColor Yellow
        continue
    }
    
    $content = Get-Content $pageFile -Raw
    
    if ($content -match "CourseActionButtons") {
        Write-Host "✅ Already updated: $course" -ForegroundColor Green
        continue
    }
    
    Write-Host "🔄 Processing: $course" -ForegroundColor Cyan
    
    $courseName = Get-CourseName $course
    Write-Host "📝 Course name: $courseName" -ForegroundColor White
    
    # Add import
    $content = $content -replace 
        "(import FAQ from '../components/FAQ';)", 
        "`$1`nimport { CourseActionButtons } from '../components/CourseActionButtons';"
    
    # Find and replace button patterns
    $buttonPattern = '(\s*)<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<button[^>]*>[\s\S]*?Enquire Now[\s\S]*?</button>\s*<button[^>]*>[\s\S]*?Download Course Content[\s\S]*?</button>\s*</div>'
    
    $replacement = "`$1<CourseActionButtons `n`$1  courseName=`"$courseName`"`n`$1  showEnquireNow={true}`n`$1  showDownload={true}`n`$1  showCallNow={false}`n`$1  showJoinNow={false}`n`$1/>"
    
    $content = $content -replace $buttonPattern, $replacement
    
    # Save the updated content
    Set-Content -Path $pageFile -Value $content -Encoding UTF8
    
    Write-Host "✨ Updated: $course" -ForegroundColor Green
}

Write-Host "`n🎉 Batch update completed!" -ForegroundColor Green
