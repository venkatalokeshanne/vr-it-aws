const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'data');

function showCoursesData() {
  try {
    // Read courses summary
    const summaryPath = path.join(dataDir, 'courses-summary.json');
    if (fs.existsSync(summaryPath)) {
      const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
      
      console.log('📊 Courses Summary:');
      console.log(`   Total Courses: ${summary.totalCourses}`);
      console.log(`   Last Updated: ${summary.lastUpdated}`);
      console.log('\n📚 Available Courses:');
      
      summary.courses.forEach((course, index) => {
        console.log(`   ${index + 1}. ${course.title}`);
        console.log(`      Slug: ${course.slug}`);
        console.log(`      Level: ${course.level}`);
        console.log(`      Duration: ${course.duration}`);
        console.log(`      Price: $${course.price}`);
        console.log('');
      });
    }

    // List all individual course files
    console.log('📁 Generated Files:');
    const files = fs.readdirSync(dataDir);
    files.forEach(file => {
      const filePath = path.join(dataDir, file);
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024 * 100) / 100;
      console.log(`   ${file} (${sizeKB}KB)`);
    });

  } catch (error) {
    console.error('❌ Error reading courses data:', error.message);
    console.log('\n💡 Run "npm run fetch-courses" first to generate the data files.');
  }
}

showCoursesData();
