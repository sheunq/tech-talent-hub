
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { TalentSearchFilters, type TalentSearchFiltersData } from '@/components/employers/TalentSearchFilters';
import { TalentProfileCard, type TalentProfile } from '@/components/employers/TalentProfileCard';
import { Button } from '@/components/ui/button';
import { Loader2, UsersRound, AlertTriangle, Lock } from 'lucide-react';
import Image from 'next/image';

// Mock data for talent profiles
const allMockTalentProfiles: TalentProfile[] = [
  { id: 'talent1', fullName: 'Alice Wonderland', headline: 'Senior Frontend Developer | React Expert', skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Node.js', 'UI/UX Design'], experienceYears: 7, availability: 'Open to opportunities', location: 'Remote (USA)', profilePictureUrl: 'https://placehold.co/128x128.png/FFC0CB/000000?text=AW', summary: 'Passionate frontend developer with 7 years of experience building scalable and user-friendly web applications. Proven ability to lead projects and mentor junior developers. Always eager to learn new technologies.', imageHint: 'female developer avatar' },
  { id: 'talent2', fullName: 'Bob The Builder', headline: 'Full-Stack Engineer | Python & Django Specialist', skills: ['Python', 'Django', 'Flask', 'JavaScript', 'Docker', 'AWS', 'PostgreSQL'], experienceYears: 5, availability: 'Available immediately', location: 'New York, NY', profilePictureUrl: 'https://placehold.co/128x128.png/ADD8E6/000000?text=BB', summary: 'Results-oriented full-stack engineer with a strong background in Python and cloud technologies. Adept at developing robust backend systems and collaborating in agile environments.', imageHint: 'male engineer avatar' },
  { id: 'talent3', fullName: 'Carol Danvers', headline: 'Cloud & DevOps Engineer | AWS Certified', skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Jenkins', 'Linux', 'Python'], experienceYears: 8, availability: 'Not actively looking', location: 'San Francisco, CA', profilePictureUrl: 'https://placehold.co/128x128.png/FFD700/000000?text=CD', summary: 'Experienced DevOps engineer focused on automating infrastructure and streamlining deployment pipelines on AWS. Strong problem-solving skills and a passion for cloud-native solutions.', imageHint: 'professional woman avatar' },
  { id: 'talent4', fullName: 'David Copperfield', headline: 'UX/UI Designer | Mobile & Web Applications', skills: ['Figma', 'Sketch', 'Adobe XD', 'User Research', 'Prototyping', 'Interaction Design', 'HTML', 'CSS'], experienceYears: 4, availability: 'Open to opportunities', location: 'Remote (Europe)', profilePictureUrl: 'https://placehold.co/128x128.png/90EE90/000000?text=DC', summary: 'Creative UX/UI designer with a knack for crafting intuitive and visually appealing digital experiences. Proficient in all stages of the design process, from concept to high-fidelity prototypes.', imageHint: 'male designer avatar' },
  { id: 'talent5', fullName: 'Eve Moneypenny', headline: 'Data Scientist | Machine Learning Enthusiast', skills: ['Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Data Visualization', 'Statistics'], experienceYears: 6, availability: 'Available immediately', location: 'Austin, TX (Hybrid)', profilePictureUrl: 'https://placehold.co/128x128.png/E6E6FA/000000?text=EM', summary: 'Data scientist with 6 years of experience in developing machine learning models and deriving actionable insights from complex datasets. Strong analytical and communication skills.', imageHint: 'woman data scientist avatar' },
];

const PROFILES_PER_PAGE = 3;

export default function FindTalentPage() {
  const { currentUser, userRole, loading: authLoading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const [displayedProfiles, setDisplayedProfiles] = useState<TalentProfile[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true); // For data fetching simulation
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);
  const [allProfilesShown, setAllProfilesShown] = useState(false);
  const [currentFilters, setCurrentFilters] = useState<TalentSearchFiltersData | null>(null);
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      if (!currentUser) {
        toast({
          title: 'Access Denied',
          description: 'Please log in as an employer to view the talent pool.',
          variant: 'destructive',
        });
        router.push('/employers/auth');
        setAccessDenied(true);
      } else if (userRole !== 'employer') {
        toast({
          title: 'Access Restricted',
          description: 'This page is for employers only. Please log in with an employer account.',
          variant: 'destructive',
        });
        router.push('/'); // Or a more appropriate page for non-employers
        setAccessDenied(true);
      } else {
        // User is authenticated and is an employer
        setAccessDenied(false);
        // Proceed to load data if not already loaded
        if (displayedProfiles.length === 0) { // Only load initial data if not already present
          setIsLoadingData(true);
          setTimeout(() => {
            const initialFilteredProfiles = filterProfiles(allMockTalentProfiles, null);
            setDisplayedProfiles(initialFilteredProfiles.slice(0, PROFILES_PER_PAGE));
            setAllProfilesShown(initialFilteredProfiles.length <= PROFILES_PER_PAGE);
            setIsLoadingData(false);
          }, 500);
        } else {
            setIsLoadingData(false); // Data already loaded or being filtered
        }
      }
    }
  }, [currentUser, userRole, authLoading, router, toast, displayedProfiles.length]);


  const filterProfiles = (profiles: TalentProfile[], filters: TalentSearchFiltersData | null): TalentProfile[] => {
    if (!filters) return profiles;
    return profiles.filter(profile => {
      const keywordMatch = filters.keywords ?
        profile.fullName.toLowerCase().includes(filters.keywords.toLowerCase()) ||
        profile.headline.toLowerCase().includes(filters.keywords.toLowerCase()) ||
        profile.summary.toLowerCase().includes(filters.keywords.toLowerCase())
        : true;
      
      const skillsMatch = filters.skills ? 
        filters.skills.toLowerCase().split(/[\s,]+/).filter(s => s).every(skillTerm =>
          profile.skills.some(s => s.toLowerCase().includes(skillTerm))
        )
        : true;

      const locationMatch = filters.location ? profile.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
      const availabilityMatch = filters.availability ? profile.availability === filters.availability : true;
      
      const experienceMinMatch = profile.experienceYears >= filters.experienceMin;
      const experienceMaxMatch = filters.experienceMax === Infinity ? true : profile.experienceYears <= filters.experienceMax;

      return keywordMatch && skillsMatch && locationMatch && availabilityMatch && experienceMinMatch && experienceMaxMatch;
    });
  };
  

  const handleSearch = (filters: TalentSearchFiltersData) => {
    if (authLoading || !currentUser || userRole !== 'employer') return;
    setIsLoadingData(true);
    setCurrentFilters(filters);
    setTimeout(() => {
      const filtered = filterProfiles(allMockTalentProfiles, filters);
      setDisplayedProfiles(filtered.slice(0, PROFILES_PER_PAGE));
      setAllProfilesShown(filtered.length <= PROFILES_PER_PAGE);
      setIsLoadingData(false);
    }, 1000);
  };

  const loadMoreProfiles = () => {
    if (authLoading || !currentUser || userRole !== 'employer') return;
    setIsLoadMoreLoading(true);
    setTimeout(() => {
        const currentLength = displayedProfiles.length;
        const filteredTotal = filterProfiles(allMockTalentProfiles, currentFilters);
        const moreProfiles = filteredTotal.slice(currentLength, currentLength + PROFILES_PER_PAGE);
        setDisplayedProfiles(prev => [...prev, ...moreProfiles]);
        if (displayedProfiles.length + moreProfiles.length >= filteredTotal.length) {
            setAllProfilesShown(true);
        }
        setIsLoadMoreLoading(false);
    }, 500);
  };

  if (authLoading) {
    return (
      <div className="container mx-auto py-12 text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <p className="mt-4 text-muted-foreground text-lg">Verifying access...</p>
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
    <div className="container mx-auto py-8">
      <div className="text-center mb-10">
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <UsersRound className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight font-headline">Discover Top Tech Talent</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse profiles, filter by skills and experience, and connect with skilled professionals for your team.
        </p>
      </div>
      <TalentSearchFilters onSearch={handleSearch} isLoading={isLoadingData || isLoadMoreLoading} />

      {isLoadingData && (
        <div className="text-center py-12">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
          <p className="mt-4 text-muted-foreground text-lg">Searching for talent...</p>
        </div>
      )}

      {!isLoadingData && displayedProfiles.length === 0 && (
         <div className="text-center py-12 bg-card border rounded-xl shadow-sm">
            <Image src="https://placehold.co/200x150.png" alt="No results illustration" width={200} height={150} className="mx-auto mb-6 rounded-lg" data-ai-hint="empty user list"/>
            <h3 className="text-2xl font-semibold mb-2 font-headline">No Talent Found Matching Your Criteria</h3>
            <p className="text-muted-foreground max-w-md mx-auto">Try adjusting your search filters or broadening your keywords.</p>
            <Button variant="link" onClick={() => handleSearch({keywords: '', skills: '', location: '', availability: '', experienceMin: 0, experienceMax: Infinity } as TalentSearchFiltersData)} className="mt-4">
                Reset all filters
            </Button>
        </div>
      )}

      {!isLoadingData && displayedProfiles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProfiles.map(profile => (
            <TalentProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      )}

      {!isLoadingData && displayedProfiles.length > 0 && !allProfilesShown && (
        <div className="mt-12 text-center">
          <Button onClick={loadMoreProfiles} disabled={isLoadMoreLoading} size="lg" className="text-base py-3 px-6">
            {isLoadMoreLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
            Load More Profiles
          </Button>
        </div>
      )}
       {!isLoadingData && allProfilesShown && displayedProfiles.length > 0 && (
        <p className="mt-12 text-center text-muted-foreground">You've reached the end of the talent listings for this search.</p>
      )}
    </div>
  );
}
