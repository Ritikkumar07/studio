import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Contact Us</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
          Have questions or feedback? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" />
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-muted-foreground">Get in touch via email for any inquiries.</p>
              <a href="mailto:contact@courseexplorer.com" className="text-primary hover:underline">
                contact@courseexplorer.com
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-muted-foreground">Reach out to our support team.</p>
              <a href="tel:+1234567890" className="text-primary hover:underline">
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Office</h3>
              <p className="text-muted-foreground">123 Learning Lane, Knowledge City, 98765</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
