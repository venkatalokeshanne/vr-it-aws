'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import EnrollmentModal from '../components/EnrollmentModal';
import CoursesModal from '../components/CoursesModal';
import BrochureModal from '../components/BrochureModal';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import SEOHead from '../components/SEOHead';
import CourseStructuredData from '../components/CourseStructuredData';
import { getAllCourses } from '@/lib/staticCourseData';

export default function Home() {
  const [enrollmentModal, setEnrollmentModal] = useState(false);
  const [coursesModal, setCoursesModal] = useState(false);
  const [brochureModal, setBrochureModal] = useState(false);
  const [courseAccessModal, setCourseAccessModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [pendingCourseRoute, setPendingCourseRoute] = useState('');
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  // Load courses on component mount
  useEffect(() => {
    const loadCourses = () => {
      try {
        const courseData = getAllCourses();
        setCourses(courseData);
      } catch (error) {
        console.error('Error loading courses:', error);
        setCourses([]);
      }
    };

    loadCourses();
  }, []);

  const handleEnrollment = (courseName = '') => {
    setSelectedCourse(courseName);
    setCoursesModal(false);
    setEnrollmentModal(true);
  };

  const handleViewCourses = () => {
    setCoursesModal(true);
  };

  const handleBrochureDownload = () => {
    setBrochureModal(true);
  };

  // Helper function to get course styling based on course type/slug
  const getCourseStyle = (courseSlug) => {
    switch (courseSlug) {
      case 'aws-cloud-online-training-in-hyderabad':
        return {
          gradient: 'from-blue-400/40 to-cyan-400/40',
          border: 'border-blue-400/60 hover:border-blue-300/80',
          shadow: 'hover:shadow-blue-400/30',
          iconBg: 'from-blue-400 to-blue-600',
          iconShadow: 'shadow-blue-500/50',
          badgeBg: 'bg-blue-500/30',
          badgeText: 'text-blue-200',
          chipBg: 'bg-blue-500/30',
          chipText: 'text-blue-200',
          buttonGrad: 'from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500',
          buttonShadow: 'hover:shadow-blue-500/50',
          icon: '☁️',
          badge: 'MOST POPULAR'
        };
      case 'aws-devops-online-training-in-hyderabad':
        return {
          gradient: 'from-purple-400/40 to-pink-400/40',
          border: 'border-purple-400/60 hover:border-purple-300/80',
          shadow: 'hover:shadow-purple-400/30',
          iconBg: 'from-purple-400 to-purple-600',
          iconShadow: 'shadow-purple-500/50',
          badgeBg: 'bg-purple-500/30',
          badgeText: 'text-purple-200',
          chipBg: 'bg-purple-500/30',
          chipText: 'text-purple-200',
          buttonGrad: 'from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500',
          buttonShadow: 'hover:shadow-purple-500/50',
          icon: '⚙️',
          badge: 'HIGH DEMAND'
        };
      case 'aws-data-engineering-online-training-in-hyderabad':
        return {
          gradient: 'from-pink-400/40 to-red-400/40',
          border: 'border-pink-400/60 hover:border-pink-300/80',
          shadow: 'hover:shadow-pink-400/30',
          iconBg: 'from-pink-400 to-pink-600',
          iconShadow: 'shadow-pink-500/50',
          badgeBg: 'bg-pink-500/30',
          badgeText: 'text-pink-200',
          chipBg: 'bg-pink-500/30',
          chipText: 'text-pink-200',
          buttonGrad: 'from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500',
          buttonShadow: 'hover:shadow-pink-500/50',
          icon: '📊',
          badge: 'HIGHEST SALARY'
        };
      default:
        return {
          gradient: 'from-gray-400/40 to-gray-600/40',
          border: 'border-gray-400/60 hover:border-gray-300/80',
          shadow: 'hover:shadow-gray-400/30',
          iconBg: 'from-gray-400 to-gray-600',
          iconShadow: 'shadow-gray-500/50',
          badgeBg: 'bg-gray-500/30',
          badgeText: 'text-gray-200',
          chipBg: 'bg-gray-500/30',
          chipText: 'text-gray-200',
          buttonGrad: 'from-gray-500 to-gray-600 hover:from-gray-400 hover:to-gray-500',
          buttonShadow: 'hover:shadow-gray-500/50',
          icon: '🎓',
          badge: 'NEW'
        };
    }
  };

  const handleLearnMore = (courseName, courseSlug) => {
    // Set the course and route to navigate to after form submission
    setSelectedCourse(courseName);
    if (courseSlug) {
      setPendingCourseRoute(`/courses/${courseSlug}`);
    }
    setCourseAccessModal(true);
  };

  return (
    <>
      <SEOHead isHomepage={true} course={courses[0]} />
      <LocalBusinessSchema />
      
      {/* Floating Mobile Phone Button - All Devices */}
      <div className="fixed bottom-4 left-4 z-50">
        <a 
          href="tel:+919885543638" 
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 animate-pulse"
        >
          <svg 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="font-semibold text-sm">+91 98855 43638</span>
        </a>
      </div>
      
      {/* Hidden SEO Content for Search Engines */}
      <div className="sr-only" aria-hidden="true">
        <h1>Best AWS DevOps Training Institute in Hyderabad 2025</h1>
        <p>
          Looking for the best AWS DevOps training in Hyderabad? Our institute in Ameerpet near Satyam Theatre offers comprehensive AWS cloud computing courses and DevOps certification training with 100% placement assistance. We are the top-rated AWS training institute in Hyderabad with over 15,000+ successful placements.
        </p>
        <p>
          Our AWS DevOps courses in Hyderabad cover everything from basic cloud fundamentals to advanced infrastructure automation. Located in the convenient area of Ameerpet, we provide hands-on training with real-world projects from leading tech companies in Hyderabad.
        </p>
        <p>
          Why choose our AWS training in Hyderabad? Expert trainers with industry experience, state-of-the-art labs, flexible timings, excellent location with metro connectivity, and direct placement support with top MNCs across Hyderabad.
        </p>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      
      {/* Navigation Header with Logo */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-1">
                  <img 
                    src="/home-logo.png" 
                    alt="AWS Devops Training Acadamy Hyderabad Logo" 
                    className="h-10 w-auto sm:h-12 rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Contact & CTA */}
            <div className="flex items-center space-x-4">
              {/* Phone Number */}
              <div className="hidden lg:flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a 
                  href="tel:+919885543638" 
                  className="text-white hover:text-green-300 transition-colors font-medium"
                >
                  +91-98855 43638
                </a>
              </div>
              
              {/* Email Address */}
              <div className="hidden xl:flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:info@awsdevopstraininginhyderabad.com" 
                  className="text-white hover:text-purple-300 transition-colors font-medium text-sm"
                >
                  info@awsdevops...
                </a>
              </div>
              
              {/* CTA Button */}
              <button
                onClick={() => handleEnrollment()}
                className="hidden sm:block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* SEO-friendly structured content */}
      <header>
        <h1 className="sr-only">AWS DevOps Training Hyderabad - Best Institute in HITEC City</h1>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 sm:px-8 lg:px-12" itemScope itemType="https://schema.org/EducationalOrganization">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-500/10 px-6 py-2 text-blue-400 ring-1 ring-blue-500/20">
              <span className="text-sm font-medium"> Premier AWS DevOps Training Institute - Ameerpet, Hyderabad</span>
            </div>
            
            <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-6xl" itemProp="name">
              Master{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AWS Cloud
              </span>{" "}
              in Hyderabad
            </h1>
            
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-7 text-gray-300" itemProp="description">
              Join Hyderabad&apos;s leading AWS Devops Training Acadamy in Ameerpet. Choose your high-impact career path below.
            </p>
            
            {/* TOP PRIORITY - 3 COURSES SHOWCASE - ABOVE THE FOLD */}
            <div className="mt-8 mb-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-3">🚀 Choose Your High-Impact Career Path</h2>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
                {courses.slice(0, 3).map((course, index) => {
                  const style = getCourseStyle(course.slug?.current);
                  return (
                    <div key={course._id} className="group relative transform hover:scale-105 transition-all duration-300 h-full">
                      <div className={`absolute inset-0 bg-gradient-to-r ${style.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse`}></div>
                      <div className={`relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-lg border-2 ${style.border} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${style.shadow} h-full flex flex-col min-h-[400px]`}>
                        {/* Course Image */}
                        {course.cardImageUrl && (
                          <div className="relative h-40 w-full overflow-hidden">
                            <img 
                              src={course.cardImageUrl}
                              alt={course.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            {/* Badge overlay on image */}
                            <div className={`absolute top-2 right-2 ${style.badgeBg} ${style.badgeText} px-3 py-1 rounded-full text-xs font-bold animate-bounce`}>
                              {style.badge}
                            </div>
                          </div>
                        )}
                        
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="text-center flex-1 flex flex-col justify-between">
                            {!course.cardImageUrl && (
                              <>
                                <div className={`w-16 h-16 bg-gradient-to-r ${style.iconBg} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-xl ${style.iconShadow}`}>
                                  <span className="text-2xl">{style.icon}</span>
                                </div>
                                <div className={`${style.badgeBg} ${style.badgeText} px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block animate-bounce`}>
                                  {style.badge}
                                </div>
                              </>
                            )}
                            <div className="flex-1 flex flex-col justify-center">
                              <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                              <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-1">
                                {course.subtitle || course.description}
                              </p>
                            </div>
                            <div className="mt-auto">
                              <div className="flex justify-center items-center space-x-2 mb-4">
                                <span className={`${style.chipBg} ${style.chipText} px-2 py-1 rounded-full text-xs font-semibold`}>
                                  {course.duration}
                                </span>
                                <span className="bg-green-500/30 text-green-200 px-2 py-1 rounded-full text-xs font-semibold">
                                  ${course.price}
                                  {course.originalPrice && course.originalPrice > course.price && (
                                    <span className="line-through ml-1">${course.originalPrice}</span>
                                  )}
                                </span>
                              </div>
                              <button
                                onClick={() => handleLearnMore(course.title, course.slug?.current)}
                                className={`w-full bg-gradient-to-r ${style.buttonGrad} text-white py-3 rounded-lg font-bold transition-all duration-300 shadow-lg ${style.buttonShadow} transform hover:scale-105`}
                              >
                                {index === 0 ? '🎯 Start Journey' : index === 1 ? '🔧 Master DevOps' : '📈 Engineer Data'} →
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Compact Benefits Banner */}
              <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-white/20 rounded-2xl p-4 backdrop-blur-lg">
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">🔥 All courses: Live Projects • Industry Mentorship • 100% Placement • AWS Certifications</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <button 
                onClick={() => handleEnrollment()}
                className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-xl hover:from-blue-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Join Our Hyderabad Batch
              </button>
              <button 
                onClick={handleViewCourses}
                className="w-full sm:w-auto rounded-lg border-2 border-cyan-400 px-8 py-4 text-base sm:text-lg font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 transform hover:scale-105"
              >
                Explore All Programs
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">Ameerpet</div>
                <div className="text-sm text-gray-400">Prime Location</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-gray-400">Tech Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-gray-400">Job Assistance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">Live</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 sm:px-8 lg:px-12" itemScope itemType="https://schema.org/Service">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white sm:text-5xl" itemProp="name">
              Why Choose AWS DevOps Training in Hyderabad? 
            </h2>
            <p className="mt-4 text-xl text-gray-400" itemProp="description">
              Leading AWS DevOps institute in HITEC City with industry-best placement record and expert trainers
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-8 backdrop-blur-sm border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-white">AWS Certified Trainers</h3>
              <p className="mt-2 text-gray-300">
                Learn from industry veterans with AWS certifications and hands-on experience from Hyderabad&apos;s top tech companies
              </p>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-8 backdrop-blur-sm border border-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Ameerpet Location</h3>
              <p className="mt-2 text-gray-300">
                Strategically located in Ameerpet near Satyam Theatre with excellent connectivity and easy access to metro
              </p>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-8 backdrop-blur-sm border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                <span className="text-2xl">�</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Industry Partnerships</h3>
              <p className="mt-2 text-gray-300">
                Direct partnerships with Hyderabad&apos;s leading tech companies and excellent placement support across the city
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 p-8 backdrop-blur-sm border border-pink-500/30 hover:bg-pink-500/30 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Placement Support</h3>
              <p className="mt-2 text-gray-300">
                Dedicated placement assistance with connections to Hyderabad&apos;s booming tech ecosystem and startup community
              </p>
            </div>
          </div>

          {/* Additional Features Row */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <div className="group relative overflow-hidden rounded-xl bg-white/5 p-8 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Comprehensive DevOps Curriculum</h3>
              <p className="mt-2 text-gray-400">
                Complete AWS DevOps training covering CI/CD, containerization, and cloud infrastructure management
              </p>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-white/5 p-8 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Live Industry Projects</h3>
              <p className="mt-2 text-gray-400">
                Work on real-world projects from Hyderabad&apos;s tech companies in fintech, healthcare, and e-commerce sectors
              </p>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-white/5 p-8 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/20">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Career Growth Impact</h3>
              <p className="mt-2 text-gray-400">
                Our alumni have secured positions in top Hyderabad companies with average salary hikes of 150-200%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="px-6 py-20 sm:px-8 lg:px-12" itemScope itemType="https://schema.org/CourseInstance">
        {/* Add structured data for all courses */}
        {courses.slice(0, 3).map(course => (
          <CourseStructuredData key={`seo-${course._id}`} course={course} />
        ))}
        
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white sm:text-5xl" itemProp="name">
              Best AWS DevOps Courses in Hyderabad 2025
            </h2>
            <p className="mt-4 text-xl text-gray-400" itemProp="description">
              Comprehensive AWS training programs designed for Hyderabad&apos;s tech professionals with guaranteed placements
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 place-items-center">
            {courses.slice(0, 3).map((course, index) => {
              const style = getCourseStyle(course.slug?.current);
              
              // Define course-specific content
              const courseContent = {
                'aws-cloud-online-training-in-hyderabad': {
                  subtitle: 'Foundation to Advanced',
                  description: 'Build enterprise-grade cloud solutions. Master the foundation that powers Hyderabad\'s digital economy.',
                  features: [
                    'EC2, S3, VPC, IAM & 50+ Services',
                    'Serverless Architecture & Lambda',
                    'AWS Solutions Architect Certification',
                    'Multi-Cloud Strategy & Migration',
                    'Real Banking & Fintech Projects'
                  ],
                  stats: { trained: '15,000+ Students Trained', salary: '₹12-18 LPA' },
                  badgeText: 'POPULAR',
                  buttonText: 'Explore Full Curriculum'
                },
                'aws-devops-online-training-in-hyderabad': {
                  subtitle: 'CI/CD & Automation',
                  description: 'Automate and scale like Hyderabad\'s leading tech companies. Master CI/CD, containers, and infrastructure automation.',
                  features: [
                    'Docker & Kubernetes Mastery',
                    'Jenkins, GitLab CI/CD Pipelines',
                    'Terraform Infrastructure as Code',
                    'Monitoring with ELK & Grafana',
                    'Microservices & Container Orchestration'
                  ],
                  stats: { trained: '10,000+ DevOps Engineers', salary: '₹15-25 LPA' },
                  badgeText: 'TRENDING',
                  buttonText: 'Master DevOps Skills'
                },
                'aws-data-engineering-online-training-in-hyderabad': {
                  subtitle: 'Analytics & Big Data',
                  description: 'Build scalable data pipelines like Hyderabad\'s data-driven companies. Master AWS data services and analytics solutions.',
                  features: [
                    'Redshift, Glue, Athena & Lake Formation',
                    'Kinesis, MSK & Real-time Analytics',
                    'SageMaker & ML Pipeline Development',
                    'Big Data with EMR & Spark',
                    'Healthcare & Retail Analytics Projects'
                  ],
                  stats: { trained: '12,000+ Data Engineers', salary: '₹20-30 LPA' },
                  badgeText: 'GROWING',
                  buttonText: 'Build Data Empires'
                }
              };

              const content = courseContent[course.slug?.current] || {
                subtitle: course.subtitle,
                description: course.description,
                features: course.whatYouLearn?.slice(0, 5) || [],
                stats: { trained: 'New Course', salary: `$${course.price}` },
                badgeText: 'NEW',
                buttonText: 'Learn More'
              };

              const gradientMap = {
                'aws-cloud-online-training-in-hyderabad': 'from-blue-600 via-blue-700 to-blue-800',
                'aws-devops-online-training-in-hyderabad': 'from-cyan-600 via-cyan-700 to-purple-600',
                'aws-data-engineering-online-training-in-hyderabad': 'from-purple-600 via-purple-700 to-pink-600'
              };

              const borderColorMap = {
                'aws-cloud-online-training-in-hyderabad': 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
                'aws-devops-online-training-in-hyderabad': 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30',
                'aws-data-engineering-online-training-in-hyderabad': 'from-purple-500/20 to-purple-600/20 border-purple-500/30'
              };

              const checkmarkColorMap = {
                'aws-cloud-online-training-in-hyderabad': 'text-blue-400',
                'aws-devops-online-training-in-hyderabad': 'text-cyan-400',
                'aws-data-engineering-online-training-in-hyderabad': 'text-purple-400'
              };

              const statsColorMap = {
                'aws-cloud-online-training-in-hyderabad': 'bg-blue-900/30 text-blue-200',
                'aws-devops-online-training-in-hyderabad': 'bg-cyan-900/30 text-cyan-200',
                'aws-data-engineering-online-training-in-hyderabad': 'bg-purple-900/30 text-purple-200'
              };

              const buttonColorMap = {
                'aws-cloud-online-training-in-hyderabad': 'from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600',
                'aws-devops-online-training-in-hyderabad': 'from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600',
                'aws-data-engineering-online-training-in-hyderabad': 'from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600'
              };

              const badgeColorMap = {
                'aws-cloud-online-training-in-hyderabad': 'bg-blue-500/20 text-blue-300',
                'aws-devops-online-training-in-hyderabad': 'bg-cyan-500/20 text-cyan-300',
                'aws-data-engineering-online-training-in-hyderabad': 'bg-purple-500/20 text-purple-300'
              };

              return (
                <div 
                  key={course._id} 
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-b ${borderColorMap[course.slug?.current]} p-8 backdrop-blur-sm flex flex-col transform hover:scale-105 transition-all duration-300 max-w-md mx-auto`}
                  itemScope 
                  itemType="https://schema.org/Course"
                >
                  {/* Banner Image */}
                  <div className={`relative mb-6 -mx-8 -mt-8 h-32 bg-gradient-to-r ${gradientMap[course.slug?.current]} overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${style.gradient.replace('40', '20')} to-transparent`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center space-x-4 text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                          <span className="text-3xl">{style.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold">{course.title?.replace('AWS ', '')}</h4>
                          <p className="text-white/80 text-sm">{content.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs text-white font-semibold">{course.duration?.toUpperCase()}</span>
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full"></div>
                    <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full"></div>
                    {index === 2 && (
                      <>
                        <div className="absolute right-8 top-4 w-6 h-6 bg-white/15 rounded-full"></div>
                        <div className="absolute left-8 bottom-6 w-4 h-4 bg-white/10 rounded-full"></div>
                      </>
                    )}
                    {index === 1 && (
                      <div className="absolute right-4 bottom-2 w-8 h-8 bg-white/10 rounded-full"></div>
                    )}
                  </div>

                  {/* Course Image - Optimized for 1200x630 aspect ratio */}
                  <div className="mb-6 aspect-[1200/630] rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      src={course.cardImageUrl || course.heroImageUrl || '/placeholder-course.jpg'} 
                      alt={`${course.title} Course`} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      width="1200"
                      height="630"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white" itemProp="name">{course.title}</h3>
                    <div className={`${badgeColorMap[course.slug?.current]} px-3 py-1 rounded-full`}>
                      <span className="text-xs font-semibold">{content.badgeText}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300" itemProp="description">
                    {content.description}
                  </p>
                  
                  {/* Hidden schema.org data */}
                  <meta itemProp="provider" content="VR IT Academy" />
                  <meta itemProp="educationalLevel" content={course.level} />
                  <meta itemProp="timeRequired" content={course.duration} />
                  <meta itemProp="price" content={course.price} />
                  <meta itemProp="priceCurrency" content="USD" />
                  {course.seo?.keywords && (
                    <meta itemProp="keywords" content={course.seo.keywords.join(', ')} />
                  )}
                  {course.cardImageUrl && (
                    <meta itemProp="image" content={course.cardImageUrl} />
                  )}
                  <ul className="mt-6 space-y-3 text-gray-300 flex-grow">
                    {content.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className={`mr-3 ${checkmarkColorMap[course.slug?.current]}`}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-6 ${statsColorMap[course.slug?.current]} p-4 rounded-lg`}>
                    <div className="text-center">
                      <div className="text-lg font-bold">{content.stats.trained}</div>
                      <div className="text-sm">Average Salary: {content.stats.salary}</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleLearnMore(course.title, course.slug?.current)}
                    className={`mt-8 w-full rounded-lg bg-gradient-to-r ${buttonColorMap[course.slug?.current]} px-6 py-3 text-sm font-semibold text-white transition-all duration-300 transform hover:scale-105`}
                  >
                    {content.buttonText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <div className="relative">
            <h2 className="text-5xl font-bold text-white sm:text-6xl mb-6">
              Join Hyderabad&apos;s{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                DevOps Revolution
              </span>
            </h2>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              From the innovative corridors of HITEC City to the emerging tech parks of Gachibowli - 
              be part of Hyderabad&apos;s massive digital transformation and join the city&apos;s most prestigious AWS DevOps program.
            </p>
            
            {/* Achievement Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-6 rounded-xl border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400">₹18-30 LPA</div>
                <div className="text-sm text-gray-300 mt-1">Average Salary Range</div>
                <div className="text-xs text-blue-300 mt-2">Our Alumni Achievements</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-6 rounded-xl border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-gray-300 mt-1">Interview Guarantee</div>
                <div className="text-xs text-purple-300 mt-2">With Top MNCs</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 p-6 rounded-xl border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400">6 Months</div>
                <div className="text-sm text-gray-300 mt-1">Career Transformation</div>
                <div className="text-xs text-cyan-300 mt-2">Average Timeline</div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:justify-center">
              <button 
                onClick={() => handleEnrollment()}
                className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-12 py-5 text-xl font-semibold text-white shadow-2xl hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
                aria-label="Enroll in AWS DevOps Training Hyderabad"
              >
                <span className="relative z-10">Start Your AWS Career</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={handleBrochureDownload}
                className="rounded-lg border-2 border-cyan-400 px-12 py-5 text-xl font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                aria-label="Download AWS DevOps Course Brochure"
              >
                Get Complete Guide
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section for SEO */}
            {/* Enhanced FAQ Section */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-800" itemScope itemType="https://schema.org/FAQPage">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-6 py-2 text-blue-400 ring-1 ring-blue-500/20 mb-6">
              <span className="text-sm font-medium">❓ Got Questions? We Have Answers</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to know about AWS DevOps training in Hyderabad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* FAQ Item 1 */}
            <div className="group" itemScope itemType="https://schema.org/Question">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors" itemProp="name">
                      Which is the best AWS training institute in Hyderabad?
                    </h4>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="text-gray-300 leading-relaxed" itemProp="text">
                        AWS DevOps Training Hyderabad is recognized as the <strong className="text-blue-400">best AWS training institute in Hyderabad</strong>, 
                        located in Ameerpet near Satyam Theatre. We offer comprehensive AWS DevOps courses with 100% placement assistance, 
                        expert trainers, and hands-on projects from leading tech companies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="group" itemScope itemType="https://schema.org/Question">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors" itemProp="name">
                      What is the duration of AWS DevOps training?
                    </h4>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="text-gray-300 leading-relaxed" itemProp="text">
                        Our AWS DevOps training program is designed for <strong className="text-cyan-400">3-6 months</strong> depending on the course level. 
                        We offer flexible timing options including weekdays, weekends, and fast-track courses to suit working professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="group" itemScope itemType="https://schema.org/Question">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors" itemProp="name">
                      Do you provide placement assistance after AWS training?
                    </h4>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="text-gray-300 leading-relaxed" itemProp="text">
                        Yes, we provide <strong className="text-purple-400">100% placement assistance</strong> with guaranteed interview calls. 
                        Our placement team has direct tie-ups with 50+ tech companies in Hyderabad across all major areas including HITEC City, Gachibowli, and Madhapur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="group" itemScope itemType="https://schema.org/Question">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors" itemProp="name">
                      What is the average salary after AWS DevOps training?
                    </h4>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="text-gray-300 leading-relaxed" itemProp="text">
                        Our AWS DevOps trained professionals get an average salary of <strong className="text-green-400">₹12-30 LPA</strong> depending on experience. 
                        Freshers start with ₹6-12 LPA while experienced professionals can earn ₹18-30 LPA in leading tech companies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="group" itemScope itemType="https://schema.org/Question">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors" itemProp="name">
                      Is AWS DevOps training worth it in Hyderabad?
                    </h4>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="text-gray-300 leading-relaxed" itemProp="text">
                        Absolutely! Hyderabad is India&apos;s major tech hub with highest demand for AWS DevOps professionals. 
                        Companies like Microsoft, Amazon, Google, and hundreds of startups across the city actively hire 
                        <strong className="text-pink-400"> AWS DevOps engineers</strong> with competitive packages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FAQ Item 6 */}
            <div className="group" itemScope itemType="https://schema.org/Question">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors" itemProp="name">
                      Do you provide AWS certification preparation?
                    </h4>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="text-gray-300 leading-relaxed" itemProp="text">
                        Yes, our courses include comprehensive <strong className="text-orange-400">AWS certification preparation</strong> 
                        for Solutions Architect, DevOps Engineer, and Data Engineer certifications. We provide practice tests, 
                        exam strategies, and dedicated support until you pass.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA in FAQ Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-4">Still have questions?</h4>
              <p className="text-gray-300 mb-6">Our expert counselors are here to help you choose the right AWS DevOps course</p>
              <button 
                onClick={() => {
                  const whatsappMessage = `Hi! I have some questions about AWS DevOps training in Hyderabad. Could you please help me?`;
                  const whatsappNumber = '+919885543638';
                  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                  window.open(whatsappURL, '_blank');
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
                Ask Your Questions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-800 to-slate-900" itemScope itemType="https://schema.org/LocalBusiness">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-green-500/10 px-6 py-2 text-green-400 ring-1 ring-green-500/20 mb-6">
              <span className="text-sm font-medium">📞 Get In Touch</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-4" itemProp="name">Contact AWS DevOps Training Hyderabad</h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to start your AWS DevOps journey? Reach out to us through any of these channels
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Address */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Visit Our Institute</h4>
                    <p className="text-gray-300 leading-relaxed">
                      <span itemProp="streetAddress">Aditya enclave, nilgiri block, near vamsi Installation,<br/>
                      506A/1, basti road, beside metro line</span>,<br/>
                      <span itemProp="addressLocality">Hyderabad</span>, 
                      <span itemProp="addressRegion"> Telangana</span> 
                      <span itemProp="postalCode">500018</span>, <span itemProp="addressCountry">India</span>
                    </p>
                    <p className="text-sm text-gray-400 mt-2">Near Vamsi Installation with excellent metro connectivity</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">Call Us Now</h4>
                    <a href="tel:+919885543638" itemProp="telephone" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
                      +91-98855 43638
                    </a>
                    <p className="text-sm text-gray-400 mt-2">Available 9 AM - 9 PM, Monday to Saturday</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Email Us</h4>
                    <a href="mailto:info@awsdevopstraininginhyderabad.com" itemProp="email" className="text-lg sm:text-xl font-bold text-purple-400 hover:text-purple-300 transition-colors break-all sm:break-normal">
                      info@awsdevopstraininginhyderabad.com
                    </a>
                    <p className="text-sm text-gray-400 mt-2">Get detailed course information and career guidance</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Contact Form */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">Quick Inquiry</h4>
                <p className="text-gray-400">Get instant response via WhatsApp</p>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const phone = formData.get('phone');
                const course = formData.get('course');
                const message = formData.get('message');
                
                const whatsappMessage = `🎓 *Quick Inquiry - AWS DevOps Training Hyderabad*

👤 *Name:* ${name}
📱 *Phone:* ${phone}
📚 *Course Interest:* ${course}
💬 *Message:* ${message || 'Please share course details and batch timings'}

Looking forward to hearing from you!`;

                const whatsappNumber = '+919885543638';
                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappURL, '_blank');
              }}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Course Interest</label>
                  <select
                    name="course"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    {courses.map((course) => (
                      <option key={course._id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                    <option value="All Courses">All Courses</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Any specific questions or requirements?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  Send via WhatsApp
                </button>
              </form>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-slate-600/50">
                <p className="text-center text-gray-400 mb-4">Follow us on social media</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.facebook.com/awsdevopstrainingacademy/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/30 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/aws-devops-training-234284137" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-700/20 hover:bg-blue-700/30 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/awsdevopstraining/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-pink-600/20 hover:bg-pink-600/30 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.309-3.234-.854-.787-.545-1.297-1.297-1.297-2.139 0-.854.51-1.606 1.297-2.139.786-.545 1.937-.854 3.234-.854 1.297 0 2.448.309 3.234.854.787.533 1.297 1.285 1.297 2.139 0 .842-.51 1.594-1.297 2.139-.786.545-1.937.854-3.234.854zm7.105-9.405c-.426.255-.936.255-1.362 0-.425-.255-.68-.681-.68-1.149 0-.467.255-.894.68-1.149.426-.255.936-.255 1.362 0 .425.255.681.682.681 1.149 0 .468-.256.894-.681 1.149z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-8">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-4">Find Us on Map</h4>
                <p className="text-gray-400 mb-6">Located in Ameerpet near Satyam Theatre, easily accessible by metro and road</p>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-600/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.4483!3d17.4399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzIzLjYiTiA3OMKwMjYnNTMuOSJF!5e0!3m2!1sen!2sin!4v1643724000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AWS DevOps Training Hyderabad Location"
                  className="w-full h-96 rounded-xl"
                ></iframe>
                
                {/* Map overlay with address details */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-sm">AWS DevOps Training in Hyderabad</h5>
                      <p className="text-xs text-gray-600 mt-1">
                        Aditya enclave, nilgiri block<br/>
                        near vamsi Installation, 506A/1<br/>
                        basti road, beside metro line<br/>
                        Hyderabad, Telangana 500018
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Open</span>
                        <span className="text-xs text-gray-500">9 AM - 9 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick directions and transportation */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-700/30 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h6 className="font-semibold text-white text-sm">Metro Access</h6>
                  <p className="text-xs text-gray-400 mt-1">Ameerpet Metro Station<br/>5 minutes walk</p>
                </div>
                
                <div className="bg-slate-700/30 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M9 7l3-3 3 3M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h6 className="font-semibold text-white text-sm">Landmark</h6>
                  <p className="text-xs text-gray-400 mt-1">Near Satyam Theatre<br/>Easy to locate</p>
                </div>
                
                <div className="bg-slate-700/30 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h6 className="font-semibold text-white text-sm">Parking</h6>
                  <p className="text-xs text-gray-400 mt-1">Building parking<br/>Available for students</p>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="text-center mt-6">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Aditya+enclave,nilgiri+block,near+vamsi+Installation,506A/1,basti+road,beside+metro+line,Hyderabad,Telangana+500018,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <EnrollmentModal 
        isOpen={enrollmentModal} 
        onClose={() => setEnrollmentModal(false)} 
        courseName={selectedCourse}
      />
      <CoursesModal 
        isOpen={coursesModal} 
        onClose={() => setCoursesModal(false)}
        onEnroll={handleEnrollment}
      />
      <BrochureModal 
        isOpen={brochureModal} 
        onClose={() => setBrochureModal(false)}
      />

      {/* Course Access Form Modal */}
      {courseAccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto border border-slate-600">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Access Course Details</h3>
              <button
                onClick={() => setCourseAccessModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">{selectedCourse}</h4>
              <p className="text-gray-300 text-sm">Fill out this quick form to access detailed course information, curriculum, and exclusive content.</p>
            </div>

            <form onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;
              const formData = new FormData(form);
              const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                course: selectedCourse,
                message: formData.get('message')
              };

              try {
                // Send email using EmailJS
                const templateParams = {
                  from_name: data.name,
                  from_email: data.email,
                  phone: data.phone,
                  course: data.course,
                  message: data.message || 'No message provided',
                  to_email: 'mevlokia@gmail.com', // Replace with your email
                  email_message: `Course Access Request for ${selectedCourse}

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message || 'No message provided'}

This user is requesting access to detailed information about the ${selectedCourse} course.`
                };

                // Initialize EmailJS with your public key
                emailjs.init('nrA3P33HTKo5srFaN'); // Updated EmailJS public key
                
                await emailjs.send(
                  'service_u5pa6mf', // Updated EmailJS service ID
                  'template_vnz0219', // Updated EmailJS template ID
                  templateParams
                );

                alert('Thank you! We\'ve received your request and will send you the course details shortly.');
                
                // Close modal and navigate to course
                setCourseAccessModal(false);
                if (pendingCourseRoute) {
                  router.push(pendingCourseRoute);
                }
              } catch (error) {
                console.error('Error sending email:', error);
                // Fallback to mailto
                const emailBody = `
Course Access Request:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Course: ${data.course}
Experience: ${data.experience}
Interest: ${data.interest}

This user is requesting access to ${selectedCourse} course details.
                `;
                
                const mailtoLink = `mailto:info@awsdevopstraininginhyderabad.com?subject=Course Access Request - ${selectedCourse}&body=${encodeURIComponent(emailBody)}`;
                window.open(mailtoLink, '_blank');
                
                alert('Email client opened. Please send the email to complete your request.');
                
                // Close modal and navigate to course
                setCourseAccessModal(false);
                if (pendingCourseRoute) {
                  router.push(pendingCourseRoute);
                }
              }
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="3"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your goals, expectations, or any questions..."
                  ></textarea>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setCourseAccessModal(false)}
                  className="flex-1 px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-semibold"
                >
                  Access Course Details
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-400 mt-4 text-center">
              Your information is secure and will only be used to provide you with course details and updates.
            </p>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => {
          const whatsappMessage = `👋 Hi! I am interested in AWS DevOps training at your Hyderabad institute.

Could you please share:
- Available batch timings
- Course fees
- Curriculum details
- Placement assistance

Thank you!`;
          const whatsappNumber = '+919885543638'; // Replace with your actual number
          const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
          window.open(whatsappURL, '_blank');
        }}
        className="fixed bottom-4 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse"
        title="Chat on WhatsApp"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
        </svg>
      </button>

      {/* Simple Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-3">Contact Us</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+919885543638" className="hover:text-green-300 transition-colors">+91-98855 43638</a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@awsdevopstraininginhyderabad.com" className="hover:text-purple-300 transition-colors break-all">info@awsdevopstraininginhyderabad.com</a>
                </div>
              </div>
            </div>
            
            {/* Address */}
            <div className="text-center md:text-right">
              <h4 className="text-white font-semibold mb-3">Address</h4>
              <div className="text-sm text-gray-400">
                <p>Aditya Enclave, Nilgiri Block</p>
                <p>506A/1, Basti Road</p>
                <p>Hyderabad, Telangana 500018</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 AWS DevOps Training Academy. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              designed & developed by{' '}
              <a 
                href="https://www.linkedin.com/in/venkatalokesh" 
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 underline decoration-dotted underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Devotree
              </a>
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
