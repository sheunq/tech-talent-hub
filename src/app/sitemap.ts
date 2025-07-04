
import { MetadataRoute } from 'next'

// In a real app, this would be your production domain from environment variables
const URL = 'https://tektunnel-app.web.app'

export default function sitemap(): MetadataRoute.Sitemap {
  // For dynamic routes (like jobs or blog posts), you would fetch the data
  // from your database and map over it to create entries.
  // Example for jobs:
  // const jobs = await getAllJobsFromDb();
  // const jobEntries = jobs.map(({ id, submittedDate }) => ({
  //   url: `${URL}/jobs/${id}`,
  //   lastModified: new Date(submittedDate),
  // }));
  //
  // Example for blog posts:
  // const posts = await getBlogPostsFromDb();
  // const postEntries = posts.map(({ slug, lastModified }) => ({
  //   url: `${URL}/blog/${slug}`,
  //   lastModified: new Date(lastModified),
  // }));
  
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
    '/privacy-policy'
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'daily' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));

  return [
    ...staticEntries,
    // ...jobEntries, // Add dynamic entries here when ready
    // ...postEntries,
  ]
}
