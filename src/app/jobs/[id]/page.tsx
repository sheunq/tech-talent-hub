
import type { Metadata, ResolvingMetadata } from 'next';
import { JobDetailPageContent } from '@/components/jobs/JobDetailPageContent';
import type { Job } from '@/components/jobs/JobCard';
import type { BackendStoredJob } from '@/lib/schemas/job';
import { getAllJobs } from '@/services/jobDbService';

// Mock data to be used if the database is empty or a specific mock job is requested
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
    applyUrl: 'https://www.mirakl.com/careers/5576621004'
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
    experienceLevel: 'Entry-level',
    
    jobType: 'Full-time',
    location: 'Foster City',
    submittedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/zoox/cf049a4a-491e-45c3-bed7-1e8a45dac2bc'
  },
 {
    id: 'mock-pm-1',
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
    experienceLevel: 'Senior-level',
    jobType: 'Full-time',
    location: 'Foster City',
    applicationDeadline: new Date('2024-11-30'),
    submittedDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/zoox/f84bcac3-d36a-4526-a14d-68e4f4618c42'
  },
   {
    id: 'mock-cy-1',
    jobTitle: 'Senior/Staff Systems Engineer - Autonomy System Performance',
    companyName: 'zoox',
    companyLogo: '/images/zoox.png',
    mainDescription: 'Monitor our systems for security threats, analyze and respond to incidents, and help improve our overall security posture. This is a critical role in protecting our customer data.',
    requirements: `💼 Job Title: Senior/Staff Systems Engineer – Autonomy System Performance
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
    jobCategory: 'Engineer',
    experienceLevel: 'Mid-level',
    jobType: 'Full-time',
    location: 'Foster City',
    submittedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/zoox/fca1320c-c37a-416a-94fd-8b5c1c9b74da'
  },
  {
    id: 'mock-mo-1',
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
    experienceLevel: 'Mid-level',
    jobType: 'Full-time',
    location: 'London',
    submittedDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://job-boards.greenhouse.io/monzo/jobs/6900159'
  },
  {
    id: '7',
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
    experienceLevel: 'Senior-level',
    jobType: 'Hybrid',
    location: 'Germany',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://job-boards.greenhouse.io/grammarly/jobs/7007380'
  },
  {
  id: '8',
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
    experienceLevel: 'Senior-level',
    jobType: 'Full-time',
    location: 'France',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://www.mirakl.com/careers/5580100004'
  },
  {
    id: '9',
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
    experienceLevel: 'Lead',
    jobType: 'Contract',
    location: 'France',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://www.mirakl.com/careers/5580099004'
  },
  {
    id: '10',
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
    experienceLevel: 'Lead',
    jobType: 'Hybrid',
    location: 'Ireland',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://job-boards.greenhouse.io/monzo/jobs/6999634'
  },

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
