
import Link from 'next/link';
import { TekTunnelLogo } from '@/components/icons/TekTunnelLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/95 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-2">
                 <TekTunnelLogo className="h-8 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-xs">Connecting talent with opportunity in the tech industry worldwide.</p>
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

    
