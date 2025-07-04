
import { Suspense } from 'react';
import { getAllJobs } from '@/services/jobDbService';
import type { BackendStoredJob } from '@/lib/schemas/job';
import { JobSearchPageContent } from '@/components/jobs/JobSearchPageContent';
import { Loader2 } from 'lucide-react';

// Mock data to be used if the database is empty or fetching fails on the server.
const mockJobsData: BackendStoredJob[] = [
  {
    id: 'grammarly-1',
    jobTitle: 'Software Engineer, Back-End',
    companyName: 'Grammarly',
    companyLogo: '/images/Grammarly.png',
    mainDescription: `💼 Job Title: Software Engineer – Back-End
Location: Kyiv, Ukraine (Hybrid)

🏢 About Grammarly
Grammarly is a leading AI communication assistant trusted by over 40 million users and 50,000 organizations worldwide. Our technology empowers teams at companies like Atlassian, Databricks, and Zoom to compose clearer messages, streamline productivity, and enhance work outcomes. Recognized globally by TIME, Forbes, Fast Company, and Inc., Grammarly is shaping the future of human-AI collaboration through innovation and meaningful impact.

🌟 Role Overview
We’re seeking Back-End Software Engineers to join our dynamic development team in Kyiv. You’ll play a pivotal role in building and supporting high-volume production services and core platform features for millions of users. At Grammarly, engineers are empowered to innovate, mentor, and contribute to a culture of excellence.

🔧 Responsibilities
- Start contributing code within your first week and ship impactful features early
- Build scalable, resilient production services with high performance and availability
- Implement Infrastructure as Code (IaC) practices
- Collaborate with cross-functional teams (Growth, Enterprise, Trust, Data) to deliver feature-rich products
- Champion engineering best practices including thorough documentation, testing, and performance monitoring
- Assess and enhance current architectures for future scalability
- Mentor junior team members and foster a culture of learning

🎯 Qualifications
- 3+ years in back-end development, building systems at scale
- Proficiency in algorithms, data structures, and software engineering fundamentals
- Experience deploying and debugging production systems
- Familiarity with cloud platforms like AWS, GCP, or Azure
- Focus on high-quality user experience and product performance
- Strong commitment to ethical and impactful engineering aligned with Grammarly’s EAGER values (Ethical, Adaptable, Gritty, Empathetic, Remarkable) and MOVE principles (Move fast, obsess about customer value, value impact, embrace healthy disagreement)

🌱 What We Offer
- Autonomy and trust to pursue innovative work that aligns with your strengths
- A hybrid work model fostering connection, focus, and collaboration
- Belonging initiatives through employee circles supporting identity groups (BIPOC, LGBTQIA+, women, parents)
- Global recognition for excellence and impact in AI innovation

🤝 Our Commitment
Grammarly is proud to be an equal opportunity employer. We celebrate diversity and strive to create an inclusive environment for all individuals—regardless of background, identity, or experience. We encourage applications from underrepresented communities in tech.`,
    requirements: '5+ years of experience in backend development, expert in Java and Scala. Strong understanding of microservices architecture and cloud platforms. BSc in Computer Science or equivalent.',
    jobCategory: 'Software Engineering',
    experienceLevel: 'Senior-level',
    salaryMin: 120000,
    salaryMax: 160000,
    jobType: 'Hybrid',
    location: 'Ukraine',
    submittedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: true,
    applyUrl: 'https://job-boards.greenhouse.io/grammarly/jobs/6467233'
  },
 {
    id: 'mock-fe-1',
    jobTitle: 'Senior Frontend Engineer',
    companyName: 'Grammarly',
    companyLogo: '/images/Grammarly.png',
    mainDescription: `💼 Job Title: Software Engineer – Infrastructure
Location: Berlin, Germany (Hybrid)
Department: Engineering Platform Team

🏢 About Grammarly
Grammarly is a trusted AI-powered communication assistant used by over 40 million individuals and 50,000 organizations, including leading brands like Atlassian, Databricks, and Zoom. Recognized by TIME, Forbes, Fast Company, and Inc., we’re transforming productivity with seamless integration into 500,000+ apps and websites.

🌟 Role Overview
We’re hiring a Software Engineer to join our Reliability Engineering group within the Engineering Platform team. This role focuses on designing and managing secure, cloud-native infrastructure to support scalable and reliable services for Grammarly’s growing user base. You’ll help establish a center of excellence around reliability, introducing automated systems and best practices across engineering teams.

🔧 Key Responsibilities
- Build scalable platforms using infrastructure tools like AWS
- Lead reliability initiatives, including self-healing systems and autoscaling
- Improve incident response workflows and build tooling for operational excellence
- Manage Kubernetes clusters, cross-service infrastructure, and service discovery mechanisms
- Develop frameworks for deployment, chaos testing, and observability
- Participate in on-call rotations and lead response efforts during incidents

🎯 Qualifications
- 5+ years managing high-traffic production SaaS environments
- Strong experience in Site Reliability Engineering (SRE) or centralized reliability teams
- Expertise in Kubernetes, cloud-native solutions, and service orchestration
- Background in software development with a focus on systems reliability
- Familiarity with AWS (or equivalent experience in Azure/GCP)
- Proficient in Go or similar backend programming languages
- Collaborative mindset with excellent communication skills
- Embodies Grammarly’s EAGER values (Ethical, Adaptable, Gritty, Empathetic, Remarkable) and embraces our MOVE principles (Move fast, Obsess over customer value, Value impact, Embrace healthy disagreement)

🌱 What We Offer
- Autonomy and flexibility to innovate
- Professional development through training and feedback
- Hybrid work model fostering collaboration and deep focus
- Inclusive culture through employee resource groups like Grammarly Circles
- Competitive compensation and wellness benefits for Germany-based candidates (mental health support, paid time off, pet care and home office stipends, and more)

🌈 Commitment to Diversity
Grammarly is proud to be an equal opportunity employer. We welcome applicants of all backgrounds, identities, and experiences. Our inclusive hiring process supports a safe and open workplace culture.
`,
    requirements: '',
    jobCategory: 'Software Engineering',
    experienceLevel: 'Senior-level',
 
    jobType: 'Full-time',
    location: 'Remote (USA)',
    submittedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: true,
    applyUrl: 'https://job-boards.greenhouse.io/grammarly/jobs/6988890'
  },
  {
    id: 'mock-do-1',
    jobTitle: 'AI Engineering Manager',
    companyName: 'mirakl',
    companyLogo: '/images/mirakl.png',
    mainDescription: `💼 Job Title: AI Engineering Manager
Location: Remote – France
Department: Tech / Mirakl Labs
Posted: July 1, 2025

🏢 About Mirakl
Mirakl is the global leader in e-commerce software solutions. Since 2012, we’ve empowered over 450 top-tier B2C and B2B enterprises—including Airbus, Decathlon, H&M, and Sonepar—to drive scalable, secure, and profitable growth through marketplace platforms, dropshipping, retail media, and catalog management tools.

🧪 About Mirakl Labs
Mirakl Labs is our R&D backbone, with hubs in Paris and Bordeaux. We operate in agile squads focused on scalability, usability, and innovation. Each squad includes a lead, developers, a product manager, and a QA, supported by cross-functional experts in architecture, security, UX, and data science. We foster a collaborative, feedback-driven culture and actively engage with the tech community at events like Devoxx, ProductConf, and ReactEurope.

🚀 Role Overview
We’re seeking a strategic and hands-on AI Engineering Manager to lead the Post-Processing & Evaluation squad behind our GenAI-powered Catalog Transformer. This team is critical in refining AI outputs for product listings across marketplaces, improving clarity, reliability, and business impact.

🔧 Key Responsibilities
- Lead and grow a cross-functional team focused on post-processing GenAI content and model evaluation
- Set and manage technical priorities aligned with company goals
- Build frameworks for monitoring AI quality (e.g., accuracy, hallucination, user perception)
- Oversee annotation pipelines and feedback loops for continual model improvement
- Develop tooling for client-facing teams to evaluate AI output quality per use case
- Collaborate with Data Science, Product, and Engineering to fine-tune models and improve transparency
- Contribute to sales support efforts through proofs of concept and pre-sales collaboration
- Define and track business KPIs tied to GenAI output performance

🧠 What You Bring
Technical Expertise
- Strong command of Python, SQL, Spark, and Airflow
- Experience with GenAI evaluation, monitoring, and internal tooling development
- Background in AI system deployment and performance optimization
- Familiarity with annotation workflows and human-in-the-loop methods
Leadership & Soft Skills
- 1–3 years of team management or technical leadership experience
- Clear communicator with strategic problem-solving abilities
- Comfortable in high-paced, evolving environments
- Fluent professional English (bilingual a plus)
- Empathetic, motivational leadership style

📝 Hiring Process
- Intro call (30 mins) with a tech recruiter
- Technical deep-dive (90 mins) with Senior Data Manager
- Cultural fit interviews (2 rounds, 45 mins each) with team members

🌈 Why Join Mirakl
- Own and influence the strategy behind a GenAI-native SaaS product
- Work with cutting-edge technologies and shape client experience tooling
- Join a company deeply committed to diversity, inclusion, and innovation
- Be part of one of the most ambitious AI journeys in e-commerce
`,
    requirements: '',
    jobCategory: 'Engineer',
    experienceLevel: 'Lead',
  
    jobType: 'Full-time',
    location: 'France',
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
    companyLogo: 'https://placehold.co/100x100.png',
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
    companyLogo: 'https://placehold.co/100x100.png',
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
    companyLogo: 'https://placehold.co/100x100.png',
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
    companyLogo: 'https://placehold.co/100x100.png',
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
    companyLogo: 'https://placehold.co/100x100.png',
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
    companyLogo: 'https://placehold.co/100x100.png',
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
    companyLogo: 'https://placehold.co/100x100.png',
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
    companyLogo: 'https://placehold.co/100x100.png',
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
    companyLogo: 'https://placehold.co/100x100.png',
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
