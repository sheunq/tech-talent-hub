
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Loader2, Lock, LayoutDashboard, Briefcase, GraduationCap, Settings2, UploadCloud, Info } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getCandidateProfile } from '@/services/candidateDbService';
import type { CandidateProfile } from '@/lib/schemas/candidate';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function CandidateProfilePage() {
  const { currentUser, userRole, loading: authLoading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [accessDenied, setAccessDenied] = useState(false);
  const [profile, setProfile] = useState<CandidateProfile | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  useEffect(() => {
    if (!authLoading) {
      if (!currentUser) {
        toast({
          title: 'Access Denied',
          description: 'Please log in to view your profile.',
          variant: 'destructive',
        });
        router.push('/job-seekers/auth');
        setAccessDenied(true);
        return;
      }
      if (userRole !== 'jobSeeker') {
        toast({
          title: 'Access Restricted',
          description: 'This page is for job seekers only.',
          variant: 'destructive',
        });
        router.push('/');
        setAccessDenied(true);
        return;
      }
      
      setAccessDenied(false);

      const fetchProfile = async () => {
        setIsLoadingProfile(true);
        try {
          const fetchedProfile = await getCandidateProfile(currentUser.uid);
          setProfile(fetchedProfile);
        } catch (error) {
          console.error("Failed to fetch profile:", error);
          toast({
            title: "Error",
            description: "Could not load your profile data.",
            variant: "destructive"
          });
        } finally {
          setIsLoadingProfile(false);
        }
      };

      fetchProfile();
    }
  }, [currentUser, userRole, authLoading, router, toast]);

  if (authLoading || isLoadingProfile) {
    return (
      <div className="container mx-auto py-12 text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <p className="mt-4 text-muted-foreground text-lg">Loading profile...</p>
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

  return (
    <div className="container mx-auto py-8 space-y-6">
       <Button asChild variant="outline">
          <Link href="/job-seekers/dashboard">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>

      <Card className="max-w-4xl mx-auto shadow-xl rounded-xl">
        <CardHeader className="text-center bg-muted/30 p-8 rounded-t-xl">
            <Image 
                src={currentUser?.photoURL || '/images/vision.jpg'} 
                alt={profile?.personal_info?.full_name || currentUser?.displayName || "User Avatar"}
                width={128}
                height={128}
                className="rounded-full mx-auto mb-4 border-4 border-primary shadow-lg"
                data-ai-hint="avatar"
            />
            <CardTitle className="font-headline text-3xl">{profile?.personal_info?.full_name || currentUser?.displayName}</CardTitle>
            <CardDescription className="text-lg">{profile?.professional_summary || currentUser?.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 p-6 md:p-10">
            {!profile ? (
                 <div className="text-center py-10 bg-card border rounded-xl shadow-sm">
                    <Info className="mx-auto h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-2 font-headline">Your Profile is Empty</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                        Build your professional profile in seconds by uploading your resume. Our AI will do the heavy lifting for you.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/job-seekers/resume-upload">
                             <UploadCloud className="mr-2 h-5 w-5" /> Upload Your Resume
                        </Link>
                    </Button>
                </div>
            ) : (
                <>
                {/* Work Experience */}
                {profile.experience && profile.experience.length > 0 && (
                  <section>
                    <h3 className="font-headline text-2xl flex items-center gap-2 mb-4"><Briefcase className="h-6 w-6 text-primary"/> Work Experience</h3>
                    <div className="space-y-6 border-l-2 border-primary/20 pl-6">
                      {profile.experience.map((exp, index) => (
                        <div key={index} className="relative">
                          <div className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-primary" />
                          <p className="font-semibold text-lg">{exp.job_title}</p>
                          <p className="text-md text-muted-foreground">{exp.company_name} &bull; {exp.location}</p>
                          <p className="text-sm text-muted-foreground mb-2">{exp.start_date} - {exp.end_date}</p>
                          {Array.isArray(exp.responsibilities) && <ul className="list-disc pl-5 text-sm text-foreground/80 space-y-1">
                            {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                          </ul>}
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                <Separator />

                {/* Education */}
                {profile.education && profile.education.length > 0 && (
                  <section>
                    <h3 className="font-headline text-2xl flex items-center gap-2 mb-4"><GraduationCap className="h-6 w-6 text-primary"/> Education</h3>
                     <div className="space-y-4">
                      {profile.education.map((edu, index) => (
                        <div key={index} className="p-4 border rounded-lg bg-muted/30">
                          <p className="font-semibold">{edu.degree}, {edu.field_of_study}</p>
                          <p className="text-sm text-muted-foreground">{edu.institution_name}</p>
                          <p className="text-sm text-muted-foreground">{edu.start_date} - {edu.end_date}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                
                <Separator />
                
                {/* Skills */}
                {profile.skills && (
                  <section>
                    <h3 className="font-headline text-2xl flex items-center gap-2 mb-4"><Settings2 className="h-6 w-6 text-primary"/> Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {profile.skills.technical?.map(skill => <Badge key={skill.skill_name} className="py-1 px-3 text-sm">{skill.skill_name}</Badge>)}
                        {profile.skills.soft?.map(skill => <Badge key={skill} variant="secondary" className="py-1 px-3 text-sm">{skill}</Badge>)}
                        {profile.skills.tools_software?.map(tool => <Badge key={tool.tool_name} variant="outline" className="py-1 px-3 text-sm">{tool.tool_name}</Badge>)}
                    </div>
                  </section>
                )}
                </>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
