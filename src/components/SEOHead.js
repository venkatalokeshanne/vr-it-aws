import Head from 'next/head';

export default function SEOHead({ course, isHomepage = false }) {
  // Default SEO data for homepage
  const defaultSEO = {
    title: 'Best AWS Training Institute in Hyderabad | VR IT Academy Ameerpet',
    description: 'Leading AWS training institute in Hyderabad with 100% placement guarantee. Learn AWS Cloud, DevOps, Data Engineering from industry experts in Ameerpet.',
    keywords: [
      'AWS training Hyderabad',
      'AWS courses Ameerpet', 
      'AWS training institute',
      'DevOps training Hyderabad',
      'cloud computing course',
      'AWS certification training'
    ],
    canonicalUrl: 'https://www.awsdevopstraininginhyderabad.com/',
    ogTitle: 'Best AWS Training Institute in Hyderabad - VR IT Academy',
    ogDescription: 'Join Hyderabad\'s #1 AWS training institute. Expert instructors, hands-on projects, 100% placement assistance.',
    ogImage: 'https://www.awsdevopstraininginhyderabad.com/og-image.jpg'
  };

  const seoData = course?.seo || {};
  
  const title = isHomepage 
    ? defaultSEO.title 
    : (seoData.metaTitle || `${course?.title} Training in Hyderabad | VR IT Academy`);
    
  const description = isHomepage 
    ? defaultSEO.description
    : (seoData.metaDescription || course?.description || defaultSEO.description);
    
  const keywords = isHomepage 
    ? defaultSEO.keywords
    : (seoData.keywords || defaultSEO.keywords);
    
  const canonicalUrl = seoData.canonicalUrl || (isHomepage 
    ? defaultSEO.canonicalUrl 
    : `https://www.awsdevopstraininginhyderabad.com/courses/${course?.slug?.current}`);
  const ogTitle = seoData.ogTitle || title;
  const ogDescription = seoData.ogDescription || description;
  const ogImage = seoData.ogImageUrl || course?.cardImageUrl || defaultSEO.ogImage;

  // Generate Course structured data
  const generateCourseStructuredData = () => {
    if (!course || isHomepage) return null;
    
    const structuredData = course.seo?.structuredData || {};
    
    return {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": course.title,
      "description": course.description || course.subtitle,
      "provider": {
        "@type": "Organization",
        "name": structuredData.provider || "VR IT Academy",
        "url": "https://www.awsdevopstraininginhyderabad.com"
      },
      "instructor": {
        "@type": "Person",
        "name": structuredData.instructor || "AWS Certified Expert"
      },
      "courseLevel": structuredData.courseLevel || course.level,
      "timeRequired": course.duration,
      "offers": {
        "@type": "Offer",
        "price": course.price,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": structuredData.reviewRating ? {
        "@type": "AggregateRating",
        "ratingValue": structuredData.reviewRating,
        "reviewCount": structuredData.reviewCount || 100,
        "bestRating": 5,
        "worstRating": 1
      } : null,
      "image": course.cardImageUrl,
      "url": `https://www.awsdevopstraininginhyderabad.com/courses/${course.slug?.current}`
    };
  };

  // Generate Organization structured data for homepage
  const generateOrganizationStructuredData = () => {
    if (!isHomepage) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "VR IT Academy",
      "alternateName": "VR IT Academy AWS Training Institute",
      "description": "Leading AWS training institute in Hyderabad providing comprehensive cloud computing and DevOps training with placement assistance.",
      "url": "https://www.awsdevopstraininginhyderabad.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ameerpet",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Admissions",
        "availableLanguage": ["English", "Hindi", "Telugu"]
      },
      "sameAs": [
        "https://www.facebook.com/vritacademy",
        "https://www.linkedin.com/company/vr-it-academy",
        "https://www.youtube.com/vritacademy"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.8,
        "reviewCount": 2500,
        "bestRating": 5,
        "worstRating": 1
      }
    };
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="VR IT Academy" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="VR IT Academy" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad, Telangana" />
      <meta name="geo.position" content="17.4065;78.4772" />
      <meta name="ICBM" content="17.4065, 78.4772" />
      
      {/* Course-specific meta for rich snippets */}
      {!isHomepage && course && (
        <>
          <meta property="product:price:amount" content={course.price} />
          <meta property="product:price:currency" content="USD" />
          <meta name="course:level" content={course.level} />
          <meta name="course:duration" content={course.duration} />
        </>
      )}
      
      {/* Structured Data */}
      {isHomepage ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationStructuredData()),
          }}
        />
      ) : (
        course && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateCourseStructuredData()),
            }}
          />
        )
      )}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </Head>
  );
}
