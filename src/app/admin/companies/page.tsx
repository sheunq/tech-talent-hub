
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import Image from "next/image";

export default function AdminCompaniesPage() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
            <Building2 className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-2xl">Company Management</CardTitle>
        </div>
        <CardDescription>View and manage company profiles and employer accounts.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Administrators can manage company profiles associated with employer accounts. 
          This includes viewing company details, verifying information, managing associated job posts, 
          and potentially approving or suspending company accounts based on platform policies.
        </p>
        <div className="border rounded-lg p-6 bg-muted/20 text-center">
            <Image src="/images/vision.jpg" alt="Company management placeholder" width={400} height={200} className="mx-auto mb-4 rounded-md" data-ai-hint="company profiles list"/>
            <p className="text-sm text-muted-foreground">Company list and management tools will appear here.</p>
        </div>
      </CardContent>
    </Card>
  );
}
