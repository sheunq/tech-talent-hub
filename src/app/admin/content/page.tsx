
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import Image from "next/image";

export default function AdminContentPage() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
            <FileText className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-2xl">Content Management</CardTitle>
        </div>
        <CardDescription>Manage site content such as blog posts, About Us page, Terms of Service, etc.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Administrators will use this section to create, edit, and publish content for various parts of the site. 
          This may include a simple WYSIWYG editor or Markdown support for pages like the blog, About Us, 
          Privacy Policy, and Terms of Service.
        </p>
        <div className="border rounded-lg p-6 bg-muted/20 text-center">
            <Image src="/images/vision.jpg" alt="Content management placeholder" width={400} height={200} className="mx-auto mb-4 rounded-md" data-ai-hint="text editor interface"/>
            <p className="text-sm text-muted-foreground">Content editing tools and page list will be available here.</p>
        </div>
      </CardContent>
    </Card>
  );
}
