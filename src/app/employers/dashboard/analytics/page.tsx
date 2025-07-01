
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowLeft, BarChart3, Briefcase, Users, Eye, TrendingUp } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { useState, useEffect } from 'react';

// Mock data for analytics
const mockStats = {
  activeJobs: 12,
  totalApplications: 178,
  featuredPosts: 3,
  avgViewsPerJob: 256,
};

const mockChartData = [
  { name: 'Software Engineer', applications: 45, views: 350 },
  { name: 'UX Designer', applications: 30, views: 280 },
  { name: 'Product Manager', applications: 22, views: 210 },
  { name: 'Data Analyst', applications: 35, views: 300 },
  { name: 'DevOps Engineer', applications: 18, views: 180 },
];

export default function EmployerAnalyticsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures charts only render on the client to avoid hydration issues
  }, []);

  const chartConfig = {
    applications: {
      label: "Applications",
      color: "hsl(var(--primary))",
    },
    views: {
      label: "Views",
      color: "hsl(var(--accent))",
    },
  } satisfies import("@/components/ui/chart").ChartConfig;


  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href="/employers/dashboard">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Link>
      </Button>

      <Card className="shadow-lg rounded-xl">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-2xl">Hiring Analytics</CardTitle>
          </div>
          <CardDescription>Track the performance of your job postings and hiring activities (simulated data).</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.activeJobs}</div>
                <p className="text-xs text-muted-foreground">+2 from last week</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.totalApplications}</div>
                <p className="text-xs text-muted-foreground">+15 this month</p>
              </CardContent>
            </Card>
             <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Views / Job</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.avgViewsPerJob}</div>
                 <p className="text-xs text-muted-foreground">Across all active posts</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Featured Posts</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.featuredPosts}</div>
                 <p className="text-xs text-muted-foreground">Currently active</p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="font-headline text-lg">Applications & Views per Job</CardTitle>
              <CardDescription>Overview of top performing jobs (simulated)</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              {isClient && (
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockChartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
                      <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} interval={0} angle={-35} textAnchor="end" height={60} />
                      <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Bar dataKey="applications" fill="var(--color-applications)" radius={4} />
                      <Bar dataKey="views" fill="var(--color-views)" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              )}
              {!isClient && <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">Loading chart...</div>}
            </CardContent>
             <CardFooter>
                <p className="text-xs text-muted-foreground">Note: This is illustrative data for demonstration purposes.</p>
            </CardFooter>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
