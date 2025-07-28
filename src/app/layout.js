import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from '../components/Analytics';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "🎯 Complete AWS Training Hub | Cloud • DevOps • Data | Hyderabad",
  description: "✅ Master All AWS Services with 100% Placement Guarantee! Expert Trainers • Live Projects • Industry Certifications | Ameerpet, Hyderabad | Join 500+ Success Stories!",
  keywords: "AWS training Hyderabad, AWS cloud training, DevOps training Hyderabad, AWS data engineering, AWS certification Hyderabad, cloud computing training, Ameerpet AWS institute, comprehensive AWS course, Hyderabad IT training, placement guaranteed AWS training",
  authors: [{ name: "AWS Cloud Training Hyderabad" }],
  creator: "AWS Cloud Training Hyderabad",
  publisher: "AWS Cloud Training Hyderabad",
  robots: "index, follow",
  googlebot: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  language: "en",
  geo: {
    region: "IN-TG",
    placename: "Hyderabad",
    position: "17.4399;78.4483"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "AWS Cloud Training Hyderabad",
    title: "🎯 Complete AWS Training Hub | Cloud • DevOps • Data",
    description: "✅ Master All AWS Services with 100% Placement Guarantee! Expert Trainers • Live Projects • Certifications | Ameerpet, Hyderabad",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "🎯 AWS Cloud Training Hyderabad - Complete AWS Hub for Cloud, DevOps & Data"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@awscloudhyderabad",
    creator: "@awscloudhyderabad",
    title: "🎯 Complete AWS Training Hub | Cloud • DevOps • Data",
    description: "✅ Master All AWS Services with 100% Placement Guarantee! Expert Trainers • Live Projects • Certifications | Ameerpet, Hyderabad",
    images: ["/logo.png"]
  },
  alternates: {
    canonical: "/"
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
    yandex: "your-yandex-verification-code", // Replace with actual code
    bing: "your-bing-verification-code" // Replace with actual code
  }
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "AWS Cloud Training Hyderabad",
    "description": "Comprehensive AWS training institute in Hyderabad offering complete cloud computing, DevOps engineering, and data engineering courses with 100% placement assistance.",
    "url": "https://awscloudtraininghyderabad.com",
    "logo": "https://awscloudtraininghyderabad.com/logo.png",
    "image": "https://awscloudtraininghyderabad.com/institute-image.svg",
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
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9032734343",
      "contactType": "Admissions",
      "availableLanguage": ["English", "Hindi", "Telugu"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Complete AWS Training Programs",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "AWS Cloud Fundamentals",
          "description": "Comprehensive AWS cloud computing training with hands-on projects and certification preparation.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "AWS Cloud Training Hyderabad"
          }
        },
        {
          "@type": "Course",
          "name": "AWS DevOps Engineering",
          "description": "Advanced DevOps training covering CI/CD, containerization, and infrastructure automation.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "AWS Cloud Training Hyderabad"
          }
        },
        {
          "@type": "Course",
          "name": "AWS Data Engineering",
          "description": "Specialized data engineering course focusing on AWS data services and analytics solutions.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "AWS Cloud Training Hyderabad"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5"
    },
    "sameAs": [
      "https://facebook.com/awscloudtraininghyderabad",
      "https://twitter.com/awscloudhyderabad",
      "https://linkedin.com/company/awscloudtraininghyderabad",
      "https://instagram.com/awscloudtraininghyderabad"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <link rel="canonical" href="/" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        
        {/* Additional Open Graph tags for better WhatsApp sharing */}
        <meta property="og:title" content="🎯 Complete AWS Training Hub | Cloud • DevOps • Data" />
        <meta property="og:description" content="✅ Master All AWS Services with 100% Placement Guarantee! Expert Trainers • Live Projects • Certifications | Ameerpet, Hyderabad" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AWS Cloud Training Hyderabad" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="🎯 Complete AWS Training Hub | Cloud • DevOps • Data" />
        <meta name="twitter:description" content="✅ Master All AWS Services with 100% Placement Guarantee! Expert Trainers • Live Projects • Certifications | Ameerpet, Hyderabad" />
        <meta name="twitter:image" content="/logo.png" />
        
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.4399;78.4483" />
        <meta name="ICBM" content="17.4399, 78.4483" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}
