
'use client';

import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ApplicationButtonProps {
  jobId: string;
  applyUrl?: string;
}

export function ApplicationButton({ jobId, applyUrl }: ApplicationButtonProps) {
  // Use a default search link if no applyUrl is provided
  const finalApplyUrl = applyUrl || `https://www.google.com/search?q=Apply+for+job+ID+${jobId}`;

  return (
    <Button asChild size="lg" className="w-full sm:w-auto text-base py-3">
      <a href={finalApplyUrl} target="_blank" rel="noopener noreferrer">
        Apply Now <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </Button>
  );
}
