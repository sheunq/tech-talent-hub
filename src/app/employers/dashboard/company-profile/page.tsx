
'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Building2, Save, Loader2 } from 'lucide-react';

const companyProfileSchema = z.object({
  companyName: z.string().min(2, { message: 'Company name must be at least 2 characters.' }),
  companyDescription: z.string().min(20, { message: 'Description must be at least 20 characters.' }).max(500, { message: 'Description cannot exceed 500 characters.' }),
  websiteUrl: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
  industry: z.string().optional(),
  logoUrl: z.string().url({ message: 'Please enter a valid URL for the logo.' }).optional().or(z.literal('')),
});

type CompanyProfileFormValues = z.infer<typeof companyProfileSchema>;

const industries = [
  "Technology", "Healthcare", "Finance", "Education", "Manufacturing", "Retail", "Real Estate", "Other"
];

// Mock current company data (in a real app, this would be fetched)
const mockCompanyData: CompanyProfileFormValues = {
    companyName: "Innovatech Solutions Ltd.",
    companyDescription: "A leading provider of cutting-edge software solutions, specializing in AI and cloud computing. We foster a collaborative environment and are passionate about innovation.",
    websiteUrl: "https://www.innovatech.example.com",
    industry: "Technology",
    logoUrl: "https://placehold.co/150x150.png?text=Logo",
};


export default function CompanyProfilePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CompanyProfileFormValues>({
    resolver: zodResolver(companyProfileSchema),
    defaultValues: mockCompanyData // Pre-fill with mock data
  });

  function onSubmit(data: CompanyProfileFormValues) {
    setIsSubmitting(true);
    console.log('Company Profile Data:', data);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Profile Updated!',
        description: 'Your company profile has been successfully updated (simulation).',
      });
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href="/employers/dashboard">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Link>
      </Button>

      <Card className="shadow-lg rounded-xl max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-2xl">Company Profile</CardTitle>
          </div>
          <CardDescription>Manage your company's information, branding, and employer details.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company LLC" {...field} className="text-base"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Company Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your company..."
                        {...field}
                        rows={5}
                        className="text-base"
                      />
                    </FormControl>
                     <FormDescription>Max 500 characters.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="websiteUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Website URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourcompany.com" {...field} className="text-base"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="logoUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Logo URL (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourcompany.com/logo.png" {...field} className="text-base"/>
                    </FormControl>
                    <FormDescription>Provide a direct link to your company logo image.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Industry</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="text-base">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {industries.map(industry => (
                          <SelectItem key={industry} value={industry} className="text-base">{industry}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full text-base py-3" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                {isSubmitting ? 'Saving...' : <><Save className="mr-2 h-4 w-4" /> Save Changes</>}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

function useState(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.');
}
