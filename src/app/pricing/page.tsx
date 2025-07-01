
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Briefcase, Star, Zap } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Basic Job Post',
      price: 'Free',
      description: 'Standard listing for your job opening.',
      features: [
        'Standard visibility',
        'Appears in search results',
        'Applications managed on TekTunnel',
      ],
      cta: 'Post a Job',
      ctaLink: '/employers/post-job',
      icon: <Briefcase className="h-8 w-8 text-primary" />
    },
    {
      name: 'Featured Job Post',
      price: '$49',
      priceSuffix: '/ post',
      description: 'Enhanced visibility to attract more candidates.',
      features: [
        'Highlighted in search results',
        'Appears on homepage (simulated)',
        'Priority support (simulated)',
        'Email blast to relevant candidates (simulated)',
      ],
      cta: 'Make Job Featured',
      ctaLink: '/employers/post-job', // User would select on post-job page
      isPopular: true,
      icon: <Star className="h-8 w-8 text-yellow-500" />
    },
    {
      name: 'Employer Pro',
      price: '$199',
      priceSuffix: '/ month',
      description: 'Unlock all features for continuous hiring.',
      features: [
        'Unlimited job posts',
        'Unlimited featured job posts',
        'Advanced talent search filters',
        'Company branding page (simulated)',
        'Dedicated account manager (simulated)',
      ],
      cta: 'Coming Soon',
      ctaLink: '#',
      disabled: true,
      icon: <Zap className="h-8 w-8 text-accent" />
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight font-headline">TekTunnel Pricing</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that best suits your hiring needs. Simple, transparent pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {pricingTiers.map((tier) => (
          <Card key={tier.name} className={`flex flex-col shadow-lg rounded-xl ${tier.isPopular ? 'border-2 border-primary shadow-primary/20' : ''}`}>
            <CardHeader className="p-6 text-center">
              <div className="mx-auto mb-4 p-3 bg-muted rounded-full w-fit">
                {tier.icon}
              </div>
              <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
              <p className="text-3xl font-bold mt-2">{tier.price}
                {tier.priceSuffix && <span className="text-sm font-normal text-muted-foreground">{tier.priceSuffix}</span>}
              </p>
              <CardDescription className="mt-1 h-10">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <ul className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-6 bg-muted/20">
              <Button asChild size="lg" className="w-full text-base py-3" disabled={tier.disabled}>
                <Link href={tier.ctaLink}>{tier.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>All payments are processed securely (simulation). For enterprise solutions, please contact us.</p>
         <Button variant="link" asChild className="mt-2"><Link href="/contact">Contact Sales</Link></Button>
      </div>
    </div>
  );
}
