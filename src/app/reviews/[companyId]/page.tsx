
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, Star, ThumbsUp, ThumbsDown, Info, Building, MessageSquare, PlusCircle, Loader2, Globe, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { JobCard, type Job } from '@/components/jobs/JobCard';
import { getAllJobs } from '@/services/jobDbService';
import type { BackendStoredJob } from '@/lib/schemas/job';

// --- Mock Data (in a real app, this would come from an API) ---
interface Company {
  id: string;
  name: string;
  logoUrl: string;
  imageHint: string;
  industry: string;
  headquarters: string;
  website: string;
  description: string;
  photos: { url: string; hint: string; }[];
}

interface Review {
  id: string;
  companyId: string;
  jobTitle: string;
  rating: number;
  pros: string;
  cons:string;
  author: string;
  submittedAt: string;
}

const mockCompanies: Company[] = [
  { 
    id: 'Grammarly', 
    name: 'Grammarly', 
    logoUrl: '/images/grammarly.png', 
    imageHint: 'grammarly logo',
    industry: 'AI & Natural Language Processing',
    headquarters: 'San Francisco, CA',
    website: 'https://www.grammarly.com/jobs',
    description: 'Grammarly is a global company that offers an AI-powered writing assistant. It helps users communicate more effectively by providing suggestions for grammar, spelling, clarity, and style. Millions of users and thousands of teams around the world trust Grammarly to improve their writing.',
    photos: [
      { url: 'https://placehold.co/600x400.png', hint: 'office interior team' },
      { url: 'https://placehold.co/600x400.png', hint: 'people collaborating presentation' },
      { url: 'https://placehold.co/600x400.png', hint: 'modern office space' },
    ]
  },
  { 
    id: 'skynet-systems', 
    name: 'SkyNet Systems', 
    logoUrl: 'https://placehold.co/100x100.png', 
    imageHint: 'SkyNet Systems logo',
    industry: 'Cloud Infrastructure & AI',
    headquarters: 'Cheyenne Mountain, CO',
    website: 'https://example.com/skynet',
    description: 'SkyNet Systems is a leader in global defense and cloud infrastructure. We are developing next-generation artificial intelligence to automate and secure critical systems worldwide. Our work is at the forefront of machine learning and large-scale distributed computing.',
    photos: [
      { url: 'https://placehold.co/600x400.png', hint: 'data center servers' },
      { url: 'https://placehold.co/600x400.png', hint: 'futuristic network hub' },
    ]
  },
  { 
    id: 'pixel-perfect-co', 
    name: 'Pixel Perfect Co.', 
    logoUrl: 'https://placehold.co/100x100.png', 
    imageHint: 'Pixel Perfect logo',
    industry: 'Digital Design & Branding',
    headquarters: 'New York, NY',
    website: 'https://example.com/pixelperfect',
    description: 'Pixel Perfect Co. is a boutique design agency specializing in creating beautiful and intuitive user experiences. We partner with startups and established brands to build memorable websites, mobile apps, and digital products.',
    photos: [
      { url: 'https://placehold.co/600x400.png', hint: 'design studio moodboard' },
    ]
  },
  { 
    id: 'dev-solutions', 
    name: 'DevSolutions', 
    logoUrl: '/images/devsolutions-logo.png', 
    imageHint: 'DevSolutions logo',
    industry: 'Developer Tools & PaaS',
    headquarters: 'Austin, TX',
    website: 'https://example.com/devsolutions',
    description: 'DevSolutions builds powerful tools for developers. From our blazing-fast IDE to our seamless deployment platform, we help engineering teams ship better software, faster. Our mission is to improve the lives of developers.',
     photos: [
      { url: 'https://placehold.co/600x400.png', hint: 'developer coding screen' },
      { url: 'https://placehold.co/600x400.png', hint: 'team code review' },
    ]
  },
];

const mockReviews: Review[] = [
  { id: 'rev1', companyId: 'Grammarly', jobTitle: 'Senior Frontend Engineer', rating: 5, pros: 'Great work-life balance, flexible remote policy, and very talented team. The projects are challenging and rewarding.', cons: 'The internal tools can be a bit slow sometimes, but they are actively working on improving them.', author: 'Former Employee', submittedAt: '2024-09-15' },
  { id: 'rev2', companyId: 'Grammarly', jobTitle: 'Product Manager', rating: 4, pros: 'Strong product vision and a collaborative environment. Leadership is transparent and open to feedback.', cons: 'Compensation could be slightly more competitive for the Bay Area market.', author: 'Current Employee', submittedAt: '2024-10-01' },
  { id: 'rev3', companyId: 'skynet-systems', jobTitle: 'Cloud DevOps Architect', rating: 3, pros: 'Cutting-edge technology stack and a lot of autonomy in your role.', cons: 'Fast-paced environment can lead to burnout. On-call schedule is demanding.', author: 'Former Employee', submittedAt: '2024-08-20' },
  { id: 'rev4', companyId: 'dev-solutions', jobTitle: 'Backend Engineer', rating: 5, pros: 'Best team I have ever worked with. Smart people, interesting problems, and a very supportive culture.', cons: 'The office snacks could be better, but that is a minor point!', author: 'Current Employee', submittedAt: '2024-10-10' },
];

const mockJobsData: BackendStoredJob[] = [
  {
    id: 'Software-Engineer-Back-End-Kyiv-Ukraine',
    jobTitle: 'Software Engineer, Back-End',
    companyName: 'Grammarly',
    companyLogo: '/images/grammarly.png',
    mainDescription: `Grammarly is looking for a talented Back-End Software Engineer to join our team in Kyiv. You will be responsible for designing and implementing scalable backend services and APIs that power our writing assistant. You'll work with a modern tech stack and solve complex challenges in a collaborative environment.`,
    requirements: '5+ years of experience in backend development, expert in Java and Scala. Strong understanding of microservices architecture and cloud platforms. BSc in Computer Science or equivalent.',
    jobCategory: 'Software Engineering',
    salaryMin: 120000,
    salaryMax: 160000,
    jobType: 'Hybrid',
    location: 'Kyiv, Ukraine',
    submittedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: true,
    applyUrl: 'https://job-boards.greenhouse.io/grammarly/jobs/6467233'
  },
  {
    id: 'Data-Scientist-Machine-Learning-Remote-USA',
    jobTitle: 'Data Scientist, Machine Learning',
    companyName: 'SkyNet Systems',
    companyLogo: 'https://placehold.co/100x100.png',
    mainDescription: 'Join SkyNet Systems as a Data Scientist and work on cutting-edge machine learning models for our global defense platform. This role involves developing predictive models, analyzing large-scale data, and contributing to the core intelligence of our systems.',
    requirements: 'PhD or MSc in a quantitative field (e.g., Computer Science, Statistics, Physics). 3+ years experience building and deploying ML models. Proficiency in Python, TensorFlow/PyTorch, and SQL. Experience with big data technologies like Spark is a plus. US citizenship required.',
    jobCategory: 'Data Science & Analytics',
    salaryMin: 140000,
    salaryMax: 180000,
    jobType: 'Remote',
    location: 'Remote, USA',
    submittedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: true,
  },
  {
    id: 'UX-UI-Designer-New-York-NY',
    jobTitle: 'UX/UI Designer',
    companyName: 'Pixel Perfect Co.',
    companyLogo: 'https://placehold.co/100x100.png',
    mainDescription: 'Pixel Perfect Co. is seeking a creative and user-centric UX/UI Designer to join our award-winning team. You will be responsible for creating wireframes, mockups, and high-fidelity prototypes for our clients\' web and mobile applications. A strong portfolio is essential.',
    requirements: '3+ years of UX/UI design experience. Mastery of Figma, Sketch, or Adobe XD. Strong understanding of user-centered design principles, user research, and interaction design. Excellent communication and collaboration skills.',
    jobCategory: 'UX/UI Design',
    salaryMin: 90000,
    salaryMax: 115000,
    jobType: 'Full-time',
    location: 'New York, NY',
    submittedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
  },
  {
    id: 'Senior-DevOps-Engineer-Austin-TX',
    jobTitle: 'Senior DevOps Engineer',
    companyName: 'DevSolutions',
    companyLogo: '/images/devsolutions-logo.png',
    mainDescription: 'We are looking for a Senior DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines. You will work closely with our development teams to ensure our platform is reliable, scalable, and secure. This is a key role in our mission to empower developers.',
    requirements: '5+ years in a DevOps or SRE role. Expertise with AWS or GCP. Strong experience with infrastructure as code (Terraform, Pulumi). Proficient in containerization (Docker, Kubernetes) and CI/CD tools (Jenkins, GitLab CI). Scripting skills in Python or Bash.',
    jobCategory: 'DevOps & Site Reliability',
    salaryMin: 130000,
    salaryMax: 170000,
    jobType: 'Hybrid',
    location: 'Austin, TX',
    submittedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'pending',
  }
];
// --- End Mock Data ---


const reviewSchema = z.object({
  jobTitle: z.string().min(2, { message: "Job title must be at least 2 characters." }),
  rating: z.coerce.number().min(1, { message: "Please select a rating." }).max(5),
  pros: z.string().min(10, { message: "Please share at least one pro (min 10 characters)." }),
  cons: z.string().min(10, { message: "Please share at least one con (min 10 characters)." }),
});
type ReviewFormValues = z.infer<typeof reviewSchema>;


export default function CompanyProfileAndReviewsPage() {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const params = useParams();
  const router = useRouter();
  const companyId = params.companyId as string;

  const [reviews, setReviews] = useState(() => mockReviews.filter(r => r.companyId === companyId));
  const [companyJobs, setCompanyJobs] = useState<BackendStoredJob[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const company = mockCompanies.find(c => c.id === companyId);
  const averageRating = reviews.length > 0 ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length : 0;

   useEffect(() => {
    async function fetchCompanyJobs() {
      if (!company) return;
      setIsLoadingJobs(true);
      // In a real app, this would be an API call: `/api/jobs?company=${company.name}`
      // For this mock, we'll filter the jobs from the DB service result
      const allJobs = await getAllJobs();
      // Also include the local mock data for demonstration
      const allAvailableJobs = [...allJobs, ...mockJobsData];
      const uniqueJobs = Array.from(new Map(allAvailableJobs.map(job => [job.id, job])).values());

      const jobsForCompany = uniqueJobs.filter(
        job => job.companyName.toLowerCase() === company.name.toLowerCase() && job.status === 'approved'
      );
      setCompanyJobs(jobsForCompany);
      setIsLoadingJobs(false);
    }
    fetchCompanyJobs();
  }, [company]);

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { jobTitle: '', rating: 0, pros: '', cons: '' },
  });

  const onSubmit = (data: ReviewFormValues) => {
    setIsSubmitting(true);
    setTimeout(() => {
      const newReview: Review = {
        id: `rev${Date.now()}`,
        companyId: companyId,
        author: currentUser?.displayName || 'Anonymous User',
        submittedAt: new Date().toISOString().split('T')[0],
        ...data,
      };
      setReviews(prev => [newReview, ...prev]);
      toast({
        title: 'Review Submitted!',
        description: 'Thank you for sharing your feedback.',
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };
  
  if (!company) {
    return (
      <div className="container mx-auto py-12 text-center">
        <Info className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-4xl font-bold mb-4 font-headline">Company Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">Sorry, we couldn't find reviews for this company.</p>
        <Button onClick={() => router.push('/reviews')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Companies
        </Button>
      </div>
    );
  }

  const mapBackendJobToJobCard = (backendJob: BackendStoredJob): Job => ({
    id: backendJob.id,
    title: backendJob.jobTitle,
    companyName: backendJob.companyName,
    location: backendJob.location,
    jobType: backendJob.jobType,
    category: backendJob.jobCategory,
    descriptionExcerpt: backendJob.mainDescription.substring(0, 150) + '...',
    postedDate: backendJob.submittedDate,
    salaryRange: backendJob.salaryMin && backendJob.salaryMax ? `$${backendJob.salaryMin/1000}k - $${backendJob.salaryMax/1000}k` : undefined,
    companyLogo: backendJob.companyLogo || company.logoUrl,
    imageHint: 'company logo generic',
    tags: [],
    applyUrl: backendJob.applyUrl,
  });

  return (
    <div className="container mx-auto py-8 max-w-5xl space-y-8">
       <Button variant="outline" onClick={() => router.push('/reviews')} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Companies
      </Button>

      <Card className="shadow-lg rounded-xl overflow-hidden">
        <CardHeader className="p-6 sm:p-8 bg-muted/30">
          <div className="flex flex-col sm:flex-row items-start gap-6">
             <Image
              src={company.logoUrl}
              alt={`${company.name} logo`}
              width={100}
              height={100}
              className="rounded-lg border-2 border-border object-contain flex-shrink-0"
              data-ai-hint={company.imageHint}
            />
            <div className="flex-grow">
              <h1 className="text-3xl sm:text-4xl font-bold font-headline mb-1">{company.name}</h1>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center text-xl font-bold text-amber-500">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={i < Math.round(averageRating) ? "fill-current" : "text-gray-300"} />
                    ))}
                </div>
                <span className="text-lg text-muted-foreground font-semibold">{averageRating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">({reviews.length} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center"><Building className="h-4 w-4 mr-1.5"/>{company.industry}</span>
                <span className="flex items-center"><MapPin className="h-4 w-4 mr-1.5"/>{company.headquarters}</span>
                <Link href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline"><Globe className="h-4 w-4 mr-1.5"/>Website</Link>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 sm:p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold font-headline mb-2">About {company.name}</h2>
            <p className="text-foreground/90">{company.description}</p>
          </section>

          {company.photos.length > 0 && (
            <section>
                <h2 className="text-xl font-semibold font-headline mb-2">Photos</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {company.photos.map((photo, index) => (
                        <Image key={index} src={photo.url} alt={`${company.name} photo ${index + 1}`} width={300} height={200} className="rounded-md object-cover" data-ai-hint={photo.hint} />
                    ))}
                </div>
            </section>
          )}
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold font-headline">Jobs at {company.name}</h2>
            {isLoadingJobs ? (
              <div className="flex items-center justify-center py-10"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
            ) : companyJobs.length > 0 ? (
              <div className="space-y-4">
                {companyJobs.map(job => (
                  <JobCard key={job.id} job={mapBackendJobToJobCard(job)} />
                ))}
                <div className="pt-4 text-center">
                  <Button asChild variant="outline">
                    <Link href="/jobs/search">
                      View All Jobs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">There are currently no open positions listed for {company.name} on TekTunnel.</p>
            )}

            <h2 className="text-2xl font-bold font-headline pt-8">Reviews ({reviews.length})</h2>
            {reviews.length > 0 ? (
                reviews.map(review => (
                    <Card key={review.id} className="shadow-md">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg">{review.jobTitle}</CardTitle>
                                    <CardDescription>by {review.author} on {new Date(review.submittedAt).toLocaleDateString()}</CardDescription>
                                </div>
                                <div className="flex items-center gap-1 text-amber-500">
                                    <span className="font-bold text-sm">{review.rating.toFixed(1)}</span>
                                    <Star className="h-4 w-4 fill-current"/>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div>
                                <h4 className="font-semibold flex items-center text-green-600"><ThumbsUp className="h-4 w-4 mr-1.5"/>Pros</h4>
                                <p className="text-sm text-muted-foreground pl-6">{review.pros}</p>
                            </div>
                             <div>
                                <h4 className="font-semibold flex items-center text-red-600"><ThumbsDown className="h-4 w-4 mr-1.5"/>Cons</h4>
                                <p className="text-sm text-muted-foreground pl-6">{review.cons}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <p className="text-muted-foreground">No reviews yet for {company.name}. Be the first to write one!</p>
            )}
        </div>

        <div className="lg:sticky top-24 self-start">
            <Card className="shadow-lg rounded-xl">
                 <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center">
                        <MessageSquare className="mr-2 h-6 w-6 text-primary" />
                        Write a Review
                    </CardTitle>
                    <CardDescription>Share your experience working at {company.name}.</CardDescription>
                </CardHeader>
                <CardContent>
                    {!currentUser ? (
                        <Alert>
                            <Info className="h-4 w-4" />
                            <AlertTitle>Login Required</AlertTitle>
                            <AlertDescription>
                                You must be logged in to submit a review. <br/>
                                <Button variant="link" asChild className="p-0 h-auto"><Link href="/job-seekers/auth">Login or Sign Up</Link></Button>
                            </AlertDescription>
                        </Alert>
                    ) : (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField control={form.control} name="rating" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Overall Rating</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center gap-1">
                                                {[1,2,3,4,5].map(star => (
                                                    <Star
                                                        key={star}
                                                        className={`h-6 w-6 cursor-pointer transition-colors ${field.value >= star ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                                                        onClick={() => field.onChange(star)}
                                                    />
                                                ))}
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                <FormField control={form.control} name="jobTitle" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your Job Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., Software Engineer" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                 <FormField control={form.control} name="pros" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Pros</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="What did you like about working here?" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                 <FormField control={form.control} name="cons" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Cons</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="What could be improved?" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                     {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Submit Anonymously
                                </Button>
                            </form>
                        </Form>
                    )}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}
