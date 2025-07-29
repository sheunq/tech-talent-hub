
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart3, Users, Building2, ClipboardCheck, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getDashboardStats } from "@/services/adminDashboardService";

interface DashboardStats {
  totalUsers: number;
  totalCompanies: number;
  pendingJobs: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      setIsLoading(true);
      try {
        const dashboardStats = await getDashboardStats();
        setStats(dashboardStats);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
        // Handle error, maybe show a toast
      } finally {
        setIsLoading(false);
      }
    }
    fetchStats();
  }, []);

  const StatCard = ({ title, value, icon, description, loading }: { title: string; value: number | string; icon: React.ReactNode, description: string, loading: boolean }) => (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        {loading ? (
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        ) : (
          <>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">{description}</p>
          </>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg shadow">
        <h2 className="text-3xl font-bold font-headline mb-2">Admin Dashboard</h2>
        <p className="text-muted-foreground">Welcome back, Admin! Here's an overview of TekTunnel.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Users" 
          value={stats?.totalUsers ?? '...'} 
          icon={<Users className="h-5 w-5 text-muted-foreground" />} 
          description="All registered users"
          loading={isLoading}
        />
        <StatCard 
          title="Total Companies" 
          value={stats?.totalCompanies ?? '...'} 
          icon={<Building2 className="h-5 w-5 text-muted-foreground" />} 
          description="Users with employer role"
          loading={isLoading}
        />
        <StatCard 
          title="Pending Job Posts" 
          value={stats?.pendingJobs ?? '...'} 
          icon={<ClipboardCheck className="h-5 w-5 text-muted-foreground" />} 
          description="Require approval"
          loading={isLoading}
        />
        <StatCard 
          title="Site Revenue (Monthly)" 
          value="$5,780" 
          icon={<BarChart3 className="h-5 w-5 text-muted-foreground" />} 
          description="+2.5% from last month (simulated)"
          loading={false}
        />
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="font-headline">Quick Actions</CardTitle>
          <CardDescription>Placeholder for common admin tasks.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Future quick action buttons or links will go here.</p>
           <Image src="images/vision.jpg" alt="Placeholder quick actions" width={600} height={200} className="mt-4 rounded-md" data-ai-hint="dashboard graph chart"/>
        </CardContent>
      </Card>
    </div>
  );
}
