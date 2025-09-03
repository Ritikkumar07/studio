'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { getCurriculumSummary } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, LoaderCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CurriculumSummaryProps {
  courseTitle: string;
  curriculumItems: string[];
}

export default function CurriculumSummary({ courseTitle, curriculumItems }: CurriculumSummaryProps) {
  const [summary, setSummary] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleGenerateSummary = () => {
    startTransition(async () => {
      const result = await getCurriculumSummary({ courseTitle, curriculumItems });
      if (result.success) {
        setSummary(result.summary || '');
      } else {
        toast({
          title: 'Error',
          description: result.error,
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <Card className="bg-accent/10 border-accent/20">
      <CardHeader>
        <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-accent" />
            <CardTitle className="font-headline text-accent">AI-Powered Summary</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {summary ? (
          <p className="text-muted-foreground italic">{summary}</p>
        ) : (
          <div className='flex flex-col items-center justify-center gap-4 text-center'>
            <p className="text-sm text-muted-foreground">Get a quick overview of what you&apos;ll learn in this course.</p>
            <Button onClick={handleGenerateSummary} disabled={isPending}>
              {isPending ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Curriculum Summary'
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
