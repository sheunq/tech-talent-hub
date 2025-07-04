
import { Suspense } from 'react';
import { getAllJobs } from '@/services/jobDbService';
import type { BackendStoredJob } from '@/lib/schemas/job';
import { JobSearchPageContent } from '@/components/jobs/JobSearchPageContent';
import { Loader2 } from 'lucide-react';

// Mock data to be used if the database is empty or fetching fails on the server.
const mockJobsData: BackendStoredJob[] = [
  {
    id: 'mock-fe-1',
    jobTitle: 'Senior Frontend Engineer',
    companyName: 'Innovate Solutions',
    mainDescription: 'Join our team to build next-generation web applications with cutting-edge technologies. You will work on our flagship product, contributing to a high-quality user experience.',
    requirements: '5+ years of experience in frontend development, expert in React and TypeScript. Strong understanding of modern web APIs and performance optimization. BSc in Computer Science or equivalent.',
    jobCategory: 'Software Engineering',
    experienceLevel: 'Senior-level',
    salaryMin: 120000,
    salaryMax: 160000,
    jobType: 'Full-time',
    location: 'Remote (USA)',
    submittedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: true,
    applyUrl: 'https://jobs.lever.co/innovate/12345-senior-frontend'
  },
  {
    id: 'mock-do-1',
    jobTitle: 'Cloud DevOps Architect',
    companyName: 'SkyNet Systems',
    mainDescription: 'We are seeking a Cloud DevOps Architect to design, implement, and manage our cloud infrastructure. You will be key in ensuring scalability, reliability, and security of our services.',
    requirements: 'Extensive experience with AWS or GCP. Proficient with Kubernetes, Terraform, and CI/CD pipelines (Jenkins, GitLab CI). Strong scripting skills in Python or Go.',
    jobCategory: 'DevOps & Site Reliability',
    experienceLevel: 'Lead',
    salaryMin: 140000,
    salaryMax: 180000,
    jobType: 'Full-time',
    location: 'Austin, TX',
    applicationDeadline: new Date('2024-12-15'),
    submittedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://boards.greenhouse.io/skynet/67890-devops-architect'
  },
  {
    id: 'mock-ux-1',
    jobTitle: 'Lead UX Designer',
    companyName: 'Pixel Perfect Co.',
    mainDescription: 'Lead our design team to create intuitive and beautiful user experiences across our mobile and web platforms. You will drive the design process from research to high-fidelity prototypes.',
    requirements: '8+ years in UX/UI design. A strong portfolio showcasing your work. Expertise in Figma, Sketch, and Adobe Creative Suite. Experience leading a team of designers.',
    jobCategory: 'UX/UI Design',
    experienceLevel: 'Lead',
    jobType: 'Contract',
    location: 'New York, NY',
    submittedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: true,
    applyUrl: 'https://jobs.ashbyhq.com/pixelperfect/abcde-lead-ux'
  },
  {
    id: 'mock-ds-1',
    jobTitle: 'Data Scientist (AI/ML)',
    companyName: 'Alpha Analytics',
    mainDescription: 'Leverage data to drive business decisions. You will develop machine learning models, conduct statistical analysis, and present findings to stakeholders.',
    requirements: 'MSc or PhD in a quantitative field. 3+ years of experience. Proficiency in Python (Pandas, Scikit-learn, TensorFlow/PyTorch) and SQL.',
    jobCategory: 'Data Science & Analytics',
    experienceLevel: 'Mid-level',
    jobType: 'Full-time',
    location: 'Boston, MA',
    submittedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://www.indeed.com/viewjob?jk=fake-ds-1'
  },
  {
    id: 'mock-be-1',
    jobTitle: 'Junior Backend Developer',
    companyName: 'CodeCrafters Inc.',
    mainDescription: 'Eager to grow your backend development skills? Join our team to work on our core API services, learn from senior engineers, and contribute to a scalable microservices architecture.',
    requirements: '1-2 years of experience with Node.js or Python. Understanding of REST APIs. Basic knowledge of databases (SQL or NoSQL). A passion for learning and problem-solving.',
    jobCategory: 'Software Engineering',
    experienceLevel: 'Entry-level',
    salaryMin: 75000,
    salaryMax: 90000,
    jobType: 'Full-time',
    location: 'Remote',
    submittedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://www.linkedin.com/jobs/view/fake-be-1'
  },
  {
    id: 'mock-pm-1',
    jobTitle: 'Product Manager - Mobile',
    companyName: 'Apptivate',
    mainDescription: 'Own the product roadmap for our flagship mobile application. You will work closely with engineering, design, and marketing to define features and drive growth.',
    requirements: '4+ years of product management experience, with at least 2 years in mobile apps. Strong analytical skills and experience with agile methodologies.',
    jobCategory: 'Product Management',
    experienceLevel: 'Senior-level',
    jobType: 'Full-time',
    location: 'San Francisco, CA',
    applicationDeadline: new Date('2024-11-30'),
    submittedDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/apptivate/fghij-product-manager'
  },
  {
    id: 'mock-cy-1',
    jobTitle: 'Cybersecurity Analyst',
    companyName: 'SecureNet',
    mainDescription: 'Monitor our systems for security threats, analyze and respond to incidents, and help improve our overall security posture. This is a critical role in protecting our customer data.',
    requirements: '2+ years in a cybersecurity role. Familiarity with SIEM tools, vulnerability scanning, and incident response procedures. Certifications like Security+ or CEH are a plus.',
    jobCategory: 'Cybersecurity',
    experienceLevel: 'Mid-level',
    jobType: 'Full-time',
    location: 'London, UK',
    submittedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://boards.greenhouse.io/securenet/klmno-cyber-analyst'
  },
  {
    id: 'mock-mo-1',
    jobTitle: 'Mobile Developer (React Native)',
    companyName: 'ConnectSphere',
    mainDescription: 'Develop and maintain our cross-platform mobile application using React Native. Collaborate with a passionate team to deliver a seamless user experience.',
    requirements: '3+ years of mobile development experience. Strong proficiency in React Native and JavaScript/TypeScript. Experience publishing apps to the App Store and Google Play.',
    jobCategory: 'Mobile Development',
    experienceLevel: 'Mid-level',
    jobType: 'Part-time',
    location: 'Remote (Europe)',
    submittedDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.ashbyhq.com/connectsphere/pqrst-mobile-dev'
  },
  {
    id: '7',
    jobTitle: 'Senior Frontend Engineer',
    companyName: 'Innovate Solutions',
    mainDescription: 'Join our innovative team to build next-generation solutions. Strong experience in relevant technologies required. You will be a key part of our product development cycle.',
    requirements: '5+ years with React, TypeScript, and Next.js. Experience with state management libraries like Redux or Zustand.',
    jobCategory: 'Software Engineering',
    experienceLevel: 'Senior-level',
    jobType: 'Full-time',
    location: 'Remote (USA)',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/innovate/12345-senior-frontend'
  },
  {
    id: '8',
    jobTitle: 'Cloud DevOps Architect',
    companyName: 'SkyNet Systems',
    mainDescription: 'Design and maintain our cloud infrastructure, ensuring scalability and reliability. Work with cutting-edge CI/CD tools.',
    requirements: 'Deep knowledge of AWS or Azure, Kubernetes, and Terraform. Proven experience in a DevOps leadership role.',
    jobCategory: 'DevOps & Site Reliability',
    experienceLevel: 'Lead',
    jobType: 'Full-time',
    location: 'Austin, TX',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://boards.greenhouse.io/skynet/67890-devops-architect'
  },
  {
    id: '9',
    jobTitle: 'Lead UX Designer',
    companyName: 'Pixel Perfect Co.',
    mainDescription: 'Lead our design team in creating stunning and user-friendly interfaces. A strong portfolio is a must.',
    requirements: 'Expertise in Figma, user research methodologies, and a portfolio of successful projects.',
    jobCategory: 'UX/UI Design',
    experienceLevel: 'Lead',
    jobType: 'Contract',
    location: 'New York, NY',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.ashbyhq.com/pixelperfect/abcde-lead-ux'
  },
];


function JobSearchPageLoadingSkeleton() {
  return (
     <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-center font-headline">Find Your Next Tech Role</h1>
      <div className="mb-8 p-6 border rounded-xl shadow-lg bg-card">
        <div className="h-8 bg-muted rounded w-1/3 mb-4 animate-pulse"></div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-10 bg-muted rounded animate-pulse"></div>
            <div className="h-10 bg-muted rounded animate-pulse"></div>
          </div>
          <div className="h-10 bg-muted rounded animate-pulse"></div>
        </div>
      </div>
      <div className="text-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <p className="mt-4 text-muted-foreground text-lg">Loading jobs...</p>
      </div>
    </div>
  )
}

export default async function JobSearchPage() {
    let allJobs: BackendStoredJob[] = [];
    
    // The getAllJobs service is now resilient and will return [] on error.
    const jobsFromDb = await getAllJobs();
    const approvedJobs = jobsFromDb.filter(job => job.status === 'approved');

    // If the database is empty or returned an error, use mock data for demonstration.
    if (approvedJobs.length > 0) {
        allJobs = approvedJobs;
    } else {
        console.log("No approved jobs found in the database. Using mock data for demonstration.");
        allJobs = mockJobsData.filter(job => job.status === 'approved');
    }

    return (
        <Suspense fallback={<JobSearchPageLoadingSkeleton />}>
            <JobSearchPageContent initialJobs={allJobs} />
        </Suspense>
    );
}
