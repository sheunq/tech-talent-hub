
'use client';

import { useState } from 'react';
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
import { ArrowLeft, Star, ThumbsUp, ThumbsDown, Info, Building, MessageSquare, PlusCircle, Loader2 } from 'lucide-react';
import Image from 'next/image';

// --- Mock Data (in a real app, this would come from an API) ---
interface Company {
  id: string;
  name: string;
  logoUrl: string;
  imageHint: string;
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
  { id: 'innovate-solutions', name: 'Innovate Solutions', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'Innovate Solutions logo' },
  { id: 'skynet-systems', name: 'SkyNet Systems', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'SkyNet Systems logo' },
  { id: 'pixel-perfect-co', name: 'Pixel Perfect Co.', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'Pixel Perfect logo' },
  { id: 'dev-solutions', name: 'DevSolutions', logoUrl: '/images/devsolutions-logo.png', imageHint: 'DevSolutions logo' },
];

const mockReviews: Review[] = [
  { id: 'rev1', companyId: 'innovate-solutions', jobTitle: 'Senior Frontend Engineer', rating: 5, pros: 'Great work-life balance, flexible remote policy, and very talented team. The projects are challenging and rewarding.', cons: 'The internal tools can be a bit slow sometimes, but they are actively working on improving them.', author: 'Former Employee', submittedAt: '2024-09-15' },
  { id: 'rev2', companyId: 'innovate-solutions', jobTitle: 'Product Manager', rating: 4, pros: 'Strong product vision and a collaborative environment. Leadership is transparent and open to feedback.', cons: 'Compensation could be slightly more competitive for the Bay Area market.', author: 'Current Employee', submittedAt: '2024-10-01' },
  { id: 'rev3', companyId: 'skynet-systems', jobTitle: 'Cloud DevOps Architect', rating: 3, pros: 'Cutting-edge technology stack and a lot of autonomy in your role.', cons: 'Fast-paced environment can lead to burnout. On-call schedule is demanding.', author: 'Former Employee', submittedAt: '2024-08-20' },
  { id: 'rev4', companyId: 'dev-solutions', jobTitle: 'Backend Engineer', rating: 5, pros: 'Best team I have ever worked with. Smart people, interesting problems, and a very supportive culture.', cons: 'The office snacks could be better, but that is a minor point!', author: 'Current Employee', submittedAt: '2024-10-10' },
];
// --- End Mock Data ---


const reviewSchema = z.object({
  jobTitle: z.string().min(2, { message: "Job title must be at least 2 characters." }),
  rating: z.coerce.number().min(1, { message: "Please select a rating." }).max(5),
  pros: z.string().min(10, { message: "Please share at least one pro (min 10 characters)." }),
  cons: z.string().min(10, { message: "Please share at least one con (min 10 characters)." }),
});
type ReviewFormValues = z.infer<typeof reviewSchema>;


export default function CompanyReviewsPage() {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const params = useParams();
  const router = useRouter();
  const companyId = params.companyId as string;

  const [reviews, setReviews] = useState(() => mockReviews.filter(r => r.companyId === companyId));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const company = mockCompanies.find(c => c.id === companyId);
  const averageRating = reviews.length > 0 ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length : 0;

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { jobTitle: '', rating: 0, pros: '', cons: '' },
  });

  const onSubmit = (data: ReviewFormValues) => {
    setIsSubmitting(true);
    // Simulate API call to submit the review
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
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Reviews
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 max-w-4xl space-y-8">
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
              <div className="flex items-center gap-2">
                <div className="flex items-center text-xl font-bold text-amber-500">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={i < Math.round(averageRating) ? "fill-current" : "text-gray-300"} />
                    ))}
                </div>
                <span className="text-lg text-muted-foreground font-semibold">{averageRating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">({reviews.length} reviews)</span>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
            <h2 className="text-2xl font-bold font-headline">Reviews ({reviews.length})</h2>
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

        <div>
            <Card className="sticky top-24 shadow-lg rounded-xl">
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
