// Mock blog data for development/fallback when Sanity is not configured
export const mockBlogPosts = [
  {
    _id: '1',
    title: 'Getting Started with Cloud Computing: A Comprehensive Guide for IT Professionals',
    slug: { current: 'getting-started-cloud-computing-guide' },
    publishedAt: '2024-12-15T10:00:00Z',
    _updatedAt: '2024-12-15T10:00:00Z',
    excerpt: 'Discover the fundamentals of cloud computing and how it can transform your career in IT. Learn about AWS, Azure, and Google Cloud platforms.',
    author: {
      name: 'VR IT Solutions Expert',
      role: 'Cloud Solutions Architect',
      bio: 'Experienced cloud architect with 10+ years in enterprise cloud migrations.',
      image: null
    },
    mainImage: null,
    categories: [
      { title: 'Cloud Computing', slug: { current: 'cloud-computing' }, _id: 'cat1' }
    ],
    tags: ['cloud computing', 'AWS', 'Azure', 'career guide'],
    readingTime: 8,
    featured: true,
    body: [
      {
        _type: 'block',
        style: 'h2',
        children: [{ text: 'What is Cloud Computing?' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: 'Cloud computing has revolutionized the way businesses operate and store data. It refers to the delivery of computing services including servers, storage, databases, networking, software, analytics, and intelligence over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.' }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ text: 'Key Benefits of Cloud Computing' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: '• Cost Efficiency: Reduce IT infrastructure costs\n• Scalability: Scale resources up or down as needed\n• Accessibility: Access your data from anywhere\n• Reliability: Built-in backup and disaster recovery\n• Security: Enterprise-level security features' }]
      }
    ]
  },
  {
    _id: '2',
    title: 'Full Stack Development Trends in 2024: Technologies You Should Master',
    slug: { current: 'full-stack-development-trends-2024' },
    publishedAt: '2024-12-10T14:30:00Z',
    _updatedAt: '2024-12-10T14:30:00Z',
    excerpt: 'Explore the latest full stack development trends and technologies that are shaping the industry in 2024. From React to Node.js, discover what you need to know.',
    author: {
      name: 'VR IT Solutions Expert',
      role: 'Senior Full Stack Developer',
      bio: 'Full stack developer with expertise in modern web technologies and frameworks.',
      image: null
    },
    mainImage: null,
    categories: [
      { title: 'Web Development', slug: { current: 'web-development' }, _id: 'cat2' }
    ],
    tags: ['full stack', 'react', 'nodejs', 'javascript', 'web development'],
    readingTime: 6,
    featured: true,
    body: [
      {
        _type: 'block',
        style: 'h2',
        children: [{ text: 'Top Full Stack Technologies in 2024' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: 'The full stack development landscape continues to evolve rapidly. Here are the key technologies that are dominating the market in 2024.' }]
      }
    ]
  },
  {
    _id: '3',
    title: 'Data Science Career Path: From Beginner to Professional',
    slug: { current: 'data-science-career-path-guide' },
    publishedAt: '2024-12-08T09:15:00Z',
    _updatedAt: '2024-12-08T09:15:00Z',
    excerpt: 'Learn how to build a successful career in data science. This comprehensive guide covers essential skills, tools, and career progression strategies.',
    author: {
      name: 'VR IT Solutions Expert',
      role: 'Data Science Lead',
      bio: 'Data science professional with experience in machine learning and analytics.',
      image: null
    },
    mainImage: null,
    categories: [
      { title: 'Data Science', slug: { current: 'data-science' }, _id: 'cat3' }
    ],
    tags: ['data science', 'machine learning', 'python', 'analytics', 'career'],
    readingTime: 10,
    featured: false,
    body: [
      {
        _type: 'block',
        style: 'h2',
        children: [{ text: 'Essential Skills for Data Scientists' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: 'Data science is one of the most sought-after careers in the tech industry. Here\'s what you need to know to get started.' }]
      }
    ]
  },
  {
    _id: '4',
    title: 'DevOps Best Practices: Streamlining Development and Operations',
    slug: { current: 'devops-best-practices-guide' },
    publishedAt: '2024-12-05T11:00:00Z',
    _updatedAt: '2024-12-05T11:00:00Z',
    excerpt: 'Master DevOps principles and practices to improve software delivery. Learn about CI/CD, containerization, and infrastructure automation.',
    author: {
      name: 'VR IT Solutions Expert',
      role: 'DevOps Engineer',
      bio: 'DevOps specialist with expertise in automation and cloud infrastructure.',
      image: null
    },
    mainImage: null,
    categories: [
      { title: 'DevOps', slug: { current: 'devops' }, _id: 'cat4' }
    ],
    tags: ['devops', 'cicd', 'docker', 'kubernetes', 'automation'],
    readingTime: 7,
    featured: false,
    body: [
      {
        _type: 'block',
        style: 'h2',
        children: [{ text: 'Understanding DevOps Culture' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: 'DevOps is more than just tools and processes - it\'s a cultural shift that brings development and operations teams together.' }]
      }
    ]
  },
  {
    _id: '5',
    title: 'SAP Career Opportunities: Your Guide to Enterprise Software Success',
    slug: { current: 'sap-career-opportunities-guide' },
    publishedAt: '2024-12-01T16:45:00Z',
    _updatedAt: '2024-12-01T16:45:00Z',
    excerpt: 'Explore the vast career opportunities in SAP. Learn about different SAP modules, certification paths, and salary expectations in the enterprise software domain.',
    author: {
      name: 'VR IT Solutions Expert',
      role: 'SAP Consultant',
      bio: 'Senior SAP consultant with expertise in multiple SAP modules and implementations.',
      image: null
    },
    mainImage: null,
    categories: [
      { title: 'Enterprise Software', slug: { current: 'enterprise-software' }, _id: 'cat5' }
    ],
    tags: ['sap', 'enterprise software', 'erp', 'career', 'certification'],
    readingTime: 9,
    featured: false,
    body: [
      {
        _type: 'block',
        style: 'h2',
        children: [{ text: 'Why Choose SAP as a Career?' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ text: 'SAP is one of the world\'s leading enterprise software companies, and SAP skills are in high demand across industries.' }]
      }
    ]
  }
];

export const mockCategories = [
  {
    _id: 'cat1',
    title: 'Cloud Computing',
    slug: { current: 'cloud-computing' },
    description: 'Articles about cloud platforms, migration strategies, and cloud-native development.',
    color: 'blue',
    postCount: 1
  },
  {
    _id: 'cat2',
    title: 'Web Development',
    slug: { current: 'web-development' },
    description: 'Frontend and backend web development tutorials, frameworks, and best practices.',
    color: 'green',
    postCount: 1
  },
  {
    _id: 'cat3',
    title: 'Data Science',
    slug: { current: 'data-science' },
    description: 'Data analysis, machine learning, and artificial intelligence insights.',
    color: 'purple',
    postCount: 1
  },
  {
    _id: 'cat4',
    title: 'DevOps',
    slug: { current: 'devops' },
    description: 'Automation, CI/CD, containerization, and infrastructure as code.',
    color: 'red',
    postCount: 1
  },
  {
    _id: 'cat5',
    title: 'Enterprise Software',
    slug: { current: 'enterprise-software' },
    description: 'SAP, Oracle, Microsoft, and other enterprise software solutions.',
    color: 'teal',
    postCount: 1
  }
];

// Fallback functions that use mock data when Sanity is not available
export async function getAllPostsFallback() {
  return mockBlogPosts;
}

export async function getPostBySlugFallback(slug) {
  return mockBlogPosts.find(post => post.slug.current === slug) || null;
}

export async function getFeaturedPostsFallback() {
  return mockBlogPosts.filter(post => post.featured);
}

export async function getRelatedPostsFallback(currentPostId, categories) {
  const currentPost = mockBlogPosts.find(post => post._id === currentPostId);
  if (!currentPost) return [];
  
  return mockBlogPosts
    .filter(post => post._id !== currentPostId)
    .filter(post => 
      post.categories.some(cat => 
        currentPost.categories.some(currentCat => currentCat.title === cat.title)
      )
    )
    .slice(0, 3);
}

export async function getAllCategoriesFallback() {
  return mockCategories;
}

export async function getPostsByCategoryFallback(categorySlug) {
  return mockBlogPosts.filter(post =>
    post.categories.some(cat => cat.slug.current === categorySlug)
  );
}

export async function getPaginatedPostsFallback(start = 0, end = 10) {
  return mockBlogPosts.slice(start, end);
}

export async function getTotalPostsFallback() {
  return mockBlogPosts.length;
}

// Mock URL builder for images
export function urlForFallback(source) {
  return {
    width: () => ({ height: () => ({ url: () => '/logo.png' }) }),
    height: () => ({ url: () => '/logo.png' }),
    url: () => '/logo.png'
  };
}
