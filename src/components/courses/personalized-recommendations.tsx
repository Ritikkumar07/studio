import { getPersonalizedCourseRecommendations } from '@/ai/flows/personalized-course-recommendations';
import { courses } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function parseRecommendedCourses(text: string, allCourses: typeof courses) {
  const courseTitles = text.split('\n').map(line => line.replace(/^- /, '').trim());
  return courseTitles
    .map(title => allCourses.find(course => course.title.toLowerCase() === title.toLowerCase()))
    .filter((course): course is typeof courses[0] => course !== undefined);
}

export default async function PersonalizedRecommendations() {
  const userBrowsingHistory = "User has shown interest in modern web development, particularly React and advanced JavaScript topics. They have looked at courses on state management and performance optimization.";
  const availableCourses = courses.map(c => `- ${c.title}: ${c.description}`).join('\n');

  let recommendationOutput: { recommendedCourses: string, reasoning: string } | null = null;
  try {
    recommendationOutput = await getPersonalizedCourseRecommendations({
      userBrowsingHistory,
      availableCourses,
    });
  } catch (error) {
    console.error("Failed to get personalized recommendations:", error);
    return null;
  }
  
  if (!recommendationOutput?.recommendedCourses) return null;

  const recommendedCourses = parseRecommendedCourses(recommendationOutput.recommendedCourses, courses);

  return (
    <section className="py-16">
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-2xl font-bold font-headline text-primary">Just for You</CardTitle>
              <CardDescription>Courses recommended based on your interests</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {recommendedCourses.map(course => (
              <Link href={`/courses/${course.id}`} key={course.id} className="group block">
                <div className="p-4 rounded-lg bg-card h-full border transition-all duration-300 group-hover:border-primary group-hover:shadow-md">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary">{course.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic">&quot;{recommendationOutput.reasoning}&quot;</p>
        </CardContent>
      </Card>
    </section>
  );
}
