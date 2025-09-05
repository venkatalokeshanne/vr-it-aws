const { createClient } = require('@sanity/client')

// Create a client with write permissions
const client = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skv9IT9S6cNvFqAaWg3P1Ad1QfNuMhoL03eBlO0CtztlrklGusMBu0FdvTLwruvOnyBKj8DQM00wlL0z5upsxaut1ZW0gp2cPdY99eGrhCl3jTx4g5uIB7rOQFn46lSR50XHgqfeY03WjuilyEQx59oB0K0sORmXcyUh2eNjCg5PdHeesEkG', // Your write token
})

// Sample AWS Cloud Fundamentals course data
const awsCloudFundamentalsData = {
  _type: 'awsCourse',
  title: 'AWS Cloud Fundamentals',
  slug: {
    _type: 'slug',
    current: 'aws-cloud-fundamentals'
  },
  subtitle: 'Master the essential concepts and services of Amazon Web Services',
  description: 'Start your cloud journey with comprehensive AWS fundamentals training. Learn core services, security best practices, and hands-on implementation.',
  duration: '6 weeks',
  level: 'beginner',
  price: 299,
  originalPrice: 399,
  published: true,
  overview: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'This comprehensive course introduces you to the fundamental concepts and core services of Amazon Web Services (AWS). You will learn essential cloud computing principles, explore key AWS services, and gain hands-on experience building scalable cloud solutions.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Perfect for beginners with no prior cloud experience, this course provides a solid foundation for your cloud journey and prepares you for AWS certification exams.'
        }
      ]
    }
  ],
  whatYouLearn: [
    'AWS Core Services (EC2, S3, RDS, Lambda)',
    'Cloud Security and Identity Management (IAM)',
    'Networking and Content Delivery (VPC, CloudFront)',
    'Monitoring and Cost Optimization (CloudWatch, Cost Explorer)',
    'Infrastructure as Code with CloudFormation',
    'Best practices for AWS architecture',
    'Hands-on experience with AWS Console and CLI'
  ],
  curriculum: [
    {
      moduleTitle: 'AWS Cloud Introduction',
      topics: [
        'Cloud Computing Concepts and Benefits',
        'AWS Global Infrastructure Overview',
        'AWS Management Console Navigation',
        'AWS CLI Basics and Configuration'
      ]
    },
    {
      moduleTitle: 'Core Compute Services',
      topics: [
        'Amazon EC2 Instances and Instance Types',
        'Auto Scaling Groups and Load Balancing',
        'Elastic Load Balancing (ELB)',
        'AWS Lambda Serverless Computing'
      ]
    },
    {
      moduleTitle: 'Storage and Databases',
      topics: [
        'Amazon S3 Object Storage',
        'Amazon EBS Block Storage',
        'Amazon RDS Relational Databases',
        'DynamoDB NoSQL Database Basics'
      ]
    },
    {
      moduleTitle: 'Networking and Security',
      topics: [
        'VPC (Virtual Private Cloud) Fundamentals',
        'Security Groups and Network ACLs',
        'IAM Roles, Users, and Policies',
        'AWS CloudTrail for Auditing'
      ]
    },
    {
      moduleTitle: 'Monitoring and Management',
      topics: [
        'Amazon CloudWatch Monitoring',
        'AWS Cost Management and Optimization',
        'AWS CloudFormation Infrastructure as Code',
        'AWS Systems Manager'
      ]
    }
  ],
  projects: [
    {
      projectTitle: 'Multi-Tier Web Application',
      description: 'Build a complete web application with EC2 instances, RDS database, and S3 storage. Implement proper security groups and load balancing for high availability.',
      technologies: ['EC2', 'RDS', 'S3', 'VPC', 'ELB', 'IAM']
    },
    {
      projectTitle: 'Serverless API Backend',
      description: 'Create a serverless REST API using AWS Lambda, API Gateway, and DynamoDB. Implement authentication and monitoring with CloudWatch.',
      technologies: ['Lambda', 'API Gateway', 'DynamoDB', 'CloudWatch', 'IAM']
    },
    {
      projectTitle: 'Static Website with CDN',
      description: 'Deploy a static website using S3, CloudFront for global distribution, and Route 53 for DNS management.',
      technologies: ['S3', 'CloudFront', 'Route 53', 'Certificate Manager']
    }
  ],
  prerequisites: [
    'Basic understanding of web technologies (HTML, CSS, JavaScript)',
    'Familiarity with command line interface',
    'Basic networking concepts (IP addresses, domains)',
    'No prior cloud computing experience required',
    'Willingness to learn and practice hands-on exercises'
  ],
  features: [
    'Live instructor-led sessions',
    'Hands-on lab exercises with real AWS services',
    'Real-world projects and case studies',
    'AWS certification exam preparation',
    'Career guidance and interview preparation',
    '24/7 community support and Q&A',
    'Access to course materials for lifetime',
    'Certificate of completion'
  ],
  seo: {
    metaTitle: 'AWS Cloud Fundamentals Course | Learn AWS from Scratch - VR IT',
    metaDescription: 'Master AWS fundamentals with hands-on training. Learn EC2, S3, Lambda, and more. Perfect for beginners. Get AWS certified. Enroll now!',
    keywords: ['AWS', 'Cloud Computing', 'AWS Training', 'AWS Fundamentals', 'Cloud Certification', 'AWS Course', 'EC2', 'S3', 'Lambda']
  }
}

// Sample AWS Data Engineering course data
const awsDataEngineeringData = {
  _type: 'awsCourse',
  title: 'AWS Data Engineering',
  slug: {
    _type: 'slug',
    current: 'aws-data-engineering'
  },
  subtitle: 'Build scalable data pipelines and analytics solutions on AWS',
  description: 'Learn to design, build, and maintain robust data architectures using comprehensive AWS data services for massive scale analytics workloads.',
  duration: '10 weeks',
  level: 'intermediate',
  price: 599,
  originalPrice: 799,
  published: true,
  overview: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'This comprehensive course covers the entire data engineering lifecycle on AWS. You will learn to design, build, and maintain robust data architectures that can handle massive scale and complex analytics workloads.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Ideal for data professionals, software engineers, and analysts looking to transition into the high-demand field of data engineering with cloud-native solutions.'
        }
      ]
    }
  ],
  whatYouLearn: [
    'Design and implement scalable data lakes',
    'Build real-time streaming data pipelines',
    'Master AWS Glue for ETL processing',
    'Create data warehouses with Redshift',
    'Implement ML-powered analytics solutions',
    'Build interactive dashboards and reports',
    'Data governance and security best practices'
  ],
  curriculum: [
    {
      moduleTitle: 'Data Architecture Fundamentals',
      topics: [
        'Data Engineering Principles',
        'Data Lake vs Data Warehouse Architecture',
        'AWS Data Services Overview',
        'Data Governance and Security',
        'Cost Optimization Strategies'
      ]
    },
    {
      moduleTitle: 'Data Storage & Management',
      topics: [
        'S3 Data Lake Design Patterns',
        'Data Partitioning Strategies',
        'AWS Lake Formation',
        'Data Catalog and Metadata Management',
        'Storage Classes and Lifecycle Policies'
      ]
    },
    {
      moduleTitle: 'Data Processing with AWS Glue',
      topics: [
        'Glue ETL Jobs and Workflows',
        'Data Crawlers and Schema Discovery',
        'PySpark Programming for Data Processing',
        'Data Transformation Patterns',
        'Job Monitoring and Optimization'
      ]
    },
    {
      moduleTitle: 'Real-time Data Streaming',
      topics: [
        'Amazon Kinesis Data Streams',
        'Kinesis Data Firehose',
        'Kinesis Analytics and SQL',
        'Real-time Processing Patterns',
        'Stream Monitoring and Troubleshooting'
      ]
    }
  ],
  projects: [
    {
      projectTitle: 'Data Lake Analytics Platform',
      description: 'Build a complete data lake solution for a retail company with real-time analytics and ML insights.',
      technologies: ['S3', 'Glue', 'Athena', 'QuickSight', 'Lambda', 'Kinesis']
    },
    {
      projectTitle: 'Real-time IoT Data Pipeline',
      description: 'Design a streaming data architecture for IoT sensor data with real-time monitoring and alerts.',
      technologies: ['Kinesis', 'Lambda', 'DynamoDB', 'CloudWatch', 'SNS']
    },
    {
      projectTitle: 'Enterprise Data Warehouse',
      description: 'Implement a modern data warehouse solution with dimensional modeling and self-service analytics.',
      technologies: ['Redshift', 'Glue', 'S3', 'QuickSight', 'Step Functions']
    }
  ],
  prerequisites: [
    'AWS Cloud fundamentals knowledge',
    'SQL and database concepts',
    'Python programming experience (intermediate level)',
    'Understanding of data structures and algorithms',
    'Basic statistics and analytics knowledge',
    '1+ years of data-related work experience recommended'
  ],
  features: [
    'Advanced hands-on projects with real data',
    'Industry expert instructors',
    'Real-world case studies',
    'AWS certification preparation',
    'Career placement assistance',
    'Access to enterprise-grade tools',
    'Mentorship and code reviews',
    'Portfolio development support'
  ],
  seo: {
    metaTitle: 'AWS Data Engineering Course | Master Big Data & Analytics - VR IT',
    metaDescription: 'Learn AWS data engineering with hands-on projects. Master Glue, Redshift, Kinesis & more. Build scalable data pipelines. Enroll now!',
    keywords: ['AWS Data Engineering', 'Data Pipeline', 'ETL', 'AWS Glue', 'Redshift', 'Kinesis', 'Data Lake', 'Big Data', 'Analytics']
  }
}

// Function to create documents
async function createCourseData() {
  try {
    console.log('🚀 Starting to create AWS course data...')
    
    // Create AWS Cloud Fundamentals course
    const cloudFundamentals = await client.create(awsCloudFundamentalsData)
    console.log('✅ AWS Cloud Fundamentals course created:', cloudFundamentals._id)
    
    // Create AWS Data Engineering course
    const dataEngineering = await client.create(awsDataEngineeringData)
    console.log('✅ AWS Data Engineering course created:', dataEngineering._id)
    
    console.log('🎉 All course data has been successfully created!')
    console.log('You can now access your courses at:')
    console.log('- AWS Cloud Fundamentals: /courses/aws-cloud-fundamentals')
    console.log('- AWS Data Engineering: /courses/aws-data-engineering')
    
  } catch (error) {
    console.error('❌ Error creating course data:', error)
  }
}

// Function to check if data already exists
async function checkExistingData() {
  try {
    const existingCourses = await client.fetch(`*[_type == "awsCourse"]{title, slug}`)
    console.log('📋 Existing courses:', existingCourses)
    return existingCourses.length > 0
  } catch (error) {
    console.error('Error checking existing data:', error)
    return false
  }
}

// Main function
async function main() {
  console.log('🔍 Checking for existing course data...')
  const hasExisting = await checkExistingData()
  
  if (hasExisting) {
    console.log('⚠️  Courses already exist. Do you want to create duplicates? (Modify this script to update instead)')
    return
  }
  
  await createCourseData()
}

// Run the script
main().catch(console.error)
