const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  useCdn: false,
  token: 'skv9IT9S6cNvFqAaWg3P1Ad1QfNuMhoL03eBlO0CtztlrklGusMBu0FdvTLwruvOnyBKj8DQM00wlL0z5upsxaut1ZW0gp2cPdY99eGrhCl3jTx4g5uIB7rOQFn46lSR50XHgqfeY03WjuilyEQx59oB0K0sORmXcyUh2eNjCg5PdHeesEkG',
  apiVersion: '2024-01-01',
});

const awsDataEngineeringCourse = {
  _type: 'awsCourse',
  title: 'AWS Data Engineering',
  slug: {
    _type: 'slug',
    current: 'aws-data-engineering'
  },
  subtitle: 'Build scalable data pipelines, analytics solutions, and machine learning workflows using comprehensive AWS data services',
  description: 'This comprehensive course covers the entire data engineering lifecycle on AWS. You will learn to design, build, and maintain robust data architectures that can handle massive scale and complex analytics workloads.',
  duration: '10 weeks',
  level: 'intermediate',
  price: 599,
  originalPrice: 799,
  published: true,
  overview: [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'This comprehensive course covers the entire data engineering lifecycle on AWS. You will learn to design, build, and maintain robust data architectures that can handle massive scale and complex analytics workloads. Ideal for data professionals, software engineers, and analysts looking to transition into the high-demand field of data engineering with cloud-native solutions.'
        }
      ]
    }
  ],
  whatYouLearn: [
    'Scalable data lakes and warehouses',
    'Real-time streaming data pipelines',
    'ML-powered analytics solutions',
    'Interactive dashboards and reports',
    'Big data processing with EMR and Spark',
    'Data governance and security best practices'
  ],
  curriculum: [
    {
      moduleTitle: 'Data Architecture Fundamentals',
      topics: [
        'Data Engineering Principles',
        'Data Lake vs Data Warehouse',
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
        'Data Catalog and Metadata',
        'Storage Classes and Lifecycle Policies'
      ]
    },
    {
      moduleTitle: 'Data Processing with AWS Glue',
      topics: [
        'Glue ETL Jobs and Workflows',
        'Data Crawlers and Schema Discovery',
        'PySpark Programming',
        'Data Transformation Patterns',
        'Job Monitoring and Optimization'
      ]
    },
    {
      moduleTitle: 'Data Warehousing with Redshift',
      topics: [
        'Redshift Architecture and Design',
        'Data Modeling for Analytics',
        'Performance Optimization Techniques',
        'Redshift Spectrum for Data Lakes',
        'Backup and Disaster Recovery'
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
    },
    {
      moduleTitle: 'Analytics and Querying',
      topics: [
        'Amazon Athena Serverless Queries',
        'Query Optimization Techniques',
        'Data Formats (Parquet, ORC, Avro)',
        'Federated Queries',
        'Cost Management for Analytics'
      ]
    },
    {
      moduleTitle: 'Big Data Processing',
      topics: [
        'Amazon EMR Clusters',
        'Apache Spark on AWS',
        'Hadoop Ecosystem Integration',
        'Serverless Analytics Options',
        'Performance Tuning and Scaling'
      ]
    },
    {
      moduleTitle: 'Machine Learning Integration',
      topics: [
        'Amazon SageMaker for ML Pipelines',
        'Feature Engineering at Scale',
        'Model Training and Deployment',
        'MLOps on AWS',
        'AI Services Integration'
      ]
    },
    {
      moduleTitle: 'Data Visualization',
      topics: [
        'Amazon QuickSight Setup',
        'Dashboard Design Best Practices',
        'Interactive Analytics',
        'Embedded Analytics',
        'Third-party Integration (Tableau, Power BI)'
      ]
    },
    {
      moduleTitle: 'Workflow Orchestration',
      topics: [
        'AWS Step Functions for Data Workflows',
        'Apache Airflow on AWS',
        'Event-driven Data Processing',
        'Error Handling and Retry Logic',
        'Monitoring and Alerting'
      ]
    }
  ],
  projects: [
    {
      projectTitle: 'Data Lake Analytics Platform',
      description: 'Build a complete data lake solution for a retail company with real-time analytics and ML insights.',
      technologies: ['S3', 'Glue', 'Athena', 'QuickSight', 'Lambda', 'SageMaker']
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
    'AWS Cloud fundamentals',
    'SQL and database concepts',
    'Python programming experience',
    'Understanding of data structures',
    'Basic statistics and analytics',
    '1+ years of data-related work experience'
  ],
  features: [
    'Live instructor-led sessions',
    'Hands-on lab exercises',
    'Real-world capstone projects',
    'Industry expert mentorship',
    'Career placement assistance',
    'AWS certification preparation'
  ],
  seo: {
    metaTitle: 'AWS Data Engineering Course | Master Big Data & Analytics',
    metaDescription: 'Learn AWS data engineering with hands-on projects. Build data lakes, streaming pipelines, and ML workflows. Expert instruction and career support.',
    keywords: ['AWS Data Engineering', 'Data Lakes', 'Big Data', 'Data Pipelines', 'Machine Learning', 'Analytics']
  }
};

async function seedAwsDataEngineering() {
  try {
    console.log('Creating AWS Data Engineering course...');
    
    const result = await client.create(awsDataEngineeringCourse);
    
    console.log('✅ AWS Data Engineering course created successfully!');
    console.log(`Document ID: ${result._id}`);
    console.log(`Title: ${result.title}`);
    console.log(`Slug: ${result.slug.current}`);
    
  } catch (error) {
    console.error('❌ Error creating AWS Data Engineering course:', error);
    
    if (error.message.includes('already exists')) {
      console.log('📝 Course may already exist. Updating instead...');
      try {
        // Try to update instead
        const existingDocs = await client.fetch(`*[_type == "awsCourse" && slug.current == "aws-data-engineering"]`);
        if (existingDocs.length > 0) {
          const updated = await client
            .patch(existingDocs[0]._id)
            .set(awsDataEngineeringCourse)
            .commit();
          console.log('✅ AWS Data Engineering course updated successfully!');
        }
      } catch (updateError) {
        console.error('❌ Error updating course:', updateError);
      }
    }
  }
}

seedAwsDataEngineering();
