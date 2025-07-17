'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, Star, ThumbsUp, ThumbsDown, Info, Building, MessageSquare, PlusCircle, Loader2, Globe, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { JobCard, type Job } from '@/components/jobs/JobCard';
import { getAllJobs } from '@/services/jobDbService';
import type { BackendStoredJob } from '@/lib/schemas/job';

// --- Mock Data (in a real app, this would come from an API) ---
interface Company {
  id: string;
  name: string;
  logoUrl: string;
  imageHint: string;
  industry: string;
  headquarters: string;
  website: string;
  description: string;
  photos: { url: string; hint: string; }[];
}

interface Review {
  id: string;
  companyId: string;
  jobTitle: string;
  rating: number;
  pros: string;
  cons:string;
  author: string;
  submittedAt: string;
}
const mockCompanies: Company[] = [
  { 
    id: 'job-salary-interview-review-in-Grammarly', 
    name: 'Grammarly', 
    logoUrl: '/images/Grammarly.png', 
    imageHint: 'Grammarly logo',
    industry: 'AI & Natural Language Processing',
    headquarters: 'San Francisco, CA',
    website: 'https://www.grammarly.com/jobs',
    description: 'Grammarly is a global company that offers an AI-powered writing assistant. It helps users communicate more effectively by providing suggestions for grammar, spelling, clarity, and style. Millions of users and thousands of teams around the world trust Grammarly to improve their writing.',
    photos: [
      { url: '/images/Grammarly1.png', hint: 'office interior team' },
      { url: '/images/Grammarly4.jpg', hint: 'people collaborating presentation' },
      { url: '/images/Grammarly3.png', hint: 'modern office space' },
    ]
  },
  { 
    id: 'job-salary-interview-review-in-harbingermotors', 
    name: 'harbingermotors', 
    logoUrl: '/images/harbingermotors.png', 
    imageHint: 'harbingermotors logo',
    industry: 'vehicle industry',
    headquarters: '12821 Knott St, Garden Grove, CA 92841',
    website: 'https://harbingermotors.com/',
    description: 'BUILT WITHOUT COMPROMISE \
We founded Harbinger with a mission to modernize the medium-duty vehicle industry. Leveraging deep experience in electrification, Harbinger is delivering to the market an EV platform offering best-in-class performance and durability priced for zero cost acquisition premium.',
    photos: [
      { url: '/images/Harbinger1.png', hint: 'data center servers' },
      { url: '/images/Harbinger2.png', hint: 'futuristic network hub' },
    ]
  },
  { 
    id: 'job-salary-interview-review-in-Xero', 
    name: 'Xero', 
    logoUrl: '/images/xero.png', 
    imageHint: 'Pixel Perfect logo',
    industry: 'Accounting Software',
    headquarters: 'New York, NY',
    website: 'https://www.xero.com/',
    description: 'Accounting software made for small businesses and sole traders. Xero’s online accounting software connects small business owners with their numbers, their bank, and advisors at anytime. \n Founded in 2006, Xero now has 4.4 million subscribers and is a leader in cloud accounting across New Zealand, Australia and the United Kingdom.',
    photos: [
      { url: '/images/Xero1.png', hint: 'xero' },
      
    ]
  },
  { 
    id: 'job-salary-interview-review-in-portronics', 
    name: 'Portronics', 
    logoUrl: '/images/portronics.png', 
    imageHint: 'Portronics logo',
    industry: 'Tech Accessories',
    headquarters: 'Floor 10, Plot. - 6, Sector 14 Dwarka, Dwarka, New Delhi, Delhi 110075, India',
    website: 'https://www.portronics.com/pages/about-us',
    description: 'In 2010, Portronics took its first step into the industry and had reformed the dimensions of Consumer Electronics Space. With over 1600+ successful product launches and innovations, we stand first in revolutionizing the Portable & Innovative technology that has been dominating the Indian landscape. \
Portronics gave birth to the first-ever idea of introducing Indian technology to Innovative Portable Bluetooth speakers, earphones, car accessories, hubs & cables, power banks, and many more. \
Our consistent growth in the industry and quality services gives our vision an uplifting platform in the industry.',
     photos: [
      { url: '/images/Portronics1.png', hint: 'developer coding screen' },
      { url: '/images/Portronics2.png', hint: 'team code review' },
    ]
  },

    { 
    id: 'job-salary-interview-review-in-deloitte', 
    name: 'Deloitte', 
    logoUrl: '/images/deloitte.png', 
    imageHint: 'deloitte logo',
    industry: 'Tech Accessories',
    headquarters: 'London, UK',
    website: 'https://www.deloitte.com/',
    description: 'At Deloitte, we make an impact that matters \
For over 175 years, we have worked with leaders around the world—from the Global 500® to private businesses—to help them build better futures. To support their people. To succeed. All while caring for our communities. \
With a workforce made up of the industry’s greatest minds, we continue to shape the future by delivering real, measurable results. We go beyond talk—we act. ',
     photos: [
      { url: '/images/deloitte2.jpg', hint: 'deloitte' },
      
    ]
  },


  

    { 
    id: 'job-salary-interview-review-in-easebuzz', 
    name: 'easebuzz', 
    logoUrl: '/images/easebuzz.png', 
    imageHint: 'easebuzz logo',
    industry: 'Software as a Service',
    headquarters: 'Wing,2nd Floor, Hinjewadi - Wakad Road,Pune 411057, Maharashtra',
    website: 'https://easebuzz.in/',
    description: 'Founded in the year 2014, Easebuzz is a full-stack technology platform that has launched its operations in the year 2016. We are building an ecosystem of products and services to solve business problems around payment acceptance, payouts, and financial operations. The team at Easebuzz focuses on creating workflows that enable businesses to process digital payments and manage end-to-end financial operations through plug-and-play APIs.',
     photos: [
      { url: '/images/easebuzz2.png', hint: 'easebuzz' },
      
    ]
  },

  
    { 
    id: 'job-salary-interview-review-in-yext', 
    name: 'yext', 
    logoUrl: '/images/yext.png', 
    imageHint: 'yext logo',
    industry: 'Internet',
    headquarters: '	61 Ninth Avenue, New York',
    website: 'https://www.yext.com',
    description: 'We are the leading digital presence platform for multi-location brands, powering the knowledge behind every customer engagement. \
With one central platform, brands can seamlessly deliver consistent, accurate, and engaging experiences and meaningfully connect with customers anywhere in the digital world. Our AI and machine learning technology powers the knowledge behind every customer engagement, automates workflows at scale, and delivers actionable cross-channel insights that enable data-driven decisions. \
From SEO and websites to social media and reputation management, Yext enables brands to turn their digital presence into a differentiator',
     photos: [
      { url: '/images/yext1.jpg', hint: 'yext' },
      
    ]
  },
  
    { 
    id: 'job-salary-interview-review-in-3pillarglobal', 
    name: '3pillarglobal', 
    logoUrl: '/images/3pillarglobal.png', 
    imageHint: '3pillarglobal logo',
    industry: '	Software development',
    headquarters: 'Fairfax, Virginia, United States',
    website: 'https://www.3pillarglobal.com/',
    description: '3Pillar has unique experience and discipline that live at the intersection of product engineering and cognitive computing. We help organizations execute the strategic software development initiatives needed to compete in the modern digital economy.',
     photos: [
      { url: '/images/3pillarglobal.jpeg', hint: '3pillarglobal' },
      
    ]
  },
  
    { 
    id: 'job-salary-interview-review-in-godaddy', 
    name: 'godaddy', 
    logoUrl: '/images/godaddy.png', 
    imageHint: 'godaddy logo',
    industry: 'Internet IT consulting SMEs',
    headquarters: 'Tempe, Arizona, United States',
    website: 'https://www.godaddy.com/',
    description: 'GoDaddy does more than sell domain names. We help millions of small businesses globally accelerate their growth, giving entrepreneurs confidence at every stage of their business journey. People come to GoDaddy to build their business. Our global solutions seamlessly connect their identity and presence with commerce, leading to profitable growth.',
     photos: [
      { url: '/images/godaddy2.png', hint: 'godaddy' },
      
    ]
  },
];

const mockReviews: Review[] = [
  { id: 'rev1', companyId: 'job-salary-interview-review-in-Grammarly', jobTitle: 'Senior Frontend Engineer', rating: 5, pros: 'Great work-life balance, flexible remote policy, and very talented team. The projects are challenging and rewarding.', cons: 'The internal tools can be a bit slow sometimes, but they are actively working on improving them.', author: 'Former Employee', submittedAt: '2024-09-15' },
  { id: 'rev2', companyId: 'job-salary-interview-review-in-harbingermotors', jobTitle: 'Product Manager', rating: 4, pros: 'Strong product vision and a collaborative environment. Leadership is transparent and open to feedback.', cons: 'Compensation could be slightly more competitive for the Bay Area market.', author: 'Current Employee', submittedAt: '2024-10-01' },
  { id: 'rev3', companyId: 'job-salary-interview-review-in-deloitte', jobTitle: 'Cloud DevOps Architect', rating: 3, pros: 'Cutting-edge technology stack and a lot of autonomy in your role.', cons: 'Fast-paced environment can lead to burnout. On-call schedule is demanding.', author: 'Former Employee', submittedAt: '2024-08-20' },
  { id: 'rev4', companyId: 'job-salary-interview-review-in-godaddy', jobTitle: 'Backend Engineer', rating: 5, pros: 'Best team I have ever worked with. Smart people, interesting problems, and a very supportive culture.', cons: 'The office snacks could be better, but that is a minor point!', author: 'Current Employee', submittedAt: '2024-10-10' },
  { id: 'rev3', companyId: 'job-salary-interview-review-in-3pillarglobal', jobTitle: 'Cloud DevOps Architect', rating: 3, pros: 'Cutting-edge technology stack and a lot of autonomy in your role.', cons: 'Fast-paced environment can lead to burnout. On-call schedule is demanding.', author: 'Former Employee', submittedAt: '2024-08-20' },
];

const mockJobsData: BackendStoredJob[] = [


{ applyUrl: "https://careers.godaddy/jobs/backend-software-engineer-pune-maharashtra-india", companyName: "godaddy", companyLogo: "/images/godaddy.png", location: "India", jobTitle: "Backend Software Engineer", jobType: "Hybrid", jobCategory: "Backend", mainDescription: `
Job Title: Backend Software Engineer
Location: Pune, Maharashtra, India (Hybrid)
Department: Engineering – Commerce Division
Employment Type: Full-Time

🧠 Role Overview
GoDaddy is hiring a Backend Software Engineer to join its Terminal Management team, which oversees the lifecycle of Poynt Smart Terminals and related hardware. You’ll build scalable APIs, manage over-the-air updates, and develop systems for diagnostics, provisioning, and analytics that support global device operations.

🔧 Key Responsibilities
- Develop and maintain APIs for managing payment terminals across global markets
- Design scalable OTA systems for secure OS and app updates
- Implement real-time log collection and diagnostics for rapid issue resolution
- Integrate telemetry data into analytics and machine learning pipelines
- Build provisioning systems for diverse customer environments
- Support full device lifecycle from factory to field
- Enable partners and resellers with remote device management tools

✅ Required Qualifications
- 3+ years in server-side programming (Java or Golang preferred)
- Experience building secure cloud applications on AWS (ECS, EC2)
- Skilled in designing external-facing APIs
- Proficient in distributed systems and event-driven architectures
- Strong knowledge of SQL and NoSQL databases

🌟 Preferred Experience
- 2+ years with Java/Golang backend development
- Familiarity with Kafka, RabbitMQ, or AWS SNS/SQS
- Experience with AWS Lambda or similar event-driven platforms

💰 Compensation & Benefits
- Paid time off, retirement savings, and equity grants
- Employee stock purchase plan
- Health benefits and parental leave
- Inclusive culture and support for side hustles
- Access to Employee Resource Groups and professional development
`, status: "approved", isFeatured: true, requirements: "", submittedDate: new Date().toISOString(), id: "backend-software-engineer-in-godaddy-at-india-india"},




{ applyUrl: "https://careers.godaddy/jobs/director-of-artificial-intelligence-and-machine-learning-india", companyName: "godaddy", companyLogo: "/images/godaddy.png", location: "India", jobTitle: "Director of Artificial Intelligence and Machine Learning", jobType: "Hybrid", jobCategory: "AI", mainDescription: `Job Title: Director of Artificial Intelligence and Machine Learning
Location: Gurugram or Pune, India (Hybrid)
Department: Engineering
Employment Type: Full-Time

🧠 Role Overview
GoDaddy is hiring a visionary Director of AI/ML to define and lead its three-year strategic roadmap for enterprise-scale AI and Machine Learning solutions. You’ll spearhead the development of Agentic AI systems, architect global pipelines, and collaborate across teams to deliver intelligent, adaptive applications that accelerate customer acquisition and business growth.

🔧 Key Responsibilities
- Develop and champion GoDaddy’s AI/ML strategy and roadmap
- Lead initiatives in Agentic AI, enabling autonomous, adaptive systems
- Architect and implement end-to-end AI/ML pipelines for global deployment
- Ensure scalability, governance, and compliance across diverse regions
- Collaborate with engineering, product, and data science teams to deliver impactful solutions
- Stay ahead of AI/ML advancements and integrate emerging technologies
- Mentor and grow high-performing AI/ML teams

✅ Required Qualifications
- 8+ years in AI/ML leadership roles within agile tech or SaaS environments
- Proven expertise in Agentic AI, autonomous systems, or multi-agent architectures
- Experience designing and scaling global AI/ML systems
- Strong background in customer-facing applications powered by AI/ML
- Deep knowledge of ML tools, frameworks, and cloud platforms
- Exceptional leadership, communication, and strategic execution skills

🌟 Preferred Experience
- Advanced degree in Computer Science, Machine Learning, or Artificial Intelligence

💰 Compensation & Benefits
- Paid time off, retirement savings, and equity grants
- Employee stock purchase plan
- Health benefits and parental leave
- Inclusive culture and support for side hustles
- Access to Employee Resource Groups and professional development
`, status: "approved", isFeatured: true, requirements: "", submittedDate: new Date().toISOString(), id: "director-of-artificial-intelligence-and-machine-learning-in-godaddy-at-india-india"},


  {
  applyUrl: "https://jobs.lever.co/3pillarglobal/edf427ee-d6bf-4dd8-b639-85997d5832b0",
  companyName: "3pillarglobal",
  companyLogo: "/images/3pillarglobal.png",
  location: "India",
  jobTitle: "Senior Data Engineer",
  jobType: "Remote",
  jobCategory: "Data",
  mainDescription: `Job Title: Senior Data Engineer
Location: Remote – India
Department: Product Delivery
Employment Type: Full-Time

🧠 Role Overview
3Pillar Global is seeking a Senior Data Engineer to lead the design, development, and deployment of advanced data solutions. This role is ideal for a visionary technologist who thrives on solving complex problems and shaping the future of data-driven innovation across industries like healthcare, media, and urban tech.

🔧 Key Responsibilities
- Design and orchestrate complex data workflows using Luigi
- Develop automation scripts with Python and Linux Bash
- Manage and optimize SQL databases and Hadoop ecosystem tools
- Deploy scalable data solutions using AWS services (EC2, S3, RDS, EMR)
- Implement monitoring and alerting for real-time pipeline visibility
- Lead cross-functional projects and mentor junior engineers
- Collaborate with stakeholders to align technical solutions with business goals

✅ Required Qualifications
- 5–10 years of experience in data engineering
- Strong hands-on expertise with Snowflake
- Proficiency in Python, Bash, and SQL
- Experience with data lakes, data governance, and security compliance
- Familiarity with CI/CD tools and automation frameworks
- Knowledge of Spark, Hive, and other big data technologies
- Excellent communication and leadership skills

🌟 Preferred Experience
- Background in advanced analytics or data science
- Experience collaborating with non-technical teams
- Proven ability to design secure, scalable, and high-performance data architectures
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senor-data-engineer-in-3pillarglobal-at-india-india"
}

,

{
  applyUrl: "https://jobs.lever.co/3pillarglobal/f7dd4cfb-beb8-4a41-8017-a847187b9f87",
  companyName: "3pillarglobal",
  companyLogo: "/images/3pillarglobal.png",
  location: "Noida, India",
  jobTitle: "Sr. Software Engineer React.js",
  jobType: "Hybrid",
  jobCategory: "Software",
  mainDescription: `Job Title: Sr. Software Engineer – React.js
Location: Noida, India (Hybrid)
Department: Product Development
Employment Type: Full-Time

🧠 Role Overview
3Pillar Global is looking for a Senior Software Engineer with expertise in React.js to help build high-quality, scalable, and responsive web applications. You’ll play a key role in delivering innovative digital products across industries like healthcare, media, and urban tech—while mentoring peers and driving engineering excellence.

🔧 Key Responsibilities
- Develop responsive UIs using React.js
- Work with SQL Server APIs to manage and retrieve data
- Implement localization and internationalization features
- Apply OOP principles to build scalable and maintainable systems
- Collaborate in Agile teams and contribute to sprint planning and retrospectives
- Mentor junior engineers and support architectural decisions
- Ensure code quality through unit testing and adherence to accessibility standards

✅ Required Qualifications
- 4–5 years of experience in React.js and frontend development
- Basic understanding of SQL Server
- Experience with AWS
- Familiarity with Agile methodologies
- Strong English communication skills
- Proven ability to deliver performant, enterprise-grade applications

🌟 Preferred Experience
- User engagement tracking tools (e.g., Google Analytics, Mixpanel)
- Knowledge of WCAG accessibility standards
- Exposure to microservices architecture
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "sr-software-engineer-react-js-in-3pillarglobal-at-Noida-India"
}
,

{ applyUrl: "https://job-boards.greenhouse.io/yext/jobs/7011931", companyName: "yext", companyLogo: "/images/yext.png", location: "Washington", jobTitle: "Software Engineer", jobType: "Full-time", jobCategory: "Software", mainDescription: `Job Title: Software Engineer
Location: Washington, D.C. (Hybrid – 3 days/week in office)
Department: Engineering
Employment Type: Full-Time

🧠 Role Overview
Yext is hiring a Software Engineer to help build and scale its digital presence platform. You’ll work in an agile environment alongside top-tier engineers, contributing to full lifecycle development of highly reliable systems. This role is ideal for early-career developers eager to work hands-on with code and collaborate across teams.

🔧 Key Responsibilities
- Participate in full lifecycle software development
- Design, implement, and deploy scalable and reliable systems
- Build storage systems, libraries, and frameworks
- Contribute ideas for new features and proactively identify improvements
- Collaborate across engineering and non-engineering teams
- Write clean, tested, and well-documented code

✅ Required Qualifications
- BA/BS in Computer Science or related field
- 0–1 years of industry experience
- Strong foundation in data structures, algorithms, and software design
- Fluency in Java, C++, Python, or similar (Java preferred)
- Openness to new technologies and creative solutions
- Comfortable in a fast-paced startup environment

💰 Compensation & Benefits
- Annual base salary: $98,100 – $199,000 USD
- Medical, dental, and vision insurance
- Life and disability coverage
- 401(k) retirement plan
- Vacation and sick leave
- Equity and performance-based compensation
`, status: "approved", isFeatured: true, requirements: "", submittedDate: new Date().toISOString(), id: "software-engineer-in-yext-at-washington-united-states"},






{ applyUrl: "https://job-boards.greenhouse.io/yext/jobs/7034100", companyName: "yext", companyLogo: "/images/yext.png", location: "Hungary", jobTitle: "Data Scientist", jobType: "Hybrid", jobCategory: "Data", mainDescription: `Job Title: Data Scientist
Location: Budapest, Hungary (Hybrid)
Department: Hearsay Team (now part of Yext)
Employment Type: Full-Time

🧠 Role Overview
Yext is hiring a Data Scientist to lead and contribute to high-impact machine learning and data science projects that enhance product performance and support strategic decision-making. You’ll work with structured and unstructured data, apply generative AI techniques, and collaborate across teams to deliver actionable insights.

🔧 Key Responsibilities
- Develop and improve ML models using structured/unstructured data
- Apply large language models (e.g., GPT, LLaMA) using RAG and instruction tuning
- Ensure data quality through cleaning, preparation, and validation
- Collaborate with Product, Engineering, and business stakeholders
- Promote data-driven decision-making and mentor colleagues
- Enhance the data stack and support agile delivery processes

✅ Required Qualifications
- 2+ years of experience in data science or analytics
- Proven experience with supervised and unsupervised ML models
- Proficiency in Python (NumPy, Pandas, scikit-learn) and SQL
- Hands-on experience with cloud platforms (AWS, GCP, or Azure)
- Strong analytical and problem-solving skills
- Bachelor’s or Master’s degree in Computer Science, Engineering, or Mathematics
- Passion for social media data and digital behavior analysis
- Excellent communication and collaboration skills

💼 Work Environment & Culture
- Hybrid work model: remote flexibility with 1+ day/week on-site
- Inclusive and diverse culture with strong emphasis on employee wellbeing
- Recognized globally as a Best Place to Work by Built In, Fortune, and Great Place To 
`, status: "approved", isFeatured: true, requirements: "", submittedDate: new Date().toISOString(), id: "data-scientist-in-yext-at-hungary-hungary"},



{ applyUrl: "https://apply.deloitte.com/en_US/careers/JobDetail/Manager-Full-Stack-NET-Software-Engineer-Tax-Domain/306686", companyName: "deloitte", companyLogo: "/images/deloitte.png", location: "United States", jobTitle: "Manager, Full-Stack .NET Software Engineer - Tax Domain", jobType: "Full-time", jobCategory: "Software", mainDescription: `Job Title: Manager, Full-Stack .NET Software Engineer – Tax Domain
Location: Multiple U.S. Locations (Hybrid)
Department: Engineering and Product – Software Engineering
Employment Type: Full-Time

🧠 Role Overview
Deloitte is hiring a hands-on Full-Stack Software Engineering Manager to lead high-impact projects within its Tax domain. You’ll collaborate across teams to design, develop, and deploy advanced software solutions using modern frameworks and cloud-native technologies. This role blends technical leadership, engineering craftsmanship, and customer-centric delivery.

🔧 Key Responsibilities
- Lead full-stack development using C#, .NET Core, Angular, and React
- Architect scalable, maintainable, and secure solutions
- Drive Agile and DevSecOps practices for automated daily deployments
- Translate business needs into technical specifications and code
- Mentor engineers and review code to ensure quality KPIs are met
- Collaborate with product managers, UX designers, and delivery teams
- Engage with customers to ensure solutions meet real-world needs
- Promote incremental delivery and rapid experimentation

✅ Required Qualifications
- Bachelor’s degree in Computer Science, Software Engineering, or related field
- 6+ years in full-stack development with Angular, React, C#, and .NET Core
- 6+ years of cloud-native engineering experience (AWS preferred)
- 4+ years implementing domain-driven systems with complex business rules
- 2+ years working with AI/ML and Generative AI tools
- Experience in US & International Payroll & Reward Taxation, including Tax Equalization, Withholding, and Gross Up
- Limited immigration sponsorship available
- Ability to travel up to 10%

🌟 Preferred Experience
- Master’s degree in a technical discipline
- 8+ years in full-stack and cloud-native development
- Familiarity with tools like GitHub, SonarQube, ADO, and SAFe

💰 Compensation & Benefits
- Salary range: $107,700 – $221,200 USD
- Eligibility for discretionary annual incentive program
- Broad range of benefits including health, retirement, and professional development

You can view the full listing and apply directly on Deloitte’s careers portal.
`, status: "approved", isFeatured: true, requirements: "", submittedDate: new Date().toISOString(), id: "manager-full-stack-net-software-engineer-tax-domain-in-deloitte-at-United-States"},



  
{ applyUrl: "https://apply.deloitte.com/en_US/careers/JobDetail/Cybersecurity-and-IA-Specialist-TS-SCI-in-Suffolk-VA/306661", companyName: "deloitte", companyLogo: "/images/deloitte.png", location: "United States", jobTitle: "Cybersecurity and IA Specialist (TS/SCI in Suffolk, VA)", jobType: "Full-time", jobCategory: "Cybersecurity", mainDescription: `Job Title: Cybersecurity and Information Assurance (IA) Specialist
Location: Suffolk, VA (On-site, 5 days/week)
Department: Strategy, Growth, and Transformation – Standardized Strategic Support Services
Employment Type: Full-Time

🧠 Role Overview
Deloitte is hiring a Cybersecurity and IA Specialist to support Risk Management Framework (RMF) authorization processes for Navy systems. You’ll perform vulnerability and risk assessments throughout the system development lifecycle and contribute to the design of cyber governance and assurance programs.

🔧 Key Responsibilities
- Conduct vulnerability/risk assessments for Navy systems and applications
- Support RMF authorization through development of Security Assessment Plans (SAP) and Security Assessment Reports (SAR)
- Collaborate with cross-functional teams to ensure cyber posture aligns with strategic objectives
- Maintain compliance with Navy IA and cybersecurity standards

✅ Required Qualifications
- Bachelor’s degree
- Active TS/SCI clearance
- Must reside in the Hampton Roads area and be available on-site in Suffolk, VA
- Navy Qualified Validator (NQV) certification
- One of the following certifications: SEC+CE, CAP, ENSA, CISA, CASP, GSLC, CISSP, or CISM
- 5+ years of Navy IA/cybersecurity experience, including:
- 1+ year with RMF components and instructions
`, status: "approved", isFeatured: true, requirements: "", submittedDate: new Date().toISOString(), id: "cybersecurity-and-ia-specialist-ts-sci-in-suffolk-va-in-deloitte-at-united-states-united-states"},


  {
    id: 'Software-Engineer-Back-End-Kyiv-Ukraine',
    jobTitle: 'Software Engineer, Back-End',
    companyName: 'Grammarly',
    companyLogo: '/images/Grammarly.png',
    mainDescription: `💼 Job Title: Software Engineer – Back-End...`,
    requirements: '5+ years of experience in backend development, expert in Java and Scala. Strong understanding of microservices architecture and cloud platforms. BSc in Computer Science or equivalent.',
    jobCategory: 'Software Engineering',
    salaryMin: 120000,
    salaryMax: 160000,
    jobType: 'Hybrid',
    location: 'Ukraine',
    submittedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: true,
    applyUrl: 'https://job-boards.greenhouse.io/grammarly/jobs/6467233'
  }
,
{ applyUrl: "https://job-boards.greenhouse.io/harbingermotors/jobs/4769309007", companyName: "harbingermotors", companyLogo: "/images/harbingermotors.png", location: "Garden Grove, California, USA", jobTitle: "Software Test Engineer, Infotainment", jobType: "Hybrid", jobCategory: "Software", mainDescription: `Job Title: Software Test Engineer – Infotainment
Location: Garden Grove, California, USA
Employment Type: Full-Time
Salary Range: $100,000 – $140,000 USD

🧠 Role Overview
Harbinger Motors is hiring a Software Test Engineer to ensure the quality and reliability of its advanced infotainment systems for electric vehicles. You’ll develop automated testing frameworks, validate embedded systems, and collaborate with cross-functional teams to deliver high-performance user experiences.

🔧 Key Responsibilities
- Build and maintain automated test frameworks using Python, Pytest, and OpenCV
- Apply Behavior-Driven Development (BDD) with Gherkin syntax
- Conduct system-level testing on Yocto and Automotive Grade Linux (AGL)
- Develop and execute test plans, strategies, and cases
- Identify and track software defects, collaborating with developers for resolution
- Participate in design/code/test case reviews
- Continuously improve testing tools and methodologies
- Provide clear test reports and metrics to stakeholders

✅ Required Skills & Experience
- Proficiency in Python, Pytest, and OpenCV
- Experience with embedded Linux systems and infotainment testing
- Familiarity with BDD methodologies and Gherkin syntax
- Strong grasp of software testing principles and version control (e.g., Git)
- Excellent problem-solving and communication skills
- Ability to work independently in a fast-paced environment

🌟 Preferred Qualifications
- Bachelor’s degree in Computer Science, Electrical Engineering, or related field
- Experience with CAN, Ethernet, and CI/CD pipelines
- Familiarity with Jira, TestRail, and HMI testing

💼 Benefits & Perks
- 100% employer-covered Health, Dental & Vision
- Early-stage stock options
- 401(k), HSA, and FSA retirement savings
- Generous PTO and parental leave
- Annual vacation bonus
- Wellness & fertility benefits
- Cell phone stipend
- Complimentary meals and stocked kitchens
`, status: "approved", isFeatured: true, requirements: "", submittedDate: new Date().toISOString(), id: "software-test-engineer-infotainment-in-harbingermotors-at-Garden-Grove-California-USA"}

,  
{ applyUrl: "https://jobs.lever.co/xero/53f5c6de-54e9-4f11-9a52-2d0c07b7790a", companyName: "xero", companyLogo: "/images/xero.png", location: "Vancouver", jobTitle: "Software Engineer", jobType: "Hybrid", jobCategory: "Software", mainDescription: `Job Title: Software Engineer
Location: Vancouver, Canada (Hybrid)
Department: Technology – Engineering
Employment Type: Permanent

🧠 Role Overview
Xero is hiring a Software Engineer to build high-quality, scalable software that supports small businesses. You’ll work across the full development lifecycle—from design and testing to deployment and incident response—while contributing to a collaborative, agile team focused on innovation and continuous improvement.

🔧 Key Responsibilities
- Develop robust, scalable software with a focus on technical excellence
- Automate manual processes and contribute to solution design
- Design and implement automated testing strategies
- Triage and resolve production issues, communicating impact clearly
- Maintain and monitor infrastructure in production environments
- Practice agile development and improve team processes
- Mentor junior engineers and contribute to a culture of learning

✅ Required Qualifications
- Proficiency in Java, TypeScript, or C# .NET (bonus)
- Specialization in one or more areas of the development stack
- Strong debugging skills across the technology stack
- Experience with cloud infrastructure rollout and maintenance
- Familiarity with security best practices and resilient design patterns
- Regular practice of test-driven development and trunk-based development
- Proven ability to respond to production incidents

💰 Compensation & Benefits
- Salary range: $121,300 – $148,300 CAD
- Generous paid leave and statutory holidays
- Dedicated wellbeing leave and Employee Assistance Program
- Health, dental, and vision coverage with a healthcare spending account
- Fertility and family forming financial support
- 26 weeks of parental leave for primary caregivers
- Employee Share Plan and flexible working arrangements
- Career development and beautiful offices with shared meals

You can view the full listing and apply directly on Built In’s job board. 
`, status: "approved", isFeatured: true, requirements: "", submittedDate: new Date().toISOString(), id: "software-engineer-in-xero-at-vancouver-canada"}


,{ applyUrl: "https://easebuzz.hire.trakstar.com/jobs/fk0pgej/", companyName: "easebuzz", companyLogo: "/images/easebuzz.png", location: "Pune, India", jobTitle: "Data Engineering", jobType: "Full-time", jobCategory: "Data", mainDescription: `

Job Title: Associate Manager (Research) – Data Engineering
Location: Pune, India
Department: Easebuzz Research & Innovation Lab
Employment Type: Full-Time

🧠 Role Overview
Easebuzz is hiring a Data Engineering Associate Manager to design and operationalize large-scale enterprise data solutions. You’ll work with cutting-edge AWS technologies and third-party tools to build real-time data pipelines, optimize infrastructure, and support analytics across the fintech ecosystem.

🔧 Key Responsibilities
- Build and maintain ETL pipelines, data lakes, and ingestion frameworks
- Design scalable data architecture using AWS services (Spark, EMR, RedShift, DynamoDB, Glue, Lambda, Kinesis)
- Implement real-time data processing with Kafka/Kinesis
- Automate high-volume data delivery and internal processes
- Collaborate with cross-functional teams to support data infrastructure needs
- Ensure data security across multiple regions and data centers
- Develop tools for analytics and data science teams
- Evangelize high standards for data model quality and performance

✅ Required Experience & Skills
- Strong background in ETL, data modeling, and data architecture
- Experience with NoSQL databases (DynamoDB, MongoDB)
- Proficiency in SQL and AWS big data technologies
- Familiarity with real-time use cases and cloud-native development
- Ability to create prototypes and drive iterative development
- Proven track record in process automation and infrastructure optimization

🏢 About Easebuzz
Easebuzz is a fast-growing fintech company offering plug-and-play payment solutions. With a recent $30M funding round and RBI authorization as a payment aggregator, it’s scaling rapidly across India. The company fosters a culture of openness, ownership, and collaboration, with offices in Pune, Delhi, Mumbai, Kolkata, Bengaluru, and Gurugram.


`, status: "approved", isFeatured: true, requirements: "", submittedDate: new Date().toISOString(), id: "data-engineering-in-easebuzz-at-Pune-India"},



];



// --- End Mock Data ---



const reviewSchema = z.object({
  jobTitle: z.string().min(2, { message: "Job title must be at least 2 characters." }),
  rating: z.coerce.number().min(1, { message: "Please select a rating." }).max(5),
  pros: z.string().min(10, { message: "Please share at least one pro (min 10 characters)." }),
  cons: z.string().min(10, { message: "Please share at least one con (min 10 characters)." }),
});
type ReviewFormValues = z.infer<typeof reviewSchema>;


export default function CompanyProfileAndReviewsPage() {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const params = useParams();
  const router = useRouter();
  const companyId = params.companyId as string;

  const [reviews, setReviews] = useState(() => mockReviews.filter(r => r.companyId === companyId));
  const [companyJobs, setCompanyJobs] = useState<BackendStoredJob[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const company = mockCompanies.find(c => c.id === companyId);
  const averageRating = reviews.length > 0 ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length : 0;

   useEffect(() => {
    async function fetchCompanyJobs() {
      if (!company) return;
      setIsLoadingJobs(true);
      // Combine jobs from DB and mock data to ensure all are available for filtering
      const dbJobs = await getAllJobs();
      const allJobsMap = new Map<string, BackendStoredJob>();
      mockJobsData.forEach(job => allJobsMap.set(job.id, job));
      dbJobs.forEach(job => allJobsMap.set(job.id, job));
      const allAvailableJobs = Array.from(allJobsMap.values());

      const jobsForCompany = allAvailableJobs.filter(
        job => job.companyName.toLowerCase() === company.name.toLowerCase() && job.status === 'approved'
      );
      setCompanyJobs(jobsForCompany);
      setIsLoadingJobs(false);
    }
    fetchCompanyJobs();
  }, [company]);

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { jobTitle: '', rating: 0, pros: '', cons: '' },
  });

  const onSubmit = (data: ReviewFormValues) => {
    setIsSubmitting(true);
    setTimeout(() => {
      const newReview: Review = {
        id: `rev${Date.now()}`,
        companyId: companyId,
        author: currentUser?.displayName || 'Anonymous User',
        submittedAt: new Date().toISOString().split('T')[0],
        ...data,
      };
      setReviews(prev => [newReview, ...prev]);
      toast({
        title: 'Review Submitted!',
        description: 'Thank you for sharing your feedback.',
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };
  
  if (!company) {
    return (
      <div className="container mx-auto py-12 text-center">
        <Info className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-4xl font-bold mb-4 font-headline">Company Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">Sorry, we couldn't find reviews for this company.</p>
        <Button onClick={() => router.push('/reviews')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Companies
        </Button>
      </div>
    );
  }

  const mapBackendJobToJobCard = (backendJob: BackendStoredJob): Job => ({
    id: backendJob.id,
    title: backendJob.jobTitle,
    companyName: backendJob.companyName,
    location: backendJob.location,
    jobType: backendJob.jobType,
    category: backendJob.jobCategory,
    descriptionExcerpt: backendJob.mainDescription,
    postedDate: backendJob.submittedDate,
    salaryRange: backendJob.salaryMin && backendJob.salaryMax ? `$${backendJob.salaryMin/1000}k - $${backendJob.salaryMax/1000}k` : undefined,
    companyLogo: backendJob.companyLogo || company.logoUrl,
    imageHint: 'company logo generic',
    tags: [],
    applyUrl: backendJob.applyUrl,
  });

  return (
    <div className="container mx-auto py-8 max-w-5xl space-y-8">
       <Button variant="outline" onClick={() => router.push('/reviews')} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Companies
      </Button>

      <Card className="shadow-lg rounded-xl overflow-hidden">
        <CardHeader className="p-6 sm:p-8 bg-muted/30">
          <div className="flex flex-col sm:flex-row items-start gap-6">
             <Image
              src={company.logoUrl}
              alt={`${company.name} logo`}
              width={100}
              height={100}
              className="rounded-lg border-2 border-border object-contain flex-shrink-0"
              data-ai-hint={company.imageHint}
            />
            <div className="flex-grow">
              <h1 className="text-3xl sm:text-4xl font-bold font-headline mb-1">{company.name}</h1>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center text-xl font-bold text-amber-500">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={i < Math.round(averageRating) ? "fill-current" : "text-gray-300"} />
                    ))}
                </div>
                <span className="text-lg text-muted-foreground font-semibold">{averageRating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">({reviews.length} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center"><Building className="h-4 w-4 mr-1.5"/>{company.industry}</span>
                <span className="flex items-center"><MapPin className="h-4 w-4 mr-1.5"/>{company.headquarters}</span>
                <Link href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline"><Globe className="h-4 w-4 mr-1.5"/>Website</Link>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 sm:p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold font-headline mb-2">About {company.name}</h2>
            <p className="text-foreground/90">{company.description}</p>
          </section>

          {company.photos.length > 0 && (
            <section>
                <h2 className="text-xl font-semibold font-headline mb-2">Photos</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {company.photos.map((photo, index) => (
                        <Image key={index} src={photo.url} alt={`${company.name} photo ${index + 1}`} width={300} height={200} className="rounded-md object-cover" data-ai-hint={photo.hint} />
                    ))}
                </div>
            </section>
          )}
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold font-headline">Jobs at {company.name}</h2>
            {isLoadingJobs ? (
              <div className="flex items-center justify-center py-10"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
            ) : companyJobs.length > 0 ? (
              <div className="space-y-4">
                {companyJobs.map(job => (
                  <JobCard key={job.id} job={mapBackendJobToJobCard(job)} />
                ))}
                <div className="pt-4 text-center">
                  <Button asChild variant="outline">
                    <Link href="/jobs/search">
                      View All Jobs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">There are currently no open positions listed for {company.name} on TekTunnel.</p>
            )}

            <h2 className="text-2xl font-bold font-headline pt-8">Reviews ({reviews.length})</h2>
            {reviews.length > 0 ? (
                reviews.map(review => (
                    <Card key={review.id} className="shadow-md">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg">{review.jobTitle}</CardTitle>
                                    <CardDescription>by {review.author} on {new Date(review.submittedAt).toLocaleDateString()}</CardDescription>
                                </div>
                                <div className="flex items-center gap-1 text-amber-500">
                                    <span className="font-bold text-sm">{review.rating.toFixed(1)}</span>
                                    <Star className="h-4 w-4 fill-current"/>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div>
                                <h4 className="font-semibold flex items-center text-green-600"><ThumbsUp className="h-4 w-4 mr-1.5"/>Pros</h4>
                                <p className="text-sm text-muted-foreground pl-6">{review.pros}</p>
                            </div>
                             <div>
                                <h4 className="font-semibold flex items-center text-red-600"><ThumbsDown className="h-4 w-4 mr-1.5"/>Cons</h4>
                                <p className="text-sm text-muted-foreground pl-6">{review.cons}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <p className="text-muted-foreground">No reviews yet for {company.name}. Be the first to write one!</p>
            )}
        </div>

        <div className="lg:sticky top-24 self-start">
            <Card className="shadow-lg rounded-xl">
                 <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center">
                        <MessageSquare className="mr-2 h-6 w-6 text-primary" />
                        Write a Review
                    </CardTitle>
                    <CardDescription>Share your experience working at {company.name}.</CardDescription>
                </CardHeader>
                <CardContent>
                    {!currentUser ? (
                        <Alert>
                            <Info className="h-4 w-4" />
                            <AlertTitle>Login Required</AlertTitle>
                            <AlertDescription>
                                You must be logged in to submit a review. <br/>
                                <Button variant="link" asChild className="p-0 h-auto"><Link href="/job-seekers/auth">Login or Sign Up</Link></Button>
                            </AlertDescription>
                        </Alert>
                    ) : (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField control={form.control} name="rating" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Overall Rating</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center gap-1">
                                                {[1,2,3,4,5].map(star => (
                                                    <Star
                                                        key={star}
                                                        className={`h-6 w-6 cursor-pointer transition-colors ${field.value >= star ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                                                        onClick={() => field.onChange(star)}
                                                    />
                                                ))}
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                <FormField control={form.control} name="jobTitle" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your Job Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., Software Engineer" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                 <FormField control={form.control} name="pros" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Pros</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="What did you like about working here?" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                 <FormField control={form.control} name="cons" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Cons</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="What could be improved?" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                     {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Submit Anonymously
                                </Button>
                            </form>
                        </Form>
                    )}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}
