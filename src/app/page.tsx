import { categories, courses } from '@/lib/data';
import CourseList from '@/components/courses/course-list';
import PersonalizedRecommendations from '@/components/courses/personalized-recommendations';
import HeroSlider from '@/components/layout/hero-slider';

export default function Home() {
  const featuredCourses = courses.slice(0, 4);
  return (
    <>
      <HeroSlider courses={featuredCourses} />

      <div className="container mx-auto px-4 py-8">
        <PersonalizedRecommendations />

        <section id="courses" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-10 font-headline">All Courses</h2>
          <CourseList courses={courses} categories={categories} />
        </section>
      </div>
    </>
  );
}
