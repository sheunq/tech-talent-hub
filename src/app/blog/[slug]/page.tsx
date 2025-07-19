
'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import { useParams } from 'next/navigation';
import { mockBlogPosts } from '@/lib/blog/data';

export default function BlogSlugPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = mockBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, we couldn't find the blog post you were looking for.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <article className="bg-card p-6 sm:p-8 md:p-10 rounded-xl shadow-xl">
        <header className="mb-8">
          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
          <Badge variant="secondary" className="mb-2">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <UserCircle className="h-5 w-5 mr-1.5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="h-5 w-5 mr-1.5" />
              <span>{post.date}</span>
            </div>
          </div>
        </header>

        <Image
          src={post.imageUrl}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-lg mb-8 shadow-md"
          data-ai-hint={post.imageHint}
        />

        <div 
          className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90 
            prose-headings:font-headline prose-headings:text-foreground prose-headings:font-semibold
            prose-p:leading-relaxed prose-p:mb-4
            prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-1 prose-ul:mb-4
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-1 prose-ol:mb-4
            prose-strong:font-semibold prose-strong:text-foreground
            prose-a:text-primary hover:prose-a:underline
            prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:mt-6 prose-h3:mb-3"
          dangerouslySetInnerHTML={{ __html: post.content || '<p>No content available.</p>' }} />

        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Tag className="h-5 w-5 mr-2 text-primary" /> Tags:
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

// In a real app, you would use generateStaticParams to pre-render blog posts
// export async function generateStaticParams() {
//   // Fetch all blog slugs
//   return mockBlogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

