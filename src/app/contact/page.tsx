
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-3xl mx-auto shadow-xl rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Mail className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="font-headline text-4xl">Contact Us</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            We'd love to hear from you! Reach out with any questions or inquiries.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 md:px-10 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <section className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold font-headline mb-2 flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-accent" /> Email Us
                </h2>
                <p className="text-muted-foreground">
                  For general inquiries: <a href="mailto:info@tektunnel.com" className="text-primary hover:underline">info@tektunnel.com</a>
                </p>
                <p className="text-muted-foreground">
                  For support: <a href="mailto:support@tektunnel.com" className="text-primary hover:underline">support@tektunnel.com</a>
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold font-headline mb-2 flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-accent" /> Call Us
                </h2>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold font-headline mb-2 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-accent" /> Our Office
                </h2>
                <p className="text-muted-foreground">123 Tech Avenue, Innovation City, CA 90210</p>
                 <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                    <Image
                        src="images/vision.jpg"
                        alt="Map placeholder showing office location"
                        width={400}
                        height={250}
                        className="w-full h-auto"
                        data-ai-hint="map location city"
                    />
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold font-headline mb-4">Send us a Message</h2>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Contact form submitted (simulation)!'); }}>
                <div>
                  <Label htmlFor="name" className="text-base">Full Name</Label>
                  <Input type="text" id="name" placeholder="John Doe" className="mt-1 text-base" required/>
                </div>
                <div>
                  <Label htmlFor="email" className="text-base">Email Address</Label>
                  <Input type="email" id="email" placeholder="you@example.com" className="mt-1 text-base" required/>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-base">Subject</Label>
                  <Input type="text" id="subject" placeholder="Inquiry about..." className="mt-1 text-base" required/>
                </div>
                <div>
                  <Label htmlFor="message" className="text-base">Message</Label>
                  <Textarea id="message" placeholder="Your message here..." rows={5} className="mt-1 text-base" required/>
                </div>
                <Button type="submit" className="w-full text-base py-3">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
