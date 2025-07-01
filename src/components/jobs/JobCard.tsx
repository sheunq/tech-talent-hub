
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, DollarSign, Clock, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';

export interface Job {
  id: string;
  title: string;
  companyName: string;
  companyLogo?: string;
  location: string;
  jobType: string;
  category?: string;
  salaryRange?: string;
  descriptionExcerpt: string;
  postedDate?: string; // Will be an ISO string
  tags?: string[];
  imageHint?: string; 
  applyUrl?: string;
}

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const dateToFormat = job.postedDate ? new Date(job.postedDate) : new Date();
  const formattedPostedDate = formatDistanceToNow(dateToFormat, { addSuffix: true });

  return (
    <Card className="hover:shadow-xl transition-shadow duration-200 flex flex-col h-full rounded-lg overflow-hidden border">
      <CardHeader className="p-5 bg-card">
        <div className="flex items-start space-x-4">
          <Image
            src={job.companyLogo || 'https://placehold.co/56x56.png'}
            alt={`${job.companyName} logo`}
            width={56}
            height={56}
            className="rounded-md border object-contain"
            data-ai-hint={job.imageHint || "company logo generic"}
            />
          <div className="flex-1">
            <CardTitle className="font-headline text-lg leading-tight mb-0.5 hover:text-primary transition-colors">
                <Link href={`/jobs/${job.id}`}>{job.title}</Link>
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{job.companyName}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-5 space-y-3 text-sm text-muted-foreground flex-grow">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-2 text-primary shrink-0" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <Briefcase className="h-4 w-4 mr-2 text-primary shrink-0" />
          <span>{job.jobType}</span>
        </div>
        {job.salaryRange && (
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-2 text-primary shrink-0" />
            <span>{job.salaryRange}</span>
          </div>
        )}
        {job.category && <Badge variant="secondary" className="capitalize">{job.category}</Badge>}

        <p className="pt-1 line-clamp-3 text-foreground/80">{job.descriptionExcerpt}</p>

        {job.tags && job.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
                {job.tags.slice(0,3).map(tag => <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>)}
            </div>
        )}
      </CardContent>
      <CardFooter className="p-5 bg-muted/30 flex justify-between items-center">
        <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5 mr-1.5" /> {formattedPostedDate}
        </div>
        <Button asChild size="sm" variant="default">
          <Link href={`/jobs/${job.id}`}>View Details <ExternalLink className="ml-1.5 h-4 w-4" /></Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
    
