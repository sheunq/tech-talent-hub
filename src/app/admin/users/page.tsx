
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import Image from "next/image";

export default function AdminUsersPage() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
            <Users className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-2xl">User Management</CardTitle>
        </div>
        <CardDescription>View, manage, approve, or suspend user accounts.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          This section will allow administrators to manage all job seeker and employer accounts. 
          Functionality will include searching, filtering, viewing profiles, changing account status (active, suspended), 
          and potentially resetting passwords or managing roles.
        </p>
        <div className="border rounded-lg p-6 bg-muted/20 text-center">
            <Image src="/images/vision.jpg" alt="User management placeholder" width={400} height={200} className="mx-auto mb-4 rounded-md" data-ai-hint="user list table"/>
            <p className="text-sm text-muted-foreground">User table and management tools will be implemented here.</p>
        </div>
      </CardContent>
    </Card>
  );
}
