
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';
import { BlogPostCard, type BlogPost } from '@/components/blog/BlogPostCard';

const mockBlogPosts: BlogPost[] = [
  {
    slug: 'mastering-remote-interviews',
    title: 'Mastering Remote Interviews: Tips for Tech Professionals',
    excerpt: 'Remote interviews are the new norm. Learn how to ace your next virtual interview with these expert tips and tricks for showcasing your skills effectively.',
    author: 'Jane Doe, HR Specialist',
    date: 'October 26, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'video call interview',
    category: 'Career Advice',
    tags: ['Interviews', 'Remote Work', 'Job Seeking'],
  }
  ,
  {
    slug: 'top-10-in-demand-tech-skills-2025',
    title: 'Top 10 In-Demand Tech Skills for 2025',
    excerpt: 'Stay ahead of the curve. Discover the most sought-after technology skills in the job market for the upcoming year and how to develop them.',
    author: 'John Smith, Tech Analyst',
    date: 'October 20, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'futuristic technology interface',
    category: 'Industry Trends',
    tags: ['Tech Skills', 'Future of Work', 'AI', 'Cloud'],
  },
  {
    slug: 'building-a-killer-developer-portfolio',
    title: 'Building a Killer Developer Portfolio That Gets You Hired',
    excerpt: 'Your portfolio is your sales pitch. Learn how to create an impressive developer portfolio that highlights your projects and abilities to potential employers.',
    author: 'Alice Brown, Senior Developer',
    date: 'October 15, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio website design',
    category: 'Development',
    tags: ['Portfolio', 'Web Development', 'Career'],
  },
  {
    slug: 'navigating-first-tech-job',
    title: "Navigating Your First Tech Job: A Beginner's Guide",
    excerpt: "Landing your first job in the tech industry can be exciting and daunting. This guide provides essential tips for new graduates and career changers to succeed.",
    author: "Chris Lee, Tech Mentor",
    date: "October 29, 2024",
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'desk computer learning',
    category: "Career Development",
    tags: ["First Job", "Tech Career", "Guidance", "Entry Level"],
  },
];

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
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-card border rounded-xl shadow-sm">
          <Image 
            src="https://placehold.co/200x150.png" 
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

      {/* Placeholder for pagination if many posts */}
      {mockBlogPosts.length > 3 && (
         <div className="mt-12 text-center">
            <Button variant="outline" size="lg">Load More Posts</Button>
        </div>
      )}
    </div>
  );
}
