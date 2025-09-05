// This file imports the static courses data generated at build time
import coursesData from '../data/staticCourses.js';

export function getAllCourses() {
  return coursesData || [];
}

export function getCourseBySlug(slug) {
  if (!coursesData) return null;
  return coursesData.find(course => course.slug?.current === slug) || null;
}

export default coursesData;
