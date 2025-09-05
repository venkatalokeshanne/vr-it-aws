const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  useCdn: false,
  token: 'skv9IT9S6cNvFqAaWg3P1Ad1QfNuMhoL03eBlO0CtztlrklGusMBu0FdvTLwruvOnyBKj8DQM00wlL0z5upsxaut1ZW0gp2cPdY99eGrhCl3jTx4g5uIB7rOQFn46lSR50XHgqfeY03WjuilyEQx59oB0K0sORmXcyUh2eNjCg5PdHeesEkG',
  apiVersion: '2024-01-01',
});

async function seedSEOHeadings() {
  try {
    // Get all courses
    const courses = await client.fetch('*[_type == "awsCourse"]');
    
    for (const course of courses) {
      let seoHeadings = [];
      
      // Generate SEO headings based on course slug
      switch (course.slug.current) {
        case 'aws-cloud-fundamentals':
          seoHeadings = [
            {
              level: 'h1',
              text: 'AWS Cloud Fundamentals Training Course - Comprehensive Cloud Computing Education'
            },
            {
              level: 'h2',
              text: 'Master AWS Cloud Computing Basics - Beginner to Professional Level'
            },
            {
              level: 'h2',
              text: 'AWS Cloud Infrastructure and Services Training Program'
            },
            {
              level: 'h3',
              text: 'Cloud Computing Certification Preparation Course'
            },
            {
              level: 'h3',
              text: 'AWS Fundamentals Learning Path and Career Development'
            },
            {
              level: 'h4',
              text: 'Cloud Technology Skills Building Workshop'
            }
          ];
          break;
        
        case 'aws-devops-engineering':
          seoHeadings = [
            {
              level: 'h1',
              text: 'AWS DevOps Engineering Training - Complete CI/CD and Automation Course'
            },
            {
              level: 'h2',
              text: 'Master DevOps Practices with AWS Tools and Technologies'
            },
            {
              level: 'h2',
              text: 'AWS DevOps Pipeline Development and Infrastructure Automation'
            },
            {
              level: 'h3',
              text: 'DevOps Engineer Certification and Professional Skills Training'
            },
            {
              level: 'h3',
              text: 'AWS DevOps Best Practices and Cloud Operations Management'
            },
            {
              level: 'h4',
              text: 'DevOps Career Development and Industry Expertise'
            }
          ];
          break;
        
        case 'aws-data-engineering':
          seoHeadings = [
            {
              level: 'h1',
              text: 'AWS Data Engineering Training - Big Data Analytics and Processing Course'
            },
            {
              level: 'h2',
              text: 'Master Data Engineering with AWS Analytics and Machine Learning Services'
            },
            {
              level: 'h2',
              text: 'AWS Data Pipeline Development and Analytics Solutions Training'
            },
            {
              level: 'h3',
              text: 'Data Engineer Certification and Professional Data Processing Skills'
            },
            {
              level: 'h3',
              text: 'AWS Data Engineering Best Practices and Scalable Architecture Design'
            },
            {
              level: 'h4',
              text: 'Data Engineering Career Growth and Industry Leadership'
            }
          ];
          break;
        
        default:
          seoHeadings = [
            {
              level: 'h1',
              text: `${course.title} - Professional AWS Training Course`
            },
            {
              level: 'h2',
              text: `Master ${course.title} with Expert-Led Training`
            },
            {
              level: 'h3',
              text: `${course.title} Certification and Skills Development`
            }
          ];
      }
      
      // Update the course with SEO headings
      const updatedCourse = await client
        .patch(course._id)
        .set({
          'seo.seoHeadings': seoHeadings
        })
        .commit();
      
      console.log(`✅ Updated SEO headings for: ${course.title}`);
      console.log(`   Added ${seoHeadings.length} headings`);
      seoHeadings.forEach((heading, index) => {
        console.log(`   ${heading.level.toUpperCase()}: ${heading.text}`);
      });
      console.log('');
    }
    
    console.log('🎉 All SEO headings updated successfully!');
  } catch (error) {
    console.error('❌ Error seeding SEO headings:', error);
  }
}

// Run the seeding
seedSEOHeadings();
