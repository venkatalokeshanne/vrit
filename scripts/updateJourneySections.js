const fs = require('fs');
const path = require('path');

// Pages that have the "Ready to Start Your Journey" section
const pagesWithSection = [
  'data-science-training-in-hyderabad',
  'python-online-training', 
  'workday-training-in-hyderabad',
  'servicenow-training-in-hyderabad',
  'python-with-aws-training',
  'machine-learning-with-python-training-in-hyderabad',
  'informatica-mdm-training',
  'hadoop-online-training',
  'full-stack-developer-training-in-hyderabad',
  'edi-training',
  'devops-training-in-hyderabad'
];

// Course name mappings for proper display
const courseNames = {
  'data-science-training-in-hyderabad': 'Data Science Training in Hyderabad',
  'python-online-training': 'Python Online Training',
  'workday-training-in-hyderabad': 'Workday Training in Hyderabad',
  'servicenow-training-in-hyderabad': 'ServiceNow Training in Hyderabad',
  'python-with-aws-training': 'Python with AWS Training',
  'machine-learning-with-python-training-in-hyderabad': 'Machine Learning with Python Training in Hyderabad',
  'informatica-mdm-training': 'Informatica MDM Training',
  'hadoop-online-training': 'Hadoop Online Training',
  'full-stack-developer-training-in-hyderabad': 'Full Stack Developer Training in Hyderabad',
  'edi-training': 'EDI Training',
  'devops-training-in-hyderabad': 'DevOps Training in Hyderabad'
};

const baseDir = path.join(__dirname, '..', 'src', 'app');

function updateJourneySection(pageName) {
  const pageFile = path.join(baseDir, pageName, 'page.js');
  
  if (!fs.existsSync(pageFile)) {
    console.log(`⚠️  File not found: ${pageName}`);
    return false;
  }
  
  let content = fs.readFileSync(pageFile, 'utf8');
  const courseName = courseNames[pageName];
  
  console.log(`🔄 Updating journey section for: ${pageName}`);
  
  // Pattern to match the button container in journey section
  const buttonContainerPattern = /<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<button className="bg-gradient-to-r from-orange-500[^>]*>[\s\S]*?Join Now[\s\S]*?<\/button>\s*<button className="border border-pink-400[^>]*>[\s\S]*?Call \+91-9032734343[\s\S]*?<\/button>\s*<\/div>/;
  
  const replacement = `<CourseActionButtons 
                  courseName="${courseName}"
                  phoneNumber="+91-9032734343"
                  showEnquireNow={false}
                  showDownload={false}
                  showCallNow={true}
                  showJoinNow={true}
                  layout="horizontal"
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                />`;
  
  if (buttonContainerPattern.test(content)) {
    content = content.replace(buttonContainerPattern, replacement);
    
    // Write the updated content back
    fs.writeFileSync(pageFile, content, 'utf8');
    console.log(`✨ Successfully updated: ${pageName}`);
    return true;
  } else {
    console.log(`⚠️  Could not find button pattern in: ${pageName}`);
    return false;
  }
}

console.log('🚀 Starting journey section updates...\n');

let updated = 0;
let failed = 0;

pagesWithSection.forEach(pageName => {
  try {
    if (updateJourneySection(pageName)) {
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
console.log(`🎉 Journey section updates completed!\n`);
