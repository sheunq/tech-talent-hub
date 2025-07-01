
'use client';

import { useState, useRef, type DragEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { UploadCloud, FileText, Loader2, AlertTriangle, CheckCircle, ArrowLeft, UserCircle, Briefcase, GraduationCap, Settings2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { parseResume, type ResumeParserOutput } from '@/ai/flows/resume-parser-flow';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';

export default function ResumeUploadPage() {
  const { toast } = useToast();
  const { currentUser } = useAuth();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [parsedData, setParsedData] = useState<ResumeParserOutput | null>(null);

  const handleFileChange = (file: File | null) => {
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast({ title: "File too large", description: "Please upload a file smaller than 5MB.", variant: "destructive" });
      return;
    }

    setFileName(file.name);
    setError(null);
    setParsedData(null);
    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUri = e.target?.result as string;
      try {
        const result = await parseResume({ resumeDataUri: dataUri });
        setParsedData(result);
        toast({ title: "Resume Parsed Successfully!", description: "Review the extracted information below." });
      } catch (err) {
        console.error("Resume parsing error:", err);
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred during parsing.";
        setError(errorMessage);
        toast({ title: "Parsing Failed", description: "Could not extract information from the resume.", variant: "destructive" });
      } finally {
        setIsLoading(false);
      }
    };
    reader.onerror = () => {
      setError("Failed to read the file.");
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileChange(files[0]);
    }
  };

  const handleSaveProfile = async () => {
    if (!parsedData || !currentUser) {
      toast({
        title: "Cannot Save Profile",
        description: "No parsed data available or you are not logged in.",
        variant: "destructive"
      });
      return;
    }

    setIsSaving(true);
    try {
      const token = await currentUser.getIdToken();
      const response = await fetch('/api/candidate-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ ...parsedData, fileName }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save profile.');
      }

      toast({
        title: "Profile Saved!",
        description: "Your profile has been updated with your resume details.",
      });

      router.push('/job-seekers/dashboard');

    } catch (err) {
      console.error("Save profile error:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(errorMessage);
      toast({
        title: "Save Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };


  return (
    <div className="container mx-auto py-8 max-w-4xl space-y-6">
       <Button asChild variant="outline">
          <Link href="/job-seekers/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      <Card className="shadow-xl rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <UploadCloud className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="font-headline text-3xl">AI-Powered Resume Parser</CardTitle>
          <CardDescription className="text-lg">
            Upload your resume (PDF, DOCX) to automatically build your TekTunnel profile.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div
            className={cn(
              "border-2 border-dashed rounded-xl p-8 text-center cursor-pointer hover:border-primary transition-colors",
              isDragging && "border-primary bg-primary/10"
            )}
            onClick={() => fileInputRef.current?.click()}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
            />
            <div className="flex flex-col items-center justify-center space-y-3">
              <UploadCloud className="h-10 w-10 text-muted-foreground" />
              <p className="font-semibold">Drag & drop your resume here, or click to browse</p>
              <p className="text-sm text-muted-foreground">PDF or DOCX (Max 5MB)</p>
            </div>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center space-x-3 text-lg">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-muted-foreground">Our AI is analyzing your resume...</p>
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Parsing Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {fileName && !isLoading && (
            <div className="flex items-center justify-center space-x-2 text-green-600 font-medium">
              <FileText className="h-5 w-5" />
              <span>{fileName}</span>
              <CheckCircle className="h-5 w-5" />
            </div>
          )}
        </CardContent>
      </Card>

      {parsedData && (
        <Card className="shadow-xl rounded-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Extracted Profile Information</CardTitle>
            <CardDescription>Review the information our AI extracted from your resume. You can edit this later on your profile page.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Personal Info */}
            <section>
              <h3 className="font-headline text-lg flex items-center gap-2 mb-3"><UserCircle className="h-5 w-5 text-primary"/> Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm p-4 bg-muted/30 rounded-lg">
                <p><strong>Name:</strong> {parsedData.personal_info?.full_name || 'N/A'}</p>
                <p><strong>Email:</strong> {parsedData.personal_info?.email || 'N/A'}</p>
                <p><strong>Phone:</strong> {`${parsedData.personal_info?.phone?.country_code || ''} ${parsedData.personal_info?.phone?.number || 'N/A'}`}</p>
                <p><strong>Location:</strong> {`${parsedData.personal_info?.location?.city || ''}, ${parsedData.personal_info?.location?.country || 'N/A'}`}</p>
                <p><strong>LinkedIn:</strong> {parsedData.personal_info?.linkedin_url ? <a href={parsedData.personal_info.linkedin_url} target="_blank" className="text-primary hover:underline">Link</a> : 'N/A'}</p>
                <p><strong>GitHub:</strong> {parsedData.personal_info?.github_url ? <a href={parsedData.personal_info.github_url} target="_blank" className="text-primary hover:underline">Link</a> : 'N/A'}</p>
              </div>
            </section>
            
            <Separator />
            
            {/* Work Experience */}
            {parsedData.experience && parsedData.experience.length > 0 && (
              <section>
                <h3 className="font-headline text-lg flex items-center gap-2 mb-3"><Briefcase className="h-5 w-5 text-primary"/> Work Experience</h3>
                <div className="space-y-4">
                  {parsedData.experience.map((exp, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <p className="font-semibold">{exp.job_title} at {exp.company_name}</p>
                      <p className="text-sm text-muted-foreground">{exp.start_date} - {exp.end_date}</p>
                      {Array.isArray(exp.responsibilities) && <ul className="list-disc pl-5 mt-2 text-sm text-foreground/80">
                        {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                      </ul>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
             {parsedData.education && parsedData.education.length > 0 && (
              <section>
                <h3 className="font-headline text-lg flex items-center gap-2 mb-3"><GraduationCap className="h-5 w-5 text-primary"/> Education</h3>
                <div className="space-y-4">
                  {parsedData.education.map((edu, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <p className="font-semibold">{edu.degree}, {edu.field_of_study}</p>
                      <p className="text-sm text-muted-foreground">{edu.institution_name}</p>
                      <p className="text-sm text-muted-foreground">{edu.start_date} - {edu.end_date}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Skills */}
            {parsedData.skills && (
              <section>
                 <h3 className="font-headline text-lg flex items-center gap-2 mb-3"><Settings2 className="h-5 w-5 text-primary"/> Skills</h3>
                 <div className="flex flex-wrap gap-2 p-4 bg-muted/30 rounded-lg">
                    {parsedData.skills.technical?.map(skill => <Badge key={skill.skill_name}>{skill.skill_name}</Badge>)}
                    {parsedData.skills.soft?.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                 </div>
              </section>
            )}

          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full text-base" onClick={handleSaveProfile} disabled={!parsedData || isSaving || isLoading}>
                {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Save to My Profile
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
