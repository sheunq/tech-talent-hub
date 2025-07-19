
import { MetadataRoute } from 'next';
import { getAllJobs } from '@/services/jobDbService';
import { mockBlogPosts } from '@/lib/blog/data';

const URL = 'https://tektunnel.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const jobs = await getAllJobs();
  const jobEntries: MetadataRoute.Sitemap = jobs
    .filter(job => job.status === 'approved')
    .map(({ id, submittedDate }) => ({
      url: `${URL}/jobs/${id}`,
      lastModified: submittedDate ? new Date(submittedDate) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

  const postEntries: MetadataRoute.Sitemap = mockBlogPosts.map(({ slug, date }) => ({
    url: `${URL}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
  
  const staticRoutes = [
    '/',
    '/jobs/search',
    '/opportunities',
    '/reviews',
    '/blog',
    '/about',
    '/contact',
    '/pricing',
    '/terms-of-service',
    '/privacy-policy',
    '/job-seekers/auth',
    '/employers/auth',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'daily' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));

  return [
    ...staticEntries,
    ...jobEntries,
    ...postEntries,
  ];
}

