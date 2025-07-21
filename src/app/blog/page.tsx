
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';
import { BlogPostCard, type BlogPost } from '@/components/blog/BlogPostCard';
import { mockBlogPosts } from '@/lib/blog/data';


export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight">TekTunnel Blog</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Insights, tips, and trends for tech professionals and employers. Stay informed with TekTunnel.
        </p>
      </div>

      {mockBlogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post as BlogPost} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-card border rounded-xl shadow-sm">
          <Image 
            src="/images/vision.jpg" 
            alt="No blog posts illustration" 
            width={200} 
            height={150} 
            className="mx-auto mb-6 rounded-lg"
            data-ai-hint="empty document paper"
            />
          <h3 className="text-2xl font-semibold mb-2 font-headline">No Blog Posts Yet</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Check back soon for insightful articles and updates from the TekTunnel team!
          </p>
        </div>
      )}

      {mockBlogPosts.length > 6 && (
         <div className="mt-12 text-center">
            <Button variant="outline" size="lg">Load More Posts</Button>
        </div>
      )}
    </div>
  );
}

