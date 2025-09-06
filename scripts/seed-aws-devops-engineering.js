const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3hir6j0e',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'
});

const awsDevOpsEngineering = {
  _type: 'awsCourse',
  title: 'AWS DevOps Engineering',
  subtitle: 'Master automated deployment pipelines, infrastructure as code, and continuous delivery practices using comprehensive AWS DevOps services',
  slug: {
    _type: 'slug',
    current: 'aws-devops-online-training-in-hyderabad'
  },
  description: 'This comprehensive course covers the complete DevOps lifecycle on AWS. Learn to build robust CI/CD pipelines, implement infrastructure as code, and establish monitoring and security practices for scalable applications.',
  level: 'intermediate',
  duration: '8 weeks',
  price: 499,
  originalPrice: 699,
  published: true,
  
  overview: [
    {
      _type: 'block',
      children: [{
        _type: 'span',
        text: 'This comprehensive course covers the complete DevOps lifecycle on AWS. Learn to build robust CI/CD pipelines, implement infrastructure as code, and establish monitoring and security practices for scalable applications. Perfect for developers, system administrators, and IT professionals looking to streamline software delivery and embrace DevOps culture.'
      }],
      style: 'normal'
    },
    {
      _type: 'block', 
      children: [{
        _type: 'span',
        text: 'Gain hands-on experience with AWS CodePipeline, CodeBuild, CodeDeploy, CloudFormation, and other essential DevOps tools while working on real-world projects that demonstrate industry best practices.'
      }],
      style: 'normal'
    }
  ],

  curriculum: [
    {
      moduleTitle: 'DevOps Fundamentals & AWS Overview',
      topics: [
        'DevOps Culture and Principles',
        'AWS DevOps Services Overview',
        'Version Control with AWS CodeCommit',
        'Development Workflow Best Practices',
        'Agile and DevOps Integration'
      ]
    },
    {
      moduleTitle: 'Continuous Integration with AWS CodeBuild',
      topics: [
        'CodeBuild Project Configuration',
        'Build Specifications (buildspec.yml)',
        'Automated Testing Integration',
        'Artifact Management with S3',
        'Build Environment Optimization'
      ]
    },
    {
      moduleTitle: 'Continuous Deployment with AWS CodeDeploy',
      topics: [
        'Deployment Strategies (Blue/Green, Rolling)',
        'Application and Deployment Groups',
        'EC2 and Lambda Deployments',
        'Rollback and Recovery Procedures',
        'Deployment Hooks and Scripts'
      ]
    },
    {
      moduleTitle: 'CI/CD Orchestration with AWS CodePipeline',
      topics: [
        'Pipeline Design and Configuration',
        'Source, Build, and Deploy Stages',
        'Multi-Environment Deployments',
        'Approval Actions and Gates',
        'Pipeline Monitoring and Troubleshooting'
      ]
    },
    {
      moduleTitle: 'Infrastructure as Code with CloudFormation',
      topics: [
        'CloudFormation Templates and Stacks',
        'Resource Dependencies and Parameters',
        'Nested Stacks and Cross-Stack References',
        'Change Sets and Stack Updates',
        'Best Practices for IaC'
      ]
    },
    {
      moduleTitle: 'Configuration Management & Secrets',
      topics: [
        'AWS Systems Manager Parameter Store',
        'AWS Secrets Manager Integration',
        'Environment-specific Configurations',
        'Secure Configuration Practices',
        'Configuration Drift Detection'
      ]
    },
    {
      moduleTitle: 'Container DevOps with ECS and EKS',
      topics: [
        'Docker Containerization on AWS',
        'Amazon ECS Task Definitions',
        'Amazon EKS Cluster Management',
        'Container CI/CD Pipelines',
        'Container Security and Monitoring'
      ]
    },
    {
      moduleTitle: 'Serverless DevOps with AWS Lambda',
      topics: [
        'Serverless Application Model (SAM)',
        'Lambda Function Deployments',
        'API Gateway Integration',
        'Event-driven Architectures',
        'Serverless Monitoring and Debugging'
      ]
    },
    {
      moduleTitle: 'Monitoring and Logging',
      topics: [
        'CloudWatch Metrics and Alarms',
        'Application and Infrastructure Monitoring',
        'CloudTrail for Audit Logging',
        'X-Ray for Distributed Tracing',
        'Custom Metrics and Dashboards'
      ]
    },
    {
      moduleTitle: 'Security and Compliance in DevOps',
      topics: [
        'DevSecOps Principles and Practices',
        'IAM Roles and Policies for Automation',
        'Security Scanning in Pipelines',
        'Compliance as Code',
        'Vulnerability Assessment and Remediation'
      ]
    }
  ],

  projects: [
    {
      projectTitle: 'Multi-Tier Web Application CI/CD',
      description: 'Build a complete CI/CD pipeline for a multi-tier web application with automated testing, security scanning, and multi-environment deployment.',
      technologies: ['CodePipeline', 'CodeBuild', 'CodeDeploy', 'CloudFormation', 'S3', 'EC2', 'RDS']
    },
    {
      projectTitle: 'Microservices Container Pipeline',
      description: 'Create a containerized microservices architecture with automated Docker builds, EKS deployments, and service mesh integration.',
      technologies: ['EKS', 'Docker', 'CodeBuild', 'ECR', 'Service Mesh', 'Helm']
    },
    {
      projectTitle: 'Serverless Application Deployment',
      description: 'Develop a serverless application with SAM templates, automated Lambda deployments, and API Gateway integration.',
      technologies: ['Lambda', 'SAM', 'API Gateway', 'DynamoDB', 'CodePipeline', 'CloudWatch']
    }
  ],

  prerequisites: [
    'AWS Cloud fundamentals knowledge',
    'Linux/Unix command line experience', 
    'Basic understanding of software development',
    'Familiarity with version control (Git)',
    'Networking and security concepts',
    '1+ years of IT operations or development experience'
  ],

  whatYouLearn: [
    'Complete CI/CD pipeline implementation',
    'Infrastructure as Code with CloudFormation',
    'Automated testing and deployment strategies',
    'Container and serverless DevOps practices',
    'Monitoring, logging, and observability',
    'Security integration in DevOps workflows'
  ],

  features: [
    'Live instructor-led sessions',
    'Hands-on lab exercises',
    'Real-world DevOps projects',
    'Industry expert mentorship',
    'Career placement assistance',
    'AWS certification preparation'
  ],

  seo: {
    metaTitle: 'AWS DevOps Engineering Course | Master CI/CD & Infrastructure',
    metaDescription: 'Learn AWS DevOps with hands-on CI/CD pipelines, infrastructure as code, and automation. Expert instruction and real projects. Enroll now!',
    keywords: ['AWS DevOps', 'CI/CD', 'CodePipeline', 'CloudFormation', 'DevOps Training', 'AWS Course', 'Infrastructure as Code', 'Automation']
  }
};

async function seedAWSDevOpsEngineering() {
  try {
    console.log('🌱 Creating AWS DevOps Engineering course...');
    
    const result = await client.create(awsDevOpsEngineering);
    console.log('✅ AWS DevOps Engineering course created successfully!');
    console.log('📄 Document ID:', result._id);
    console.log('🔗 Slug:', result.slug.current);
    
  } catch (error) {
    console.error('❌ Error creating course:', error);
  }
}

// Run the seeding
seedAWSDevOpsEngineering();
