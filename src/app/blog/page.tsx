
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';
import { BlogPostCard, type BlogPost } from '@/components/blog/BlogPostCard';

const mockBlogPosts: BlogPost[] = [


         {

    slug: 'Latest-Tech-events-in-2025',
    title: "Latest Tech events and trends in 2025",
    excerpt: "Discover latest tech events in 2025. Explore upcoming global tech conferences, networking with tech professionals, and how to make the most of your event experience.",
    author: "Chris Lee, Tech Mentor",
    date: "May 05, 2025",
    imageUrl: '/images/Tech Events 2025 Highlights.png',
    imageHint: 'Tech Events',
    category: "Networking",
    tags: ["Cloud", "AI", "FinTech", "Web"]
  
  
  },
           {

    slug: 'Top-10-AI-Tools-Transforming-Tech-Careers-in-2025-And-How-to-Use-Them',
    title: "Top 10 AI Tools Transforming Tech Careers in 2025 (And How to Use Them)",
    excerpt: "AI isn’t replacing tech jobs - it’s redefining them. From coding copilots to automated resume builders, artificial intelligence is becoming the power tool every tech professional needs. This guide breaks down the top AI tools reshaping the future of work and how to make them your career advantage.",
    author: "Chris Lee, Tech Mentor",
    date: "May 05, 2025",
    imageUrl: '/images/artificial intelligence.png',
    imageHint: 'Tech Events',
    category: "Career Development",
    tags: ["Cloud", "AI", "FinTech", "Web"]
  
  
  },
           {

    slug: 'How-to-Build-a-Powerful-Tech-Portfolio-in-2025-With-6-Sites-to-Host-It',
    title: "How to Build a Powerful Tech Portfolio in 2025 (With 6 Sites to Host It)",
    excerpt: "Your resume says what you’ve done - your portfolio shows what you can do. In 2025’s ultra-competitive tech landscape, a personal portfolio isn’t optional - it’s your digital handshake. Whether you're a developer, data analyst, designer, or DevOps engineer, this guide breaks down why you need a tech portfolio, where to host it, and how to build one that gets you hired",
    author: "Chris Lee, Tech Mentor",
    date: "May 05, 2025",
    imageUrl: '/images/portfolio.png',
    imageHint: 'portfolio',
    category: "Career Development",
    tags: ["Cloud", "AI", "Web"]
  
  
  },
  {
    slug: 'mastering-remote-interviews',
    title: 'Mastering Remote Interviews: Tips for Tech Professionals',
    excerpt: 'Remote interviews are the new norm. Learn how to ace your next virtual interview with these expert tips and tricks for showcasing your skills effectively.',
    author: 'Jane Doe, HR Specialist',
    date: 'October 26, 2024',
    imageUrl: '/images/Mastering Remote Interviews 600x400.png',
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
    imageUrl: '/images/Top 10 In-Demand Tech Skills for 2025.png',
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
    imageUrl: '/images/Creating a Standout Developer Portfolio.png',
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
    imageUrl: '/images/Navigating Your First Tech Job.png',
    imageHint: 'desk computer learning',
    category: "Career Development",
    tags: ["First Job", "Tech Career", "Guidance", "Entry Level"],
  },

   {
    slug: 'Why-Talent-Communities-Are-the-Future-of-Hiring',
    title: "Why Talent Communities Are the Future of Hiring",
    excerpt: "In today's hyper-competitive job market, companies can't afford to play a reactive game anymore. Traditional recruiting-posting a job and hoping the right candidate shows up-is dead weight in a fast-moving economy. The winners? They're building Talent Communities.",
    author: "Chris Lee, Tech Mentor",
    date: "January 2, 2025",
    imageUrl: '/images/The Future of Hiring Trends.png',
    imageHint: 'Talent Communities',
    category: "Career Development",
    tags: ["Talent", "Hiring", "Communities", "Entry Level"],
  },


  {
    slug: 'Top-AI-Software-Tools-Transforming-Human-Resources',
    title: "🤖 Top AI & Software Tools Transforming Human Resources in 2025",
    excerpt: "HR has entered a new era - one where artificial intelligence and software automation are no longer just 'nice-to-haves' but essential to staying competitive, agile, and talent-focused",
    author: "John Young",
    date: "January 2, 2025",
    imageUrl: '/images/Top AI & Software Tools Transforming Human Resources.png',
    imageHint: 'AI & Software Tools Transforming Human Resources',
    category: "Career Development",
    tags: ["AI", "SOftware", "Human resources"],
  },

   {
    slug: 'Introduction-to-Data-Science',
    title: "📊 Introduction to Data Science: What It Is, Why It Matters, and How to Get Started",
    excerpt: "Whether you're a business leader trying to stay competitive or a young professional exploring new career paths, understanding the basics of data science is no longer optional-it's essential.",
    author: "John Young",
    date: "March 5, 2025",
    imageUrl: '/images/Introduction to Data Science Visuals.png',
    imageHint: 'Introduction to Data Science',
    category: "Career Development",
    tags: ["Data Science", "Python", "Machine Learning", "Visualization"],
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
