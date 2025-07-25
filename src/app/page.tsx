
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Search, Users, Building, Briefcase, Lightbulb, BookOpen, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { TekTunnelLogo } from '@/components/icons/TekTunnelLogo';

const featuredOpportunities = [
    {
      id: 'Generative-AI-Prompt-Engineering-course-by-linux-foundation',
      type: 'Course',
      title: 'Generative AI Prompt Engineering (RXM401)',
      provider: 'Linux Foundation',
      description: 'In this one-day course, you will learn to maximize the benefits of generative AI systems, mastering techniques that lead to optimal output as well as learning entirely new ways to generate and refine documents and images! Learn and practice with hands-on labs',
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      id: 'Dell-Technologies-World-2026',
      type: 'Event',
      title: 'Dell Technologies World 2026-We’re reshaping the future of business, together',
      provider: 'Dell Technologies',
      description: 'The premier event for DevOps professionals, featuring workshops, keynotes, and networking opportunities.',
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
    },
     {
      id: 'Black-Hat-USA-2025',
      type: 'Event',
      title: 'Black Hat USA 2025',
      provider: 'Black Hat',
      description: 'Black Hat USA returns to the Mandalay Bay Convention Center in Las Vegas with a 6-day program.',
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    },
];


export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-12 md:space-y-20">
      <section className="w-full py-12 md:py-24 lg:py-32 text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Find Your Dream Tech Job
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-6">
            TekTunnel connects innovative companies with skilled tech professionals. Explore opportunities, build your career, and find the perfect match.
          </p>
          <div className="mt-10 space-y-4 sm:space-y-0 sm:flex sm:flex-row sm:justify-center sm:space-x-4">
            <Button asChild size="lg" className="font-semibold w-full sm:w-auto text-base py-6 px-8">
              <Link href="/jobs/search">
                Search Jobs <Search className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold w-full sm:w-auto text-base py-6 px-8">
              <Link href="/employers/auth">
                For Employers <Building className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline mb-12">
            Why TekTunnel?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="bg-primary/5 p-6">
                <Users className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="font-headline text-2xl">For Job Seekers</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Access a curated list of tech jobs, create a stunning profile, and get matched with your ideal role using our AI-powered tools.</p>
              </CardContent>
              <CardFooter className="bg-muted/30 p-6">
                <Button variant="link" asChild className="text-primary p-0 h-auto">
                  <Link href="/job-seekers/auth">Get Started <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="bg-accent/5 p-6">
                <Building className="h-12 w-12 text-accent mb-3" />
                <CardTitle className="font-headline text-2xl">For Employers</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Reach top tech talent, post jobs effortlessly, and streamline your hiring process with our advanced employer dashboard.</p>
              </CardContent>
              <CardFooter className="bg-muted/30 p-6">
                <Button variant="link" asChild className="text-accent p-0 h-auto">
                  <Link href="/employers/post-job">Post a Job <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="bg-secondary/20 p-6">
                <BrainCircuit className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="font-headline text-2xl">AI-Powered Matching</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Our intelligent algorithms connect the right candidates with the right opportunities, saving time for everyone.</p>
              </CardContent>
               <CardFooter className="bg-muted/30 p-6">
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href="/ai-match">Learn More <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline mb-12">
            Featured Jobs
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { id: 'Engineering-Manager-Growth-in-Berlin-Germany-Grammarly', title: 'Engineering Manager, Growth', company: 'Grammarly', location: 'Germany', type: 'Hybrid', tags: ['React', 'TypeScript'] , imageSrc: '/images/Grammarly.png', imageHint: 'Grammarly logo' },
              { id: 'Senior-Software-Engineer-Java-in-Bordeaux-mirakl', title: 'Senior Software Engineer Java', company: 'mirakl', location: 'France', type: 'Full-time', tags: ['AWS','Docker','Java','Kafka'], imageSrc: '/images/mirakl.png', imageHint: 'mirakl logo' },
              { id: 'cloud-platform-engineer-information-security-in-smarsh-at-Portland', title: 'Cloud Platform Engineer – Information Security', company: 'smarsh', location: 'Portland', type: 'Hybrid', tags: ['CI/CD','DevOps','AWS','Kubernetes'], imageSrc: '/images/smarsh.png', imageHint: 'smarsh logo' },
            ].map((job) => (
              <Card key={job.id} className="flex flex-col hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                <CardHeader className="p-6">
                  <div className="flex items-start justify-between">
                    <Image src={job.imageSrc} alt={`${job.company} logo`} width={60} height={60} className="rounded-md border mr-4" data-ai-hint={job.imageHint}/>
                    <div>
                      <CardTitle className="font-headline text-xl leading-tight">{job.title}</CardTitle>
                      <CardDescription>{job.company} - {job.location}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">Join our innovative team to build next-generation solutions. Strong experience in relevant technologies required.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{job.type}</Badge>
                    {job.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30 p-6">
                  <Button asChild className="w-full">
                    <Link href={`/jobs/${job.id}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/jobs/search">View All Jobs <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline mb-12">
            Featured Opportunities
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="flex flex-col hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                <CardHeader className="p-6">
                  <div className="flex items-start justify-between mb-2">
                     {opportunity.icon}
                     <Badge variant="secondary">{opportunity.type}</Badge>
                  </div>
                  <CardTitle className="font-headline text-xl leading-tight">{opportunity.title}</CardTitle>
                  <CardDescription>{opportunity.provider}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">{opportunity.description}</p>
                </CardContent>
                <CardFooter className="bg-muted/30 p-6">
                  <Button asChild className="w-full">
                    <Link href={`/opportunities/${opportunity.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/opportunities">View All Opportunities <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
