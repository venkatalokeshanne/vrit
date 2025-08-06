#!/bin/bash

# List of course pages to update
courses=(
  "pega-training-in-hyderabad"
  "devops-training-in-hyderabad" 
  "mulesoft-training-in-hyderabad"
  "workday-training-in-hyderabad"
  "snowflake-training-in-hyderabad"
  "machine-learning-with-python-training-in-hyderabad"
  "hadoop-online-training"
  "data-science-training-in-hyderabad"
  "python-online-training"
  "python-with-aws-training"
  "sap-basis-online-training"
  "sap-ewm-online-training"
  "sap-sd-online-training-in-hyderabad"
  "sap-mm-online-training"
  "sap-fico-online-training-in-hyderabad"
  "sas-clinical-online-training-in-hyderabad"
  "sas-clinical-training-in-bangalore"
  "sas-clinical-training-in-chennai"
  "sas-clinical-training-in-pune"
  "sas-clinical-online-training-in-us-uk-canada-australia"
  "simple-finance-training-in-hyderabad"
  "sap-leonardo-training-hyderabad"
  "sap-security-training"
  "sap-s4Hana-simple-logistics-training"
  "google-cloud-training"
  "full-stack-developer-training-in-hyderabad"
  "informatica-mdm-training"
  "edi-training"
  "azure-devops-online-training-in-bangalore"
  "azure-devops-online-training-in-chennai"
  "azure-devops-online-training-in-pune"
  "azure-devops-online-training-in-noida"
)

echo "🚀 Starting batch update of course pages..."

for course in "${courses[@]}"; do
  page_file="src/app/$course/page.js"
  
  if [[ ! -f "$page_file" ]]; then
    echo "⚠️  File not found: $page_file"
    continue
  fi
  
  echo "🔄 Processing: $course"
  
  # Check if already updated
  if grep -q "CourseActionButtons" "$page_file"; then
    echo "✅ Already updated: $course"
    continue
  fi
  
  # Create a backup
  cp "$page_file" "${page_file}.bak"
  
  # Extract course name for proper capitalization
  case "$course" in
    *"azure-devops"*) course_name="Azure DevOps Training" ;;
    *"pega"*) course_name="Pega Training" ;;
    *"devops"*) course_name="DevOps Training" ;;
    *"mulesoft"*) course_name="MuleSoft Training" ;;
    *"workday"*) course_name="Workday Training" ;;
    *"snowflake"*) course_name="Snowflake Training" ;;
    *"machine-learning"*) course_name="Machine Learning with Python Training" ;;
    *"hadoop"*) course_name="Hadoop Online Training" ;;
    *"data-science"*) course_name="Data Science Training" ;;
    *"python-online"*) course_name="Python Online Training" ;;
    *"python-with-aws"*) course_name="Python with AWS Training" ;;
    *"sap-basis"*) course_name="SAP Basis Online Training" ;;
    *"sap-ewm"*) course_name="SAP EWM Online Training" ;;
    *"sap-sd"*) course_name="SAP SD Online Training" ;;
    *"sap-mm"*) course_name="SAP MM Online Training" ;;
    *"sap-fico"*) course_name="SAP FICO Online Training" ;;
    *"sas-clinical"*) course_name="SAS Clinical Training" ;;
    *"simple-finance"*) course_name="SAP S/4 HANA Simple Finance Training" ;;
    *"sap-leonardo"*) course_name="SAP Leonardo Training" ;;
    *"sap-security"*) course_name="SAP Security Training" ;;
    *"sap-s4hana"*) course_name="SAP S/4 HANA Simple Logistics Training" ;;
    *"google-cloud"*) course_name="Google Cloud Training" ;;
    *"full-stack"*) course_name="Full Stack Developer Training" ;;
    *"informatica"*) course_name="Informatica MDM Training" ;;
    *"edi"*) course_name="EDI Training" ;;
    *) course_name="$course" ;;
  esac
  
  echo "📝 Course name: $course_name"
  
done

echo "✨ Batch update completed!"
