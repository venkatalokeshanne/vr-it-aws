import React from 'react';

const FAQSchema = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best AWS training institute in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AWS DevOps Training Academy is the premier AWS training institute in Hyderabad, offering comprehensive cloud computing, DevOps engineering, and data engineering courses with 100% placement assistance, industry expert trainers, and hands-on live projects."
        }
      },
      {
        "@type": "Question", 
        "name": "How long is the AWS DevOps training course duration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AWS DevOps training courses range from 6-10 weeks depending on the specialization. AWS Cloud Fundamentals is 6 weeks, AWS DevOps Engineering is 8 weeks, and AWS Data Engineering is 10 weeks. We offer both weekday and weekend batches."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide placement assistance after AWS training?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Yes, we provide 100% placement assistance with dedicated career counseling, resume building, interview preparation, and direct connections with 500+ hiring partners including Amazon, Microsoft, Google, Infosys, TCS, and Accenture."
        }
      },
      {
        "@type": "Question",
        "name": "What are the prerequisites for AWS DevOps training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For AWS Cloud Fundamentals, basic IT knowledge is sufficient. For advanced courses like DevOps Engineering and Data Engineering, we recommend having AWS Cloud Fundamentals knowledge or equivalent industry experience."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer online AWS training classes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer both online and classroom AWS training options. Our online classes include live interactive sessions, recorded lectures, 24/7 lab access, and the same quality instruction as our classroom programs."
        }
      },
      {
        "@type": "Question",
        "name": "What is the AWS training fee structure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AWS Cloud Fundamentals: ₹25,000, AWS DevOps Engineering: ₹35,000, AWS Data Engineering: ₹40,000. We offer flexible payment plans, EMI options, and early bird discounts. Contact us for current offers and group discounts."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any free demo classes available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer free demo classes every weekday at 7:00 PM and weekends at 10:00 AM. You can experience our teaching methodology, interact with expert trainers, and get a course overview before enrollment."
        }
      },
      {
        "@type": "Question",
        "name": "What AWS certifications can I get after training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our training prepares you for AWS Solutions Architect Associate/Professional, AWS DevOps Engineer Professional, AWS Data Engineer Specialty, AWS Security Specialty, AWS Developer Associate, and AWS SysOps Administrator certifications."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you provide real-time project experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our courses include hands-on real-time projects based on actual industry scenarios. Students work on live AWS environments, deploy applications, implement CI/CD pipelines, and build complete cloud solutions."
        }
      },
      {
        "@type": "Question",
        "name": "What is the average salary after AWS DevOps training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our students typically see 50-200% salary increases post-training. Fresh graduates start at ₹8-12 LPA, while experienced professionals can earn ₹15-25 LPA or more, depending on their skills and the company they join."
        }
      },
      {
        "@type": "Question",
        "name": "Where is AWS DevOps Training Academy located in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are located at Aditya Enclave, Nilgiri Block, 506A/1, Basti Road, beside metro line, Hyderabad, Telangana 500018. Our institute is easily accessible via metro and has excellent connectivity from all parts of Hyderabad."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your AWS training different from other institutes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our unique advantages include industry expert trainers with 10+ years experience, live project implementation, 24/7 lab access, weekend batches, 100% placement assistance, lifetime course access, and small batch sizes for personalized attention."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema)
      }}
    />
  );
};

export default FAQSchema;
