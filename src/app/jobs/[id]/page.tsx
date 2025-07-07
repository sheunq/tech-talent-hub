
import type { Metadata, ResolvingMetadata } from 'next';
import { JobDetailPageContent } from '@/components/jobs/JobDetailPageContent';
import type { Job } from '@/components/jobs/JobCard';
import type { BackendStoredJob } from '@/lib/schemas/job';
import { getAllJobs } from '@/services/jobDbService';

// Mock data to be used if the database is empty or a specific mock job is requested
const mockJobsData: BackendStoredJob[] = [

  {
  applyUrl: "https://jobs.lever.co/brillio-2/a584af2c-c119-46b4-a1c0-3e3c4864671c",
  companyName: "Brillio",
  companyLogo: "/images/Brillio.png",
  location: "United States",
  jobTitle: "Azure Architect - R01552334",
  jobType: "Hybrid",
  jobCategory: "Architect",
  mainDescription: `Here’s a structured and professional summary of the job posting for the Azure Architect – R01552334 role at Brillio:

Job Title: Azure Architect
Location: Maryland, United States (Hybrid – DMV area preferred)
Department: Data and AI – Data Engineering
Employment Type: Full-Time (No sponsorship available)

🧠 Role Overview
Brillio is seeking a seasoned Azure Data Architect to lead the design and deployment of scalable, secure, and high-performance data solutions on Microsoft Azure. This role is ideal for a hands-on architect with deep technical expertise and a passion for driving enterprise-wide data initiatives.

🔧 Key Responsibilities
- Architect and implement end-to-end data solutions using Azure services (Synapse, ADF, ADLS Gen2, SQL DB, Azure Fabric)
- Design data models, ETL/ELT pipelines, and data warehouses for analytics and reporting
- Ensure compliance with data governance, security, and privacy standards (e.g., HIPAA, GDPR)
- Collaborate with stakeholders to translate business needs into scalable data architectures
- Mentor junior engineers and promote a culture of innovation and quality
- Serve as SME on Azure data architecture and recommend tools and patterns

✅ Required Qualifications
- 10–13 years of experience in data architecture and engineering
- 5+ years of hands-on experience with Microsoft Azure data platforms
- Expertise in Azure Synapse, ADF, ADLS Gen2, Azure SQL, Azure Fabric
- Strong knowledge of data modeling, big data tools (e.g., Spark, Delta Lake), and ETL/ELT design
- Experience with data security, access control, and compliance frameworks
- Excellent communication and stakeholder management skills
- Proven success in leading architecture design and delivering enterprise-scale solutions

💰 Compensation
- Salary Range: $140,000 – $150,000 USD annually

🌍 About Brillio
Brillio is a fast-growing digital technology services company known for its innovation, client-centric culture, and award-winning workplace. With a focus on cutting-edge technologies and digital transformation, Brillio empowers Fortune 1000 clients to turn disruption into opportunity.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "azure-architect-r01552334-in-brillio-at-united-states-united-states"
}
,




{
  applyUrl: "https://jobs.lever.co/lendbuzz/0cfe0005-d07a-402c-bf14-6e306cd700e2",
  companyName: "lendbuzz",
  companyLogo: "/images/lendbuzz.png",
  location: "Tel Aviv, Israel",
  jobTitle: "Application Security Engineer",
  jobType: "Hybrid",
  jobCategory: "Application",
  mainDescription: `Job Title: Application Security Engineer
Location: Tel Aviv, Israel (Hybrid)
Employment Type: Full-Time

🧠 Role Overview
Lendbuzz is seeking an Application Security Engineer to help secure its financial technology products. You’ll work closely with development teams to embed security into the software development lifecycle, conduct assessments, and implement robust defenses against modern threats.

🔐 Key Responsibilities
- Integrate security controls into the SDLC
- Perform code reviews, vulnerability scans, and penetration testing
- Design solutions to mitigate threats like XSS, SQL injection, and auth bypass
- Conduct threat modeling and architecture reviews
- Develop secure coding standards and deliver developer training
- Monitor and respond to security incidents
- Collaborate with cross-functional teams to align security with product goals

✅ Qualifications
- Bachelor’s in Computer Science, Information Security, or related field
- 3+ years in application security, ideally in a product-focused company
- Strong grasp of OWASP Top 10, SSL/TLS, OAuth
- Hands-on with tools like Burp Suite, OWASP ZAP, Nessus
- Proficient in Ruby, Python, or JavaScript
- Familiarity with cloud security (AWS, Azure, GCP)
- Excellent communication skills for both technical and non-technical audiences
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "application-security-engineer-in-lendbuzz-at-Tel-Aviv-Israel"
}
, 

 


{
  applyUrl: "https://job-boards.greenhouse.io/tripadvisor/jobs/7044945",
  companyName: "Tripadvisor",
  companyLogo: "/images/Tripadvisor.png",
  location: "Poland",
  jobTitle: "ML Operations Engineer II (Viator)",
  jobType: "Hybrid",
  jobCategory: "Engineer",
  mainDescription: `Here’s a polished and structured summary of the job posting for the ML Operations Engineer II (Viator) role in Kraków, Poland:

Job Title: ML Operations Engineer II
Location: Kraków, Poland (Hybrid)
Department: Engineering – Machine Learning Platform
Employment Type: Full-Time

🧠 Role Overview
Viator, a Tripadvisor company, is expanding its Machine Learning Platform to meet growing demand. As an ML Ops Engineer, you’ll empower data scientists by building scalable infrastructure and tools that support the full ML lifecycle—from development to deployment and monitoring.

🔧 Key Responsibilities
- Build and maintain infrastructure for batch, real-time, and pre-computed ML models
- Support AWS cloud migration and adopt modern services
- Develop tools that streamline ML workflows and improve productivity
- Collaborate across UI, backend, big data, and CI/CD layers
- Foster innovation by proposing and implementing new ideas in ML Ops

✅ Required Qualifications
- 2+ years of experience in ML engineering or ML Ops
- Hands-on experience with AWS
- Proficiency with Infrastructure-as-Code tools (Terraform, CloudFormation)
- Familiarity with Python, Spark, Docker, Kubernetes
- Experience with CI/CD pipelines and cross-functional collaboration
- Strong problem-solving and communication skills

🎁 Perks & Benefits
- Competitive salary, bonus, and equity
- Flexible hybrid work model
- Tuition assistance and lifestyle benefit
- Travel discounts and donation matching
- Comprehensive health coverage and employee assistance programs

🌍 About Viator
Viator is the world’s leading marketplace for travel experiences, offering over 300,000 activities. With a mission to make every day extraordinary, Viator empowers travelers with flexibility, last-minute availability, and unforgettable memories.

You can view the full listing and apply directly on Tripadvisor’s careers page.
Let me know if you’d like help tailoring your résumé or prepping for the interview—I’d be happy to assist!
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "ml-operations-engineer-ii-viator-in-tripadvisor-at-poland-poland"
}
, 




{
  applyUrl: "https://jobs.lever.co/fullscript/351b7f3e-1090-42ea-ad10-dbbc59d9a11f",
  companyName: "Fullscript",
  companyLogo: "/images/Fullscript.png",
  location: "Canada",
  jobTitle: "Senior Software Developer – Lab Integrations",
  jobType: "Remote",
  jobCategory: "Software",
  mainDescription: `Job Title: Senior Software Developer – Lab Integrations
Location: Remote (Canada)  Toronto, ON  Ottawa, ON
Department: Engineering
Employment Type: Full-Time

🧠 Role Overview
Fullscript is seeking a Senior Software Developer to lead the development of lab integrations and data pipelines that power its Labs Product. This high-autonomy role is ideal for engineers who thrive on ownership, quality, and building scalable systems that improve healthcare outcomes.

🔧 Key Responsibilities
- Design, build, test, and ship new integrations with lab partners
- Develop scalable data pipelines for ingesting and processing lab results
- Architect storage and service layers for lab operations
- Review code, mentor peers, and advocate for high-quality development practices
- Contribute to architectural decisions and communicate them effectively

✅ Ideal Candidate Profile
- Passionate about software craftsmanship and user experience
- Strong bias toward action and high-leverage problem solving
- Experience with Ruby, Python, Node.js, or similar languages
- Enjoys mentoring and collaborating with junior engineers
- Lifelong learner with curiosity and initiative

🌟 Bonus Skills
- Experience scaling high-traffic web applications
- Familiarity with AI tooling for development or product features
- Knowledge of healthcare data standards (e.g., HL7)
- Experience with React, GraphQL, or modern JavaScript frameworks

🎁 Benefits & Perks
- Flexible PTO and competitive compensation
- RRSP match and stock options
- Customizable health benefits and HSA
- Discounts on wellness products
- Training budget and continuous learning opportunities
- Remote-first flexibility with hybrid options

🌍 Why Join Fullscript
Fullscript is on a mission to make healthcare whole by connecting practitioners and patients through evidence-based tools and diagnostics. With a culture rooted in innovation, mentorship, and balance, Fullscript offers a meaningful opportunity to build impactful technology in a supportive environment.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-software-developer-–-lab-integrations-in-fullscript-at-canada-canada"
}
, 




{
  applyUrl: "https://www.atlassian.com/company/careers/details/20312",
  companyName: "atlassian",
  companyLogo: "/images/atlassian.png",
  location: "Australia",
  jobTitle: "Senior Principal Software Engineer - Kubernetes Compute",
  jobType: "Remote",
  jobCategory: "Software",
  mainDescription: `Job Title: Senior Principal Software Engineer – Kubernetes Compute
Location: Remote – Sydney, Australia or Auckland, New Zealand
Department: Engineering
Employment Type: Full-Time

🧠 Role Overview
Atlassian is seeking a deeply experienced Senior Principal Engineer to lead the technical direction of its Central Compute organization. This role focuses on designing scalable, resilient compute infrastructure using Kubernetes and cloud-native technologies. You’ll collaborate across departments, mentor engineers, and drive architectural excellence in a distributed-first environment.

🔧 Key Responsibilities
- Define technical direction and OKRs for Central Compute
- Lead complex architecture and implementation projects across teams
- Champion adoption of new technologies and methodologies
- Drive company-wide initiatives and cross-functional collaboration
- Own outcomes of critical microservices-based projects
- Promote best practices for scalability, reliability, and performance
- Improve developer productivity and operational excellence
- Mentor engineers and contribute to a culture of innovation

✅ Required Qualifications
- 10+ years of experience building enterprise-grade platforms
- Expertise in containerized and serverless compute technologies
- Proven ability to resolve complex technical issues at scale
- Experience with sharding, cell-based architecture, and vendor limitations
- Strong cross-organizational collaboration and leadership skills
- Track record of designing infrastructure used by hundreds of service owners

🌟 Preferred Skills
- Experience with AWS or other public cloud platforms
- Proficiency with Kubernetes and service mesh technologies
- Familiarity with cloud storage, networking, and security
- Passion for driving architectural strategy across large engineering orgs

🎁 Benefits & Perks
- Flexible work model (office, remote, or hybrid)
- Health and wellbeing resources
- Paid volunteer days
- Global distributed-first culture
More details: Atlassian Perks & Benefits

🌍 About Atlassian
Atlassian builds tools that help teams collaborate and unleash their full potential. With a distributed-first culture and a commitment to diversity, Atlassian empowers employees to work where they thrive and make a global impact.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-principal-software-engineer-kubernetes-compute-in-atlassian-at-australia-australia"
}
,


{
  applyUrl: "https://www.atlassian.com/company/careers/details/20504",
  companyName: "atlassian",
  companyLogo: "/images/atlassian.png",
  location: "Poland",
  jobTitle: "Fullstack Engineer",
  jobType: "Remote",
  jobCategory: "Engineer",
  mainDescription: `Here’s a structured and professional summary of the job posting for the Fullstack Engineer role at Atlassian in Poland:

Job Title: Fullstack Engineer
Location: Gdańsk, Poland (Remote or Onsite)
Employment Type: Full-Time

🧠 Role Overview
Atlassian is looking for a Fullstack Engineer to join the Jira Align team. You’ll help build features that connect business and software development teams, focusing on performance, scalability, and security for enterprise-scale customers. This role offers flexibility to work remotely within Poland or onsite in Gdańsk, with up to 90 days of remote work abroad per year.

🔧 Key Responsibilities
- Develop REST APIs and customer-facing React components
- Configure backend monitoring and build CI/CD pipelines
- Integrate with content management systems
- Build reliable, scalable features and services

✅ Required Qualifications
- 4+ years of experience with JavaScript/TypeScript (e.g., React, Node, ES6)
- Experience or interest in .NET Framework (C#)
- Bachelor’s or Master’s in Computer Science or equivalent experience
- Experience with REST APIs, Git, HTML/Sass/CSS, and UX collaboration
- Familiarity with server tech (Docker, NGINX, Express/Node)
- Experience with enterprise CMS and cloud platforms (e.g., AWS)
- Bonus: Java, Freemarker, or Rust experience

🌟 Preferred Skills
- DevOps experience with CI/CD tools (e.g., Octopus)
- Familiarity with AWS fundamentals (VPC, EC2)

💰 Compensation
- Salary Range: 184,500 – 246,000 PLN annually
- Includes bonuses, equity, and benefits

🎁 Benefits & Perks
- Health and wellbeing resources
- Paid volunteer days
- Flexible work arrangements
- Global distributed-first culture
More details: Atlassian Perks & Benefits

You can view the full listing and apply directly on Atlassian’s careers page.
Let me know if you’d like help tailoring your résumé or prepping for the interview—I’d be happy to assist!
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "fullstack-engineer-in-atlassian-at-poland-poland"
}


, 

{
  applyUrl: "https://www.fanatee.com/openings/product-analyst-ai-expansion",
  companyName: "fanatee",
  companyLogo: "/images/fanatee.png",
  location: "São Paulo, Brazil",
  jobTitle: "PRODUCT ANALYST - AI/EXPANSION",
  jobType: "Hybrid",
  jobCategory: "AI",
  mainDescription: `Job Title: Product Analyst – AI/Expansion
Location: Hybrid – São Paulo, Brazil
Employment Type: Full-Time

🧠 Role Overview
Fanatee is seeking a curious, hands-on, and analytical Product Analyst to support the growth and content strategy of its flagship word game, Stop. You’ll work closely with the Head of Product to improve content quality, leverage AI tools, and identify opportunities for global expansion.

🔧 Key Responsibilities
Content Excellence
- Support content development and continuous improvement
- Collaborate with editors and freelancers to ensure quality and consistency
- Enhance content creation and review processes
- Use AI tools to generate and validate game content
Data & Insights
- Analyze content and gameplay performance metrics
- Identify opportunities based on player behavior
- Deliver actionable insights to guide product strategy
Production Organization
- Help organize workflows and execute the product roadmap
- Facilitate communication across teams
- Remove blockers and improve operational efficiency

✅ Requirements
- Experience in product or project management (preferably in gaming)
- Strong analytical and problem-solving skills
- Familiarity with AI tools and their applications
- Excellent communication skills
- Fluency in English
- Passion for word games, especially Stop
- Bachelor’s degree in Business, Economics, Engineering, or related field

🌟 Preferred Skills
- Python and SQL for data analysis
- Experience with APIs and HTTP requests
- Data cleanup and database handling
- Prompt engineering and generative AI knowledge

🎁 What Fanatee Offers
- Competitive salary and profit sharing
- Flexible benefits and health/dental insurance
- Life insurance and career development support
- Casual, creative work environment with snacks and relaxation spaces

🌍 About Fanatee
Founded in 2013, Fanatee is a mobile gaming company with over 300 million downloads worldwide. With a focus on quality and innovation, the team is passionate about building games that are both fun and impactful.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "product-analyst-ai-expansion-in-fanatee-at-foster-city-anywhere"
}
, 

{
  applyUrl: "https://www.fanatee.com/openings/product-business-analyst",
  companyName: "fanatee",
  companyLogo: "/images/fanatee.png",
  location: "São Paulo, Brazil",
  jobTitle: "PRODUCT BUSINESS ANALYST",
  jobType: "Hybrid",
  jobCategory: "General",
  mainDescription: `Job Title: Product Business Analyst
Location: São Paulo, Brazil (Hybrid)
Employment Type: Full-Time

🧠 Role Overview
Fanatee is seeking a data-savvy and strategic Product Business Analyst to help scale and optimize the performance of its mobile games. You’ll work cross-functionally with Engineering, Product, and BI teams to uncover insights, shape product strategies, and drive growth through data-informed decisions.

🔧 Key Responsibilities
- Analyze large datasets to optimize user lifetime value (LTV) and acquisition funnels
- Develop growth roadmaps and coordinate cross-team resources
- Translate data insights into measurable product strategies and features
- Improve operational efficiency through process enhancements
- Ensure data quality via monitoring and alerting systems
- Optimize data models for performance and scalability
- Research and implement new tools and technologies for data analysis
- Build dashboards using Tableau, AWS Quicksight, or Power BI

✅ Required Qualifications
- 3+ years of experience in management, consulting, finance, or tech
- Strong SQL skills and experience with Amazon Athena, Oracle, or Hadoop
- Proficiency in Python (preferred)
- Experience with high-volume, multi-source datasets
- Strong communication and problem-solving skills
- Bachelor’s or Master’s in Business, Economics, Engineering, or Computer Science
- Advanced English proficiency

🌟 Preferred Skills
- Experience with machine learning, statistics, or predictive modeling
- Familiarity with APIs and data transformation workflows
- Experience working on global products or in international teams

🎁 What Fanatee Offers
- Competitive compensation
- Meal and transportation benefits (VR + VT)
- Health and dental insurance
- Profit sharing (PLR)
- Relaxed, creative work environment with snacks and lounge space

🌍 About Fanatee
Founded in 2013, Fanatee is a mobile gaming company with over 300 million downloads worldwide. The team is passionate about turning great ideas into global hits and fostering a culture of innovation, collaboration, and fun.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "product-business-analyst-in-fanatee-at-foster-city-anywhere"
}
,


{
  applyUrl: "https://nordcloud-career.breezy.hr/p/ef74c8b93d9201-aws-cloud-engineer-architect",
  companyName: "nordcloud",
  companyLogo: "/images/nordcloud.png",
  location: "Gothenburg, Sweden",
  jobTitle: "AWS Cloud Engineer / Architect",
  jobType: "Hybrid",
  jobCategory: "Cloud",
  mainDescription: `Job Title: AWS Cloud Engineer / Architect
Location: Gothenburg, Sweden (Hybrid – Remote and On-Site)
Department: Professional Services
Employment Type: Full-Time

🧠 Role Overview
Nordcloud, an IBM company, is seeking a proactive and passionate AWS Cloud Engineer / Architect to lead customer transformation journeys. You’ll work on diverse cloud projects—from infrastructure builds to big data solutions—while building long-term, high-trust relationships with enterprise clients.

🔧 Key Responsibilities
- Lead customer projects involving infrastructure builds, migrations, audits, and big data
- Implement configuration management and automation solutions
- Deliver technical workshops and strategic recommendations
- Act as a trusted advisor and co-manage customer roadmaps with the sales team
- Follow projects end-to-end, from design to release
- Travel within Sweden and Europe as needed

✅ Required Qualifications
- 3+ years of hands-on AWS experience (Azure or GCP is a plus)
- Proficiency with Infrastructure-as-Code tools (Terraform, CloudFormation)
- Scripting and automation mindset (Python, Bash, AWS CLI)
- DevOps/DevSecOps or Platform Engineering experience
- Fluent in English and Swedish

🌟 Preferred Skills
- Familiarity with on-prem technologies (VMware, OpenStack, Hyper-V)
- Experience with containers (Kubernetes, ECS, Docker)
- CI/CD pipeline development
- Configuration management tools (Ansible, Chef, Puppet)

🎁 What Nordcloud Offers
- Individual training budget and certification support
- Flexible hours and remote work options
- Laptop and equipment of your choice
- Six weeks of vacation, pension plan, private healthcare (EuroAccident)
- Wellness benefits (Friskvårdsbidrag) via benify.se
- Collective bargaining agreement (Almegas Kollektivavtal – Tech Sverige)

🌍 About Nordcloud
Nordcloud is a European cloud leader with over 1300 employees across 10 countries. As a triple-certified partner (AWS, Azure, GCP), Nordcloud delivers cloud-native solutions and has completed over 1000 successful cloud projects. Recognized by Gartner as a “Visionary” in Public Cloud IT Services.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "aws-cloud-engineer-architect-in-nordcloud-at-Gothenburg-Sweden"
}
, 

{
  applyUrl: "https://nordcloud-career.breezy.hr/p/ef74c8b93d9201-aws-cloud-engineer-architect",
  companyName: "nordcloud",
  companyLogo: "/images/nordcloud.png",
  location: "Unite States",
  jobTitle: "AWS Cloud Engineer / Architect",
  jobType: "Remote",
  jobCategory: "Cloud",
  mainDescription: `Job Title: Senior Software Engineer I, Security
Location: Remote – USA
Employment Type: Full-Time

🧠 Role Overview
Dandy is seeking a Senior Security Engineer to join its platform engineering team and help build the security foundation for its dental technology platform. This is a high-impact role focused on securing applications, infrastructure, and customer data while shaping the company’s security posture from the ground up.

🔧 Key Responsibilities
- Design secure application architectures and influence feature development
- Guide engineering teams on secure coding, API security, and data protection
- Lead vulnerability management and remediation efforts
- Select and integrate security tools (e.g., SAST, DAST, SCA, container scanning)
- Develop and execute incident response processes and playbooks
- Implement security controls across GCP environments
- Promote a security-first culture through mentoring and education

✅ Required Qualifications
- 5+ years of hands-on cybersecurity experience, especially in application security
- Deep knowledge of web and API security, threat modeling, and secure architecture
- Experience collaborating with engineering teams on secure development practices
- Proven track record in vulnerability triage and remediation
- Familiarity with security tooling and infrastructure-level controls
- Strong incident response and forensic analysis skills
- Excellent communication and cross-functional collaboration abilities

🌟 Bonus Points
- Experience with PHI and data protection regulations
- DevSecOps and CI/CD security integration
- Scripting/automation skills (Python, Bash)
- Technical certifications (e.g., OSCP, GWAPT, GCSA, CISSP, GCP Security Engineer)
- Experience as an early security hire in a scaling tech company

💰 Compensation & Benefits
- Salary Range: $176,800 – $208,000 USD
- Includes equity and bonus opportunities
- Comprehensive benefits: healthcare, dental, mental health, parental support, retirement plans, and generous PTO

🌍 About Dandy
Dandy is revolutionizing the $200B dental industry by building a modern operating system for dental practices. Backed by top-tier investors, Dandy empowers clinicians with cutting-edge technology and world-class support to deliver better care.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "aws-cloud-engineer-architect-in-nordcloud-at-foster-city-anywhere"
}
,



{
  applyUrl: "https://www.meetdandy.com/careers/job/?ashby_jid=63580a15-d130-4ecf-8a44-21c7b03313bb",
  companyName: "dandy",
  companyLogo: "/images/dandy.png",
  location: "Canada",
  jobTitle: "Senior Data Analyst - Revenue",
  jobType: "Remote",
  jobCategory: "Analyst",
  mainDescription: `Job Title: Senior Data Analyst – Revenue
Location: Remote – Canada
Employment Type: Full-Time

🧠 Role Overview
Dandy is seeking a Senior Data Analyst to support its Marketing, Sales, and Account Management teams. This highly cross-functional role focuses on using data to drive customer acquisition, retention, and revenue growth. You’ll work autonomously to uncover insights, define KPIs, and shape strategies that make Dandy’s services more compelling and effective.

🔧 Key Responsibilities
- Analyze customer lifecycle data to optimize acquisition, retention, and recurring revenue
- Define KPIs, dashboards, and measurement frameworks for internal teams
- Conduct ad hoc analysis and build self-service BI tools (e.g., Looker)
- Design and execute A/B experiments to improve outcomes
- Act as a strategic thought partner to cross-functional stakeholders
- Mentor junior analysts and contribute to team development

✅ Required Qualifications
- 4+ years in revenue, retention, or customer lifecycle analytics (preferably B2B)
- BA/BS in a quantitative or behavioral science field
- Proficiency in SQL and Python
- Strong communication and storytelling skills with data
- Ability to work independently and navigate ambiguity
- Critical thinking and statistical analysis expertise

🌟 Bonus Points
- Experience with B2B sales pipeline and revenue data (e.g., Shopify, Uber, Instacart)
- Empathy for dental professionals and healthcare customers
- Background in causal inference or predictive modeling
- Familiarity with Looker, Hex, and dbt
- Experience in early-stage or high-growth companies

🎁 Benefits & Perks
- Comprehensive healthcare, dental, and mental health support
- Parental planning resources and retirement savings options
- Generous paid time off
- Inclusive, accessible workplace culture

🌍 About Dandy
Dandy is a fast-growing dental technology company backed by top-tier investors. With a mission to modernize the $200B dental industry, Dandy is building the operating system for dental offices worldwide—empowering clinicians with innovation and support to deliver better care.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-data-analyst-revenue-in-dandy-at-Canada"
}
, 


{
  applyUrl: "https://www.meetdandy.com/careers/job/?ashby_jid=94d85680-7c02-4b76-af3f-d58d1d0b35d0",
  companyName: "dandy",
  companyLogo: "/images/dandy.png",
  location: "Brazil",
  jobTitle: "Software Engineer II, DevEx Engineer (Brazil)",
  jobType: "Remote",
  jobCategory: "Software",
  mainDescription: `Job Title: Software Engineer II – DevEx Engineer
Location: Remote – Brazil
Employment Type: Full-Time

🧠 Role Overview
Dandy is seeking a Software Engineer II to join its Platform team, focused on improving developer experience (DevEx). You’ll build internal tools, evolve CI/CD systems, and streamline engineering workflows to help teams ship high-quality software faster and more confidently.

🔧 Key Responsibilities
- Enhance CI/CD platforms for faster, more reliable feedback loops
- Build and maintain internal tooling, build systems, and dev environments
- Integrate AI-powered tools to boost developer productivity
- Lead multi-month projects that improve engineering efficiency
- Collaborate with product teams to identify and solve workflow pain points
- Champion best practices in development, testing, and deployment
- Contribute to roadmap planning and strategic DevEx initiatives

✅ Required Qualifications
- 3+ years of software engineering experience, with a focus on DevEx, infrastructure, or CI/CD
- Proficiency with CI/CD tools (e.g., BuildKite, GitHub Actions, CircleCI)
- Hands-on experience with cloud platforms (GCP, AWS, or Azure) and containerization (Docker, Kubernetes)
- Skilled in at least one scripting or programming language (Python, Go, Bash)
- Strong collaboration and communication skills
- Passion for improving developer workflows and team productivity

🌟 Bonus Points
- Experience building internal developer platforms or portals
- Familiarity with Infrastructure as Code (Terraform, Pulumi)
- Knowledge of observability tools (Chronosphere, Prometheus, Grafana)

🎁 Benefits & Perks
- Comprehensive healthcare, dental, and mental health support
- Parental planning resources and retirement savings options
- Generous paid time off
- Inclusive, accessible, and supportive work culture

🌍 About Dandy
Dandy is a fast-growing dental technology company backed by top-tier investors. With a mission to modernize the $200B dental industry, Dandy is building the operating system for dental offices worldwide—empowering clinicians with innovation and support to deliver better care.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "software-engineer-ii-devex-engineer-brazil-in-dandy-at-brazil-brazil"
}
,


{
  applyUrl: "https://www.meetdandy.com/careers/job/?ashby_jid=9bf540a2-db13-428c-a7d6-1c08daa9a902",
  companyName: "dandy",
  companyLogo: "/images/dandy.png",
  location: "United States",
  jobTitle: "Senior Software Engineer II, Production Management",
  jobType: "Remote",
  jobCategory: "Product",
  mainDescription: `Job Title: Senior Software Engineer II – Production Management
Location: Remote – USA
Employment Type: Full-Time

🧠 Role Overview
Dandy is seeking a seasoned full stack engineer to help build and scale its custom manufacturing platform. This role focuses on optimizing the supply chain stack—planning, routing, and delivering dental products—by developing secure, performant, and scalable software solutions.

🔧 Key Responsibilities
- Build and improve features across Dandy’s production management systems
- Develop order routing logic and real-time order tracking capabilities
- Collaborate with manufacturing automation teams (e.g., CAD → CAM workflows)
- Design systems to balance demand and optimize production workloads
- Partner with product and engineering teams to maintain high-quality standards
- Own projects from concept through execution in a fast-paced, agile environment

✅ Required Qualifications
- 6+ years of full stack software engineering experience
- Strong background in backend asynchronous systems
- Experience with logistics, operations, or large-scale production systems
- Proficiency in TypeScript, Node.js, NestJS, React/Redux, PostgreSQL, GCP, GraphQL
- Ability to work independently and communicate complex ideas clearly
- Experience with performance tuning and system optimization
- Comfortable in iterative, agile development environments

🌟 Bonus Points
- Experience with TypeScript
- Background in venture-backed startups during hyper-growth phases

💰 Compensation & Benefits
- Salary Range: $201,500 – $237,000 USD
- Includes equity options
- Comprehensive benefits: healthcare, dental, mental health, parental support, retirement plans, and generous PTO

🌍 About Dandy
Dandy is modernizing the $200B dental industry by building a global operating system for dental practices. Backed by top-tier investors, Dandy empowers clinicians with cutting-edge technology and world-class support to deliver better care.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-software-engineer-ii-production-management-in-dandy-at-United-States"
}
, 


{
  applyUrl: "https://www.meetdandy.com/careers/job/?ashby_jid=eeee2f87-aa55-4f2c-a532-c1d350c42f48",
  companyName: "dandy",
  companyLogo: "/images/dandy.png",
  location: "Brazil",
  jobTitle: "Senior Software Engineer II, Practice Engagement (Brazil)",
  jobType: "Remote",
  jobCategory: "Software",
  mainDescription: `Job Title: Senior Software Engineer II – Practice Engagement
Location: Remote – Brazil
Employment Type: Full-Time

🧠 Role Overview
Dandy is seeking a seasoned software engineer to join its Practice Engagement team, which is redefining how dentists interact with dental labs. You’ll help build innovative tools and services that streamline clinical workflows, reduce friction, and elevate the service experience for dental professionals.

🔧 Key Responsibilities
- Collaborate with engineers, designers, and product managers to develop new features and products
- Own problems end-to-end, from UX and data modeling to scalability and metrics
- Proactively improve team processes, codebases, and engineering best practices
- Work with a modern tech stack: TypeScript, React, GraphQL, Node.js, and PostgreSQL

✅ Required Qualifications
- 8+ years of experience as a software engineer
- Proficiency with modern web frameworks and tooling (e.g., TypeScript, React, Apollo, Storybook, Webpack)
- Strong communication and interpersonal skills
- Self-directed with a track record of delivering impactful solutions autonomously
- Commitment to high engineering standards and collaborative development

🎁 Benefits & Perks
- Comprehensive healthcare, dental, and mental health support
- Parental planning resources and retirement savings options
- Generous paid time off
- Inclusive, accessible, and supportive work culture

🌍 About Dandy
Dandy is a fast-growing dental technology company backed by top-tier investors. With a mission to modernize the $200B dental industry, Dandy is building the operating system for dental offices worldwide—empowering clinicians with innovation and support to deliver better care.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-software-engineer-ii-practice-engagement-brazil-in-dandy-at-brazil-brazil"
}
,




{
  applyUrl: "https://www.meetdandy.com/careers/job/?ashby_jid=eeee2f87-aa55-4f2c-a532-c1d350c42f48",
  companyName: "dandy",
  companyLogo: "/images/dandy.png",
  location: "Brazil",
  jobTitle: "Senior Software Engineer II, Practice Engagement (Brazil)",
  jobType: "Remote",
  jobCategory: "Software",
  mainDescription: `Job Title: Senior Software Engineer I – Infrastructure
Location: Remote – Brazil
Employment Type: Full-Time

🧠 Role Overview
Dandy is seeking a skilled infrastructure engineer to join its Platform team. This role focuses on building and maintaining the cloud infrastructure, CI/CD systems, and developer tooling that power Dandy’s engineering organization. You’ll play a key role in improving developer productivity, system reliability, and security.

🔧 Key Responsibilities
- Evolve CI/CD platforms with a focus on automation and security
- Design, build, and maintain core infrastructure on Google Cloud Platform (GCP)
- Manage Kubernetes-based container orchestration systems
- Implement Infrastructure as Code (IaC) using tools like Terraform or Pulumi
- Lead multi-month infrastructure projects to improve system performance and stability
- Collaborate with engineering teams to support their infrastructure needs
- Champion best practices in cloud security and system reliability
- Contribute to roadmap planning and identify high-impact improvements

✅ Required Qualifications
- 5+ years of experience in backend, infrastructure, or SRE roles
- Deep hands-on experience with GCP, AWS, or Azure
- Proficiency with Docker, Kubernetes, and IaC tools (Terraform, Pulumi)
- Strong understanding of CI/CD systems (e.g., BuildKite, GitHub Actions, CircleCI)
- Skilled in at least one scripting or programming language (Go, Python, Bash)
- Excellent problem-solving and communication skills
- Collaborative mindset and passion for scalable systems

🌟 Bonus Points
- Experience building internal developer platforms or portals
- Familiarity with observability tools like Chronosphere, Prometheus, or Grafana

🎁 Benefits & Perks
- Comprehensive healthcare, dental, and mental health support
- Parental planning resources and retirement savings options
- Generous paid time off
- Inclusive and accessible workplace culture

🌍 About Dandy
Dandy is a fast-growing dental technology company backed by top-tier investors. With a mission to modernize the $200B dental industry, Dandy is building the operating system for dental offices worldwide—empowering clinicians with innovation and support to deliver better care.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-software-engineer-ii-practice-engagement-brazil-in-dandy-at-brazil-brazil"
}
,


{
  applyUrl: "https://jobs.lever.co/xero/2b9983d4-50d8-4526-81b2-15879fd152b6",
  companyName: "xero",
  companyLogo: "/images/xero.png",
  location: "Seattle",
  jobTitle: "Site Reliability Engineer",
  jobType: "Hybrid",
  jobCategory: "Engineer",
  mainDescription: `Job Title: Site Reliability Engineer
Location: Hybrid – San Mateo, CA / Seattle, WA / Denver, CO
Department: Product Engineering – Site Reliability
Employment Type: Full-Time, Permanent

🧠 Role Overview
Xero is seeking a technically skilled Site Reliability Engineer (SRE) to join its Product SRE team. You’ll be embedded within a product team to drive reliability, observability, and performance across Xero’s SaaS platform. This role is ideal for engineers passionate about automation, incident response, and building high-performing systems.

🔧 Key Responsibilities
- Deliver day-to-day reliability improvements within a dedicated product SRE team
- Implement observability best practices and ensure rapid detection of issues
- Build long-term relationships with product teams to improve system reliability
- Promote an “automation-first” culture and drive quality delivery
- Contribute to error budget practices and SLA/SLO adherence
- Provide training and mentorship on reliability standards
- Monitor and report on SRE quality metrics and continuous improvement

✅ Required Qualifications
- Strong hands-on SRE and engineering background
- Experience mentoring SRE teams in fast-paced environments
- Deep understanding of cloud platforms (AWS, Azure, GCP)
- Proficiency in one or more programming languages (e.g., C#, JavaScript, Java, Python)
- Familiarity with infrastructure-as-code tools (e.g., Terraform, CloudFormation)
- Experience with observability tools and distributed systems monitoring
- Agile development experience with CI/CD practices
- Strong communication and incident response skills

💰 Compensation
- Salary Range: $150,000 – $185,000 USD annually

🎁 Benefits & Perks
- Generous paid leave and wellness days
- Comprehensive medical, dental, vision, and disability insurance
- 401(k) matching and employee share plan
- Paid parental leave (26 weeks for primary caregivers)
- Fertility and family planning support
- Mental health resources and employee assistance program
- Flexible working and career development opportunities

🌍 About Xero
Xero is a global SaaS company helping small businesses thrive by automating tasks, surfacing insights, and connecting them with the right tools and advisors. With a human-first culture and a strong commitment to diversity and inclusion, Xero empowers its teams to do the best work of their lives.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "site-reliability-engineer-in-xero-at-seattle-united-states"
}

, 

{
  applyUrl: "https://jobs.lever.co/xero/a36c6768-5da3-4cf9-ad31-d315dc689c36",
  companyName: "xero",
  companyLogo: "/images/xero.png",
  location: "Copenhagen, Denmark",
  jobTitle: "Senior Data Analyst",
  jobType: "Hybrid",
  jobCategory: "Analyst",
  mainDescription: `Job Title: Senior Data Analyst
Location: Copenhagen, Denmark (Hybrid)
Department: Product
Employment Type: Permanent

🧠 Role Overview
Planday is seeking a Senior Data Analyst to transform complex data into actionable insights that drive product development and strategic decision-making. You’ll collaborate across teams to define key metrics, build robust data models, and deliver compelling data narratives that support Planday’s mission to make shift work more human.

🔧 Key Responsibilities
- Partner with product, commercial, and leadership teams to define and track critical metrics
- Design and maintain high-quality data models and assets
- Build dashboards and visualizations using Tableau
- Conduct advanced statistical analysis and predictive modeling using Python, R, and SQL
- Translate complex data into clear, actionable insights through storytelling and presentations
- Apply machine learning techniques to uncover new opportunities
- Lead data wrangling, experimentation (e.g., A/B testing), and data quality initiatives

✅ Ideal Candidate Profile
- Advanced proficiency in Python, R, and SQL (including CTEs and window functions)
- Strong experience with Tableau and product analytics tools (e.g., Mixpanel, Amplitude)
- Skilled in statistical modeling, forecasting, and hypothesis testing
- Proven ability to communicate insights to both technical and non-technical audiences
- Experience in product opportunity sizing and metric development
- Analytical mindset with a track record of solving complex data challenges

🎯 Success Looks Like
- Delivering trusted insights that influence product and commercial decisions
- Creating intuitive dashboards that elevate data-driven decision-making
- Driving measurable business impact through rigorous analysis
- Implementing machine learning models that unlock new strategic opportunities

🎁 Benefits & Perks
- Pension, health insurance, and parental support
- Employee Share Plan
- Flexible remote work and generous vacation
- Strong social culture and meaningful work
- Growth and career progression opportunities
- Inclusive and supportive workplace environment

🌍 About Planday
Planday, part of Xero, is a Copenhagen-based company helping businesses optimize shift scheduling. With a mission to improve work/life balance for shift workers, Planday leverages Agentic AI and advanced analytics to empower teams and managers worldwide.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-data-analyst-in-xero-at-Copenhagen-Denmark"
}
, 

{
  applyUrl: "https://jobs.lever.co/xero/ab70fcf1-2ce6-42e2-a0b9-4fe2713db7c5",
  companyName: "xero",
  companyLogo: "/images/xero.png",
  location: "New Zealand",
  jobTitle: "Senior Engineer",
  jobType: "Remote",
  jobCategory: "Engineer",
  mainDescription: `Job Title: Senior Engineer
Location: Remote – New Zealand (Wellington or Auckland)
Department: Product Engineering – Payroll Engineering
Employment Type: Permanent

🧠 Role Overview
Xero is looking for a Senior Engineer to help build and manage scalable software solutions that support small businesses. You’ll work across the full development lifecycle, contribute to engineering standards, and mentor others while solving complex technical challenges in a collaborative, agile environment.

🔧 Key Responsibilities
- Develop high-quality, scalable software with a focus on automation and customer impact
- Design and execute sophisticated testing strategies and coach others in quality practices
- Troubleshoot and resolve production issues, contributing to post-mortems and incident response
- Contribute to engineering standards and frameworks in collaboration with Lead and Principal Engineers
- Champion CI/CD, infrastructure automation, and modern delivery practices
- Participate in recruitment and mentor junior engineers
- Drive continuous improvement and innovation across the engineering team

✅ Required Qualifications
- Expertise in C#, .NET, Docker, Kubernetes, and AWS
- Strong debugging skills across the full technology stack
- Experience designing distributed systems and refactoring monoliths
- Proficiency with CI/CD tools (GitHub Actions a plus)
- Advocate for TDD and automated testing
- Strong collaboration and communication skills
- Interest in AI tools like GitHub Copilot and Windsurf

🎁 Benefits & Perks
- Generous paid leave and statutory holidays
- Paid wellbeing leave and Employee Assistance Program
- Free medical insurance and wellness programs
- 26 weeks paid parental leave for primary caregivers
- Employee Share Plan and career development support
- Flexible working and beautiful office spaces

🌍 About Xero
Xero is a global SaaS company helping small businesses thrive through beautiful software. With a strong focus on innovation, inclusion, and customer success, Xero empowers its teams to do the best work of their lives.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-engineer-in-xero-at-New-Zealand"
}
,



{
  applyUrl: "https://jobs.lever.co/xero/f834e2f7-cdcf-4abf-9705-94d2d8927f9a",
  companyName: "xero",
  companyLogo: "/images/xero.png",
  location: "Copenhagen, Denmark",
  jobTitle: "Data Analyst - Maternity Cover (7 months)",
  jobType: "Hybrid",
  jobCategory: "Analyst",
  mainDescription: `Job Title: Data Analyst – Maternity Cover (7 months)
Location: Copenhagen, Denmark (Hybrid)
Department: Product
Employment Type: Fixed Term

🧠 Role Overview
Planday, part of Xero, is seeking a Data Analyst to join its Data & Analytics team on a 7-month maternity cover contract. You’ll play a strategic role in transforming complex data into actionable insights that drive product development, customer understanding, and business growth.

🔧 Key Responsibilities
- Collaborate with product, commercial, and leadership teams to define and track key metrics
- Design and maintain robust data models and ensure data quality
- Build dashboards and visualizations using Tableau
- Conduct advanced statistical analysis and predictive modeling using Python, R, and SQL
- Translate complex data into compelling narratives and presentations
- Support projects such as product-market fit analysis and customer lifecycle insights

✅ Ideal Candidate Profile
- Proficiency in Python, R, and advanced SQL (CTEs, window functions)
- Strong data storytelling and visualization skills (Tableau)
- Experience in product opportunity sizing and metric development
- Skilled in data wrangling, cleaning, and experimentation (e.g., A/B testing)
- Excellent communication skills for both technical and non-technical audiences
- Practical experience applying machine learning to business problems

🎁 Benefits & Perks
- Pension, health insurance, and generous vacation
- Flexible remote work
- Strong social culture and meaningful, mission-driven work
- Supportive, inclusive environment with a focus on work-life balance

🌍 About Planday
Planday is a Copenhagen-based workforce management platform helping businesses optimize shift scheduling. With a mission to make shift work more human, Planday leverages Agentic AI and data-driven innovation to improve work/life balance for shift workers globally.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "data-analyst-maternity-cover-7-months-in-xero-at-Copenhagen-Denmark"
}
,

{
  applyUrl: "https://jobs.lever.co/clari/593e9352-fb12-4a50-b879-f506ac9fdbba",
  companyName: "clari",
  companyLogo: "/images/clari.png",
  location: "India",
  jobTitle: "Software Engineer II, Copilot Foundations",
  jobType: "Hybrid",
  jobCategory: "Software",
  mainDescription: `Job Title: Software Engineer II – Copilot Foundations
Location: Bengaluru, India (Hybrid)
Department: Engineering – Applications
Employment Type: Full-Time

🧠 Role Overview
Clari is seeking a Software Engineer II to join its Copilot Foundations team. You’ll help build AI-driven, enterprise-grade applications that power Clari’s revenue intelligence platform. This role is ideal for engineers passionate about cloud technologies, scalable architecture, and delivering exceptional user experiences.

🔧 Key Responsibilities
- Design, develop, and improve scalable products and features
- Collaborate with Product Managers, Architects, and Infrastructure Engineers
- Drive innovation and contribute to large-scale design rollouts
- Investigate and adopt modern frameworks and tools
- Write modular, reusable code with strong test coverage and automation
- Enhance user experience and code quality through reviews and best practices

✅ Required Qualifications
- 2+ years of experience building scalable, high-quality software
- Proficiency in Spring Boot, Spring Security, Spring Data JPA
- Experience with RESTful APIs and AWS ecosystem
- Familiarity with MySQL, PostgreSQL, MongoDB, Trino
- Exposure to messaging systems like Kafka or RabbitMQ
- Bonus: Start-up experience

🎁 Perks & Benefits
- Flexible hours and hybrid work model
- Life and accidental insurance
- Mental health support (Silver Oak Health)
- Pre-IPO stock options
- Paid parental leave and wellness stipends
- Monthly “take a break” days and Focus Fridays
- Charitable giving match and team events

🌍 About Clari
Clari is a revenue intelligence platform used by leading companies like Adobe, Zoom, and Workday to improve forecasting accuracy and eliminate revenue leak. With a strong culture of innovation and inclusivity, Clari empowers teams to achieve remarkable outcomes.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "software-engineer-ii-copilot-foundations-in-clari-at-india-india"
}
,

{
  applyUrl: "https://jobs.lever.co/clari/5d590a7f-5f88-401d-9ea7-c6815f3e4c21",
  companyName: "clari",
  companyLogo: "/images/clari.png",
  location: "India",
  jobTitle: "Software Engineer II, AI Infra",
  jobType: "Remote",
  jobCategory: "Software",
  mainDescription: `Job Title: Software Engineer II – AI Infra
Location: Remote – India (with occasional travel to Bengaluru)
Department: Engineering – Applications
Employment Type: Full-Time

🧠 Role Overview
Clari is seeking a skilled AI Engineer to help build scalable, AI-powered microservices that support its revenue intelligence platform. You’ll work on cutting-edge GenAI features, including retrieval-augmented generation (RAG), embeddings, and prompt pipelines, while collaborating across product, design, and engineering teams.

🔧 Key Responsibilities
- Design and deploy microservices using LLMs for summarization, Q&A, sentiment analysis, and more
- Build ingestion pipelines to embed and index large datasets into vector stores (e.g., Elasticsearch, Pinecone)
- Develop evaluation harnesses and implement safety guardrails (e.g., PII filtering, toxicity checks)
- Rapidly iterate on features using A/B testing and feature flags
- Write production-grade Python code (FastAPI, Ray), tests, and design documentation
- Support other teams integrating LLMs by sharing best practices

✅ Required Qualifications
- 2+ years of engineering experience, with 1+ year working on LLM/GenAI features
- Strong Python skills (typing, async, pytest)
- Familiarity with frameworks like PyTorch, Hugging Face Transformers, LangChain, or LlamaIndex
- Experience with vector databases (e.g., Elasticsearch k-NN, Pinecone, FAISS)
- Solid backend fundamentals (REST, GraphQL, Kafka/SQS)
- Understanding of prompt engineering, token cost optimization, and model tuning
- Strong communication skills and ability to explain trade-offs to diverse stakeholders

🌟 Bonus Points
- Experience with Ray, Triton, or high-throughput inference stacks
- Comfort reading research papers and prototyping new ideas

🎁 Perks & Benefits
- Flexible hours and remote-first culture
- Life and accidental insurance
- Mental health support via Silver Oak Health
- Pre-IPO stock options
- Paid parental leave and wellness stipends
- Monthly “take a break” days and Focus Fridays
- Charitable giving match and team events

🌍 About Clari
Clari is a revenue intelligence platform used by companies like Adobe, Zoom, and Workday to improve forecasting accuracy and eliminate revenue leak. With a strong culture of innovation and inclusion, Clari empowers teams to achieve remarkable outcomes.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "software-engineer-ii-ai-infra-in-clari-at-india-india"
}
, 

{
  applyUrl: "https://jobs.lever.co/wgsn/a58dadb6-d45f-46e5-9ea5-3e10d568fecf",
  companyName: "wgsn",
  companyLogo: "/images/wgsn.png",
  location: "London",
  jobTitle: "Salesforce Developer",
  jobType: "Hybrid",
  jobCategory: "Salesforce",
  mainDescription: `Job Title: Salesforce Developer
Location: London, UK (Hybrid)
Department: Sales – Sales Management
Employment Type: Fixed-Term (6 months)

🧠 Role Overview
WGSN is seeking a Salesforce Developer to join its Revenue Operations team. You’ll be responsible for delivering and maintaining Salesforce solutions across Sales Cloud and Service Cloud, managing integrations, and owning the DevOps framework. This role is ideal for someone with strong technical expertise and a passion for optimizing business systems.

🔧 Key Responsibilities
- Own and resolve change requests, projects, and technical issues
- Design, build, test, and deploy Salesforce solutions
- Manage AppExchange apps and integrations (e.g., Netsuite, Salesloft, ZoomInfo)
- Lead DevOps processes and support team members
- Monitor Salesforce releases and implement updates
- Reduce technical debt and improve platform performance
- Collaborate with third-party vendors and internal stakeholders

✅ Required Qualifications
- 4+ years of Salesforce development experience
- Proficiency in SOQL, Apex, Aura, and Lightning Web Components
- Experience with Salesforce CPQ, Sales Cloud, and Service Cloud
- Familiarity with Einstein / Agentforce (preferred)
- Salesforce certifications:
- Certified Administrator
- Advanced Administrator
- Platform App Builder
- Platform Developer I
- Experience with DevOps (2+ years) and Atlassian tools (JIRA, Confluence)
- Netsuite experience preferred

🎁 Benefits & Perks
- 25 days holiday (option to buy/sell 5 days)
- Pension, life assurance, and income protection
- Flexible benefits (private medical, dental, critical illness)
- Employee assistance program, season ticket loan, cycle to work scheme
- Volunteering and charitable giving options
- Learning and development opportunities

🌍 About WGSN
WGSN is the global authority on consumer trend forecasting, helping brands design the right products at the right time. With a focus on innovation, sustainability, and inclusivity, WGSN empowers teams to shape the future of consumer behavior and product design.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "salesforce-developer-in-wgsn-at-london-united-kingdom"
}
, 

{
  applyUrl: "https://careers.radarhealthcare.com/jobs/6095628-senior-react-engineer",
  companyName: "radarhealthcare",
  companyLogo: "/images/radarhealthcare.png",
  location: "Leeds",
  jobTitle: "Senior React Engineer",
  jobType: "Hybrid",
  jobCategory: "Engineer",
  mainDescription: `Job Title: Senior React Engineer
Location: Leeds, UK (Hybrid – 1 day/month in office)
Department: Development
Employment Type: Full-Time

🧠 Role Overview
Radar Healthcare is seeking a seasoned Senior React Engineer to lead the front-end evolution of its healthcare platform. As the most experienced React developer in the organization, you’ll serve as the subject matter expert (SME), guiding architectural decisions, mentoring peers, and ensuring the React codebase is scalable, secure, and maintainable.

🔧 Key Responsibilities
- Own and evolve the React codebase and front-end architecture
- Act as the go-to expert for React development across the organization
- Set and uphold front-end development standards and best practices
- Identify and resolve technical challenges proactively
- Collaborate with cross-functional teams to align technical and business goals

✅ Required Qualifications
- Extensive experience with React and its ecosystem
- Strong proficiency in JavaScript, TypeScript, Webpack, Babel
- Proven track record with complex web applications
- Expertise in accessibility (a11y), internationalization (i18n), and localization (l10n)
- Familiarity with testing tools like Cypress and unit testing best practices

🌟 Preferred Skills
- Experience in healthcare tech
- Strong technical leadership and mentoring capabilities
- Ability to evaluate and advocate for front-end technology trade-offs

🎁 Benefits & Perks
- Competitive salary based on experience
- £1,000 annual learning & development budget
- Flexible working with minimal in-office requirements
- 25+ days holiday (plus bank holidays), increasing with tenure
- Birthday leave and surprise gift
- Charity leave and mental health support
- Healthcare coverage via Medicash
- Inclusive, values-led culture and Great Place to Work-Certified

🌍 About Radar Healthcare
Radar Healthcare is a health-tech company on a mission to improve patient safety and care quality. With a platform built in collaboration with healthcare professionals, Radar helps organizations meet regulatory standards and deliver better outcomes. The company is proud of its open, supportive, and inclusive culture, and is committed to making a real impact in the healthcare space.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-react-engineer-in-radarhealthcare-at-Leeds"
}
,

{
  applyUrl: "https://jobs.smartrecruiters.com/Insightsoftware/744000066946633",
  companyName: "insightsoftware",
  companyLogo: "/images/insightsoftware.png",
  location: "India",
  jobTitle: "Principal Software Engineer (Backend - .Net C#, SQL)",
  jobType: "Hybrid",
  jobCategory: "Backend",
  mainDescription: `Job Title: Principal Software Engineer (Backend – .Net C#, SQL)
Location: Hyderabad, India (Hybrid)
Work Hours: 11:00 AM – 8:00 PM IST
Employment Type: Full-Time

🧠 Role Overview
insightsoftware is seeking a Principal Software Engineer to lead backend development for its Equity Management SaaS platform. You’ll guide a team of engineers in designing scalable, high-performance systems using .NET, C#, and Oracle PL/SQL. This role emphasizes technical leadership, quality-first development, and continuous learning.

🔧 Key Responsibilities
- Lead development of new features, enhancements, and bug fixes
- Design and optimize Oracle-based database solutions
- Write and tune complex SQL queries for performance and scalability
- Ensure code quality through unit testing and code reviews
- Mentor junior engineers and lead architecture discussions
- Collaborate across teams to resolve technical dependencies
- Participate in Agile ceremonies and drive sprint deliverables

✅ Required Qualifications
- Bachelor’s degree in Computer Science or equivalent experience
- 9+ years of backend development experience with .NET/.NET Core, C#, and SQL
- 5+ years of Oracle database and PL/SQL development
- Experience with AI tools (e.g., Copilot, Claude.AI, Devin, Cursor)
- Strong skills in data modeling, performance tuning, and database security
- Familiarity with Agile/Scrum, Git, and enterprise-scale applications
- Excellent communication and collaboration skills

🌟 Preferred Skills
- Experience in financial domain applications
- Exposure to Angular and web application development
- Knowledge of data warehousing and ETL processes
- Familiarity with cloud platforms (AWS, Azure, Oracle Cloud)

🎁 Additional Information
- Background checks required (where permitted)
- No sponsorship available for this role
- Equal opportunity employer committed to diversity and inclusion
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "principal-software-engineer-backend-net-c-sql-in-insightsoftware-at-india-india"
}
, 

{
  applyUrl: "https://jobs.smartrecruiters.com/Insightsoftware/744000068148675",
  companyName: "insightsoftware",
  companyLogo: "/images/insightsoftware.png",
  location: "India",
  jobTitle: "Manager, Engineering (.Net/C#, SQL, AI and some frontend)",
  jobType: "Full-time",
  jobCategory: "Engineer",
  mainDescription: `Here’s a structured and professional summary of the job posting for the Manager, Engineering (.Net/C#, SQL, AI and some frontend) role at insightsoftware:

Job Title: Manager, Engineering (.Net/C#, SQL, AI and some frontend)
Location: Bengaluru, Karnataka, India (Hybrid)
Employment Type: Full-Time

🧠 Role Overview
insightsoftware is seeking a hands-on Engineering Manager to lead a team developing and maintaining its suite of Enterprise Performance Management products. This role combines technical leadership with people management, focusing on backend (.NET/C#, SQL), cloud infrastructure, and frontend technologies (Angular). You’ll drive architecture, mentor engineers, and ensure high-quality, scalable software delivery.

🔧 Key Responsibilities
- Lead all aspects of software product development: planning, architecture, sprint execution, and delivery
- Guide technical design, create PoCs, and review code
- Influence product roadmap with long-term architectural vision
- Improve development processes and team efficiency
- Conduct 1:1s, performance reviews, and provide real-time feedback
- Oversee cloud-based application development and infrastructure (Azure/AWS)
- Collaborate with product teams to define technical approaches
- Own SDLC from requirements to testing, including backend and frontend development
- Lead cross-team efforts and resolve technical dependencies

✅ Required Qualifications
- Bachelor’s in Computer Science or equivalent experience
- 12+ years in SaaS web application development using .NET/C#
- 3+ years in engineering management
- 5+ years with SQL and Entity Framework
- 3+ years with cloud platforms (Azure or AWS)
- Full-stack experience including Angular, HTML5, CSS/SASS, TypeScript
- Strong REST API development and database design skills
- Experience with Agile/Scrum, Git, unit testing, and mocking frameworks
- Excellent communication and collaboration skills

🌟 Preferred Skills
- Experience with Oracle databases and complex SQL scripting
- Background in financial domain applications
- Familiarity with AI tools and agentic AI (e.g., Copilot, Claude.AI)

🎁 Additional Information
- Background checks required (where permitted)
- No sponsorship available for this role
- Equal opportunity employer committed to diversity and inclusion
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "manager-engineering-net-c-sql-ai-and-some-frontend-in-insightsoftware-at-india-india"
}
,


{
  applyUrl: "https://jobs.smartrecruiters.com/Insightsoftware/744000068170996",
  companyName: "insightsoftware",
  companyLogo: "/images/insightsoftware.png",
  location: "India",
  jobTitle: "Senior Business Intelligence Engineer (Power BI Data Engineer, Cloud and Finance)",
  jobType: "Remote",
  jobCategory: "Business",
  mainDescription: `Here’s a structured and professional summary of the job posting for the Senior Business Intelligence Engineer (Power BI, Cloud & Finance) role at insightsoftware:

Job Title: Senior Business Intelligence Engineer
Location: Hyderabad, India (Remote)
Shift: 5:00 PM – 2:00 AM IST
Employment Type: Full-Time

🧠 Role Overview
insightsoftware is seeking a Senior BI Engineer with deep expertise in Power BI and financial reporting. This role bridges technical and business teams, translating complex financial data into actionable insights that drive strategic decisions. You’ll play a key role in building scalable data models, ensuring data quality, and supporting enterprise-wide reporting initiatives.

🔧 Key Responsibilities
- Develop and maintain a comprehensive financial reporting suite
- Translate financial metrics (e.g., recurring revenue, renewals, retention) into BI models
- Align business and technical teams to refine data pipelines and models
- Monitor and improve data quality and availability
- Perform complex data analysis and resolve data-related issues
- Collaborate with cross-functional teams to ensure shared understanding of financial data
- Define and manage data assets and documentation

✅ Required Qualifications
- 5+ years in data engineering with a focus on BI
- 5+ years in financial reporting and Power BI development
- 3+ years in BI architecture and modeling
- 2+ years in cloud BI engineering (AWS or Azure)
- Proficiency in Agile methodologies

🌟 Preferred Skills
- AWS or Azure data certifications
- Experience with Databricks, Spark, Python, and machine learning
- Familiarity with Salesforce for CRM and data integration

🎁 What insightsoftware Offers
- Remote-first flexibility
- Fast-paced, growth-oriented environment
- Inclusive and supportive culture
- Equal opportunity employer with strong DEI values
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-business-intelligence-engineer-power-bi-data-engineer-cloud-and-finance-in-insightsoftware-at-india-india"
}
, 

{
  applyUrl: "https://job-boards.greenhouse.io/1uphealth/jobs/4579971006",
  companyName: "1uphealth",
  companyLogo: "/images/1uphealth.png",
  location: "United States",
  jobTitle: "Senior Software Engineer (Patient Access)",
  jobType: "Remote",
  jobCategory: "Software",
  mainDescription: `Job Title: Senior Software Engineer – Patient Access
Location: Remote – United States
Employment Type: Full-Time

🧠 Role Overview
1upHealth is seeking a bold and collaborative Senior Software Engineer to help shape the future of healthcare data access. You’ll contribute to building secure, standards-based APIs and applications that enable seamless data sharing and improve patient outcomes. This role is ideal for engineers passionate about interoperability, performance, and meaningful impact in healthcare.

🔧 Key Responsibilities
- Drive the technical vision and architecture of the Patient Access team
- Design and develop secure, scalable software applications and APIs
- Build external interfaces for third-party data sharing
- Participate in code reviews, refactoring, and engineering best practices
- Collaborate across teams to improve products and services
- Mentor team members and model engineering excellence

✅ Required Qualifications
- 5+ years of experience building performant, scalable applications in modern languages (e.g., TypeScript, Python, Java, Go)
- 3+ years working with relational and non-relational databases (e.g., Postgres, MySQL, Redis, DynamoDB, ElasticSearch)
- 2+ years of experience with cloud infrastructure (AWS or GCP)
- Expertise in designing and consuming secure RESTful APIs
- Strong communication skills with technical and non-technical stakeholders

🌟 Preferred Skills
- Experience with healthcare technologies (e.g., HL7, FHIR)
- Familiarity with Docker, Kubernetes, and CI/CD environments
- Experience with OAuth2, OIDC, SAML, and access control models (RBAC, ABAC)
- Keycloak experience
- Frontend experience with React or Vue

🎁 Benefits & Perks
- 100% paid BCBS medical and dental insurance
- Vision insurance
- Unlimited PTO
- Equity and 401(k)
- Home office stipend and lifestyle savings account
- Parental leave: 16 weeks (birthing), 6 weeks (non-birthing)

🌍 About 1upHealth
1upHealth is a leader in FHIR® interoperability, building a data ecosystem that empowers healthcare organizations to access, integrate, and share data. Their mission is to unlock health data and improve industry outcomes through digital transformation.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-software-engineer-patient-access-in-1uphealth-at-United-States"
}
, 

{
  applyUrl: "https://jobs.lever.co/pano/00825f52-2faf-4209-9504-002bdd4b88c7",
  companyName: "pano",
  companyLogo: "/images/pano.png",
  location: "California",
  jobTitle: "Senior Software Engineer - Full Stack",
  jobType: "Remote",
  jobCategory: "Software",
  mainDescription: `Job Title: Senior Software Engineer – Full Stack
Location: Remote – Pacific or Mountain Time Zone (U.S.)
Department: Engineering
Employment Type: Full-Time

🧠 Role Overview
Pano AI is seeking a full stack engineer to help build scalable, secure, and maintainable systems that support early wildfire detection. You’ll lead major projects, develop new features, and collaborate across teams to deliver impactful solutions that protect communities and ecosystems.

🔧 Key Responsibilities
- Build and maintain scalable full stack applications
- Drive end-to-end project development from concept to deployment
- Develop tools, frameworks, and workflows to support evolving business needs
- Ensure performance, uptime, and security of production systems
- Participate in on-call rotation and incident response
- Create runbooks, metrics, and dashboards for operational visibility

✅ Required Qualifications
- 5+ years of software engineering experience
- 3+ years in a fast-paced SaaS or similar environment
- Expertise in JavaScript, TypeScript, HTML5, CSS3, and React
- Backend experience with Java and Spring
- Proficiency in SQL and RDBMS (preferably PostgreSQL)
- Strong troubleshooting and system design skills
- Effective communicator and team collaborator

🌟 Preferred Skills
- Experience with GCP or AWS
- Familiarity with Docker, Kubernetes, and Linux systems
- Knowledge of caching tools (Redis, Memcached, Varnish)
- UI/UX design fundamentals
- DevOps tools (Git, CI/CD) and security frameworks (SOC2, ISO 27001)

💰 Compensation & Benefits
- Salary Range: $150,000 – $205,000 USD
- Stock options
- Comprehensive health insurance
- Paid time off
- 401(k) retirement plan

🌍 About Pano AI
Pano AI is a climate tech company using AI, hardware, and software to detect wildfires early and deliver real-time intelligence to first responders. With over $89M in funding and operations across the U.S., Australia, and Canada, Pano is protecting over 30 million acres of land and has been recognized by MIT Technology Review and Fast Company for its innovation.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-software-engineer-full-stack-in-pano-at-california-united-states"
}
,

{
  applyUrl: "https://jobs.lever.co/pano/8a7033ab-3cc4-4bd1-8d53-65d08928fd33",
  companyName: "pano",
  companyLogo: "/images/pano.png",
  location: "California",
  jobTitle: "Software Engineer - Frontend",
  jobType: "Remote",
  jobCategory: "Software",
  mainDescription: `Job Title: Software Engineer – Frontend
Location: Remote – Pacific or Mountain Time Zone (U.S.)
Department: Engineering
Employment Type: Full-Time

🧠 Role Overview
Pano AI is seeking a Frontend Engineer to help design and implement the user interface for its wildfire detection platform. You’ll work on a single-page application that integrates real-time data, maps, and video, contributing to a mission-critical system that helps first responders act faster and more effectively.

🔧 Key Responsibilities
- Lead development of new features and maintain existing codebase
- Conduct code reviews and advocate for clean, testable, accessible code
- Collaborate with product, QA, and backend teams to deliver high-impact solutions
- Evaluate new technologies and contribute to evolving best practices
- Prioritize and address technical debt while supporting legacy systems
- Integrate RESTful APIs and ensure cross-device compatibility

✅ Required Qualifications
- 2+ years of frontend engineering experience
- Proficiency in HTML, CSS, TypeScript, React, React Testing Library, Jest
- Experience with state management (e.g., Recoil, Redux)
- Familiarity with Material Design and component libraries like Material-UI
- Strong debugging skills and REST API integration experience
- Effective communicator and team collaborator

🌟 Bonus Skills
- Experience with HTML Canvas or map technologies
- Familiarity with accessibility and security best practices

💰 Compensation & Benefits
- Salary Range: $130,000 – $165,000 USD
- Stock options
- Comprehensive health insurance
- Paid time off
- 401(k) retirement plan

🌍 About Pano AI
Pano AI is a climate tech company using AI, hardware, and software to detect wildfires early and deliver real-time intelligence to first responders. With over $89M in funding and operations across the U.S., Australia, and Canada, Pano is protecting over 30 million acres of land and has been recognized by MIT Technology Review and Fast Company for its innovation.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "software-engineer-frontend-in-pano-at-california-united-states"
}
, 

{
  applyUrl: "https://job-boards.greenhouse.io/avalabs/jobs/5572737004",
  companyName: "avalabs",
  companyLogo: "/images/avalabs.png",
  location: "Brooklyn, NY",
  jobTitle: "Senior Site Reliability Engineer",
  jobType: "Remote",
  jobCategory: "Engineer",
  mainDescription: `Job Title: Senior Site Reliability Engineer
Location: Brooklyn, NY or Remote (North America)
Employment Type: Full-Time

🧠 Role Overview
Ava Labs is seeking a Senior Site Reliability Engineer to help scale and secure the infrastructure powering the Avalanche blockchain network. You’ll be responsible for release pipelines, observability, and system reliability, working closely with developers to improve velocity, uptime, and operational excellence.

🔧 Key Responsibilities
- Develop and optimize scalable, reliable infrastructure using SRE best practices
- Implement monitoring, logging, and tracing tools (e.g., Datadog, Grafana)
- Maintain SLOs, SLIs, and error budgets for critical systems
- Automate infrastructure deployment with Terraform, Terragrunt, and Argo CD
- Improve CI/CD pipelines (GitHub Actions preferred)
- Identify and resolve single points of failure and cost inefficiencies
- Participate in on-call rotations and incident response
- Foster a culture of continuous improvement and blameless post-mortems

✅ Required Qualifications
- BS in Computer Science or related field
- 7+ years in SRE, DevOps, or Cloud Engineering
- Strong AWS experience (EKS, ECS, VPC, S3, ELB)
- Proficiency with Kubernetes, Docker, and Infrastructure as Code (Terraform, Ansible)
- Experience with observability tools (Prometheus, Grafana, ELK Stack)
- CI/CD pipeline experience (GitHub Actions, Jenkins, etc.)
- Scripting skills in Python or Go
- Familiarity with Linux (Ubuntu preferred) and distributed systems

💰 Compensation
- Salary Range: $158,440 – $188,147.50 USD
- Final offer may vary based on experience and location
- NYC metro candidates expected in-office 2–3x/week (exceptions apply)

🌍 About Ava Labs
Ava Labs is the team behind Avalanche, a high-performance blockchain platform. Backed by top-tier investors like Andreessen Horowitz and Initialized Capital, Ava Labs is redefining how people build and use decentralized applications. The company is committed to diversity, innovation, and building a more open Web3 ecosystem
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-site-reliability-engineer-in-avalabs-at-Brooklyn-NY"
}
,


  {
  applyUrl: "https://jobs.lever.co/brillio-2/a584af2c-c119-46b4-a1c0-3e3c4864671c",
  companyName: "Brillio",
  companyLogo: "/images/Brillio.png",
  location: "United States",
  jobTitle: "Azure Architect - R01552334",
  jobType: "Hybrid",
  jobCategory: "Architect",
  mainDescription: `Here’s a structured and professional summary of the job posting for the Azure Architect – R01552334 role at Brillio:

Job Title: Azure Architect
Location: Maryland, United States (Hybrid – DMV area preferred)
Department: Data and AI – Data Engineering
Employment Type: Full-Time (No sponsorship available)

🧠 Role Overview
Brillio is seeking a seasoned Azure Data Architect to lead the design and deployment of scalable, secure, and high-performance data solutions on Microsoft Azure. This role is ideal for a hands-on architect with deep technical expertise and a passion for driving enterprise-wide data initiatives.

🔧 Key Responsibilities
- Architect and implement end-to-end data solutions using Azure services (Synapse, ADF, ADLS Gen2, SQL DB, Azure Fabric)
- Design data models, ETL/ELT pipelines, and data warehouses for analytics and reporting
- Ensure compliance with data governance, security, and privacy standards (e.g., HIPAA, GDPR)
- Collaborate with stakeholders to translate business needs into scalable data architectures
- Mentor junior engineers and promote a culture of innovation and quality
- Serve as SME on Azure data architecture and recommend tools and patterns

✅ Required Qualifications
- 10–13 years of experience in data architecture and engineering
- 5+ years of hands-on experience with Microsoft Azure data platforms
- Expertise in Azure Synapse, ADF, ADLS Gen2, Azure SQL, Azure Fabric
- Strong knowledge of data modeling, big data tools (e.g., Spark, Delta Lake), and ETL/ELT design
- Experience with data security, access control, and compliance frameworks
- Excellent communication and stakeholder management skills
- Proven success in leading architecture design and delivering enterprise-scale solutions

💰 Compensation
- Salary Range: $140,000 – $150,000 USD annually

🌍 About Brillio
Brillio is a fast-growing digital technology services company known for its innovation, client-centric culture, and award-winning workplace. With a focus on cutting-edge technologies and digital transformation, Brillio empowers Fortune 1000 clients to turn disruption into opportunity.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "azure-architect-r01552334-in-brillio-at-united-states-united-states"
}

, 





{
  applyUrl: "https://job-boards.greenhouse.io/tripadvisor/jobs/7044945",
  companyName: "Tripadvisor",
  companyLogo: "/images/Tripadvisor.png",
  location: "Poland",
  jobTitle: "ML Operations Engineer II (Viator)",
  jobType: "Hybrid",
  jobCategory: "Engineer",
  mainDescription: `Here’s a polished and structured summary of the job posting for the ML Operations Engineer II (Viator) role in Kraków, Poland:

Job Title: ML Operations Engineer II
Location: Kraków, Poland (Hybrid)
Department: Engineering – Machine Learning Platform
Employment Type: Full-Time

🧠 Role Overview
Viator, a Tripadvisor company, is expanding its Machine Learning Platform to meet growing demand. As an ML Ops Engineer, you’ll empower data scientists by building scalable infrastructure and tools that support the full ML lifecycle—from development to deployment and monitoring.

🔧 Key Responsibilities
- Build and maintain infrastructure for batch, real-time, and pre-computed ML models
- Support AWS cloud migration and adopt modern services
- Develop tools that streamline ML workflows and improve productivity
- Collaborate across UI, backend, big data, and CI/CD layers
- Foster innovation by proposing and implementing new ideas in ML Ops

✅ Required Qualifications
- 2+ years of experience in ML engineering or ML Ops
- Hands-on experience with AWS
- Proficiency with Infrastructure-as-Code tools (Terraform, CloudFormation)
- Familiarity with Python, Spark, Docker, Kubernetes
- Experience with CI/CD pipelines and cross-functional collaboration
- Strong problem-solving and communication skills

🎁 Perks & Benefits
- Competitive salary, bonus, and equity
- Flexible hybrid work model
- Tuition assistance and lifestyle benefit
- Travel discounts and donation matching
- Comprehensive health coverage and employee assistance programs

🌍 About Viator
Viator is the world’s leading marketplace for travel experiences, offering over 300,000 activities. With a mission to make every day extraordinary, Viator empowers travelers with flexibility, last-minute availability, and unforgettable memories.

You can view the full listing and apply directly on Tripadvisor’s careers page.
Let me know if you’d like help tailoring your résumé or prepping for the interview—I’d be happy to assist!
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "ml-operations-engineer-ii-viator-in-tripadvisor-at-poland-poland"
}
, 




{
  applyUrl: "https://jobs.lever.co/fullscript/351b7f3e-1090-42ea-ad10-dbbc59d9a11f",
  companyName: "Fullscript",
  companyLogo: "/images/Fullscript.png",
  location: "Canada",
  jobTitle: "Senior Software Developer – Lab Integrations",
  jobType: "Remote",
  jobCategory: "Software",
  mainDescription: `Job Title: Senior Software Developer – Lab Integrations
Location: Remote (Canada)  Toronto, ON  Ottawa, ON
Department: Engineering
Employment Type: Full-Time

🧠 Role Overview
Fullscript is seeking a Senior Software Developer to lead the development of lab integrations and data pipelines that power its Labs Product. This high-autonomy role is ideal for engineers who thrive on ownership, quality, and building scalable systems that improve healthcare outcomes.

🔧 Key Responsibilities
- Design, build, test, and ship new integrations with lab partners
- Develop scalable data pipelines for ingesting and processing lab results
- Architect storage and service layers for lab operations
- Review code, mentor peers, and advocate for high-quality development practices
- Contribute to architectural decisions and communicate them effectively

✅ Ideal Candidate Profile
- Passionate about software craftsmanship and user experience
- Strong bias toward action and high-leverage problem solving
- Experience with Ruby, Python, Node.js, or similar languages
- Enjoys mentoring and collaborating with junior engineers
- Lifelong learner with curiosity and initiative

🌟 Bonus Skills
- Experience scaling high-traffic web applications
- Familiarity with AI tooling for development or product features
- Knowledge of healthcare data standards (e.g., HL7)
- Experience with React, GraphQL, or modern JavaScript frameworks

🎁 Benefits & Perks
- Flexible PTO and competitive compensation
- RRSP match and stock options
- Customizable health benefits and HSA
- Discounts on wellness products
- Training budget and continuous learning opportunities
- Remote-first flexibility with hybrid options

🌍 Why Join Fullscript
Fullscript is on a mission to make healthcare whole by connecting practitioners and patients through evidence-based tools and diagnostics. With a culture rooted in innovation, mentorship, and balance, Fullscript offers a meaningful opportunity to build impactful technology in a supportive environment.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-software-developer-–-lab-integrations-in-fullscript-at-canada-canada"
}
, 




{
  applyUrl: "https://www.atlassian.com/company/careers/details/20312",
  companyName: "atlassian",
  companyLogo: "/images/atlassian.png",
  location: "Australia",
  jobTitle: "Senior Principal Software Engineer - Kubernetes Compute",
  jobType: "Remote",
  jobCategory: "Software",
  mainDescription: `Job Title: Senior Principal Software Engineer – Kubernetes Compute
Location: Remote – Sydney, Australia or Auckland, New Zealand
Department: Engineering
Employment Type: Full-Time

🧠 Role Overview
Atlassian is seeking a deeply experienced Senior Principal Engineer to lead the technical direction of its Central Compute organization. This role focuses on designing scalable, resilient compute infrastructure using Kubernetes and cloud-native technologies. You’ll collaborate across departments, mentor engineers, and drive architectural excellence in a distributed-first environment.

🔧 Key Responsibilities
- Define technical direction and OKRs for Central Compute
- Lead complex architecture and implementation projects across teams
- Champion adoption of new technologies and methodologies
- Drive company-wide initiatives and cross-functional collaboration
- Own outcomes of critical microservices-based projects
- Promote best practices for scalability, reliability, and performance
- Improve developer productivity and operational excellence
- Mentor engineers and contribute to a culture of innovation

✅ Required Qualifications
- 10+ years of experience building enterprise-grade platforms
- Expertise in containerized and serverless compute technologies
- Proven ability to resolve complex technical issues at scale
- Experience with sharding, cell-based architecture, and vendor limitations
- Strong cross-organizational collaboration and leadership skills
- Track record of designing infrastructure used by hundreds of service owners

🌟 Preferred Skills
- Experience with AWS or other public cloud platforms
- Proficiency with Kubernetes and service mesh technologies
- Familiarity with cloud storage, networking, and security
- Passion for driving architectural strategy across large engineering orgs

🎁 Benefits & Perks
- Flexible work model (office, remote, or hybrid)
- Health and wellbeing resources
- Paid volunteer days
- Global distributed-first culture
More details: Atlassian Perks & Benefits

🌍 About Atlassian
Atlassian builds tools that help teams collaborate and unleash their full potential. With a distributed-first culture and a commitment to diversity, Atlassian empowers employees to work where they thrive and make a global impact.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-principal-software-engineer-kubernetes-compute-in-atlassian-at-australia-australia"
}
,


{
  applyUrl: "https://www.atlassian.com/company/careers/details/20504",
  companyName: "atlassian",
  companyLogo: "/images/atlassian.png",
  location: "Poland",
  jobTitle: "Fullstack Engineer",
  jobType: "Remote",
  jobCategory: "Engineer",
  mainDescription: `Here’s a structured and professional summary of the job posting for the Fullstack Engineer role at Atlassian in Poland:

Job Title: Fullstack Engineer
Location: Gdańsk, Poland (Remote or Onsite)
Employment Type: Full-Time

🧠 Role Overview
Atlassian is looking for a Fullstack Engineer to join the Jira Align team. You’ll help build features that connect business and software development teams, focusing on performance, scalability, and security for enterprise-scale customers. This role offers flexibility to work remotely within Poland or onsite in Gdańsk, with up to 90 days of remote work abroad per year.

🔧 Key Responsibilities
- Develop REST APIs and customer-facing React components
- Configure backend monitoring and build CI/CD pipelines
- Integrate with content management systems
- Build reliable, scalable features and services

✅ Required Qualifications
- 4+ years of experience with JavaScript/TypeScript (e.g., React, Node, ES6)
- Experience or interest in .NET Framework (C#)
- Bachelor’s or Master’s in Computer Science or equivalent experience
- Experience with REST APIs, Git, HTML/Sass/CSS, and UX collaboration
- Familiarity with server tech (Docker, NGINX, Express/Node)
- Experience with enterprise CMS and cloud platforms (e.g., AWS)
- Bonus: Java, Freemarker, or Rust experience

🌟 Preferred Skills
- DevOps experience with CI/CD tools (e.g., Octopus)
- Familiarity with AWS fundamentals (VPC, EC2)

💰 Compensation
- Salary Range: 184,500 – 246,000 PLN annually
- Includes bonuses, equity, and benefits

🎁 Benefits & Perks
- Health and wellbeing resources
- Paid volunteer days
- Flexible work arrangements
- Global distributed-first culture
More details: Atlassian Perks & Benefits

You can view the full listing and apply directly on Atlassian’s careers page.
Let me know if you’d like help tailoring your résumé or prepping for the interview—I’d be happy to assist!
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "fullstack-engineer-in-atlassian-at-poland-poland"
}


, 

{
  applyUrl: "https://www.fanatee.com/openings/product-analyst-ai-expansion",
  companyName: "fanatee",
  companyLogo: "/images/fanatee.png",
  location: "São Paulo, Brazil",
  jobTitle: "PRODUCT ANALYST - AI/EXPANSION",
  jobType: "Hybrid",
  jobCategory: "AI",
  mainDescription: `Job Title: Product Analyst – AI/Expansion
Location: Hybrid – São Paulo, Brazil
Employment Type: Full-Time

🧠 Role Overview
Fanatee is seeking a curious, hands-on, and analytical Product Analyst to support the growth and content strategy of its flagship word game, Stop. You’ll work closely with the Head of Product to improve content quality, leverage AI tools, and identify opportunities for global expansion.

🔧 Key Responsibilities
Content Excellence
- Support content development and continuous improvement
- Collaborate with editors and freelancers to ensure quality and consistency
- Enhance content creation and review processes
- Use AI tools to generate and validate game content
Data & Insights
- Analyze content and gameplay performance metrics
- Identify opportunities based on player behavior
- Deliver actionable insights to guide product strategy
Production Organization
- Help organize workflows and execute the product roadmap
- Facilitate communication across teams
- Remove blockers and improve operational efficiency

✅ Requirements
- Experience in product or project management (preferably in gaming)
- Strong analytical and problem-solving skills
- Familiarity with AI tools and their applications
- Excellent communication skills
- Fluency in English
- Passion for word games, especially Stop
- Bachelor’s degree in Business, Economics, Engineering, or related field

🌟 Preferred Skills
- Python and SQL for data analysis
- Experience with APIs and HTTP requests
- Data cleanup and database handling
- Prompt engineering and generative AI knowledge

🎁 What Fanatee Offers
- Competitive salary and profit sharing
- Flexible benefits and health/dental insurance
- Life insurance and career development support
- Casual, creative work environment with snacks and relaxation spaces

🌍 About Fanatee
Founded in 2013, Fanatee is a mobile gaming company with over 300 million downloads worldwide. With a focus on quality and innovation, the team is passionate about building games that are both fun and impactful.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "product-analyst-ai-expansion-in-fanatee-at-foster-city-anywhere"
}
, 

{
  applyUrl: "https://www.fanatee.com/openings/product-business-analyst",
  companyName: "fanatee",
  companyLogo: "/images/fanatee.png",
  location: "São Paulo, Brazil",
  jobTitle: "PRODUCT BUSINESS ANALYST",
  jobType: "Hybrid",
  jobCategory: "General",
  mainDescription: `Job Title: Product Business Analyst
Location: São Paulo, Brazil (Hybrid)
Employment Type: Full-Time

🧠 Role Overview
Fanatee is seeking a data-savvy and strategic Product Business Analyst to help scale and optimize the performance of its mobile games. You’ll work cross-functionally with Engineering, Product, and BI teams to uncover insights, shape product strategies, and drive growth through data-informed decisions.

🔧 Key Responsibilities
- Analyze large datasets to optimize user lifetime value (LTV) and acquisition funnels
- Develop growth roadmaps and coordinate cross-team resources
- Translate data insights into measurable product strategies and features
- Improve operational efficiency through process enhancements
- Ensure data quality via monitoring and alerting systems
- Optimize data models for performance and scalability
- Research and implement new tools and technologies for data analysis
- Build dashboards using Tableau, AWS Quicksight, or Power BI

✅ Required Qualifications
- 3+ years of experience in management, consulting, finance, or tech
- Strong SQL skills and experience with Amazon Athena, Oracle, or Hadoop
- Proficiency in Python (preferred)
- Experience with high-volume, multi-source datasets
- Strong communication and problem-solving skills
- Bachelor’s or Master’s in Business, Economics, Engineering, or Computer Science
- Advanced English proficiency

🌟 Preferred Skills
- Experience with machine learning, statistics, or predictive modeling
- Familiarity with APIs and data transformation workflows
- Experience working on global products or in international teams

🎁 What Fanatee Offers
- Competitive compensation
- Meal and transportation benefits (VR + VT)
- Health and dental insurance
- Profit sharing (PLR)
- Relaxed, creative work environment with snacks and lounge space

🌍 About Fanatee
Founded in 2013, Fanatee is a mobile gaming company with over 300 million downloads worldwide. The team is passionate about turning great ideas into global hits and fostering a culture of innovation, collaboration, and fun.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "product-business-analyst-in-fanatee-at-foster-city-anywhere"
}
,


{
  applyUrl: "https://nordcloud-career.breezy.hr/p/ef74c8b93d9201-aws-cloud-engineer-architect",
  companyName: "nordcloud",
  companyLogo: "/images/nordcloud.png",
  location: "Gothenburg, Sweden",
  jobTitle: "AWS Cloud Engineer / Architect",
  jobType: "Hybrid",
  jobCategory: "Cloud",
  mainDescription: `Job Title: AWS Cloud Engineer / Architect
Location: Gothenburg, Sweden (Hybrid – Remote and On-Site)
Department: Professional Services
Employment Type: Full-Time

🧠 Role Overview
Nordcloud, an IBM company, is seeking a proactive and passionate AWS Cloud Engineer / Architect to lead customer transformation journeys. You’ll work on diverse cloud projects—from infrastructure builds to big data solutions—while building long-term, high-trust relationships with enterprise clients.

🔧 Key Responsibilities
- Lead customer projects involving infrastructure builds, migrations, audits, and big data
- Implement configuration management and automation solutions
- Deliver technical workshops and strategic recommendations
- Act as a trusted advisor and co-manage customer roadmaps with the sales team
- Follow projects end-to-end, from design to release
- Travel within Sweden and Europe as needed

✅ Required Qualifications
- 3+ years of hands-on AWS experience (Azure or GCP is a plus)
- Proficiency with Infrastructure-as-Code tools (Terraform, CloudFormation)
- Scripting and automation mindset (Python, Bash, AWS CLI)
- DevOps/DevSecOps or Platform Engineering experience
- Fluent in English and Swedish

🌟 Preferred Skills
- Familiarity with on-prem technologies (VMware, OpenStack, Hyper-V)
- Experience with containers (Kubernetes, ECS, Docker)
- CI/CD pipeline development
- Configuration management tools (Ansible, Chef, Puppet)

🎁 What Nordcloud Offers
- Individual training budget and certification support
- Flexible hours and remote work options
- Laptop and equipment of your choice
- Six weeks of vacation, pension plan, private healthcare (EuroAccident)
- Wellness benefits (Friskvårdsbidrag) via benify.se
- Collective bargaining agreement (Almegas Kollektivavtal – Tech Sverige)

🌍 About Nordcloud
Nordcloud is a European cloud leader with over 1300 employees across 10 countries. As a triple-certified partner (AWS, Azure, GCP), Nordcloud delivers cloud-native solutions and has completed over 1000 successful cloud projects. Recognized by Gartner as a “Visionary” in Public Cloud IT Services.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "aws-cloud-engineer-architect-in-nordcloud-at-Gothenburg-Sweden"
}
, 

  
{
  applyUrl: "https://jobs.lever.co/zenogroup/35ea2845-9dfa-4c9f-837e-b4c3e8e6914d",
  companyName: "Zenogroup",
  companyLogo: "/images/Zenogroup.png",
  location: "Kuala Lumpur, Malaysia",
  jobTitle: "Tech Lead",
  jobType: "Hybrid",
  jobCategory: "General",
  mainDescription: `Here’s a structured and professional summary of the job posting for the Tech Lead role at Zeno Group in Kuala Lumpur:

Job Title: Tech Lead
Location: Kuala Lumpur, Malaysia (Hybrid)
Department: Digital – Web & Technology Development
Employment Type: Full-Time

🧠 Role Overview
Zeno Group is seeking a hands-on Tech Lead to guide technical strategy, mentor developers, and ensure the successful delivery of web, mobile, and AI-driven solutions. This role blends deep technical expertise with leadership, project oversight, and cross-functional collaboration.

🔧 Key Responsibilities
- Define and enforce coding standards, architecture, and development best practices
- Lead technical decision-making and project architecture
- Collaborate with stakeholders to translate business needs into technical plans
- Mentor developers and foster a culture of continuous learning
- Actively contribute to complex coding tasks and full SDLC participation
- Communicate technical concepts clearly to both technical and non-technical audiences

✅ Required Qualifications
- 6–8 years of software development experience, with 2–3 years in a leadership role
- Bachelor’s degree in Computer Information Systems or equivalent
- Full-stack development experience (front-end, back-end, databases)
- Strong background in PHP, JavaScript, Laravel 8+, React, Vue.js, Node.js
- WordPress development expertise (themes, plugins, performance tuning)
- Proficiency in Linux (Ubuntu/Red Hat), Git, Apache/Nginx, and AWS
- Experience integrating OpenAI APIs and Python-based AI frameworks (e.g., TensorFlow)

🌟 Preferred Skills
- Familiarity with headless CMS (Strapi, Contentful, Hygraph)
- CI/CD and cloud infrastructure scaling
- AR/VR technologies (WebXR, Unity, ARKit/ARCore, Three.js)
- Experience in agency or fast-paced product environments
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "tech-lead-in-zenogroup-foster-city-anywhere"
}
, 



{
  applyUrl: "https://job-boards.greenhouse.io/criticalmass/jobs/6854275",
  companyName: "Criticalmass",
  companyLogo: "/images/Criticalmass.png",
  location: "New York",
  jobTitle: "Group Creative Director, Copy",
  jobType: "Full-time",
  jobCategory: "General",
  mainDescription: `Job Title: Group Creative Director, Copy
Location: New York, NY (Hybrid – minimum 3 days/week in office)
Employment Type: Full-Time

🧠 Role Overview
Critical Mass is seeking a master storyteller and strategic leader to guide large creative teams toward excellence in copywriting, campaign development, and digital experiences. As a Group Creative Director, you’ll shape brand narratives, mentor talent, and drive innovation across platforms—from social and web to AI and gaming.

🔧 Key Responsibilities
- Lead creative strategy, execution, and team development across major accounts
- Write and oversee compelling copy that resonates with diverse audiences
- Collaborate with multidisciplinary teams to deliver integrated digital solutions
- Pitch to senior clients and manage external agency partnerships
- Ensure creative quality, operational efficiency, and project delivery
- Mentor and grow creative talent while shaping department staffing plans

✅ Qualifications
- 6+ years as a creative director or lead in an agency setting
- Exceptional writing skills across formats, tones, and platforms
- Deep understanding of digital ecosystems, UX/UI, and emerging tech
- Proven leadership in campaign development and creative innovation
- Strong communication, mentorship, and multitasking abilities

💰 Compensation
- Salary Range: $220,000 – $250,000 USD
- Final offer based on experience, skills, and internal equity

You can view the full job description and apply directly on Critical Mass’s careers page. Let me know if you’d like help crafting a tailored résumé or preparing a standout portfolio—I’d be happy to assist!
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "group-creative-director-copy-in-criticalmass-new-york-united-states"
}
, 


{
  applyUrl: "https://jobs.lever.co/ogury/5b48373b-a221-4ebe-9c56-4d5c7644b33a",
  companyName: "Ogury",
  companyLogo: "/images/Ogury.png",
  location: "Paris",
  jobTitle: "Data Engineer",
  jobType: "Hybrid",
  jobCategory: "Data",
  mainDescription: `Job Title: Data Engineer
Location: Paris, France (Hybrid)
Department: Engineering
Employment Type: Full-Time

🧠 Role Overview
Ogury is seeking a hands-on Data Engineer to join its Data Reporting team. You’ll be responsible for optimizing the data stack, building robust pipelines, and ensuring timely, high-quality data delivery for internal and external stakeholders. This role is ideal for someone who enjoys operational problem-solving and cross-functional collaboration.

🔧 Key Responsibilities
- Reorganize and maintain the data stack to support product and reporting needs
- Build and manage ETL pipelines and reporting systems
- Collaborate with product managers, business owners, and engineering teams
- Focus on data modeling, data quality, and sustainable architecture
- Troubleshoot data workflows and provide operational support
- Integrate systems across data platform, persona, and SSP teams

✅ Required Qualifications
- 3–4 years of experience in data engineering or a similar role
- Strong SQL and Python skills; experience with DBT and data cataloging
- Solid understanding of ETL processes and data modeling
- Practical mindset with strong communication and stakeholder management skills
- Passion for making data accessible and actionable

🎁 Benefits & Perks
- Competitive compensation
- Flexible hours and hybrid work model
- Comprehensive health and wellness support
- Generous holiday allowance and daily meal vouchers
- Inclusive, supportive workplace culture

🌍 About Ogury
Ogury is a global adtech company delivering privacy-first, persona-based advertising solutions. With a team of 500+ across 19 countries, Ogury is committed to innovation, inclusivity, and empowering employees to bring their authentic selves to work.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "data-engineer-in-ogury-paris-france"
}
,

{
  applyUrl: "https://jobs.lever.co/backmarket/1ae7f644-348e-4776-9095-9ac14c30b71a",
  companyName: "Backmarket",
  companyLogo: "/images/Backmarket.png",
  location: "Tokyo, Japan",
  jobTitle: "Senior iOS Engineer (Japan Growth)",
  jobType: "Hybrid",
  jobCategory: "Engineer",
  mainDescription: `Job Title: Senior iOS Engineer – Japan Growth
Location: Tokyo, Japan (On-site)
Department: Bureau of Technology – Mobile
Employment Type: Full-Time, Permanent

📱 Role Overview
Back Market is expanding its mobile presence in Japan and is looking for a Senior iOS Engineer to lead the localization and growth of its m-commerce app. You’ll be the first mobile engineer in the Tokyo office, working closely with local and global teams to adapt the app for Japanese users and build features that resonate with the market.

🔧 Key Responsibilities
- Collaborate with global squads to localize the app for Japan (language, address formats, payment methods like PayPay and Konbini)
- Adapt the app’s Home, Navigation, and Product Pages to align with Japanese user expectations
- Build new features tailored to the Japanese market in collaboration with local teams
- Contribute to the global mobile engineering community and technical initiatives
- Ensure high-quality, scalable, and maintainable iOS code using Swift, UIKit, and SwiftUI
- Implement UI/UX enhancements, accessibility, and performance monitoring

✅ Ideal Candidate Profile
- 3–5+ years of iOS development experience, ideally in Japan or e-commerce
- Strong autonomy and ability to propose impactful ideas
- Deep understanding of Swift, MVVM-C architecture, and SOLID principles
- Experience with UI animations, accessibility, and design systems
- Familiarity with testing practices, performance monitoring (Datadog, Crashlytics), and dependency injection
- Passion for user experience and business impact

🛠 Tech & Tools
- Swift, UIKit, SwiftUI
- MVVM-C architecture, modularization
- Datadog, Crashlytics
- Unit/UI testing, E2E testing
- Design System components

💼 Recruitment Process
- Phone screen with recruiter (1h)
- Technical screening with iOS engineers (~30 min)
- Live coding & system design (~1h45)
- Team fit interview (~30 min)
- Values interview with leadership (~45 min)

🎁 Perks & Benefits
- Mission-driven work with environmental impact
- Hybrid work model (2 remote days/week + flex days)
- 25 days PTO + remote work weeks
- Modern office in Harajuku (WeWork)
- Employee Resource Groups and mentorship programs
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-ios-engineer-japan-growth-in-backmarket-foster-city-anywhere"
}
, 
  
{
  applyUrl: "https://jobs.lever.co/Bosta/fa341c24-f72c-4918-a4c7-d2b75a90b17b",
  companyName: "Bosta",
  companyLogo: "/images/Bosta.png",
  location: "Cairo",
  jobTitle: "Senior Data Analyst",
  jobType: "Hybrid",
  jobCategory: "Analyst",
  mainDescription: `Here’s a clear and professional summary of the job posting for the Senior Data Analyst role at Bosta:

Job Title: Senior Data Analyst
Location: Cairo, Egypt (Hybrid)
Department: Data & Analytics
Employment Type: Full-Time

🧠 Role Overview
Bosta is seeking a Senior Data Analyst to transform complex datasets into actionable insights that drive strategic decisions and business growth. This role involves managing SQL databases, developing data pipelines, and creating impactful visualizations to support cross-functional teams.

🔧 Key Responsibilities
- Build and maintain SQL databases with a focus on performance, integrity, and security
- Handle data extraction requests and optimize query performance
- Develop efficient data extraction processes from multiple sources
- Create clear, insightful visualizations using tools like Python, Tableau, or Power BI
- Collaborate with planning/performance teams to translate business needs into analytical solutions
- Promote a data-driven culture and stay current with analytics trends and tools

✅ Requirements
- Bachelor’s degree in Data Science, Statistics, Computer Science, or a related field
- 3–5 years of experience as a Data Analyst
- Strong SQL skills and database management experience
- Advanced Python skills for analytics and automation
- Experience with data visualization tools (Python, Tableau, Power BI preferred)
- Strong analytical thinking and business acumen
- Prior experience in a tech startup is a plus
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-data-analyst-in-bosta-cairo-egypt"
}
, 


{
  applyUrl: "https://jobs.lever.co/attentive/5fa960fd-03cd-4168-b48c-b3f74c5b96a7",
  companyName: "attentive",
  companyLogo: "/images/attentive.png",
  location: "United States",
  jobTitle: "Senior Software Engineer, Data Platform",
  jobType: "Remote",
  jobCategory: "Data",
  mainDescription: `Job Title: Senior Software Engineer – Data Platform
Location: Remote – United States
Employment Type: Full-Time

🧠 Role Overview
Attentive is seeking a systems-oriented Senior Software Engineer to help build and scale its data platform. This role focuses on designing high-throughput, distributed systems that support AI, ML, and analytics initiatives. You’ll work across infrastructure layers to ensure performance, reliability, and extensibility of mission-critical data pipelines.

🔧 Key Responsibilities
- Architect scalable, high-throughput systems for data access and compute
- Enhance the self-service data platform to support experimentation and innovation
- Solve complex distributed systems challenges and streamline integrations
- Champion modern technologies and best practices in data infrastructure
- Collaborate with cross-functional teams to unify data and enable strategic outcomes

✅ Required Expertise
- Strong debugging skills across application and infrastructure layers
- Deep understanding of distributed systems and storage performance trade-offs
- Proficiency in Java and experience with Spark, Flink, or Kafka
- Familiarity with data warehouses (e.g., Snowflake, Trino) and formats like Iceberg or Parquet
- Experience with CDC, data modeling, and infrastructure-as-code (Terraform)
- Ability to reason about system behavior under load and optimize for cost and performance

🛠 Tech Stack Highlights
- Infrastructure: Kubernetes (EKS), Istio, Terraform, Helm, Cloudflare
- Data & Compute: Spark, Kinesis, Airflow, Snowflake, Postgres, Redis
- Storage Formats: Iceberg, Parquet, Arrow, Hudi
- Languages: Java, Python
- ML & Automation: Metaflow, HuggingFace, PyTorch, TensorFlow

💰 Compensation & Benefits
- Salary Range: $144,840 – $210,000 USD
- Includes equity and comprehensive benefits
- Salary determined by role, level, and location

🌍 Why Join Attentive
Attentive is a leader in AI-powered mobile marketing, trusted by global brands like Samsung and Wayfair. The company fosters a high-performance, inclusive culture and has been recognized by Deloitte, LinkedIn, and Forbes for its rapid growth and innovation.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-software-engineer-data-platform-in-attentive-united-states-united-states"
}
,


{
  applyUrl: "https://jobs.lever.co/attentive/7bed15e4-f4b3-4249-8f11-9c05e65b31fb",
  companyName: "attentive",
  companyLogo: "/images/attentive.png",
  location: "United States",
  jobTitle: "Senior Software Engineer, BI Tooling and Platform",
  jobType: "Remote",
  jobCategory: "Software",
  mainDescription: `Job Title: Senior Software Engineer – BI Tooling & Platform
Location: Remote – United States
Employment Type: Full-Time

🧠 Role Overview
Attentive is hiring a Senior Software Engineer to join its Business Intelligence (BI) Tooling & Platform team. In this role, you’ll help build the foundation for how metrics are created, accessed, and trusted across the company. You’ll collaborate with engineers, product managers, and stakeholders to develop scalable backend systems that power data-driven decision-making.

🔧 Key Responsibilities
- Design and implement backend systems that support BI metrics and reporting
- Collaborate with product managers to balance user needs with technical quality
- Prevent regressions through robust testing and code quality practices
- Mentor junior engineers and advocate for long-term architectural improvements
- Build scalable APIs, microservices, and data access layers
- Translate business goals into technical roadmaps and deliverables

✅ Required Qualifications
- 5+ years of backend software development experience
- Advanced proficiency in Java and object-oriented programming
- Experience with microservices, GraphQL, and API development
- Familiarity with relational and non-relational databases and streaming technologies
- Strong communication skills and ability to work cross-functionally
- Proven ability to deliver high-scale, high-quality applications

🌟 Preferred Skills
- Experience with SQL, data analysis, and data engineering
- Familiarity with AWS, Airflow, and cloud infrastructure
- Knowledge of Kafka, Pulsar, Docker, and Kubernetes

🛠 Tech Stack Highlights
- Languages & Frameworks: Java, Python, GraphQL
- Data & Analytics: Snowflake, DBT, SQL, Looker
- Infrastructure: AWS, Airflow, Spark, Kinesis, Postgres
- DevOps: Docker, Kubernetes

💰 Compensation & Benefits
- Salary Range: $156,400 – $240,000 USD
- Includes equity and comprehensive benefits
- Salary determined by role, level, and location
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "senior-software-engineer-bi-tooling-and-platform-in-attentive-united-states-united-states"
}
, 



{
  applyUrl: "https://jobs.lever.co/attentive/cc058dd9-0ab9-4f3e-a346-821d3e981213",
  companyName: "attentive",
  companyLogo: "/images/attentive.png",
  location: "United States",
  jobTitle: "Staff Site Reliability Engineer",
  jobType: "Remote",
  jobCategory: "Engineer",
  mainDescription: `Job Title: Staff Site Reliability Engineer
Location: Remote – United States
Employment Type: Full-Time

🧠 Role Overview
Attentive is seeking a Staff Site Reliability Engineer to join its Platform Infrastructure team. You’ll play a strategic role in designing scalable, reliable systems that support billions of daily events across 100M+ users. This role is ideal for engineers who thrive in high-impact environments and want to shape the future of observability, automation, and platform resilience.

🔧 Key Responsibilities
- Design and implement systems to improve reliability, observability, and incident management
- Lead cross-team initiatives and provide technical leadership
- Collaborate with AI/ML, Data, Platform, and Product teams to deliver scalable services
- Define and enforce production standards and operational best practices
- Champion SLIs, SLOs, and reliability metrics across engineering
- Mentor engineers and contribute to technical roadmaps
- Drive innovation and continuous improvement in platform infrastructure

✅ Required Qualifications
- 7+ years in SRE, DevOps, or backend engineering roles
- Strong coding skills in Golang, Python, Java, or TypeScript
- Proven experience delivering large-scale, reliable systems
- Deep understanding of SLIs, SLOs, and incident response
- Excellent communication and cross-functional collaboration skills
- Experience in fast-paced, production-critical environments

🛠 Tech Stack Highlights
- Infrastructure: Kubernetes (EKS), Istio, Terraform, Helm, Cloudflare
- Monitoring: Datadog
- Backend: Java/Spring Boot, DynamoDB, Kinesis, Redis, Postgres, Planetscale
- Frontend: React, TypeScript, GraphQL, Storybook, Vite
- ML/Automation: Python, Metaflow, HuggingFace, PyTorch, TensorFlow

💰 Compensation & Benefits
- Salary Range: $156,000 – $240,000 USD
- Includes equity and comprehensive benefits
- Salary determined by role, level, and location

🌍 Why Join Attentive
Attentive is a leader in AI-powered mobile marketing, trusted by global brands like Samsung and Wayfair. The company fosters a high-performance, inclusive culture and has been recognized by Deloitte, LinkedIn, and Forbes for its rapid growth and innovation.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "staff-site-reliability-engineer-in-attentive-united-states-united-states"
}
, 


{
  applyUrl: "https://jobs.lever.co/paytm/175c41e6-2ef0-4920-9b68-cf03c45b46eb",
  companyName: "paytm",
  companyLogo: "/images/paytm.png",
  location: "Uttar Pradesh",
  jobTitle: "DBA - Senior MySQL DBA",
  jobType: "Full-time",
  jobCategory: "General",
  mainDescription: `Job Title: Senior MySQL Database Administrator (DBA)
Location: Noida, Uttar Pradesh / Bangalore, Karnataka (On-site)
Department: Infra Technology – Labs
Employment Type: Full-Time, On-Roll

🧠 Role Overview
As a Senior MySQL DBA at Paytm, you’ll be responsible for ensuring the performance, integrity, and security of MySQL databases. This includes planning, development, and troubleshooting in a high-scale, cloud-based environment.

🔧 Key Responsibilities
- Manage and optimize MySQL databases, including AWS RDS and Aurora
- Handle replication, user management, and backup/restore operations
- Create and manage machines manually or via Terraform
- Administer AWS infrastructure and AMI creation
- Ensure database security, availability, and performance

✅ Requirements
- 3–6 years of experience in MySQL database administration
- Strong hands-on experience with AWS RDS and Aurora
- Proficiency in replication, AWS admin tasks, and Terraform
- Experience with backup strategies and restoration processes

🌟 Why Join Paytm
- Work on high-impact systems supporting 500M+ users and 21M+ merchants
- Collaborate across teams in a tech-driven, output-focused environment
- Be part of India’s largest digital lending and payments ecosystem
- Earn respect through contribution, not hierarchy
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString(),
  id: "dba-senior-mysql-dba-in-paytm-uttar-pradesh-india"
}
, 
{
  applyUrl: 'https://jobs.lever.co/paytm/51b8894c-a048-432c-a301-b0f19b3562a7',
  companyName: 'paytm',
  companyLogo: '/images/paytm.png',
  location: 'Uttar Pradesh',
  jobTitle: 'Cassandra - Senior Lead DBA',
  jobType: 'Full-time',
  jobCategory: 'General',
  mainDescription: `Job Title: Senior Lead DBA – Cassandra
Location: Noida, Uttar Pradesh (On-site)
Department: Infra Technology – Labs
Employment Type: Full-Time, On-Roll

🧠 Role Overview
Paytm is seeking a seasoned Cassandra Database Administrator to lead the performance, integrity, and security of its distributed database systems. This role involves hands-on management of Cassandra clusters, performance tuning, and ensuring high availability and disaster recovery across mission-critical systems.

🔧 Key Responsibilities
- Configure, install, and manage Cassandra clusters (including multi-DC setups)
- Monitor and optimize performance using tools like Grafana, Prometheus, and cqlsh
- Handle node additions/removals, upgrades, and cluster scaling
- Design and maintain data models (column families/tables)
- Implement backup, restore, and disaster recovery strategies
- Troubleshoot performance issues, including deadlocks and blocking
- Translate business requirements into technical database designs
- Maintain documentation and enforce database security best practices
- Support MySQL and document management systems as needed

✅ Required Experience & Skills
- 6+ years of experience in Cassandra administration
- Strong grasp of Cassandra architecture and distributed systems
- Proficiency in query and script optimization
- Experience with data migration and transformation
- Familiarity with security, backup, and recovery procedures
- Ability to work under pressure and meet tight deadlines

🌟 Why Join Paytm
- Be part of India’s largest digital lending and payments ecosystem
- Collaborate across high-impact teams in a tech-driven environment
- Contribute to scalable solutions that empower 500M+ users and 21M+ merchants
- Earn respect through performance and peer recognition
`,
  status: 'approved',
  isFeatured: true,
  requirements: '',
  submittedDate: new Date().toISOString(),
  id: 'cassandra-senior-lead-dba-in-paytm-uttar-pradesh-india'
}
, 



 {
  applyUrl: 'https://jobs.lever.co/emma-sleep/0ea5bd23-14a1-4962-92d5-19f9c591fbde',
  companyName: 'emma',
  companyLogo: '/images/emma.png',
  location: 'Berlin',
  jobTitle: '(Senior) Data Scientist- Marketing Intelligence',
  jobType: 'Remote',
  jobCategory: 'Data',
  mainDescription: `Job Title: (Senior) Data Scientist – Marketing Intelligence
Location: Remote (Frankfurt, Lisbon, or Berlin)
Department: Technology – Data
Employment Type: Full-Time

🧠 Role Overview
Emma is seeking a (Senior) Data Scientist to join its Marketing Intelligence team. You’ll develop advanced models and analytics solutions that drive strategic marketing decisions across global markets. This role is ideal for someone passionate about applying machine learning and statistical modeling to optimize marketing performance and budget allocation.

🔧 Key Responsibilities
- Build and deploy machine learning models to support marketing decision-making
- Evaluate marketing effectiveness using attribution modeling, incrementality testing, and media mix modeling
- Conduct end-to-end data analysis: from data preparation to model training and evaluation
- Promote best practices in ML, statistics, and predictive modeling within the team
- Collaborate with data scientists, engineers, and analysts to deliver actionable insights

✅ Requirements
- Master’s or PhD in Computer Science, Data Science, Statistics, Applied Mathematics, or related field
- 3+ years of industry experience as a Data Scientist
- Strong knowledge of ML algorithms and statistical techniques
- Proficiency in Python and libraries such as scikit-learn, TensorFlow, or PyTorch
- Experience with cloud platforms (e.g., AWS), MLOps, and version control
- Ability to deploy and maintain models in production
- Strong communication skills and ability to translate technical insights for business stakeholders

🌟 Why Join Emma
- Work in a fast-growing, globally recognized D2C brand
- Collaborate with a diverse team of over 60 nationalities
- Contribute to a mission-driven company transforming the sleep industry
- Enjoy a culture of ownership, innovation, and continuous learning
`,
  status: 'approved',
  isFeatured: true,
  requirements: '',
  submittedDate: new Date().toISOString(),
  id: '-senior-data-scientist-marketing-intelligence-in-emma-berlin-germany'
}
, 



{
  applyUrl: 'https://jobs.dropbox.com/listing/6859034',
  companyName: 'dropbox',
  companyLogo: '/images/dropbox.png',
  location: 'Poland',
  jobTitle: 'Data Engineer, Analytics Data Engineering',
  jobType: 'Remote',
  jobCategory: 'Analyst',
  mainDescription: `Job Title: Data Engineer – Analytics Data Engineering
Location: Remote – Poland
Employment Type: Full-Time

🧠 Role Overview
Dropbox is seeking a Data Engineer to help build scalable analytics pipelines and data models from the ground up using modern big data technologies. This is a hands-on, high-impact role ideal for someone who thrives in greenfield environments and enjoys solving complex data architecture challenges.

🔧 Key Responsibilities
- Design and implement Spark, SparkSQL, and HiveSQL jobs to populate data models
- Define data integrations, quality frameworks, and lineage tools
- Architect scalable, reliable, and efficient data platforms
- Collaborate with engineering, product, and data science teams to deliver insights
- Build and launch sophisticated data models and visualizations
- Optimize pipelines, dashboards, and frameworks for development efficiency
- Occasionally participate in on-call rotations to support platform stability

✅ Required Qualifications
- 5+ years of experience with Spark, Python, Java, C++, or Scala
- 5+ years of SQL and schema design experience, including medallion architecture
- Experience with Databricks and data lake architectures
- Strong communication and product strategy skills
- Bachelor’s degree in Computer Science or related technical field

🌟 Preferred Qualifications
- 7+ years of SQL and data modeling experience
- Experience with Airflow or similar orchestration tools
- Familiarity with data quality monitoring tools like Monte Carlo

💰 Compensation
- Salary Range: 183,600 – 248,400 PLN annually
- Includes eligibility for RSUs and corporate bonus program

🎁 Benefits & Perks
- Medical, dental, and vision coverage
- Retirement savings plan
- Flexible PTO and statutory holidays
- Life and disability insurance
- Wellness and learning perks allowance
- Parental and fertility benefits
- Mental health support

🌍 Why Join Dropbox
Dropbox is a Virtual First company that empowers distributed teams to build the future of work. The engineering team blends startup agility with enterprise scale, solving complex challenges that impact hundreds of millions of users.
`,
  status: 'approved',
  isFeatured: true,
  requirements: '',
  submittedDate: new Date().toISOString(),
  id: 'data-engineer-analytics-data-engineering-in-dropbox-poland-poland'
}
, 

{
  applyUrl: 'https://jobs.dropbox.com/listing/6936162',
  companyName: 'dropbox',
  companyLogo: '/images/dropbox.png',
  location: 'United States',
  jobTitle: 'Senior Android Software Engineer',
  jobType: 'Remote',
  jobCategory: 'Software',
  mainDescription: `Job Title: Senior Android Software Engineer
Location: Remote — U.S. (Zones 2 & 3 only)
Employment Type: Full-Time

📱 About the Role
Dropbox is looking for a seasoned Senior Android Engineer to shape the future of its mobile platform. You’ll be responsible for creating high-quality, user-centric features on the Android app used by millions, while solving complex technical challenges and collaborating across disciplines in a distributed team.

🔧 Key Responsibilities
- Build and optimize new Android app features with a focus on user experience, performance, and scalability
- Lead initiatives to resolve technical debt and guide architecture modernization
- Promote engineering best practices including testing, code quality, and performance standards
- Mentor and support junior engineers
- Work cross-functionally to align product delivery with business and user needs
- Stay current with Android trends and introduce innovative approaches
- Participate in on-call rotations as part of operational support

✅ Requirements
- Bachelor’s degree in Computer Science or related technical field (or equivalent experience)
- 8+ years of Android development experience
- Deep understanding of Android architecture and large native codebases
- Experience in team leadership and cross-functional collaboration
- Passion for building well-designed, high-impact consumer applications

🌟 Preferred Qualifications
- Proficiency in Kotlin
- Experience launching and maintaining applications at large scale (hundreds of thousands+ users)

💰 Compensation
| Zone | Base Salary Range (USD) | 
| Zone 2 | $195,800 – $265,000 | 
| Zone 3 | $174,100 – $235,500 | 


Includes eligibility for RSUs and annual bonus. Zone 1 (SF, NYC, Seattle metro) is excluded for this role.

🎁 Benefits & Perks
- Medical, dental, and vision coverage
- 401(k) with generous company match and immediate vesting
- Flexible paid time off and holidays
- Life and disability insurance
- Monthly perks allowance (wellness, learning, groceries, etc.)
- Parental leave, fertility, adoption, and lactation support
- Global coworking access and remote-first flexibility
- Mental health and neurodivergence support

🌍 Why Join Dropbox
As a Virtual First company, Dropbox empowers people to work collaboratively without location constraints. The mobile engineering team combines enterprise scale with startup energy—making every engineer a key contributor to building a better digital workspace for the world.
`,
  status: 'approved',
  isFeatured: true,
  requirements: '',
  submittedDate: new Date().toISOString(),
  id: 'senior-android-software-engineer-in-dropbox-United-State'
}
, 



{
  applyUrl: 'https://jobs.dropbox.com/listing/6936165',
  companyName: 'dropbox',
  companyLogo: '/images/dropbox.png',
  location: 'Canada',
  jobTitle: 'Senior Android Software Engineer',
  jobType: 'Remote',
  jobCategory: 'Software',
  mainDescription: `Job Title: Senior Android Software Engineer
Location: Remote – Canada (Open to Alberta, British Columbia, Ontario, and Saskatchewan)
Employment Type: Full-Time

📱 Role Overview
As a Senior Android Software Engineer at Dropbox, you'll play a pivotal role in shaping mobile experiences for millions of users. You’ll drive the design, development, and optimization of advanced features in the Android app—ensuring it’s secure, scalable, and performance-oriented. This role offers significant ownership, influence across cross-functional teams, and the opportunity to lead technical problem-solving at scale.

🔧 Key Responsibilities
- Design and implement sophisticated Android features and frameworks
- Tackle complex architectural and codebase challenges
- Mentor junior engineers, promote engineering best practices, and lead by example
- Improve application performance, scalability, and security
- Lead cross-functional initiatives aligned with product strategy
- Stay on the pulse of the latest Android development trends
- Participate in on-call rotations when required

✅ Basic Requirements
- 8+ years of software engineering experience, with deep focus on Android development
- Proficiency in Kotlin (preferred) and strong engineering fundamentals
- Bachelor’s degree in Computer Science or related field
- Experience building and supporting high-scale Android applications
- Excellent communication and collaboration across disciplines
- Passion for user-centered mobile development with intuitive, clean UI

🌟 Preferred Qualifications
- Experience leading Android development teams
- Track record of launching apps used by hundreds of thousands of users
- Strong debugging, testing, and CI/CD practices

💰 Compensation & Benefits
- Salary Range: $184,500 – $249,500 CAD (may vary by location)
- Eligible for RSUs and company-wide performance bonuses
- Flexible PTO, wellness and lifestyle perks
- Health, dental, and vision coverage
- Parental leave and fertility/adoption support
- Retirement savings program and income protection plans
- Mental health support and access to 10,000+ coworking spaces worldwide

🌍 Why Join Dropbox
Dropbox is a Virtual First company shaping the future of collaboration through human-centered technology. The mobile engineering team blends startup agility with enterprise scale, solving challenging problems to deliver delightful user experiences on a global stage.
`,
  status: 'approved',
  isFeatured: true,
  requirements: '',
  submittedDate: new Date().toISOString(),
  id: 'senior-android-software-engineer-in-dropbox-canada-canada'
}
, 



{
  applyUrl: 'https://jobs.dropbox.com/listing/6936170',
  companyName: 'dropbox',
  companyLogo: '/images/dropbox.png',
  location: 'Mexico',
  jobTitle: 'iOS Software Engineer, Mobile Collaboration',
  jobType: 'Remote',
  jobCategory: 'Software',
  mainDescription: `Job Title: iOS Software Engineer – Mobile Collaboration
Location: Remote – Mexico City, Mexico
Employment Type: Full-Time

📱 Role Overview
Dropbox is looking for an iOS Software Engineer to join its Mobile Collaboration team. You’ll play a key role in designing and delivering elegant, intuitive experiences within the Dropbox mobile app. Your work will help users seamlessly engage with their content across platforms and enhance Dropbox's mission to simplify the way the world works.

🔧 Key Responsibilities
- Build user-centric features for the Dropbox iOS application
- Solve high-impact technical challenges in a complex native codebase
- Collaborate with product managers and designers to develop thoughtful, goal-aligned features
- Maintain and improve code quality through rigorous reviews and adherence to best practices
- Apply advanced debugging and performance optimization techniques
- Stay current with iOS development trends and contribute to team learning
- Foster effective team communication and support peer development
- Participate in on-call rotations as needed

✅ Required Qualifications
- Bachelor’s degree in Computer Science or a related field, or equivalent technical experience
- 5+ years of experience in mobile software development
- Proficient in iOS development with strong engineering fundamentals
- Experience working on large, complex native codebases
- Proven team collaborator with a passion for building sleek, user-facing apps

🌟 Preferred Skills
- Proficiency in Swift
- Experience building and supporting large-scale mobile applications

🎁 Benefits & Perks
- Medical, dental, and vision allowances
- Income protection and retirement savings support
- Flexible PTO, wellness resources, and mental health benefits
- Parental leave and family-forming support (fertility, surrogacy, adoption)
- Lifestyle and learning perks via Dropbox’s Perks Allowance
- Travel and accident insurance for business trips

🌍 Why Join Dropbox?
As a Virtual First company, Dropbox empowers a globally distributed workforce with the autonomy to thrive. The Mobile Engineering team builds features used by millions every day—combining technical creativity with startup agility and enterprise scale.
`,
  status: 'approved',
  isFeatured: true,
  requirements: '',
  submittedDate: new Date().toISOString(),
  id: 'ios-software-engineer-mobile-collaboration-in-dropbox-mexico-mexico'
}
, 

{
id:'senior-ios-software-engineer-in-dropbox-United-States',
  applyUrl: 'https://jobs.dropbox.com/listing/6936176',
  companyName: 'dropbox',
  companyLogo: '/images/dropbox.png',
  location: 'United States',
  jobTitle: 'Senior iOS Software Engineer',
  jobType: 'Remote',
  jobCategory: 'Software',
  mainDescription: `Job Title: Senior iOS Software Engineer
Location: Remote – U.S. (Zones 2 & 3 only)
Employment Type: Full-Time

🧠 Role Overview
Dropbox’s Mobile Engineering team is reinventing how users manage and interact with digital content through intuitive mobile experiences. As a Senior iOS Engineer, you’ll play a critical role in building elegant, responsive features into the Dropbox app. You’ll work cross-functionally and lead efforts to elevate architectural scalability, code quality, and mobile UX.

🔧 Key Responsibilities
- Develop cutting-edge features for the Dropbox iOS app, focused on performance and user impact
- Guide architectural improvements and address complex codebase challenges
- Mentor team members and uphold best practices in testing, security, and efficiency
- Drive end-to-end development and successful feature delivery
- Stay on the forefront of iOS trends and lead tech-driven innovation
- Foster open collaboration across engineering, product, and design

✅ Qualifications
- Bachelor’s degree in Computer Science or a related technical field
- 8+ years of mobile software engineering experience
- Deep knowledge of iOS architecture and app lifecycle
- Skilled at debugging, scaling, and improving large native codebases
- Strong collaboration and leadership experience
- Passion for clean, consumer-grade UI design and development

🌟 Preferred Skills
- Proficiency in Swift
- Experience shipping and supporting high-usage iOS applications
- Familiarity with Agile practices and mobile performance optimization

💰 Compensation
| Location Zone | Salary Range (USD) | 
| Zone 2 | $195,800 – $265,000 | 
| Zone 3 | $174,100 – $235,500 | 


Includes base salary and eligibility for bonuses and RSUs

🎁 Benefits & Perks
- Comprehensive health coverage
- Flexible PTO, volunteer days, and holiday leave
- 401(k) with company match
- Parental and family support benefits
- Mental health, wellness, and lifestyle perks
- Quarterly phone/internet stipend
- Global coworking access


`,
  status: 'approved',
  isFeatured: true,
  requirements: '',
  submittedDate: new Date().toISOString()
}
, 




{
id:'Senior-iOS-Software-Engineer-in-Canada-at-Dropbox',
  applyUrl: 'https://jobs.dropbox.com/listing/6936179',
  companyName: 'dropbox',
  companyLogo: '/images/dropbox.png',
  location: 'Canada',
  jobTitle: 'Senior iOS Software Engineer',
  jobType: 'Remote',
  jobCategory: 'Software',
  mainDescription: `Job Title: Senior iOS Software Engineer
Location: Remote – Canada (Alberta, British Columbia, Ontario, Saskatchewan only)
Department: Mobile Engineering
Employment Type: Full-Time

📱 Role Summary
Dropbox’s Mobile Engineering team is redefining how users interact with digital content on the go. As a Senior iOS Software Engineer, you'll shape the Dropbox iOS app experience, working across platforms, solving complex technical challenges, and collaborating with multidisciplinary teams. Your contributions will reach millions of users and redefine mobile file interaction in a distributed-first environment.

🔧 Key Responsibilities
- Build innovative and user-friendly features for Dropbox’s iOS app
- Lead architectural improvements and scalability upgrades across the codebase
- Identify and resolve advanced performance, security, and reliability issues
- Champion engineering best practices and mentor junior engineers
- Guide cross-functional teams from feature development through production release
- Stay current with iOS advancements and share insights with the team
- Foster a collaborative, inclusive engineering culture

✅ Required Qualifications
- 8+ years of experience in iOS/mobile software development
- Bachelor’s degree in Computer Science or equivalent technical background
- Strong expertise in iOS software architecture and performance optimization
- Experience working on large, complex native codebases
- Leadership experience within cross-functional development teams
- Passion for crafting clean, elegant, and consumer-focused interfaces

🌟 Preferred Skills
- Proficiency in Swift
- Background in delivering and maintaining high-scale iOS apps
- Experience supporting apps used by hundreds of thousands of users

💰 Compensation (CAD)
- Salary Range: $184,500 – $249,500 annually
- Bonus and RSU (stock) eligibility included as part of total compensation package

🎁 Benefits & Perks
- Flexible paid time off and statutory holidays
- Comprehensive health, dental, and vision coverage
- Defined contribution pension or savings plan
- Generous parental benefits and fertility support
- Mental health, wellness, and perks allowance
- Business travel and income protection insurance
Learn more at go.atlassian.com/perksandbenefits (Note: Dropbox’s specific link may differ)

🌍 About Dropbox
Dropbox is a Virtual First company revolutionizing work through innovative tools like Dropbox Dash and Sign. With a remote-first structure and a collaborative, equity-driven culture, Dropbox empowers its engineers to ship bold solutions that scale globally and inspire the future of digital productivity.
`,
  status: 'approved',
  isFeatured: true,
  requirements: '',
  submittedDate: new Date().toISOString()
}
, 




{
id:'Senior-Backend-Product-Software-Engineer-Storage-Management-United-States-at-dropbox',
  applyUrl: 'https://jobs.dropbox.com/listing/6936191',
  companyName: 'dropbox',
  companyLogo: '/images/dropbox.png',
  location: 'United States',
  jobTitle: 'Senior Backend Product Software Engineer, Storage Management',
  jobType: 'Remote',
  jobCategory: 'Backend',
  mainDescription: `Job Title: Senior Backend Product Software Engineer – Storage Management
Location: Remote – U.S. (Zone 2 & Zone 3 only)
Employment Type: Full-Time

💡 About the Role
Dropbox is integrating AI-powered capabilities like Dropbox Dash into its core File, Sync, and Share (FSS) platform. As a Senior Backend Product Engineer, you’ll reimagine how users interact with their files—building seamless, intelligent experiences powered by machine learning, semantic search, and generative AI.
This is a strategic position with broad visibility and impact, focused on delivering intuitive, next-generation productivity experiences to millions.

🔧 Key Responsibilities
- Design and ship AI-driven backend features within Dropbox’s FSS platform
- Embed intelligent workflows like onboarding and search powered by Dash (ask, summarize, search)
- Collaborate cross-functionally with product, design, and AI platform teams
- Take projects end-to-end—from concept and architecture through iteration and release
- Participate in on-call rotations to maintain service reliability

✅ Required Qualifications
- 8+ years of software development experience, including 1–2 years working on AI/ML-powered features
- Proven ability to build and ship production-ready AI-integrated products
- Bachelor's in Computer Science or a related field (or equivalent practical experience)
- Strong product instincts and comfort navigating ambiguity
- Versatility working across tech stacks and system boundaries

🌟 Preferred Experience
- Familiarity with semantic search, embeddings, and LLM (large language model) UX design
- Experience shipping full-stack or system-spanning features
- Strong user-centric mindset and ability to define product behavior

💰 Compensation
| U.S. Zone | Annual Salary Range | 
| Zone 2 | $195,800 – $265,000 USD | 
| Zone 3 | $174,100 – $235,500 USD | 


Note: This role is not available in Zone 1 (SF, NYC, Seattle metro).
Dropbox compensation includes salary, bonus eligibility, and RSUs (Restricted Stock Units).

🎁 Benefits & Perks
- Competitive healthcare (medical, dental, vision)
- Flexible paid time off & volunteer days
- Retirement plan with immediate vesting
- Perks allowance for wellness, learning, and essentials
- Family & fertility benefits, adoption support
- Access to 10,000+ coworking locations worldwide
- Quarterly internet and cell phone stipend
- Mental health and neurodivergence support

🌍 Why Dropbox
Dropbox is a Virtual First company that blends remote flexibility with deep team collaboration. By integrating AI into the heart of its platforms, Dropbox is shaping the future of work—focusing on simplicity, user empowerment, and joy in productivity.
`,
  status: 'approved',
  isFeatured: true,
  requirements: '',
  submittedDate: new Date().toISOString()
}

,

{
  id: 'Senior-Backend-Product-Software-Engineer-Storage-Management-in-Canada-at-dropbox',
  applyUrl: 'https://jobs.dropbox.com/listing/6936194',
  companyName: 'dropbox',
  companyLogo: '/images/dropbox.png',
  location: 'Canada',
  jobTitle: 'Senior Backend Product Software Engineer, Storage Management',
  jobType: 'Remote',
  jobCategory: 'Backend',
  mainDescription: `Job Title: Senior Backend Product Software Engineer – Storage Management
Location: Remote – Canada (Alberta, British Columbia, Ontario, Saskatchewan only)
Employment Type: Full-Time

🔍 Role Summary
Dropbox is advancing its core platform by integrating AI-powered features directly into its File, Sync, and Share (FSS) experiences. This role centers on embedding Dropbox Dash—an AI universal search tool—into user workflows. As a Senior Backend Engineer, you’ll help reshape how users interact with their files through intelligent onboarding, semantic search, and generative AI-enhanced media management.

💼 Key Responsibilities
- Build and integrate AI-driven experiences directly into Dropbox’s core file system
- Collaborate with cross-functional teams (design, product, AI platform) to ship end-to-end features
- Streamline user onboarding and team workflows using smart automation
- Integrate Dash tools like smart search, Q&A, and summarization
- Prototype, implement, and iterate on production-ready features
- Participate in on-call rotations as required by the team

✅ Requirements
- 8+ years in software development, including 1–2 years working on AI/ML-driven products
- Bachelor’s in Computer Science or related field, or equivalent experience
- Demonstrated success shipping AI-powered features to users
- Strong product instincts and ability to navigate ambiguous challenges
- Comfortable working across the stack and system boundaries

🌟 Preferred Experience
- Familiarity with LLMs, embeddings, or semantic search
- History of shipping full-stack, production-scale solutions
- Strong ability to define user-facing features and product experiences

💰 Compensation (CAD)
- Salary Range: $184,500 – $249,500
- Eligible for annual bonus and RSUs (Restricted Stock Units)
- Actual compensation may vary based on experience and market

🎁 Benefits & Perks
- Competitive healthcare coverage (medical, dental, vision)
- Flexible PTO and national holiday observance
- Defined contribution retirement plans
- Wellness perks, learning allowances, and family-focused benefits
- Comprehensive parental and fertility support programs
Full details: go.atlassian.com/perksandbenefits (Note: placeholder link from earlier posts—Dropbox-specific link may differ)

🌐 About Dropbox
Dropbox is a distributed-first workplace where engineering drives innovation at scale. From syncing billions of files a day to launching AI-powered tools like Dropbox Dash, engineers at Dropbox solve deep technical problems that reshape collaboration. If you’re passionate about building intelligent experiences for global users, this is your opportunity to make a massive impact.
`,
  status: 'approved',
  isFeatured: true,
  requirements: '',
  submittedDate: new Date().toISOString()
}
,

{
id: "Senior-Software-Development-Engineer-in-Test-Dash-Connectors-in-polad-at-dropbox",
  applyUrl: 'https://jobs.dropbox.com/listing/6946624',
  companyName: 'dropbox',
  companyLogo: '/images/dropbox.png',
  location: 'Poland',
  jobTitle: 'Senior Software Development Engineer in Test, Dash Connectors',
  jobType: 'Remote',
  jobCategory: 'Software',
  mainDescription: `Job Title: Senior Software Development Engineer in Test (SDET) – Dash Connectors
Location: Remote – Poland
Team: Engineering – Dash Connectors
Employment Type: Full-time

🧠 Role Overview
Dropbox is hiring a Senior SDET to help lead quality initiatives for its AI-powered Dash platform. You’ll design and implement robust test automation frameworks to ensure the performance, security, and reliability of the Connectors Platform. This role is key to delivering high-quality experiences and establishing scalable testing practices as Dropbox expands intelligent product capabilities.

🧩 Key Responsibilities
- Architect and build high-quality test automation solutions using tools like Playwright and Selenium
- Own quality metrics, test strategies, and automation pipelines across Dash Connectors
- Lead risk assessments for releases and advocate for test coverage and code quality
- Collaborate cross-functionally with product managers, developers, and design to define and meet quality goals
- Deliver testing strategies for both frontend (TypeScript, React) and backend (Python, Node.js) services
- Enhance CI/CD pipelines and automate regression tests with Docker, Jenkins, or similar tools

✅ Required Experience
- 8+ years in software engineering, including 4+ years in automation and quality engineering
- Proficiency in designing, implementing, and scaling end-to-end test frameworks
- Strong command of Playwright, Selenium, or related UI testing libraries
- Hands-on experience with modern frontend and backend stack testing
- Familiarity with CI/CD infrastructure, containers, and build systems
- Bachelor’s degree in Computer Science or equivalent practical experience

🌟 Preferred Qualifications
- Experience testing systems across platforms (Web, Mobile, API, Desktop)
- Proven ability to define quality strategies for distributed systems
- Strong focus on customer experience and product quality at scale
- History of influencing technical direction across teams

💰 Compensation Range (Poland):
314,500 zł – 425,500 zł PLN annually
Includes eligibility for bonuses and RSUs (equity)

🎁 Benefits & Perks
- Flexible PTO and local holidays
- Competitive medical, dental, and vision coverage
- Parental benefits and fertility support
- Mental health and wellness programs
- Monthly perks allowance for wellness, food, learning, and more
- Retirement plan options and income protection
- Remote-first working model

🌍 About Dropbox
Dropbox is a virtual-first, globally distributed company focused on creating intuitive, intelligent, and human-centered digital workspaces. Its platforms—including Dropbox Dash, Dropbox Sign, and core file sync—serve hundreds of millions of users, solving large-scale engineering challenges that transform how people work together.
`,
  status: 'approved',
  isFeatured: true,
  requirements: '',
  submittedDate: new Date().toISOString()
}

,

{
id: "Frontend-Product-Software-Engineer-Design-Systems-in-Mexico-at-dropbox",
  applyUrl: "https://jobs.dropbox.com/listing/6989198",
  companyName: "dropbox",
  companyLogo: "/images/dropbox.png",
  location: "Mexico",
  jobTitle: "Frontend Product Software Engineer, Design Systems",
  jobType: "Remote",
  jobCategory: "Product",
  mainDescription: `Job Title: Frontend Product Software Engineer – Design Systems
Location: Remote – Mexico City, Mexico
Team: Engineering
Employment Type: Full-Time

🧠 Role Summary
Dropbox is hiring a frontend engineer to join its Design Systems team. You will help develop and maintain DIG, Dropbox’s internal design system. Your contributions will empower product teams to build cohesive, accessible, and efficient user interfaces across Dropbox’s product suite.

🔧 Key Responsibilities
- Develop and maintain scalable and accessible UI components using modern front-end tools
- Collaborate with designers and engineers to convert designs into reusable code
- Ensure WCAG compliance and system-wide accessibility
- Participate in architecture decisions and component documentation
- Support cross-functional teams in using and extending the design system
- Troubleshoot internal component issues and provide timely fixes
- Continuously explore and apply best practices in frontend technology and design systems

✅ Requirements
- 2+ years of professional frontend engineering experience
- Proficiency with HTML, CSS, JavaScript, and modern frameworks (React, Vue, Angular)
- Experience working with design systems or component libraries
- Familiarity with accessibility standards (WCAG, ARIA)
- Ability to translate Figma designs into pixel-perfect components
- Strong collaboration and communication skills
- Bachelor’s degree in Computer Science or equivalent experience

🌟 Preferred Experience
- Built or maintained large-scale design systems in an agile environment
- Familiarity with CI/CD, testing frameworks, and web accessibility testing
- Strong grasp of CSS methodologies and responsive design
- Experience with automated component library publishing

🎁 Dropbox Benefits
- Comprehensive health and wellness allowances
- Flexible PTO plus national holidays
- Perks Allowance for learning, wellness, or essentials
- Generous parental benefits and mental health support
- Remote-first work environment with deep emphasis on belonging and inclusion

🌍 About Dropbox
Dropbox builds collaboration tools that enhance how people work. With a startup mindset and enterprise-level impact, you’ll join a global team driving intuitive, scalable technology and shaping the future of distributed work.
`,
  status: "approved",
  isFeatured: true,
  requirements: "",
  submittedDate: new Date().toISOString()
}
, 





 {applyUrl: 'https://www.atlassian.com/company/careers/details/19866', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'India', jobTitle: 'Data Engineer', jobType: 'Remote', jobCategory: 'Data', mainDescription: `Job Title: Data Engineer
Department: Analytics & Data Science
Location: Bengaluru, India – Remote-Friendly
Employment Type: Full-Time

💡 Role Overview
Atlassian is looking for an experienced Data Engineer to help scale its high-volume analytics platform that ingests over 180 billion events each month. This role supports data-driven decision-making across departments including finance, sales, customer support, growth, and marketing. You’ll contribute to building efficient data pipelines, modeling structured data, and developing metrics that shape product and business strategies.

🔧 Key Responsibilities
- Design and maintain scalable data models that meet evolving business requirements
- Build robust batch and real-time data pipelines with Spark, Airflow, and microservices
- Work cross-functionally with stakeholders to ensure data alignment and accuracy
- Create and optimize datasets for analytics, reporting, and downstream applications
- Continuously improve data quality and reliability by integrating new sources and business rules
- Contribute to data engineering best practices and collaborative team development

✅ Required Qualifications
- Bachelor's degree (B.E/B.Tech) in Computer Science, Engineering, or Information Management
- 4+ years of experience in data engineering
- Strong programming skills in Python or Java
- Proficiency with SQL and relational data modeling
- Experience with Spark (SparkSQL), Airflow, DBT, and modern scheduling tools
- Familiarity with AWS services and Apache ecosystem (Kafka, Hive, Flink)
- Strong understanding of Agile practices, TDD, and CI/CD workflows
- Resilience and a growth mindset: willingness to experiment, learn, and iterate

🌟 Nice to Have
- Exposure to streaming architecture and real-time data systems
- Interest in shaping internal tools and engineering standards
- Passion for working in cross-functional teams with a focus on continuous improvement

🎁 Perks & Benefits
- Health and wellness resources for you and your family
- Paid volunteer days to engage with your community
- Flexible distributed-first work model
- Learn more: go.atlassian.com/perksandbenefits

🌍 About Atlassian
Atlassian builds tools that transform collaboration. From Confluence to Jira, their software supports teams globally across every industry. With an inclusive, innovation-driven culture, Atlassian believes that diverse voices and empowered individuals drive extraordinary results.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'data-engineer-in-atlassian-india-india'}, 

{applyUrl: 'https://www.atlassian.com/company/careers/details/19912', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'India', jobTitle: 'Product Security Engineer', jobType: 'Remote', jobCategory: 'Product', mainDescription: `Job Title: Product Security Engineer
Department: Security
Location: Remote — India
Employment Type: Full-Time

🧠 Role Overview
Atlassian is seeking a Product Security Engineer to help fortify the security posture of their products and services throughout the software development lifecycle. You’ll work hand-in-hand with development teams, offering technical leadership, reviewing designs, and driving secure development practices. Your role will enhance Atlassian’s Product Security Program, emphasizing automation, tooling, and collaboration.

🔐 Key Responsibilities
- Collaborate with engineering teams to embed security in every development phase
- Provide expertise and mentorship on secure coding practices and architecture
- Strengthen and expand automation around product security tooling and processes
- Conduct threat modeling and application security reviews
- Promote best practices using SAST, DAST, SCA, and other AppSec tools
- Act as a subject matter expert (SME) for cloud security infrastructure and architecture

✅ Required Qualifications
- Professional experience in security-focused roles
- Familiarity with application security and Secure SDLC methodologies
- Deep knowledge of SAST, DAST, SCA, and similar AppSec tools
- Strong grasp of threat modeling strategies
- Expertise in cloud-based security design
- Proficiency in Java, Python, or Go, plus at least one scripting language
- Experience guiding cross-functional teams on security improvements

🌟 Nice-to-Have Skills
- Contributions to the security community (publications, open-source, etc.)
- Experience speaking or presenting at security or industry events

🎁 Perks & Benefits
- Remote-first, flexible work environment
- Health and wellbeing support
- Paid volunteer days
- Full benefit details at: go.atlassian.com/perksandbenefits

🌍 About Atlassian
Atlassian builds tools that help global teams innovate, collaborate, and scale. With a distributed-first culture and an unwavering commitment to inclusion, they’re shaping the future of work for every kind of team.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'product-security-engineer-in-atlassian-india-india'}, 




{applyUrl: 'https://www.atlassian.com/company/careers/details/19931', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'Australia', jobTitle: 'Data Engineer - FinOps', jobType: 'Remote', jobCategory: 'Data', mainDescription: `Job Title: Data Engineer – FinOps
Department: Engineering
Location: Sydney, Australia or Remote
Employment Type: Full-Time

🧠 About the Role
Atlassian is looking for a Data Engineer to join its FinOps Insights team within the Core Engineering organization. This team builds data products and scalable infrastructure to support cost efficiency and strategic decision-making across Atlassian. As a key contributor, you’ll be instrumental in managing cloud cost data, constructing analytics models, and supporting FinOps maturity through actionable insights.

🔧 Key Responsibilities
- Build and maintain high-scale data pipelines and models to support analytics, machine learning, and AI
- Maintain cloud cost management systems and ensure accurate data integration across teams
- Develop curated datasets and scalable frameworks for experimentation and business reporting
- Collaborate with engineering, vendors, and stakeholders to align solutions with business goals
- Drive innovation and continuously improve infrastructure reliability and efficiency

✅ Basic Qualifications
- 1–3+ years in data engineering or similar role
- Proficiency in Python or Java for production-grade development
- Strong SQL and experience designing structured, performant data models
- Hands-on experience with Apache Spark, Airflow, and streaming data technologies
- Familiarity with AWS and tools like Databricks
- Experience designing datasets for data science and ML use cases
- Strong analytical, communication, and multitasking skills
- Agile development mindset with a focus on iteration and continuous improvement

🌟 Preferred Qualifications
- Degree in Computer Science or related discipline
- Experience in SaaS, B2B or B2C data environments
- Familiarity with LLM and deep learning projects
- Proficiency with dashboard tools like Tableau or Databricks
- Demonstrated success solving complex, ambiguous problems with scalable solutions

🎁 Perks & Benefits
- Health and wellbeing programs
- Paid volunteer time
- Flexible work arrangements
- More at: go.atlassian.com/perksandbenefits

🌍 About Atlassian
Atlassian is committed to helping teams reach their full potential through powerful tools and inclusive culture. The company supports a globally distributed workforce and welcomes diversity in all forms.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'data-engineer-finops-in-atlassian-australia-australia'}, 

 {applyUrl: 'https://www.atlassian.com/company/careers/details/20004', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'Canada', jobTitle: 'Principle Machine Learning System Engineer', jobType: 'Remote', jobCategory: 'Machine Learning', mainDescription: `Job Title: Principal Machine Learning Systems Engineer
Department: Engineering
Location: Remote – Canada
Employment Type: Full-Time

🧠 Role Summary
Atlassian is seeking a Principal Machine Learning Systems Engineer to lead the development, deployment, and scalability of machine learning infrastructure. You'll collaborate cross-functionally to take complex ML models into production, build high-performance data pipelines, and optimize system performance. This is a pivotal role for ensuring robustness, reliability, and innovation in ML solutions that scale across Atlassian's global product suite.

🔧 Key Responsibilities
- Architect and scale ML systems and infrastructure
- Translate ML research into production-ready services in collaboration with cross-functional teams
- Optimize model performance, ensure operational reliability, and monitor model behavior
- Guide cloud ML platform decisions focused on scalability, performance, and security
- Implement automated and efficient data pipelines for training and inference workflows
- Promote best practices in MLOps and support technical mentorship across the team
- Stay current with AI/ML trends to guide platform strategy and long-term innovation

✅ Ideal Candidate Profile
- Strong foundation in distributed systems and machine learning infrastructure
- Expertise in cloud computing (AWS, Azure, or GCP) and high-performance computing
- Experience productionizing machine learning models at scale
- Hands-on with building and optimizing ML pipelines, including data ingestion, training, and serving
- Proven leadership in MLOps principles, monitoring, CI/CD for ML systems
- Passion for mentoring, technical excellence, and strategic thinking

🎁 Benefits & Perks
- Wellness and mental health programs
- Remote-first work environment
- Paid volunteer days to support your community
- More perks: go.atlassian.com/perksandbenefits

🌏 Why Join Atlassian
Atlassian builds tools that empower global teams—from startups to Fortune 500s. We believe diverse perspectives fuel innovation and are committed to fostering a culture of inclusion, flexibility, and continuous learning.

Inspired to lead ML innovation at a global scale? Apply today or join the Atlassian Talent Community to stay up-to-date with future roles.
Would you like help tailoring your résumé or a sample cover letter for this role? I’m happy to lend a hand.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'principle-machine-learning-system-engineer-in-atlassian-canada-canada'},




   {applyUrl: 'https://www.atlassian.com/company/careers/details/20107', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'Australia', jobTitle: 'Software engineer', jobType: 'Full-time', jobCategory: 'Software', mainDescription: `Job Title: Software Engineer
Department: Engineering
Location: Sydney, Australia or Auckland, New Zealand
Employment Type: Full-Time (Remote-friendly)

🧠 Role Overview
Atlassian is seeking a frontend-focused Software Engineer to help build fast, scalable, and maintainable client-side applications. In this role, you’ll collaborate with design and engineering teams, lead development on features and projects, and contribute to a high-performance engineering culture.

🔧 Key Responsibilities
- Write efficient, testable, and high-quality frontend code
- Collaborate with designers and engineers to address user needs
- Lead feature development from architecture to deployment
- Review code, document systems, and tackle complex bugs
- Mentor junior engineers and onboard new team members

✅ Required Qualifications
- 2+ years of experience with JavaScript (ES6+), HTML5, and CSS
- Strong background in a modern JavaScript framework (React, AngularJS, or Vue)
- Familiarity with modern frontend tooling (bundling, linting, testing, and CI/CD pipelines)
- Experience with testing frameworks like Jest, Cypress, Mocha, or Chai
- Solid understanding of engineering scalable frontend applications
- Degree in Computer Science or related field (or equivalent experience)
- Experience working within Agile development environments
- Strong focus on maintainable code and long-term software stability

🌟 Preferred Attributes
- You care about writing code that lasts and scales
- Experience working on medium-to-large software systems
- Passion for clean, performant user experiences and strong team collaboration

🎁 Benefits & Perks
- Health and wellbeing programs
- Paid volunteer days
- Flexible remote-first work culture
- More info at: go.atlassian.com/perksandbenefits

🌍 About Atlassian
Atlassian builds tools that help global teams unlock their full potential. The company is committed to equity, diversity, and inclusion, ensuring a fair and welcoming experience for candidates and employees from all backgrounds.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'software-engineer-in-atlassian-australia-australia'}, 

 

{applyUrl: 'https://www.atlassian.com/company/careers/details/20130', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'United States', jobTitle: 'Principal Machine Learning System Engineer', jobType: 'Remote', jobCategory: 'Machine Learning', mainDescription: `Here’s a professionally structured and paraphrased version of the job posting for easy reference and application use:

Job Title: Principal Machine Learning Systems Engineer
Department: Engineering
Location: Seattle or San Francisco, United States – or Remote within the U.S.
Employment Type: Full-Time

🧠 Role Overview
Atlassian is seeking a seasoned Principal Machine Learning Systems Engineer to lead the design, development, and scaling of ML systems and infrastructure. You’ll be the bridge between data science and engineering, turning cutting-edge ML models into reliable, production-grade solutions. Your role will drive infrastructure decisions, optimize model pipelines, and ensure reliability and scalability across ML platforms.

🔧 Key Responsibilities
- Architect and deploy scalable, cloud-native ML systems
- Collaborate with data scientists, engineers, and product leaders to translate models into robust solutions
- Optimize model performance and automate ML pipelines
- Lead infrastructure design for high-performance computing and cloud ML environments
- Promote best practices in MLOps and mentor junior team members
- Stay current on emerging AI/ML tech to guide long-term innovation strategy

✅ Ideal Qualifications
- Proven expertise in deploying and maintaining scalable machine learning infrastructure
- Strong background in cloud platforms (AWS, GCP, or Azure) and high-performance computing
- Experience in building efficient data pipelines and integrating ML systems in production
- Demonstrated leadership in MLOps practices, reliability engineering, and system optimization
- Passion for technical mentorship and a collaborative mindset

💰 Compensation
Atlassian aligns its pay scales by geographic zones in the U.S.:
| Zone | Base Pay Range (USD) | 
| A | $232,200 – $303,150 | 
| B | $209,700 – $273,775 | 
| C | $193,500 – $252,625 | 


Eligible for equity, bonuses, and benefits. Final offer depends on experience and location.
Details: go.atlassian.com/payzones

🎁 Perks & Benefits
- Health and wellness programs
- Paid volunteer days
- Community engagement support
- Flexible remote-first work model
Learn more at go.atlassian.com/perksandbenefits

🌍 About Atlassian
Atlassian builds tools that help global teams unlock their potential. Collaboration and innovation are at the heart of what we do. We embrace diversity and are committed to equity, accessibility, and inclusion in every aspect of our culture and hiring.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'principal-machine-learning-system-engineer-in-atlassian-united-states-united-states'},

{applyUrl: 'https://www.atlassian.com/company/careers/details/20235', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'India', jobTitle: 'Cloud Migrations Manager', jobType: 'Remote', jobCategory: 'Cloud', mainDescription: `Here’s a clear, professional, and paraphrased version of the job posting, ready for a resume, application, or career portfolio context:

Job Title: Cloud Migrations Manager
Department: Support
Location: Remote – India (Bengaluru or anywhere in India)
Work Hours: 12:00 PM – 9:00/10:00 PM IST (EMEA shift)
Employment Type: Full-Time

🌐 Role Summary
Atlassian is hiring a Cloud Migrations Manager to help customers in the EMEA region transition successfully to cloud-based versions of Atlassian products. You will oversee strategic migration projects, collaborating with both technical and non-technical stakeholders to ensure seamless outcomes for mid-market and enterprise clients. This is a customer-centric leadership role combining project management, change management, and product knowledge.

🧩 Core Responsibilities
- Lead and manage customer cloud migration projects from inception to completion
- Collaborate with stakeholders to define technical and business migration requirements
- Build trust with enterprise clients, manage expectations, and drive adoption
- Handle customer concerns, escalations, and risk mitigation
- Participate in public-facing engagements such as demos, presentations, and strategic calls
- Work cross-functionally with product, engineering, and support teams to improve migration outcomes
- Continuously improve processes and tooling to scale the migration program

✅ Requirements
- 8–13 years of experience in customer-facing roles (customer success, technical support, strategic migrations)
- Strong project management and stakeholder management skills
- Excellent verbal and written communication, including executive presentation skills
- Hands-on experience with cloud or server-to-cloud migrations (preferably SaaS platforms)
- Familiarity with working in DevOps or IT-led environments
- Ability to navigate complex organizations and build internal/external relationships
- Empathy-driven customer management, especially around change and transition

🌟 Preferred Qualifications
- Experience with Atlassian product suite
- Background supporting SMB or Enterprise customers via phone/email
- Strategic account management skills and consultative mindset

🎁 Benefits & Culture at Atlassian
- Flexible remote-first working options
- Paid volunteer days and community engagement opportunities
- Health and wellness programs for employees and families
- Transparent, inclusive, and growth-focused work culture
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'cloud-migrations-manager-in-atlassian-india-india'}, 






{applyUrl: 'https://www.atlassian.com/company/careers/details/20243', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'India', jobTitle: 'Data Engineer', jobType: 'Remote', jobCategory: 'Data', mainDescription: `Here’s a professional and streamlined version of the job posting, tailored for job boards or application-ready summaries:

Job Title: Data Engineer
Team: Analytics & Data Science
Location: Remote – India (including Bengaluru)
Employment Type: Full-Time

🧭 Role Summary
Atlassian is seeking an experienced Data Engineer to support the development of their AWS-based data lake infrastructure and high-volume streaming pipelines. This role offers the chance to design scalable data services, implement self-serve data solutions, and work closely with stakeholders across engineering and business functions.
You’ll thrive here if you enjoy creating reliable services, working with modern open-source data tools, and solving complex data problems in a collaborative environment.

⚙️ Key Responsibilities
- Build and maintain scalable big data pipelines and lakehouse architectures
- Enhance data ingestion efficiency and promote self-service data solutions
- Collaborate with product and platform teams to drive data strategy
- Utilize Spark, Airflow, and other streaming frameworks to process large-scale data
- Develop and deploy software following Agile, TDD, and CI/CD practices
- Proactively improve data quality and reliability using anomaly detection tools

✅ Requirements
- Bachelor’s degree in Computer Science or equivalent experience
- 5+ years in software/data engineering
- Strong programming skills in Python, Java, or Scala
- Expert in SQL and data modeling/warehousing concepts
- Experience with Spark, Hive, Airflow, Databricks, and AWS services (EMR, S3, Kinesis, etc.)
- Proven focus on data quality, resilience, and scalable design

🌟 Preferred Qualifications
- Experience building self-serve data platforms or Kappa architecture systems
- Contributions to open-source data tools (e.g., custom Airflow operators)
- Familiarity with DBT for modern data modeling workflows

🎁 Benefits & Perks
- Flexible remote-first work model
- Health and wellbeing support for employees and families
- Paid volunteer time and global collaboration opportunities
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'data-engineer-in-atlassian-india-india'},



 {applyUrl: 'https://www.atlassian.com/company/careers/details/20253', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'India', jobTitle: 'Senior Machine Learning Engineer', jobType: 'Remote', jobCategory: 'Machine Learning', mainDescription: `Job Title: Senior Machine Learning Engineer
Department: Engineering
Location: Remote – India (Including Bengaluru)
Employment Type: Full-Time

🧠 Role Overview
Atlassian is hiring a Senior Machine Learning Engineer to join the team powering Atlassian Intelligence. In this high-impact role, you’ll partner across product, engineering, and business teams to guide strategic decisions through quantitative research and AI/ML expertise. You’ll help shape product strategy, evaluate algorithmic success metrics, and elevate the value ML brings to Atlassian’s global user base.

🔍 Key Responsibilities
- Lead development of AI product features and roadmap insights
- Guide strategy through advanced data analysis and data storytelling
- Collaborate across disciplines to test hypotheses and validate solutions
- Design A/B tests, build statistical models, and inform decision-making using data
- Define and monitor success metrics for ML/LLM-driven features
- Influence the direction of fast-evolving Atlassian Intelligence products
- Shape the product development lifecycle by quantifying opportunities and monitoring impact

✅ Required Qualifications
- 5+ years in Machine Learning, Data Science, Generative AI, or similar
- Expert in SQL and one scripting language (Python, R, etc.)
- Proven experience transforming data into business or product strategy
- Deep understanding of applied statistics (regression, clustering, A/B testing)
- Ability to craft clear, actionable analysis and communicate to varied audiences
- Proficiency with modern data visualization tools (e.g., Tableau, Looker, R-Shiny)
- Familiarity with LLM-based systems and model performance evaluation

🌟 Preferred Experience
- Background working with Chat, Search, or LLM-enhanced features
- Knowledge of SaaS business models and product lifecycle metrics
- Experience with developer tooling and process automation solutions

🎁 Benefits & Perks
- Remote-first flexibility and distributed work culture
- Health and wellness support for you and your family
- Paid volunteer time and community engagement opportunities
- Additional perks: go.atlassian.com/perksandbenefits

🌍 About Atlassian
Atlassian creates collaboration tools that help teams across the world unlock their full potential. The company values inclusion, continuous learning, and diverse perspectives. Atlassians work across borders, projects, and disciplines to make the impossible, possible—together.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-machine-learning-engineer-in-atlassian-india-india'}, 




{applyUrl: 'https://www.atlassian.com/company/careers/details/20254', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'India', jobTitle: 'Machine Learning Engineer', jobType: 'Remote', jobCategory: 'Machine Learning', mainDescription: `Here’s a polished and paraphrased version of the job description formatted for clarity and professional use:

Job Title: Machine Learning Engineer
Department: Engineering
Location: Remote (India – including Bengaluru)
Employment Type: Full-Time

🧠 About the Role
Atlassian is looking for a Machine Learning Engineer to help shape the future of Atlassian Intelligence products. You’ll drive analytical strategy, collaborate with cross-functional teams, and translate data into actionable insights that impact product development and business decisions.

🛠 Key Responsibilities
- Influence AI feature development and contribute to long-term roadmaps
- Collaborate with cross-functional stakeholders on complex product and business problems
- Analyze data and run experiments to develop strategies that guide business decisions
- Build and test hypotheses using statistical modeling, A/B testing, and machine learning approaches
- Identify product improvement opportunities through insights and metric analysis
- Measure the performance and value of ML-driven product features
- Shape product direction by providing deep data insights and dashboards

✅ Minimum Qualifications
- 3+ years’ experience in Data Science, Machine Learning, or Generative AI
- Proficiency in SQL and at least one programming language (e.g., Python or R)
- Strong data storytelling skills and experience with data visualization tools (e.g., Tableau, Looker, R-Shiny)
- Familiarity with LLM-based or ML-driven product algorithms and measurement techniques
- Strong grasp of statistical concepts (e.g., regressions, clustering, A/B testing, probability)
- Proven ability to translate data into strategic recommendations

⭐️ Desirable Qualifications
- Experience working on Chat, Search, or LLM-based features
- Familiarity with SaaS business models and relevant product metrics
- Experience building tools or insights to improve software development processes

🎁 Benefits & Perks
Atlassian offers a wide range of benefits to support your well-being, including:
- Health and wellness resources
- Paid volunteer days
- Flexible remote-first environment
Learn more at go.atlassian.com/perksandbenefits

🌍 About Atlassian
Atlassian creates software that empowers teams to collaborate from anywhere. We believe in inclusive hiring, diverse perspectives, and a culture of continuous learning and impact. From innovative products to compassionate people practices, we unleash the potential in every team—including yours.


`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'machine-learning-engineer-in-atlassian-india-india'},



 {applyUrl: 'https://www.atlassian.com/company/careers/details/20314', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'United States', jobTitle: 'Principal Software Engineer - Bitbucket Cloud', jobType: 'Remote', jobCategory: 'Cloud', mainDescription: `Here's a clean and professional paraphrased version of the job posting for easy reference or application:

Job Title: Principal Software Engineer – Bitbucket Cloud
Team: Engineering
Location: Remote (within the U.S.) or Seattle, WA
Employment Type: Full-Time

🧭 About the Role
Join Atlassian’s Bitbucket Cloud team as a Principal Software Engineer and help shape the tools that empower millions of developers globally. As a senior technical leader, you’ll design and implement scalable services, guide cross-team solutions, and mentor fellow engineers. Your work will directly impact how teams collaborate, manage, and ship code across the cloud.

🔧 Key Responsibilities
- Lead the technical architecture and development of complex product features
- Build and maintain scalable, distributed backend systems for version control tools
- Ensure code quality, reliability, performance, and customer-centered delivery
- Collaborate with product, design, and other engineering teams to set strategy
- Promote engineering best practices, including operational excellence and blameless postmortems
- Mentor and upskill engineers by sharing deep technical knowledge
- Operate services in microservice-based environments using Kubernetes, Docker, AWS, or Azure

✅ Required Qualifications
- Proficiency in backend languages: Python, Java, or Go
- Expertise designing and deploying large-scale, distributed cloud systems
- Experience leading the development of high-traffic services in modern infrastructure
- Familiarity with microservice architecture and container orchestration tools
- Passion for mentoring and cross-functional collaboration
- Strong interpersonal communication and a continuous learning mindset

🌟 Nice-to-Have Skills
- Background in Git or version control system development
- Experience with PostgreSQL, DynamoDB, Redis, Memcached
- Deep learning or LLM application experience
- Familiarity with Unix system programming and networked file systems (e.g., NFS, autoFS)

💰 Compensation
Atlassian provides a competitive salary structure aligned with regional zones:
| Zone | Base Salary Range (USD) | 
| Zone A | $206,100 – $269,075 | 
| Zone B | $186,300 – $243,225 | 
| Zone C | $171,900 – $224,425 | 


Eligible for bonuses, equity, and benefits.
Details: go.atlassian.com/payzones

🎁 Benefits & Perks
- Paid volunteer days and community engagement
- Mental health and wellness programs
- Flexible remote-first work model
- Additional perks listed at go.atlassian.com/perksandbenefits

🌏 About Atlassian
Atlassian creates tools that power collaboration for teams worldwide. We embrace diversity, foster inclusion, and build software that empowers people everywhere. You’ll be joining a values-driven company that supports your growth and well-being.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'principal-software-engineer-bitbucket-cloud-in-atlassian-united-states-united-states'}, 



 {applyUrl: 'https://www.atlassian.com/company/careers/details/20338', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'United States', jobTitle: 'Senior Security Engineering Manager', jobType: 'Remote', jobCategory: 'Engineer', mainDescription: `Here’s a clean and professional job description paraphrased and formatted for easy reading and job application portals:

Job Title: Senior Security Engineering Manager
Department: Engineering
Location: Remote (Americas) or in-office (Mountain View, San Francisco, Austin, New York, Washington DC, or Canada)
Employment Type: Full-Time

🔐 About the Role
Atlassian is seeking a Senior Security Engineering Manager to lead its Security Response Engineering team. Reporting to the Head of Detection and Response, you’ll be responsible for scaling operational security practices, mentoring a global team, and enhancing detection and response capabilities through advanced automation and AI.
This is a high-impact role ideal for a seasoned leader with technical depth in security engineering, automation tooling, and ML-driven detection frameworks.

🛠 Responsibilities
• 	Lead and develop a high-performing team of security automation engineers
• 	Drive the automation of security operations and scaling of detection and response tools
• 	Guide the integration and refinement of ML/AI models in operational security contexts
• 	Collaborate with internal stakeholders to align tools with operational goals
• 	Establish and enforce robust detection, response, and remediation protocols
• 	Mentor and grow future leaders in security engineering
• 	Oversee execution of large-scale initiatives and ensure measurable outcomes

✅ Requirements
• 	3+ years in security engineering
• 	2+ years managing global or distributed technical teams
• 	Experience in public cloud platforms (AWS, Azure, GCP)
• 	Proficiency in Python, Go, or Rust for automation
• 	Deep familiarity with Security Detection & Response (including SOAR platforms)
• 	Strong track record of delivering machine learning–powered solutions in security
• 	Demonstrated experience leading complex technical projects from end to end

🌟 Preferred Experience
• 	Public contributions to the cybersecurity community
• 	Conference speaking engagements or industry panel participation
• 	Cross-functional collaboration with privacy, compliance, networking, or IT teams

🎓 Qualifications
• 	Bachelor’s or Master’s degree in Computer Science, Information Security, or a related discipline
• 	Thorough understanding of modern cybersecurity practices and threat landscapes
• 	Strong communication and leadership skills across all levels of an organization

💰 Compensation
Atlassian offers competitive and transparent compensation across U.S. zones:


| Zone | Base Salary Range (USD) | 
| Zone A | $206,100 – $269,075 | 
| Zone B | $186,300 – $243,225 | 
| Zone C | $171,900 – $224,425 | 



This role is also eligible for bonuses, equity, and other benefits.

🎁 Benefits & Perks
• 	Paid volunteer days
• 	Extensive wellness resources
• 	Remote-first flexibility
• 	Global work opportunities
• 	And much more at go.atlassian.com/perksandbenefits
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-security-engineering-manager-in-atlassian-united-states-united-states'},


 {applyUrl: 'https://www.atlassian.com/company/careers/details/20366', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'Australia', jobTitle: 'Software Engineer – ML Serving & Analytics', jobType: 'Remote', jobCategory: 'Analyst', mainDescription: `Job Title: Software Engineer – ML Serving & Analytics
Team: Engineering
Location: Sydney, Australia or Remote within Australia
Employment Type: Full-Time

🧠 About the Role
Atlassian is looking for a versatile Software Engineer to help build systems for deploying, serving, and analyzing machine learning (ML) models in production. You’ll work at the intersection of machine learning, data infrastructure, and software engineering—bringing ML-powered features to life at scale.
This role is part of a distributed-first team, giving you the freedom to work from home, an office, or wherever you do your best thinking.

⚙️ Key Responsibilities
- Develop and maintain robust backend services and APIs for ML model deployment
- Collaborate with ML engineers and data scientists to operationalize models with high performance, reliability, and scalability
- Design data pipelines and transformation systems to support dashboards, analytics, and informed decision-making
- Write clean, efficient SQL for ad hoc analysis, reporting, and data tooling
- Monitor and troubleshoot issues across data pipelines and infrastructure
- Improve system reliability, observability, and maintainability through code quality and automation
- Participate in design and architecture discussions to optimize scale and performance
- Identify inefficiencies and proactively improve system design and tech stack

🧩 What You Bring
- Strong fundamentals in software engineering with a focus on scalable and maintainable systems
- Proven experience deploying machine learning models in production environments
- Solid understanding of end-to-end data workflows and transformation pipelines
- Proficiency in writing and optimizing SQL for analytics
- A curious mindset with a passion for understanding complex systems
- Self-driven attitude with a strong desire for growth and learning new technologies
- Nice to Have: Experience with data warehouses, observability tools, or metrics-layer architecture

🎁 Benefits & Perks
Atlassian offers a full range of benefits to support your health, well-being, and work-life balance, including:
- Paid volunteer days
- Wellbeing and mental health resources
- Remote work flexibility
- Community engagement and more
Full details at go.atlassian.com/perksandbenefits

🌏 About Atlassian
Atlassian helps unleash the potential of every team. Our collaboration tools empower organizations worldwide to build, deliver, and innovate—together. We are proud to be a company driven by diverse perspectives, inclusion, and continuous learning.
We welcome people of all backgrounds and are committed to maintaining a supportive and equitable workplace.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'software-engineer-ml-serving-analytics-in-atlassian-australia-australia'},
{applyUrl: 'https://www.atlassian.com/company/careers/details/20478', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'Japan', jobTitle: 'Cloud Senior Support Engineer', jobType: 'Remote', jobCategory: 'Cloud', mainDescription: `Job Title: Cloud Senior Support Engineer
Team: Support
Location: Yokohama, Japan or Remote within Japan
Employment Type: Full-Time

🌐 About the Role
Atlassian is seeking a seasoned Senior Technical Support Engineer to join their Cloud Product Support team serving customers in Japan. You’ll play a critical role in delivering exceptional support experiences, resolving complex issues, and contributing to a culture of technical excellence and continuous improvement. This role is part of a globally distributed team committed to making customers successful through top-tier service.

🔧 Key Responsibilities
- Diagnose and resolve advanced issues across multiple Atlassian cloud products
- Perform triage, debugging, root cause analysis, and technical troubleshooting
- Work closely with engineering teams to resolve critical incidents and product escalations
- Mentor and coach junior support engineers to enhance their technical skills
- Innovate and promote improved support strategies to strengthen customer satisfaction
- Handle multiple support cases while maintaining quality standards
- Assist in product onboarding and continuous learning

🧩 Required Qualifications
- 5+ years' experience in technical support, system administration, or software services
- 2+ years handling complex technical problems in a customer-facing environment
- Solid database skills (strong SQL knowledge)
- Familiarity with scripting (Shell, Python, etc.)
- Experience with web technologies: HTTP, DNS, REST, APIs
- Hands-on experience with cloud platforms like AWS
- Understanding of networking fundamentals: TCP/IP, LAN/WAN, OSI model, NAT, DHCP, SSL/TLS
- Fluent in Japanese (spoken and written) and proficient in English at a business level

✨ Preferred Qualifications
- Experience supporting Java-based applications
- Familiarity with Splunk or similar log aggregation tools
- Understanding of AI-related technologies
- Prior experience leading or managing technical support teams
- Knowledge of Atlassian products (e.g., Jira, Confluence, Bitbucket)
- Comfortable engaging customers at an executive level on technical matters

🎁 Benefits and Perks
Atlassian offers a rich array of benefits designed to support your well-being and lifestyle, including:
- Comprehensive health and wellness resources
- Paid volunteer days
- Remote and flexible work model
- Diverse and inclusive workplace culture
For a full list of perks, visit: go.atlassian.com/perksandbenefits

🌟 Why Atlassian?
Atlassian creates collaboration tools used by millions worldwide. We're committed to building a workplace where diverse perspectives are valued and everyone can thrive. From onboarding to leadership, we aim to empower our teams to do their best work—wherever they are.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'cloud-senior-support-engineer-in-atlassian-japan-japan'}, 



{applyUrl: 'https://www.atlassian.com/company/careers/details/20503', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'Poland', jobTitle: 'Junior Fullstack Engineer', jobType: 'Remote', jobCategory: 'Engineer', mainDescription: `Job Title: Junior Fullstack Engineer
Department: Engineering
Location: Gdańsk, Poland (Remote or On-site in Poland)
Employment Type: Full-Time

🧭 About the Role
Atlassian is seeking a Junior Fullstack Software Engineer to help enhance tools and features that empower our engineering teams. You'll contribute to the development of Jira Align, an enterprise solution used by Fortune 500 companies to bridge the gap between business strategy and technical delivery.

💼 Key Responsibilities
- Design and ship scalable features and services in a globally distributed development environment
- Work closely with engineers, architects, product managers, and designers in a collaborative environment
- Perform thorough code reviews focusing on readability, security, performance, and maintainability
- Support backend service visibility with logging, error reporting, and monitoring
- Actively participate in Agile workflows—stand-ups, sprint planning, demos, and retrospectives
- Report directly to your Engineering Manager

🎯 Qualifications
- 2+ years' experience developing and deploying RESTful microservices
- Experience or interest in .NET Framework (C#)
- Proficiency in modern object-oriented languages like Java, Go, Kotlin, Python, or Scala
- Familiarity with RDBMS (PostgreSQL, Oracle) or NoSQL (DynamoDB, Cassandra) databases
- Basic understanding of SaaS/PaaS/IaaS and cloud infrastructure (AWS, Azure, GAE)
- Awareness of cloud architecture patterns and solid software engineering principles

⚙️ Bonus Skills (Nice to Have)
- CI/CD pipeline and deployment experience (e.g., Octopus)
- Familiarity with AWS components like EC2 and VPC

💸 Compensation & Perks
- Annual Salary Range: 132,300 PLN – 176,400 PLN
- Eligible for benefits, bonuses, equity, and commissions
- Flexible work model (up to 90 remote workdays per year globally)
- Wellness support, paid volunteer days, and a vibrant remote-first culture

🌍 Why Join Atlassian
With products that drive collaboration and innovation across the globe, Atlassian is on a mission to unleash the potential of every team. Our values promote inclusion, balance, and empowering individuals to make an impact—wherever they work from.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'junior-fullstack-engineer-in-atlassian-poland-poland'}, 



{applyUrl: 'https://www.atlassian.com/company/careers/details/8233', companyName: 'atlassian', companyLogo: '/images/atlassian.png', location: 'United States', jobTitle: 'Senior Principal Engineer, Identity', jobType: 'Remote', jobCategory: 'Engineer', mainDescription: `Here’s a polished and professional paraphrased version of the job post, formatted for job boards, resumes, or applications:

Job Title: Senior Principal Engineer, Identity (Site Reliability Engineering)
Team: Site Reliability Engineering
Location: Remote – Americas or Mountain View, United States
Employment Type: Full-Time

🌐 About the Role
Atlassian is looking for a Senior Principal Engineer with deep expertise in reliability engineering and scaling Cloud services. You’ll work across teams to advocate for and implement best practices in system reliability, performance, scalability, and cost-efficiency—becoming a key influencer of Atlassian's technical direction.
You will report directly to the Head of SRE and collaborate with platform, product, and infrastructure teams to embed resilience into the company's technology and culture. This role is fully remote within the Americas.

🔍 Key Responsibilities
- Champion reliability methodologies and help architect highly available distributed systems
- Drive large, cross-team initiatives from inception to delivery
- Collaborate across organizational boundaries to scale Cloud infrastructure effectively
- Influence technical direction across departments and services
- Mentor and coach engineers across SRE and development teams
- Communicate technical issues and solutions effectively to diverse audiences

✅ Required Experience and Skills
- Programming Expertise: 8+ years’ experience in Java, Go, or Python
- Cloud Infrastructure: 5+ years’ experience with AWS or equivalent (EC2, CloudFormation, RDS, SQS, caching)
- System Design: Proven experience building fault-tolerant, scalable, production-ready software
- Communication: Strong verbal and written communication, with the ability to explain complex topics to varied stakeholders
- Leadership: Experience driving multi-team engineering initiatives
- Mentorship: A passion for coaching and technical guidance

⭐️ Preferred (Nice-to-Have) Skills
- In-depth knowledge of datastore technologies: RDBMS, NoSQL, time-series DBs, and analytics engines
- JVM performance tuning and garbage collection expertise

💰 Compensation
Atlassian maintains a transparent and equitable compensation structure with three geographic pay zones in the U.S.:
| Zone | Salary Range (USD) | 
| Zone A | $234,100 – $312,100 | 
| Zone B | $210,700 – $280,900 | 
| Zone C | $194,300 – $259,000 | 


You may also be eligible for bonuses, equity, and benefits. Full details on geographic zones can be found at go.atlassian.com/payzones.

✨ Why Join Atlassian
- Work with global, mission-driven teams on cutting-edge technology
- Drive impact at scale, influencing architecture for services used by millions
- Enjoy a collaborative remote-first culture with diverse teammates
- Competitive compensation, equity, and career development support
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-principal-engineer-identity-in-atlassian-united-states-united-states'}, 





{applyUrl: 'https://careers.eleks.com/vacancies/15833/', companyName: 'eleks', companyLogo: '/images/eleks.png', location: 'Ukraine', jobTitle: 'SENIOR/ MIDDLE .NET SOFTWARE DEVELOPER', jobType: 'Full-time', jobCategory: 'General', mainDescription: `Job Title: Senior/Middle .NET Software Developer
Location: Ukraine — Ternopil, Ivano-Frankivsk, Lviv, Kyiv, Uzhhorod, Chernivtsi, Zhytomyr, Rivne, Lutsk
Department: Software Engineering and Development Office
Commitment: Full-time

💼 About the Client Project
The position supports the development of a national registry tracking contaminated and mined territories in Ukraine, in collaboration with EGAP. The mission is meaningful and rooted in public good, contributing to the country’s transparency and safety.

🛠 Key Responsibilities
- Design and build high-performance, scalable .NET applications
- Analyze user stories, review designs, estimate development tasks, and follow Agile or Waterfall methodology
- Suggest refactoring and optimization based on best coding practices
- Share technical knowledge across the developer community through presentations and code reviews
- Stay current on technology trends and pursue relevant certifications
- Mentor junior developers, assign and monitor tasks, and provide guidance

✅ Required Qualifications
- 4+ years of hands-on .NET development experience
- Proficiency with .NET Core 8.0
- Strong background in PostgreSQL and PostGIS

🌟 Nice-to-Have Skills
Experience with any of the following technologies is considered a plus:
- ELK stack
- Redis
- Temporal
- YARP
- Aspire

💡 What You’ll Gain at ELEKS
- Direct collaboration with customers
- Technically engaging and impactful projects
- Influence over development and tech stack decisions
- Professional growth and competence-building support
- A highly skilled team and low-bureaucracy environment

🏢 About ELEKS
ELEKS is a globally recognized software engineering company founded in 1991. With 2,000+ professionals across Eastern Europe and commercial offices in Europe and North America, ELEKS provides full-cycle tech solutions—from design and development to consulting and dedicated teams.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-middle-net-software-developer-in-eleks-Ukraine'}, 


{applyUrl: 'https://careers.eleks.com/vacancies/middle-senior-devops-engineer-6/', companyName: 'eleks', companyLogo: '/images/eleks.png', location: 'Ukraine', jobTitle: 'MIDDLE/SENIOR DEVOPS ENGINEER', jobType: 'Remote', jobCategory: 'General', mainDescription: `Job Title: Middle/Senior DevOps Engineer
Location: Ukraine – Lviv, Ivano-Frankivsk, Ternopil, Kyiv
Department: DevOps Office
Commitment: Full-time

About the Project
This initiative focuses on enhancing transparency and regulatory compliance within the alcoholic beverage supply chain in Ukraine—from production to distribution.

Role Overview
ELEKS is seeking a skilled Middle or Senior DevOps Engineer to join its team in Ukraine. The ideal candidate will design and implement DevOps infrastructure from the ground up, support CI/CD workflows, and collaborate with technical stakeholders on deployment strategy. Leadership experience and mentorship in DevOps practices are a plus.

Key Responsibilities
- Architect and deploy end-to-end DevOps solutions
- Configure new environments and infrastructure
- Integrate CI/CD systems and deployment pipelines
- Lead and mentor DevOps team members
- Support environment setup, configuration, and documentation
- Troubleshoot systems and write technical guides
- Communicate with stakeholders to define and validate technical requirements
- Assign tasks, track progress, and ensure timely delivery
- Conduct internal training, knowledge-sharing sessions, and staff assessments
- Present and justify proposed solutions based on technical evaluations

Requirements
- 3+ years’ experience as a DevOps Engineer
- Strong command of Azure technologies (AKS, App Service, Functions, Azure Monitor, Application Insights)
- Proficiency in Terraform for infrastructure as code
- Valid technical certifications
- Upper-intermediate English proficiency

What ELEKS Offers
- Direct collaboration with international clients
- Impactful and challenging technical tasks
- Influence over project technologies and architecture
- Support for professional development and competency growth
- A collaborative team culture with low bureaucracy

About ELEKS
ELEKS is a global custom software development firm established in 1991. With 2,000+ professionals across Eastern Europe and offices in Europe and North America, ELEKS delivers premium services across product engineering, QA, design, R&D, and technology consulting.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'middle-senior-devops-engineer-in-eleks-Ukraine'},




{applyUrl: 'https://careers.eleks.com/vacancies/senior-devops-engineer-24/', companyName: 'eleks', companyLogo: '/images/eleks.png', location: 'Poland', jobTitle: 'SENIOR DEVOPS ENGINEER', jobType: 'Remote', jobCategory: 'General', mainDescription: `💼 Job Title: Senior DevOps Engineer
Location: Poland, Croatia, or Remote within Europe
Department: DevOps
Type: Full-Time

🏢 About the Client
The client operates in the environmental compliance sector, specializing in tire recycling and regulatory adherence. The project demands DevOps expertise to support infrastructure, automation, and deployment workflows in Azure environments.

🔧 Key Responsibilities
- Maintain, configure, and upgrade CI/CM systems
- Provide support for both internal and customer-side environments
- Troubleshoot network, server, storage, and service-related issues
- Manage deployment and delivery processes
- Automate build and deployment tasks using scripts
- Assist with configuration and administration across systems
- Document configurations, setups, and troubleshooting practices
- Independently estimate task timelines and coordinate with team leads
- Participate in internal knowledge-sharing and learning programs

🎯 Required Skills
- 4+ years of hands-on DevOps experience
- Strong experience with Microsoft Azure
- Familiarity with Docker and Terraform
- Proficient in CI/CD setup and automation
- Fluent English (Upper-Intermediate level or higher)

🌟 Bonus Qualifications
- Valid certifications in related DevOps disciplines
- Experience mentoring or participating in training programs

💰 What You’ll Gain
- Direct collaboration with clients
- Challenging and meaningful projects
- Influence over tech stack and infrastructure choices
- A skilled team of professionals
- Low-bureaucracy, dynamic work culture

🏢 About ELEKS
ELEKS is a global software development firm established in 1991. With 2,000+ professionals across Eastern Europe and offices in North America, ELEKS delivers product development, QA, R&D, and tech consulting services to enterprise clients 
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-devops-engineer-in-eleks-Poland'}, 


{applyUrl: 'https://careers.eleks.com/vacancies/senior-python-developer-12/', companyName: 'eleks', companyLogo: '/images/eleks.png', location: 'Poland', jobTitle: 'SENIOR PYTHON DEVELOPER', jobType: 'Full-time', jobCategory: 'General', mainDescription: `💼 Job Title: Senior Python Developer
Location: Poland, Croatia, Argentina, or Ukraine (Lviv, Ivano-Frankivsk, Ternopil, Kyiv)
Department: Software Engineering
Type: Full-Time

🏢 About the Project
Join a cross-functional team building a robust SaaS platform for financial advisors in the finance and insurance sector. The platform integrates CRM, trading, reporting, compliance, and planning tools into one customizable experience—designed for both solo professionals and enterprise broker-dealers.

🔧 Key Responsibilities
- Design and maintain scalable backend services with performance and availability in mind
- Analyze business and technical requirements and provide project estimates
- Build RESTful APIs using Python (Falcon/FastAPI preferred)
- Collaborate in Agile or Waterfall environments
- Propose refactoring and optimization improvements
- Mentor junior developers and contribute to community best practices
- Stay current with evolving technologies and pursue professional certifications

🎯 Required Qualifications
- 5+ years Python development experience
- Hands-on with Falcon and/or FastAPI
- Proficient in REST API design
- Experience with Azure cloud and data tools (Databricks, Spark)
- Frontend knowledge: Angular and TypeScript
- Familiarity with RDBMSs (especially MS SQL)
- Strong grasp of SDLC concepts
- Upper-intermediate or higher English proficiency

🌟 What You’ll Gain
- Direct client collaboration
- Complex and rewarding development challenges
- Continuous competence development and knowledge-sharing culture
- Work in a highly skilled, low-bureaucracy environment

🏢 About ELEKS
Founded in 1991, ELEKS is a globally recognized software innovation partner with 2000+ professionals across Eastern Europe and international sales offices. The company delivers end-to-end engineering solutions—including design, QA, consulting, and product development—across various industries.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-python-developer-in-eleks-poland-poland'}, 


{applyUrl: 'https://careers.eleks.com/vacancies/senior-react-developer-17/', companyName: 'eleks', companyLogo: '/images/eleks.png', location: 'Poland', jobTitle: 'SENIOR REACT DEVELOPER', jobType: 'Full-time', jobCategory: 'General', mainDescription: `💼 Job Title: Senior React Developer
Location: Kraków or Warsaw, Poland (Hybrid: 2–3 days/week in office)
Department: Software Engineering
Type: Full-Time

🏢 About the Project
Join a forward-thinking team developing a passwordless authentication platform based on secure, device-native credentials and real-time risk analysis. The platform aims to eliminate traditional passwords and enhance user security.

🔧 Key Responsibilities
- Build and improve new system features within a defined application architecture
- Write clean, optimized code using version control (including branching and merging strategies)
- Debug, verify, and analyze software for reliability and performance
- Independently estimate tasks and set realistic delivery timelines
- Collaborate across teams: Product Managers, Business Analysts, Solution Architects, and QA engineers

🎯 Required Qualifications
- 5+ years professional experience with React
- Proficiency in TypeScript
- Upper-Intermediate English fluency
- Availability to work onsite 2–3 days per week in Kraków or Warsaw

🌟 What You’ll Get with ELEKS
- Direct collaboration with clients and stakeholders
- Complex, meaningful technical challenges
- Chance to influence tech stack and system architecture
- A skilled, supportive team in a low-bureaucracy environment
- Professional growth and competence development

🏢 About ELEKS
Founded in 1991, ELEKS is a global software development firm providing a wide range of services: custom product development, R&D, QA, design, and technology consulting. With 2,000+ professionals across Eastern Europe and offices worldwide, ELEKS empowers clients through innovation and expertise
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-react-developer-in-eleks-poland-poland'}, 


{applyUrl: 'https://www.fanatee.com/openings/product-business-analyst', companyName: 'fanatee', companyLogo: '/images/fanatee.png', location: 'São Paulo, Brazil', jobTitle: 'PRODUCT BUSINESS ANALYST', jobType: 'Hybrid', jobCategory: 'General', mainDescription: `💼 Job Title: Product Business Analyst
Location: São Paulo, Brazil
Department: Product
Type: Full-Time

🏢 About Fanatee
Fanatee is a mobile gaming company founded in 2013, with over 300 million downloads globally. The company blends creative passion with data-informed decision making to develop engaging, high-quality games. Fanatee fosters an inclusive, collaborative culture that values innovation, autonomy, and growth—and supports developers, designers, and analysts working at the cutting edge of global game production.

🚀 Role Overview
As a Product Business Analyst, you’ll leverage data to optimize player engagement and game performance. You’ll collaborate with engineering, product, and BI teams across game lifecycles—translating insights into features, growth strategies, and operational improvements that maximize user LTV and acquisition funnels.

🔧 Responsibilities
- Analyze large datasets to extract impactful insights for game growth
- Coordinate roadmap development and resource planning with data and development teams
- Shape measurable product strategies with clear KPIs
- Recommend operational enhancements based on data-driven discoveries
- Improve monitoring tools to ensure high data quality
- Optimize data modeling and processing for scalability
- Explore new tools, frameworks, and methodologies for analytics
- Build dashboards with Tableau, PowerBI, or AWS Quicksight

🎯 Required Qualifications
- 3+ years’ experience in consulting, finance, management, or tech roles
- SQL proficiency, especially with platforms like Amazon Athena, Oracle, Hadoop/S3
- Strong Python skills (preferred)
- Ability to communicate technical concepts clearly across teams
- Familiarity with statistics, ML, experimentation, or predictive modeling
- Advanced analytical thinking and problem-solving capabilities
- Bachelor's or Master’s in Business, Economics, Engineering, or Computer Science
- Fluent in English (advanced proficiency required)

🌟 Bonus Experience
- Prior work on global-scale products or international organizations
- Experience in high-volume data environments with shifting priorities

💰 Benefits & Culture
- Competitive pay with bonuses (PLR)
- Health and dental coverage
- Casual, collaborative workplace
- VR & VT allowances
- In-office snack and wellness space
- Opportunities for growth, learning, and innovation
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'product-business-analyst-in-fanatee-Brazil'}, 






{applyUrl: 'https://nordcloud-career.breezy.hr/p/1dc120f771a401-junior-cloud-security-engineer', companyName: 'nordcloud', companyLogo: '/images/nordcloud.png', location: 'Finland', jobTitle: 'Junior Cloud Security Engineer', jobType: 'Hybrid', jobCategory: 'Cloud', mainDescription: `💼 Job Title: Junior Cloud Security Engineer
Location: Finland – Hybrid (Helsinki, Kuopio, Jyväskylä)
Department: Professional Services
Type: Full-Time

🏢 About Nordcloud
Nordcloud, an IBM company, is one of Europe’s top cloud-native consultancies, specializing in implementation, application development, managed services, and cloud training. With certifications across AWS, Azure, and Google Cloud, Nordcloud has completed over 1,000 cloud projects across industries—transforming organizations with scalable, secure, and compliant solutions.

🚀 Role Overview
In this entry-level role, you’ll work under the guidance of senior engineers to define, assess, and strengthen cloud security protocols across AWS, Azure, and Google Cloud environments. You’ll contribute to compliance, risk analysis, and guardrail implementations, while building hands-on experience with native cloud security services and industry frameworks.

🔧 Responsibilities
- Help define and enforce cloud security standards across environments
- Support the implementation of customer policies, tools, and procedures
- Participate in risk assessments and remediation efforts
- Deploy guardrails for cloud infrastructure security
- Assist teams with infrastructure, application, and database security concerns
- Stay current on threat trends and evolving best practices
- Document risks and security controls to support compliance

🎯 Required Skills
- Familiarity with cloud platforms (Azure, AWS, GCP) and cloud-native security tools
- Basic understanding of IaaS, PaaS, SaaS models
- Knowledge of IAM concepts (SAML, JWT, OAuth)
- Awareness of tools like DLP, WAF, SIEM, IDS/IPS, encryption, SSL/VPN, TCP/IP, DNS
- Understanding of security frameworks: CIS, NIST, PCI/DSS, SOC I/II
- Ability to work in cross-functional teams and document risk controls
- Fluent in both Finnish and English
- Willingness to learn and grow in cloud security
- Able to pass a security clearance

🌟 Perks & Benefits
- Personal training budget + certification exam coverage
- Hybrid work flexibility + remote work abroad in select locations
- Equipment of your choice
- Extensive healthcare and wellness support
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'junior-cloud-security-engineer-in-nordcloud-Finland'}, 




{applyUrl: 'https://nordcloud-career.breezy.hr/p/25399f195b7601-cloud-network-engineer', companyName: 'nordcloud', companyLogo: '/images/nordcloud.png', location: 'Finland', jobTitle: 'Cloud Network Engineer', jobType: 'Hybrid', jobCategory: 'Cloud', mainDescription: `💼 Job Title: Cloud Network Engineer
Location: Finland (Hybrid)
Department: Professional Services
Type: Full-Time

🏢 About Nordcloud
Nordcloud is a European cloud-native pioneer and part of IBM. With over 1,000 successful cloud projects across AWS, Azure, and Google Cloud, Nordcloud empowers businesses to transform through innovative infrastructure, managed services, and application modernization. The company values continuous learning, agile delivery, and community engagement.

🚀 Role Overview
As a Cloud Network Engineer, you’ll support enterprise customers through migration projects, technical design, and implementation of cloud-native network solutions. Working closely with Cloud Network Architects, your work will bridge hybrid infrastructure, cloud platforms, and DevOps best practices. You’ll also provide Tier 2 and Tier 3 support and contribute to the refinement of technical documentation and network architecture.

🔧 Key Responsibilities
- Deliver solutions aligned with reference architectures across Azure, AWS, and Google Cloud
- Support enterprise hybrid environments and global infrastructure
- Analyze and optimize existing systems; propose improvements
- Prepare low-level technical designs and documentation
- Use cloud and DevOps practices to automate networking workflows
- Share knowledge internally and externally
- Travel as needed across Finland and Europe for customer engagements

🎯 Required Skills
- 3+ years in networking (cloud and/or on-premises)
- Deep understanding of IP routing (esp. BGPv4), DNS, Global WAN
- Tier 2/3 support experience in network incident resolution
- Familiarity with firewall platforms: PaloAlto, Fortinet, or Checkpoint
- Azure cloud networking (AWS/GCP as secondary)
- Experience with SD-WAN deployment and enterprise-scale networking
- Working knowledge of ITIL processes

🔧 Proficiency Areas
You should be at Practitioner level in:
- Cloud platforms and networking technologies
- Security principles and implementation
- Infrastructure automation (CI/CD pipelines)

🧠 Soft Skills
- Fluent in English and Finnish
- Strong communication and collaboration skills
- Curiosity and eagerness to learn emerging cloud networking tech
- Critical thinking and problem-solving mindset
- Network-related cloud certifications (preferred)

🛡️ Security clearance will be required for successful candidates.
📌 Nordcloud encourages applicants who bring enthusiasm and growth potential—even if not all requirements are met.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'cloud-network-engineer-in-nordcloud-finland-finland'},










{applyUrl: 'https://nordcloud-career.breezy.hr/p/7c37c629befd01-senior-azure-cloud-foundation-architect', companyName: 'nordcloud', companyLogo: '/images/nordcloud.png', location: 'Poland or Finland', jobTitle: 'Senior Azure Cloud Foundation Architect', jobType: 'Hybrid', jobCategory: 'Cloud', mainDescription: `💼 Job Title: Senior Azure Cloud Foundation Architect
Location: Remote (Poland or Finland)
Department: Professional Services
Type: Full-Time

🏢 About Nordcloud
Nordcloud, an IBM company, is a European leader in cloud-native consulting, application development, and managed services. Triple-certified across Azure, AWS, and Google Cloud, Nordcloud has delivered 1,000+ successful public cloud projects across 10 European hubs. With multi-cloud expertise and a pragmatic approach to cloud transformation, Nordcloud helps clients innovate while maintaining cost-effectiveness and long-term value.

🚀 Role Summary
Join the dynamic Delivery & Development team to architect scalable and secure Azure cloud foundations. In this hands-on position, you’ll work closely with enterprise clients, lead strategic technical sessions, mentor team members, and drive automation across cloud deployments. This is an opportunity to shape infrastructure in a multi-cloud landscape and become a trusted advisor in cloud architecture.

🔧 Responsibilities
- Facilitate design workshops and advise clients on cloud foundation strategies
- Develop and support execution of roadmaps and backlog items
- Enhance deployment automation and CI/CD pipelines
- Provide product support, including bug fixes and maintenance
- Mentor junior engineers and promote continuous improvement
- Participate in pre-sales consultations and technical scoping

🎯 Required Skills
- Proven experience with Azure Cloud Architecture and IaC (e.g. Terraform)
- Strong command of Azure IaaS, PaaS, SaaS, and security practices
- DevOps mindset with CI/CD knowledge (preferably GitHub Actions)
- Scripting expertise (PowerShell, Python, Bash)
- Familiarity with Azure Cloud Adoption Framework and Landing Zones
- Excellent communication and mentoring skills
- Fluent in English

🌟 Preferred Experience
- Exposure to AWS or Google Cloud platforms
- Azure/AWS expert-level certifications
- Background in Windows/Linux systems and networking

💰 Benefits & Perks
- Training budget and certification exam coverage
- Remote or hybrid work flexibility
- Equipment of your choice
- Health insurance, life insurance, wellness benefits
- Workcation opportunities in select locations

📌 Applicants must have the right to work in Poland or Finland. Nordcloud welcomes applicants from diverse backgrounds and encourages enthusiasm and growth potential.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-azure-cloud-foundation-architect-in-nordcloud-foster-city-anywhere1'}, 





{applyUrl: 'https://nordcloud-career.breezy.hr/p/7c37c629befd01-senior-azure-cloud-foundation-architect', companyName: 'nordcloud', companyLogo: '/images/nordcloud.png', location: 'Poland', jobTitle: 'Senior Azure Cloud Foundation Architect', jobType: 'Hybrid', jobCategory: 'Cloud', mainDescription: `💼 Job Title: Senior Azure Cloud Foundation Architect
Location: Remote – Poland or Finland
Department: Professional Services
Employment Type: Full-Time

🏢 About Nordcloud
Nordcloud, an IBM company, is a leading cloud-native consulting firm in Europe, triple-certified across AWS, Azure, and Google Cloud. With 1,300+ employees and 1,000+ successful cloud projects delivered, Nordcloud helps clients scale innovation, improve security, and accelerate digital transformation using hyperscaler technology.

🚀 Role Overview
As a Senior Azure Cloud Foundation Architect, you’ll lead client workshops, design cloud architectures, and support foundational platform delivery across Nordcloud’s multicloud engagements. Your expertise will shape scalable, secure Azure infrastructures and guide internal teams in automation and DevOps practices. The role blends consulting, technical leadership, and mentorship in a dynamic service-oriented environment.

🔧 Key Responsibilities
- Facilitate technical workshops and design sessions with clients
- Drive execution of cloud foundation solutions and backlog delivery
- Troubleshoot bugs and provide hands-on support during deployments
- Collaborate across teams to improve deployment automation and pipelines
- Mentor junior team members and lead by example
- Engage in pre-sales discussions and consultative support

🎯 Required Skills
- Strong background in Azure Cloud Architecture and Infrastructure-as-Code (Terraform)
- Knowledge of Azure IaaS, PaaS, SaaS, and security best practices
- DevOps mindset and hands-on experience with CI/CD (GitHub Actions preferred)
- Proficiency in scripting (PowerShell, Python, Bash)
- Familiarity with Azure Cloud Adoption Framework and Landing Zones
- Clear communication skills and mentoring experience
- Fluent English

🌟 Preferred Experience
- Exposure to AWS or Google Cloud platforms
- Expert-level Azure/AWS certifications
- Systems administration background in Windows, Linux, or Networking

💰 Benefits & Perks
- Training budget and certification exam coverage
- Remote-first or hybrid work model with flexible hours
- Laptop and equipment of your choice
- Local benefits: private health care, life insurance, wellness perks
- Workcation options across select locations

📌 All applicants must have the right to work in Poland or Finland. Nordcloud encourages applicants from all backgrounds and levels of experience to apply, emphasizing enthusiasm and growth potential.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-azure-cloud-foundation-architect-in-nordcloud-foster-city-anywhere'}, 




{applyUrl: 'https://nordcloud-career.breezy.hr/p/c49b9d71dbed01-people-operations-specialist-fixed-term-until-the-end-of-2025', companyName: 'nordcloud', companyLogo: '/images/nordcloud.png', location: 'Poland', jobTitle: 'People Operations Specialist [Fixed term until the end of 2025]', jobType: 'Remote', jobCategory: 'General', mainDescription: `💼 Job Title: People Operations Specialist (Fixed Term until Dec 2025)
Location: Remote – Poland
Department: People / Employee Lifecycle Team
Contract Type: Full-Time, Temporary

🏢 About Nordcloud
Nordcloud, an IBM company, is a European leader in cloud transformation with deep expertise across Microsoft Azure, AWS, and Google Cloud. With 1300+ team members across 10 European hubs, Nordcloud combines technical excellence with cloud-native innovation, helping customers accelerate growth securely and efficiently.

🚀 Role Overview
As a People Operations Specialist, you’ll play a key role in global payroll and HR processes across the Netherlands, Denmark, and Norway. Reporting into the Employee Lifecycle Team, you’ll manage operational tasks, support internal stakeholders, and maintain data quality in tools like HiBob and Jira. You’ll also help shape employee experience and guidelines as the organization evolves.

🔧 Key Responsibilities
- Prepare and process payroll input and HR administration for assigned countries
- Collaborate with external payroll vendors and internal stakeholders
- Respond to employee queries via POPs tickets
- Maintain accurate records in HiBob (HRIS) including mass data updates
- Oversee usage and updates across HR tools and systems
- Refine guidelines and handbooks based on People Manager feedback
- Support global HR projects aligned with your interests

🎯 Qualifications
- Experience in HR shared services and payroll coordination (preferred)
- Strong communication in English (fluent written and verbal)
- Proficiency in Excel (pivot tables and reporting)
- Attention to detail, proactive mindset, and strong interpersonal skills
- Previous exposure to international HR operations is a plus

🌟 Perks & Benefits
- Training budget and exam fees for certifications
- Flexible working hours and fully remote role
- Laptop and tech of your choice
- Polish market benefits: healthcare, life insurance, cafeteria plan

🤝 Culture & Values
Nordcloud fosters a diverse and inclusive work environment. With over 1000 cloud projects delivered and recognition from Gartner as a visionary public cloud provider, the company emphasizes growth, collaboration, and innovation in everything it does.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'people-operations-specialist-fixed-term-until-the-end-of-2025-in-nordcloud-poland-poland'},




 {applyUrl: 'https://snapsheet.applytojob.com/apply/r9Ch8TRMU8/Software-Engineer-Transactions', companyName: 'snapsheet', companyLogo: '/images/snapsheet.png', location: 'Foster City', jobTitle: 'Software Engineer - Transactions', jobType: 'Remote', jobCategory: 'Software', mainDescription: `💼 Job Title: Software Engineer – Transactions Team
Location: USA (Fully Remote)
Department: Technology
Employment Type: Full-Time

🏢 About Snapsheet
Snapsheet is transforming the insurance claims experience by streamlining virtual estimating and claims management through its proprietary technology. Their end-to-end platform simplifies claims processing and enables modern, scalable payment solutions for organizations of all sizes.

🚀 Role Overview
Join the Transactions team at Snapsheet to help build next-generation insurance payment solutions. This team bridges deep industry knowledge with modern technology and is focused on expanding digital offerings for global businesses. As a mid-level engineer, you'll collaborate closely across teams to deliver scalable, intuitive products that directly improve provider efficiency and customer experience.

🔧 Key Responsibilities
- Enhance features for insurance payment providers
- Continuously improve Snapsheet’s tech stack and infrastructure
- Partner across engineering teams to build configurable systems
- Collaborate with product, design, and engineering to solve complex challenges
- Contribute to technical design, architecture decisions, and feedback loops
- Drive agile development with standups, retros, and team rituals
- Monitor and optimize system performance

🎯 Required Qualifications
- Bachelor’s degree in CS, Software Engineering, or related STEM field
- 3+ years web development experience
- Experience with Ruby on Rails and/or React
- Solid grasp of data structures, algorithms, and system design
- Understanding of scalable backend systems and frontend performance
- Familiarity with React/Redux or comparable frameworks
- Experience designing APIs and schema for relational databases
- Knowledge of HTTP, asset loading, cookies, modern web tech (HTML5, ES6, PWAs)

🛠 Tech Stack
- Frameworks: Ruby on Rails, React
- Infrastructure & Tools: MySQL, S3, Redis, Elasticsearch, RabbitMQ, AWS Lambda, Docker, CloudFront
- Methodology: Agile

💰 Compensation & Perks
- Base Salary Range: $110,000–$150,000 USD
- Comprehensive health plans with HSA contributions
- Dental, vision, short/long-term disability, and life insurance
- Voluntary coverage options: accident, critical illness, legal support
- 401(k) with 4% company match
- Flexible PTO + 7.5 holidays
- Wellness support via EAP (6 sessions per incident)
- Career growth, roadshows, annual summit, surprise SWAG
- No visa sponsorship available for this role

Snapsheet values diversity and inclusion. If you don’t meet every qualification but are passionate and curious, they encourage you to apply. Accommodations for candidates with disabilities are available via: talent@snapsheet.me
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'software-engineer-transactions-in-snapsheet-foster-city-anywhere'},



 {applyUrl: 'https://jobs.lever.co/vendavo/1decaa82-dbd6-475e-bea6-f78d7583b546', companyName: 'vendavo', companyLogo: '/images/vendavo.png', location: 'Prague, Czech Republic', jobTitle: 'Data Scientist', jobType: 'Hybrid', jobCategory: 'Data', mainDescription: `💼 Job Title: Data Scientist
Location: Prague, Czech Republic (Hybrid)
Department: Engineering
Employment Type: Full-Time

🏢 About Vendavo
Vendavo is a leading provider of B2B SaaS solutions focused on pricing, selling, and commercial optimization. Serving thousands of global clients, Vendavo leverages AI-powered software and deep industry expertise to help organizations drive growth and profitability through smarter, data-driven decisions.

🚀 Role Overview
As a Data Scientist at Vendavo, you'll contribute directly to the development of machine learning models embedded in high-impact SaaS products. Your mission is to solve complex pricing and analytics challenges by researching algorithms, building predictive solutions, and collaborating with stakeholders across product, engineering, and customer teams.

🔧 Key Responsibilities
- Develop ML algorithms and predictive models for pricing optimization
- Drive AI/ML adoption, including GenAI and Retrieval-Augmented Generation (RAG) in Python
- Analyze large datasets and deliver insights that enhance product functionality
- Help define the data science roadmap and identify strategic opportunities
- Collaborate with cross-functional teams to scale solutions within cloud environments

🎯 Required Qualifications
- 2+ years of experience in a data science role within a B2B or B2C SaaS company
- Proficiency in Python or R for modeling, visualization, and data manipulation
- Strong grasp of ML techniques including regression, classification, clustering, ensembles
- Experience with cloud platforms (AWS preferred) and deployment tools like SageMaker
- Knowledge of LLM-based applications and GenAI integration
- Ability to translate technical findings into clear insights for stakeholders
- Strong self-management and English communication skills

🌟 Benefits
- 25 vacation days + 4 recharge days + 3 sick days + 2 charity days
- Flexible hours and supportive team culture
- English lessons, tech events, and global travel opportunities
- Monthly benefits allowance and meal contributions
- Modern offices in Prague, Hradec Králové, and Ostrava with recreation areas
- High-end laptop and smartphone for personal use
- Discounted mobile plans for family
- MultiSport card and gym access
- O’Reilly Learning platform access

🙌 Culture
Vendavo emphasizes a people-first culture built around integrity, clarity, and collaboration. With backing from top-tier private equity firms and industry-leading SaaS retention, the company fosters innovation and inclusivity while investing in employee growth and development.`
, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'data-scientist-in-vendavo-Prague-Czech-Republic'}, 



{applyUrl: 'https://jobs.lever.co/vendavo/b7c172a6-6612-4d9d-8706-04f4bed125d9', companyName: 'vendavo', companyLogo: '/images/vendavo.png', location: 'Prague, Czech Republic', jobTitle: 'Senior Data Scientist', jobType: 'Hybrid', jobCategory: 'Data', mainDescription: `💼 Job Title: Senior Data Scientist
Location: Prague, Czech Republic (Hybrid)
Department: Engineering
Employment Type: Full-Time

🏢 About Vendavo
Vendavo is a global leader in B2B pricing and sales optimization software. Trusted by leading manufacturers and distributors, Vendavo combines AI-driven insights and strategic consulting to help businesses deliver the right product at the right price at the right time. With solutions like CPQ, Margin Bridge Analyzer, Profit Analyzer, and Pricepoint, Vendavo enables companies to grow profitably and sustainably.

🚀 Role Overview
As a Senior Data Scientist, you'll lead advanced machine learning initiatives that power Vendavo’s enterprise solutions. You’ll work closely with engineering, product, and business teams to define and execute a data science strategy focused on pricing intelligence and customer analytics. Your work will be embedded directly into SaaS product offerings, driving high-impact decisions through predictive modeling, GenAI, and optimization algorithms.

🔧 Responsibilities
- Develop and deploy predictive models and optimization algorithms
- Design and build LLM-based features, including Retrieval-Augmented Generation (RAG)
- Collaborate across teams to deliver scalable ML solutions within cloud environments
- Shape data science strategy and identify key opportunities for AI adoption
- Stay current on emerging tools, techniques, and platforms in data science and ML

🎯 Required Qualifications
- 5+ years of experience in SaaS (B2B or B2C) data science roles
- Expertise in Python for modeling, data wrangling, and visualization
- Deep understanding of machine learning algorithms: classification, clustering, regression, ensembles
- Experience with GenAI, cloud platforms (AWS preferred), and ML deployment (SageMaker)
- Strong interpersonal and communication skills for cross-functional collaboration
- Ability to balance multiple data science initiatives with strategic oversight
- Fluent English (written and spoken)

🌟 Benefits
- 25 paid vacation days + 4 quarterly recharge days + 3 sick days + 2 charity days
- Flexible hours and limited remote work (hybrid model)
- Monthly benefits allowance, meal contributions
- English lessons, tech talks, team events, tournaments
- O’Reilly Learning access and international travel opportunities
- High-end gear: Dell XPS or Mac laptop, Samsung or iPhone smartphone
- Discounted mobile plans for family members
- MultiSport gym card
- Cozy offices (Prague, Hradec Králové, Ostrava) — no large open-plan setups

🌍 Culture & Values
Vendavo is anchored in five values:
Move with Integrity | Be Clear | Win as One | Solve for the Customer | Build What’s Next
We celebrate diversity and inclusion, foster continuous learning, and deeply invest in employee growth across every role.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-data-scientist-in-vendavo-foster-city-anywhere'}, 


{applyUrl: 'https://jobs.lever.co/360learning/29743337-41c5-400a-9169-f832b7e51d25', companyName: '360learning', companyLogo: '/images/360learning.png', location: 'Paris', jobTitle: 'Devops Engineer', jobType: 'Remote', jobCategory: 'Devops', mainDescription: `Here’s a professionally paraphrased version of the job listing—ideal for résumé updates, recruiter messages, or job board summaries:

💼 Job Title: DevOps Engineer
Location: Remote – France (Paris-based team)
Department: Engineering II
Employment Type: Full-Time

🏢 About 360Learning
360Learning is a leading SaaS platform for collaborative learning, used by over 2,500 client organizations and 2.5 million registered users. Backed by $240M in funding and a team of 400+ employees worldwide, the company focuses on peer-driven upskilling to empower learners, customers, and partners at scale. Their mission embraces diversity, inclusion, and innovation to shape the future of learning.

🚀 Role Overview
Join a DevOps team of five engineers working across infrastructure, security, and automation for a fast-growing SaaS product. You’ll help design scalable cloud systems on Azure, improve reliability for production services, and collaborate with Engineering, AI, Data, and Architecture teams. This role empowers you to shape internal DevOps culture and influence key product decisions.

🔧 Key Responsibilities
In your first months:
- Get immersed in 360Learning’s platform, culture, and technical environment
- Automate infrastructure provisioning using Terraform, Helm, and Ansible
- Enhance deployment pipelines for increased confidence and performance
- Tackle security, scaling, and performance challenges globally
Ongoing contributions:
- Maintain Azure infrastructure and secure cloud systems
- Improve observability and system uptime through monitoring (Datadog) and incident response
- Support developer workflows by simplifying environment setup and deployments
- Promote best practices across R&D and lead platform engineering initiatives
- Participate in on-call rotations and postmortem analysis
- Evangelize DevOps principles internally and mentor teams on tooling, automation, and reliability

💻 Tech Stack
- Cloud: Microsoft Azure
- Infrastructure as Code: Terraform, Ansible
- Containers: Kubernetes, ArgoCD
- Monitoring: Datadog
- Database: MongoDB
- Languages: JavaScript

🎯 Qualifications
- 3+ years of experience in DevOps or related roles
- Proven background in managing production systems and cloud infrastructure (Azure, AWS, or GCP)
- Hands-on experience with IaC tools (Terraform, Ansible) and container orchestration (Kubernetes, Docker)
- Solid understanding of networking, system administration, and security
- Comfortable coding and scripting; strong automation mindset
- English fluency (B2 level or higher)
- Prior experience at a SaaS company (preferred)
- Enthusiasm for platform engineering and SRE methodologies

🌟 Perks & Benefits
- Compensation: Competitive salary, variable bonus, and equity
- Wellbeing: Medical insurance, gym membership, lunch vouchers, RTT leave, Work From Home stipend
- Flexibility: Fully remote within France; flexible working hours
- Inclusion: Active ERGs covering LGBTQIA2S+, Parents, Women, Mental Health, Ethnic Diversity, and Sustainability
- Parent Support: 1-month paid leave for second parent
- Culture: Transparent, collaborative, and continuous learning environment

🧪 Interview Process
- Phone screen with Talent Acquisition
- Discovery meeting with Lead DevOps
- At-home case study
- Clarification session with two DevOps Engineers
- Culture-fit meeting with VP of Technology
- Offer

🔗 Learn more:
- Convexity Culture
- CSR Charter
- Tech stack & teams

Let me know if you’d like help tailoring this for your résumé, cover letter, or recruiter pitch—I can help sharpen your edge.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'devops-engineer-in-360learning-paris-france'}, 



{applyUrl: 'https://jobs.lever.co/360learning/29cdc1b3-7e06-46d9-969b-ce875dea8285', companyName: '360learning', companyLogo: '/images/360learning.png', location: 'Spain', jobTitle: 'Devops Engineer', jobType: 'Remote', jobCategory: 'Devops', mainDescription: `Here’s a professionally paraphrased version of the job listing for recruiter platforms or résumé targeting:

💼 Job Title: DevOps Engineer
Location: Remote – Spain
Department: Product & Engineering
Employment Type: Full-Time

🏢 About 360Learning
360Learning is a fast-growing SaaS company enabling organizations to upskill from within using a collaborative learning platform. With 2,500+ clients, 2.5M+ users, and 30K+ daily active users, we’re reshaping enterprise education. Backed by $240M in funding and a global team across North America and EMEA, we blend technology with teamwork to power the future of learning.

🚀 Role Summary
Join a team of five DevOps professionals to build and manage scalable infrastructure for a leading LMS platform. Collaborate with development, architecture, AI, and data teams to drive automation, system reliability, and performance across our Azure-based environment. If you’re passionate about SRE principles, cloud architecture, and empowering product delivery, this is a role where you can lead transformation and shape best practices.

🔧 Key Responsibilities
- Automate infrastructure with Terraform, Ansible, and Helm
- Streamline deployments using Kubernetes and ArgoCD
- Monitor and optimize performance with Datadog and load testing tools
- Manage Azure cloud environments with emphasis on scalability and security
- Enable developer productivity through tooling and CI/CD improvements
- Participate in on-call rotations and manage incident response
- Champion DevOps culture across engineering squads

🎯 Qualifications
- 3+ years in DevOps or a similar systems role
- Hands-on experience running production systems in Azure (AWS or GCP also valued)
- Strong proficiency with Terraform, Ansible, Docker, Kubernetes
- Familiarity with MongoDB and Javascript environments
- Solid background in system administration, networking, and cloud architecture
- Passion for automation, continuous improvement, and DevOps evangelism
- Fluent in English (B2 or higher)

🌟 Perks & Benefits
- Competitive compensation (base + performance variable)
- Remote-first role with flexible hours
- Work-from-home stipend
- Spanish social security coverage, insurance, and paid leave per local policies
- Inclusion-focused ERGs (Mental Health, Sustainability, LGBTQIA+, Women, Parents, Ethnic Diversity)
- Wellness benefits through Total Pass
- Paid time off bonus, pet adoption support
- Cultural framework centered on ownership, collaboration, and continuous learning

🧪 Interview Process
- Phone screening with Talent Acquisition
- Discovery meeting with Lead DevOps
- Case study assignment
- Clarification session with DevOps team
- Culture fit interview with VP of Technology
- Offer extended

🔗 Related Resources:
- Convexity Work Culture
- 360Learning CSR Charter

Would you like help tailoring this into a résumé summary or outreach message for recruiters? I’d be happy to assist.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'devops-engineer-in-360learning-spain-spain'}, 



{applyUrl: 'https://www.ixl.com/company/jobs?gh_jid=8058715002', companyName: 'ixl', companyLogo: '/images/ixl.png', location: 'Raleigh, NC', jobTitle: 'Senior Software Engineer', jobType: 'Full-time', jobCategory: 'Software', mainDescription: `💼 Job Title: Senior Software Engineer
Location: Raleigh, NC (In-Office Monday–Friday; 1 remote day/week)
Department: Engineering
Type: Full-Time

🏢 About IXL Learning
IXL Learning is the largest EdTech company in the United States, serving millions of learners across K–12 education and adult language programs. From the IXL.com platform used by 1 in 4 U.S. students to Rosetta Stone, Wyzant, TPT, and other brands, IXL delivers personalized, high-impact learning experiences for educators and students worldwide.

🚀 Role Overview
Join a passionate team of engineers dedicated to improving education through technology. As a Senior Software Engineer, you’ll help expand IXL’s popular learning products and build new ones from the ground up. You’ll contribute across the stack, working on application logic, UI, back-end systems, and more. This role offers the chance to impact millions of learners while working in a collaborative, mission-driven environment.

🔧 Key Responsibilities
- Collaborate with engineering teams to develop new features and improve existing educational products
- Build full-stack solutions including UI, application logic, and system integrations
- Lead design, coding, testing, debugging, and performance optimization
- Provide estimates and assess technical feasibility for new initiatives
- Communicate clearly across development teams to deliver high-quality releases

🎯 Required Qualifications
- 6+ years of professional software engineering experience
- Bachelor’s or advanced degree in Computer Science or a related field
- Strong proficiency in Java or other object-oriented programming languages
- Excellent problem-solving, analytical reasoning, and communication skills
- Passion for technology’s role in transforming education

🧠 Preferred Traits
- Background in EdTech or interest in building impactful educational products
- Experience with full product lifecycle from concept to launch
- Ability to work independently and within cross-functional teams

💼 Culture & Benefits
IXL offers a collaborative environment where diverse voices are welcomed and innovation is encouraged. You’ll work alongside passionate professionals committed to making a positive difference in the lives of learners.
IXL is proud to foster inclusivity across age, race, gender, ability, background, and belief systems. Equal opportunity and respect are foundational to our workplace.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-software-engineer-in-ixl-foster-city-anywhere'}, 


{applyUrl: 'https://www.arrivelogistics.com/job/senior-software-engineer-frontend/', companyName: 'arrivelogistics', companyLogo: '/images/arrivelogistics.png', location: 'Chicago, IL', jobTitle: 'Senior Software Engineer – Frontend', jobType: 'Full-time', jobCategory: 'Software', mainDescription: `💼 Job Title: Senior Frontend Software Engineer
Location: Chicago, IL (Hybrid Schedule)
Department: Technology
Type: Full-Time

🏢 About Arrive Logistics
Arrive Logistics is a tech-enabled freight brokerage firm that simplifies supply chain operations through its proprietary ArriveNow platform. Recognized by Fast Company as a top workplace for innovators and backed by $2B+ in revenue, Arrive combines logistics expertise with cutting-edge technology. At its core, Arrive fosters a people-first culture centered around growth, collaboration, and continuous innovation.

🚀 Role Overview
As a Senior Frontend Engineer, you’ll lead the design and development of impactful software solutions that power Arrive’s logistics platforms. Working cross-functionally, you’ll strengthen existing systems, architect scalable new features, and mentor fellow engineers while partnering with Product, Data, and DevOps teams. The role is ideal for passionate engineers who thrive in collaborative, fast-paced environments and want to influence frontend architecture across a growing organization.

🔧 Responsibilities
- Lead design, development, and deployment of key frontend services within the ArriveNOW platform
- Collaborate with Product, Data, and Engineering teams to deliver business-critical features
- Oversee full SDLC—from concept to monitoring post-release
- Own technical decisions and architectural direction for frontend projects
- Mentor engineers and contribute to org-wide standards and best practices
- Advocate for code quality, documentation, testing, and continuous learning
- Represent the frontend team in strategic initiatives and guild talks

🎯 Required Qualifications
- 4+ years of frontend software development experience
- Expertise in React, Redux, and GraphQL (preferred)
- Experience working on large-scale applications across multiple teams
- Solid grasp of system design and modern development frameworks
- Excellent communication and leadership skills
- Passion for documentation, monitoring, alerting, and full-lifecycle ownership
- Experience with Microsoft Azure technologies (preferred)
- Logistics or supply chain experience is a plus

💰 Compensation & Benefits
- Salary Range: $138,000–$173,000 USD
- Bonuses and benefits package:
- Medical, dental, vision, life & disability
- 401(k) matching
- Wellness days and paid holidays
- Parental leave (100% paid)
- Mental health counseling and support
- Employee referral program
- Relocation assistance (for non-local candidates)

✨ Cultural Perks
- Hybrid work model: 2–3 days/week in office
- Onsite gym with Peloton bikes and personal training
- Casual dress code
- Downtown Chicago office, easily accessible by public transit
- Active Employee Resource Groups (Women in Logistics, Black Logistics Group, Emerging Professionals, PRISMS, Salute)
- Office-wide events, happy hours, and learning sessions
- LinkedIn Learning access and continuous mentorship
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-software-engineer-frontend-in-arrivelogistics-foster-city-anywhere'}, 


{applyUrl: 'https://www.arrivelogistics.com/job/software-engineer-back-end-3/', companyName: 'arrivelogistics', companyLogo: '/images/arrivelogistics.png', location: ' Chicago, IL', jobTitle: 'Software Engineer', jobType: 'Hybrid', jobCategory: 'Software', mainDescription: `💼 Job Title: Software Engineer – Full Stack
Location: Chicago, IL (Hybrid: 2–3 days/week in office)
Team: Technology
Type: Full-Time

🏢 Company Overview
Arrive Logistics is a tech-driven freight brokerage recognized as one of the fastest-growing logistics firms in the U.S. With a homegrown B2B platform (ArriveNow), they streamline and automate supply chain solutions, creating more efficient connections between shippers and carriers. Arrive fosters a culture of career growth, inclusion, and innovation, earning accolades from Fast Company and others for its forward-thinking environment.

🚀 Role Summary
Join a cross-functional team of engineers, designers, and product managers to develop scalable solutions for Arrive’s internal and external logistics platforms. You’ll work extensively with C# and JavaScript, designing and implementing software systems that enhance the shipping experience, both internally and for external partners.

🔧 Responsibilities
- Own the full lifecycle of your code: development, testing, deployment, and monitoring
- Collaborate on technical solutions with cross-team stakeholders
- Build scalable internal tools and customer-facing systems
- Automate testing and drive fast iteration cycles
- Contribute to documentation, technical standards, and organizational knowledge sharing
- Participate in guild talks and quality improvement initiatives
- Deepen domain knowledge in logistics and platform design

🎯 Requirements
- 3+ years in software engineering, preferably with .NET experience
- Familiarity with React and modern JavaScript frameworks
- Strong grasp of CS fundamentals and engineering best practices
- Experience building enterprise-grade applications in fast-paced environments
- Problem-solving and system design expertise
- Strong communication and collaboration skills
- Comfortable working on large-scale, multi-team projects
- Logistics industry experience is a plus

💰 Compensation & Perks
- Base Salary: $103,000 – $144,000 USD + bonus
- Comprehensive medical, dental, vision, and life insurance
- 401K matching program
- Casual dress code and downtown Chicago location
- Onsite LifeStart gym and fitness discounts
- Employee Assistance Program and free counseling
- Generous PTO, paid holidays, wellness days
- 100% paid parental leave
- Referral program and relocation assistance

Arrive Logistics is an equal opportunity employer with employee-founded resource groups including Women in Logistics, Emerging Professionals, Black Logistics Group, Prisms, Salute, and Unidos. For questions or concerns about job offers, reach out to: talentacquisition@arrivelogistics.com
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'software-engineer-in-arrivelogistics-foster-city-anywhere'},


 {applyUrl: 'https://jobs.lever.co/oowlish/3bc56874-28de-4079-94c2-0d8707cb5e38', companyName: 'oowlish', companyLogo: '/images/oowlish.png', location: 'Brazil', jobTitle: 'Business Data Analyst', jobType: 'Remote', jobCategory: 'Business', mainDescription: `Here’s a professionally paraphrased version of the job listing, formatted for career platforms or recruiter outreach:

💼 Job Title: Business Data Analyst
Location: Remote – Latin America (Available in São Paulo, Fortaleza, Rio de Janeiro, Porto Alegre, Recife, Buenos Aires, Mexico City)
Department: IT Operations – Data Analytics
Type: Full-Time

🏢 About Oowlish
Oowlish is one of the fastest-growing software development firms in Latin America, partnering with top-tier clients in the United States and Europe to build transformative digital solutions. Certified as a Great Place to Work, Oowlish supports remote flexibility, professional growth, and international collaboration across vibrant and diverse teams.

🚀 Role Overview
We're seeking a Business Data Analyst to transform raw data into insights that influence strategic decisions, improve performance, and drive value for global clients. This role blends analytical rigor with real-world impact—ideal for someone passionate about metrics, problem-solving, and data storytelling.

🔧 Responsibilities
- Conduct structured analyses that address key business questions
- Clean, organize, and visualize complex data sets
- Build reports and dashboards using BI tools
- Translate business needs into measurable metrics and KPIs
- Collaborate with cross-functional teams to support strategic initiatives

🎯 Required Qualifications
- 2+ years in a data analyst or similar role
- Proficiency in Excel, SQL, and BI tools (Power BI, Tableau, or Looker)
- Experience in data cleaning and visualization
- Ability to convert business questions into actionable insights
- Familiarity with Python or R is a plus

🌟 Preferred Experience
- Hands-on with cloud-based data warehouses (BigQuery, Redshift, Snowflake)
- Educational background in statistics, economics, or business intelligence
- Experience working in agile or distributed teams

💰 Benefits & Perks
- Remote-first flexibility and work-life balance
- Competitive compensation based on experience
- Clear career development tracks
- Exposure to international projects
- English language training (technical and conversational)
- Total Pass fitness program
- Pet adoption support
- Bonus PTO
- Fun team activities and games
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'business-data-analyst-in-oowlish-brazil-brazil'}, 


{applyUrl: 'https://jobs.lever.co/oowlish/7c18b6df-389b-4c35-8a18-0c97bd7e0821', companyName: 'oowlish', companyLogo: '/images/oowlish.png', location: 'Guadalajara', jobTitle: 'Staff Senior DevOps Engineer', jobType: 'Full-time', jobCategory: 'Devops', mainDescription: `Here’s a professionally paraphrased version of the job listing for career boards or recruiter summaries:

💼 Job Title: Staff DevOps Engineer
Location: Remote – Latin America (Argentina, Mexico, Colombia)
Cities: Buenos Aires, Córdoba, Mendoza, Mexico City, Bogotá, Guadalajara
Department: IT Operations – DevOps Engineering
Employment Type: Full-Time

🏢 About Oowlish
Oowlish is one of Latin America’s fastest-growing software development firms, partnering with top-tier clients from the U.S. and Europe to deliver cutting-edge digital solutions. Recognized as a Great Place to Work, Oowlish combines career growth, flexible work options, and international collaboration with a welcoming, supportive company culture.

🚀 Role Overview
Join as a Staff DevOps Engineer to lead infrastructure modernization for a cloud-based investment management system. This strategic role balances hands-on implementation with architectural planning, team mentoring, and process optimization. You’ll drive best practices and scalable automation across the organization while improving technical standards and cloud operations.

🔧 Key Responsibilities
- Audit current infrastructure and identify areas for DevOps improvement
- Architect and implement automated deployment, backup, and monitoring systems
- Optimize database schema updates and observability strategies
- Review and refine use of AWS services, including CDK and S3
- Document systems and coach development teams on DevOps best practices

🎯 Required Qualifications
- 5+ years in senior/staff DevOps roles
- Experience designing scalable infrastructure and automation
- Hands-on knowledge of AWS Cloud Development Kit (CDK)
- Familiarity with AWS architecture and documentation workflows
- Able to work noon–4/5 PM Eastern Time

🌟 Bonus Experience
- Windows endpoint management
- Mac fleet management (Jamf)
- Familiarity with Mobile Device Management (MDM) platforms

💰 Benefits & Perks
- Remote-first work environment
- Flexible schedule
- Competitive pay based on experience
- Career growth and internal mobility
- International project opportunities
- English language training
- Wellness benefits via Total Pass
- Pet adoption incentive
- PTO bonuses
- Team games and social activities
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'staff-senior-devops-engineer-in-oowlish-guadalajara-spain'},



 {applyUrl: 'https://jobs.lever.co/oowlish/8ab4fb16-310b-48fb-af89-1ad47fa816ae', companyName: 'oowlish', companyLogo: '/images/oowlish.png', location: 'Brazil', jobTitle: 'Tech Lead – Full Stack (Next.js + Prisma + AWS)', jobType: 'Remote', jobCategory: 'Full Stack', mainDescription: `💼 Job Title: Tech Lead – Full Stack (Next.js + Prisma + AWS)
Location: Remote (Brazil – Available in São Paulo, Rio de Janeiro, Brasília, Curitiba, Recife, Belo Horizonte, Fortaleza)
Department: IT Operations – React + Next
Type: Full-Time

🏢 About the Role
Join a dynamic e-learning company that’s reimagining collaborative online education. As Tech Lead, you’ll play a pivotal role in shaping modern full-stack applications using cutting-edge technologies. This leadership position combines hands-on coding with architectural guidance, mentoring, and cross-functional collaboration.

🔧 Key Responsibilities
- Architect and develop scalable web applications with Next.js
- Implement and optimize database models using Prisma and PostgreSQL
- Manage cloud infrastructure and deployment via AWS services
- Ensure code quality, maintainability, and performance
- Collaborate with frontend, backend, and mobile teams to align technical goals
- Mentor junior developers and lead code reviews and design discussions

🎯 Must-Have Qualifications
- Proven experience leading cross-functional engineering teams
- Deep expertise with Next.js
- Hands-on experience with Prisma ORM
- Strong background in PostgreSQL architecture and optimization
- Proficiency with AWS infrastructure and monitoring tools
- Passion for mentoring and technical ownership

🌟 Nice-to-Have Skills
- Familiarity with React and React Native
- Exposure to mobile or cross-platform development
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'tech-lead-full-stack-next-js-prisma-aws-in-oowlish-brazil-brazil'}, 




{applyUrl: 'https://jobs.lever.co/oowlish/b7201257-e6b4-47cd-b39c-68bb5dae3fab', companyName: 'oowlish', companyLogo: '/images/oowlish.png', location: 'Brazil', jobTitle: 'Staff Senior DevOps Engineer', jobType: 'Remote', jobCategory: 'Devops', mainDescription: `💼 Job Title: Staff DevOps Engineer
Location: Remote – Brazil (Preferred cities: São Paulo, Fortaleza, Rio de Janeiro, Recife, Salvador, Curitiba, Florianópolis)
Department: IT Operations – DevOps Engineering
Employment Type: Full-Time

🏢 About Oowlish
Oowlish is one of Latin America's fastest-growing software development companies, partnering with top-tier clients across the U.S. and Europe to deliver innovative digital solutions. Certified as a Great Place to Work, Oowlish offers a flexible, remote-friendly environment and personalized career growth opportunities, making it an ideal hub for ambitious tech professionals seeking global impact.

🚀 Role Summary
We’re hiring a strategic and hands-on Staff-level DevOps Engineer to assess, modernize, and guide infrastructure within a cloud-based investment management environment. This is a leadership role with architectural influence—ideal for someone passionate about elevating automation, observability, and development velocity across the organization.

🔧 Responsibilities
- Evaluate the current DevOps landscape and identify strategic improvements
- Architect and implement scalable, automated infrastructure practices
- Optimize database schema updates and backup systems
- Enhance centralized logging and monitoring
- Review and refine AWS architecture (including CDK usage and S3 configurations)
- Mentor development teams on DevOps best practices and internal tooling

🎯 Required Qualifications
- 5+ years in senior or staff-level DevOps engineering roles
- Strong track record in infrastructure audits and DevOps strategy development
- Hands-on experience with AWS CDK and core services
- Familiarity with AWS architecture and documentation standards
- Availability to work noon to 4/5 PM ET

🌟 Preferred Experience
- Windows endpoint and Mac fleet management (Jamf)
- Background in Mobile Device Management (MDM) solutions

💰 Benefits & Perks
- 100% remote work and flexible hours
- Competitive pay based on experience
- Structured career growth plans
- Exposure to international clients and projects
- English language training (technical and conversational)
- Fitness program with Total Pass
- Pet adoption incentive
- Bonus paid time off
- Team events and competitions
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'staff-senior-devops-engineer-in-oowlish-brazil-brazil'},

 {applyUrl: 'https://jobs.lever.co/oowlish/c7ae852f-edbb-43a7-8e84-d65154a4a96f', companyName: 'oowlish', companyLogo: '/images/oowlish.png', location: 'Brazil', jobTitle: 'Backend Developer - Nodejs', jobType: 'Remote', jobCategory: 'Backend', mainDescription: `💼 Job Title: Backend Developer – Node.js
Location: Remote – Brazil, Argentina, or Mexico (Available in Brasília, Porto Alegre, Curitiba, Buenos Aires, Mexico City, Guadalajara, Belo Horizonte)
Department: IT Operations – Node.js Engineering
Type: Full-Time

🏢 About Oowlish
Oowlish is one of Latin America’s fastest-growing software development firms, partnering with elite clients across North America and Europe. Known for its inclusive culture and certified as a Great Place to Work, Oowlish delivers cutting-edge technology solutions while supporting employees through flexible schedules, remote work, and international career advancement.

🚀 Role Overview
We’re seeking an experienced Backend Developer to join our remote team and contribute to the development of scalable, high-performing web applications. You’ll work with global clients, leveraging Node.js, relational databases, and AWS services in an Agile environment. This role offers the chance to make an international impact while maintaining a personalized work-life balance.

🔧 Responsibilities
- Develop and maintain robust backend services using Node.js
- Manage and optimize relational databases (MySQL or PostgreSQL)
- Set up and utilize AWS services (EC2, Lambda, RDS, SQS, API Gateway, etc.)
- Collaborate within Agile Scrum teams to deliver technical solutions
- Communicate clearly with international stakeholders in English

🎯 Requirements
- 5+ years of hands-on experience in Node.js backend development
- Solid understanding of relational databases (MySQL/PostgreSQL)
- Proficiency in configuring and deploying AWS services
- Fluent English communication skills (written and spoken)
- Experience in Agile Scrum environments

💰 Benefits & Perks
- 100% remote work
- Flexible working hours
- Competitive compensation package
- Defined career growth pathways
- International project exposure
- English language training (technical & conversational)
- Total Pass fitness program
- Pet adoption incentive
- Bonus paid time off
- Team games and competitions
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'backend-developer-nodejs-in-oowlish-brazil-brazil'}, 


{applyUrl: 'https://jobs.lever.co/oowlish/cacd95c8-c61c-4e63-b168-dd9ee1362fea', companyName: 'oowlish', companyLogo: '/images/oowlish.png', location: 'Argentina', jobTitle: 'Tech Lead – Full Stack (Next.js + Prisma + AWS)', jobType: 'Remote', jobCategory: 'Full Stack', mainDescription: `💼 Job Title: Tech Lead – Full Stack (Next.js + Prisma + AWS)
Location: Remote – Argentina or Uruguay (Preferred cities: Buenos Aires, Cordoba, Mendoza, Montevideo)
Department: IT Operations – React & Next.js
Employment Type: Full-Time

🏢 About the Role
Join a rapidly evolving e-learning platform that’s redefining collaborative education. We’re seeking a hands-on Tech Lead who thrives in a fast-paced, product-centric environment. You’ll guide technical decisions, mentor developers, and help shape scalable full-stack architectures using modern technologies like Next.js, Prisma, PostgreSQL, and AWS.

🔧 Responsibilities
- Architect and develop scalable full-stack web applications
- Lead backend implementation with Prisma ORM and PostgreSQL
- Manage deployment and infrastructure using AWS
- Ensure code performance, security, and maintainability
- Align engineering efforts across frontend, backend, and mobile teams
- Mentor junior engineers; participate in code reviews and architecture planning

🎯 Must-Have Qualifications
- Proven leadership experience as a Tech Lead or Senior Engineer
- Advanced skills in Next.js for scalable web apps
- Hands-on expertise with Prisma ORM and PostgreSQL
- Proficient in AWS cloud services and DevOps workflows
- Strong ownership mentality and collaborative approach

🌟 Nice-to-Have Skills
- Familiarity with React or React Native for UI development
- Experience with mobile or cross-platform environments
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'tech-lead-full-stack-next-js-prisma-aws-in-oowlish-argentina-argentina'},


 {applyUrl: 'https://jobs.lever.co/oowlish/f5337d12-feac-4696-b2f1-ee2d42a2daf1', companyName: 'oowlish', companyLogo: '/images/oowlish.png', location: 'Brazil', jobTitle: 'Senior Fullstack Engineer (Angular + Node)', jobType: 'Remote', jobCategory: 'Engineer', mainDescription: `💼 Job Title: Senior Fullstack Engineer (Angular + Node.js)
Location: Remote – Brazil (Available in São Paulo, Fortaleza, Rio de Janeiro, Florianópolis, Brasília, Salvador, Belo Horizonte)
Department: IT Operations
Employment Type: Full-Time

🏢 About Oowlish
Oowlish is one of Latin America’s fastest-growing software development firms, partnering with top-tier clients in the U.S. and Europe to create cutting-edge digital experiences. Recognized as a Great Place to Work, we offer a remote-friendly culture and career advancement opportunities within an international framework. We value creativity, collaboration, and continuous learning.

🚀 Role Overview
We’re hiring a Senior Fullstack Engineer with strong skills in Angular, Node.js, and NoSQL databases to build scalable applications and contribute to the design of modern web architectures. You’ll work alongside multidisciplinary teams to deliver high-performance, responsive products in a fully remote setting.

🔧 Key Responsibilities
- Develop and maintain robust fullstack web applications
- Collaborate with designers, PMs, and fellow engineers
- Integrate and optimize NoSQL data models
- Ensure app responsiveness across platforms and browsers
- Conduct code reviews and shape tech decisions
- Debug and resolve production-level issues

🎯 Required Qualifications
- 5+ years of experience in fullstack development
- Proficient in Angular and Node.js
- Hands-on with NoSQL databases
- Deep knowledge of RESTful APIs and microservices
- Ability to work independently and meet high quality standards
- Willingness to align with EST time zone

💰 Benefits & Perks
- Fully remote work environment
- Flexible scheduling
- Competitive compensation
- Defined career growth paths
- International projects and exposure
- English training (technical & conversational)
- Fitness perks via Total Pass
- Pet adoption support
- Bonus PTO
- Team games and competitions
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-fullstack-engineer-angular-node--in-oowlish-brazil-brazil'}, 


{applyUrl: 'https://jobs.lever.co/livechatinc/8ce4625b-cf75-4ac6-86c0-d5bcffcf6a87', companyName: 'text', companyLogo: '/images/text.png', location: 'Wrocław, Poland', jobTitle: 'Senior Frontend Engineer', jobType: 'Hybrid', jobCategory: 'Frontend', mainDescription: `💼 Job Title: Senior Frontend Engineer
Location: Wrocław, Poland (Hybrid)
Team: Teamwork Experience
Employment Type: Full-Time

🏢 About Text App
Text App is a customer communication platform trusted by hundreds of teams to streamline conversations with clients. The Teamwork Experience team builds collaborative features that bring mentoring, peer support, shift handovers, and knowledge sharing directly into the app—so agents never feel alone while working.
These aren’t stand-alone tools—they’re deeply integrated features transforming Text App from a chat tool into a truly team-oriented solution.

🚀 Role Overview
Join a product-driven engineering team dedicated to solving real-world problems for customer support agents. You’ll help develop real-time features like internal help channels, AI-powered assistance, and seamless agent-to-agent conversation transfers. Expect short iteration cycles, MVP testing, and lots of user feedback.

🧠 What You’ll Do
- Build new features iteratively, test early, and scale responsibly
- Translate user needs into elegant and practical UI solutions
- Deliver responsive data-driven experiences using WebSockets and real-time rendering
- Engage in product conversations and contribute ideas beyond the code
- Make thoughtful decisions with a focus on security, usability, and long-term maintainability

🛠 Tech Stack & Tools
- React + React Router
- TypeScript / JavaScript (ES6+)
- TanStack Query
- CSS Modules
- WebSockets
- Vitest, Playwright
- Git/GitHub, CI/CD with GitHub Actions

🔍 Ideal Candidate Traits
- Thinks like a product owner
- Comfortable in data-rich, real-time applications
- Enjoys open collaboration and values transparency
- Cares deeply about user experience and craftsmanship
- Understands the balance between experimentation and stability
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-frontend-engineer'}, 


{applyUrl: 'https://jobs.lever.co/veeva/164904cf-242b-491b-97b2-31cdcecd11be', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'Oregon', jobTitle: 'Senior Software Engineer - SRE', jobType: 'Remote', jobCategory: 'Software', mainDescription: `💼 Job Title: Senior Software Engineer – Site Reliability Engineering
Location: Remote (Bend, Oregon preferred; must be in PST or HST time zones)
Department: Engineering – Vault Platform
Employment Type: Full-Time
Schedule: Monday–Friday, 2 PM – 10 PM PST

🏢 About Veeva Systems
Veeva is a global leader in cloud software for life sciences, empowering organizations to bring therapies to patients faster. As a Public Benefit Corporation (PBC), Veeva prioritizes innovation with impact, balancing business performance with customer success, employee well-being, and societal contribution.
With over $2B in revenue and a flexible "Work Anywhere" policy, Veeva continues to drive transformation across the healthcare ecosystem.

🚀 Role Overview
Join Veeva’s Vault Platform team as a Senior Site Reliability Engineer to strengthen platform reliability, scalability, and performance for enterprise cloud applications used by millions worldwide. You’ll work across backend systems, automate infrastructure, and lead incident response—all while mentoring others and driving technical excellence.

🔧 Key Responsibilities
- Design and implement scalable cloud infrastructure
- Lead incident triage, analysis, and resolution (on-call required)
- Create automation tools to streamline diagnostics and reduce manual intervention
- Conduct full-stack root cause analysis for system issues
- Collaborate on engineering design reviews and operational strategies
- Advise teams on scalable architecture for features serving 2M+ users
- Work across backend, infrastructure, and frontend layers
- Mentor team members and foster high-performance engineering culture
- Communicate clearly during outages across technical and business audiences

🎯 Required Qualifications
- 5+ years of enterprise Java development experience
- Strong background in high-volume production systems and incident management
- Deep experience with: Spring, Hibernate, MySQL, Solr, Maven, Git, Linux, AWS, Docker, Kubernetes
- Advanced SQL and scripting proficiency (Shell, Python, Go, Ruby, etc.)
- Track record of writing clean, maintainable code and improving codebases
- Excellent leadership, collaboration, and communication skills
- Must reside in PST or HST time zones
- U.S. work authorization required (no sponsorship offered)

💰 Compensation & Benefits
- Base Salary Range: $110,000–$270,000 USD
- Additional options:
- Variable bonus
- Equity (stock bonus)
- Benefits include:
- Medical, dental, vision, and life insurance
- Flexible paid time off and holidays
- Retirement programs
- 1% charitable giving match

Veeva values diversity and is an equal opportunity employer. For accommodations during the hiring process, contact: talent_accommodations@veeva.com
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-software-engineer-sre-in-veeva-oregon-united-states1'}, 



{applyUrl: 'https://jobs.lever.co/veeva/2a6e9124-e679-4735-9056-aac828216fc6', companyName: 'veeva', companyLogo: '/images/veeva.png', 'location': 'Ohio', 'jobTitle': 'Software Engineer - iOS', 'jobType': 'Remote', jobCategory: 'Software', mainDescription: `💼 Job Title: Software Engineer – iOS
Location: Columbus, Ohio (Remote)
Department: Engineering
Employment Type: Full-Time

🏢 About Veeva
Veeva Systems is a global leader in industry cloud solutions for life sciences. As a Public Benefit Corporation, Veeva is committed to advancing healthcare, empowering its people, and delivering world-class technology—all while balancing the interests of customers, employees, society, and investors. With over $2B in annual revenue and a remote-first culture, Veeva is shaping the future of enterprise software.

🚀 Role Overview
As an iOS Software Engineer at Veeva, you’ll help build enterprise-grade mobile applications that transform how pharmaceutical companies connect with healthcare professionals. You’ll work closely with engineers and product managers to develop high-performance features and intuitive user experiences—at scale.

🔧 Key Responsibilities
- Build and deliver large-scale iOS features
- Solve complex engineering challenges
- Architect and implement robust technical designs
- Apply unit testing to ensure resilient code
- Own feature development and lifecycle
- Collaborate cross-functionally throughout agile sprints
- Research new technologies and contribute to architectural discussions
- Ensure feature delivery within timeline and quality standards

🎯 Qualifications
- 5+ years iOS development using Swift/Objective-C and frameworks like UIKit, Core Data, SQLite
- Proven success in collaborative team environments
- Strong grasp of object-oriented design and software architecture
- Deep understanding of Apple’s interface guidelines and resource optimization
- Excellent communication and problem-solving skills

💰 Compensation & Benefits
- Base Salary Range: $85,000–$225,000 USD
- May include variable bonuses and stock options
- Benefits:
- Medical, dental, vision, and life insurance
- Flexible PTO and paid holidays
- Retirement programs
- 1% charitable giving program

Veeva is proud to be an equal opportunity employer. For assistance during the hiring process, contact: talent_accommodations@veeva.com
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'software-engineer-ios-in-veeva-ohio-united-states'},




 {applyUrl: 'https://jobs.lever.co/veeva/2b29d3cc-7704-4ce2-bcb4-394dc6ca7c31', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'California', jobTitle: 'Associate Software Engineer - December 2025 Grads', jobType: 'Internship', jobCategory: 'Software', mainDescription: `💼 Job Title: Associate Software Engineer – December 2025 Grads
Location: Pleasanton, California (On-Site, 4 days/week for first 2 years)
Department: Generation Veeva
Type: Full-Time

🏢 About Veeva Systems
Veeva Systems is a mission-driven technology company helping life sciences organizations accelerate the delivery of therapies to patients. As one of the fastest-growing SaaS firms, Veeva has achieved over $2B in annual revenue and operates as a Public Benefit Corporation (PBC), balancing business goals with social impact. With a collaborative work culture and agile product teams, Veeva continues to transform healthcare through innovation.

🚀 Role Summary
Veeva’s Engineering Development Program (EDP) is designed for upcoming graduates ready to make their mark in software engineering. As a full-stack, front-end, or back-end developer, you’ll build cloud applications in agile sprints, collaborate with experienced leaders, and contribute to product decisions from day one. You’ll work on highly scalable, multi-tenant software that brings real-world value to global customers—and learn alongside a fast-moving team.

🔧 Key Responsibilities
- Participate in the full software development lifecycle
- Collaborate on technical and functional design discussions
- Build cloud-based enterprise applications in fast-paced sprint cycles
- Write clean, maintainable code and contribute to monthly releases
- Provide input at the design table—regardless of experience level

🎓 Eligibility & Requirements
- Graduating December 2025 with a degree in Computer Science, Engineering, or Physics
- Minimum 3.3 GPA or equivalent skillset through experience/self-study
- Solid foundation in computer science: data structures, algorithms, and object-oriented design
- Proficient in Java
- Must be legally authorized to work in the U.S. (no visa sponsorship available)
- Reside near Pleasanton, CA and available for on-site work 4 days/week for first 2 years

🌟 Bonus Skills
- Familiarity with frontend technologies: JavaScript, HTML, React
- Knowledge of relational databases
- Internship or project experience in enterprise environments

💰 Compensation & Benefits
- Base Salary Range: $90,000–$115,000 USD
- Comprehensive benefits:
- Medical, dental, vision, life insurance
- Flexible PTO and paid holidays
- Retirement programs
- 1% charitable giving match

Veeva is proud to be an equal opportunity employer committed to inclusion across its global workforce. Need accommodations during the hiring process? Contact: talent_accommodations@veeva.com
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'associate-software-engineer-december-2025-grads-in-veeva-california-united-states'},





{applyUrl: 'https://jobs.lever.co/veeva/33c3a639-26a7-4500-a0f7-552c9221d74f', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'Canada', jobTitle: 'QA Engineer - Data Platform', jobType: 'Remote', jobCategory: 'Data', mainDescription: `💼 Job Title: QA Engineer – Data Platform
Location: Toronto, Canada (Remote)
Department: QA & Release Engineering – OpenData Development
Type: Full-Time

🏢 About Veeva Systems
Veeva Systems is a cloud solutions leader serving the life sciences industry. As a Public Benefit Corporation (PBC), Veeva is committed to advancing global health outcomes through customer-focused innovation, employee success, and community impact. With $2B+ annual revenue and a flexible remote-first model, Veeva is building the future of healthcare technology.

🚀 Role Overview
Join the OpenData team as a QA Engineer and help ensure the integrity of real-time healthcare data systems. You’ll design and execute functional tests for ETL pipelines and cloud-based data products, working closely with data engineers to build sustainable testing strategies. This role emphasizes ownership, creativity, and collaboration in a fast-moving environment.

🔧 Key Responsibilities
- Define project scope, data models, and validation rules
- Create and automate test cases for ETL workflows
- Simulate ETL mapping scenarios using advanced SQL queries
- Validate data accuracy, completeness, source formats, and schemas
- Collaborate with engineering teams to ensure robust test coverage and agile delivery

🎯 Qualifications
- 3+ years of hands-on experience in ETL testing
- Proficiency in SQL and understanding of data pipelines and modeling
- Experience with cloud platforms (e.g., AWS)
- Strong analytical, problem-solving, and communication skills
- Familiarity with scripting or object-oriented programming (Java, Python)
- Bachelor's degree in Computer Science, Engineering, or a related field

🌟 Preferred Skills
- Experience with DevOps/CI/CD tools and PySpark
- Background in the life sciences industry

💰 Compensation & Benefits
- Salary Range: $65,000–$115,000 CAD
- Additional perks:
- Medical, dental, vision, and life insurance
- Paid time off and company holidays
- Retirement plans
- 1% charitable giving match
- Remote flexibility

Veeva celebrates diversity and is an equal opportunity employer. For accommodations during the application process, reach out to: talent_accommodations@veeva.com
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'qa-engineer-data-platform-in-veeva-canada-canada'},





 {applyUrl: 'https://jobs.lever.co/veeva/66fd6ad4-92df-4658-8922-6385e39f4d6f', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'Arizona', jobTitle: 'Senior Systems Administrator', jobType: 'Remote', jobCategory: 'General', mainDescription: `💼 Job Title: Senior Systems Administrator
Location: Phoenix, Arizona (Remote)
Department: IT – Data Center Support
Type: Full-Time

🏢 About Veeva
Veeva Systems is a cloud technology pioneer empowering life sciences companies to bring therapies to patients faster. As a Public Benefit Corporation (PBC), Veeva balances the interests of customers, employees, society, and shareholders. With a “Work Anywhere” model and over $2B in annual revenue, Veeva continues to lead through innovation and global impact.

🚀 Role Overview
Join Veeva’s Vault Operations Team as a Senior Systems Administrator, supporting the infrastructure behind the Vault application—a cloud-based platform used across life sciences. You’ll build new virtual servers, manage code deployments, troubleshoot production issues, and contribute to process automation. This hands-on role blends technical problem-solving with global collaboration and continuous learning.

🔧 Key Responsibilities
- Provide expert-level infrastructure support for the Vault platform
- Monitor alerts and resolve critical production issues affecting availability and data integrity
- Build and deploy new cloud infrastructure
- Assist developers with code releases and deployments
- Manage configuration, performance, and deployment in AWS environments
- Document evolving systems and processes
- Innovate solutions to complex problems and share knowledge across teams

🎯 Required Qualifications
- Degree in Computer Science or equivalent experience
- Extensive Linux administration in production cloud/virtualized environments
- Strong communication skills (written and verbal)
- Experience in enterprise-level IT security
- Eagerness to learn, innovate, and collaborate globally

🌟 Preferred Skills
- Hands-on experience with AWS
- Familiarity with relational databases (e.g., MySQL)
- Proficiency in scripting languages (e.g., Bash, Python, Perl, Ruby)
- Working knowledge of networking: IP, VPNs, DNS, load balancing, firewalls

💰 Compensation & Benefits
- Base Salary Range: $70,000–$150,000 USD
- Additional benefits:
- Medical, dental, vision, and life insurance
- Flexible PTO and paid company holidays
- Retirement programs
- 1% charitable giving match

Veeva is an equal opportunity employer and committed to inclusion across its global workforce. For accessibility support during hiring, please email: talent_accommodations@veeva.com
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-systems-administrator-in-veeva-arizona-united-states'}, 










 {applyUrl: 'https://jobs.lever.co/veeva/72da7228-f485-49db-98c9-97cf42bfa6c1', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'United Kingdom', jobTitle: 'IT Engineer', jobType: 'Full-time', jobCategory: 'Engineer', mainDescription: `💼 Job Title: IT Engineer
Location: London, United Kingdom (On-Site)
Department: IT Administration
Employment Type: Full-Time

🏢 About Veeva Systems
Veeva Systems is a global leader in cloud-based solutions for life sciences. As a mission-driven organization and Public Benefit Corporation (PBC), Veeva balances commercial growth with social responsibility. With $2B+ in annual revenue, Veeva empowers organizations to bring therapies to patients more efficiently—driven by core values of Customer Success, Employee Success, Speed, and Doing the Right Thing.

🚀 Role Overview
Veeva is seeking a dynamic, resourceful IT Engineer to provide hands-on technical support and manage systems for team members across the UK and EU. In this fast-paced environment, you'll own day-to-day operations, guide technical improvements, and contribute to a culture of service excellence and problem-solving.

🔧 Key Responsibilities
- Provide IT support across all levels, resolving hardware and software issues
- Configure and deploy corporate PCs, Macs, and VOIP systems
- Maintain and troubleshoot hardware: imaging, diagnostics, warranty coordination
- Manage IT inventory, vendor relationships, and purchase logistics
- Support hosted applications: Okta, G Suite, Zoom, Office 365, Egnyte
- Execute routine tasks: account provisioning, ticket triage, end-user device repairs
- Evaluate new technologies and lead implementation testing
- Coordinate recycling/disposal of obsolete hardware
- Travel regionally as needed (<10%)

🎯 Required Qualifications
- 4+ years in IT support, infrastructure engineering, or similar roles
- Eligible to work in the UK
- Degree in Computer Science, Information Technology, or related field
- Excellent interpersonal and verbal communication skills in English

🌟 Preferred Experience
- Certifications: CCNA, CCNP, CMNO, MCSE
- Experience supporting Windows 11, Mac OS, iOS
- Familiarity with IT security best practices
- Prior mentoring or leadership in IT teams
- Experience in global organizations and cross-time-zone collaboration
- Background documenting systems and training end-users

💰 Perks & Benefits
- Private medical insurance
- Life assurance
- Health & wellness programs
- Mobile phone/internet allowance

Veeva embraces diversity and inclusion. Applicants from all backgrounds are encouraged to apply. For accommodations during the application process, contact: talent_accommodations@veeva.com
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'it-engineer-in-veeva-united-kingdom-united-kingdom'},




 {applyUrl: 'https://jobs.lever.co/veeva/86bd3e55-facc-4e3f-bc31-8e34bac9c6b9', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'Canada', jobTitle: 'Software Engineer in Test', jobType: 'Remote', jobCategory: 'Software', mainDescription: `💼 Job Title: Software Engineer in Test
Location: Toronto, Canada (Remote)
Department: QA & Release Engineering – Network Development
Employment Type: Full-Time

🏢 About Veeva
Veeva Systems is a leading provider of cloud-based software for the life sciences industry, dedicated to helping organizations bring therapies to patients more efficiently. As a Public Benefit Corporation, Veeva prioritizes impact—balancing customer success, employee well-being, and societal benefit. With $2B+ in annual revenue and a global presence, Veeva is transforming healthcare technology.

🚀 Role Summary
Veeva is seeking a Software Engineer in Test to drive automation and quality assurance across key product features and data workflows. You’ll work alongside cross-functional teams to certify software integrity before release, authoring test scripts, expanding automation coverage, and ensuring performance at scale. This is a high-impact role for someone passionate about delivering quality code through efficient testing.

🔧 Key Responsibilities
- Develop and extend automation test coverage using Java and/or Python
- Analyze specifications and designs to provide early feedback
- Author and maintain test plans, cases, and automation scripts
- Identify and report bugs; verify fixes
- Participate in functional, integration, and regression testing
- Collaborate with engineers and product managers in agile environments
- Deepen expertise in Veeva’s platform and product performance

🎯 Required Qualifications
- 3+ years in QA or software development
- 2+ years writing code in Java or Python
- Hands-on experience with Selenium and JUnit
- Strong understanding of QA methodologies in fast-paced development cycles
- Proven ability to write comprehensive test scenarios (sanity, boundary, negative, concurrency, compatibility)
- Experience working with databases: MySQL, Oracle, or SQL Server
- Strong analytical and problem-solving skills
- Effective verbal and written communication
- Bachelor’s degree in Engineering, Math, Computer Science, or equivalent experience

🌟 Preferred Skills
- Familiarity with SaaS-based enterprise software
- Experience in Unix/Linux environments
- Use of Atlassian tools (JIRA, Confluence)
- Exposure to life sciences or pharma industries

💰 Compensation & Benefits
- Base Salary Range: $70,000 – $135,000 CAD
- Additional benefits:
- Medical, dental, vision, life insurance
- Paid time off and holidays
- Retirement programs
- 1% charitable giving match
- Remote work flexibility

Veeva is proud to be an inclusive and equal opportunity employer. For accommodations during the application process, contact: talent_accommodations@veeva.com
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'software-engineer-in-test-in-veeva-canada-canada'}, 



{applyUrl: 'https://jobs.lever.co/veeva/94472133-42b9-453f-92e2-b283c2981d3d', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'Pennsylvania', jobTitle: 'QA Engineer - Data Platform', jobType: 'Remote', jobCategory: 'Data', mainDescription: `💼 Job Title: QA Engineer – Data Platform
Location: Philadelphia, Pennsylvania (Remote)
Department: QA & Release Engineering – OpenData Development
Type: Full-Time

🏢 About Veeva Systems
Veeva Systems is a trailblazing cloud software company focused on empowering life sciences organizations. As a Public Benefit Corporation, Veeva is committed to balancing commercial success with positive outcomes for society, customers, and employees. With over $2B in annual revenue and operations in 15+ countries, Veeva is reshaping healthcare through cutting-edge technology.

🚀 Role Summary
Join the OpenData team as a QA Engineer responsible for validating large-scale data systems and pipelines. You’ll collaborate with data engineers to define comprehensive test strategies, ensure the quality and completeness of ETL processes, and drive innovation in healthcare data delivery. This role emphasizes ownership, automation, and analytical precision.

🔧 Key Responsibilities
- Define scope, expected outcomes, and validate business rules
- Design and execute test cases for ETL processes
- Write SQL queries simulating ETL mapping logic
- Automate regression tests for ETL systems
- Validate accuracy, completeness, and data schema consistency
- Verify source formats, perform data counts, and ensure structural integrity

🎯 Required Qualifications
- 3+ years in ETL testing and validation
- Skilled in analyzing ETL mapping workflows
- Advanced proficiency in SQL
- Strong understanding of data flows and data modeling
- Experience working with cloud platforms like AWS
- Background in automation and regression test coverage
- Effective communicator with Agile environment experience
- Degree in Computer Science, Engineering, or equivalent experience
- Familiarity with Java and Python

🌟 Preferred Skills
- Experience with CI/CD and DevOps tools
- Exposure to PySpark
- Background in the life sciences or healthcare industry

💰 Compensation & Benefits
- Base Salary Range: $70,000–$120,000 USD
- Eligible for variable bonus or stock options
- Benefits include:
- Medical, dental, vision, life insurance
- Flexible PTO and paid holidays
- Retirement programs
- 1% charitable giving match

Veeva is proud to be an equal opportunity employer committed to diversity and inclusion. To request accommodations during the hiring process, reach out to: talent_accommodations@veeva.com
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'qa-engineer-data-platform-in-veeva-pennsylvania-united-states'}, 



{applyUrl: 'https://jobs.lever.co/veeva/aa11175d-3ef5-47eb-9840-4f2521a16ea0', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'Canada', jobTitle: 'Associate Software Engineer - December 2025 Grads', jobType: 'Internship', jobCategory: 'Software', mainDescription: `💼 Job Title: Associate Software Engineer – Engineering Development Program (December 2025 Grads)
Location: Toronto, Canada (On-Site)
Department: Generation Veeva
Type: Full-Time

🏢 About Veeva
Veeva Systems is a pioneering cloud technology company committed to accelerating life sciences innovation. As a Public Benefit Corporation, Veeva balances customer success, employee well-being, societal impact, and investor value. With $2B+ in annual revenue and operations across more than 15 countries, Veeva continues to shape the future of healthcare through technology.

🚀 Role Overview
Veeva’s Engineering Development Program (EDP) is designed for new graduates ready to launch a career in full-stack, front-end, or back-end engineering. You’ll join agile product teams, collaborate with experienced mentors, and contribute to cloud-based applications used globally. In this fast-paced environment, your ideas are valued from day one—whether you’re debugging code or helping shape product architecture.
This is more than an entry-level job—it’s a launchpad for future software leaders.

🔧 What You’ll Do
- Contribute to all stages of the software development lifecycle
- Participate in design discussions with cross-functional engineering and product leaders
- Build scalable, multi-tenant cloud applications
- Release code frequently in agile sprint cycles
- Gain exposure to real-world enterprise systems
- Work on innovative projects that create direct customer impact

🎯 Requirements
- Graduating December 2025 with a degree in Computer Science, Engineering, or Physics (minimum 3.3 GPA)
- Proficiency in Java and strong computer science fundamentals (OOP, data structures, algorithms)
- Must reside near Toronto and be available to work on-site 4 days/week for the first 2 years
- Legally authorized to work in Canada (no sponsorship provided)
- Equivalent experience accepted in place of a formal degree

🌟 Preferred Experience
- Familiarity with JavaScript, HTML, React
- Knowledge of relational databases
- Internship or project experience in enterprise environments

💰 Compensation & Benefits
- Base Salary Range: $90,000 – $115,000 CAD
- Additional benefits:
- Medical, dental, vision, life insurance
- Retirement programs
- Generous paid time off and holidays
- 1% charitable giving match

Veeva is an equal opportunity employer. Applicants from all backgrounds are encouraged to apply. For accessibility support during recruitment, contact: talent_accommodations@veeva.com
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'associate-software-engineer-december-2025-grads-in-veeva-canada-canada'},

 {applyUrl: 'https://jobs.lever.co/veeva/b29a6a53-11e2-4bc7-9730-20a1bf927407', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'Kansas', jobTitle: 'QA Engineer - Data Platform', jobType: 'Remote', jobCategory: 'Data', mainDescription: `💼 Job Title: QA Engineer – Data Platform
Location: Kansas City, Missouri (Remote)
Department: QA & Release Engineering – OpenData Development
Type: Full-Time

🏢 About Veeva Systems
Veeva Systems is a global leader in cloud-based solutions for the life sciences industry. As a Public Benefit Corporation (PBC), Veeva is committed to transforming healthcare through technology while balancing the interests of customers, employees, society, and shareholders. With over $2B in annual revenue and a Work Anywhere policy, Veeva empowers people to thrive where they work best.

🚀 Role Overview
As a QA Engineer on the OpenData team, you'll play a critical role in validating large-scale data pipelines and systems that support commercial execution, compliance, and analytics. This hands-on role combines ETL testing with automation, SQL-driven validation, and cross-functional collaboration to ensure the delivery of high-quality, real-time healthcare data.

🔧 Key Responsibilities
- Analyze project scope, data models, and business rules
- Design and automate test cases for ETL processes
- Simulate ETL mapping scenarios using advanced SQL queries
- Verify data accuracy, completeness, and schema conformity
- Review source formats, conduct counts, and validate column consistency
- Collaborate closely with data engineering to maintain sustainable testing strategies

🎯 Requirements
- 3+ years of experience in ETL testing
- Skilled in analyzing ETL workflows and creating robust test cases
- Proficient in writing advanced SQL queries
- Understanding of data flow, modeling, and system interactions
- Experience with AWS or other cloud platforms
- Comfortable working in Agile environments with strong problem-solving ability
- Familiar with scripting or object-oriented languages (Java, Python)
- Bachelor’s degree in Computer Science, Engineering, or related field

🌟 Preferred Skills
- Hands-on experience with CI/CD pipelines and DevOps tools
- Familiarity with PySpark and automation frameworks
- Prior experience in life sciences or healthcare data

💰 Compensation & Perks
- Salary Range: $70,000–$120,000 USD
- May include variable bonus or stock options
- Benefits:
- Medical, dental, vision, and life insurance
- Flexible PTO and paid holidays
- Retirement savings programs
- 1% charitable giving match
- Remote work flexibility

Veeva is proud to be an equal opportunity employer. For accommodations during the hiring process, contact: talent_accommodations@veeva.com
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'qa-engineer-data-platform-in-veeva-kansas-united-states'},





 {applyUrl: 'https://jobs.lever.co/veeva/b79a4cb5-513f-4741-a191-dea45c36f20a', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'Oregon', jobTitle: 'Senior Software Engineer - SRE', jobType: 'Remote', jobCategory: 'Software', mainDescription: `💼 Job Title: Senior Software Engineer – Site Reliability Engineering (SRE)
Location: Portland, Oregon (Remote within PST or HST time zones)
Team: Vault Platform – Engineering
Employment Type: Full-Time
Schedule: Monday–Friday, 2 PM – 10 PM PST

🏢 About Veeva Systems
Veeva Systems is a global leader in cloud-based solutions for life sciences. As a Public Benefit Corporation (PBC), Veeva is committed to advancing healthcare innovation, customer success, and community impact. With $2B+ in annual revenue, Veeva’s Work Anywhere policy supports flexibility and performance from anywhere in the U.S.

🚀 Role Overview
As a Senior Site Reliability Engineer (SRE) on the Vault Platform team, you’ll play a critical role in building infrastructure, ensuring platform reliability, and solving high-scale production challenges. This is a hands-on role focused on backend development, with opportunities in infrastructure and frontend systems, serving millions of users globally.

🔧 Responsibilities
- Design and build cloud infrastructure aligned with software best practices
- Ensure platform scalability, performance, and reliability across global regions
- Lead incident response and root cause analysis (on-call required)
- Develop automation tools to streamline diagnostics and eliminate manual processes
- Collaborate on engineering design reviews and product scalability initiatives
- Engage cross-functionally with Product Management, QA, and Design
- Mentor junior engineers and foster a positive team culture
- Communicate effectively across technical and executive audiences during high-impact events

🎯 Qualifications
- 5+ years of Java development in enterprise cloud environments
- Operational experience in high-volume or mission-critical production services
- Strong SQL proficiency and experience with relational databases (3+ years)
- Hands-on experience with Spring, Hibernate, MySQL, Maven, Git, Tomcat, Linux, AWS, Docker, Kubernetes
- Scripting ability with Shell, Bash, Python, Go, Ruby, or similar
- Strong communication and leadership in incident management scenarios
- Proven mentorship track record
- Must reside in PST or HST time zones
- Unrestricted right to work in the U.S. (no sponsorship provided)

💰 Compensation & Benefits
- Base Salary Range: $110,000 – $270,000 USD
- Additional compensation may include:
- Bonus
- Stock options
- Benefits package includes:
- Medical, dental, vision, life insurance
- Flexible PTO and paid holidays
- Retirement plans
- 1% charitable giving program
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-software-engineer-sre-in-veeva-oregon-united-states'}, 



























{applyUrl: 'https://jobs.lever.co/veeva/bad91414-664f-41cf-b8e3-7fd86795c744', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'China', jobTitle: 'Data Scientist', jobType: 'Full-time', jobCategory: 'Data', mainDescription: `💼 Job Title: Data Scientist – OpenData
Location: Dalian, China (On-Site)
Department: Product Management & Alliances – OpenData Asia
Employment Type: Full-Time

🏢 About Veeva
Veeva Systems is an industry cloud innovator committed to helping life sciences companies bring therapies to market faster. As a Public Benefit Corporation (PBC), Veeva blends commercial success with social impact, prioritizing customer satisfaction, employee success, and sustainable innovation. With over $2B in annual revenue and a footprint in 15+ countries, Veeva is reshaping global healthcare infrastructure.

🚀 Role Overview
Join the OpenData Product team at Veeva as a Data Scientist, where you'll turn business ambiguity into clear, quantifiable data solutions. This role blends advanced algorithm design, NLP techniques, and cross-functional collaboration to deliver real-world value in healthcare data products. You'll be a critical decision support resource, enhancing internal systems and improving data quality for clients across the industry.

🔧 Key Responsibilities
- Lead design and iterative improvements of data matching algorithms for healthcare professionals and organizations
- Engineer and monitor validation storage pipelines in main databases
- Manage integration and update mechanisms for external/internal data sources
- Apply NLP, vectorization, and LLM technologies to tackle operational challenges
- Partner with business stakeholders to identify, analyze, and solve data production issues
- Translate data process needs into tool specifications and coordinate development resources

🎯 Qualifications
- Bachelor’s degree or equivalent experience in math, statistics, computer science, or related fields
- 5+ years in data modeling or algorithm development, with complete project lifecycle experience
- Proficient in Python and Excel; familiarity with TensorFlow or PyTorch
- Solid understanding and tuning experience with decision trees, SVMs, and neural networks
- Advanced SQL skills and familiarity with databases like MySQL, PostgreSQL, Redshift, Snowflake
- Strong analytical thinking and data sensitivity
- Fluent written and conversational English
- Comfortable using prompt engineering tools such as Dify

🌟 Bonus Skills
- Experience with data visualization tools (Power BI, Tableau)
- Knowledge of the pharma industry or master data management systems

💰 Perks & Benefits
- Financial support for fitness, communication, and home heating
- Free healthy snacks provided onsite
- Global team collaboration and development opportunities

Veeva welcomes candidates from all backgrounds. We proudly uphold a commitment to diversity, equity, and inclusion across every level of the organization. If you need accommodations during the application process, contact: talent_accommodations@veeva.com
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'data-scientist-in-veeva-china-china'},

{applyUrl: 'https://jobs.lever.co/veeva/c3aa9548-6de0-4769-8c88-ce5f8ef7ecad', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'Canada', jobTitle: 'Senior Software Engineer - SRE', jobType: 'Remote', jobCategory: 'Software', mainDescription: `💼 Job Title: Senior Software Engineer – Site Reliability Engineering (SRE)
Location: Vancouver, Canada (Remote)
Team: Vault Platform – Engineering
Employment Type: Full-Time
Working Hours: Monday–Friday, 2 PM – 10 PM PST

🏢 About Veeva Systems
Veeva is a global SaaS leader in industry cloud solutions for life sciences. As a Public Benefit Corporation (PBC), Veeva aligns commercial success with positive societal impact—driven by values of Speed, Customer Success, Employee Success, and Doing the Right Thing. With $2B+ in annual revenue and flexible remote options, we’re transforming how therapies reach patients.

🚀 Role Overview
Join the Vault Platform team as a Senior Site Reliability Engineer to build highly scalable enterprise systems that serve millions across North America, Europe, and Asia. You’ll architect cloud infrastructure, optimize performance, and lead cross-functional collaboration that ensures operational excellence across Veeva’s global platform.

🔧 Key Responsibilities
- Design and deploy cloud infrastructure using best-practice software engineering
- Improve system scalability, reliability, and performance
- Lead incident response, root cause analysis, and on-call triage
- Automate diagnostics and reduce manual overhead
- Partner with engineering teams to influence design decisions pre-launch
- Conduct engineering design reviews and guide efficiency initiatives
- Contribute to backend development, with flexibility across infrastructure and frontend
- Communicate effectively across technical and non-technical teams during outages
- Mentor team members to elevate team performance and learning

🎯 Required Qualifications
- 5+ years of Java development (preferably in enterprise cloud environments)
- Operational experience in high-volume production services
- Hands-on expertise with: Spring, Hibernate, MySQL, Solr, Maven, Git, Tomcat, Linux, AWS, Docker, Kubernetes
- Advanced SQL skills (3+ years)
- Scripting proficiency in Shell, Bash, Python, Go, or Ruby
- Clear communicator with proven leadership in incident management
- Strong record of mentoring engineering peers
- Must reside in PST or HST time zones

💰 Compensation & Benefits
- Base Salary Range: $110,000 – $270,000 CAD
- May include stock bonus or variable compensation
- Benefits:
- Medical, dental, vision, life insurance
- Flexible PTO and paid holidays
- Retirement programs
- 1% charitable giving match

Veeva is an equal opportunity employer committed to inclusion and diversity. For accommodations during the application process, contact: talent_accommodations@veeva.com.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-software-engineer-sre-in-veeva-canada-canada'}, 

{applyUrl: 'https://jobs.lever.co/veeva/c7be7281-80e8-4b84-9682-6ee85b637960', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'Hawaii', jobTitle: 'Senior Software Engineer - SRE', jobType: 'Remote', jobCategory: 'Software', mainDescription: `💼 Job Title: Senior Software Engineer – Site Reliability Engineering (SRE)
Location: Remote – Honolulu, Hawaii (HST or PST Time Zone)
Department: Engineering – Vault Platform
Employment Type: Full-Time
Schedule: Monday–Friday, 2 PM–10 PM PST

🏢 About Veeva Systems
Veeva is a global SaaS leader serving the life sciences sector, helping companies speed up delivery of therapies to patients. As a Public Benefit Corporation with over $2B in annual revenue, Veeva is committed to balancing business growth with customer and community impact. Our “Work Anywhere” model allows employees to choose the environment where they thrive.

🚀 Role Overview
Join Veeva’s Vault Platform team as a Senior Site Reliability Engineer to ensure the scalability, reliability, and performance of enterprise cloud applications used by customers worldwide. You’ll take a hands-on role in designing cloud infrastructure, leading incident response, and driving engineering improvements—focusing primarily on backend development across a diverse and global tech stack.

🔧 Responsibilities
- Build cloud infrastructure and deploy scalable systems
- Lead incident management efforts and root cause analysis
- Develop automation tools and reduce manual operations
- Analyze and optimize full-stack system performance
- Collaborate with engineering, product, and QA on system design and deployment
- Participate in design reviews and provide guidance on features before launch
- Mentor team members and promote operational excellence

🎯 Required Qualifications
- 5+ years of Java development experience, ideally in cloud-based enterprise environments
- Experience managing high-volume production services and incident response
- Proficiency in Spring, Hibernate, MySQL, Solr, Tomcat, Git, Linux, AWS, Docker, Kubernetes
- Strong SQL and scripting skills (Bash, Python, Go, Ruby, etc.)
- Demonstrated leadership in crisis situations and clear communication with technical and non-technical teams
- History of mentoring and team development
- Must reside in HST or PST time zones
- Must be authorized to work in the U.S. (no sponsorship available)

💰 Compensation & Benefits
- Base Salary Range: $110,000–$270,000 USD
- Potential for variable bonus and stock options
- Full benefits package:
- Medical, dental, vision, life insurance
- Flexible paid time off and holidays
- Retirement plans
- Charitable giving program

Veeva welcomes applicants from all backgrounds and offers accommodations throughout the hiring process. For assistance, contact: talent_accommodations@veeva.com.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-software-engineer-sre-in-veeva-hawaii-united-states'},

   {applyUrl: 'https://jobs.lever.co/veeva/d65c7188-b86b-4308-b0a1-5810e0b7af54', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'Portugal', jobTitle: 'Analyst Data Extraction - OpenData EMEA (Remote)', jobType: 'Remote', jobCategory: 'Analyst', mainDescription: `💼 Job Title: Analyst – Data Extraction (OpenData EMEA)
Location: Lisbon, Portugal (Remote)
Team: Analytics – R&D Link Data Development
Employment Type: Full-Time

🏢 About Veeva Systems
Veeva is a global leader in cloud software for the life sciences industry, driving faster delivery of therapies to patients. As a Public Benefit Corporation, Veeva blends commercial success with societal impact, guided by values of Customer Success, Employee Success, Do the Right Thing, and Speed.
With a Work Anywhere model and operations in 15+ countries, Veeva empowers talented individuals to do meaningful work from wherever they thrive.

🚀 Role Overview
Join Veeva’s OpenData Commercial team as a Data Extraction Analyst and help deliver high-quality reference data to life sciences clients. You'll configure web crawlers, support data ingestion, and generate insightful reports that drive compliance, analytics, and sales execution. This role plays a key part in ensuring the freshness and accuracy of data used by customers worldwide.

🔧 Key Responsibilities
- Build and maintain scalable web crawlers using internal tools
- Generate ad-hoc and scheduled reports
- Prepare extracted data for platform processing using Python configurations
- Ensure seamless data integration into the OpenData system
- Collaborate across teams to deliver quality data solutions

🎯 Required Qualifications
- 4+ years of experience as a data analyst, with strong SQL skills
- Solid understanding of data structures and modeling
- Experience building scalable and reliable web crawlers
- Familiarity with version control and collaborative code practices
- Basic proficiency in Python scripting

🌟 Bonus Skills
- Experience with tools like Mozenda or Zyte
- Familiarity with Redshift or other cloud data warehouses
- Knowledge of Veeva Network or related products

💰 Benefits & Perks
- Equity package (RSUs), private pension contributions, and family health coverage
- Annual charitable donation allowance
- Fitness reimbursement
- Flexible remote work anywhere in Portugal

Veeva embraces diversity and inclusion at all levels. If you require accommodations during the hiring process, please reach out to: talent_accommodations@veeva.com.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'analyst-data-extraction-opendata-emea-remote--in-veeva-portugal-portugal'}, 


{applyUrl: 'https://jobs.lever.co/veeva/de31357b-1060-4d23-bd62-bd3e086f3f3d', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'Germany', jobTitle: 'Manager Data Extraction - OpenData EMEA (Remote)', jobType: 'Remote', jobCategory: 'Data', mainDescription: `💼 Job Title: Manager, Data Extraction – OpenData EMEA
Location: Berlin, Germany (Remote within Germany)
Department: Analytics – R&D Link Data Development
Employment Type: Full-Time

🏢 About Veeva Systems
Veeva Systems is a leading industry cloud company serving life sciences organizations. As a Public Benefit Corporation (PBC), Veeva is committed to balancing customer success, employee well-being, societal contribution, and investor value. With over $2B in annual revenue and a remote-first work model, Veeva empowers teams globally to make a positive impact on health outcomes through technology.

🚀 Role Overview
Join Veeva’s OpenData Commercial team and lead a group of data analysts focused on extracting and curating high-quality reference data from healthcare ecosystems. This position plays a pivotal role in ensuring timely data delivery and maintaining the accuracy and freshness of the information customers rely on for compliance, analytics, and sales execution.

🔧 Key Responsibilities
- Manage and mentor a team of 6–8 data analysts
- Oversee workload planning in coordination with product managers
- Ensure data quality and timely extraction from web sources
- Select and implement tools for efficient data crawling and reporting
- Deliver ad-hoc analyses and visual data reports as required

🎯 Required Qualifications
- 3+ years leading technical teams
- Experience building scalable and reliable web crawlers
- Strong grasp of version control, code reviews, and task management best practices
- Solid knowledge of data structures and modeling
- Basic understanding of Python scripting

🌟 Preferred Experience
- Familiarity with tools like Mozenda or Zyte for web scraping
- Experience working with Redshift or similar data warehouses
- Exposure to Veeva products such as Network
- Understanding of master/reference data management and vendor evaluation

💰 Benefits & Perks
- Equity package (RSUs), private pension support, and family health coverage
- Annual contribution allocation for charitable giving
- Fitness reimbursement
- Remote work flexibility from anywhere in Germany

Veeva is committed to diversity, equity, and inclusion. Applicants of all backgrounds are welcome. If accommodations are needed for any part of the hiring process, please contact talent_accommodations@veeva.com.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'manager-data-extraction-opendata-emea-remote--in-veeva-germany-germany'}, 


{applyUrl: 'https://jobs.lever.co/veeva/e0135754-3a6a-43fb-977e-5068f6e4cc45', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'California', jobTitle: 'Senior Software Engineer - SRE', jobType: 'Full-time', jobCategory: 'Software', mainDescription: `💼 Job Title: Senior Software Engineer – Site Reliability Engineering
Location: Remote (California – Los Angeles preferred)
Team: Vault Platform Engineering
Schedule: Monday–Friday, 2:00 PM–10:00 PM PST
Employment Type: Full-Time

🏢 About Veeva Systems
Veeva Systems is an industry cloud pioneer helping life sciences companies accelerate therapy delivery. With $2B+ in annual revenue and global scale, Veeva operates as a Public Benefit Corporation—legally committed to balancing customer success, employee well-being, societal impact, and investor value. Our Work Anywhere model allows team members to thrive from wherever they work best.

🚀 Role Overview
As a Senior Site Reliability Engineer, you’ll drive platform reliability, scalability, and engineering efficiency for Veeva’s enterprise Vault applications. This role demands deep Java expertise, hands-on experience with open-source tooling, and a systems-thinking mindset to manage production environments serving millions of users worldwide.

🔧 Responsibilities
- Architect and implement cloud infrastructure for mission-critical services
- Ensure reliable platform performance across North America, Europe, and Asia
- Lead incident response and mitigation, including on-call escalations
- Automate operations to reduce manual effort and improve diagnostics speed
- Deliver root cause analysis across full-stack systems
- Advise engineers on scalable designs and participate in technical roadmap decisions
- Partner cross-functionally with QA, Design, and Product to ensure operational excellence
- Mentor fellow engineers and foster a collaborative, high-performance culture

🎯 Requirements
- 5+ years of Java development experience, preferably in cloud software environments
- Expertise in Spring, Hibernate, MySQL, Solr, Tomcat, Git, Maven, AWS, Docker, and Kubernetes
- Strong SQL skills and database experience (3+ years)
- Proficiency in scripting languages: Bash, Python, Go, Ruby, or similar
- Proven history of managing critical production incidents and leading engineering teams
- Exceptional communication skills for cross-team coordination and stakeholder updates
- Located in HST or PST time zones (must be authorized to work in the U.S.; no sponsorship available)

💰 Compensation & Benefits
- Base Salary Range: $110,000–$270,000 USD
- Additional compensation may include variable bonuses and/or stock options
- Full benefits package:
- Medical, dental, vision, life insurance
- Flexible PTO & paid holidays
- Retirement programs
- 1% charitable giving match
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-software-engineer-sre-in-veeva-california-united-states'},

  {applyUrl: 'https://jobs.lever.co/veeva/ef95cef4-c013-4c5a-b10a-e96e346229cb', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'California', jobTitle: 'Senior Software Engineer - SRE', jobType: 'Full-time', jobCategory: 'Software', mainDescription: `💼 Job Title: Senior Software Engineer – Site Reliability Engineering (SRE)
Location: Remote – California (San Luis Obispo preferred)
Department: Engineering – Vault Platform
Schedule: Monday–Friday, 2 PM–10 PM PST
Type: Full-Time

🏢 About Veeva Systems
Veeva is a mission-driven cloud technology company transforming life sciences by accelerating therapy delivery to patients. As a Public Benefit Corporation with over $2B in annual revenue, Veeva is uniquely focused on balancing innovation, growth, and societal impact. Through our Work Anywhere model, employees thrive from home or office—wherever they do their best work.

🚀 Role Overview
Join Veeva’s Vault Platform team as a Senior Site Reliability Engineer (SRE) and help drive platform reliability and scalability across global regions. You'll apply deep technical knowledge in Java, cloud infrastructure, and modern open-source stacks to solve challenging production issues, build resilient systems, and shape engineering decisions for features used by millions.

🔧 Responsibilities
- Build, scale, and optimize cloud infrastructure supporting enterprise applications
- Drive system reliability for thousands of global users
- Lead incident triage and mitigation; participate in on-call rotations
- Automate tools and workflows to reduce manual processes and accelerate diagnostics
- Identify root causes for production issues across full-stack services
- Guide engineering teams with scalable design recommendations
- Actively engage in design reviews and roadmap discussions to improve operational excellence
- Collaborate with Product, QA, and Design to deliver customer-impactful solutions
- Lead backend development with opportunities to contribute across the stack
- Mentor junior engineers and foster team excellence

🎯 Requirements
- 5+ years of Java development experience in enterprise SaaS environments
- Operational expertise in high-volume, production-critical services
- Hands-on experience with: Spring, MySQL, Hibernate, Solr, Maven, Git, Linux, AWS, Docker, Kubernetes
- Strong SQL skills (3+ years relational database experience)
- Proficient in scripting: Shell, Bash, Python, Go, or equivalent
- Proven leadership in incident management and cross-team communication
- Excellent code quality and system architecture judgment
- Must reside in PST or HST time zones
- Must have the unrestricted right to work in the United States; sponsorship not available

💰 Compensation & Benefits
- Salary Range: $110,000–$270,000 USD
- Eligible for performance bonus and/or stock awards
- Benefits include:
- Medical, dental, vision, life insurance
- Flexible PTO & paid holidays
- Retirement programs
- 1% charitable giving match
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'senior-software-engineer-sre-in-veeva-california-united-states1'}, 


  {
    id: 'Software-Engineer-Back-End-Kyiv-Ukraine',
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
    requirements: '',
    jobCategory: 'Software Engineering',
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
    id: 'AI-Engineering-Manager-in-France-mirakl',
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
    jobType: 'Full-time',
    location: 'France',
    applicationDeadline: new Date('2024-12-15'),
    submittedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://www.mirakl.com/careers/5576621004'
  },
   {
    id: 'Operational-Safety-Data-Engineer-in-Foster-City-zoox',
    jobTitle: 'Operational Safety Data Engineer',
    companyName: 'zoox',
    companyLogo: '/images/zoox.png',
    mainDescription: `💼 Job Title: Operational Safety Data Engineer
Location: Foster City, CA (Hybrid)
Department: Safety Policy & Strategy
Employment Type: Full-Time

🏢 About Zoox
Zoox is building the future of urban mobility by developing a fully autonomous vehicle fleet from the ground up. Combining robotics, machine learning, and advanced design, Zoox aims to redefine mobility-as-a-service for urban environments with safety at the core of its mission.

🚀 Role Overview
As an Operational Safety Data Engineer at Zoox, you will play a crucial role in informing risk-based safety processes as we scale operations. You'll aggregate and analyze fleet safety data, build analytics tools, and help cross-functional teams respond to field events with precision and clarity. This position supports incident response on a rotational on-call basis, including nights, weekends, and holidays.

🔧 Key Responsibilities
- Develop data pipelines and tools to support rigorous safety decision-making
- Create dashboards tracking safety KPIs, trends, and thresholds for executive reporting
- Drive alignment across teams on safety risk evaluation frameworks
- Support real-time incident triage and escalation with well-informed insights
- Present findings clearly to technical and non-technical audiences, including leadership

🎯 Required Qualifications
- Bachelor’s degree in Computer Science, Engineering, or related field
- 6+ years working with safety-critical systems and risk management strategies
- Hands-on experience with data tools like SQL, PySpark, Python, Pandas, and platforms like DataBricks
- Strong analytical thinking, initiative, and cross-functional collaboration skills
- Ability to stay composed and professional in incident response scenarios

🌟 Bonus Skills
- Experience in autonomous vehicles or robotics systems
- Technical expertise in AI, ADAS development, or safety-critical software
- Familiarity with industry standards (e.g., ISO 26262, MIL-STD-882, ISO 21448 PAS)

💰 Compensation & Benefits
- Base Salary Range: $180,000–$200,000
- Additional package includes:
- Amazon Restricted Stock Units (RSUs)
- Zoox Stock Appreciation Rights
- Potential sign-on bonus
- Comprehensive benefits covering:
- Health, life, disability & long-term care insurance
- Paid time off (vacation, sick leave, bereavement)
- Retirement support
`,
    requirements: '',
    jobCategory: 'UX/UI Design',
    jobType: 'Hybrid',
    location: 'Foster City',
    submittedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: true,
    applyUrl: 'https://jobs.lever.co/zoox/8b62411a-6d3a-4e3e-a9fd-158030eb82ec'
  },
   
 {
    id: 'Senior-Staff-Machine-Learning-Engineer-Perception-Offline-Driving-Intelligence-in-Foster-City-zoox',
    jobTitle: 'Senior/Staff Machine Learning Engineer - Perception Offline Driving Intelligenc',
    companyName: 'zoox',
    companyLogo: '/images/zoox.png',
    mainDescription: `💼 Job Title: Senior/Staff Machine Learning Engineer – Perception (Offline Driving Intelligence)
Location: Foster City, CA
Team: Software – Perception
Type: Full-Time, Hybrid

🏢 About Zoox
Zoox is building a ground-up autonomous vehicle ecosystem to redefine urban mobility. With cutting-edge robotics, advanced sensor systems, and transformative design, we’re crafting a robotaxi service that’s safe, sustainable, and intelligent.

🚀 Role Overview
Join Zoox’s ODIN (Offline Driving Intelligence) team to build the next generation of multimodal large language models (LLMs) for environmental perception and off-vehicle analysis. Your work will directly impact how our autonomous vehicles understand complex urban contexts and make real-time driving decisions safely and efficiently.

🔧 Responsibilities
- Lead development of advanced multimodal LLMs to improve robotaxi environmental comprehension
- Design novel model architectures and training strategies using extensive sensor data
- Drive full-stack ML development—research, training, validation, and deployment
- Collaborate across teams (Perception, Planning, Safety, Systems) to integrate models into onboard decision systems
- Validate model performance using real-world driving data to ensure safety and responsiveness

🧠 Required Qualifications
- MS or PhD in Computer Science, Machine Learning, or similar discipline
- Demonstrated experience deploying LLMs in production environments
- Expertise in ML pipelines—data preprocessing, model training, evaluation
- Proficiency in Python and libraries like PyTorch, NumPy
- Experience working with massive datasets (tens of millions of video samples)

🎓 Preferred Qualifications
- Published research in top AI conferences (e.g., CVPR, ICCV, RSS, ICRA)
- Experience with autonomous robotics or self-driving systems

💰 Compensation
- Base salary range: $230,000–$332,000 (varies by experience, interview performance, and location)
- Additional components may include:
- Amazon Restricted Stock Units (RSUs)
- Zoox Stock Appreciation Rights
- Sign-on bonus

🌟 Benefits
- Comprehensive health, disability, and life insurance
- Paid time off (vacation, sick leave, bereavement)
- Long-term care coverage
- Career development within a future-focused, mission-driven organization
`,
    requirements: '',
    jobCategory: 'Machine Learning',
    jobType: 'Full-time',
    location: 'Foster City',
    submittedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/zoox/cf049a4a-491e-45c3-bed7-1e8a45dac2bc'
  },
 {
    id: 'Manufacturing-Data-Analyst-in-Foster-City-zoox',
    jobTitle: 'Manufacturing Data Analyst',
    companyName: 'zoox',
    companyLogo: '/images/zoox.png',
    mainDescription: `💼 Job Title: Manufacturing Data Analyst
Location: Foster City, CA
Department: Manufacturing Operations Program Management
Employment Type: Full-Time, On-Site

🏢 About Zoox
Zoox is building the first fully autonomous robotaxi system from the ground up—bringing together robotics, AI, and design to reshape urban mobility. We’re deploying a purpose-built fleet that’s safe, sustainable, and scalable for modern cities.

🚀 Role Summary
Zoox is seeking a data-driven, systems-minded Manufacturing Data Analyst to work closely with teams in Manufacturing, Logistics, Quality, and Test. This role will be central to enabling data-informed decisions by automating reporting pipelines, integrating cross-platform analytics, and developing real-time dashboards that drive operational excellence.

🔧 Key Responsibilities
- Translate operational pain points into structured metrics and actionable insights
- Design and automate end-to-end data workflows across tools like Jira, SAP, 3DX, MES, and Ignition
- Build user-friendly dashboards (Tableau, Looker) to monitor KPIs such as first pass yield, inbound cycle time, and defect rates
- Lead cross-functional analytics initiatives with clear scoping, stakeholder alignment, and on-time delivery
- Drive data quality through standardization and hygiene efforts
- Create intermediate datasets and contribute to scalable data models for future analytics and AI/ML integration

🧠 Qualifications
Required:
- Bachelor’s degree in Computer Science, Data Analytics, Statistics, or related field
- 5+ years of experience in manufacturing, logistics, or service operations analytics
- Proficient in SQL, Excel, and emerging AI tools
- Experience building dashboards with Tableau, Looker, or Power BI
- Strong collaboration, communication, and data storytelling skills
Preferred:
- Master’s degree in Business Analytics, Data Science, or Industrial Engineering
- Experience with MES, SAP (EWM), or 3DX systems
- Familiarity with lean manufacturing concepts and operational metrics
- Proficiency in Python, R, and experience with KPI standardization
- Knowledge of data modeling and governance for AI-ready analytics

💰 Compensation & Benefits
- Base Salary Range: $150,000–$206,000
- Additional Components:
- Amazon RSUs
- Zoox Stock Appreciation Rights
- Potential sign-on bonus
- Full benefits package including:
- Health, life, disability & long-term care insurance
- Paid and unpaid time off
- Financial wellness and retirement support

🌈 Our Commitment
Zoox is proud to be an equal opportunity employer. We value diverse perspectives and encourage candidates from all backgrounds to apply—even if your experience doesn’t align perfectly with every qualification listed. We’re building a team rooted in innovation, collaboration, and inclusion.
`,
    requirements: '',
    jobCategory: 'Analyst',
    jobType: 'Full-time',
    location: 'Foster City',
    applicationDeadline: new Date('2024-11-30'),
    submittedDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/zoox/f84bcac3-d36a-4526-a14d-68e4f4618c42'
  },
     {
    id: 'Senior-Staff-Systems-Engineer-Autonomy-System-Performance-in-Foster-City-zoox',
    jobTitle: 'Senior/Staff Systems Engineer - Autonomy System Performance',
    companyName: 'zoox',
    companyLogo: '/images/zoox.png',
    mainDescription: `💼 Job Title: Senior/Staff Systems Engineer – Autonomy System Performance
Location: Foster City, California
Team: System Design and Mission Assurance – Systems Engineering (Safety)
Employment Type: Full-Time, On-Site

🏢 About Zoox
Zoox is reimagining urban mobility by building a full-stack autonomous robotaxi solution from the ground up. Our technology aims to safely transform transportation in cities, combining cutting-edge AI, robotics, and vehicle design.

🚀 Role Summary
Join Zoox as a Senior or Staff Systems Engineer focused on developing and evolving service and driving performance metrics for our autonomous systems. Your work will be central to evaluating readiness, informing launch decisions, and enhancing the safety and reliability of our Level 5 autonomous robotaxis.

🔧 Key Responsibilities
- Define and refine progress metrics for autonomy service performance
- Develop methodologies to assess system readiness and maturity
- Model the impact of autonomy behaviors and residual risks on service outcomes
- Perform detailed system analyses to design verification and validation strategies
- Translate complex metrics into actionable insights for diverse stakeholders
- Ensure traceability of metrics to overall performance targets and strategic goals
- Enable continuous feedback and data-driven refinement across teams

🎯 Qualifications
Required:
- Master’s degree or higher in Engineering, Computer Science, or related field
- 7+ years of experience in systems engineering, data analysis, or performance tracking
- Skilled in metric development and data pipeline implementation
- Strong Python skills for data modeling and analysis
- Understanding of complex software systems in robotics, autonomous driving, or aerospace
- Excellent communicator with experience presenting data to executives and cross-functional teams
Preferred:
- Previous metrics ownership in autonomous vehicle or robotics projects
- Experience with safety-critical or regulated systems
- Familiarity with risk assessment frameworks and V&V strategies
- Proven ability to build and scale processes from the ground up

💰 Compensation & Benefits
- Base salary range: $201,000 – $278,000 (dependent on experience and level)
- Additional compensation may include:
- Amazon RSUs
- Zoox Stock Appreciation Rights
- Sign-on bonus (where applicable)
- Comprehensive benefits package including:
- Health, disability, life, and long-term care insurance
- Generous PTO (vacation, sick leave, bereavement)
- Retirement planning and financial wellness resource
`,
    requirements: '',
    jobCategory: 'Engineer',
    jobType: 'Full-time',
    location: 'Foster City',
    submittedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/zoox/fca1320c-c37a-416a-94fd-8b5c1c9b74da'
  },
  {
    id: 'Finance-Control-Analyst-in-London-UK-monzo',
    jobTitle: 'Finance Control Analyst',
    companyName: 'monzo',
    companyLogo: '/images/monzo.png',
    mainDescription: 'Develop and maintain our cross-platform mobile application using React Native. Collaborate with a passionate team to deliver a seamless user experience.',
    requirements: `💼 Job Title: Finance Control Analyst
Location: London, UK (Hybrid or Remote within UK)
Salary: £45,000 – £57,500 + Share Options

🏢 About Monzo
Monzo is redefining banking with a mission to make money work for everyone. We offer a wide range of banking services—from personal and business accounts to youth, savings, investment, and pension products. Known for our vibrant hot coral cards, intuitive features like “get paid early,” and standout customer service, we focus on solving problems and creating moments of delight through technology and empathy.

💡 Role Overview
Join our forward-thinking Finance team and help build world-class financial controls to support Monzo’s continued growth across the UK and EU. This role is ideal for a proactive, detail-oriented qualified accountant (or nearly qualified) with audit experience and a knack for process improvement and automation.

🔧 Responsibilities
- Lead month-end close activities including accruals, EIR adjustments, tax postings, and group consolidation
- Produce insightful management commentary grounded in a deep understanding of Monzo’s products
- Work with engineering and data teams to automate reporting and streamline accounting processes
- Support implementation of a new accounting system and ensure optimal use of its features
- Learn and apply SQL to improve financial reporting and data efficiency
- Maintain and enhance financial controls and balance sheet substantiation
- Partner with external auditors for year-end activities
- Review accounting for new product launches and changes in financial standards
- Ensure integrity of financial data including chart of accounts and static data
- Provide ad-hoc support across finance functions (e.g. forecasting, valuations, tax, transfers)

🎯 Requirements
- Qualified or nearly qualified accountant (ACCA, ACA or equivalent), ideally with financial control experience in banking
- Strong attention to detail and understanding of financial controls
- Proactive and versatile—comfortable with everything from transactions to investor reports
- Ability to communicate complex topics simply and effectively
- Interest in data and automation (SQL experience is a plus)
- Thrive in fast-paced, changing environments
- Excited by Monzo’s mission to change lives through smarter money solutions

🌟 Benefits
- 💰 £45,000–£57,500 salary plus equity
- 🏡 Flexible hybrid or remote working within the UK
- 📚 £1,000 annual learning budget
- 🧘 Mental health & wellbeing support
- 💸 Pension contributions matched up to 6%
- 💻 Home office setup support
- ⏰ Flexible working hours

🌈 Inclusivity at Monzo
Diversity, equity and inclusion are foundational to our mission. We encourage applicants from all backgrounds—even if you don’t meet every requirement. We’re committed to building a team where everyone can do their best work and grow with confidence.

Would you like help repackaging this as a résumé summary, LinkedIn headline, or tailored cover letter bullet points? I'm ready whenever you are.
`,
    jobCategory: 'Analyst',
    jobType: 'Full-time',
    location: 'London',
    submittedDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://job-boards.greenhouse.io/monzo/jobs/6900159'
  },
  {
    id: 'Engineering-Manager-Growth-in-Berlin-Germany-Grammarly',
    jobTitle: 'Engineering Manager, Growth',
    companyName: 'Grammarly',
    companyLogo: '/images/Grammarly.png',
    mainDescription: `💼 Job Title: Engineering Manager – Growth Monetization
Location: Berlin, Germany (Hybrid)
Department: Growth Team – Engineering

🏢 About Grammarly
Grammarly is the trusted AI assistant for communication and productivity, helping over 40 million individuals and 50,000 organizations—including Atlassian, Databricks, and Zoom—write and collaborate with clarity and efficiency. Seamlessly integrated with over 500,000 apps and websites, Grammarly is ranked among TIME's 100 Most Influential Companies, the Forbes Cloud 100, and Fast Company's Most Innovative Companies in AI.

🚀 Role Overview
We are seeking an Engineering Manager to lead our Growth Monetization team, focusing on user-facing features and revenue-driving product strategies. This highly visible role will help shape how users evaluate and purchase Grammarly’s premium offerings while optimizing the technical throughput and well-being of a growing engineering team.

🔧 Responsibilities
- Lead a high-impact team developing monetization features that drive growth
- Collaborate with cross-functional partners (Product, Design, Data) on experiments, initiatives, and architecture
- Foster a culture of inclusion, safety, and belonging while coaching and developing top engineering talent
- Act as a strategic sounding board for Growth planning and sustainable expansion
- Tackle ambiguity with structured execution and strong engineering judgment

🧠 Qualifications
- Proven experience building and leading high-performing engineering teams
- Strong technical decision-making in architecture and product planning
- Empathetic leader who builds trust, communicates priorities, and drives execution
- Skilled at identifying talent and raising the technical bar during hiring
- Comfortable making decisions with limited information and adjusting to new data
- Deeply aligned with Grammarly’s EAGER values (Ethical, Adaptable, Gritty, Empathetic, Remarkable) and MOVE principles (Move fast, Obsess over customer value, Value impact, Embrace healthy disagreement)

🌱 What We Offer
- Autonomy and trust to lead with vision
- Personalized coaching and professional development
- Collaborative hybrid work culture with global recognition and celebrations
- Competitive compensation, mental health benefits, home office and wellness stipends
- Relocation support to Berlin—including visa assistance, temporary housing, and family needs

🌈 Our Commitment
Grammarly is proud to be an equal opportunity employer. We celebrate diversity and encourage individuals from all backgrounds and identities to apply. Our inclusive environment fosters growth, belonging, and mutual respect.
`,
    requirements: '',
    jobCategory: 'Engineer',
    jobType: 'Hybrid',
    location: 'Germany',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://job-boards.greenhouse.io/grammarly/jobs/7007380'
  },
  {
  id: 'Senior-Software-Engineer-Java-in-Bordeaux-mirakl',
    jobTitle: 'Senior Software Engineer Java',
    companyName: 'mirakl',
    companyLogo: '/images/mirakl.png',
    mainDescription: `💼 Job Title: Senior Software Engineer – Java
Location: Bordeaux, Paris, or Remote within France
Department: Mirakl Labs – Tech
Employment Type: Full-Time, Permanent (CDI)

🏢 About Mirakl
Mirakl is the global leader in e-commerce platform solutions, empowering B2C and B2B enterprises to scale digital operations efficiently and sustainably. Since 2012, we’ve helped more than 450 market leaders—including Airbus, Decathlon, H&M, and Sonepar—drive digital transformation through marketplaces, dropshipping, catalog management, payment processing, and personalized customer experiences.

🧪 About Mirakl Labs
Our R&D teams, Mirakl Labs, are based in Paris and Bordeaux and operate in agile squads composed of developers, PMs, and QAs. Each squad owns a functional scope and contributes to feature development and microservice APIs. Teams such as Infrastructure, Security, Data, and UX support product-wide excellence.
Innovation, ownership, and open collaboration define our culture. We’re active participants in tech events like Devoxx, ProductConf, and ReactEurope.

🔧 Responsibilities
- Design, develop, and deploy new business features across full-stack layers (UI/API, business logic, database schemas)
- Own product coherence and stability with a strong influence on architectural decisions
- Act as a technical leader within your squad and mentor junior developers
- Participate in sprint ceremonies, stand-ups, and quarterly roadmap planning
- Collaborate closely with PMs, designers, and other squads to ensure high-quality, scalable solutions
- Debug, monitor, and optimize production environments (you build it, you run it)
- Continuously improve development practices and track adoption and impact of shipped features

💻 Tech Stack
- Languages/Frameworks: Java 21, Spring Boot, Go
- Front-End: React, Redux
- Data/Infrastructure: PostgreSQL, Elasticsearch, Kafka
- DevOps: Docker, Kubernetes
- Cloud: AWS, Google Cloud

🎯 Who You Are
- 7–8+ years of Java & Spring development experience
- Strong technical leadership and mentoring background
- Experience in high-load distributed systems and microservices architecture
- Advocate of clean, high-quality code and thoughtful design
- Able to drive architectural decisions and collaborate across teams
- Fluent in professional English
- Eager to learn, grow, and contribute in a dynamic environment

🌈 Our Commitment to Diversity
Mirakl celebrates diversity and is committed to equal opportunity for all. We welcome candidates from all backgrounds, identities, and experiences.
`,
    requirements: '',
    jobCategory: 'Software Engineer',
    jobType: 'Full-time',
    location: 'France',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://www.mirakl.com/careers/5580100004'
  },
  {
    id: 'Senior-Software-Engineer-Java-in-Paris-mirakl',
    jobTitle: 'Senior Software Engineer Java',
    companyName: 'mirakl',
    companyLogo: '/images/mirakl.png',
    mainDescription: `💼 Job Title: Senior Software Engineer – Java
Location: Paris, Bordeaux, or Remote (within France)
Team: Mirakl Labs – Tech
Contract Type: Full-Time (CDI)

🏢 About Mirakl
Mirakl is the global leader in enterprise marketplace solutions, empowering B2C and B2B companies to rapidly scale their digital business. Since 2012, Mirakl has helped more than 450 industry giants—including Airbus, Decathlon, H&M, and Toyota Material Handling—accelerate growth through a secure, flexible suite of products for marketplace, dropshipping, catalog and supplier management, personalized customer experiences, and retail media.

🧪 About Mirakl Labs
Our R&D organization, Mirakl Labs, spans Paris and Bordeaux with squads organized around functional domains. Each squad includes a Squad Lead, five developers, a Product Manager, and a QA engineer. We work in agile mode to deliver new features and evolve APIs in a microservices architecture, supported by central teams focused on Infrastructure, Security, Data, UX, and more.
We value innovation, autonomy, and collaborative decision-making, and we’re active contributors to the tech community through sponsorships and speaking engagements at events like Devoxx, ReactEurope, ProductConf, and Flupa UX Days.

🔧 Your Role
As a Senior Software Engineer, you'll lead the design and delivery of new business features across all layers—from REST APIs and business logic to UI integration and database scripts. You'll help maintain functional and technical consistency within your squad and play a pivotal role in architectural decisions and technical mentoring.

🛠 Day-to-Day
- Participate in planning and design sessions with your squad and UX/UI teams
- Contribute to architectural and technical decision-making
- Develop, test, and deploy features via continuous delivery
- Engage in code reviews and pair programming
- Support production systems through proactive monitoring and debugging
- Attend daily standups, sprint reviews, and retrospectives
- Help shape quarterly squad roadmaps
- Mentor junior engineers and promote development best practices
- Monitor feature adoption and business impact post-deployment

💻 Tech Stack
- Back-End: Java 21, Spring Boot, Go, Kafka
- Front-End: React, Redux
- Database & Search: PostgreSQL, Elasticsearch
- DevOps & Cloud: Docker, Kubernetes, AWS, Google Cloud

🎯 What You Bring
- 7–8+ years of Java & Spring experience, with deep understanding of distributed systems
- Proven technical leadership and mentoring experience
- Familiarity with microservices and high-load architectures
- Passion for writing clean, scalable code and influencing architectural direction
- Eagerness to work in a dynamic, collaborative environment
- Professional English proficiency

🌈 Our Commitment
Mirakl is dedicated to fostering diversity, inclusion, and equal opportunity. We embrace the unique traits and experiences of every team member and evaluate all applications without regard to race, gender, religion, sexual orientation, disability, age, or other protected status.
`,
    requirements: '',
    jobCategory: 'UX/UI Design',
    jobType: 'Contract',
    location: 'France',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://www.mirakl.com/careers/5580099004'
  },
  {
    id: 'Senior-Regulatory-Reporting-Analyst-in-Dublin-Ireland-monzo',
    jobTitle: 'Senior Regulatory Reporting Analyst',
    companyName: 'monzo',
    companyLogo: '/images/monzo.png',
    mainDescription: `💼 Job Title: Senior Regulatory Reporting Analyst
Location: Dublin, Ireland (Hybrid)
Department: Finance – Monzo EU
Salary Range: €55,000 – €75,000 + equity & benefits

🏢 About Monzo
Monzo is on a mission to make money work for everyone. We’re redefining personal finance by removing complexity and creating magical customer experiences through innovation, transparency, and a deep understanding of modern banking needs. Our award-winning platform provides accounts for individuals, businesses, joint users, and young people—alongside savings, investments, and credit tools.

⭐ Role Overview
We are seeking a detail-driven and adaptive Senior Regulatory Reporting Analyst to join our growing Finance team at Monzo EU. This role is vital in setting up and managing Monzo’s prudential regulatory reporting processes, enabling compliance and insight across teams while supporting our broader business goals.

🔧 Responsibilities
- Develop and maintain processes for timely and accurate regulatory reporting (e.g. COREP, LCR, FINREP) and Pillar 3 disclosures
- Interpret and document regulatory frameworks (e.g. CRR, Basel 3.1)
- Implement data quality controls and governance mechanisms to ensure reporting integrity
- Lead User Acceptance Testing (UAT) for enhancements to Monzo’s automated regulatory reporting system
- Collaborate cross-functionally to support product launches and strategic decisions with regulatory input
- Leverage tools like SQL and data visualization dashboards to monitor reporting accuracy and performance
- Champion process automation and innovation to enhance scalability and efficiency

🎯 What You Bring
- Qualified or part-qualified accountant with experience in financial services
- Understanding of regulatory frameworks and reporting (capital, liquidity, financial)
- Proficiency in SQL, Excel, or Google Sheets
- Proven experience meeting strict regulatory deadlines
- Background in large-scale implementation or enhancement of reporting tools
- A passion for automation and process improvement through technology
- Open-minded, curious, and aligned with Monzo’s mission and values

🙌 Perks & Benefits
- 💰 Competitive salary (€55–75k) + stock options
- 🏢 Hybrid work model from our Dublin office
- 🏝 34 days paid leave annually (including public holidays)
- 📚 €1,200 learning budget each year
- 🏥 Private healthcare
- 💸 Pension contributions matched up to 6%
- 💛 Mental health and wellbeing support

🌈 Inclusive Hiring
Monzo is committed to building a diverse team and inclusive culture. We encourage candidates of all backgrounds to apply—even if your experience doesn’t match every requirement. We welcome part-time flexibility where possible, and support candidates needing adjustments during the hiring process.
`,
    requirements: '',
    jobCategory: 'Analyst',
    jobType: 'Hybrid',
    location: 'Ireland',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://job-boards.greenhouse.io/monzo/jobs/6999634'
  },

     {
    id: 'Senior-Embedded-Software-Engineer-Embedded-Linux-C-in-Foster-City-zoox',
    jobTitle: 'Senior Embedded Software Engineer - Embedded Linux C++',
    companyName: 'zoox',
    companyLogo: '/images/zoox.png',
    mainDescription: `💼 Job Title: Senior Embedded Software Engineer – Embedded Linux C++
Location: Foster City, CA (On-Site)
Department: Embedded Software & Systems Integration
Employment Type: Full-Time

🏢 About Zoox
Zoox is redefining mobility with a fully autonomous vehicle platform built from scratch. Merging advanced design, robotics, and machine learning, we’re building a next-gen robotaxi fleet and ecosystem for safe, scalable urban transportation.

🚀 Role Summary
As a Senior Embedded Software Engineer at Zoox, you'll join the Embedded Linux team responsible for developing, maintaining, and extending embedded platforms for autonomous vehicles. You'll collaborate closely with software and validation teams to enable advanced systems and accelerate development across multiple projects, using your deep experience in modern C++ and open-source systems.

🔧 Key Responsibilities
- Architect, implement, debug, optimize, and test Linux-based embedded software
- Integrate open-source technologies to enhance platform capabilities
- Build and maintain features for custom embedded Linux boards
- Apply modern C++ skills in an embedded Linux context
- Engage in all phases of the software lifecycle including design, prototyping, implementation, and validation

🎯 Required Qualifications
- Bachelor’s degree with 12+ years, or Master’s degree with 10+ years, in Computer Science, Electrical Engineering, or related field
- 6+ years of Linux development experience
- Expertise in modern C++ for native user-mode applications
- Proficient in Python and shell scripting

🌟 Bonus Skills
- Experience with Linux kernel development
- Familiarity with Yocto or other embedded Linux build tools
- Background in networking technologies and Linux audio systems

💰 Compensation & Benefits
- Base Salary Range: $180,000 – $245,000 (based on experience and interview outcome)
- Additional Compensation:
- Amazon RSUs
- Zoox Stock Appreciation Rights
- Potential sign-on bonus
- Comprehensive benefits include:
- Health, life, disability & long-term care insurance
- Paid time off (vacation, sick leave, bereavement)
- Retirement support

Zoox values diversity and encourages applicants from all backgrounds. If you're passionate about autonomous technology and want to shape the future of mobility, we’d love to hear from you!
`,
    requirements: '',
    jobCategory: 'Software Engineering',
    jobType: 'Full-time',
    location: 'Foster City',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/zoox/220a58f7-0ac3-4367-be04-8d5eca89f9ad'
  },
  {
    id: 'Senior-Manager-Data-Enablement-Business-Intelligence-in-Toronto-eqbank',
    jobTitle: 'Senior Manager, Data Enablement & Business Intelligence',
    companyName: 'eqbank',
    companyLogo: '/images/eqbank.png',
    mainDescription: `💼 Job Title: Senior Manager – Data Enablement & Business Intelligence
Location: Toronto, ON (Hybrid)
Department: Payments, Analytics & Fraud Strategy
Employment Type: Full-Time

🏢 About EQ Bank
EQ Bank is Canada’s leading digital challenger bank, redefining financial services with data-driven innovation. Focused on strategy, technology, and agility, we’re reshaping customer banking experiences with smart insights and powerful tools.

🚀 Role Overview
We're looking for a visionary Senior Manager in Business Intelligence to architect and lead EQ Bank’s data enablement strategy. This role blends deep technical expertise with strategic influence, driving dashboard creation, real-time analytics, and scalable data infrastructure across departments. You’ll partner with senior leaders to build a culture of data-informed decision making at one of Canada’s most progressive fintech firms.

🔧 Key Responsibilities
Product & Executive Dashboarding (60%)
- Build dynamic dashboards for Product, Strategy, and Marketing teams
- Drive self-service analytics and automation for real-time insights
- Conduct deep-dive analyses using SQL and Python
- Develop agile ETL/ELT pipelines for product experimentation
Data Strategy & Integration (30%)
- Co-lead data acquisition roadmap and migration to Azure Fabric
- Ensure seamless, compliant data integration with Tech & Engineering
- Identify and resolve gaps in analytics-ready data availability
Tooling & Infrastructure (10%)
- Design modern data tooling with Enterprise Data and Cloud Ops
- Build cases for enhanced data products to improve efficiency
- Own and optimize real-time data pipelines for marketing and communications

🎯 Qualifications
- Bachelor’s or Master’s in Computer Science, Data Science, Engineering, or related field
- 8+ years experience in BI, analytics, or data engineering
- Proven success scaling data pipelines and real-time analytics in Azure
- Strong cross-functional leadership across Product, Marketing, and Engineering
- Advanced SQL expertise and data modeling proficiency

💻 Technical Expertise
- Python or Scala for distributed systems and data workflows
- Scalable ETL/ELT pipeline design and API development
- Hands-on experience with:
- Azure tools (Data Factory, Power BI, ML)
- Snowflake, BigQuery, Redshift
- Spark, Hadoop, Airflow, dbt, Fivetran
- RESTful APIs and real-time messaging (Kafka, RabbitMQ, SQS)
- Advanced SQL techniques for large dataset manipulation
- Interactive data visualization using Power BI, Tableau, or web frameworks
- JavaScript for dashboard customization and API integration
`,
    requirements: '',
    jobCategory: 'Software Engineering',
    jobType: 'Hybrid',
    location: 'Toronto',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/eqbank/e46aa90d-253d-44fc-befd-bf7a56d5900d'
  },
  {
    id: 'Modern-Workplace-Analyst-Intern-in-Toronto-eqbank',
    jobTitle: 'Modern Workplace Analyst - Intern',
    companyName: 'eqbank',
    companyLogo: '/images/eqbank.png',
    mainDescription: `💼 Position: Modern Workplace Analyst – Intern
Location: Toronto, ON (Hybrid)
Department: Information Technology
Type: Internship (Fall Term: Sept 2–Dec 26, 2025)

🏢 About Equitable Bank
Equitable Bank—Canada’s Challenger Bank™—is transforming the banking experience. With over 670,000 customers, $125B+ in assets under management, and award-winning digital services through EQ Bank, we’re reshaping how Canadians manage their money. If you're curious, forward-thinking, and eager to help redefine what's possible, you'll thrive here.

🚀 Internship Overview
As a Modern Workplace Analyst Intern, you’ll support endpoint management across the bank’s laptops, mobile devices, and cloud environments. You'll work to enhance user experiences, streamline service delivery, and participate in shaping digital workspace policies. Expect hands-on collaboration and plenty of opportunities to grow.

🔧 Key Responsibilities
- Configure and manage physical endpoints using Microsoft Intune and Autopilot
- Support and monitor Nerdio workspaces and auto-scaling functions
- Assist in managing the Azure Virtual Desktop (AVD) environment
- Deploy updates and maintain endpoint compliance
- Build co-managed Windows 11 environments
- Collaborate with the Cyber Defense Centre on policy and security settings
- Troubleshoot Intune and Group Policy configurations
- Participate in tabletop exercises and vulnerability remediation
- Maintain usage and cost reports for Azure environments
- Automate tasks using ITSM tools, scripting, or workflows
- Test hardware/software rollouts under change management protocols

🎯 What You Bring
- Enrollment in post-secondary studies in IT or related field
- Foundational knowledge of AVD, Azure, Enterprise Mobility, and Microsoft 365
- Familiarity with Windows OS, MS Office, Intune, and CIS hardening techniques
- Understanding of ITIL v4 and asset management systems
- PowerShell scripting and problem management skills are a plus
- Strong communication and ability to work independently

📋 Application Requirements
- You must be a current student returning to school
- Submit a resume, cover letter, and unofficial transcript

🌟 Why EQ Bank
- Be part of one of Canada’s top-ranked digital banks
- Work in a collaborative, agile, and inclusive culture
- Access mentorship and hands-on experience
- Contribute to meaningful projects in tech-enabled banking
- Receive support for personal and professional growth
`,
    requirements: '',
    jobCategory: 'Analyst',
    jobType: 'Internship',
    location: 'Toronto',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/eqbank/d8d1c9a8-3d33-4204-8562-ab58ff865a8a'
  },
  {applyUrl: 'https://jobs.lever.co/saviynt/dba5ae2f-811f-4acd-9789-961be24ec5cd', companyName: 'saviynt', companyLogo: '/images/saviynt.png', location: 'Warsaw or Kraków, Poland', jobTitle: 'Identity Security - Practice Manager -Customer Experience - Poland', jobType: 'Full-time', jobCategory: 'Security', mainDescription: `💼 Job Title: Identity Security – Practice Manager, Customer Experience
Location: Warsaw or Kraków, Poland (Remote)
Department: Expert Services – Professional Services
Employment Type: Full-Time

🏢 About Saviynt
Saviynt is the leading identity authority platform enabling secure, scalable digital transformation. Our Enterprise Identity Cloud provides unmatched visibility and governance across identity, access, and security, empowering organizations to manage cyber risk while ensuring seamless user access.

🚀 Role Overview
As Practice Manager – Customer Experience, you’ll lead the technical delivery and account management of identity solutions for Saviynt clients. You will manage project lifecycles, support pre- and post-sales efforts, and serve as the central point of contact for escalations. This role combines strategic oversight, client engagement, and technical expertise to ensure successful deployment and adoption of Saviynt’s platform.

🔧 Key Responsibilities
- Provide expert technical support throughout pre-sales and post-sales cycles
- Analyze customer requirements and deliver tailored solution proposals
- Own delivery execution for solution scope (SOW), manage implementation schedules
- Develop scoping documents, estimates, and project plans
- Lead weekly customer progress meetings and maintain technical documentation
- Manage professional services delivery and resolve escalated issues
- Coordinate with cross-functional teams: Engineering, Product Management, and Customer Success
- Monitor support trends to enhance service quality and cost-efficiency
- Oversee post-launch user training, feature adoption, and customer success initiatives
- Communicate product roadmap and identify upsell opportunities
- Forecast resource needs, manage timesheet approvals, and support invoicing

🎯 Required Qualifications
- Minimum 5+ years in IAM (Identity and Access Management) or IGA (Identity Governance & Administration)
- Strong background in cybersecurity or compliance is a plus
- Proven success leading project scoping, planning, and delivery for client solutions
- Experience managing multiple client projects and engaging with cross-functional teams
- Skilled in technical documentation, client communications, and resource planning
- Familiarity with relevant technologies:
- Web technologies: XML, SPML/SOAP, HTML
- Databases: Oracle, Sybase, MSSQL, MySQL
- Directories: LDAP, Active Directory
- HR platforms: SAP, PeopleSoft
- Programming: Java, .NET, or C++
- IAM provisioning systems: Oracle, IBM, Novell, Sun
- Security or IT audit experience
📍 Note: Only candidates residing in Poland are eligible for this role.

🔐 Compliance Requirements
Upon joining, you must complete security & privacy training and review policies such as:
- Data Classification & Retention
- Incident Response & Business Continuity
- Access Control & Personnel Security
- Mobile Device & Account Management
- General Privacy Protocols

🌈 Why Work With Us
- High-growth, dynamic tech environment
- Critical impact on customer success and platform expansion
- Challenging, rewarding work with global enterprise customers
- Commitment to inclusion and diversity
Saviynt is proud to be an equal opportunity employer. Applicants from all backgrounds are encouraged to apply.
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'identity-security-practice-manager-customer-experience-poland-in-saviynt-foster-city-anywhere'},

{applyUrl: 'https://job-boards.greenhouse.io/donorbox/jobs/4582083005', companyName: 'donorbox', companyLogo: '/images/donorbox.png', location: 'Canada', jobTitle: 'Senior Business Intelligence Analyst', jobType: 'Full-time', jobCategory: 'Business', mainDescription: `💼 Job Title: Senior Business Intelligence Analyst
Location: Remote (Canada)
Department: Data – Focus on Sales & Marketing Analytics
Employment Type: Full-Time

🏢 About Donorbox
Donorbox is a top-rated fundraising and donor management platform helping nonprofits worldwide raise nearly $3 billion since 2014. Trusted by over 100,000 organizations, Donorbox empowers mission-driven teams with powerful tools for donor engagement, impact tracking, and financial growth.
We are a fully distributed and diverse company of 150+ team members across more than 23 countries. Profitable, bootstrapped, and fast-growing—we’re on a mission to make fundraising frictionless.

🚀 Role Overview
Donorbox is seeking a data-savvy Senior Business Intelligence Analyst with a sharp focus on GTM (Go-To-Market) analytics to support Sales, Marketing, and Revenue Operations. In this strategic individual contributor role, you’ll develop dashboards, evaluate experiments, and provide insights that inform customer acquisition, engagement, and retention decisions.

🔧 Key Responsibilities
- Build and maintain dashboards tracking GTM KPIs (conversion rates, CAC, LTV, retention)
- Analyze campaign ROI, channel performance, and lead quality across marketing efforts
- Evaluate sales pipeline health, forecasting accuracy, and rep effectiveness
- Partner cross-functionally to design and assess A/B experiments
- Support customer journey mapping, audience segmentation, and attribution analysis
- Conduct pricing impact assessments including elasticity modeling
- Collaborate with data engineering to ensure data integrity and trust
- Use BI tools (Power BI, Tableau, Superset) to deliver user-friendly visualizations
- Write advanced SQL queries to manipulate large datasets
- Translate analytical findings into clear, actionable insights for non-technical stakeholders

🎯 What You Bring
- 5+ years of analytics experience in SaaS (Sales, Marketing, or Revenue Ops)
- Advanced SQL skills; confident working with large data sets
- Strong BI tool proficiency (Looker, Tableau, Superset, Power BI)
- Experience with CRM platforms like Salesforce or HubSpot
- Deep understanding of data modeling, warehousing, and visualization best practices
- Ability to communicate insights that influence strategic decision-making
- Proven record of tying metrics to tangible business outcomes (growth, retention, ROI)
- Comfortable with autonomy, shifting priorities, and a fast-paced remote work culture

🌟 Bonus Experience
- Prior exposure to nonprofit data or fundraising analytics

💰 Compensation & Perks
- Salary: $70,000–$75,000 USD (~$95,000–$102,000 CAD)
- Remote-first work across Canada (ET hours)
- Employee equity plan eligibility (stock options)
- Generous paid time off (21 personal days + 9 holidays + 2 volunteer days)
- Employer-sponsored health insurance
- Reimbursement allowance for professional development & home office setup (up to $1,500)
- Mindfulness and wellness programs

📋 Application Process
- Online Application & Questionnaire
- Prescreen Call
- Interview with Hiring Manager
- Technical Assessment
- Panel Interview
- Reference & Background Checks`, status: 'approved', isFeatured: true, requirements: ''
, submittedDate: new Date().toISOString(), id: 'senior-business-intelligence-analyst-in-donorbox-canada-canada'}, 

{applyUrl: 'https://jobs.lever.co/wpromote/e6ae726b-c871-4a6a-92a2-6b51297f9645', companyName: 'wpromote', companyLogo: '/images/wpromote.png', location: 'United States', jobTitle: 'Engineering Manager - Data Pipelines', jobType: 'Full-time', jobCategory: 'Data', mainDescription:`💼 Job Title: Engineering Manager – Data Pipelines
Location: Remote (United States)
Department: Engineering & Technology
Employment Type: Full-Time

🏢 About Wpromote
Wpromote is a digital marketing leader known for our rapid growth, inclusive culture, and innovative solutions. Our proprietary data and intelligence platform, Polaris, empowers marketers and clients through performance insights and collaborative tools. We're proud to be recognized by Ad Age, Adweek, and Glassdoor as a Best Place to Work—and we’re just getting started.

🚀 Role Overview
We're hiring a strategic and technically savvy Engineering Manager to lead our data pipeline team. In this hands-on leadership role, you’ll guide the development of scalable data integrations and analytics systems that drive Wpromote’s customer applications and internal data strategies. You’ll architect forward-thinking solutions, foster team excellence, and collaborate cross-functionally to accelerate product innovation.

🔧 Key Responsibilities
- Lead and mentor backend and data engineers managing large-scale data ingestion and delivery
- Shape technical roadmap and strategic direction for data pipeline systems
- Build robust architectures supporting fast, resilient integration with third-party services
- Collaborate with Product, UX, and other departments to align objectives and deliver impactful results
- Foster an inclusive, agile culture with a strong emphasis on test-driven development, CI/CD, and engineering best practices
- Champion metrics-based performance monitoring and continuous improvement
- Own key engineering projects with tangible business impact

🧠 Required Qualifications
- 10+ years in software development; 3+ years in engineering leadership
- Expertise in Python or comparable backend language, SQL, and API frameworks
- Experience integrating external platforms like Google and Meta via APIs
- Hands-on exposure to cloud platforms and containerized architectures
- Proven success in data-intensive SaaS environments and fast-paced dev cycles
- Skilled in observability, scalability, and performance optimization
- Effective communicator and decision-maker in technical and business contexts

🌟 Bonus Experience
- Familiarity with: GCP, Airflow, dbt, Spark, PostgreSQL, BigQuery, Iceberg
- Experience expanding engineering teams
- Background in agile delivery and data governance
- Proficiency in monitoring tools like Prometheus, Datadog, Grafana

💰 Compensation & Perks
- Base Salary: $165,000 – $185,000 USD
- Benefits include:
- Unlimited PTO & Extended Winter Break
- Fully remote with flexible hours and “work from anywhere” options
- Paid parental leave
- Comprehensive health, life, pet & disability insurance
- 401(k) match
- Annual ClassPass credits
- Career growth and learning opportunities
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'engineering-manager-data-pipelines-in-wpromote-united-states-united-states'},
{applyUrl: 'https://jobs.lever.co/veeva/fbf0253a-999d-495d-8206-fae684149a8d', companyName: 'veeva', companyLogo: '/images/veeva.png', location: 'Indiana', jobTitle: 'Software Engineer - iOS', jobType: 'Full-time', jobCategory: 'Software Engineer', mainDescription: `💼 Job Title: Software Engineer – iOS
Location: Remote (United States – Indiana Preferred)
Department: Engineering
Employment Type: Full-Time

🏢 About Veeva Systems
Veeva Systems is a mission-driven industry cloud company dedicated to helping life sciences organizations deliver therapies to patients faster. With more than $2B in annual revenue and a fast-growing global footprint, Veeva is transforming how pharma companies engage with healthcare professionals.
Veeva is a Public Benefit Corporation, balancing purpose and profit by prioritizing customer success, employee well-being, societal impact, and shareholder value. Through its Work Anywhere model, Veeva empowers team members to work remotely or from an office—wherever they thrive.

🚀 Role Overview
Join Veeva’s iOS engineering team to build robust, enterprise-grade mobile applications that enable pharmaceutical companies to streamline engagement with healthcare providers worldwide. You’ll contribute to large-scale feature development, innovate alongside experienced engineers and product managers, and deliver polished, high-impact mobile experiences.

🔧 Key Responsibilities
- Design and implement complex iOS features using Core Data, SQLite, and UIKit
- Translate technical designs into resilient, scalable code
- Maintain high standards for performance tuning and resource optimization
- Write and maintain unit tests to ensure feature reliability
- Own feature delivery and contribute throughout the full development lifecycle
- Collaborate cross-functionally with Product Managers and fellow Engineers
- Evaluate and introduce emerging iOS technologies for architectural review

🎯 Required Qualifications
- 5+ years of experience developing iOS applications
- Proficiency in Swift and Objective-C
- Strong object-oriented programming foundation
- Skilled with Apple frameworks (Core Data, SQLite, UIKit)
- Familiarity with high-level software design principles
- Knowledge of Apple’s UI guidelines and interface standards
- Experience optimizing performance and managing resources in mobile environments
- Excellent communication and problem-solving skills

💰 Compensation & Benefits
- Base Salary Range: $85,000–$225,000 (based on experience and location)
- Additional benefits may include:
- Variable bonus
- Stock bonus
- Comprehensive benefits package:
- Medical, dental, vision, and life insurance
- Flexible PTO & company holidays
- Retirement programs
- Charitable giving match (1%)
`, status: 'approved', isFeatured: true, requirements: '', submittedDate: new Date().toISOString(), id: 'software-engineer-ios-in-veeva-indiana-united-states'}, 
];

const fetchAllJobs = async (): Promise<BackendStoredJob[]> => {
    const allDbJobs = await getAllJobs().catch(() => []);
    const allJobsMap = new Map<string, BackendStoredJob>();
    mockJobsData.forEach(job => allJobsMap.set(job.id, job));
    allDbJobs.forEach(job => allJobsMap.set(job.id, job));
    return Array.from(allJobsMap.values());
};

// This function generates dynamic metadata for each job page
export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const jobId = params.id;
  const allJobs = await fetchAllJobs();
  const job = allJobs.find(j => j.id === jobId);

  if (!job) {
    return {
      title: 'Job Not Found | TekTunnel',
      description: 'The job you are looking for could not be found.',
    };
  }

  const description = `Apply for the ${job.jobTitle} position at ${job.companyName} in ${job.location}. ${job.mainDescription.substring(0, 120)}...`;

  return {
    title: `${job.jobTitle} at ${job.companyName} | TekTunnel`,
    description: description,
    openGraph: {
      title: `${job.jobTitle} at ${job.companyName}`,
      description: description,
    },
  };
}

const extractTagsFromText = (text: string): string[] => {
    const keywords = ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Node.js', 'UI/UX Design', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Jest', 'Webpack', 'Python', 'Django', 'Flask', 'Docker', 'AWS', 'GCP', 'Azure', 'PostgreSQL', 'REST APIs', 'Celery', 'Kubernetes', 'Terraform', 'CI/CD', 'Jenkins', 'Linux', 'Ansible', 'Docker Swarm', 'Prometheus', 'Grafana', 'Figma', 'Sketch', 'Adobe XD', 'SQL', 'R', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Spark', 'Go', 'Security+', 'CEH', 'SIEM', 'React Native', 'Java', 'Kafka'];
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


export default async function JobDetailPage({ params }: { params: { id: string } }) {
  const jobId = params.id;
  const allJobs = await fetchAllJobs();
  const targetJobData = allJobs.find(j => j.id === jobId);

  let job: Job | null = null;
  let relatedJobs: Job[] = [];
  let error: string | null = null;

  if (targetJobData && targetJobData.status === 'approved') {
    let salaryRange: string | undefined = undefined;
    if (targetJobData.salaryMin && targetJobData.salaryMax) {
      salaryRange = `$${Math.round(targetJobData.salaryMin / 1000)}k - $${Math.round(targetJobData.salaryMax / 1000)}k`;
    } else if (targetJobData.salaryMin) {
      salaryRange = `From $${Math.round(targetJobData.salaryMin / 1000)}k`;
    }
    
    const combinedTextForTags = `${targetJobData.jobTitle} ${targetJobData.mainDescription} ${targetJobData.requirements}`;
    
    job = {
      id: targetJobData.id,
      title: targetJobData.jobTitle,
      companyName: targetJobData.companyName,
      location: targetJobData.location,
      jobType: targetJobData.jobType,
      category: targetJobData.jobCategory,
      descriptionExcerpt: targetJobData.mainDescription,
      postedDate: targetJobData.submittedDate,
      salaryRange,
      companyLogo: targetJobData.companyLogo || 'https://placehold.co/100x100.png',
      imageHint: 'company logo large generic',
      tags: extractTagsFromText(combinedTextForTags),
      applyUrl: targetJobData.applyUrl,
    };

    const relatedJobsData = allJobs
      .filter(j => j.jobCategory === targetJobData.jobCategory && j.id !== targetJobData.id && j.status === 'approved')
      .slice(0, 3)
      .map(j => ({
          id: j.id,
          title: j.jobTitle,
          companyName: j.companyName,
          location: j.location,
          jobType: j.jobType,
          descriptionExcerpt: j.mainDescription.substring(0, 100) + '...',
          postedDate: j.submittedDate,
          companyLogo: j.companyLogo
      }));
    relatedJobs = relatedJobsData as Job[];
  } else {
    error = 'Job not found or is no longer available.';
  }
  
  return (
    <JobDetailPageContent
      jobId={jobId}
      initialJob={job}
      initialRelatedJobs={relatedJobs}
      initialError={error}
    />
  );
}
