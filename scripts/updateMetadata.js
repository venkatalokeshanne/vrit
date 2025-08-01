import fs from 'fs';
import path from 'path';
import { getAllCourseSlugs } from '../src/utils/metadata.js';

const courseSlugs = getAllCourseSlugs();

// Define pages that need to be updated
const pagesToUpdate = [
  'aboutus',
  'courses', 
  'contactus',
  'services',
  'privacy-policy',
  'terms-and-conditions',
  'refund-and-course-rescheduling-policy',
  'blog',
  // Course pages
  'servicenow-training-in-hyderabad',
  'salesforce-training-in-hyderabad',
  'sap-fico-training-in-hyderabad',
  'pega-training-in-hyderabad',
  'azure-devops-training-in-hyderabad',
  'mulesoft-training-in-hyderabad',
  'sas-clinical-online-training-in-hyderabad',
  'sas-clinical-training-in-hyderabad',
  'sap-basis-training-in-hyderabad',
  'sap-ewm-training-in-hyderabad',
  'sap-hana-admin-training-in-hyderabad',
  's4-hana-finance-training-in-hyderabad',
  'sap-leonardo-training-in-hyderabad',
  'sap-security-grc-training-in-hyderabad',
  'sap-s4hana-simple-logistics-training-in-hyderabad',
  'data-science-training-in-hyderabad',
  'python-online-training',
  'python-with-aws-training',
  'workday-training-in-hyderabad',
  'machine-learning-with-python-training-in-hyderabad',
  'devops-training-in-hyderabad',
  'informatica-mdm-training',
  'full-stack-developer-training-in-hyderabad',
  'edi-training',
  'hadoop-online-training'
];

console.log('Available course slugs:', courseSlugs);
console.log('Pages to update:', pagesToUpdate);
console.log('Total pages:', pagesToUpdate.length);

// This script helps identify which pages exist and need metadata integration
