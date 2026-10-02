import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Palette, 
  Layers, 
  Search, 
  CheckCircle, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'ai' | 'design';
  level: 'Production Ready' | 'Advanced Architecture' | 'Industry Standard';
  proficiency: number;
  highlight: string;
  topics: string[];
  capstoneUse: string;
  popularityBadge?: string;
}

export const SkillsSection: React.FC<{ onApply: () => void }> = ({ onApply }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'backend' | 'cloud' | 'ai' | 'design'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const skillsList: SkillItem[] = [
    {
      id: 'react-next',
      name: 'React 19 & Next.js',
      category: 'frontend',
      level: 'Advanced Architecture',
      proficiency: 96,
      highlight: 'Server Components, Streaming SSR & Client State',
      topics: ['React 19 Hooks & Compiler', 'App Router & Layouts', 'Server Actions', 'Hydration Optimization'],
      capstoneUse: 'High-throughput enterprise portals & SaaS dashboards',
      popularityBadge: 'Top Employer Demand'
    },
    {
      id: 'typescript',
      name: 'TypeScript & ESNext',
      category: 'frontend',
      level: 'Advanced Architecture',
      proficiency: 95,
      highlight: 'Strict Static Typing, Generics & Type Guards',
      topics: ['Utility Types & Discriminated Unions', 'Async/Await & Promises', 'Module Systems', 'Type Inference'],
      capstoneUse: 'End-to-end type safety between frontend and backend APIs',
      popularityBadge: 'Core Foundation'
    },
    {
      id: 'tailwind-css',
      name: 'Tailwind CSS & Design Tokens',
      category: 'frontend',
      level: 'Production Ready',
      proficiency: 94,
      highlight: 'Responsive Mobile-First UI & Micro-interactions',
      topics: ['Tailwind v4 Engine', 'CSS Variables & Themes', 'Grid & Flexbox Mastery', 'Accessible Motion Tokens'],
      capstoneUse: 'Pixel-perfect, ultra-fast interfaces without CSS bloat'
    },
    {
      id: 'nodejs-express',
      name: 'Node.js & Express / Fastify',
      category: 'backend',
      level: 'Production Ready',
      proficiency: 92,
      highlight: 'Asynchronous Event-Driven Microservices',
      topics: ['Non-blocking I/O & Streams', 'JWT & OAuth2 Security', 'Rate Limiting & Middlewares', 'Error Handling Frameworks'],
      capstoneUse: 'Production REST APIs and streaming backend servers'
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL & Relational Data',
      category: 'backend',
      level: 'Advanced Architecture',
      proficiency: 90,
      highlight: 'ACID Transactions, Complex Queries & Indexing',
      topics: ['B-Tree Indexing & Explain Analyze', 'Foreign Key Constraints', 'Connection Pooling', 'JSONB Document Storage'],
      capstoneUse: 'Financial ledger systems & relational data warehousing',
      popularityBadge: '#1 Relational DB'
    },
    {
      id: 'graphql-websockets',
      name: 'GraphQL & WebSockets',
      category: 'backend',
      level: 'Production Ready',
      proficiency: 88,
      highlight: 'Real-time Subscriptions & Schema Stitching',
      topics: ['Apollo Server / Client', 'Bidirectional Socket Communication', 'Resolvers & Data Loaders', 'Real-time Sync'],
      capstoneUse: 'Live collaboration canvas & instant chat applications'
    },
    {
      id: 'python-ai',
      name: 'Python 3.12 & ML Pipelines',
      category: 'ai',
      level: 'Production Ready',
      proficiency: 93,
      highlight: 'Scientific Computing & Predictive Analytics',
      topics: ['NumPy & Vectorized Math', 'Pandas DataFrame Transformations', 'Scikit-Learn Modeling', 'Automated Data ETL'],
      capstoneUse: 'Predictive customer churn & automated classification models',
      popularityBadge: 'High Growth'
    },
    {
      id: 'pytorch-deeplearning',
      name: 'PyTorch & Neural Networks',
      category: 'ai',
      level: 'Advanced Architecture',
      proficiency: 86,
      highlight: 'Deep Learning Architectures & Fine-Tuning',
      topics: ['Backpropagation & Tensors', 'Convolutional & Transformer Nets', 'GPU Accelerated Compute', 'Model Checkpointing'],
      capstoneUse: 'Computer vision analysis and custom language model fine-tuning'
    },
    {
      id: 'llm-rag-agents',
      name: 'LLM Agents & Vector DBs',
      category: 'ai',
      level: 'Production Ready',
      proficiency: 91,
      highlight: 'Retrieval Augmented Generation & Tool Calling',
      topics: ['Embeddings & Cosine Search', 'Pinecone / Chroma DBs', 'LangChain & Agentic Workflows', 'Prompt Guardrails'],
      capstoneUse: 'Context-aware enterprise search & autonomous support bots',
      popularityBadge: 'Modern Tech'
    },
    {
      id: 'docker-containers',
      name: 'Docker & Microservices',
      category: 'cloud',
      level: 'Production Ready',
      proficiency: 89,
      highlight: 'Containerization & Reproducible Environments',
      topics: ['Multi-Stage Dockerfiles', 'Docker Compose Clusters', 'Volume Mounts & Networking', 'Image Layer Optimization'],
      capstoneUse: 'Self-contained deployment artifacts for distributed cloud hosting'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud Infrastructure & CI/CD',
      category: 'cloud',
      level: 'Production Ready',
      proficiency: 87,
      highlight: 'AWS / GCP Deployment & Automated Pipelines',
      topics: ['GitHub Actions Workflows', 'Container Registries', 'Serverless Functions & Cloud Run', 'Zero-Downtime Rollouts'],
      capstoneUse: 'Automated test suites and continuous deployment pipelines'
    },
    {
      id: 'figma-ux',
      name: 'Figma & Scalable Design Systems',
      category: 'design',
      level: 'Advanced Architecture',
      proficiency: 94,
      highlight: 'Design Variables, Auto-Layout & Interactive Prototypes',
      topics: ['Design Tokens & Components', 'Multi-Device Wireframing', 'Developer Handoff Specs', 'Micro-Animation Timelines'],
      capstoneUse: 'Complete design language for enterprise web & mobile products',
      popularityBadge: 'Design Standard'
    },
    {
      id: 'accessibility-wcag',
      name: 'WCAG 2.2 AA & Web Accessibility',
      category: 'design',
      level: 'Production Ready',
      proficiency: 92,
      highlight: 'Universal Usability & Inclusive Architecture',
      topics: ['ARIA Roles & Live Regions', 'Keyboard Navigation Traps', 'Color Contrast Compliance', 'Screen Reader Audits'],
      capstoneUse: 'Compliance-verified government and healthcare public web apps'
    }
  ];

  const filteredSkills = skillsList.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 bg-slate-900 text-white scroll-mt-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Full-Stack & Industry Toolchain</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              Technical Skills & Tech Stack
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              Master the exact software stack, engineering methodologies, and developer tools trusted by elite engineering teams worldwide.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={onApply}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00d2ff] hover:bg-[#38bdf8] text-[#0b1a30] transition shadow-lg cursor-pointer"
            >
              Start Learning Today
            </button>
          </div>
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 mb-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap w-full lg:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#00d2ff] text-[#0b1a30] font-bold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              All Skills ({skillsList.length})
            </button>
            <button
              onClick={() => setSelectedCategory('frontend')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition cursor-pointer ${
                selectedCategory === 'frontend'
                  ? 'bg-[#00d2ff] text-[#0b1a30] font-bold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Frontend</span>
            </button>
            <button
              onClick={() => setSelectedCategory('backend')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition cursor-pointer ${
                selectedCategory === 'backend'
                  ? 'bg-[#00d2ff] text-[#0b1a30] font-bold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Backend & DB</span>
            </button>
            <button
              onClick={() => setSelectedCategory('cloud')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition cursor-pointer ${
                selectedCategory === 'cloud'
                  ? 'bg-[#00d2ff] text-[#0b1a30] font-bold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Cloud & DevOps</span>
            </button>
            <button
              onClick={() => setSelectedCategory('ai')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition cursor-pointer ${
                selectedCategory === 'ai'
                  ? 'bg-[#00d2ff] text-[#0b1a30] font-bold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>AI & Data</span>
            </button>
            <button
              onClick={() => setSelectedCategory('design')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition cursor-pointer ${
                selectedCategory === 'design'
                  ? 'bg-[#00d2ff] text-[#0b1a30] font-bold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>UI/UX Design</span>
            </button>
          </div>

          {/* Quick Skill Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Filter skills (e.g. Docker, React, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 text-xs text-white pl-9 pr-4 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-cyan-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/70 hover:border-cyan-500/60 hover:bg-slate-800 transition-all duration-200 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Header with Title & Badges */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition font-display">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{skill.highlight}</p>
                  </div>
                  {skill.popularityBadge && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase bg-cyan-950 text-cyan-400 border border-cyan-800 shrink-0">
                      {skill.popularityBadge}
                    </span>
                  )}
                </div>

                {/* Proficiency Gauge */}
                <div className="my-4">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-400 font-medium">Curriculum Depth</span>
                    <span className="text-cyan-400 font-bold">{skill.proficiency}% Mastered</span>
                  </div>
                  <div className="w-full bg-slate-700/70 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>

                {/* Key Sub-topics Checklist */}
                <div className="mt-4 pt-3 border-t border-slate-700/50">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Competencies Taught
                  </span>
                  <ul className="space-y-1.5">
                    {skill.topics.map((topic, tidx) => (
                      <li key={tidx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Capstone Application */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 bg-slate-900/40 -mx-6 -mb-6 p-4 rounded-b-2xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Production Capstone Application:
                </span>
                <span className="text-xs text-slate-200 font-medium mt-0.5 block">
                  {skill.capstoneUse}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Certification Readiness Section */}
        <div className="bg-gradient-to-r from-[#0b1a30] via-slate-800 to-[#0e243f] rounded-3xl p-8 border border-slate-700 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5" />
              <span>Industry Accreditation & Certification</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Prepared for Global Tech Certifications
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our curriculum actively prepares you for industry-standard examinations including AWS Certified Cloud Practitioner, Meta Certified Professional Developer, GitHub Actions Specialist, and Linux Foundation Certifications.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 text-xs font-semibold text-cyan-300 border border-slate-700">
                AWS Certified Architect Ready
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 text-xs font-semibold text-emerald-300 border border-slate-700">
                Meta Frontend Professional
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 text-xs font-semibold text-amber-300 border border-slate-700">
                GitHub Certified Developer
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={onApply}
              className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0b1a30] hover:bg-slate-100 transition shadow cursor-pointer text-center"
            >
              Enroll & Build These Skills
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
