const fs = require('fs');
const path = require('path');

// List of course pages to update
const coursePages = [
  'salesforce-training-in-hyderabad',
  'azure-devops-training-in-hyderabad',
  'azure-devops-online-training-in-bangalore',
  'azure-devops-online-training-in-chennai',
  'azure-devops-online-training-in-pune',
  'azure-devops-online-training-in-noida',
  'pega-training-in-hyderabad',
  'devops-training-in-hyderabad',
  'mulesoft-training-in-hyderabad',
  'workday-training-in-hyderabad',
  'snowflake-training-in-hyderabad',
  'machine-learning-with-python-training-in-hyderabad',
  'hadoop-online-training',
  'data-science-training-in-hyderabad',
  'python-online-training',
  'python-with-aws-training',
  'sap-basis-online-training',
  'sap-ewm-online-training',
  'sap-sd-online-training-in-hyderabad',
  'sap-mm-online-training',
  'sap-fico-online-training-in-hyderabad',
  'sas-clinical-online-training-in-hyderabad',
  'sas-clinical-training-in-bangalore',
  'sas-clinical-training-in-chennai',
  'sas-clinical-training-in-pune',
  'sas-clinical-online-training-in-us-uk-canada-australia',
  'sap-hana-admin-training',
  'simple-finance-training-in-hyderabad',
  'sap-leonardo-training-hyderabad',
  'sap-security-training',
  'sap-s4Hana-simple-logistics-training',
  'google-cloud-training',
  'full-stack-developer-training-in-hyderabad',
  'informatica-mdm-training',
  'edi-training'
];

const baseDir = path.join(__dirname, '..', 'src', 'app');

function checkPageStatus(pageName) {
  const pageFile = path.join(baseDir, pageName, 'page.js');
  
  if (!fs.existsSync(pageFile)) {
    return { status: 'not_found', hasImport: false, hasComponent: false };
  }
  
  const content = fs.readFileSync(pageFile, 'utf8');
  
  const hasImport = content.includes("import { CourseActionButtons } from '../components/CourseActionButtons';");
  const hasComponent = content.includes('<CourseActionButtons');
  const hasOldButtons = content.includes('Enquire Now') && content.includes('<button');
  
  let status = 'pending';
  if (hasImport && hasComponent) {
    status = 'completed';
  } else if (hasImport && !hasComponent) {
    status = 'import_only';
  } else if (hasOldButtons) {
    status = 'needs_update';
  }
  
  return { status, hasImport, hasComponent, hasOldButtons };
}

// Process each page
let completed = 0;
let importOnly = 0;
let needsUpdate = 0;
let notFound = 0;

console.log('\n📊 COURSE PAGES IMPLEMENTATION STATUS\n');
console.log('=====================================\n');

coursePages.forEach(pageName => {
  const result = checkPageStatus(pageName);
  
  switch (result.status) {
    case 'completed':
      console.log(`✅ COMPLETED: ${pageName}`);
      completed++;
      break;
    case 'import_only':
      console.log(`🟡 IMPORT ONLY: ${pageName} (needs component implementation)`);
      importOnly++;
      break;
    case 'needs_update':
      console.log(`🔄 NEEDS UPDATE: ${pageName} (has old buttons)`);
      needsUpdate++;
      break;
    case 'not_found':
      console.log(`⚠️  NOT FOUND: ${pageName}`);
      notFound++;
      break;
  }
});

console.log('\n=====================================');
console.log('📈 SUMMARY:');
console.log(`✅ Fully Completed: ${completed}/${coursePages.length}`);
console.log(`🟡 Import Only: ${importOnly}/${coursePages.length}`);
console.log(`🔄 Needs Update: ${needsUpdate}/${coursePages.length}`);
console.log(`⚠️  Not Found: ${notFound}/${coursePages.length}`);
console.log('=====================================\n');

const implementationPercentage = Math.round((completed / coursePages.length) * 100);
console.log(`📊 IMPLEMENTATION PROGRESS: ${implementationPercentage}%\n`);

if (completed === coursePages.length) {
  console.log('🎉 ALL PAGES HAVE BEEN SUCCESSFULLY IMPLEMENTED! 🎉\n');
} else {
  console.log('⚡ PAGES STILL NEEDING WORK:');
  coursePages.forEach(pageName => {
    const result = checkPageStatus(pageName);
    if (result.status !== 'completed') {
      console.log(`   - ${pageName} (${result.status.replace('_', ' ')})`);
    }
  });
  console.log('');
}
