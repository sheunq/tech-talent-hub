
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import Image from "next/image";

export default function AdminReportsPage() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-2xl">Reports & Analytics</CardTitle>
        </div>
        <CardDescription>View key metrics, user activity, and revenue reports.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          This section will provide administrators with dashboards and reports on various aspects of the platform. 
          Key metrics might include user registrations, job posting trends, application rates, revenue from subscriptions and paid listings, 
          and overall site traffic. Charts and data tables will be used for visualization.
        </p>
        <div className="border rounded-lg p-6 bg-muted/20 text-center">
            <Image src="/images/vision.jpg" alt="Reports placeholder" width={400} height={200} className="mx-auto mb-4 rounded-md" data-ai-hint="analytics dashboard charts"/>
            <p className="text-sm text-muted-foreground">Analytics dashboards and reporting tools will be implemented here.</p>
        </div>
      </CardContent>
    </Card>
  );
}
