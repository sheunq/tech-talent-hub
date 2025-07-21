
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart3, Users, Building2, ClipboardCheck } from "lucide-react";
import Image from "next/image";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg shadow">
        <h2 className="text-3xl font-bold font-headline mb-2">Admin Dashboard</h2>
        <p className="text-muted-foreground">Welcome back, Admin! Here's an overview of TekTunnel.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+10% from last month (simulated)</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Companies</CardTitle>
            <Building2 className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56</div>
            <p className="text-xs text-muted-foreground">+5 new this week (simulated)</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Job Posts</CardTitle>
            <ClipboardCheck className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Require approval (simulated)</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Site Revenue (Monthly)</CardTitle>
            <BarChart3 className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,780</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month (simulated)</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="font-headline">Quick Actions</CardTitle>
          <CardDescription>Placeholder for common admin tasks.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Future quick action buttons or links will go here.</p>
           <Image src="/images/vision.jpg" alt="Placeholder quick actions" width={600} height={200} className="mt-4 rounded-md" data-ai-hint="dashboard graph chart"/>
        </CardContent>
      </Card>
    </div>
  );
}
