const fs = require('fs');
const path = require('path');

// Course name mappings
const courseNames = {
  'azure-devops-online-training-in-chennai': 'Azure DevOps Online Training in Chennai',
  'azure-devops-online-training-in-pune': 'Azure DevOps Online Training in Pune', 
  'azure-devops-online-training-in-noida': 'Azure DevOps Online Training in Noida',
  'pega-training-in-hyderabad': 'Pega Training in Hyderabad',
  'devops-training-in-hyderabad': 'DevOps Training in Hyderabad',
  'mulesoft-training-in-hyderabad': 'MuleSoft Training in Hyderabad',
  'workday-training-in-hyderabad': 'Workday Training in Hyderabad',
  'snowflake-training-in-hyderabad': 'Snowflake Training in Hyderabad',
  'machine-learning-with-python-training-in-hyderabad': 'Machine Learning with Python Training in Hyderabad',
  'hadoop-online-training': 'Hadoop Online Training',
  'python-with-aws-training': 'Python with AWS Training',
  'sap-basis-online-training': 'SAP Basis Online Training',
  'sap-ewm-online-training': 'SAP EWM Online Training',
  'sap-sd-online-training-in-hyderabad': 'SAP SD Online Training in Hyderabad',
  'sap-mm-online-training': 'SAP MM Online Training',
  'sap-fico-online-training-in-hyderabad': 'SAP FICO Online Training in Hyderabad',
  'sas-clinical-online-training-in-hyderabad': 'SAS Clinical Online Training in Hyderabad',
  'simple-finance-training-in-hyderabad': 'SAP S/4 HANA Simple Finance Training in Hyderabad',
  'sap-leonardo-training-hyderabad': 'SAP Leonardo Training Hyderabad',
  'sap-s4Hana-simple-logistics-training': 'SAP S/4 HANA Simple Logistics Training',
  'google-cloud-training': 'Google Cloud Training',
  'full-stack-developer-training-in-hyderabad': 'Full Stack Developer Training in Hyderabad',
  'informatica-mdm-training': 'Informatica MDM Training',
  'edi-training': 'EDI Training'
};

const baseDir = path.join(__dirname, '..', 'src', 'app');

function updatePage(pageName) {
  const pageFile = path.join(baseDir, pageName, 'page.js');
  
  if (!fs.existsSync(pageFile)) {
    console.log(`⚠️  File not found: ${pageName}`);
    return false;
  }
  
  let content = fs.readFileSync(pageFile, 'utf8');
  
  // Skip if already has CourseActionButtons component
  if (content.includes('<CourseActionButtons')) {
    console.log(`✅ Already updated: ${pageName}`);
    return true;
  }
  
  console.log(`🔄 Updating: ${pageName}`);
  
  // Add import if not present
  if (!content.includes("import { CourseActionButtons } from '../components/CourseActionButtons';")) {
    content = content.replace(
      /import FAQ from '\.\.\/components\/FAQ';/,
      "import FAQ from '../components/FAQ';\nimport { CourseActionButtons } from '../components/CourseActionButtons';"
    );
  }
  
  // Find and replace button pattern
  const buttonPattern = /<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<button[^>]*>[\s\S]*?Enquire Now[\s\S]*?<\/button>\s*<button[^>]*>[\s\S]*?Download Course Content[\s\S]*?<\/button>\s*<\/div>/;
  
  const courseName = courseNames[pageName] || pageName.replace(/-/g, ' ');
  
  const replacement = `<CourseActionButtons 
                  courseName="${courseName}"
                  showEnquireNow={true}
                  showDownload={true}
                  showCallNow={false}
                  showJoinNow={false}
                />`;
  
  if (buttonPattern.test(content)) {
    content = content.replace(buttonPattern, replacement);
    
    // Write the updated content back
    fs.writeFileSync(pageFile, content, 'utf8');
    console.log(`✨ Successfully updated: ${pageName}`);
    return true;
  } else {
    console.log(`⚠️  Button pattern not found in: ${pageName}`);
    return false;
  }
}

// Pages that still need updating
const pagesToUpdate = Object.keys(courseNames);

console.log('🚀 Starting batch update...\n');

let updated = 0;
let failed = 0;

pagesToUpdate.forEach(pageName => {
  try {
    if (updatePage(pageName)) {
      updated++;
    } else {
      failed++;
    }
  } catch (error) {
    console.error(`❌ Error updating ${pageName}:`, error.message);
    failed++;
  }
});

console.log(`\n📊 Update Summary:`);
console.log(`✅ Successfully updated: ${updated}`);
console.log(`❌ Failed: ${failed}`);
console.log(`🎉 Batch update completed!\n`);
