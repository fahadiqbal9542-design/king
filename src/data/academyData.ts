import { Program, NewsItem, CampusEvent, Testimonial, FacultyMember, FAQItem } from '../types';

export const ACADEMY_PROGRAMS: Program[] = [
  {
    id: 'prog-swe',
    name: 'Software Engineering',
    slug: 'software-engineering',
    category: 'engineering',
    shortDesc: 'Master modern full-stack web architectures, distributed systems, TypeScript, React, and Node.js.',
    description: 'An intensive, hands-on immersive curriculum designed with engineering directors from Fortune 500 tech companies. Students learn computer science fundamentals, modern web frameworks, cloud deployment, and system design through production-grade projects.',
    duration: '24 Weeks (Full-time) / 36 Weeks (Flex)',
    schedule: 'Mon - Fri, 9:00 AM - 5:00 PM EST',
    level: 'Beginner to Intermediate',
    tuition: '$14,500',
    nextCohort: 'October 12, 2026',
    skills: ['TypeScript', 'React 19', 'Node.js', 'Next.js', 'PostgreSQL', 'Docker', 'GraphQL', 'System Design'],
    curriculum: [
      { module: 'Module 1: Modern JavaScript & CS Foundations', weeks: 'Weeks 1-6', topics: ['Algorithms & Data Structures', 'ES6+ Deep Dive', 'Async Programming', 'Object-Oriented & Functional Paradigms'] },
      { module: 'Module 2: Frontend Engineering at Scale', weeks: 'Weeks 7-12', topics: ['React Ecosystem', 'State Machines & Zustand', 'Tailwind & Design Systems', 'Testing with Vitest & Playwright'] },
      { module: 'Module 3: Server Architecture & Databases', weeks: 'Weeks 13-18', topics: ['Express & Fastify', 'Relational & NoSQL Modeling', 'Redis Caching', 'Authentication & OAuth2'] },
      { module: 'Module 4: DevOps & Production Capstone', weeks: 'Weeks 19-24', topics: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Cloud Deployment (AWS/GCP)', 'End-to-End Enterprise Project'] }
    ],
    careerRoles: ['Full-Stack Engineer', 'Frontend Specialist', 'Backend Developer', 'Solutions Architect'],
    avgSalary: '$98,500'
  },
  {
    id: 'prog-ds',
    name: 'Data Science & AI Engineering',
    slug: 'data-science',
    category: 'data',
    shortDesc: 'Harness predictive machine learning, deep learning models, LLM orchestration, and modern data pipelines.',
    description: 'Build industrial machine learning systems, statistical modeling pipelines, and generative AI agents. You will work with real petabyte-scale datasets and deploy production models on distributed cloud environments.',
    duration: '24 Weeks (Full-time) / 36 Weeks (Flex)',
    schedule: 'Mon - Fri, 9:30 AM - 5:30 PM EST',
    level: 'Intermediate',
    tuition: '$15,200',
    nextCohort: 'October 19, 2026',
    skills: ['Python 3.12', 'PyTorch', 'Pandas & NumPy', 'SQL / Snowflake', 'MLOps', 'Vector Databases', 'LangChain', 'Scikit-learn'],
    curriculum: [
      { module: 'Module 1: Advanced Statistical Analysis & Python', weeks: 'Weeks 1-6', topics: ['Probability Distributions', 'Linear Algebra for ML', 'Exploratory Data Analysis', 'Pandas Vectorization'] },
      { module: 'Module 2: Machine Learning Systems', weeks: 'Weeks 7-12', topics: ['Supervised & Unsupervised Learning', 'Ensemble Trees & XGBoost', 'Model Evaluation & Bias Audits', 'Feature Engineering'] },
      { module: 'Module 3: Deep Learning & Neural Networks', weeks: 'Weeks 13-18', topics: ['PyTorch Foundations', 'Convolutional & Recurrent Nets', 'Transformer Architectures', 'Vector Embeddings'] },
      { module: 'Module 4: Production AI & MLOps Capstone', weeks: 'Weeks 19-24', topics: ['MLflow & Model Registry', 'FastAPI Inference Endpoints', 'LLM Fine-tuning & RAG', 'Capstone Showcase'] }
    ],
    careerRoles: ['Data Scientist', 'Machine Learning Engineer', 'AI Solutions Developer', 'Data Analytics Lead'],
    avgSalary: '$108,000'
  },
  {
    id: 'prog-design',
    name: 'Digital Design & UI/UX',
    slug: 'digital-design',
    category: 'design',
    shortDesc: 'Craft user research-driven experiences, interactive design systems, responsive interfaces, and accessible design.',
    description: 'Bridge the critical gap between visual aesthetics and software usability. Master design research, information architecture, rapid micro-prototyping in Figma, and front-of-the-frontend implementation with HTML/CSS and animation tokens.',
    duration: '20 Weeks (Full-time) / 30 Weeks (Flex)',
    schedule: 'Mon - Fri, 10:00 AM - 4:30 PM EST',
    level: 'Beginner to Advanced',
    tuition: '$13,800',
    nextCohort: 'October 26, 2026',
    skills: ['Figma Masterclass', 'Design Systems', 'User Research & Testing', 'Design Tokens', 'Micro-interactions', 'WCAG Accessibility', 'Framer / Prototyping'],
    curriculum: [
      { module: 'Module 1: UX Research & Human-Centered Design', weeks: 'Weeks 1-5', topics: ['User Interviews & Personas', 'Information Architecture', 'Journey Mapping', 'Usability Audits'] },
      { module: 'Module 2: Visual Interface & System Design', weeks: 'Weeks 6-10', topics: ['Typography & Color Science', 'Figma Auto-Layout & Variables', 'Multi-Brand Design Tokens', 'Atomic Design Methodology'] },
      { module: 'Module 3: Interaction & Motion Prototyping', weeks: 'Weeks 11-15', topics: ['High-Fidelity Wireframing', 'Interactive Component Logic', 'Micro-Interactions', 'Accessibility (WCAG 2.2 AA)'] },
      { module: 'Module 4: Product Strategy & Portfolio Launch', weeks: 'Weeks 16-20', topics: ['Design Handoff to Engineers', 'Design System Documentation', 'Live Client Capstone', 'Portfolio Review with Tech Leads'] }
    ],
    careerRoles: ['Product Designer', 'UI/UX Specialist', 'Design Systems Engineer', 'User Experience Researcher'],
    avgSalary: '$92,000'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Expert Faculty',
    tagline: 'Taught by staff engineers and tech leaders',
    description: 'Learn directly from veteran architects and engineering leads formerly at Google, Microsoft, and Stripe who teach the real engineering standards of top tech teams.'
  },
  {
    title: 'Cutting-Edge Tech',
    tagline: 'Modern labs & industry toolchains',
    description: 'Train with actual enterprise toolchains, distributed cloud infrastructure, GPU compute clusters, and private dev environments mirroring real production setups.'
  },
  {
    title: 'Career Success',
    tagline: 'Dedicated 1-on-1 career coaching',
    description: 'Over 94% of job-seeking graduates secure high-impact roles within 180 days, supported by our nationwide network of 450+ hiring employer partners.'
  }
];

export const KEY_STATS = [
  { value: '94.8%', label: 'Graduate Placement Rate', subtext: 'Within 180 days of completion' },
  { value: '$96,400', label: 'Average Starting Salary', subtext: 'Across all cohorts' },
  { value: '450+', label: 'Hiring Partners', subtext: 'From fast-growth startups to Fortune 500s' },
  { value: '1:8', label: 'Student-to-Faculty Ratio', subtext: 'Intimate coaching and code reviews' }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    name: 'Dr. Sarah Al-Mansoor',
    role: 'Dean of Software Engineering',
    specialty: 'Distributed Systems & Cloud Architecture',
    priorCompany: 'Former Principal Architect at AWS',
    experience: '16+ years in systems engineering'
  },
  {
    name: 'Marcus Vance',
    role: 'Head of Data Science & AI',
    specialty: 'Deep Learning & Transformer Models',
    priorCompany: 'Former Staff ML Researcher at Meta AI',
    experience: '12+ years in predictive intelligence'
  },
  {
    name: 'Elena Rostova',
    role: 'Director of Product Design',
    specialty: 'Design Systems & Behavioral UX',
    priorCompany: 'Former Head of Design at Stripe Billing',
    experience: '14+ years in digital product craft'
  },
  {
    name: 'David Chen',
    role: 'Lead Full-Stack Instructor',
    specialty: 'TypeScript Ecosystem & Microservices',
    priorCompany: 'Senior Staff Engineer at GitHub',
    experience: '10+ years in web infrastructure'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Jessica Tran',
    role: 'Senior Software Engineer',
    company: 'Spotify',
    program: 'Software Engineering',
    gradYear: 'Class of 2025',
    quote: 'Web Developer Academy transformed my understanding of software. I moved from building disjointed tutorials to shipping production microservices with confidence. The mentorship is unmatched.',
    salaryIncrease: '+140% salary leap',
    avatar: 'JT'
  },
  {
    id: 'test-2',
    name: 'Omar Farooq',
    role: 'ML Platform Engineer',
    company: 'Databricks',
    program: 'Data Science & AI',
    gradYear: 'Class of 2025',
    quote: 'The depth of the curriculum was incredible. We were training neural architectures and deploying Kubernetes inference services from day one. I had 3 competing offers before graduating.',
    salaryIncrease: 'Starting offer $125k',
    avatar: 'OF'
  },
  {
    id: 'test-3',
    name: 'Clara Beaumont',
    role: 'Product Designer',
    company: 'Linear',
    program: 'Digital Design & UI/UX',
    gradYear: 'Class of 2024',
    quote: 'The focus on design systems and code-level constraints made all the difference. In my interviews, tech leads were shocked by how thoroughly I could communicate design tokens and engineering handoffs.',
    salaryIncrease: 'Doubled pre-academy income',
    avatar: 'CB'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Academy Unveils 2026 AI Innovation Lab with 64 High-Performance Workstations',
    category: 'Campus Facilities',
    date: 'September 18, 2026',
    readTime: '3 min read',
    summary: 'A new 8,000 sq ft computing facility featuring dedicated GPU workstations, collaboration pods, and immersive streaming gear opens for fall cohorts.',
    author: 'Academy Communications'
  },
  {
    id: 'news-2',
    title: '94.8% Placement Rate Confirmed in 2025-2026 Independent Career Audit Report',
    category: 'Career Outcomes',
    date: 'August 29, 2026',
    readTime: '4 min read',
    summary: 'Third-party auditor CIRR certifies record employment metrics for Web Developer Academy graduates across nationwide engineering roles.',
    author: 'Office of Career Services'
  },
  {
    id: 'news-3',
    title: 'Annual Hackathon "HackDev 2026" Gathers 60 Teams Building Real-World Web Apps',
    category: 'Student Life',
    date: 'August 14, 2026',
    readTime: '5 min read',
    summary: 'Student teams competed over 48 hours with judges from leading tech giants, resulting in four venture-backed prototypes.',
    author: 'Student Association'
  }
];

export const CAMPUS_EVENTS: CampusEvent[] = [
  {
    id: 'evt-1',
    title: 'Campus Open House & Coding Workshop',
    date: 'Saturday, Oct 3, 2026',
    time: '10:00 AM - 1:00 PM EST',
    location: 'Main Auditorium & Live Stream',
    type: 'Open House',
    spotsAvailable: 24
  },
  {
    id: 'evt-2',
    title: 'Building Production AI Agents with Web Frameworks',
    date: 'Wednesday, Oct 7, 2026',
    time: '6:00 PM - 8:00 PM EST',
    location: 'Innovation Hub Lab 4B',
    type: 'Workshop',
    spotsAvailable: 15
  },
  {
    id: 'evt-3',
    title: 'Web Dev Academy Fall Hackathon 2026',
    date: 'Oct 23 - 25, 2026',
    time: 'All Weekend',
    location: 'Campus Center & Arena',
    type: 'Hackathon',
    spotsAvailable: 40
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'Admissions',
    question: 'What are the admission requirements for Web Developer Academy?',
    answer: 'We evaluate applicants on problem-solving ability, dedication, and collaborative mindset rather than prior computer science degrees. Applicants submit an online application, complete a logical thinking assessment, and participate in an admissions interview.'
  },
  {
    category: 'Admissions',
    question: 'Can absolute beginners apply?',
    answer: 'Yes! Our Software Engineering and Digital Design tracks feature comprehensive foundational pre-work modules that guide complete beginners through the basics before immersive instruction begins.'
  },
  {
    category: 'Tuition',
    question: 'What financial aid and payment options are available?',
    answer: 'We offer upfront payment discounts, interest-free monthly installment plans, merit-based scholarships up to $3,000, and recognized educational loan partnerships with deferred repayments until after graduation.'
  },
  {
    category: 'Curriculum',
    question: 'Are classes held in-person or can I attend remotely?',
    answer: 'We offer both options: an on-campus immersive track in our state-of-the-art tech facility, and a synchronous live-online interactive format with identical faculty, pair programming, and career coaching.'
  },
  {
    category: 'Careers',
    question: 'How does career support and job placement assistance work?',
    answer: 'Every student is paired with a dedicated Career Advisor from Week 12. Support includes resume building, technical mock interviews, behavioral prep, salary negotiation coaching, and direct hiring showcase introductions with our 450+ employer partners.'
  }
];
