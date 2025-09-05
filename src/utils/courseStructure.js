// Utility functions to structure and format AWS course data

/**
 * Structure course data for the course page component
 * @param {Object} courseData - Raw course data from Sanity
 * @returns {Object} Structured course data
 */
export const structureCourseData = (courseData) => {
  if (!courseData) return null

  return {
    // Basic info
    title: courseData.title,
    subtitle: courseData.subtitle,
    description: courseData.description,
    duration: courseData.duration,
    level: courseData.level,
    price: courseData.price,
    originalPrice: courseData.originalPrice,
    heroImage: courseData.heroImage,

    // Content sections
    overview: courseData.overview,
    curriculum: courseData.curriculum || [],
    projects: courseData.projects || [],
    prerequisites: courseData.prerequisites || [],
    whatYouLearn: courseData.whatYouLearn || [],
    features: courseData.features || [],

    // SEO data
    seo: {
      title: courseData.seo?.metaTitle || courseData.title,
      description: courseData.seo?.metaDescription || courseData.description,
      keywords: courseData.seo?.keywords || []
    }
  }
}

/**
 * Generate structured data for SEO
 * @param {Object} courseData - Structured course data
 * @returns {Object} Structured data object
 */
export const generateCourseStructuredData = (courseData) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseData.title,
    "description": courseData.description,
    "provider": {
      "@type": "Organization",
      "name": "VR IT AWS Training",
      "sameAs": "https://vritaws.com"
    }
  }
}
