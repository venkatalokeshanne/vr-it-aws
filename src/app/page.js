'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import EnrollmentModal from '../components/EnrollmentModal';
import CoursesModal from '../components/CoursesModal';
import BrochureModal from '../components/BrochureModal';
import LocalBusinessSchema from '../components/LocalBusinessSchema';

export default function Home() {
  const [enrollmentModal, setEnrollmentModal] = useState(false);
  const [coursesModal, setCoursesModal] = useState(false);
  const [brochureModal, setBrochureModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const router = useRouter();

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

  const handleLearnMore = (courseName) => {
    // Navigate to course-specific pages
    switch (courseName) {
      case 'AWS Cloud Fundamentals':
        router.push('/courses/aws-cloud-fundamentals');
        break;
      case 'AWS DevOps Engineering':
        router.push('/courses/aws-devops-engineering');
        break;
      case 'AWS Data Engineering':
        router.push('/courses/aws-data-engineering');
        break;
      default:
        setSelectedCourse(courseName);
        setEnrollmentModal(true);
    }
  };

  return (
    <>
      <LocalBusinessSchema />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* SEO-friendly structured content */}
      <header>
        <h1 className="sr-only">AWS DevOps Training Hyderabad - Best Institute in HITEC City</h1>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-12" itemScope itemType="https://schema.org/EducationalOrganization">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-500/10 px-6 py-2 text-blue-400 ring-1 ring-blue-500/20">
              <span className="text-sm font-medium"> Premier AWS DevOps Training Institute - Ameerpet, Hyderabad</span>
            </div>
            
            <h1 className="mx-auto max-w-5xl text-6xl font-bold tracking-tight text-white sm:text-8xl" itemProp="name">
              Master{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AWS DevOps
              </span>{" "}
              in Hyderabad
            </h1>
            
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-300" itemProp="description">
              Join Hyderabad&apos;s leading AWS DevOps training institute. Located in Ameerpet near Satyam Theatre, 
              we specialize in comprehensive DevOps, Cloud, and Data engineering programs with hands-on experience, 
              industry partnerships, and guaranteed placement support for professionals across Telangana.
            </p>
            
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
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white sm:text-5xl" itemProp="name">
              Best AWS DevOps Courses in Hyderabad 2025
            </h2>
            <p className="mt-4 text-xl text-gray-400" itemProp="description">
              Comprehensive AWS training programs designed for Hyderabad&apos;s tech professionals with guaranteed placements
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* AWS Cloud Course */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-blue-500/20 to-blue-600/20 p-8 backdrop-blur-sm border border-blue-500/30 flex flex-col transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">AWS Cloud Fundamentals</h3>
                <div className="bg-blue-500/20 px-3 py-1 rounded-full">
                  <span className="text-xs text-blue-300 font-semibold">POPULAR</span>
                </div>
              </div>
              <p className="mt-4 text-gray-300">
                Build enterprise-grade cloud solutions. Master the foundation that powers Hyderabad&apos;s digital economy.
              </p>
              <ul className="mt-6 space-y-3 text-gray-300 flex-grow">
                <li className="flex items-center">
                  <span className="mr-3 text-blue-400">✓</span>
                  EC2, S3, VPC, IAM & 50+ Services
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-blue-400">✓</span>
                  Serverless Architecture & Lambda
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-blue-400">✓</span>
                  AWS Solutions Architect Certification
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-blue-400">✓</span>
                  Multi-Cloud Strategy & Migration
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-blue-400">✓</span>
                  Real Banking & Fintech Projects
                </li>
              </ul>
              <div className="mt-6 bg-blue-900/30 p-4 rounded-lg">
                <div className="text-center text-blue-200">
                  <div className="text-lg font-bold">15,000+ Students Trained</div>
                  <div className="text-sm">Average Salary: ₹12-18 LPA</div>
                </div>
              </div>
              <button 
                onClick={() => handleLearnMore('AWS Cloud Fundamentals')}
                className="mt-8 w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Full Curriculum
              </button>
            </div>

            {/* AWS DevOps Course */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-cyan-500/20 to-cyan-600/20 p-8 backdrop-blur-sm border border-cyan-500/30 flex flex-col transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">AWS DevOps Engineering</h3>
                <div className="bg-cyan-500/20 px-3 py-1 rounded-full">
                  <span className="text-xs text-cyan-300 font-semibold">TRENDING</span>
                </div>
              </div>
              <p className="mt-4 text-gray-300">
                Automate and scale like Hyderabad&apos;s leading tech companies. Master CI/CD, containers, and infrastructure automation.
              </p>
              <ul className="mt-6 space-y-3 text-gray-300 flex-grow">
                <li className="flex items-center">
                  <span className="mr-3 text-cyan-400">✓</span>
                  CodePipeline, CodeBuild & GitLab CI
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-cyan-400">✓</span>
                  Terraform, CloudFormation & Ansible
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-cyan-400">✓</span>
                  Kubernetes, Docker & ECS/EKS
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-cyan-400">✓</span>
                  Monitoring with CloudWatch & Grafana
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-cyan-400">✓</span>
                  E-commerce & Startup Case Studies
                </li>
              </ul>
              <div className="mt-6 bg-cyan-900/30 p-4 rounded-lg">
                <div className="text-center text-cyan-200">
                  <div className="text-lg font-bold">8,500+ DevOps Engineers</div>
                  <div className="text-sm">Average Salary: ₹18-25 LPA</div>
                </div>
              </div>
              <button 
                onClick={() => handleLearnMore('AWS DevOps Engineering')}
                className="mt-8 w-full rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 px-6 py-3 text-sm font-semibold text-white hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Master DevOps at Scale
              </button>
            </div>

            {/* AWS Data Course */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-purple-500/20 to-purple-600/20 p-8 backdrop-blur-sm border border-purple-500/30 flex flex-col transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">AWS Data Engineering</h3>
                <div className="bg-purple-500/20 px-3 py-1 rounded-full">
                  <span className="text-xs text-purple-300 font-semibold">GROWING</span>
                </div>
              </div>
              <p className="mt-4 text-gray-300">
                Build scalable data pipelines like Hyderabad&apos;s data-driven companies. Master AWS data services and analytics solutions.
              </p>
              <ul className="mt-6 space-y-3 text-gray-300 flex-grow">
                <li className="flex items-center">
                  <span className="mr-3 text-purple-400">✓</span>
                  Redshift, Glue, Athena & Lake Formation
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-purple-400">✓</span>
                  Kinesis, MSK & Real-time Analytics
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-purple-400">✓</span>
                  SageMaker & ML Pipeline Development
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-purple-400">✓</span>
                  Big Data with EMR & Spark
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-purple-400">✓</span>
                  Healthcare & Retail Analytics Projects
                </li>
              </ul>
              <div className="mt-6 bg-purple-900/30 p-4 rounded-lg">
                <div className="text-center text-purple-200">
                  <div className="text-lg font-bold">12,000+ Data Engineers</div>
                  <div className="text-sm">Average Salary: ₹20-30 LPA</div>
                </div>
              </div>
              <button 
                onClick={() => handleLearnMore('AWS Data Engineering')}
                className="mt-8 w-full rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-3 text-sm font-semibold text-white hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Build Data Empires
              </button>
            </div>
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

            {/* SEO Content Section */}
            <div className="mt-20 max-w-4xl mx-auto text-left">
              <h3 className="text-2xl font-bold text-white mb-6">Best AWS DevOps Training Institute in Hyderabad 2025</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Looking for the <strong>best AWS DevOps training in Hyderabad</strong>? Our institute in Ameerpet near Satyam Theatre offers comprehensive 
                  <strong> AWS cloud computing courses</strong> and <strong>DevOps certification training</strong> with 100% placement assistance. 
                  We are the <strong>top-rated AWS training institute in Hyderabad</strong> with over 15,000+ successful placements.
                </p>
                <p>
                  Our <strong>AWS DevOps courses in Hyderabad</strong> cover everything from basic cloud fundamentals to advanced 
                  infrastructure automation. Located in the convenient area of <strong>Ameerpet</strong>, we provide hands-on training 
                  with real-world projects from leading tech companies in Hyderabad.
                </p>
                <p>
                  <strong>Why choose our AWS training in Hyderabad?</strong> Expert trainers with industry experience, 
                  state-of-the-art labs, flexible timings, excellent location with metro connectivity, and direct placement support with top MNCs across Hyderabad.
                </p>
              </div>
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
                  const whatsappNumber = '+918123456789';
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
                      <span itemProp="streetAddress">5th floor 506, Nilgiri block, ADITYA ENCLAVE,<br/>
                      a/a, Satyam Theatre Rd, Kumar Basti, Ameerpet</span>,<br/>
                      <span itemProp="addressLocality">Hyderabad</span>, 
                      <span itemProp="addressRegion"> Telangana</span> 
                      <span itemProp="postalCode">500073</span>, <span itemProp="addressCountry">India</span>
                    </p>
                    <p className="text-sm text-gray-400 mt-2">Near Satyam Theatre with excellent metro connectivity</p>
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
                    <a href="tel:+918123456789" itemProp="telephone" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
                      +91-8123456789
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Email Us</h4>
                    <a href="mailto:info@awsdevopstraininghyderabad.com" itemProp="email" className="text-lg text-purple-400 hover:text-purple-300 transition-colors">
                      info@awsdevopstraininghyderabad.com
                    </a>
                    <p className="text-sm text-gray-400 mt-2">We respond within 2 hours during business hours</p>
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

                const whatsappNumber = '+918123456789';
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
                    <option value="AWS Cloud Fundamentals">AWS Cloud Fundamentals</option>
                    <option value="AWS DevOps Engineering">AWS DevOps Engineering</option>
                    <option value="AWS Data Engineering">AWS Data Engineering</option>
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
                  <a href="https://facebook.com/awsdevopstraininghyderabad" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/30 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/awsdevopshyderabad" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-sky-600/20 hover:bg-sky-600/30 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/awsdevopstraininghyderabad" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-700/20 hover:bg-blue-700/30 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/awsdevopstraininghyderabad" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-pink-600/20 hover:bg-pink-600/30 rounded-xl flex items-center justify-center transition-colors">
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
                      <h5 className="font-bold text-gray-900 text-sm">AWS DevOps Training Hyderabad</h5>
                      <p className="text-xs text-gray-600 mt-1">
                        5th floor 506, Nilgiri block<br/>
                        ADITYA ENCLAVE, Ameerpet<br/>
                        Hyderabad, Telangana 500073
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
                  href="https://www.google.com/maps/dir/?api=1&destination=17.4399,78.4483&destination_place_id=ChIJ5th floor 506, Nilgiri block, ADITYA ENCLAVE, Ameerpet, Hyderabad"
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

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => {
          const whatsappMessage = `👋 Hi! I&apos;m interested in AWS DevOps training at your Hyderabad institute.

🏢 *Institute:* awsdevopstraininghyderabad.com
📍 *Location:* HITEC City, Hyderabad

Could you please share:
- Available batch timings
- Course fees
- Curriculum details
- Placement assistance

Thank you!`;
          const whatsappNumber = '+918123456789'; // Replace with your actual number
          const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
          window.open(whatsappURL, '_blank');
        }}
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse"
        title="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
        </svg>
      </button>
      </div>
    </>
  );
}
