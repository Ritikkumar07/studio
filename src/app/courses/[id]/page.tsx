import { courses } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { User, BookCopy, ChevronRight } from 'lucide-react';
import CurriculumSummary from '@/components/courses/curriculum-summary';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = courses.find(c => c.id === params.id);

  if (!course) {
    notFound();
  }

  const curriculumItems = course.modules.map(m => m.title);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <Badge variant="secondary" className="mb-2 capitalize">{course.category}</Badge>
          <h1 className="text-4xl font-bold font-headline mb-4">{course.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{course.longDescription}</p>

          <h2 className="text-2xl font-bold mb-4 font-headline">Course Curriculum</h2>
          <Accordion type="single" collapsible className="w-full mb-8">
            {course.modules.map((module, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <BookCopy className="h-5 w-5 text-primary" />
                    <span>{module.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pl-9 text-muted-foreground">{module.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <CurriculumSummary courseTitle={course.title} curriculumItems={curriculumItems} />
        </div>

        <div className="lg:col-span-1 space-y-8">
          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <Image src={course.image} alt={course.title} fill className="object-cover" data-ai-hint="online course" />
            </div>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-muted flex-shrink-0 relative overflow-hidden">
                   <Image src={`https://i.pravatar.cc/150?u=${course.instructor}`} alt={course.instructor} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{course.instructor}</h3>
                  <p className="text-sm text-muted-foreground">Instructor</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{course.instructorBio}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
