
import { Suspense } from 'react';
import { getAllJobs } from '@/services/jobDbService';
import type { BackendStoredJob } from '@/lib/schemas/job';
import { JobSearchPageContent } from '@/components/jobs/JobSearchPageContent';
import { Loader2 } from 'lucide-react';

// Mock data to be used if the database is empty or fetching fails on the server.
const mockJobsData: BackendStoredJob[] = [
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
    id: 'Senior Frontend Engineer-in-Berlin-Germany-Grammarly',
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
    experienceLevel: 'Lead',
    jobType: 'Hybrid',
    location: 'Foster City',
    submittedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: true,
    applyUrl: 'https://jobs.lever.co/zoox/8b62411a-6d3a-4e3e-a9fd-158030eb82ec'
  },
  {
    id: 'Platform Engineer-in-Foster-City-zoox',
    jobTitle: 'Platform Engineer',
    companyName: 'zoox',
    companyLogo: '/images/zoox.png',
    mainDescription: 'Leverage data to drive business decisions. You will develop machine learning models, conduct statistical analysis, and present findings to stakeholders.',
    requirements: `💼 Job Title: Platform Engineer
Location: Foster City, CA (Hybrid)
Department: Embedded Software & Systems Integration – Systems Reliability and Stability
Type: Full-Time

🏢 About Zoox
Zoox is pioneering a ground-up autonomous mobility solution for urban environments, combining robotics, AI, and innovative design. We're developing a fully autonomous robotaxi fleet and the ecosystem needed to bring it safely to market.

🚀 Role Summary
Zoox is seeking a motivated and self-starting Platform Engineer to support and maintain mission-critical services in our Hardware-In-the-Loop (HIL) testing environment. You’ll be instrumental in improving uptime, reliability, and usability across test platforms that validate on-vehicle autonomous software systems.

🔧 Key Responsibilities
- Monitor and enhance the availability of engineering services essential to testing and validation
- Drive full lifecycle ownership of services—from architecture to rollout, automation, and iterative improvement
- Operate high-throughput data pipelines and manage compute-intensive systems involving CPUs and GPUs
- Collaborate across teams to ensure stability and efficiency of the robot testing infrastructure

🎯 Required Qualifications
- Bachelor's degree in Engineering, Computer Science, Math, or related field
- 5+ years supporting production-grade services, SRE tasks, and on-call rotations
- Proficiency in Python or Golang
- Hands-on experience with infrastructure resilience, CI/CD automation, and observability tooling (e.g., Grafana, open-telemetry)
- Solid Linux system administration experience including kernel troubleshooting and driver development

🌟 Bonus Skills
- Full-stack backend development and API ownership
- Familiarity with CI pipelines (Bamboo, Bazel) and test frameworks like Pytest
- Experience with Infrastructure as Code (Terraform, Ansible, SaltStack)

💰 Compensation & Benefits
- Base Salary Range: $135,000 – $175,000 (varies by location and experience)
- Additional components may include:
- Amazon RSUs
- Zoox Stock Appreciation Rights
- Potential sign-on bonus
- Comprehensive benefits package:
- Health, disability, and life insurance
- Paid and unpaid time off
- Long-term care coverage

🌈 Inclusion & Accommodations
Zoox is committed to building a diverse, inclusive workforce. You’re encouraged to apply even if your background doesn't match every requirement. Accommodations are available upon request for applicants in the hiring process.
`,
    jobCategory: 'Engineer',
    experienceLevel: 'Mid-level',
    jobType: 'Hybrid',
    location: 'Foster City',
    submittedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/zoox/b672e3cc-8e42-486c-b18f-67069406ff37'
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
    experienceLevel: 'Entry-level',
    
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
    id: 'Senior-Staff-Systems-Engineer-Autonomy-System-Performance-in-Foster-City-zoox',
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
    experienceLevel: 'Mid-level',
    jobType: 'Full-time',
    location: 'London',
    submittedDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://job-boards.greenhouse.io/monzo/jobs/6900159'
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
    experienceLevel: 'Senior-level',
    jobType: 'Full-time',
    location: 'France',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://www.mirakl.com/careers/5580100004'
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
    experienceLevel: 'Senior-level',
    jobType: 'Hybrid',
    location: 'Germany',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://job-boards.greenhouse.io/grammarly/jobs/7007380'
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
    experienceLevel: 'Lead',
    jobType: 'Hybrid',
    location: 'Ireland',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://job-boards.greenhouse.io/monzo/jobs/6999634'
  },

   {
    id: 'Senior-Embedded-Software-Engineer-Embedded-Linux C++-in-Foster-City-zoox',
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
    experienceLevel: 'Lead',
    jobType: 'Full-time',
    location: 'Foster City',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/zoox/220a58f7-0ac3-4367-be04-8d5eca89f9ad'
  },
  {
    id: 'Senior-Manager-Data-Enablement-&-Business-Intelligence-in-Toronto-eqbank',
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
    jobCategory: 'Business',
    experienceLevel: 'Lead',
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
    experienceLevel: 'Lead',
    jobType: 'Internship',
    location: 'Toronto',
    submittedDate: new Date().toISOString(),
    status: 'approved',
    isFeatured: false,
    applyUrl: 'https://jobs.lever.co/eqbank/d8d1c9a8-3d33-4204-8562-ab58ff865a8a'
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
