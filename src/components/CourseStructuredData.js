export default function CourseStructuredData({ course }) {
  if (!course || !course.seo) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description || course.subtitle,
    "provider": {
      "@type": "Organization",
      "name": course.seo.structuredData?.provider || "VR IT Academy",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ameerpet",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "url": "https://www.awsdevopstraininginhyderabad.com",
      "sameAs": [
        "https://www.facebook.com/vritacademy",
        "https://www.linkedin.com/company/vr-it-academy"
      ]
    },
    "instructor": {
      "@type": "Person",
      "name": course.seo.structuredData?.instructor || "AWS Certified Expert",
      "jobTitle": "Senior Cloud Architect"
    },
    "educationalLevel": course.seo.structuredData?.courseLevel || course.level,
    "coursePrerequisites": course.prerequisites?.join(', ') || "Basic computer knowledge",
    "timeRequired": course.duration,
    "inLanguage": "en",
    "availableLanguage": ["en", "hi", "te"],
    "courseMode": ["onsite", "online"],
    "locationCreated": {
      "@type": "Place",
      "name": "Hyderabad, Telangana, India",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana", 
        "addressCountry": "IN"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": course.price,
      "priceCurrency": "Rupee",
      "availability": "https://schema.org/InStock",
      "url": `https://www.awsdevopstraininginhyderabad.com/courses/${course.slug?.current}`,
      "validFrom": new Date().toISOString(),
      "seller": {
        "@type": "Organization",
        "name": "VR IT Academy"
      }
    },
    "aggregateRating": course.seo.structuredData?.reviewRating ? {
      "@type": "AggregateRating",
      "ratingValue": course.seo.structuredData.reviewRating,
      "reviewCount": course.seo.structuredData.reviewCount || 100,
      "bestRating": 5,
      "worstRating": 1
    } : null,
    "image": course.cardImageUrl || course.heroImageUrl,
    "url": `https://www.awsdevopstraininginhyderabad.com/courses/${course.slug?.current}`,
    "keywords": course.seo.keywords?.join(', '),
    "learningResourceType": "Course",
    "educationalUse": "Professional Development",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "blended",
      "location": {
        "@type": "Place",
        "name": "VR IT Academy, Ameerpet, Hyderabad",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ameerpet",
          "addressLocality": "Hyderabad", 
          "addressRegion": "Telangana",
          "postalCode": "500038",
          "addressCountry": "IN"
        }
      },
      "instructor": {
        "@type": "Person",
        "name": course.seo.structuredData?.instructor || "AWS Certified Expert"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}
