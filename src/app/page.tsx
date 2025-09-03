import { categories, courses } from '@/lib/data';
import CourseList from '@/components/courses/course-list';
import PersonalizedRecommendations from '@/components/courses/personalized-recommendations';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="bg-card w-full">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary">
            Course Explorer
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
            Unlock your potential with our curated selection of online courses. Learn from the best, at your own pace.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="#courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>

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
