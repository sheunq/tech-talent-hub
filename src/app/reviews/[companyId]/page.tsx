
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
    id: 'job-salary-interview-review-in-Grammarly', 
    name: 'Grammarly', 
    logoUrl: '/images/Grammarly.png', 
    imageHint: 'Grammarly logo',
    industry: 'AI & Natural Language Processing',
    headquarters: 'San Francisco, CA',
    website: 'https://www.grammarly.com/jobs',
    description: 'Grammarly is a global company that offers an AI-powered writing assistant. It helps users communicate more effectively by providing suggestions for grammar, spelling, clarity, and style. Millions of users and thousands of teams around the world trust Grammarly to improve their writing.',
    photos: [
      { url: '/images/Grammarly1.png', hint: 'office interior team' },
      { url: '/images/Grammarly4.jpg', hint: 'people collaborating presentation' },
      { url: '/images/Grammarly3.png', hint: 'modern office space' },
    ]
  },
  { 
    id: 'job-salary-interview-review-in-harbingermotors', 
    name: 'harbingermotors', 
    logoUrl: '/images/harbingermotors.png', 
    imageHint: 'harbingermotors logo',
    industry: 'vehicle industry',
    headquarters: '12821 Knott St, Garden Grove, CA 92841',
    website: 'https://harbingermotors.com/',
    description: 'BUILT WITHOUT COMPROMISE \
We founded Harbinger with a mission to modernize the medium-duty vehicle industry. Leveraging deep experience in electrification, Harbinger is delivering to the market an EV platform offering best-in-class performance and durability priced for zero cost acquisition premium.',
    photos: [
      { url: '/images/Harbinger1.png', hint: 'data center servers' },
      { url: '/images/Harbinger2.png', hint: 'futuristic network hub' },
    ]
  },
  { 
    id: 'job-salary-interview-review-in-Xero', 
    name: 'Xero', 
    logoUrl: '/images/xero.png', 
    imageHint: 'Pixel Perfect logo',
    industry: 'Accounting Software',
    headquarters: 'New York, NY',
    website: 'https://www.xero.com/',
    description: 'Accounting software made for small businesses and sole traders. Xero’s online accounting software connects small business owners with their numbers, their bank, and advisors at anytime. \n Founded in 2006, Xero now has 4.4 million subscribers and is a leader in cloud accounting across New Zealand, Australia and the United Kingdom.',
    photos: [
      { url: '/images/Xero1.png', hint: 'xero' },
      
    ]
  },
  { 
    id: 'job-salary-interview-review-in-portronics', 
    name: 'Portronics', 
    logoUrl: '/images/portronics.png', 
    imageHint: 'Portronics logo',
    industry: 'Tech Accessories',
    headquarters: 'Floor 10, Plot. - 6, Sector 14 Dwarka, Dwarka, New Delhi, Delhi 110075, India',
    website: 'https://www.portronics.com/pages/about-us',
    description: 'In 2010, Portronics took its first step into the industry and had reformed the dimensions of Consumer Electronics Space. With over 1600+ successful product launches and innovations, we stand first in revolutionizing the Portable & Innovative technology that has been dominating the Indian landscape. \
Portronics gave birth to the first-ever idea of introducing Indian technology to Innovative Portable Bluetooth speakers, earphones, car accessories, hubs & cables, power banks, and many more. \
Our consistent growth in the industry and quality services gives our vision an uplifting platform in the industry.',
     photos: [
      { url: '/images/Portronics1.png', hint: 'developer coding screen' },
      { url: '/images/Portronics2.png', hint: 'team code review' },
    ]
  },

    { 
    id: 'job-salary-interview-review-in-deloitte', 
    name: 'Deloitte', 
    logoUrl: '/images/deloitte.png', 
    imageHint: 'deloitte logo',
    industry: 'Tech Accessories',
    headquarters: 'London, UK',
    website: 'https://www.deloitte.com/',
    description: 'At Deloitte, we make an impact that matters \
For over 175 years, we have worked with leaders around the world—from the Global 500® to private businesses—to help them build better futures. To support their people. To succeed. All while caring for our communities. \
With a workforce made up of the industry’s greatest minds, we continue to shape the future by delivering real, measurable results. We go beyond talk—we act. ',
     photos: [
      { url: '/images/deloitte2.jpg', hint: 'deloitte' },
      
    ]
  },


  

    { 
    id: 'job-salary-interview-review-in-easebuzz', 
    name: 'easebuzz', 
    logoUrl: '/images/easebuzz.png', 
    imageHint: 'easebuzz logo',
    industry: 'Software as a Service',
    headquarters: 'Wing,2nd Floor, Hinjewadi - Wakad Road,Pune 411057, Maharashtra',
    website: 'https://easebuzz.in/',
    description: 'Founded in the year 2014, Easebuzz is a full-stack technology platform that has launched its operations in the year 2016. We are building an ecosystem of products and services to solve business problems around payment acceptance, payouts, and financial operations. The team at Easebuzz focuses on creating workflows that enable businesses to process digital payments and manage end-to-end financial operations through plug-and-play APIs.',
     photos: [
      { url: '/images/easebuzz2.png', hint: 'easebuzz' },
      
    ]
  },

  
    { 
    id: 'job-salary-interview-review-in-yext', 
    name: 'yext', 
    logoUrl: '/images/yext.png', 
    imageHint: 'yext logo',
    industry: 'Internet',
    headquarters: '	61 Ninth Avenue, New York',
    website: 'https://www.yext.com',
    description: 'We are the leading digital presence platform for multi-location brands, powering the knowledge behind every customer engagement. \
With one central platform, brands can seamlessly deliver consistent, accurate, and engaging experiences and meaningfully connect with customers anywhere in the digital world. Our AI and machine learning technology powers the knowledge behind every customer engagement, automates workflows at scale, and delivers actionable cross-channel insights that enable data-driven decisions. \
From SEO and websites to social media and reputation management, Yext enables brands to turn their digital presence into a differentiator',
     photos: [
      { url: '/images/yext1.jpg', hint: 'yext' },
      
    ]
  },
  
    { 
    id: 'job-salary-interview-review-in-3pillarglobal', 
    name: '3pillarglobal', 
    logoUrl: '/images/3pillarglobal.png', 
    imageHint: '3pillarglobal logo',
    industry: '	Software development',
    headquarters: 'Fairfax, Virginia, United States',
    website: 'https://www.3pillarglobal.com/',
    description: '3Pillar has unique experience and discipline that live at the intersection of product engineering and cognitive computing. We help organizations execute the strategic software development initiatives needed to compete in the modern digital economy.',
     photos: [
      { url: '/images/3pillarglobal.jpeg', hint: '3pillarglobal' },
      
    ]
  },
  
    { 
    id: 'job-salary-interview-review-in-godaddy', 
    name: 'godaddy', 
    logoUrl: '/images/godaddy.png', 
    imageHint: 'godaddy logo',
    industry: 'Internet IT consulting SMEs',
    headquarters: 'Tempe, Arizona, United States',
    website: 'https://www.godaddy.com/',
    description: 'GoDaddy does more than sell domain names. We help millions of small businesses globally accelerate their growth, giving entrepreneurs confidence at every stage of their business journey. People come to GoDaddy to build their business. Our global solutions seamlessly connect their identity and presence with commerce, leading to profitable growth.',
     photos: [
      { url: '/images/godaddy2.png', hint: 'godaddy' },
      
    ]
  },


];

const mockReviews: Review[] = [
  { id: 'rev1', companyId: 'job-salary-interview-review-in-Grammarly', jobTitle: 'Senior Frontend Engineer', rating: 5, pros: 'Great work-life balance, flexible remote policy, and very talented team. The projects are challenging and rewarding.', cons: 'The internal tools can be a bit slow sometimes, but they are actively working on improving them.', author: 'Former Employee', submittedAt: '2024-09-15' },
  { id: 'rev2', companyId: 'job-salary-interview-review-in-harbingermotors', jobTitle: 'Product Manager', rating: 4, pros: 'Strong product vision and a collaborative environment. Leadership is transparent and open to feedback.', cons: 'Compensation could be slightly more competitive for the Bay Area market.', author: 'Current Employee', submittedAt: '2024-10-01' },
  { id: 'rev3', companyId: 'job-salary-interview-review-in-deloitte', jobTitle: 'Cloud DevOps Architect', rating: 3, pros: 'Cutting-edge technology stack and a lot of autonomy in your role.', cons: 'Fast-paced environment can lead to burnout. On-call schedule is demanding.', author: 'Former Employee', submittedAt: '2024-08-20' },
  { id: 'rev4', companyId: 'job-salary-interview-review-in-godaddy', jobTitle: 'Backend Engineer', rating: 5, pros: 'Best team I have ever worked with. Smart people, interesting problems, and a very supportive culture.', cons: 'The office snacks could be better, but that is a minor point!', author: 'Current Employee', submittedAt: '2024-10-10' },
  { id: 'rev3', companyId: 'job-salary-interview-review-in-3pillarglobal', jobTitle: 'Cloud DevOps Architect', rating: 3, pros: 'Cutting-edge technology stack and a lot of autonomy in your role.', cons: 'Fast-paced environment can lead to burnout. On-call schedule is demanding.', author: 'Former Employee', submittedAt: '2024-08-20' },
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
  
  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      jobTitle: '',
      rating: 0,
      pros: '',
      cons: '',
    },
  });
  
  const company = mockCompanies.find(c => c.id === companyId);
  const averageRating = reviews.length > 0 ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length : 0;


   useEffect(() => {
    async function fetchCompanyJobs() {
      if (!company) return;
      setIsLoadingJobs(true);
      
      const allJobs = await getAllJobs();

      const jobsForCompany = allJobs.filter(
        job => job.companyName && company.name && job.companyName.toLowerCase() === company.name.toLowerCase() && job.status === 'approved'
      );

      setCompanyJobs(jobsForCompany.slice(0, 3)); // Limit to 3 jobs
      setIsLoadingJobs(false);
    }
    fetchCompanyJobs();
  }, [company]);

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
