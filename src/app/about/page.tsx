
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Users, Lightbulb, Target } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-3xl mx-auto shadow-xl rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Info className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="font-headline text-4xl">About TekTunnel</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Connecting talent with opportunity, powered by innovation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 px-6 md:px-10 py-8 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold font-headline mb-3 flex items-center">
              <Target className="h-6 w-6 mr-2 text-accent" /> Our Mission
            </h2>
            <p className="leading-relaxed">
              At TekTunnel, our mission is to bridge the gap between exceptional tech talent and innovative companies worldwide. 
              We strive to create a seamless, efficient, and empowering platform where careers are built and transformative teams are formed. 
              We believe in the power of connection and the potential of technology to shape a better future.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-headline mb-3 flex items-center">
              <Lightbulb className="h-6 w-6 mr-2 text-accent" /> Our Vision
            </h2>
            <p className="leading-relaxed">
              Our vision is to be the leading global destination for tech talent and employers, recognized for our cutting-edge AI matching, 
              user-centric design, and commitment to fostering a vibrant and inclusive tech community. We aim to redefine the future of tech recruitment.
            </p>
          </section>
          
          <section className="text-center">
             <Image 
                src="/images/vision.jpg" 
                alt="Team working together" 
                width={600} 
                height={300} 
                className="rounded-lg shadow-md mx-auto mb-4"
                data-ai-hint="team collaboration office"
              />
            <h2 className="text-2xl font-semibold font-headline mb-3 mt-6 flex items-center justify-center">
              <Users className="h-6 w-6 mr-2 text-accent" /> Meet the (Future) Team
            </h2>
            <p className="leading-relaxed max-w-xl mx-auto">
              TekTunnel is powered by a passionate (and currently conceptual) team of developers, designers, AI specialists, and HR professionals dedicated to revolutionizing the tech hiring landscape. 
              We are committed to innovation, excellence, and creating an unparalleled experience for both job seekers and employers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-headline mb-3">Why Choose TekTunnel?</h2>
            <ul className="list-disc list-inside space-y-2 pl-4 leading-relaxed">
              <li><strong>AI-Powered Matching:</strong> Intelligent algorithms connect the right talent with the right roles.</li>
              <li><strong>Comprehensive Listings:</strong> Access to a wide range of tech jobs from leading companies.</li>
              <li><strong>User-Friendly Interface:</strong> Intuitive design for both job seekers and employers.</li>
              <li><strong>Community Focused:</strong> Resources, insights, and support for the tech ecosystem.</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
