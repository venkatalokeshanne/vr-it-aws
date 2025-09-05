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

const query = `
  *[_type == "awsCourse" && published == true] {
    _id,
    title,
    slug,
    subtitle,
    description,
    duration,
    level,
    price,
    originalPrice,
    heroImage,
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
    _createdAt,
    published
  }
`;

async function generateStaticData() {
  try {
    console.log('🔄 Fetching courses from Sanity...');
    const courses = await client.fetch(query);
    
    console.log(`✅ Fetched ${courses.length} courses from Sanity`);

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'src', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Generate JavaScript file with the course data
    const jsContent = `// Auto-generated static course data
// Generated on: ${new Date().toISOString()}

const coursesData = ${JSON.stringify(courses, null, 2)};

export function getAllCourses() {
  return coursesData;
}

export function getCourseBySlug(slug) {
  return coursesData.find(course => course.slug?.current === slug) || null;
}

export default coursesData;
`;

    const jsFilePath = path.join(dataDir, 'staticCourses.js');
    fs.writeFileSync(jsFilePath, jsContent);

    console.log(`💾 Generated static course data at ${jsFilePath}`);
    
    // Also create individual course files
    courses.forEach(course => {
      if (course.slug?.current) {
        const courseContent = `// Auto-generated course data for ${course.slug.current}
export default ${JSON.stringify(course, null, 2)};
`;
        const courseFilePath = path.join(dataDir, `${course.slug.current}.js`);
        fs.writeFileSync(courseFilePath, courseContent);
        console.log(`📄 Generated ${course.slug.current}.js`);
      }
    });

    console.log('\n🎉 Static course data generation complete!');
    console.log(`📊 Generated files for ${courses.length} courses`);
    
  } catch (error) {
    console.error('❌ Error generating static data:', error.message);
    process.exit(1);
  }
}

generateStaticData();
