
'use client';

import Link from 'next/link';
import { TekTunnelLogo } from '@/components/icons/TekTunnelLogo';
import { Linkedin, Twitter, Mail, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState, type FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubscription = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast({ title: "Email required", description: "Please enter an email address.", variant: "destructive" });
      return;
    }
    setIsSubscribing(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'An unexpected error occurred.');
      }
      
      toast({
        title: "Subscribed!",
        description: result.message || "You're now on our mailing list.",
      });
      setEmail('');

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Could not subscribe. Please try again.";
      toast({
        title: "Subscription Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="border-t border-border/40 bg-background/95 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          <div className="md:col-span-2 space-y-4">
            <div>
                <Link href="/" className="inline-block mb-2">
                    <TekTunnelLogo className="h-8 w-auto" />
                </Link>
                <p className="text-muted-foreground max-w-xs">Connecting talent with opportunity in the tech industry worldwide.</p>
            </div>
            <div>
                <h4 className="font-semibold mb-2 text-foreground/90">Follow Us</h4>
                <div className="flex space-x-2">
                    <Button variant="outline" size="icon" asChild>
                        <a href="https://x.com/TekTunnel" target="_blank" rel="noopener noreferrer" aria-label="TekTunnel on X">
                            <Twitter className="h-4 w-4" />
                        </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <a href="https://www.linkedin.com/company/tektunnel" target="_blank" rel="noopener noreferrer" aria-label="TekTunnel on LinkedIn">
                            <Linkedin className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground/90">Candidates</h4>
            <ul className="space-y-2">
              <li><Link href="/jobs/search" className="text-muted-foreground hover:text-primary transition-colors">Find Jobs</Link></li>
              <li><Link href="/job-seekers/auth" className="text-muted-foreground hover:text-primary transition-colors">Create Profile</Link></li>
              <li><Link href="/ai-match" className="text-muted-foreground hover:text-primary transition-colors">AI Job Matching</Link></li>
              <li><Link href="/job-alerts" className="text-muted-foreground hover:text-primary transition-colors">Job Alerts</Link></li>
              <li><Link href="/opportunities" className="text-muted-foreground hover:text-primary transition-colors">Tech Opportunities</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground/90">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/employers/post-job" className="text-muted-foreground hover:text-primary transition-colors">Post a Job</Link></li>
              <li><Link href="/employers/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Employer Dashboard</Link></li>
              <li><Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">Company Reviews</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
           <div className="space-y-4">
            <h4 className="font-semibold text-foreground/90">Stay Updated</h4>
            <p className="text-muted-foreground">Subscribe to our newsletter for the latest tech jobs and career insights.</p>
            <form className="flex space-x-2" onSubmit={handleSubscription}>
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-muted/50 text-base" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribing}
                required 
              />
              <Button type="submit" variant="outline" size="icon" aria-label="Subscribe to newsletter" disabled={isSubscribing}>
                {isSubscribing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} TekTunnel. All rights reserved.</p>
          <div className="space-x-3 mt-1">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
             <span>&bull;</span>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
