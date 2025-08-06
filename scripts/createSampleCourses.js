const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'osamtsqm',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk0oq9EjJvBgq7xTvTjqWArO7KQ3k1ipmU6A8XNbWw6N9ltufQFbETH1IfvlZ6DFp9ku9JH2UqrJSC2iS6qEcI9mvkhZCREcAkACe5IXQBQNeryATypuElMcckk7x91S5RPLC6uzTkYnCWZMOhiUe56HQXFYWB71IcoWTLgvmvm6xxgVETgN',
});

// Sample course metadata for testing
const sampleCourses = [
  {
    _type: 'courseMetadata',
    slug: 'sap-fico-online-training-in-hyderabad',
    seo: {
      title: 'SAP FICO Online Training in Hyderabad - VR IT Solutions',
      description: 'Best SAP FICO online training in Hyderabad with expert trainers, real-time projects, and 100% job assistance. Join VR IT Solutions for comprehensive SAP FICO certification.',
      keywords: ['sap fico training', 'sap fico online training', 'sap fico hyderabad', 'sap finance training'],
    },
    courseTitle: 'SAP FICO Online Training',
    shortDescription: 'Comprehensive SAP Finance and Controlling (FICO) training with hands-on experience and real-time projects.',
    category: 'SAP',
    pricing: {
      price: 25000,
      currency: 'INR',
      discountedPrice: 20000,
    },
    courseDetails: {
      duration: '45 days',
      mode: 'Online',
      level: 'Beginner to Advanced',
      language: 'English',
    },
    features: [
      'Expert trainers with 10+ years experience',
      'Real-time projects and case studies',
      '100% job assistance',
      'Flexible timing',
      'Course completion certificate',
    ],
    structuredData: {
      courseCode: 'SAP_FICO_HYD',
      provider: 'VR IT Solutions',
    },
    isActive: true,
  },
  {
    _type: 'courseMetadata',
    slug: 'python-online-training',
    seo: {
      title: 'Python Online Training - Learn Python Programming | VR IT Solutions',
      description: 'Master Python programming with our comprehensive online training. Learn from basics to advanced concepts with real-time projects and expert guidance.',
      keywords: ['python training', 'python online course', 'learn python', 'python programming'],
    },
    courseTitle: 'Python Programming Training',
    shortDescription: 'Complete Python programming course covering basics to advanced concepts including web development, data science, and automation.',
    category: 'Programming',
    pricing: {
      price: 15000,
      currency: 'INR',
      discountedPrice: 12000,
    },
    courseDetails: {
      duration: '60 days',
      mode: 'Online',
      level: 'Beginner to Advanced',
      language: 'English',
    },
    features: [
      'Hands-on coding practice',
      'Real-world projects',
      'Django and Flask frameworks',
      'Data science libraries',
      'Industry mentorship',
    ],
    structuredData: {
      courseCode: 'PYTHON_ONLINE',
      provider: 'VR IT Solutions',
    },
    isActive: true,
  },
  {
    _type: 'courseMetadata',
    slug: 'azure-devops-training-in-hyderabad',
    seo: {
      title: 'Azure DevOps Training in Hyderabad - VR IT Solutions',
      description: 'Best Azure DevOps training in Hyderabad with hands-on labs, real-time scenarios, and expert trainers. Master CI/CD pipelines and cloud deployment.',
      keywords: ['azure devops training', 'devops hyderabad', 'ci cd training', 'azure pipeline training'],
    },
    courseTitle: 'Azure DevOps Training',
    shortDescription: 'Comprehensive Azure DevOps training covering CI/CD pipelines, Azure boards, repos, artifacts, and deployment strategies.',
    category: 'Cloud & DevOps',
    pricing: {
      price: 20000,
      currency: 'INR',
      discountedPrice: 16000,
    },
    courseDetails: {
      duration: '40 days',
      mode: 'Online',
      level: 'Intermediate to Advanced',
      language: 'English',
    },
    features: [
      'Hands-on Azure labs',
      'Real-time CI/CD projects',
      'Industry best practices',
      'Azure certification guidance',
      'Expert trainer support',
    ],
    structuredData: {
      courseCode: 'AZURE_DEVOPS_HYD',
      provider: 'VR IT Solutions',
    },
    isActive: true,
  },
];

async function createSampleCourses() {
  console.log('Creating sample course metadata...');
  
  try {
    for (const course of sampleCourses) {
      try {
        const result = await client.create(course);
        console.log(`✅ Created course: ${course.slug} (ID: ${result._id})`);
      } catch (error) {
        console.error(`❌ Failed to create course ${course.slug}:`, error.message);
      }
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log('\n🎉 Sample course creation completed!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

// Run the script
createSampleCourses();
