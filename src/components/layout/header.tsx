
'use client';

import Link from 'next/link';
import { BookOpenCheck, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpenCheck className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Course Explorer</span>
          </Link>
        </div>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
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
        <div className="hidden items-center space-x-4 md:flex">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm">Sign Up</Button>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                 <BookOpenCheck className="h-6 w-6 text-primary" />
                 <span className="font-bold font-headline">Course Explorer</span>
              </Link>
              <div className="flex flex-col space-y-4 mt-6">
                <Link
                  href="/"
                  onClick={() => setIsSheetOpen(false)}
                  className="text-foreground/80 transition-colors hover:text-foreground"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsSheetOpen(false)}
                  className="text-foreground/80 transition-colors hover:text-foreground"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsSheetOpen(false)}
                  className="text-foreground/80 transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <Button variant="ghost">Log in</Button>
                <Button>Sign Up</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
