import { GraduationCap, Target, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">About Course Explorer</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
          Your gateway to accessible, high-quality online education.
        </p>
      </div>

      <div className="mt-20 max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold font-headline mb-2">Our Mission</h2>
          <p className="text-muted-foreground">
            To empower individuals by making knowledge accessible. We believe learning is a lifelong journey and strive to provide the best online courses to help you achieve your goals.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold font-headline mb-2">Our Vision</h2>
          <p className="text-muted-foreground">
            To create a global community of learners and experts, fostering an environment of collaboration, innovation, and continuous personal and professional growth.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
            <Lightbulb className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold font-headline mb-2">Our Values</h2>
          <p className="text-muted-foreground">
            We value quality, accessibility, and community. Every course is curated for excellence, designed for ease of use, and supported by a network of peers and mentors.
          </p>
        </div>
      </div>
    </div>
  );
}
