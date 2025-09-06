const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3hir6j0e',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'
});

// Course image mappings based on course slugs - All images sized to 1,200 × 630 px
const courseImages = {
  'aws-cloud-online-training-in-hyderabad': {
    cardImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop&crop=center',
    bannerImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop&crop=center',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=630&fit=crop&crop=center'
  },
  'aws-devops-online-training-in-hyderabad': {
    cardImage: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&h=630&fit=crop&crop=center',
    bannerImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630&fit=crop&crop=center',
    heroImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=630&fit=crop&crop=center'
  },
  'aws-data-engineering-online-training-in-hyderabad': {
    cardImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop&crop=center',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&crop=center',
    heroImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=630&fit=crop&crop=center'
  }
};

async function uploadImageFromUrl(imageUrl, filename) {
  try {
    console.log(`📷 Uploading image: ${filename}`);
    
    // Fetch the image
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Upload to Sanity
    const asset = await client.assets.upload('image', buffer, {
      filename: filename,
      contentType: response.headers.get('content-type') || 'image/jpeg'
    });
    
    console.log(`✅ Uploaded: ${filename} -> ${asset._id}`);
    return asset;
    
  } catch (error) {
    console.error(`❌ Error uploading ${filename}:`, error);
    return null;
  }
}

async function updateCourseImages() {
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
      console.log(`\n🔄 Processing course: ${course.title} (${course.slug})`);
      
      const images = courseImages[course.slug];
      if (!images) {
        console.log(`⚠️  No images configured for ${course.slug}`);
        continue;
      }
      
      const imageAssets = {};
      
      // Upload each image type
      for (const [imageType, imageUrl] of Object.entries(images)) {
        const filename = `${course.slug}-${imageType}.jpg`;
        const asset = await uploadImageFromUrl(imageUrl, filename);
        
        if (asset) {
          imageAssets[imageType] = {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: asset._id
            }
          };
        }
      }
      
      if (Object.keys(imageAssets).length > 0) {
        console.log(`📝 Updating course ${course.title} with ${Object.keys(imageAssets).length} images...`);
        
        await client
          .patch(course._id)
          .set(imageAssets)
          .commit();
          
        console.log(`✅ Updated ${course.title} successfully!`);
      }
    }
    
    console.log('\n🎉 Course image updates complete!');
    
  } catch (error) {
    console.error('❌ Error updating course images:', error);
  }
}

// Run the update
updateCourseImages();
