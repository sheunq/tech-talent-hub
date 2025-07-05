
import type { Metadata, ResolvingMetadata } from 'next';
import { JobDetailPageContent } from '@/components/jobs/JobDetailPageContent';
import type { Job } from '@/components/jobs/JobCard';
import type { BackendStoredJob } from '@/lib/schemas/job';
import { getAllJobs } from '@/services/jobDbService';

// Mock data to be used if the database is empty or a specific mock job is requested
const mockJobsData: BackendStoredJob[] = [


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
