
import type { BackendStoredJob } from '@/lib/schemas/job';
import type { Job } from '@/components/jobs/JobCard';

/**
 * Extracts common tech keywords from a string of text.
 * @param text The text to parse (e.g., job description).
 * @returns An array of found tags.
 */
export const extractTagsFromText = (text: string): string[] => {
    const keywords = ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Node.js', 'UI/UX Design', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Jest', 'Webpack', 'Python', 'Django', 'Flask', 'Docker', 'AWS', 'GCP', 'Azure', 'PostgreSQL', 'REST APIs', 'Celery', 'Kubernetes', 'Terraform', 'CI/CD', 'Jenkins', 'Linux', 'Ansible', 'Docker Swarm', 'Prometheus', 'Grafana', 'Figma', 'Sketch', 'Adobe XD', 'SQL', 'R', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Spark', 'Go', 'Security+', 'CEH', 'SIEM', 'React Native'];
    const foundTags = new Set<string>();
    
    keywords.forEach(keyword => {
        const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'gi');
        if (regex.test(text)) {
            foundTags.add(keyword);
        }
    });
    
    return Array.from(foundTags).slice(0, 5); // Limit to 5 tags for cleanliness
};


/**
 * Extracts salary information from text using regular expressions.
 * @param text The text to parse (e.g., job description).
 * @returns A formatted salary string if found, otherwise undefined.
 */
export const extractSalaryFromText = (text: string): string | undefined => {
  // Regex to find patterns like $120k, $100,000 - $150,000, 150k-180k
  const salaryRegex = /\$?(\d{1,3}(?:,?\d{3})*k?)(?:\s?(?:to|-)\s?\$?(\d{1,3}(?:,?\d{3})*k?))?/i;
  const match = text.match(salaryRegex);

  if (match) {
    const min = match[1];
    const max = match[2];
    
    // Helper to format the matched parts
    const formatPart = (part: string) => {
        let value = part.toLowerCase();
        if (!value.startsWith('$')) {
            value = '$' + value;
        }
        if (value.endsWith('k')) {
            // No change needed for 'k' format
        } else if (parseInt(value.replace(/[^0-9]/g, '')) >= 1000) {
            // Convert to 'k' format if it's a large number
            const num = parseInt(value.replace(/[^0-9]/g, ''));
            return `$${Math.round(num / 1000)}k`;
        }
        return value;
    }

    const formattedMin = formatPart(min);

    if (max) {
      const formattedMax = formatPart(max).replace('$', ''); // Don't repeat dollar sign for max
      return `${formattedMin} - ${formattedMax}`;
    }
    
    return `Around ${formattedMin}`;
  }
  return undefined;
};


/**
 * Maps a backend job object to the format required for the JobCard component.
 * @param backendJob The job data from the backend/database.
 * @returns A Job object formatted for the UI.
 */
export const mapBackendJobToJobCard = (backendJob: BackendStoredJob): Job => {
  let salaryRange: string | undefined = undefined;
  // Prioritize structured salary data if it exists
  if (backendJob.salaryMin && backendJob.salaryMax) {
    salaryRange = `$${Math.round(backendJob.salaryMin / 1000)}k - $${Math.round(backendJob.salaryMax / 1000)}k`;
  } else if (backendJob.salaryMin) {
    salaryRange = `From $${Math.round(backendJob.salaryMin / 1000)}k`;
  } else {
    // Fallback: Attempt to extract salary from the job's text content
    const combinedTextForSalary = `${backendJob.jobTitle} ${backendJob.mainDescription} ${backendJob.requirements}`;
    salaryRange = extractSalaryFromText(combinedTextForSalary);
  }

  const combinedTextForTags = `${backendJob.jobTitle} ${backendJob.mainDescription} ${backendJob.requirements}`;

  return {
    id: backendJob.id,
    title: backendJob.jobTitle,
    companyName: backendJob.companyName,
    location: backendJob.location,
    jobType: backendJob.jobType,
    category: backendJob.jobCategory,
    descriptionExcerpt: backendJob.mainDescription,
    postedDate: backendJob.submittedDate,
    salaryRange,
    companyLogo: backendJob.companyLogo || 'https://placehold.co/56x56.png',
    imageHint: 'company logo generic',
    tags: extractTagsFromText(combinedTextForTags),
    applyUrl: backendJob.applyUrl,
  };
};
