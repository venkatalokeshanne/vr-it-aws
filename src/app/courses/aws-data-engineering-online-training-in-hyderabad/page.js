'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import EnrollmentModal from '@/components/EnrollmentModal';
import SEOHead from '@/components/SEOHead';
import CourseStructuredData from '@/components/CourseStructuredData';
import { getCourseBySlug } from '@/lib/staticCourseData';

export default function AWSDataEngineering() {
  const [enrollmentModal, setEnrollmentModal] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch course data from Sanity
  useEffect(() => {
    const loadCourseData = () => {
      try {
        const data = getCourseBySlug('aws-data-engineering-online-training-in-hyderabad');
        setCourseData(data);
      } catch (error) {
        console.error('Error loading course data:', error);
        setCourseData(null);
      } finally {
        setLoading(false);
      }
    };

    loadCourseData();
  }, []);

  const handleEnrollment = () => {
    setEnrollmentModal(true);
  };

  const handleBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading course content...</div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Course not found</div>
      </div>
    );
  }

  return (
    <>
      <SEOHead course={courseData} isHomepage={false} />
      <CourseStructuredData course={courseData} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="px-6 py-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>
            <button
              onClick={handleEnrollment}
              className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white hover:bg-purple-500 transition-colors"
            >
              Enroll Now
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-12 sm:px-8 lg:px-12" itemScope itemType="https://schema.org/Course">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-purple-500/10 px-4 py-2 text-purple-400 ring-1 ring-purple-500/20">
                <span className="text-sm font-medium">High Demand Field</span>
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-6xl mb-6" itemProp="name">
                AWS Data <span className="text-purple-400">Engineering</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8" itemProp="description">
                {courseData.subtitle || courseData.description}
              </p>
            </div>

            {/* Hero Image */}
            {courseData.heroImageUrl && (
              <div className="mb-8 relative aspect-[1200/630] rounded-2xl overflow-hidden mx-auto max-w-4xl">
                <img 
                  src={courseData.heroImageUrl} 
                  alt={`${courseData.title} Course Hero`}
                  className="w-full h-full object-contain"
                  width="1200"
                  height="630"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center rounded-full bg-purple-500/20 backdrop-blur-sm px-3 py-1.5 text-purple-300 ring-1 ring-purple-500/30">
                    <span className="text-sm font-medium">High Demand Field</span>
                  </div>
                </div>
              </div>
            )}
            
            <div className="text-center">
              {/* Hidden schema.org metadata */}
              <meta itemProp="provider" content="VR IT Academy" />
              <meta itemProp="educationalLevel" content={courseData.level} />
              <meta itemProp="timeRequired" content={courseData.duration} />
              <meta itemProp="courseMode" content="blended" />
              {courseData.seo?.keywords && (
                <meta itemProp="keywords" content={courseData.seo.keywords.join(', ')} />
              )}
              {courseData.cardImageUrl && (
                <meta itemProp="image" content={courseData.cardImageUrl} />
              )}
              
              {/* Hidden SEO Headings */}
              {courseData.seo?.seoHeadings?.map((heading, index) => {
                const HeadingTag = heading.level;
                return (
                  <HeadingTag key={index} className="sr-only">
                    {heading.text}
                  </HeadingTag>
                );
              })}
              
              <div className="flex items-center justify-center gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{courseData.duration}</div>
                  <div className="text-sm text-gray-400">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{courseData.level?.charAt(0).toUpperCase() + courseData.level?.slice(1)}</div>
                  <div className="text-sm text-gray-400">Level</div>
                </div>
                {courseData.price && courseData.price > 0 && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <span itemProp="price">₹{courseData.price}</span>
                      <meta itemProp="priceCurrency" content="Rupee" />
                      <meta itemProp="availability" content="https://schema.org/InStock" />
                    </div>
                    {courseData.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">${courseData.originalPrice}</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Course Overview</h2>
                <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                  {courseData.overview?.map((block, index) => (
                    <p key={index}>
                      {block.children?.map(child => child.text).join('')}
                    </p>
                  )) || (
                    <p>{courseData.description}</p>
                  )}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/30 p-8 backdrop-blur-sm border border-purple-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">What You&apos;ll Build</h3>
                  <ul className="space-y-3">
                    {courseData.whatYouLearn?.map((item, index) => {
                      const icons = ['📊', '🔄', '🤖', '📈', '⚡', '🛡️'];
                      return (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-purple-400 mt-1">{icons[index] || '✨'}</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Curriculum */}
        <section className="px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Detailed Curriculum</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courseData.curriculum?.map((module, index) => (
                <div key={index} className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">
                    Module {index + 1}: {module.moduleTitle}
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    {module.topics?.map((topic, topicIndex) => (
                      <li key={topicIndex}>• {topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hands-on Projects */}
        <section className="px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Hands-on Projects</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {courseData.projects?.map((project, index) => (
                <div key={index} className="rounded-xl bg-gradient-to-b from-purple-500/10 to-purple-600/20 p-6 border border-purple-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Project {index + 1}: {project.projectTitle}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, techIndex) => (
                      <span key={techIndex} className="inline-flex items-center rounded-md bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-purple-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Prerequisites</h2>
            
            <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Required Knowledge</h3>
                  <ul className="space-y-2 text-gray-300">
                    {courseData.prerequisites?.map((prereq, index) => (
                      <li key={index}>• {prereq}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Course Features</h3>
                  <ul className="space-y-2 text-gray-300">
                    {courseData.features?.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Shape the Future with Data</h2>
            <p className="text-lg text-gray-400 mb-8">
              Become a skilled data engineer and unlock the power of data-driven decision making at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEnrollment}
                className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-200"
              >
                Enroll in AWS Data Engineering
              </button>
              {courseData.price && courseData.originalPrice && courseData.price > 0 && (
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <span className="line-through">${courseData.originalPrice}</span>
                  <span className="text-purple-400 font-semibold">₹{courseData.price}</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">
                    Save ${courseData.originalPrice - courseData.price}
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Enrollment Modal */}
        <EnrollmentModal 
          isOpen={enrollmentModal} 
          onClose={() => setEnrollmentModal(false)} 
          courseName={courseData.title}
        />
      </div>
    </>
  );
}
