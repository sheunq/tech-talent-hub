
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Loader2, Lock, UserCircle, Briefcase, MapPin, Star, Mail, Phone, Linkedin, Github, Settings2, Info, CalendarCheck2, Brain, MessageSquare } from 'lucide-react';

// Duplicate TalentProfile interface and mock data for this example page
// In a real app, this would come from a shared service or API
export interface TalentProfile {
  id: string;
  fullName: string;
  headline: string;
  skills: string[];
  experienceYears: number;
  availability: 'Open to opportunities' | 'Not actively looking' | 'Available immediately';
  location: string;
  profilePictureUrl: string;
  summary: string;
  email?: string; // Optional details for full profile
  phone?: string; // Optional
  linkedinUrl?: string; // Optional
  githubUrl?: string; // Optional
  imageHint?: string;
  preferredRole?: string; // Optional
  education?: { degree: string; institution: string; year?: number }[]; // Optional
}

const allMockTalentProfiles: TalentProfile[] = [
  { id: 'talent1', fullName: 'Alice Wonderland', headline: 'Senior Frontend Developer | React Expert', skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Node.js', 'UI/UX Design', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Jest', 'Webpack'], experienceYears: 7, availability: 'Open to opportunities', location: 'Remote (USA)', profilePictureUrl: 'https://placehold.co/128x128/CBD5E0/4A5568?text=AW', summary: 'Passionate frontend developer with 7 years of experience building scalable and user-friendly web applications. Proven ability to lead projects and mentor junior developers. Always eager to learn new technologies and dedicated to crafting high-quality code and delightful user experiences.', email: 'alice.w@example.com', phone: '+1-555-0101', linkedinUrl:'https://linkedin.com/in/alicewonderland', githubUrl: 'https://github.com/alicew', preferredRole: 'Lead Frontend Developer', education: [{degree: 'B.Sc. Computer Science', institution: 'Tech University', year: 2017}] },
  { id: 'talent2', fullName: 'Bob The Builder', headline: 'Full-Stack Engineer | Python & Django Specialist', skills: ['Python', 'Django', 'Flask', 'JavaScript', 'React', 'Docker', 'AWS', 'PostgreSQL', 'REST APIs', 'Celery'], experienceYears: 5, availability: 'Available immediately', location: 'New York, NY', profilePictureUrl: 'https://placehold.co/128x128/CBD5E0/4A5568?text=BB', summary: 'Results-oriented full-stack engineer with a strong background in Python and cloud technologies. Adept at developing robust backend systems and collaborating in agile environments. Enjoys tackling complex problems and delivering efficient solutions.', email: 'bob.b@example.com', linkedinUrl:'https://linkedin.com/in/bobthebuilder', preferredRole: 'Senior Full-Stack Engineer', education: [{degree: 'M.Eng. Software Engineering', institution: 'State Engineering College', year: 2019}] },
  { id: 'talent3', fullName: 'Carol Danvers', headline: 'Cloud & DevOps Engineer | AWS Certified', skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Jenkins', 'Linux', 'Python', 'Ansible', 'Docker Swarm', 'Monitoring (Prometheus, Grafana)'], experienceYears: 8, availability: 'Not actively looking', location: 'San Francisco, CA', profilePictureUrl: 'https://placehold.co/128x128/CBD5E0/4A5568?text=CD', summary: 'Experienced DevOps engineer focused on automating infrastructure and streamlining deployment pipelines on AWS. Strong problem-solving skills and a passion for cloud-native solutions and SRE best practices.', email: 'carol.d@example.com', phone: '+1-555-0103', githubUrl: 'https://github.com/carold', preferredRole: 'Principal DevOps Engineer', education: [{degree: 'B.Sc. Information Technology', institution: 'City Institute of Tech', year: 2016}] },
  { id: 'talent4', fullName: 'David Copperfield', headline: 'UX/UI Designer | Mobile & Web Applications', skills: ['Figma', 'Sketch', 'Adobe XD', 'User Research', 'Prototyping', 'Interaction Design', 'HTML', 'CSS', 'User Persona Development', 'Wireframing', 'Usability Testing'], experienceYears: 4, availability: 'Open to opportunities', location: 'Remote (Europe)', profilePictureUrl: 'https://placehold.co/128x128/CBD5E0/4A5568?text=DC', summary: 'Creative UX/UI designer with a knack for crafting intuitive and visually appealing digital experiences. Proficient in all stages of the design process, from concept to high-fidelity prototypes and user testing.', email: 'david.c@example.com', linkedinUrl:'https://linkedin.com/in/davidcopperfielddesigner', preferredRole: 'Senior UX/UI Designer', education: [{degree: 'BA Graphic Design', institution: 'Art & Design University', year: 2020}] },
  { id: 'talent5', fullName: 'Eve Moneypenny', headline: 'Data Scientist | Machine Learning Enthusiast', skills: ['Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Data Visualization (Matplotlib, Seaborn)', 'Statistics', 'NLP', 'Big Data (Spark)'], experienceYears: 6, availability: 'Available immediately', location: 'Austin, TX (Hybrid)', profilePictureUrl: 'https://placehold.co/128x128/CBD5E0/4A5568?text=EM', summary: 'Data scientist with 6 years of experience in developing machine learning models and deriving actionable insights from complex datasets. Strong analytical and communication skills, capable of translating data into business value.', email: 'eve.m@example.com', phone: '+1-555-0105', githubUrl: 'https://github.com/evem', preferredRole: 'Lead Data Scientist', education: [{degree: 'Ph.D. Statistics', institution: 'Prestige University', year: 2018}, {degree: 'M.Sc. Data Science', institution: 'Prestige University', year: 2015}] },
];

export default function TalentDetailPage() {
  const { currentUser, userRole, loading: authLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  
  const talentId = params.id as string;
  const [talent, setTalent] = useState<TalentProfile | null>(null);
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      if (!currentUser) {
        toast({ title: 'Access Denied', description: 'Please log in as an employer.', variant: 'destructive' });
        router.push('/employers/auth');
        setAccessDenied(true);
        setIsLoadingPage(false);
        return;
      } else if (userRole !== 'employer') {
        toast({ title: 'Access Restricted', description: 'This page is for employers only.', variant: 'destructive' });
        router.push('/');
        setAccessDenied(true);
        setIsLoadingPage(false);
        return;
      }
      setAccessDenied(false);
      const foundTalent = allMockTalentProfiles.find(p => p.id === talentId);
      setTalent(foundTalent || null);
      setIsLoadingPage(false);
    }
  }, [currentUser, userRole, authLoading, router, toast, talentId]);

  if (authLoading || isLoadingPage) {
    return (
      <div className="container mx-auto py-12 text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <p className="mt-4 text-muted-foreground text-lg">Loading talent profile...</p>
      </div>
    );
  }

  if (accessDenied) {
    return (
      <div className="container mx-auto py-12 text-center">
        <Lock className="h-12 w-12 text-destructive mx-auto" />
        <p className="mt-4 text-muted-foreground text-lg">Access Denied. Redirecting...</p>
      </div>
    );
  }

  if (!talent) {
    return (
      <div className="container mx-auto py-12 text-center">
        <Info className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-4xl font-bold mb-4 font-headline">Talent Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">Sorry, we couldn't find the profile you're looking for.</p>
        <Button onClick={() => router.push('/employers/find-talent')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Talent Search
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <Button variant="outline" onClick={() => router.back()} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <Card className="shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="p-6 sm:p-8 bg-muted/30">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Image
              src={talent.profilePictureUrl || 'images/vision.jpg'}
              alt={`${talent.fullName}'s profile picture`}
              width={160}
              height={160}
              className="rounded-full border-4 border-primary object-cover flex-shrink-0 mx-auto sm:mx-0"
              data-ai-hint={talent.imageHint || "professional headshot avatar"}
            />
            <div className="flex-grow text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold font-headline mb-1">{talent.fullName}</h1>
              <p className="text-lg text-primary mb-2">{talent.headline}</p>
              <div className="flex items-center text-muted-foreground text-sm justify-center sm:justify-start">
                <MapPin className="h-4 w-4 mr-1.5" /> {talent.location}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 sm:p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold font-headline mb-3 flex items-center"><UserCircle className="h-6 w-6 mr-2 text-accent" /> About</h2>
            <p className="text-foreground/90 leading-relaxed whitespace-pre-line">{talent.summary}</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div className="flex items-start p-3 bg-secondary/50 rounded-md">
              <Briefcase className="h-5 w-5 mr-2.5 mt-0.5 text-accent shrink-0" />
              <div>
                <span className="font-semibold">Experience:</span>
                <p className="text-muted-foreground">{talent.experienceYears} years</p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-secondary/50 rounded-md">
              <CalendarCheck2 className="h-5 w-5 mr-2.5 mt-0.5 text-accent shrink-0" />
              <div>
                <span className="font-semibold">Availability:</span>
                <p className={`text-muted-foreground ${talent.availability === 'Available immediately' ? 'text-green-600 font-medium' : ''}`}>{talent.availability}</p>
              </div>
            </div>
            {talent.preferredRole && (
                 <div className="flex items-start p-3 bg-secondary/50 rounded-md md:col-span-2">
                    <Brain className="h-5 w-5 mr-2.5 mt-0.5 text-accent shrink-0" />
                    <div>
                        <span className="font-semibold">Preferred Role:</span>
                        <p className="text-muted-foreground">{talent.preferredRole}</p>
                    </div>
                </div>
            )}
          </div>
          
          {talent.education && talent.education.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold font-headline mb-3 flex items-center"><UserCircle className="h-6 w-6 mr-2 text-accent" /> Education</h2>
              <div className="space-y-3">
                {talent.education.map((edu, index) => (
                  <div key={index} className="p-3 bg-secondary/30 rounded-md">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">{edu.institution} {edu.year && `(${edu.year})`}</p>
                  </div>
                ))}
              </div>
            </section>
          )}


          {talent.skills && talent.skills.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold font-headline mb-3 flex items-center"><Settings2 className="h-6 w-6 mr-2 text-accent" /> Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {talent.skills.map(skill => (
                  <Badge key={skill} variant="default" className="text-sm px-3 py-1">{skill}</Badge>
                ))}
              </div>
            </section>
          )}
          
          <section>
            <h2 className="text-xl font-semibold font-headline mb-3 flex items-center"><Mail className="h-6 w-6 mr-2 text-accent" /> Contact (Simulated)</h2>
            <div className="space-y-2 text-sm">
              {talent.email && <p className="flex items-center"><Mail className="h-4 w-4 mr-2 text-muted-foreground" /> {talent.email}</p>}
              {talent.phone && <p className="flex items-center"><Phone className="h-4 w-4 mr-2 text-muted-foreground" /> {talent.phone}</p>}
              {talent.linkedinUrl && 
                <p className="flex items-center">
                  <Linkedin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <Link href={talent.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn Profile</Link>
                </p>
              }
              {talent.githubUrl && 
                <p className="flex items-center">
                  <Github className="h-4 w-4 mr-2 text-muted-foreground" />
                  <Link href={talent.githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub Profile</Link>
                </p>
              }
            </div>
          </section>

        </CardContent>

        <CardFooter className="p-6 sm:p-8 bg-muted/30 flex flex-col sm:flex-row items-center justify-between gap-4">
           <p className="text-xs text-muted-foreground text-center sm:text-left">
            TekTunnel advises verifying all candidate details before engagement.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto text-base py-3">
             <Link href={`/messages?with=${talent.id}`}>
                <MessageSquare className="mr-2 h-5 w-5"/> Message {talent.fullName.split(' ')[0]}
             </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
