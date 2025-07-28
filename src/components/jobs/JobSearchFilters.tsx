
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter, X, Search } from 'lucide-react';

export interface SearchFilters {
  keywords: string;
  location: string;
  jobType: string;
  category: string;
  salaryMin: number;
  salaryMax: number;
}

interface JobSearchFiltersProps {
  onSearch: (filters: SearchFilters) => void;
  initialFilters?: Partial<SearchFilters>;
  isLoading?: boolean;
}

const jobTypes = ['Any Type', 'Full-time', 'Part-time', 'Contract', 'Internship', 'Hybrid', 'Remote'];
const categories = ['Any Category', 'Software Engineering', 'Data Science & Analytics', 'Product Management', 'UX/UI Design', 'DevOps & Site Reliability', 'Cybersecurity', 'IT Support & Infrastructure', 'AI & Machine Learning', 'Cloud Computing', 'Mobile Development', 'Web Development', 'QA & Testing', 'Marketing', 'Sales', 'Operations', 'Human Resources', 'Finance & Accounting', 'Other'];
const MAX_SALARY = 250000;


export function JobSearchFilters({ onSearch, initialFilters = {}, isLoading = false }: JobSearchFiltersProps) {
  const [keywords, setKeywords] = useState(initialFilters.keywords || '');
  const [location, setLocation] = useState(initialFilters.location || '');
  const [jobType, setJobType] = useState(initialFilters.jobType || 'Any Type');
  const [category, setCategory] = useState(initialFilters.category || 'Any Category');
  const [salaryRange, setSalaryRange] = useState<[number, number]>([initialFilters.salaryMin || 0, MAX_SALARY]);
  

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSearch({
      keywords,
      location,
      jobType: jobType === 'Any Type' ? '' : jobType,
      category: category === 'Any Category' ? '' : category,
      salaryMin: salaryRange[0],
      salaryMax: salaryRange[1], 
    });
  };

  const clearFilters = () => {
    setKeywords('');
    setLocation('');
    setJobType('Any Type');
    setCategory('Any Category');
    setSalaryRange([0, MAX_SALARY]);
    // Trigger search with cleared filters
    onSearch({
      keywords: '',
      location: '',
      jobType: '',
      category: '',
      salaryMin: 0,
      salaryMax: MAX_SALARY, 
    });
  };

  return (
    <Card className="mb-8 shadow-lg rounded-xl">
      <CardHeader className="pb-4">
        <CardTitle className="font-headline text-2xl flex items-center">
          <Filter className="mr-2 h-6 w-6 text-primary" />
          Filter Job Listings
        </CardTitle>
        <CardDescription>Refine your search to find the perfect job.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="keywords">Keywords</Label>
            <Input
              id="keywords"
              type="text"
              placeholder="Job title, skills, company"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="text-base"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              type="text"
              placeholder="City, state, or remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-base"
              disabled={isLoading}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="jobType">Job Type</Label>
            <Select value={jobType} onValueChange={setJobType} disabled={isLoading}>
              <SelectTrigger id="jobType" className="text-base">
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                {jobTypes.map(type => <SelectItem key={type} value={type} className="text-base">{type}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory} disabled={isLoading}>
              <SelectTrigger id="category" className="text-base">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => <SelectItem key={cat} value={cat} className="text-base">{cat}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-1.5">
          <Label className="block">Salary Range (Annual)</Label>
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>${salaryRange[0].toLocaleString()}</span>
            <span>${salaryRange[1].toLocaleString()}{salaryRange[1] === MAX_SALARY ? '+' : ''}</span>
          </div>
          <Slider
            value={[salaryRange[0]]}
            min={0}
            max={MAX_SALARY}
            step={5000}
            onValueChange={(value) => setSalaryRange([value[0], MAX_SALARY])}
            className="text-base"
            disabled={isLoading}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
          <Button variant="ghost" type="button" onClick={clearFilters} className="w-full sm:w-auto text-base" disabled={isLoading}>
            <X className="mr-2 h-4 w-4" /> Clear Filters
          </Button>
          <Button type="submit" className="w-full sm:w-auto text-base" disabled={isLoading}>
            <Search className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </div>
        </form>
      </CardContent>
    </Card>
  );
}
