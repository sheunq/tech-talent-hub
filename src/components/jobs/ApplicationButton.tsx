
'use client';

import { Button } from '@/components/ui/button';
import { ExternalLink, Send } from 'lucide-react';
import Link from 'next/link';

interface ApplicationButtonProps {
  jobId: string;
  applyUrl?: string;
}

export function ApplicationButton({ jobId, applyUrl }: ApplicationButtonProps) {
  // If a specific applyUrl is provided, link to it externally.
  if (applyUrl) {
    return (
      <Button asChild size="lg" className="w-full sm:w-auto text-base py-3">
        <a href={applyUrl} target="_blank" rel="noopener noreferrer">
          Apply on Company Site <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    );
  }

  // Otherwise, link to the internal application form.
  return (
    <Button asChild size="lg" className="w-full sm:w-auto text-base py-3">
      <Link href={`/jobs/${jobId}/apply`}>
        Apply Now <Send className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  );
}
