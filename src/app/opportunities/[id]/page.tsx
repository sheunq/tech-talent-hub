
'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, CalendarDays, Award, BookOpen, Zap, Lightbulb, Tag, Users, Briefcase, MapPin, Info } from 'lucide-react';

// Duplicating interface and mock data for simplicity in this example.
// In a real app, this would come from a shared service or API.
interface Opportunity {
  id: string;
  type: 'Course' | 'Scholarship' | 'Bootcamp' | 'Event' | 'Resource';
  title: string;
  provider: string;
  description: string;
  fullDescription?: string; // Optional full description for detail page
  tags: string[];
  icon: JSX.Element; // This won't be used directly here as we map type to icon
  imageUrl: string;
  imageHint: string;
  learnMoreUrl: string;
  duration?: string;
  format?: 'Online' | 'In-Person' | 'Hybrid';
  applicationDeadline?: string;
  eligibility?: string;
  benefits?: string[];
  isFeatured?: boolean;
}

const opportunityTypeIcons = {
    Course: <BookOpen className="h-6 w-6 text-primary" />,
    Scholarship: <Award className="h-6 w-6 text-primary" />,
    Bootcamp: <Zap className="h-6 w-6 text-primary" />,
    Event: <CalendarDays className="h-6 w-6 text-primary" />,
    Resource: <Lightbulb className="h-6 w-6 text-primary" />,
};

const mockOpportunities: Opportunity[] = [
  {
    id: 'course1',
    type: 'Course',
    title: 'Advanced React & Next.js',
    provider: 'TechLearn Academy',
    description: 'Master modern frontend development with advanced concepts in React, Next.js, and server components.',
    fullDescription: 'Dive deep into the React ecosystem with our Advanced React & Next.js course. This comprehensive program covers server components, advanced state management with Zustand and Redux Toolkit, performance optimization techniques, Next.js App Router, API route handling, and deployment strategies. Ideal for developers with existing React knowledge looking to level up their skills and build production-ready applications.',
    tags: ['Web Development', 'React', 'Next.js', 'Paid', 'Advanced'],
    icon: <BookOpen className="h-7 w-7 text-primary" />,
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'react nextjs code',
    learnMoreUrl: 'https://example.com/advanced-react-nextjs',
    duration: '8 Weeks',
    format: 'Online',
    benefits: ['Certificate of Completion', 'Portfolio Projects', 'Expert Mentorship'],
    isFeatured: true,
  },
  {
    id: 'scholarship1',
    type: 'Scholarship',
    title: 'Future Leaders in AI Scholarship',
    provider: 'Innovate AI Foundation',
    description: 'Financial aid and mentorship for students passionate about Artificial Intelligence and Machine Learning.',
    fullDescription: 'The Future Leaders in AI Scholarship aims to foster the next generation of innovators in Artificial Intelligence. We provide financial assistance, mentorship, and networking opportunities to talented undergraduate and graduate students demonstrating passion and potential in AI/ML fields. Applicants must be enrolled in an accredited university program.',
    tags: ['Scholarship', 'AI/ML', 'University', 'Financial Aid', 'STEM'],
    icon: <Award className="h-7 w-7 text-primary" />,
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'student graduation scholarship',
    learnMoreUrl: 'https://example.com/ai-scholarship',
    format: 'Online',
    applicationDeadline: '2025-03-15',
    eligibility: 'Enrolled in a BSc/MSc/PhD program in CS, AI, or related field. Minimum 3.5 GPA.',
    benefits: ['$10,000 Tuition Grant', 'Mentorship Program', 'Internship Opportunity'],
  },
  {
    id: 'bootcamp1',
    type: 'Bootcamp',
    title: 'Cybersecurity Professional Bootcamp',
    provider: 'SecurePath Institute',
    description: 'Intensive 16-week bootcamp covering network security, ethical hacking, and incident response.',
    fullDescription: 'Launch your cybersecurity career with our intensive 16-week bootcamp. This hands-on program covers network fundamentals, penetration testing, threat intelligence, cryptography, incident response, and compliance. Prepare for industry certifications like CompTIA Security+ and CEH. No prior experience required, but a strong aptitude for problem-solving is essential.',
    tags: ['Cybersecurity', 'Intensive', 'Career Change', 'Certification', 'Beginner-Friendly'],
    icon: <Zap className="h-7 w-7 text-primary" />,
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'cybersecurity lock shield',
    learnMoreUrl: 'https://example.com/cybersecurity-bootcamp',
    duration: '16 Weeks',
    format: 'In-Person',
    benefits: ['Job Placement Assistance', 'Certification Vouchers', 'Real-world Capstone Project'],
  },
  {
    id: 'event1',
    type: 'Event',
    title: 'Global Tech Summit 2025',
    provider: 'TechConferences Inc.',
    description: 'The premier event for tech professionals, featuring workshops, keynotes, and networking opportunities.',
    fullDescription: 'Join thousands of developers, engineers, and tech leaders at the Global Tech Summit 2025. This three-day event is packed with sessions on the latest trends in AI, cloud native, DevOps, and more. Network with peers, learn from industry experts, and get hands-on with new technologies in our interactive labs.',
    tags: ['Conference', 'Networking', 'DevOps', 'Cloud', 'AI'],
    icon: <CalendarDays className="h-7 w-7 text-primary" />,
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'conference stage audience',
    learnMoreUrl: 'https://example.com/global-tech-summit',
    duration: '3 Days',
    format: 'Hybrid',
    applicationDeadline: '2025-04-01 (Early Bird)',
    benefits: ['Access to all sessions', 'Workshop materials', 'Networking receptions'],
  },
   {
    id: 'course2',
    type: 'Course',
    title: 'Introduction to Cloud Computing with AWS',
    provider: 'CloudSkills Now',
    description: 'A beginner-friendly guide to core AWS services, including EC2, S3, and IAM, with hands-on labs.',
    fullDescription: 'This beginner-friendly course introduces the core concepts of cloud computing and provides a practical overview of Amazon Web Services (AWS). Learn about EC2, S3, VPC, IAM, and more through hands-on labs. Ideal for those new to cloud or looking to get AWS certified.',
    tags: ['Cloud Computing', 'AWS', 'Beginner', 'Free', 'Certification Prep'],
    icon: <BookOpen className="h-7 w-7 text-primary" />,
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'aws cloud services',
    learnMoreUrl: 'https://example.com/aws-intro-course',
    duration: '4 Weeks',
    format: 'Online',
    benefits: ['Hands-on Labs', 'Community Forum Access', 'Certificate of Participation'],
  },
   {
    id: 'resource1',
    type: 'Resource',
    title: 'Open Source Contributor Guide',
    provider: 'CommunityHub Org',
    description: 'A comprehensive guide for beginners looking to start contributing to open source projects.',
    fullDescription: 'Our Open Source Contributor Guide is a free resource designed to help new developers navigate the world of open source. Learn how to find projects, understand contribution guidelines, make your first pull request, and become an active member of the open source community. Includes tips, best practices, and links to helpful tools.',
    tags: ['Open Source', 'Development', 'Guide', 'Free', 'Community'],
    icon: <Lightbulb className="h-7 w-7 text-primary" />,
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'collaboration team document',
    learnMoreUrl: 'https://example.com/opensource-guide',
    format: 'Online',
    benefits: ['Learn valuable skills', 'Build your portfolio', 'Network with developers'],
  },
];


export default function OpportunityDetailPage() {
  const params = useParams();
  const router = useRouter();
  const opportunityId = params.id as string;
  const opportunity = mockOpportunities.find(op => op.id === opportunityId);

  if (!opportunity) {
    return (
      <div className="container mx-auto py-12 text-center">
        <Info className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-4xl font-bold mb-4 font-headline">Opportunity Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Sorry, we couldn't find the opportunity you're looking for.
        </p>
        <Button onClick={() => router.push('/opportunities')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Opportunities
        </Button>
      </div>
    );
  }

  const typeIcon = opportunityTypeIcons[opportunity.type] || <Info className="h-6 w-6 text-primary" />;

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <Button variant="outline" onClick={() => router.back()} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <Card className="shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="p-6 sm:p-8 bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 mb-2">
              {typeIcon}
              <Badge variant="secondary" className="text-sm capitalize">{opportunity.type}</Badge>
            </div>
            {opportunity.isFeatured && (
              <Badge className="bg-yellow-500 text-white shadow-md">Featured</Badge>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline mb-1">{opportunity.title}</h1>
          <Link href={opportunity.learnMoreUrl} target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:underline">
            Provider: {opportunity.provider} <ExternalLink className="inline-block ml-1 h-4 w-4" />
          </Link>
        </CardHeader>

        <CardContent className="p-6 sm:p-8 space-y-6">
          <Image
            src={opportunity.imageUrl}
            alt={opportunity.title}
            width={800}
            height={450}
            className="w-full h-auto object-cover rounded-lg shadow-md mb-6"
            data-ai-hint={opportunity.imageHint}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
            {opportunity.duration && (
              <div className="flex items-center p-3 bg-secondary/50 rounded-md">
                <CalendarDays className="h-5 w-5 mr-2.5 text-accent" />
                <div>
                  <span className="font-semibold">Duration:</span>
                  <p className="text-muted-foreground">{opportunity.duration}</p>
                </div>
              </div>
            )}
            {opportunity.format && (
              <div className="flex items-center p-3 bg-secondary/50 rounded-md">
                <Users className="h-5 w-5 mr-2.5 text-accent" />
                <div>
                  <span className="font-semibold">Format:</span>
                  <p className="text-muted-foreground">{opportunity.format}</p>
                </div>
              </div>
            )}
            {opportunity.applicationDeadline && (
              <div className="flex items-center p-3 bg-secondary/50 rounded-md md:col-span-2">
                <Briefcase className="h-5 w-5 mr-2.5 text-accent" />
                <div>
                  <span className="font-semibold">Application Deadline:</span>
                  <p className="text-muted-foreground">{new Date(opportunity.applicationDeadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            )}
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold font-headline mb-3">Description</h2>
            <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
              {opportunity.fullDescription || opportunity.description}
            </p>
          </div>

          {opportunity.eligibility && (
            <div>
              <h3 className="text-xl font-semibold font-headline mb-2">Eligibility</h3>
              <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{opportunity.eligibility}</p>
            </div>
          )}

          {opportunity.benefits && opportunity.benefits.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold font-headline mb-2">Benefits</h3>
              <ul className="list-disc list-inside space-y-1 pl-4 text-foreground/80">
                {opportunity.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          {opportunity.tags && opportunity.tags.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold font-headline mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {opportunity.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-sm px-3 py-1">{tag}</Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="p-6 sm:p-8 bg-muted/30 flex flex-col sm:flex-row items-center justify-between gap-4">
           <p className="text-xs text-muted-foreground text-center sm:text-left">
            Visit the provider's website for the most up-to-date information.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto text-base py-3">
            <Link href={opportunity.learnMoreUrl} target="_blank" rel="noopener noreferrer">
              Visit Opportunity Site <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
    
