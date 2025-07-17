
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Search, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';

// --- Mock Data (in a real app, this would come from an API) ---
interface CompanyForReview {
  id: string;
  name: string;
  logoUrl: string;
  imageHint: string;
  reviewCount: number;
  averageRating: number;
  industry: string;
}

const mockCompaniesForReview: CompanyForReview[] = [
  { id: 'job-salary-interview-review-in-Grammarly', name: 'Grammarly', logoUrl: '/images/Grammarly.png', imageHint: 'grammarly logo', reviewCount: 2, averageRating: 4.5, industry: 'AI & Natural Language Processing' },
  { id: 'job-salary-interview-review-in-harbingermotors', name: 'harbingermotors', logoUrl: '/images/harbingermotors.png', imageHint: 'harbingermotors', reviewCount: 1, averageRating: 4.5, industry: 'vehicle industry' },
  { id: 'job-salary-interview-review-in-Xero', name: 'Xero', logoUrl: '/images/xero.png', imageHint: 'Xero logo', reviewCount: 0, averageRating: 4.5, industry: 'Accounting Software' },
  { id: 'job-salary-interview-review-in-portronics', name: 'Portronics', logoUrl: '/images/portronics.png', imageHint: 'portronics logo', reviewCount: 1, averageRating: 5.0, industry: 'Tech Accessories' },
  { id: 'job-salary-interview-review-in-deloitte', name: 'Deloitte', logoUrl: '/images/deloitte.png', imageHint: 'deloitte logo', reviewCount: 0, averageRating: 4.5, industry: 'Consulting Firm' },
  { id: 'job-salary-interview-review-in-easebuzz', name: 'Easebuzz', logoUrl: '/images/easebuzz.png', imageHint: 'easebuzz logo', reviewCount: 0, averageRating: 4.5, industry: 'Software as a Service' },
  { id: 'job-salary-interview-review-in-yext', name: 'yext', logoUrl: '/images/yext.png', imageHint: 'yext logo', reviewCount: 0, averageRating: 4.5, industry: 'Internet' },
  { id: 'job-salary-interview-review-in-3pillarglobal', name: '3pillarglobal', logoUrl: '/images/3pillarglobal.png', imageHint: '3pillarglobal logo', reviewCount: 1, averageRating: 4.5, industry: 'Software development' },
  { id: 'job-salary-interview-review-in-godaddy', name: 'godaddy', logoUrl: '/images/godaddy.png', imageHint: 'godaddy logo', reviewCount: 1, averageRating: 4.5, industry: 'Internet IT consulting SMEs' },
];
// --- End Mock Data ---

export default function ReviewsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
          <Building className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight font-headline">Company Reviews & Insights</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Get an inside look at company culture, salaries, and interview experiences from real employees.
        </p>
      </div>

      <div className="mb-10 p-6 bg-muted/30 rounded-xl shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Input placeholder="Search company name..." className="flex-grow text-base" />
          <Button size="lg" className="w-full sm:w-auto text-base">
            <Search className="mr-2 h-5 w-5" /> Search
          </Button>
        </div>
         <p className="text-xs text-muted-foreground mt-3 text-center sm:text-left">Search functionality is a future enhancement.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockCompaniesForReview.map(company => (
          <Card key={company.id} className="flex flex-col h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="p-5">
               <div className="flex items-center space-x-4">
                  <Image
                    src={company.logoUrl}
                    alt={`${company.name} logo`}
                    width={64}
                    height={64}
                    className="rounded-lg border object-contain"
                    data-ai-hint={company.imageHint}
                  />
                  <div className="flex-1">
                    <CardTitle className="font-headline text-xl leading-tight">
                        <Link href={`/reviews/${company.id}`} className="hover:text-primary transition-colors">
                            {company.name}
                        </Link>
                    </CardTitle>
                    <CardDescription>{company.industry}</CardDescription>
                  </div>
               </div>
            </CardHeader>
            <CardContent className="p-5 pt-0 flex-grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-0.5 text-amber-500">
                         <Star className={`h-4 w-4 ${company.averageRating > 0 ? 'fill-current' : 'text-gray-300'}`} />
                         <span className="font-bold text-base">{company.averageRating > 0 ? company.averageRating.toFixed(1) : 'N/A'}</span>
                    </div>
                    <span>&bull;</span>
                    <span>{company.reviewCount} reviews</span>
                </div>
            </CardContent>
            <CardFooter className="p-5 bg-muted/20">
                <Button asChild variant="link" className="p-0 h-auto text-primary font-semibold group">
                    <Link href={`/reviews/${company.id}`}>
                        View Company Profile
                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
