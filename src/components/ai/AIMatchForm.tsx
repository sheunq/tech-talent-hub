
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Briefcase, AlertTriangle, MapPin, Building, Zap, Star } from 'lucide-react';
import { getJobSeekerRecommendations, type JobSeekerRecommendationsInput, type JobSeekerRecommendationsOutput, type RecommendedJob } from '@/ai/flows/ai-job-matching';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export function AIMatchForm() {
  const [jobSeekerProfile, setJobSeekerProfile] = useState('');
  const [searchHistory, setSearchHistory] = useState('');
  const [recommendations, setRecommendations] = useState<RecommendedJob[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobSeekerProfile.trim() && !searchHistory.trim()) {
        toast({
            title: "Input Required",
            description: "Please provide your profile details or search history for better recommendations.",
            variant: "destructive",
        });
        return;
    }
    setIsLoading(true);
    setRecommendations([]);
    setError(null);

    try {
      const input: JobSeekerRecommendationsInput = {
        jobSeekerProfile: jobSeekerProfile || "Not provided by user.",
        searchHistory: searchHistory || "Not provided by user.",
      };
      const result: JobSeekerRecommendationsOutput = await getJobSeekerRecommendations(input);
      
      if (result.jobRecommendations && result.jobRecommendations.length > 0) {
        setRecommendations(result.jobRecommendations);
        toast({
            title: "AI Recommendations Ready!",
            description: `Found ${result.jobRecommendations.length} potential job matches for you.`,
        });
      } else {
        setRecommendations([]);
        toast({
            title: "No Specific Matches Found",
            description: "We couldn't find specific job titles. Try adding more details to your profile or preferences!",
        });
      }
    } catch (err) {
      console.error('AI Job Matching Error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to get job recommendations: ${errorMessage}`);
      toast({
        title: 'AI Matching Error',
        description: 'There was a problem generating recommendations. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl rounded-xl">
      <CardHeader className="text-center">
        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-3">
            <Sparkles className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="font-headline text-3xl">AI Job Matchmaker</CardTitle>
        <CardDescription className="text-lg">
          Let our AI find jobs tailored to your profile and search behavior. The more details you provide, the better the match!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="jobSeekerProfile" className="text-lg font-medium">Your Profile & Skills</Label>
            <Textarea
              id="jobSeekerProfile"
              value={jobSeekerProfile}
              onChange={(e) => setJobSeekerProfile(e.target.value)}
              placeholder="Paste your resume summary, key skills (e.g., React, Python, AWS), years of experience, and education here..."
              rows={8}
              className="mt-2 text-base"
              aria-describedby="profile-description"
            />
            <p id="profile-description" className="text-sm text-muted-foreground mt-1">Example: "Senior Full Stack Developer, 7+ years in SaaS. Proficient in Python (Django, Flask), JavaScript (React, Node.js), AWS, Docker, PostgreSQL. Led team of 5. MSc Data Science."</p>
          </div>
          <div>
            <Label htmlFor="searchHistory" className="text-lg font-medium">Your Job Preferences</Label>
            <Textarea
              id="searchHistory"
              value={searchHistory}
              onChange={(e) => setSearchHistory(e.target.value)}
              placeholder="Describe your ideal job: desired roles (e.g., 'remote data scientist'), locations, company types (startup, enterprise), industries, salary expectations."
              rows={5}
              className="mt-2 text-base"
              aria-describedby="history-description"
            />
            <p id="history-description" className="text-sm text-muted-foreground mt-1">Example: "Seeking remote Senior Backend Engineer roles. Keywords: Go, Kubernetes, Microservices. Preferred location: Europe. Interested in fintech or healthtech. Salary: {'>'}$120k."</p>
          </div>
          <Button type="submit" disabled={isLoading} className="w-full text-lg py-6">
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-5 w-5" />
            )}
            Find Matching Jobs
          </Button>
        </form>
      </CardContent>

      {error && (
        <CardFooter className="pt-4 pb-6">
            <Alert variant="destructive" className="w-full">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        </CardFooter>
      )}

      {!isLoading && recommendations.length > 0 && (
        <CardFooter className="flex-col items-start space-y-4 pt-6 border-t px-6 pb-6">
          <h3 className="text-2xl font-semibold font-headline text-primary mb-2">AI-Powered Recommendations:</h3>
          <div className="grid grid-cols-1 gap-4 w-full">
            {recommendations.map((rec, index) => {
              const searchParams = new URLSearchParams();
              if (rec.jobTitle) searchParams.set('keywords', rec.jobTitle);
              if (rec.location) searchParams.set('location', rec.location);
              const href = `/jobs/search?${searchParams.toString()}`;

              return (
                <Link href={href} key={index} passHref legacyBehavior>
                  <Card 
                    className={cn(
                      "shadow-md hover:shadow-lg transition-all duration-200 rounded-lg overflow-hidden cursor-pointer",
                      "hover:border-primary focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
                    )}
                    role="link"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') (e.target as HTMLElement).click();}}
                  >
                    <CardHeader className="pb-3 pt-4 px-4">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="font-headline text-lg text-foreground leading-tight group-hover:text-primary">{rec.jobTitle}</CardTitle>
                        {rec.matchConfidence && (
                            <div className="flex items-center gap-1.5 shrink-0">
                                <Star className="h-4 w-4 text-yellow-500" />
                                <span className="text-xs font-medium text-muted-foreground">{rec.matchConfidence}%</span>
                            </div>
                        )}
                      </div>
                       {rec.companyName && <p className="text-sm text-muted-foreground flex items-center"><Building className="h-3.5 w-3.5 mr-1.5 shrink-0" /> {rec.companyName}</p>}
                       {rec.location && <p className="text-sm text-muted-foreground flex items-center"><MapPin className="h-3.5 w-3.5 mr-1.5 shrink-0" /> {rec.location}</p>}
                    </CardHeader>
                    <CardContent className="px-4 pb-4 pt-2">
                      <p className="text-sm text-foreground/80 leading-relaxed mb-2">{rec.reasoning}</p>
                      {rec.matchConfidence && (
                         <div className="mt-2">
                            <Label htmlFor={`confidence-${index}`} className="text-xs text-muted-foreground mb-1 block">Match Confidence</Label>
                            <Progress value={rec.matchConfidence} id={`confidence-${index}`} className="h-2" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </CardFooter>
      )}
      {!isLoading && !error && recommendations.length === 0 && (jobSeekerProfile || searchHistory) && (
         <CardFooter className="flex-col items-center space-y-3 pt-6 border-t px-6 pb-6 text-center">
            <Zap className="h-12 w-12 text-muted-foreground/50" />
            <h4 className="font-semibold text-lg">No Specific Recommendations Found</h4>
            <p className="text-muted-foreground max-w-sm text-sm">
                Our AI couldn't pinpoint specific job titles with the current input. Try adding more details about your skills, experience, or job preferences for more tailored suggestions.
            </p>
         </CardFooter>
      )}
    </Card>
  );
}

