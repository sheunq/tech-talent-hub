
'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UsersRound, X, Search, Filter } from 'lucide-react';

export interface TalentSearchFiltersData {
  keywords: string;
  skills: string; // Comma-separated or space-separated string of skills
  location: string;
  experienceMin: number;
  experienceMax: number;
  availability: string;
}

interface TalentSearchFiltersProps {
  onSearch: (filters: TalentSearchFiltersData) => void;
  initialFilters?: Partial<TalentSearchFiltersData>;
  isLoading?: boolean;
}

const availabilityOptions = ['Any Availability', 'Open to opportunities', 'Not actively looking', 'Available immediately'];
const MAX_EXPERIENCE = 30; // Max years of experience for slider

export function TalentSearchFilters({ onSearch, initialFilters = {}, isLoading = false }: TalentSearchFiltersProps) {
  const [keywords, setKeywords] = useState(initialFilters.keywords || '');
  const [skills, setSkills] = useState(initialFilters.skills || '');
  const [location, setLocation] = useState(initialFilters.location || '');
  const [experienceRange, setExperienceRange] = useState<[number, number]>([initialFilters.experienceMin || 0, initialFilters.experienceMax || MAX_EXPERIENCE]);
  const [availability, setAvailability] = useState(initialFilters.availability || 'Any Availability');
  
  useEffect(() => {
    setExperienceRange([initialFilters.experienceMin || 0, initialFilters.experienceMax || MAX_EXPERIENCE]);
  }, [initialFilters.experienceMin, initialFilters.experienceMax]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSearch({
      keywords,
      skills,
      location,
      availability: availability === 'Any Availability' ? '' : availability,
      experienceMin: experienceRange[0],
      experienceMax: experienceRange[1] === MAX_EXPERIENCE && experienceRange[0] > 0 ? Infinity : experienceRange[1],
    });
  };

  const clearFilters = () => {
    setKeywords('');
    setSkills('');
    setLocation('');
    setAvailability('Any Availability');
    setExperienceRange([0, MAX_EXPERIENCE]);
    onSearch({
      keywords: '',
      skills: '',
      location: '',
      availability: '',
      experienceMin: 0,
      experienceMax: MAX_EXPERIENCE,
    });
  };

  return (
    <Card className="mb-8 shadow-lg rounded-xl">
      <CardHeader className="pb-4">
        <CardTitle className="font-headline text-2xl flex items-center">
          <Filter className="mr-2 h-6 w-6 text-primary" />
          Filter Talent Profiles
        </CardTitle>
        <CardDescription>Refine your search to find ideal candidates.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="keywords">Keywords</Label>
              <Input
                id="keywords"
                type="text"
                placeholder="Name, headline (e.g., 'Software Engineer')"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="text-base"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="skills">Skills</Label>
              <Input
                id="skills"
                type="text"
                placeholder="e.g., React, Node.js, Python"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="text-base"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                placeholder="City, country, or remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-base"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="availability">Availability</Label>
              <Select value={availability} onValueChange={setAvailability}>
                <SelectTrigger id="availability" className="text-base">
                  <SelectValue placeholder="Select availability" />
                </SelectTrigger>
                <SelectContent>
                  {availabilityOptions.map(option => <SelectItem key={option} value={option} className="text-base">{option}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-1.5">
            <Label className="block">Years of Experience</Label>
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>{experienceRange[0]} years</span>
              <span>{experienceRange[1]}{experienceRange[1] === MAX_EXPERIENCE ? '+' : ''} years</span>
            </div>
            <Slider
              value={experienceRange}
              min={0}
              max={MAX_EXPERIENCE}
              step={1}
              onValueChange={(value) => setExperienceRange(value as [number,number])}
              className="text-base"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
            <Button variant="ghost" onClick={clearFilters} className="w-full sm:w-auto text-base" disabled={isLoading}>
              <X className="mr-2 h-4 w-4" /> Clear Filters
            </Button>
            <Button type="submit" className="w-full sm:w-auto text-base" disabled={isLoading}>
              <Search className="mr-2 h-4 w-4" /> Search Talent
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
