const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skv9IT9S6cNvFqAaWg3P1Ad1QfNuMhoL03eBlO0CtztlrklGusMBu0FdvTLwruvOnyBKj8DQM00wlL0z5upsxaut1ZW0gp2cPdY99eGrhCl3jTx4g5uIB7rOQFn46lSR50XHgqfeY03WjuilyEQx59oB0K0sORmXcyUh2eNjCg5PdHeesEkG',
});

// Query to fetch all published AWS courses with complete data
const allCoursesQuery = `
  *[_type == "awsCourse" && published == true] {
    _id,
    title,
    subtitle,
    description,
    duration,
    level,
    price,
    originalPrice,
    heroImage,
    "slug": slug.current,
    overview,
    curriculum[] {
      moduleTitle,
      topics
    },
    projects[] {
      projectTitle,
      description,
      technologies
    },
    prerequisites,
    whatYouLearn,
    features,
    seo {
      metaTitle,
      metaDescription,
      keywords
    },
    published,
    _createdAt,
    _updatedAt
  }
`;

async function fetchAndSaveCourses() {
  try {
    console.log('🔄 Fetching courses from Sanity...');
    
    const courses = await client.fetch(allCoursesQuery);
    console.log(`✅ Fetched ${courses.length} courses from Sanity`);

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
      console.log('📁 Created data directory');
    }

    // Save all courses to JSON file
    const coursesFilePath = path.join(dataDir, 'courses.json');
    fs.writeFileSync(coursesFilePath, JSON.stringify(courses, null, 2));
    console.log(`💾 Saved all courses to ${coursesFilePath}`);

    // Create individual course files by slug for easier access
    const coursesMap = {};
    courses.forEach(course => {
      if (course.slug) {
        coursesMap[course.slug] = course;
        
        // Also save individual course files
        const courseFilePath = path.join(dataDir, `${course.slug}.json`);
        fs.writeFileSync(courseFilePath, JSON.stringify(course, null, 2));
        console.log(`📄 Saved ${course.title} to ${courseFilePath}`);
      }
    });

    // Save courses map for easy lookup
    const coursesMapFilePath = path.join(dataDir, 'courses-map.json');
    fs.writeFileSync(coursesMapFilePath, JSON.stringify(coursesMap, null, 2));
    console.log(`🗺️  Saved courses map to ${coursesMapFilePath}`);

    // Generate summary
    const summary = {
      totalCourses: courses.length,
      lastUpdated: new Date().toISOString(),
      courses: courses.map(course => ({
        slug: course.slug,
        title: course.title,
        level: course.level,
        duration: course.duration,
        price: course.price
      }))
    };

    const summaryFilePath = path.join(dataDir, 'courses-summary.json');
    fs.writeFileSync(summaryFilePath, JSON.stringify(summary, null, 2));
    console.log(`📋 Saved courses summary to ${summaryFilePath}`);

    console.log('\n🎉 All courses data successfully fetched and saved!');
    console.log(`📊 Summary: ${courses.length} courses processed`);
    
    courses.forEach(course => {
      console.log(`   • ${course.title} (${course.slug})`);
    });

  } catch (error) {
    console.error('❌ Error fetching courses:', error.message);
    if (error.details) {
      console.error('Details:', error.details);
    }
    process.exit(1);
  }
}

// Run the fetch function
fetchAndSaveCourses();
