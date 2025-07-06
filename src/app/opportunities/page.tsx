
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Zap, CalendarDays, Lightbulb, ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Opportunity {
  id: string;
  type: 'Course' | 'Scholarship' | 'Bootcamp' | 'Event' | 'Resource';
  title: string;
  provider: string;
  description: string;
  tags: string[];
  icon: JSX.Element;
  imageUrl: string;
  imageHint: string;
  learnMoreUrl: string; 
  duration?: string;
  format?: 'Online' | 'In-Person' | 'Hybrid';
  isFeatured?: boolean;
}

const mockOpportunities: Opportunity[] = [

    {
    id: 'Black-Hat-USA-2025',
    type: 'Event',
    title: 'Black Hat USA 2025',
    provider: 'Black Hat',
    description: 'Black Hat USA returns to the Mandalay Bay Convention Center in Las Vegas with a 6-day program.',
    
    tags: ['Conference', 'security products', 'cybersecurity','Community engagement'],
    icon: <CalendarDays className="h-7 w-7 text-primary" />,
    imageUrl: '/images/black hat 2025.jpg',
    imageHint: 'black hat 2025',
    learnMoreUrl: 'https://www.blackhat.com/us-25/',
    duration: '6 Days',
    format: 'Hybrid',
    
    
  },

   {
    id: 'Detroit-Cybersecurity-Summit',
    type: 'Event',
    title: 'Detroit Cybersecurity Summit',
    provider: 'The Official Cybersecurity Summit',
    description: 'The 5th Annual Detroit Cybersecurity Summit connects cybersecurity executives and seasoned practitioners responsible for protecting their companies’ critical infrastructures with innovative solution providers and renowned information security experts',
    
    tags: [' IoT', 'AI', 'cybersecurity','Information security'],
    icon: <CalendarDays className="h-7 w-7 text-primary" />,
    imageUrl: '/images/cyber risk alliance.png',
    imageHint: 'black hat 2025',
    learnMoreUrl: 'https://cybersecuritysummit.com/summit/detroit25/',
    duration: '3 Days',
    format: 'In-Person',
    
  },
{
    id: 'Dell-Technologies-World-2026',
    type: 'Event',
    title: 'Dell Technologies World 2026-We’re reshaping the future of business, together',
    provider: 'Dell Technologies World',
    description: 'The premier event for DevOps professionals, featuring workshops, keynotes, and networking opportunities.',
    tags: ['Conference', 'Artificial Intelligence', 'Machine Learning'],
    icon: <CalendarDays className="h-7 w-7 text-primary" />,
    imageUrl: '/images/dell technologies.png',
    imageHint: 'dell technologies',
    learnMoreUrl: 'https://www.dell.com/en-us/dt/events/delltechnologiesworld/2025/index.htm',
    duration: '3 Days',
    format: 'Hybrid',
    
  },


];

export default function OpportunitiesPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
         <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Lightbulb className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight font-headline">Tech Opportunities & Resources</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover courses, scholarships, bootcamps, and events to accelerate your tech career.
        </p>
      </div>

      <div className="mb-10 p-6 bg-muted/30 rounded-xl shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Input placeholder="Search opportunities (e.g., Python course, AI scholarship)" className="flex-grow text-base"/>
          <Button size="lg" className="w-full sm:w-auto text-base">
            <Search className="mr-2 h-5 w-5" /> Search
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-3 text-center sm:text-left">Search functionality is a future enhancement.</p>
      </div>

      {mockOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockOpportunities.map((opportunity) => (
            <Card key={opportunity.id} className={cn("flex flex-col h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative", opportunity.isFeatured && "border-2 border-primary shadow-primary/20")}>
              {opportunity.isFeatured && (
                <Badge className="absolute top-3 right-3 bg-yellow-500 text-white shadow-md z-10">Featured</Badge>
              )}
              <Link href={`/opportunities/${opportunity.id}`} className="block group">
                <Image
                  src={opportunity.imageUrl}
                  alt={opportunity.title}
                  width={600}
                  height={320} 
                  className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                  data-ai-hint={opportunity.imageHint}
                />
              </Link>
              <CardHeader className="p-5">
                <div className="flex items-center justify-between mb-2">
                    {opportunity.icon}
                    <Badge variant="secondary" className="capitalize">{opportunity.type}</Badge>
                </div>
                <CardTitle className="font-headline text-xl leading-tight">
                  <Link href={`/opportunities/${opportunity.id}`} className="hover:text-primary transition-colors">
                    {opportunity.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm font-medium">{opportunity.provider}</CardDescription>
              </CardHeader>
              <CardContent className="p-5 pt-0 flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{opportunity.description}</p>
                 <div className="flex flex-wrap gap-2 mb-3">
                  {opportunity.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                    {opportunity.duration && <p><strong>Duration:</strong> {opportunity.duration}</p>}
                    {opportunity.format && <p><strong>Format:</strong> {opportunity.format}</p>}
                </div>
              </CardContent>
              <CardFooter className="p-5 bg-muted/20">
                <Button asChild variant="default" className="w-full group">
                  <Link href={`/opportunities/${opportunity.id}`}>
                    Learn More
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-card border rounded-xl shadow-sm">
          <Lightbulb className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4" />
          <h3 className="text-2xl font-semibold mb-2 font-headline">No Opportunities Listed Currently</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Please check back soon as we're always updating our listings with new tech opportunities!
          </p>
        </div>
      )}

      {mockOpportunities.length > 3 && (
         <div className="mt-12 text-center">
            <Button variant="outline" size="lg">Load More Opportunities</Button>
        </div>
      )}
    </div>
  );
}
    
