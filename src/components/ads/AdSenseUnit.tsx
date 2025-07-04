
'use client';

import { useEffect } from 'react';

interface AdSenseUnitProps {
  adClient: string;
  adSlot: string;
  adFormat?: string;
  adLayoutKey?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AdSenseUnit({
  adClient,
  adSlot,
  adFormat = 'fluid', // In-feed ads often use 'fluid'
  adLayoutKey,
  className = '',
  style = { display: 'block' },
}: AdSenseUnitProps) {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err: any) {
      // This is a known issue in React where a component re-render can cause
      // the script to try and push an ad to a slot that's already been filled.
      // We can safely ignore this specific error message.
      if (err.message && !err.message.includes("already have ads in them")) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout-key={adLayoutKey}
      ></ins>
    </div>
  );
}
