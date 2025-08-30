const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
});

async function addSimpleFinanceMetadata() {
  console.log('🚀 Adding Simple Finance course metadata to Sanity...');
  
  try {
    const courseMetadata = {
      _type: 'courseMetadata',
      slug: {
        _type: 'slug',
        current: 'simple-finance-training-in-hyderabad'
      },
      title: 'S/4 HANA Finance Training in Hyderabad | Simple Finance Course | VR IT Solutions',
      description: 'Join the best S/4 HANA Finance (Simple Finance) training in Hyderabad at VR IT Solutions. Learn Universal Journal, Asset Accounting, Migration, and more. 40 days course with placement support. Call +91-9032734343',
      keywords: [
        'S/4 HANA Finance Training',
        'Simple Finance Training Hyderabad',
        'SAP S4 HANA Finance Course',
        'Universal Journal Training',
        'S4 HANA Migration Training',
        'SAP Finance Certification',
        'VR IT Solutions',
        'S/4 HANA Finance Hyderabad',
        'Simple Finance Course',
        'SAP S4 Finance Training',
        'Asset Accounting S4 HANA',
        'Cost Center Accounting',
        'S4 HANA Finance Migration',
        'Universal Journal Concept',
        'SAP Finance Training Institute'
      ],
      organizationName: 'VR IT Solutions',
      streetAddress: '506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet, Hyderabad, Telangana',
      postalCode: '500016',
      reviewCount: '150',
      ratingValue: '4.8',
      ogTitle: 'S/4 HANA Finance Training in Hyderabad | Simple Finance Course',
      ogDescription: 'Master S/4 HANA Finance with hands-on training at VR IT Solutions Hyderabad. Learn Universal Journal, Migration, Asset Accounting. 40 days course with job support.',
      twitterTitle: 'S/4 HANA Finance Training in Hyderabad | VR IT Solutions',
      twitterDescription: 'Master S/4 HANA Finance with hands-on training at VR IT Solutions Hyderabad. Learn Universal Journal, Migration, Asset Accounting. 40 days course.',
      canonical: 'https://vritsolutions.in/simple-finance-training-in-hyderabad',
      ogUrl: 'https://vritsolutions.in/simple-finance-training-in-hyderabad',
      twitterUrl: 'https://vritsolutions.in/simple-finance-training-in-hyderabad',
      hreflang: 'en-IN',
      seoHeaders: [
        {
          _type: 'object',
          level: 1,
          text: 'S/4 HANA Finance Training in Hyderabad - Best Simple Finance Course'
        },
        {
          _type: 'object',
          level: 2,
          text: 'SAP S/4 HANA Finance Simple Finance Training Institute'
        },
        {
          _type: 'object',
          level: 2,
          text: 'S/4 HANA Finance Course Curriculum and Topics Covered'
        },
        {
          _type: 'object',
          level: 3,
          text: 'Universal Journal Concept Training Hyderabad'
        },
        {
          _type: 'object',
          level: 3,
          text: 'S/4 HANA Finance Migration Course'
        },
        {
          _type: 'object',
          level: 3,
          text: 'Asset Accounting in S/4 HANA Finance'
        },
        {
          _type: 'object',
          level: 4,
          text: 'Cost Center Accounting in S/4 HANA'
        },
        {
          _type: 'object',
          level: 4,
          text: 'General Ledger Account and Cost Element Merging'
        },
        {
          _type: 'object',
          level: 4,
          text: 'Business Partner Configuration for Vendor Customer Master'
        },
        {
          _type: 'object',
          level: 5,
          text: 'S/4 HANA Finance Training with Job Placement Support'
        },
        {
          _type: 'object',
          level: 5,
          text: 'Online and Classroom S/4 HANA Finance Training Options'
        },
        {
          _type: 'object',
          level: 6,
          text: 'S/4 HANA Finance Certification Preparation Course'
        }
      ]
    };

    // Create the document in Sanity
    const result = await client.create(courseMetadata);
    
    console.log('✅ Successfully added Simple Finance metadata to Sanity!');
    console.log('📄 Document ID:', result._id);
    console.log('🔗 Document URL:', `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.sanity.studio/desk/courseMetadata;${result._id}`);
    
    return result;
    
  } catch (error) {
    console.error('❌ Error adding metadata to Sanity:', error.message);
    
    if (error.statusCode === 401) {
      console.error('🔐 Authentication failed. Please check your SANITY_API_TOKEN.');
    } else if (error.statusCode === 409) {
      console.error('⚠️  Document with this slug might already exist.');
    }
    
    throw error;
  }
}

// Run the script
if (require.main === module) {
  addSimpleFinanceMetadata()
    .then(() => {
      console.log('🎉 Script completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Script failed:', error.message);
      process.exit(1);
    });
}

module.exports = addSimpleFinanceMetadata;
