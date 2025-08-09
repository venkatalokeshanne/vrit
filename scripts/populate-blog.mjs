import { createClient } from '@sanity/client'

// Create Sanity client
const client = createClient({
  projectId: '3hir6j0e', // Replace with your project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false, // Set to false for mutations
  apiVersion: '2024-01-01',
  token: 'sknNDhupje6H30eueHDFKAz9lVBD3sys8okwmuNeu6OxNL7MCGOmvOTDUnLOvHoEoclRnP6tvPdqOsci2b0jkRF68QO79B0gRuTseQ5Xjon8s3vN2qnj3myf2vQrg4QmZOPpLmqULHDYMhd2332hEIFLqc8DfyIGzc1Bf8IOHhlekO2F6MTp'
})

// Sample authors
const authors = [
  {
    _type: 'author',
    name: 'Dr. Sarah Chen',
    slug: { current: 'sarah-chen' },
    bio: 'Senior Software Engineer and Tech Lead with 10+ years of experience in full-stack development, DevOps, and cloud architecture.',
    role: 'Lead Developer & Tech Writer',
    image: null // You can add image references later
  },
  {
    _type: 'author',
    name: 'Michael Rodriguez',
    slug: { current: 'michael-rodriguez' },
    bio: 'DevOps Engineer specializing in AWS, Docker, and Kubernetes. Passionate about automation and infrastructure as code.',
    role: 'DevOps Specialist',
    image: null
  },
  {
    _type: 'author',
    name: 'Emily Johnson',
    slug: { current: 'emily-johnson' },
    bio: 'Frontend Developer and UI/UX Designer with expertise in React, Next.js, and modern web technologies.',
    role: 'Frontend Engineer',
    image: null
  },
  {
    _type: 'author',
    name: 'David Kumar',
    slug: { current: 'david-kumar' },
    bio: 'Backend Developer and Database Architect with deep knowledge of Node.js, Python, and distributed systems.',
    role: 'Backend Architect',
    image: null
  }
]

// Sample categories
const categories = [
  {
    _type: 'category',
    title: 'Web Development',
    slug: { current: 'web-development' },
    description: 'Latest trends and tutorials in web development',
    color: 'blue'
  },
  {
    _type: 'category',
    title: 'DevOps & Cloud',
    slug: { current: 'devops-cloud' },
    description: 'DevOps practices, cloud computing, and infrastructure',
    color: 'green'
  },
  {
    _type: 'category',
    title: 'Programming Languages',
    slug: { current: 'programming-languages' },
    description: 'Deep dives into programming languages and frameworks',
    color: 'purple'
  },
  {
    _type: 'category',
    title: 'Database & Backend',
    slug: { current: 'database-backend' },
    description: 'Backend development and database technologies',
    color: 'orange'
  },
  {
    _type: 'category',
    title: 'Mobile Development',
    slug: { current: 'mobile-development' },
    description: 'iOS, Android, and cross-platform mobile development',
    color: 'pink'
  },
  {
    _type: 'category',
    title: 'AI & Machine Learning',
    slug: { current: 'ai-machine-learning' },
    description: 'Artificial intelligence and machine learning tutorials',
    color: 'indigo'
  }
]

// Sample blog posts
const blogPosts = [
  {
    _type: 'post',
    title: 'Complete Guide to Next.js 15: New Features and Best Practices',
    slug: { current: 'complete-guide-nextjs-15-features' },
    excerpt: 'Explore the latest features in Next.js 15 including improved routing, server components, and performance optimizations that will revolutionize your React development workflow.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Next.js 15 brings groundbreaking improvements that make React development more efficient and enjoyable. In this comprehensive guide, we\'ll explore the most important updates and how to leverage them in your projects.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Key Features in Next.js 15:',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Enhanced App Router with improved performance\n• Better TypeScript support and error handling\n• Advanced caching mechanisms\n• Improved developer experience with faster builds'
          }
        ]
      }
    ],
    publishedAt: new Date('2024-12-15').toISOString(),
    featured: true,
    published: true,
    readingTime: 8,
    tags: ['Next.js', 'React', 'JavaScript', 'Web Development', 'Frontend'],
    seo: {
      title: 'Next.js 15 Complete Guide - New Features & Best Practices',
      description: 'Learn about Next.js 15 new features, improvements, and best practices for modern React development.',
      keywords: 'Next.js 15, React, JavaScript, web development, frontend'
    }
  },
  {
    _type: 'post',
    title: 'Docker Containerization: From Beginner to Production',
    slug: { current: 'docker-containerization-beginner-production' },
    excerpt: 'Master Docker containerization with this comprehensive tutorial covering everything from basic concepts to production deployment strategies.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Docker has revolutionized how we develop, ship, and run applications. This tutorial will take you from Docker basics to production-ready containerized applications.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'What You\'ll Learn:',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Docker fundamentals and architecture\n• Creating efficient Dockerfiles\n• Multi-stage builds and optimization\n• Docker Compose for local development\n• Production deployment strategies'
          }
        ]
      }
    ],
    publishedAt: new Date('2024-12-10').toISOString(),
    featured: true,
    published: true,
    readingTime: 12,
    tags: ['Docker', 'DevOps', 'Containerization', 'Deployment', 'Infrastructure'],
    seo: {
      title: 'Docker Containerization Tutorial - Beginner to Production',
      description: 'Complete Docker tutorial covering containerization from basics to production deployment.',
      keywords: 'Docker, containerization, DevOps, deployment, infrastructure'
    }
  },
  {
    _type: 'post',
    title: 'React Server Components: The Future of React Development',
    slug: { current: 'react-server-components-future-development' },
    excerpt: 'Discover how React Server Components are changing the way we build React applications, offering better performance and developer experience.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'React Server Components represent a paradigm shift in how we think about React applications. They enable us to render components on the server while maintaining the interactive nature of client-side React.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Benefits of Server Components:',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Reduced bundle size and faster loading\n• Better SEO and initial page performance\n• Direct access to backend resources\n• Improved developer experience'
          }
        ]
      }
    ],
    publishedAt: new Date('2024-12-08').toISOString(),
    featured: false,
    published: true,
    readingTime: 6,
    tags: ['React', 'Server Components', 'Performance', 'Frontend', 'JavaScript'],
    seo: {
      title: 'React Server Components - Future of React Development',
      description: 'Learn about React Server Components and how they improve performance and developer experience.',
      keywords: 'React Server Components, React, performance, frontend, JavaScript'
    }
  },
  {
    _type: 'post',
    title: 'AWS Lambda Functions: Serverless Architecture Masterclass',
    slug: { current: 'aws-lambda-serverless-architecture-masterclass' },
    excerpt: 'Learn how to build scalable serverless applications with AWS Lambda, including best practices, cost optimization, and real-world examples.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'AWS Lambda has transformed how we build and deploy applications. This masterclass covers everything you need to know about serverless architecture with Lambda functions.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Course Curriculum:',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Lambda fundamentals and use cases\n• Event-driven architecture patterns\n• Integration with AWS services\n• Cost optimization strategies\n• Monitoring and debugging techniques'
          }
        ]
      }
    ],
    publishedAt: new Date('2024-12-05').toISOString(),
    featured: true,
    published: true,
    readingTime: 15,
    tags: ['AWS', 'Lambda', 'Serverless', 'Cloud Computing', 'Architecture'],
    seo: {
      title: 'AWS Lambda Serverless Architecture Masterclass',
      description: 'Complete guide to AWS Lambda and serverless architecture with practical examples.',
      keywords: 'AWS Lambda, serverless, cloud computing, AWS, architecture'
    }
  },
  {
    _type: 'post',
    title: 'TypeScript Advanced Patterns: Generic Types and Utility Types',
    slug: { current: 'typescript-advanced-patterns-generic-utility-types' },
    excerpt: 'Master advanced TypeScript patterns including generic types, utility types, and conditional types to write more robust and maintainable code.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'TypeScript\'s type system is incredibly powerful. In this advanced guide, we\'ll explore generic types, utility types, and conditional types that will elevate your TypeScript skills.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Advanced Concepts Covered:',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Generic constraints and conditional types\n• Built-in utility types (Pick, Omit, Record)\n• Mapped types and template literal types\n• Advanced inference patterns'
          }
        ]
      }
    ],
    publishedAt: new Date('2024-12-03').toISOString(),
    featured: false,
    published: true,
    readingTime: 10,
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Types', 'Development'],
    seo: {
      title: 'TypeScript Advanced Patterns - Generic and Utility Types',
      description: 'Learn advanced TypeScript patterns including generics, utility types, and conditional types.',
      keywords: 'TypeScript, generics, utility types, JavaScript, programming'
    }
  },
  {
    _type: 'post',
    title: 'Building RESTful APIs with Node.js and Express: Complete Course',
    slug: { current: 'building-restful-apis-nodejs-express-course' },
    excerpt: 'Learn to build production-ready RESTful APIs using Node.js and Express, including authentication, validation, testing, and deployment.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Building robust RESTful APIs is a crucial skill for backend developers. This comprehensive course covers everything from basic Express setup to production deployment.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'What You\'ll Build:',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Complete REST API with CRUD operations\n• JWT authentication and authorization\n• Data validation and error handling\n• API testing with Jest and Supertest\n• Database integration with MongoDB'
          }
        ]
      }
    ],
    publishedAt: new Date('2024-12-01').toISOString(),
    featured: false,
    published: true,
    readingTime: 18,
    tags: ['Node.js', 'Express', 'REST API', 'Backend', 'JavaScript'],
    seo: {
      title: 'Building RESTful APIs with Node.js and Express Complete Course',
      description: 'Learn to build production-ready REST APIs with Node.js and Express from scratch.',
      keywords: 'Node.js, Express, REST API, backend, JavaScript, MongoDB'
    }
  },
  {
    _type: 'post',
    title: 'React Native vs Flutter: Choosing the Right Framework in 2025',
    slug: { current: 'react-native-vs-flutter-choosing-framework-2025' },
    excerpt: 'Compare React Native and Flutter in detail to make an informed decision for your next mobile app project in 2025.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Choosing between React Native and Flutter can be challenging. This comprehensive comparison will help you make the right decision based on your project requirements and team expertise.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Comparison Factors:',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Performance and user experience\n• Development speed and learning curve\n• Community support and ecosystem\n• Platform-specific features\n• Long-term maintenance considerations'
          }
        ]
      }
    ],
    publishedAt: new Date('2024-11-28').toISOString(),
    featured: false,
    published: true,
    readingTime: 7,
    tags: ['React Native', 'Flutter', 'Mobile Development', 'Cross-platform', 'Comparison'],
    seo: {
      title: 'React Native vs Flutter 2025 - Complete Framework Comparison',
      description: 'Detailed comparison of React Native vs Flutter to help choose the right mobile framework.',
      keywords: 'React Native, Flutter, mobile development, cross-platform, comparison'
    }
  },
  {
    _type: 'post',
    title: 'Machine Learning with Python: From Zero to AI Applications',
    slug: { current: 'machine-learning-python-zero-ai-applications' },
    excerpt: 'Start your AI journey with this comprehensive Python machine learning course covering algorithms, frameworks, and real-world applications.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Machine Learning is transforming every industry. This course will take you from Python basics to building sophisticated AI applications using popular ML frameworks.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Course Modules:',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Python for Data Science fundamentals\n• Supervised and unsupervised learning\n• Neural networks with TensorFlow/PyTorch\n• Computer vision and NLP projects\n• Model deployment and production'
          }
        ]
      }
    ],
    publishedAt: new Date('2024-11-25').toISOString(),
    featured: true,
    published: true,
    readingTime: 20,
    tags: ['Python', 'Machine Learning', 'AI', 'Data Science', 'TensorFlow'],
    seo: {
      title: 'Machine Learning with Python - Zero to AI Applications Course',
      description: 'Complete Python machine learning course from basics to advanced AI applications.',
      keywords: 'machine learning, Python, AI, data science, TensorFlow, neural networks'
    }
  }
]

async function createAuthors() {
  console.log('Creating authors...')
  for (const author of authors) {
    try {
      const result = await client.create(author)
      console.log(`✅ Created author: ${author.name}`)
    } catch (error) {
      console.error(`❌ Error creating author ${author.name}:`, error.message)
    }
  }
}

async function createCategories() {
  console.log('\nCreating categories...')
  for (const category of categories) {
    try {
      const result = await client.create(category)
      console.log(`✅ Created category: ${category.title}`)
    } catch (error) {
      console.error(`❌ Error creating category ${category.title}:`, error.message)
    }
  }
}

async function createBlogPosts() {
  console.log('\nFetching authors and categories...')
  
  // Fetch created authors and categories
  const createdAuthors = await client.fetch('*[_type == "author"]')
  const createdCategories = await client.fetch('*[_type == "category"]')
  
  console.log(`Found ${createdAuthors.length} authors and ${createdCategories.length} categories`)
  
  console.log('\nCreating blog posts...')
  
  // Category assignments for posts
  const categoryAssignments = [
    ['Web Development'], // Next.js
    ['DevOps & Cloud'], // Docker
    ['Web Development'], // React Server Components
    ['DevOps & Cloud'], // AWS Lambda
    ['Programming Languages'], // TypeScript
    ['Database & Backend'], // Node.js API
    ['Mobile Development'], // React Native vs Flutter
    ['AI & Machine Learning'] // Machine Learning
  ]
  
  for (let i = 0; i < blogPosts.length; i++) {
    const post = blogPosts[i]
    const assignedCategories = categoryAssignments[i] || ['Web Development']
    
    try {
      // Assign random author
      const randomAuthor = createdAuthors[Math.floor(Math.random() * createdAuthors.length)]
      
      // Find matching categories
      const postCategories = createdCategories.filter(cat => 
        assignedCategories.includes(cat.title)
      )
      
      const postWithReferences = {
        ...post,
        author: {
          _type: 'reference',
          _ref: randomAuthor._id
        },
        categories: postCategories.map(cat => ({
          _type: 'reference',
          _ref: cat._id
        }))
      }
      
      const result = await client.create(postWithReferences)
      console.log(`✅ Created blog post: ${post.title}`)
    } catch (error) {
      console.error(`❌ Error creating blog post ${post.title}:`, error.message)
    }
  }
}

async function populateBlog() {
  console.log('🚀 Starting blog population...\n')
  
  try {
    await createAuthors()
    await createCategories()
    await createBlogPosts()
    
    console.log('\n✅ Blog population completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`• ${authors.length} authors created`)
    console.log(`• ${categories.length} categories created`)
    console.log(`• ${blogPosts.length} blog posts created`)
    
  } catch (error) {
    console.error('\n❌ Error during blog population:', error)
  }
}

// Run the population script
populateBlog()
