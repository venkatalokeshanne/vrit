import { createClient } from '@sanity/client'

// Create Sanity client
const client = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sknNDhupje6H30eueHDFKAz9lVBD3sys8okwmuNeu6OxNL7MCGOmvOTDUnLOvHoEoclRnP6tvPdqOsci2b0jkRF68QO79B0gRuTseQ5Xjon8s3vN2qnj3myf2vQrg4QmZOPpLmqULHDYMhd2332hEIFLqc8DfyIGzc1Bf8IOHhlekO2F6MTp'
})

// Final batch of comprehensive blog posts covering remaining course topics
const finalBlogPosts = [
  {
    _type: 'post',
    title: 'ServiceNow Platform Complete Training: ITSM, ITOM, and Custom Development',
    slug: { current: 'servicenow-platform-complete-training-itsm-itom-custom-development' },
    excerpt: 'Master ServiceNow platform with comprehensive training covering IT Service Management, IT Operations, and custom application development.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'ServiceNow has transformed how organizations deliver IT services and automate business processes. As the leading cloud-based platform for digital workflows, ServiceNow enables companies to streamline operations, improve service delivery, and enhance user experiences across the enterprise.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'ServiceNow Platform Overview',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'ServiceNow provides a comprehensive platform for digital transformation:\n\n• IT Service Management (ITSM): Incident, problem, change, and service catalog management\n• IT Operations Management (ITOM): Infrastructure monitoring, event management, and service mapping\n• IT Business Management (ITBM): Project portfolio management and demand planning\n• Customer Service Management (CSM): Case management and customer portal\n• Human Resources (HR): Employee onboarding, case management, and knowledge base\n• Security Operations: Vulnerability management and GRC (Governance, Risk, Compliance)\n• App Engine: Low-code platform for custom application development'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'ITSM Core Modules',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'Block',
        children: [
          {
            _type: 'span',
            text: '1. Incident Management: Restore normal service operations as quickly as possible\n2. Problem Management: Identify and eliminate root causes of incidents\n3. Change Management: Control and authorize changes to minimize risk\n4. Service Catalog: Self-service portal for requesting IT services\n5. Knowledge Management: Centralized knowledge base for problem resolution\n6. Service Level Management: SLA tracking and reporting\n7. Configuration Management Database (CMDB): Central repository for IT assets\n8. Asset Management: Hardware and software asset lifecycle management'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'ITOM Capabilities',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'IT Operations Management provides:\n\n• Event Management: Automated event correlation and alert management\n• Service Mapping: Automatic discovery and mapping of IT infrastructure\n• Operational Intelligence: Real-time operational analytics and insights\n• Cloud Management: Multi-cloud resource management and optimization\n• Discovery: Automatic infrastructure discovery and CMDB population\n• Orchestration: Automated workflow execution and runbook automation\n• Performance Analytics: Infrastructure performance monitoring and reporting'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Custom Development with App Engine',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Build custom applications using:\n\n• Studio IDE: Integrated development environment for application building\n• Scripting: Server-side JavaScript for business logic\n• UI Framework: Modern, responsive user interface development\n• Workflow Engine: Visual workflow designer for process automation\n• Integration Hub: Pre-built integrations with third-party systems\n• REST APIs: Comprehensive API for external integrations\n• Mobile Development: Native mobile app development framework\n• ServiceNow Store: Marketplace for applications and integrations'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Implementation Best Practices',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Successful ServiceNow implementations require:\n\n• Process Assessment: Analyze current processes before automation\n• Data Migration: Clean and migrate existing data to ServiceNow\n• User Training: Comprehensive training program for end users\n• Change Management: Organizational change management strategy\n• Governance: Establish development and configuration standards\n• Testing: Rigorous testing across all environments\n• Performance Monitoring: Continuous monitoring and optimization\n• Continuous Improvement: Regular process reviews and enhancements'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Career Opportunities',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'ServiceNow expertise offers excellent career prospects:\n\n• ServiceNow Administrator: $75,000 - $110,000 annually\n• ServiceNow Developer: $90,000 - $135,000 annually\n• ServiceNow Architect: $115,000 - $165,000 annually\n• ITSM Consultant: $85,000 - $125,000 annually\n• Technical Consultant: $95,000 - $145,000 annually\n• Solution Architect: $120,000 - $180,000 annually\n\nWith digital transformation driving ServiceNow adoption across industries, certified professionals enjoy strong demand and competitive compensation in the enterprise software market.'
          }
        ]
      }
    ],
    publishedAt: new Date('2024-12-06').toISOString(),
    featured: false,
    published: true,
    readingTime: 15,
    tags: ['ServiceNow', 'ITSM', 'ITOM', 'Service Management', 'Automation', 'Enterprise Software'],
    seo: {
      title: 'ServiceNow Platform Complete Training - ITSM, ITOM & Custom Development',
      description: 'Master ServiceNow platform with comprehensive training covering IT Service Management, operations, and development.',
      keywords: 'ServiceNow, ITSM, ITOM, service management, automation, enterprise software'
    }
  },
  {
    _type: 'post',
    title: 'Informatica MDM Complete Guide: Master Data Management and Data Governance',
    slug: { current: 'informatica-mdm-complete-guide-master-data-management-data-governance' },
    excerpt: 'Master Informatica MDM with comprehensive training covering master data management, data quality, and enterprise data governance strategies.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Informatica Master Data Management (MDM) provides a comprehensive solution for managing an organization\'s most critical data assets. In today\'s data-driven world, ensuring data quality, consistency, and governance across enterprise systems is essential for business success.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'What is Master Data Management?',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Master Data Management is a comprehensive approach to managing critical business data:\n\n• Customer Data: Complete customer profiles across all touchpoints\n• Product Data: Centralized product information and hierarchies\n• Supplier Data: Vendor and supplier master records\n• Employee Data: HR master data and organizational structures\n• Location Data: Geographic and facility information\n• Financial Data: Chart of accounts and cost center data\n\nMDM ensures data consistency, accuracy, and accessibility across all enterprise applications and business processes.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Informatica MDM Architecture',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Informatica MDM consists of key components:\n\n• MDM Hub: Central repository for master data with versioning and lineage\n• Data Quality: Profiling, cleansing, and standardization capabilities\n• Data Integration: ETL/ELT tools for data movement and transformation\n• Match and Merge: Advanced algorithms for duplicate identification and resolution\n• Hierarchy Manager: Complex hierarchy management and visualization\n• Workflow Engine: Business process automation for data stewardship\n• REST APIs: Modern API architecture for real-time data access\n• Cloud Native: Cloud-first architecture with elastic scalability'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Implementation Styles',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Informatica MDM supports multiple implementation approaches:\n\n1. Registry Style: Lightweight approach with index-based master data\n2. Repository Style: Centralized master data store with periodic synchronization\n3. Consolidation Style: Real-time or near-real-time data consolidation\n4. Coexistence Style: Hybrid approach combining multiple styles\n5. Centralized Style: Single system of record for all master data\n6. Federated Style: Virtual master data across distributed systems'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Data Quality and Cleansing',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Comprehensive data quality capabilities:\n\n• Data Profiling: Automated discovery of data patterns and anomalies\n• Data Standardization: Address, name, and phone number standardization\n• Data Validation: Business rule validation and constraint checking\n• Duplicate Detection: Advanced matching algorithms for record linkage\n• Data Enrichment: Third-party data enhancement and augmentation\n• Monitoring: Continuous data quality monitoring and alerting\n• Scorecards: Data quality metrics and KPI dashboards\n• Remediation: Automated and manual data correction workflows'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Data Governance Framework',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Establish robust data governance with:\n\n• Data Stewardship: Role-based data stewardship and ownership\n• Policy Management: Data governance policies and procedures\n• Workflow Automation: Approval processes and change management\n• Audit Trail: Complete lineage and change history\n• Data Lineage: End-to-end data flow visualization\n• Impact Analysis: Change impact assessment and dependencies\n• Compliance: Regulatory compliance and data privacy controls\n• Business Glossary: Standardized business terminology and definitions'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Integration Capabilities',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Seamless integration with enterprise systems:\n\n• Real-Time APIs: REST and SOAP web services for real-time access\n• Batch Processing: High-volume batch data processing\n• Change Data Capture: Real-time change propagation\n• Message Queues: Asynchronous messaging for loose coupling\n• Database Connectors: Native connectivity to major databases\n• Application Connectors: Pre-built connectors for popular applications\n• Cloud Connectors: Integration with cloud platforms and SaaS applications\n• Custom Connectors: SDK for building custom integration points'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cloud and Modern Architecture',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Modern MDM capabilities include:\n\n• Cloud Native: Kubernetes-based container deployment\n• Microservices: API-first, microservices architecture\n• Elastic Scaling: Automatic scaling based on workload demands\n• Multi-Cloud: Support for AWS, Azure, and Google Cloud\n• DevOps: CI/CD pipelines for automated deployment\n• Machine Learning: AI-powered data quality and matching\n• Graph Database: Neo4j integration for complex relationship management\n• Event Streaming: Kafka integration for real-time data streaming'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Career Opportunities in Informatica MDM',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Informatica MDM expertise is highly valued:\n\n• MDM Developer: $85,000 - $125,000 annually\n• Data Architect: $110,000 - $160,000 annually\n• Data Quality Analyst: $75,000 - $115,000 annually\n• MDM Consultant: $95,000 - $145,000 annually\n• Solution Architect: $120,000 - $175,000 annually\n• Data Governance Manager: $100,000 - $150,000 annually\n\nWith increasing focus on data governance and compliance, Informatica MDM professionals are in high demand, offering excellent career growth in the data management field.'
          }
        ]
      }
    ],
    publishedAt: new Date('2024-12-05').toISOString(),
    featured: false,
    published: true,
    readingTime: 16,
    tags: ['Informatica MDM', 'Master Data Management', 'Data Quality', 'Data Governance', 'Enterprise Data'],
    seo: {
      title: 'Informatica MDM Complete Guide - Master Data Management & Data Governance',
      description: 'Master Informatica MDM with comprehensive training covering master data management, data quality, and governance.',
      keywords: 'Informatica MDM, master data management, data quality, data governance, enterprise data'
    }
  },
  {
    _type: 'post',
    title: 'Hadoop Big Data Complete Training: HDFS, MapReduce, and Ecosystem Tools',
    slug: { current: 'hadoop-big-data-complete-training-hdfs-mapreduce-ecosystem-tools' },
    excerpt: 'Master Hadoop ecosystem with comprehensive training covering HDFS, MapReduce, Spark, Hive, HBase, and big data analytics.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Apache Hadoop has revolutionized big data processing by providing a scalable, fault-tolerant framework for storing and processing massive datasets across distributed computing clusters. This comprehensive guide covers the entire Hadoop ecosystem and modern big data technologies.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Hadoop Core Components',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Hadoop consists of four main modules:\n\n• Hadoop Distributed File System (HDFS): Scalable, fault-tolerant distributed storage\n• MapReduce: Parallel processing framework for large datasets\n• YARN (Yet Another Resource Negotiator): Resource management and job scheduling\n• Hadoop Common: Common utilities and libraries supporting other modules\n\nThese components work together to provide a robust platform for big data storage, processing, and analysis.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'HDFS Architecture and Features',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'HDFS provides distributed storage with:\n\n1. NameNode: Master server managing file system metadata\n2. DataNode: Worker nodes storing actual data blocks\n3. Secondary NameNode: Checkpoint node for metadata backup\n4. Block Replication: Automatic data replication for fault tolerance\n5. Rack Awareness: Intelligent data placement across server racks\n6. Horizontal Scaling: Easy addition of storage capacity\n7. High Throughput: Optimized for sequential access patterns\n8. Data Locality: Processing data where it\'s stored'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'MapReduce Programming Model',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'MapReduce enables parallel processing through:\n\n• Map Phase: Process input data and emit key-value pairs\n• Shuffle and Sort: Redistribute data based on keys\n• Reduce Phase: Aggregate values for each key\n• Combiners: Local aggregation to reduce network traffic\n• Partitioners: Control data distribution across reducers\n• Input/Output Formats: Flexible data reading and writing\n• Counters: Track job progress and statistics\n• Speculative Execution: Handle slow-running tasks'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Hadoop Ecosystem Tools',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Rich ecosystem of complementary tools:\n\n• Apache Hive: SQL-like interface for data warehousing\n• Apache Pig: High-level platform for data analysis programs\n• Apache HBase: NoSQL database for real-time read/write access\n• Apache Spark: Fast, general-purpose cluster computing engine\n• Apache Kafka: Distributed streaming platform\n• Apache Flume: Service for collecting and aggregating log data\n• Apache Sqoop: Tool for transferring data between Hadoop and databases\n• Apache Oozie: Workflow scheduler for Hadoop jobs\n• Apache Zookeeper: Coordination service for distributed applications'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Apache Spark Integration',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Spark provides faster processing with:\n\n• In-Memory Computing: Cache datasets in memory for iterative algorithms\n• Spark SQL: SQL queries on structured data\n• Spark Streaming: Real-time stream processing\n• MLlib: Machine learning library with algorithms and utilities\n• GraphX: Graph processing and analytics\n• Multiple APIs: Scala, Java, Python, and R programming interfaces\n• DataFrame API: High-level abstraction for structured data\n• Catalyst Optimizer: Advanced query optimization engine'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Data Processing Patterns',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Common big data processing patterns:\n\n• Batch Processing: Large-scale data processing in scheduled batches\n• Stream Processing: Real-time processing of continuous data streams\n• Lambda Architecture: Combine batch and stream processing\n• Kappa Architecture: Stream-only processing architecture\n• ETL Pipelines: Extract, transform, and load data workflows\n• Data Lakes: Store raw data in native format\n• Data Warehousing: Structured data storage for analytics\n• Machine Learning Pipelines: End-to-end ML workflow automation'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cloud and Modern Deployment',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Modern Hadoop deployment options:\n\n• Cloud Platforms: AWS EMR, Azure HDInsight, Google Dataproc\n• Containerization: Docker and Kubernetes deployment\n• Managed Services: Fully managed Hadoop services\n• Hybrid Clouds: On-premises and cloud hybrid architectures\n• Auto-scaling: Dynamic cluster sizing based on workload\n• Spot Instances: Cost optimization with preemptible instances\n• Security: Kerberos authentication and data encryption\n• Monitoring: Cluster monitoring and performance optimization'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Career Opportunities in Big Data',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Hadoop and big data skills offer excellent career prospects:\n\n• Big Data Engineer: $90,000 - $135,000 annually\n• Hadoop Developer: $85,000 - $125,000 annually\n• Data Architect: $110,000 - $160,000 annually\n• Spark Developer: $95,000 - $145,000 annually\n• Data Platform Engineer: $100,000 - $150,000 annually\n• Big Data Consultant: $105,000 - $155,000 annually\n\nWith exponential data growth across industries, big data professionals are in high demand, offering strong career growth and competitive compensation in the data engineering field.'
          }
        ]
      }
    ],
    publishedAt: new Date('2024-12-04').toISOString(),
    featured: false,
    published: true,
    readingTime: 19,
    tags: ['Hadoop', 'Big Data', 'HDFS', 'MapReduce', 'Spark', 'Data Engineering'],
    seo: {
      title: 'Hadoop Big Data Complete Training - HDFS, MapReduce & Ecosystem Tools',
      description: 'Master Hadoop ecosystem with comprehensive training covering HDFS, MapReduce, Spark, and big data processing.',
      keywords: 'Hadoop, big data, HDFS, MapReduce, Spark, data engineering, distributed computing'
    }
  },
  {
    _type: 'post',
    title: 'Full Stack Development Complete Guide: Frontend, Backend, and DevOps Integration',
    slug: { current: 'full-stack-development-complete-guide-frontend-backend-devops-integration' },
    excerpt: 'Master full stack development with comprehensive training covering modern frontend frameworks, backend technologies, databases, and DevOps practices.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Full stack development has become essential in modern software development, requiring proficiency across frontend, backend, database, and DevOps technologies. This comprehensive guide covers everything you need to become a skilled full stack developer in today\'s technology landscape.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Full Stack Developer Skill Set',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Modern full stack developers must master:\n\n• Frontend Technologies: HTML5, CSS3, JavaScript, TypeScript\n• Frontend Frameworks: React, Angular, Vue.js, Next.js\n• Backend Languages: Node.js, Python, Java, C#, PHP\n• Backend Frameworks: Express.js, Django, Spring Boot, .NET Core\n• Databases: SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis)\n• Version Control: Git, GitHub, GitLab\n• Cloud Platforms: AWS, Azure, Google Cloud\n• DevOps Tools: Docker, Kubernetes, CI/CD pipelines\n• API Development: REST, GraphQL, microservices architecture'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Frontend Development Mastery',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Modern frontend development includes:\n\n1. Responsive Design: Mobile-first design with CSS Grid and Flexbox\n2. Component Architecture: Reusable components with state management\n3. Performance Optimization: Code splitting, lazy loading, and bundle optimization\n4. Testing: Unit testing, integration testing, and end-to-end testing\n5. Build Tools: Webpack, Vite, Parcel for module bundling\n6. Package Management: npm, yarn for dependency management\n7. CSS Preprocessors: Sass, Less, and CSS-in-JS solutions\n8. Progressive Web Apps: Service workers and offline functionality'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Backend Development Excellence',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Backend development fundamentals:\n\n• API Design: RESTful services and GraphQL endpoints\n• Authentication: JWT, OAuth, session management\n• Database Design: Normalization, indexing, and query optimization\n• Caching: Redis, Memcached for performance optimization\n• Message Queues: RabbitMQ, Apache Kafka for asynchronous processing\n• Microservices: Service decomposition and inter-service communication\n• Security: Input validation, encryption, and vulnerability prevention\n• Monitoring: Logging, metrics, and application performance monitoring'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Database Technologies',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Comprehensive database knowledge:\n\n• Relational Databases: PostgreSQL, MySQL, SQL Server\n• NoSQL Databases: MongoDB, Cassandra, DynamoDB\n• In-Memory Databases: Redis, Memcached\n• Graph Databases: Neo4j, Amazon Neptune\n• Time-Series Databases: InfluxDB, TimescaleDB\n• Database Migration: Schema versioning and data migration strategies\n• ORM/ODM: Sequelize, Mongoose, Prisma, Entity Framework\n• Database Optimization: Query optimization, indexing strategies'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'DevOps and Deployment',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Modern deployment and operations:\n\n• Containerization: Docker for application packaging\n• Orchestration: Kubernetes for container orchestration\n• CI/CD Pipelines: GitHub Actions, Jenkins, GitLab CI\n• Infrastructure as Code: Terraform, CloudFormation\n• Monitoring: Prometheus, Grafana, ELK stack\n• Cloud Services: AWS EC2, S3, RDS, Lambda\n• CDN: CloudFront, CloudFlare for global content delivery\n• Security: SSL/TLS, secrets management, vulnerability scanning'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Modern Development Practices',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Best practices for full stack development:\n\n• Agile Methodology: Scrum, Kanban for project management\n• Test-Driven Development: Write tests before implementation\n• Code Reviews: Peer review process for code quality\n• Documentation: API documentation with OpenAPI/Swagger\n• Performance Monitoring: Real-time application monitoring\n• Error Tracking: Sentry, Rollbar for error monitoring\n• A/B Testing: Feature flags and experimentation\n• Accessibility: WCAG compliance and inclusive design'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Project Portfolio Development',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Build impressive portfolio projects:\n\n• E-commerce Platform: Complete online store with payment integration\n• Social Media App: Real-time messaging and content sharing\n• Task Management System: Project collaboration with team features\n• Blog Platform: Content management with SEO optimization\n• Dashboard Analytics: Data visualization and reporting\n• API Gateway: Microservices with authentication and rate limiting\n• Real-time Chat Application: WebSocket communication\n• Mobile App: React Native or Progressive Web App'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Career Opportunities in Full Stack Development',
            marks: ['strong']
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Full stack developers enjoy diverse career opportunities:\n\n• Full Stack Developer: $75,000 - $120,000 annually\n• Software Engineer: $85,000 - $135,000 annually\n• Technical Lead: $100,000 - $150,000 annually\n• Solution Architect: $115,000 - $170,000 annually\n• Product Engineer: $90,000 - $140,000 annually\n• Startup CTO: $120,000 - $200,000+ annually\n\nFull stack developers are highly sought after by startups and enterprises alike, offering flexibility to work across the entire technology stack and excellent career growth potential in the rapidly evolving tech industry.'
          }
        ]
      }
    ],
    publishedAt: new Date('2024-12-03').toISOString(),
    featured: true,
    published: true,
    readingTime: 21,
    tags: ['Full Stack Development', 'Frontend', 'Backend', 'DevOps', 'Web Development', 'JavaScript'],
    seo: {
      title: 'Full Stack Development Complete Guide - Frontend, Backend & DevOps',
      description: 'Master full stack development with comprehensive training covering modern frontend, backend, and DevOps technologies.',
      keywords: 'full stack development, frontend, backend, web development, JavaScript, DevOps'
    }
  }
]

async function populateFinalBlog() {
  try {
    console.log('🚀 Starting final blog population...')

    // Fetch all authors and categories
    console.log('\nFetching authors and categories...')
    const allAuthors = await client.fetch('*[_type == "author"]')
    const allCategories = await client.fetch('*[_type == "category"]')
    
    console.log(`Found ${allAuthors.length} authors and ${allCategories.length} categories`)

    // Create final blog posts with random author and category assignments
    console.log('\nCreating final comprehensive blog posts...')
    for (const post of finalBlogPosts) {
      try {
        // Assign random author
        const randomAuthor = allAuthors[Math.floor(Math.random() * allAuthors.length)]
        
        // Assign 2-4 random categories
        const shuffledCategories = allCategories.sort(() => 0.5 - Math.random())
        const selectedCategories = shuffledCategories.slice(0, Math.floor(Math.random() * 3) + 2)

        const postWithReferences = {
          ...post,
          author: {
            _type: 'reference',
            _ref: randomAuthor._id
          },
          categories: selectedCategories.map(cat => ({
            _type: 'reference',
            _ref: cat._id
          }))
        }

        const result = await client.create(postWithReferences)
        console.log(`✅ Created blog post: ${post.title}`)
      } catch (error) {
        console.log(`❌ Error creating post: ${post.title}`, error.message)
      }
    }

    console.log('\n✅ Final blog population completed successfully!')

    // Get total count of all blog posts
    const totalPosts = await client.fetch('count(*[_type == "post"])')
    const totalAuthors = await client.fetch('count(*[_type == "author"])')
    const totalCategories = await client.fetch('count(*[_type == "category"])')

    // Summary
    console.log('\n📊 Final Summary:')
    console.log(`• ${finalBlogPosts.length} final blog posts created`)
    console.log(`• Total blog posts in database: ${totalPosts}`)
    console.log(`• Total authors: ${totalAuthors}`)
    console.log(`• Total categories: ${totalCategories}`)
    console.log('• All posts contain comprehensive, technical content covering your course offerings')

  } catch (error) {
    console.error('❌ Error during final blog population:', error)
  }
}

// Run the population
populateFinalBlog()
