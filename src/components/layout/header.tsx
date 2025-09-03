import Link from 'next/link';
import { BookOpenCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpenCheck className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Course Explorer</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link
            href="/about"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
