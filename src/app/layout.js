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
  title: "AWS DevOps Training Hyderabad | #1 Institute in Ameerpet | 100% Placement",
  description: "★★★★★ Best AWS DevOps Training in Hyderabad. Located in Ameerpet near Satyam Theatre with 100% placement guarantee. Expert trainers, live projects, certification prep. Call now!",
  keywords: "AWS training Hyderabad, DevOps training Hyderabad, AWS certification Hyderabad, cloud computing training, Ameerpet AWS institute, AWS DevOps course, Hyderabad IT training, placement guaranteed AWS training",
  authors: [{ name: "AWS DevOps Training Hyderabad" }],
  creator: "AWS DevOps Training Hyderabad",
  publisher: "AWS DevOps Training Hyderabad",
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
    url: "https://awsdevopstraininghyderabad.com",
    siteName: "AWS DevOps Training Hyderabad",
    title: "Best AWS DevOps Training in Hyderabad | Ameerpet | 100% Placement",
    description: "Premier AWS DevOps training institute in Hyderabad's Ameerpet area. Expert trainers, hands-on projects, AWS certification prep with guaranteed placement assistance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AWS DevOps Training Hyderabad - Best Institute in HITEC City"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@awsdevopshyderabad",
    creator: "@awsdevopshyderabad",
    title: "Best AWS DevOps Training in Hyderabad | HITEC City",
    description: "Premier AWS DevOps training institute in Hyderabad. 100% placement guarantee, expert trainers, live projects. Located in HITEC City.",
    images: ["/twitter-image.jpg"]
  },
  alternates: {
    canonical: "https://awsdevopstraininghyderabad.com"
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
    "name": "AWS DevOps Training Hyderabad",
    "description": "Premier AWS DevOps training institute in Hyderabad offering comprehensive cloud computing and DevOps courses with 100% placement assistance.",
    "url": "https://awsdevopstraininghyderabad.com",
    "logo": "https://awsdevopstraininghyderabad.com/logo.png",
    "image": "https://awsdevopstraininghyderabad.com/institute-image.jpg",
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
      "telephone": "+91-8123456789",
      "contactType": "Admissions",
      "availableLanguage": ["English", "Hindi", "Telugu"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AWS DevOps Training Courses",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "AWS Cloud Fundamentals",
          "description": "Comprehensive AWS cloud computing training with hands-on projects and certification preparation.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "AWS DevOps Training Hyderabad"
          }
        },
        {
          "@type": "Course",
          "name": "AWS DevOps Engineering",
          "description": "Advanced DevOps training covering CI/CD, containerization, and infrastructure automation.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "AWS DevOps Training Hyderabad"
          }
        },
        {
          "@type": "Course",
          "name": "AWS Data Engineering",
          "description": "Specialized data engineering course focusing on AWS data services and analytics solutions.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "AWS DevOps Training Hyderabad"
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
      "https://facebook.com/awsdevopstraininghyderabad",
      "https://twitter.com/awsdevopshyderabad",
      "https://linkedin.com/company/awsdevopstraininghyderabad",
      "https://instagram.com/awsdevopstraininghyderabad"
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
        <link rel="canonical" href="https://awsdevopstraininghyderabad.com" />
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
