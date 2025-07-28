
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserCircle, Briefcase, MapPin, Star, ExternalLink, Settings2 } from 'lucide-react';

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
  imageHint?: string;
}

interface TalentProfileCardProps {
  profile: TalentProfile;
}

export function TalentProfileCard({ profile }: TalentProfileCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-200 flex flex-col h-full rounded-lg overflow-hidden border">
      <CardHeader className="p-5 bg-card">
        <div className="flex items-start space-x-4">
          <Image
            src={profile.profilePictureUrl || 'https://placehold.co/64x64.png'}
            alt={`${profile.fullName}'s profile picture`}
            width={64}
            height={64}
            className="rounded-full border-2 border-primary object-cover"
            data-ai-hint={profile.imageHint || "profile avatar person"}
          />
          <div className="flex-1">
            <CardTitle className="font-headline text-lg leading-tight mb-0.5 hover:text-primary transition-colors">
              <Link href={`/employers/find-talent/${profile.id}`}>{profile.fullName}</Link>
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{profile.headline}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-5 space-y-3 text-sm text-muted-foreground flex-grow">
        <div className="flex items-center">
          <Briefcase className="h-4 w-4 mr-2 text-primary shrink-0" />
          <span>{profile.experienceYears} years of experience</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-2 text-primary shrink-0" />
          <span>{profile.location}</span>
        </div>
        <div className="flex items-center">
          <Star className="h-4 w-4 mr-2 text-primary shrink-0" />
          <span className={profile.availability === 'Available immediately' ? 'text-green-600 font-medium' : ''}>
            {profile.availability}
          </span>
        </div>
        
        {profile.skills && profile.skills.length > 0 && (
            <div className="pt-1">
                <h4 className="font-medium text-xs text-foreground/70 mb-1.5 flex items-center"><Settings2 className="h-3.5 w-3.5 mr-1.5"/> Key Skills:</h4>
                <div className="flex flex-wrap gap-1.5">
                    {profile.skills.slice(0, 5).map(skill => <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>)}
                    {profile.skills.length > 5 && <Badge variant="outline" className="text-xs">+{profile.skills.length - 5} more</Badge>}
                </div>
            </div>
        )}
         <p className="pt-2 line-clamp-3 text-foreground/80">{profile.summary}</p>
      </CardContent>
      <CardFooter className="p-5 bg-muted/30 flex justify-between items-center">
        <p className="text-xs text-muted-foreground">Profile ID: {profile.id}</p>
        <Button asChild size="sm" variant="default">
          <Link href={`/employers/find-talent/${profile.id}`}>View Full Profile <ExternalLink className="ml-1.5 h-4 w-4" /></Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
