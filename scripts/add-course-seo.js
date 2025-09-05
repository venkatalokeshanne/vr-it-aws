const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3hir6j0e',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'
});

// SEO data for each course
const courseSEOData = {
  'aws-cloud-fundamentals': {
    seo: {
      metaTitle: 'AWS Cloud Fundamentals Training in Hyderabad | VR IT Academy',
      metaDescription: 'Master AWS Cloud Fundamentals in Hyderabad with hands-on training. Get AWS certified with guaranteed placement assistance. Join Ameerpet\'s top AWS institute.',
      keywords: [
        'AWS training Hyderabad',
        'AWS cloud fundamentals',
        'AWS certification Hyderabad',
        'cloud computing training Ameerpet',
        'AWS courses Hyderabad',
        'AWS training institute',
        'cloud fundamentals course',
        'AWS basics training'
      ],
      ogTitle: 'AWS Cloud Fundamentals Training in Hyderabad - VR IT Academy',
      ogDescription: 'Join Hyderabad\'s #1 AWS training institute. Master cloud fundamentals with industry experts. 100% placement assistance guaranteed.',
      structuredData: {
        courseLevel: 'Beginner',
        instructor: 'AWS Certified Cloud Architect',
        provider: 'VR IT Academy',
        reviewRating: 4.8,
        reviewCount: 1250
      }
    }
  },
  'aws-devops-engineering': {
    seo: {
      metaTitle: 'AWS DevOps Engineering Training in Hyderabad | Best DevOps Course',
      metaDescription: 'Learn AWS DevOps Engineering in Hyderabad with Docker, Kubernetes, CI/CD. Industry-expert training with real projects. Guaranteed placements in top companies.',
      keywords: [
        'AWS DevOps training Hyderabad',
        'DevOps course Hyderabad',
        'Docker Kubernetes training',
        'CI/CD pipeline course',
        'DevOps engineer training',
        'AWS DevOps certification',
        'DevOps training Ameerpet',
        'Jenkins training Hyderabad'
      ],
      ogTitle: 'AWS DevOps Engineering Training - Master CI/CD & Automation',
      ogDescription: 'Become a DevOps Engineer with AWS, Docker, Kubernetes training. Live projects, expert mentorship, and guaranteed job placement.',
      structuredData: {
        courseLevel: 'Intermediate',
        instructor: 'Senior DevOps Engineer (10+ years)',
        provider: 'VR IT Academy',
        reviewRating: 4.9,
        reviewCount: 950
      }
    }
  },
  'aws-data-engineering': {
    seo: {
      metaTitle: 'AWS Data Engineering Training in Hyderabad | Big Data Analytics Course',
      metaDescription: 'Master AWS Data Engineering with Redshift, Glue, Kinesis. Learn big data analytics, ML pipelines. Expert training with placement support in Hyderabad.',
      keywords: [
        'AWS Data Engineering Hyderabad',
        'big data training Hyderabad',
        'AWS Redshift training',
        'data analytics course',
        'data engineer training',
        'AWS Glue training',
        'machine learning pipeline',
        'data engineering course Ameerpet'
      ],
      ogTitle: 'AWS Data Engineering Training - Build Scalable Data Pipelines',
      ogDescription: 'Transform your career with AWS Data Engineering. Learn from industry experts, work on real projects, get placed in top data companies.',
      structuredData: {
        courseLevel: 'Advanced',
        instructor: 'Senior Data Engineer (12+ years)',
        provider: 'VR IT Academy',
        reviewRating: 4.7,
        reviewCount: 780
      }
    }
  }
};

async function addSEOToCourses() {
  try {
    console.log('🔍 Fetching courses from Sanity...');
    
    const courses = await client.fetch(
      `*[_type == "awsCourse" && defined(slug.current)] {
        _id,
        title,
        "slug": slug.current
      }`
    );
    
    console.log(`📚 Found ${courses.length} courses`);
    
    for (const course of courses) {
      console.log(`\n🔄 Adding SEO data to: ${course.title} (${course.slug})`);
      
      const seoData = courseSEOData[course.slug];
      if (!seoData) {
        console.log(`⚠️  No SEO data configured for ${course.slug}`);
        continue;
      }
      
      console.log(`📝 Updating ${course.title} with comprehensive SEO data...`);
      
      await client
        .patch(course._id)
        .set(seoData)
        .commit();
        
      console.log(`✅ Added SEO data to ${course.title}!`);
    }
    
    console.log('\n🎉 SEO data addition complete!');
    
  } catch (error) {
    console.error('❌ Error adding SEO data:', error);
  }
}

// Run the SEO addition
addSEOToCourses();
