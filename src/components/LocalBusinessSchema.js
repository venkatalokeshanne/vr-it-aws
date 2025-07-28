export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://awsdevopstraininghyderabad.com",
    "name": "AWS DevOps Training Hyderabad",
    "alternateName": "Best AWS Training Institute Hyderabad",
    "description": "Premier AWS DevOps training institute in Hyderabad offering comprehensive cloud computing courses with 100% placement assistance. Located in HITEC City.",
    "url": "https://awsdevopstraininghyderabad.com",
    "telephone": "+91-9032734343",
    "email": "info@awsdevopstraininghyderabad.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5th floor 506, Nilgiri block, ADITYA ENCLAVE, a/a, Satyam Theatre Rd, Kumar Basti, Ameerpet",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500073",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4399",
      "longitude": "78.4483"
    },
    "hasMap": "https://maps.google.com/?q=17.4399,78.4483",
    "image": [
      "https://awsdevopstraininghyderabad.com/institute-image.jpg",
      "https://awsdevopstraininghyderabad.com/classroom-image.jpg",
      "https://awsdevopstraininghyderabad.com/lab-image.jpg"
    ],
    "logo": "https://awsdevopstraininghyderabad.com/logo.png",
    "priceRange": "₹₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Bank Transfer",
    "openingHours": [
      "Mo-Sa 09:00-21:00",
      "Su 10:00-18:00"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Hyderabad"
      },
      {
        "@type": "State", 
        "name": "Telangana"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "17.4399",
        "longitude": "78.4483"
      },
      "geoRadius": "50000"
    },
    "knowsAbout": [
      "AWS Cloud Computing",
      "DevOps Training", 
      "Cloud Architecture",
      "Infrastructure Automation",
      "Container Technologies",
      "CI/CD Pipelines",
      "AWS Certification",
      "Data Engineering",
      "Machine Learning"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "AWS Cloud Fundamentals Training"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Course",
          "name": "AWS DevOps Engineering Course"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course", 
          "name": "AWS Data Engineering Program"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewBody": "Best AWS training institute in Hyderabad. Got placed in Microsoft after completing DevOps course. Excellent trainers and practical approach."
      }
    ],
    "sameAs": [
      "https://facebook.com/awsdevopstraininghyderabad",
      "https://twitter.com/awsdevopshyderabad", 
      "https://linkedin.com/company/awsdevopstraininghyderabad",
      "https://instagram.com/awsdevopstraininghyderabad",
      "https://youtube.com/awsdevopstraininghyderabad"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema)
      }}
    />
  );
}
