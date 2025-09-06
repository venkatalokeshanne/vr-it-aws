// Static course data loader - client-side compatible

// Fallback data for development
const fallbackCourses = [
  {
    _id: 'aws-cloud-online-training-in-hyderabad',
    title: 'AWS Cloud Fundamentals',
    slug: { current: 'aws-cloud-online-training-in-hyderabad' },
    subtitle: 'Master the essential concepts and services of Amazon Web Services',
    description: 'Start your cloud journey with comprehensive AWS fundamentals training. Learn core services, security best practices, and hands-on implementation.',
    duration: '6 weeks',
    level: 'beginner',
    price: 299,
    originalPrice: 399,
    published: true,
    overview: [
      {
        children: [
          {
            text: 'This comprehensive course introduces you to the fundamental concepts and core services of Amazon Web Services (AWS). You will learn essential cloud computing principles, explore key AWS services, and gain hands-on experience building scalable cloud solutions.'
          }
        ]
      }
    ],
    whatYouLearn: [
      'AWS Core Services (EC2, S3, RDS, Lambda)',
      'Cloud Security and Identity Management',
      'Networking and Content Delivery',
      'Monitoring and Cost Optimization',
      'Infrastructure as Code with CloudFormation'
    ],
    curriculum: [
      {
        moduleTitle: 'AWS Cloud Introduction',
        topics: ['Cloud Computing Concepts', 'AWS Global Infrastructure', 'AWS Management Console', 'AWS CLI Basics']
      },
      {
        moduleTitle: 'Core Compute Services',
        topics: ['Amazon EC2', 'Auto Scaling Groups', 'Elastic Load Balancing', 'AWS Lambda']
      },
      {
        moduleTitle: 'Storage and Databases',
        topics: ['Amazon S3', 'Amazon EBS', 'Amazon RDS', 'DynamoDB Basics']
      },
      {
        moduleTitle: 'Networking and Security',
        topics: ['VPC Fundamentals', 'Security Groups', 'IAM Roles and Policies', 'AWS CloudTrail']
      }
    ],
    projects: [
      {
        projectTitle: 'Multi-Tier Web Application',
        description: 'Build a scalable web application using EC2, RDS, and S3 with proper security configurations.',
        technologies: ['EC2', 'RDS', 'S3', 'VPC', 'IAM']
      },
      {
        projectTitle: 'Serverless API Backend',
        description: 'Create a serverless API using Lambda, API Gateway, and DynamoDB.',
        technologies: ['Lambda', 'API Gateway', 'DynamoDB', 'CloudWatch']
      }
    ],
    prerequisites: [
      'Basic understanding of web technologies',
      'Familiarity with command line interface',
      'Basic networking concepts',
      'No prior cloud experience required'
    ],
    features: [
      'Live instructor-led sessions',
      'Hands-on lab exercises',
      'Real-world projects',
      'AWS certification preparation',
      'Career guidance and support'
    ],
    seo: {
      metaTitle: 'AWS Cloud Fundamentals Course | Learn AWS from Scratch',
      metaDescription: 'Master AWS fundamentals with hands-on training. Learn EC2, S3, Lambda, and more. Perfect for beginners. Enroll now!',
      keywords: ['AWS', 'Cloud Computing', 'AWS Training', 'AWS Fundamentals', 'Cloud Certification']
    }
  },
  {
    _id: 'aws-data-engineering-online-training-in-hyderabad',
    title: 'AWS Data Engineering',
    slug: { current: 'aws-data-engineering-online-training-in-hyderabad' },
    subtitle: 'Build scalable data pipelines, analytics solutions, and machine learning workflows',
    description: 'Build scalable data pipelines, analytics solutions, and machine learning workflows using comprehensive AWS data services.',
    duration: '10 weeks',
    level: 'intermediate',
    price: 599,
    originalPrice: 799,
    published: true
  },
  {
    _id: 'aws-devops-online-training-in-hyderabad',
    title: 'AWS DevOps Engineering',
    slug: { current: 'aws-devops-online-training-in-hyderabad' },
    subtitle: 'Master CI/CD pipelines, Infrastructure as Code, and automation using AWS DevOps tools',
    description: 'Master CI/CD pipelines, Infrastructure as Code, and automation using AWS DevOps tools to accelerate software delivery.',
    duration: '10 weeks',
    level: 'advanced',
    price: 499,
    originalPrice: 699,
    published: true
  }
];

// Try to load static data first, fall back to hardcoded data
let staticCoursesData = [];

try {
  // Dynamic import for static JSON files
  staticCoursesData = require('../../data/courses.json');
} catch (error) {
  console.warn('Static courses data not found, using fallback data');
  staticCoursesData = fallbackCourses;
}

// Get all courses - tries static first, then fallback
export function getAllCourses() {
  if (staticCoursesData && staticCoursesData.length > 0) {
    return staticCoursesData;
  }
  return fallbackCourses;
}

// Get course by slug - tries static first, then fallback
export function getCourseBySlug(slug) {
  const courses = getAllCourses();
  return courses.find(course => course.slug?.current === slug) || null;
}

export default { getAllCourses, getCourseBySlug };
