import Link from 'next/link';
import Image from 'next/image';
import type { Course } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Tag, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-video">
        <Image src={course.image} alt={course.title} fill className="object-cover" data-ai-hint="online course"/>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{course.title}</CardTitle>
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
        <Button asChild className="w-full" variant="outline">
          <Link href={`/courses/${course.id}`}>
            View Course <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
