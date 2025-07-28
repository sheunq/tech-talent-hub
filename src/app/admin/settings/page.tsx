
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";
import Image from "next/image";

export default function AdminSettingsPage() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
            <Settings className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-2xl">Admin Settings</CardTitle>
        </div>
        <CardDescription>Configure site-wide settings, monetization options, and integrations.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          This area will house various administrative settings for the platform. 
          Future configurations for monetization (e.g., subscription plan details, pricing for featured listings, AdSense IDs), 
          email notification templates, API keys for third-party services, and other global parameters will be managed here.
        </p>
        <div className="border rounded-lg p-6 bg-muted/20 text-center">
            <Image src="https://placehold.co/400x200.png" alt="Settings placeholder" width={400} height={200} className="mx-auto mb-4 rounded-md" data-ai-hint="settings form interface"/>
            <p className="text-sm text-muted-foreground">Configuration forms and options will be available here.</p>
        </div>
      </CardContent>
    </Card>
  );
}
