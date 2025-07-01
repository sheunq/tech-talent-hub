
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  tags: string[];
  content?: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
          data-ai-hint={post.imageHint}
        />
      </Link>
      <CardHeader className="p-5">
        <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
        <CardTitle className="font-headline text-xl leading-tight">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <div className="flex items-center space-x-3 text-xs text-muted-foreground pt-1">
          <div className="flex items-center">
            <UserCircle className="h-4 w-4 mr-1.5" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1.5" />
            <span>{post.date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0 flex-grow">
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="p-5 bg-muted/20">
        <Button asChild variant="link" className="p-0 h-auto text-primary font-semibold group">
          <Link href={`/blog/${post.slug}`}>
            Read More
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
