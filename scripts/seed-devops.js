const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skv9IT9S6cNvFqAaWg3P1Ad1QfNuMhoL03eBlO0CtztlrklGusMBu0FdvTLwruvOnyBKj8DQM00wlL0z5upsxaut1ZW0gp2cPdY99eGrhCl3jTx4g5uIB7rOQFn46lSR50XHgqfeY03WjuilyEQx59oB0K0sORmXcyUh2eNjCg5PdHeesEkG',
});

const awsDevOpsData = {
  _type: 'awsCourse',
  title: 'AWS DevOps Engineering',
  slug: {
    _type: 'slug',
    current: 'aws-devops-engineering'
  },
  subtitle: 'Master CI/CD pipelines, Infrastructure as Code, and automation using AWS DevOps tools',
  description: 'This advanced course focuses on DevOps practices and automation using AWS services. Learn to build robust CI/CD pipelines, implement Infrastructure as Code, and automate deployment processes for modern applications.',
  duration: '10 weeks',
  level: 'advanced',
  price: 499,
  originalPrice: 699,
  published: true,
  overview: [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'This advanced course focuses on DevOps practices and automation using AWS services. You will learn to build robust CI/CD pipelines, implement Infrastructure as Code, and automate deployment processes for modern applications.'
        }
      ]
    },
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'Perfect for developers, system administrators, and IT professionals looking to streamline software delivery and embrace DevOps culture in cloud environments.'
        }
      ]
    }
  ],
  whatYouLearn: [
    'Build automated CI/CD pipelines with AWS CodePipeline',
    'Infrastructure as Code with CloudFormation & Terraform',
    'Container orchestration with Amazon EKS',
    'Monitoring and logging with CloudWatch and X-Ray',
    'Security and compliance in DevOps workflows',
    'Blue/Green and Canary deployment strategies',
    'Automated testing and quality assurance integration'
  ],
  curriculum: [
    {
      moduleTitle: 'DevOps Fundamentals',
      topics: [
        'DevOps Culture and Principles',
        'Continuous Integration/Continuous Deployment',
        'Version Control with Git',
        'Agile and DevOps Methodologies',
        'AWS DevOps Tools Overview'
      ]
    },
    {
      moduleTitle: 'Source Control & Code Management',
      topics: [
        'AWS CodeCommit Setup',
        'Git Workflows and Branching Strategies',
        'Code Review Processes',
        'Integration with GitHub/GitLab',
        'Security and Access Controls'
      ]
    },
    {
      moduleTitle: 'Build Automation',
      topics: [
        'AWS CodeBuild Configuration',
        'Build Specifications (buildspec.yml)',
        'Multi-stage Builds',
        'Artifact Management',
        'Build Optimization Techniques'
      ]
    },
    {
      moduleTitle: 'CI/CD Pipelines',
      topics: [
        'AWS CodePipeline Design',
        'Pipeline Stages and Actions',
        'Automated Testing Integration',
        'Deployment Strategies',
        'Pipeline Monitoring and Troubleshooting'
      ]
    },
    {
      moduleTitle: 'Deployment Automation',
      topics: [
        'AWS CodeDeploy Configuration',
        'Blue/Green Deployments',
        'Rolling Deployments',
        'Canary Releases',
        'Rollback Strategies'
      ]
    },
    {
      moduleTitle: 'Infrastructure as Code',
      topics: [
        'AWS CloudFormation Templates',
        'Terraform with AWS Provider',
        'CDK (Cloud Development Kit)',
        'Template Management and Versioning',
        'Cross-Region Deployments'
      ]
    },
    {
      moduleTitle: 'Containerization & Orchestration',
      topics: [
        'Docker Fundamentals',
        'Amazon ECR (Elastic Container Registry)',
        'ECS (Elastic Container Service)',
        'EKS (Elastic Kubernetes Service)',
        'Fargate Serverless Containers'
      ]
    },
    {
      moduleTitle: 'Monitoring & Logging',
      topics: [
        'CloudWatch Metrics and Dashboards',
        'Application Performance Monitoring',
        'Log Aggregation and Analysis',
        'X-Ray Distributed Tracing',
        'Alerting and Incident Response'
      ]
    }
  ],
  projects: [
    {
      projectTitle: 'Full CI/CD Pipeline',
      description: 'Build an end-to-end CI/CD pipeline for a microservices application with automated testing and deployment.',
      technologies: ['CodePipeline', 'CodeBuild', 'CodeDeploy', 'CloudFormation', 'Docker', 'Lambda']
    },
    {
      projectTitle: 'Infrastructure as Code',
      description: 'Deploy a complete application infrastructure using CloudFormation and Terraform with version control.',
      technologies: ['CloudFormation', 'Terraform', 'VPC', 'Auto Scaling', 'RDS', 'CloudWatch']
    },
    {
      projectTitle: 'Kubernetes on AWS',
      description: 'Deploy and manage containerized applications using EKS with automated scaling and monitoring.',
      technologies: ['EKS', 'Docker', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana']
    }
  ],
  prerequisites: [
    'AWS Cloud Fundamentals certification or equivalent knowledge',
    'Linux/Unix command line proficiency',
    'Programming experience (Python, Java, or Node.js)',
    'Basic understanding of software development lifecycle',
    'Familiarity with version control (Git)',
    'Understanding of networking concepts'
  ],
  features: [
    'Advanced hands-on labs and projects',
    'Real-world DevOps scenarios',
    'Industry best practices and patterns',
    'Expert instructor-led sessions',
    'Career guidance and certification prep',
    'Access to course materials for 12 months'
  ],
  seo: {
    metaTitle: 'AWS DevOps Engineering Course | Master CI/CD & Infrastructure as Code',
    metaDescription: 'Advanced AWS DevOps training with hands-on CI/CD pipelines, Infrastructure as Code, and container orchestration. Perfect for DevOps professionals and system administrators.',
    keywords: [
      'AWS DevOps',
      'CI/CD Pipeline',
      'Infrastructure as Code',
      'CloudFormation',
      'Terraform',
      'Amazon EKS',
      'Docker',
      'Kubernetes',
      'AWS CodePipeline',
      'DevOps Engineering'
    ]
  }
};

async function seedDevOpsData() {
  try {
    console.log('Creating AWS DevOps Engineering course...');
    const result = await client.create(awsDevOpsData);
    console.log('✅ AWS DevOps Engineering course created successfully!');
    console.log('Document ID:', result._id);
    console.log('Slug:', result.slug.current);
  } catch (error) {
    console.error('❌ Error creating course:', error.message);
    if (error.details) {
      console.error('Details:', error.details);
    }
  }
}

seedDevOpsData();
