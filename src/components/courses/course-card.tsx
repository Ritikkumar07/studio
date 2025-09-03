import Link from 'next/link';
import Image from 'next/image';
import type { Course } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { User, BookCopy, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Dialog>
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <Link href={`/courses/${course.id}`} className="block">
          <div className="relative aspect-video">
            <Image src={course.image} alt={course.title} fill className="object-cover" data-ai-hint="online course"/>
          </div>
        </Link>
        <CardHeader>
          <Link href={`/courses/${course.id}`} className="block">
            <CardTitle className="line-clamp-2">{course.title}</CardTitle>
          </Link>
          <CardDescription className="line-clamp-3 h-[60px]">{course.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex items-center text-sm text-muted-foreground space-x-4">
              <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{course.instructor}</span>
              </div>
              <Badge variant="outline" className="capitalize">{course.category}</Badge>
          </div>
        </CardContent>
        <CardFooter>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">View Course</Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] flex flex-col">
        <div className="relative aspect-video flex-shrink-0">
          <Image src={course.image} alt={course.title} fill className="object-cover rounded-t-lg" data-ai-hint="online course" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 overflow-y-auto px-6 py-4">
            <div className='md:col-span-2'>
                <DialogHeader className="p-0 mb-6">
                    <DialogTitle className="text-3xl font-bold font-headline mb-2">{course.title}</DialogTitle>
                    <DialogDescription className="text-base text-muted-foreground">
                        {course.longDescription}
                    </DialogDescription>
                </DialogHeader>
                <h2 className="text-2xl font-bold mb-4 font-headline">Course Curriculum</h2>
                <Accordion type="single" collapsible className="w-full">
                    {course.modules.map((module, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>
                        <div className="flex items-center gap-4">
                            <BookCopy className="h-5 w-5 text-primary" />
                            <span className='text-left'>{module.title}</span>
                        </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        <p className="pl-9 text-muted-foreground">{module.description}</p>
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className="space-y-6">
                <Badge variant="secondary" className="capitalize w-fit text-base">{course.category}</Badge>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded-full bg-muted flex-shrink-0 relative overflow-hidden">
                                <Image src={`https://i.pravatar.cc/150?u=${course.instructor}`} alt={course.instructor} fill className="object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{course.instructor}</h3>
                                <p className="text-sm text-muted-foreground">Instructor</p>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">{course.instructorBio}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
        <DialogFooter className='px-6 pb-6 pt-0 mt-auto'>
            <Button asChild className="w-full md:w-auto">
                <Link href={`/courses/${course.id}`}>Go to Course Page <ArrowRight /></Link>
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
