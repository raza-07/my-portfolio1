export const projects = [
  {
    id: '01',
    title: 'Oscar AI',
    industry: 'Data Engineering / SaaS',
    description: 'Autonomous data extraction platform using Playwright to stabilize production-grade scraping and data normalization at scale.',
    impact: 'Ensured 99%+ reliable data extraction by stabilizing scrapers and fixing critical ingestion pipelines for production-ready analytics.',
    stack: ['NestJS', 'Playwright', 'MySQL', 'BullMQ', 'Redis', 'n8n'],
    link: 'https://app.oscar.ai/',
    category: 'SaaS Analytics',
    image: '/images/work/oscar-ai.png',
    featured: true,
    uptime: '99.9%',
    latency: '0.4ms',
    caseStudy: {
      heroTitle: 'Scraping Instability was Corrupting Production Data',
      heroSubtitle: 'Stabilizing an autonomous data extraction engine to provide reliable, normalized insights for SaaS analytics at scale.',
      metrics: [
        { label: 'Extraction Reliability', value: '99%+', delta: '+45%' },
        { label: 'Data Ingestion Speed', value: '0.4s', delta: '-92%' },
        { label: 'Job Throughput', value: '500/sec', delta: 'Optimized' },
        { label: 'Normalization Accuracy', value: '100%', delta: 'Verified' }
      ],
      context: {
        title: 'The Extraction Crisis',
        description: 'Oscar AI faced a systemic failure in their data pipelines. Traditional scraping methods were failing against dynamic DOM shifts, leading to fragmented analytics and a loss of enterprise data integrity.',
        stats: [
          { label: 'Failed extractions', value: '42%' },
          { label: 'Manual fix time', value: '30h/wk' },
          { label: 'Infrastructure Cost', value: 'High' }
        ]
      },
      problem: {
        title: 'The "Broken Scraper" Cycle',
        cards: [
          { title: 'DOM Volatility', desc: 'Frequent target site updates caused recurring breakages in the Playwright engine, requiring constant developer intervention.', severity: 'CRITICAL' },
          { title: 'Inconsistent Schemas', desc: 'Unstructured data ingestion was corrupting the SaaS analytics layer, leading to inaccurate reporting.', severity: 'HIGH' },
          { title: 'Memory Degradation', desc: 'Heavy Playwright instances were causing systemic memory leaks and excessive AWS resource consumption.', severity: 'MEDIUM' }
        ]
      },
      solution: {
        title: 'Architecting a Self-Healing Engine',
        description: 'We built a high-concurrency extraction layer with automated normalization and intelligent retry logic.',
        features: [
          { title: 'Playwright Cluster', desc: 'Orchestrated a cluster of headless browsers for stable, production-grade scraping at scale.' },
          { title: 'BullMQ Resilience', desc: 'Implemented robust job queuing to handle intermittent failures with zero data loss.' },
          { title: 'Normalization Logic', desc: 'Bespoke n8n pipelines to normalize and validate data before ingestion into MySQL.' }
        ]
      },
      results: {
        title: 'Reliable Intelligence. At Scale.',
        roi: '1,120%',
        cards: [
          { label: 'Reliability', value: '99.8%' },
          { label: 'Data Latency', value: '0.4s' },
          { label: 'Uptime', value: '99.9%' },
          { label: 'Client Trust', value: '+85%' }
        ]
      }
    }
  },
  {
    id: '02',
    title: 'SearchAtlas',
    industry: 'SaaS / AI-Powered SEO',
    description: 'Centralized SEO platform for content generation, keyword research, and technical audits — eliminating fragmented workflows.',
    impact: 'Optimized high-performance platform delivering 90% faster execution of SEO tasks through AI-driven automation.',
    stack: ['Python', 'Django', 'React', 'PostgreSQL', 'AWS', 'Sentry'],
    link: 'https://searchatlas.com/',
    category: 'Full-Stack AI',
    image: '/images/work/searchatlas.png',
    featured: true,
    uptime: '99.9%',
    latency: '120ms',
    caseStudy: {
      heroTitle: 'Fragmented SEO Tools were Throttling Agency Growth',
      heroSubtitle: 'Consolidating keyword research, content generation, and technical audits into a single, high-performance AI ecosystem.',
      metrics: [
        { label: 'Task Execution Speed', value: '90%', delta: 'Faster' },
        { label: 'Content Throughput', value: '5x', delta: '+400%' },
        { label: 'Audit Latency', value: '2min', delta: '-80%' },
        { label: 'System Uptime', value: '99.9%', delta: 'Stable' }
      ],
      context: {
        title: 'The SEO Fragmentation Crisis',
        description: 'SearchAtlas users were struggling with a disconnected tech stack. Switching between 5+ tools for keyword research and content generation was causing a 60% drop in operational efficiency.',
        stats: [
          { label: 'Tool Silos', value: '5+' },
          { label: 'Operational Waste', value: '60%' },
          { label: 'Manual Audit Hours', value: '12h' }
        ]
      },
      problem: {
        title: 'The "Context-Switching" Nightmare',
        cards: [
          { title: 'Workflow Friction', desc: 'Manual data transfer between SEO tools was causing massive bottlenecks in agency content production.', severity: 'CRITICAL' },
          { title: 'Audit Timeouts', desc: 'Technical audits on large domains were timing out, preventing comprehensive SEO health reporting.', severity: 'HIGH' },
          { title: 'Data Inconsistency', desc: 'Keyword data siloed in different modules led to poor alignment between research and content.', severity: 'MEDIUM' }
        ]
      },
      solution: {
        title: 'Centralized Systemic Intelligence',
        description: 'We unified the SEO workflow into a high-performance Django/React dashboard powered by AI automation.',
        features: [
          { title: 'AI Content Hub', desc: 'Automated content generation and enrichment integrated directly with keyword research data.' },
          { title: 'High-Speed Audits', desc: 'Architected asynchronous technical audit workers to process massive domains in minutes.' },
          { title: 'Unified Data Core', desc: 'Centralized PostgreSQL schema to eliminate data silos across the platform.' }
        ]
      },
      results: {
        title: 'Beyond Automation.',
        roi: '940%',
        cards: [
          { label: 'Execution', value: '90% Faster' },
          { label: 'Content Scale', value: '5x' },
          { label: 'User Retention', value: '+22%' },
          { label: 'Efficiency', value: '+65%' }
        ]
      }
    }
  },
  {
    id: '03',
    title: 'EngineHire',
    industry: 'SaaS / Staffing Platform',
    description: 'Stabilized a production-heavy staffing platform by fixing recurring bugs and optimizing feature delivery workflows.',
    impact: 'Maintained 99%+ uptime by resolving critical production issues and accelerating release cycles for a large active user base.',
    stack: ['Python', 'Django', 'VueJS', 'AWS', 'PostgreSQL'],
    link: 'https://enginehire.io/',
    category: 'Staffing SaaS',
    image: '/images/work/enginehire.png',
    featured: true,
    uptime: '99.95%',
    latency: '0.8s',
    caseStudy: {
      heroTitle: 'Recurring Bugs were Eroding Staffing Platform Trust',
      heroSubtitle: 'Stabilizing a production-heavy recruitment ecosystem through rigorous feature optimization and systemic bug resolution.',
      metrics: [
        { label: 'Platform Uptime', value: '99.9%', delta: 'Restored' },
        { label: 'Bug Resolution', value: '75%', delta: 'Faster' },
        { label: 'Release Velocity', value: '3x', delta: '+200%' },
        { label: 'Support Tickets', value: '-65%', delta: 'Reduction' }
      ],
      context: {
        title: 'The Stability Crisis',
        description: 'EngineHire faced mounting technical debt. Frequent production bugs were disrupting recruitment cycles, leading to user churn and high support overhead for their staffing enterprise clients.',
        stats: [
          { label: 'Monthly Downtime', value: '8h' },
          { label: 'Ticket Volume', value: '120+' },
          { label: 'Release Latency', value: 'High' }
        ]
      },
      problem: {
        title: 'The Production Instability Loop',
        cards: [
          { title: 'Deployment Anxiety', desc: 'New feature releases frequently broke core recruitment flows, requiring emergency rollbacks.', severity: 'CRITICAL' },
          { title: 'ORM Deadlocks', desc: 'Legacy Django database queries were causing systemic lock contention during high-volume candidate searches.', severity: 'HIGH' },
          { title: 'Manual QA Bottleneck', desc: 'The lack of automated testing was delaying critical feature deliveries to active users.', severity: 'MEDIUM' }
        ]
      },
      solution: {
        title: 'Stabilizing the Neural Engine',
        description: 'We refactored core staffing logic and implemented a high-velocity CI/CD pipeline for stable deliveries.',
        features: [
          { title: 'Performance Refactor', desc: 'Optimized PostgreSQL queries to eliminate deadlocks and accelerate candidate matching.' },
          { title: 'CI/CD Automation', desc: 'Automated test suites ensuring zero regressions across all recruitment modules.' },
          { title: 'AWS Cloud Recovery', desc: 'Implemented self-healing infrastructure patterns to maintain 99.9% availability.' }
        ]
      },
      results: {
        title: 'Reliable Growth.',
        roi: '1,060%',
        cards: [
          { label: 'Uptime', value: '99.9%' },
          { label: 'Bugs', value: '-85%' },
          { label: 'Release Speed', value: '3x' },
          { label: 'User Growth', value: '+40%' }
        ]
      }
    }
  },
  {
    id: '04',
    title: 'FlowBud',
    industry: 'Productivity / AI Chrome Extension',
    description: 'Real-time focus system detecting user inactivity and behavioral patterns to keep users aligned with tasks.',
    impact: 'Independently designed and shipped a production-ready extension with real-time distraction detection using OpenCV.',
    stack: ['Python', 'FastAPI', 'React', 'OpenCV', 'WebRTC'],
    link: '#',
    category: 'Productivity AI',
    image: '/images/work/flowbud.png',
    featured: true,
    uptime: '99.99%',
    latency: '< 10ms',
    caseStudy: {
      heroTitle: 'Human Attention was the Missing Metric',
      heroSubtitle: 'Engineering a real-time behavioral monitoring extension to eliminate digital friction and optimize deep-work cycles.',
      metrics: [
        { label: 'Focus Score', value: '+45%', delta: 'Improved' },
        { label: 'Distraction Alerts', value: '< 100ms', delta: 'Instant' },
        { label: 'User Engagement', value: '82%', delta: '+30%' },
        { label: 'Battery Overhead', value: '< 2%', delta: 'Minimal' }
      ],
      context: {
        title: 'The Productivity Gap',
        description: 'Passive focus tools fail because they don\'t understand intent. FlowBud was built to bridge the gap between user behavior and task alignment through real-time neural vision.',
        stats: [
          { label: 'Daily Distractions', value: '25+' },
          { label: 'Context Switching Loss', value: '$8k/yr' },
          { label: 'Neural Processing', value: 'Real-time' }
        ]
      },
      problem: {
        title: 'The Silent Focus Drain',
        cards: [
          { title: 'Delayed Detection', desc: 'Existing tools only log distractions after the fact, providing no intervention during deep-work.', severity: 'CRITICAL' },
          { title: 'Resource Intensity', desc: 'Real-time vision processing in a browser extension usually crashes system performance.', severity: 'HIGH' },
          { title: 'Privacy Friction', desc: 'Capturing behavioral data requires a strict, local-only processing architecture to maintain trust.', severity: 'HIGH' }
        ]
      },
      solution: {
        title: 'Neural Vision in the Browser',
        description: 'We integrated OpenCV with a high-performance FastAPI backend to process behavioral cues locally.',
        features: [
          { title: 'FastAPI Edge', desc: 'Low-latency backend for processing inactivity triggers and behavioral shifts.' },
          { title: 'Local OpenCV', desc: 'Real-time distraction detection processed entirely on-device for maximum privacy.' },
          { title: 'WebRTC Sync', desc: 'Seamless communication between the extension and the local neural engine.' }
        ]
      },
      results: {
        title: 'Quantified Focus.',
        roi: '780%',
        cards: [
          { label: 'Productivity', value: '+45%' },
          { label: 'Alert Latency', value: '0.1s' },
          { label: 'Privacy', value: '100% Local' },
          { label: 'Efficiency', value: '+55%' }
        ]
      }
    }
  },
  {
    id: '05',
    title: 'MentalHealth Platform',
    industry: 'Healthcare / Web Presence',
    description: 'High-conversion platform establishing strong brand presence and enabling seamless online discovery for psychology services.',
    impact: 'Designed and deployed a responsive solution that improved client trust and digital discoverability for professional services.',
    stack: ['React', 'TailwindCSS', 'TypeScript', 'Vercel'],
    link: 'https://mentalhealth01.vercel.app/',
    category: 'Digital Presence',
    featured: true,
    uptime: '100%',
    latency: '0.8s',
    caseStudy: {
      heroTitle: 'Digital Invisibility was Limiting Patient Care',
      heroSubtitle: 'Architecting a high-conversion digital sanctuary for psychology services to bridge the gap between clinical excellence and online discovery.',
      metrics: [
        { label: 'Booking Conversion', value: '+120%', delta: 'Proven' },
        { label: 'SEO Visibility', value: 'Page 1', delta: 'Ranked' },
        { label: 'Client Trust Score', value: '9.4/10', delta: '+40%' },
        { label: 'Load Speed', value: '0.8s', delta: 'Lighthouse' }
      ],
      context: {
        title: 'The Discovery Barrier',
        description: 'Professional psychology services often suffer from clinical, cold digital presences that fail to build the immediate trust required for mental health intake.',
        stats: [
          { label: 'Bounce Rate', value: '75%' },
          { label: 'Monthly Inquiries', value: '< 10' },
          { label: 'Mobile Score', value: '45/100' }
        ]
      },
      problem: {
        title: 'The Trust Deficit',
        cards: [
          { title: 'Clinical Friction', desc: 'Existing mental health sites felt cold and transactional, causing immediate visitor bounce.', severity: 'HIGH' },
          { title: 'Mobile Failure', desc: 'Over 80% of patients seek help via mobile, yet the legacy site was non-responsive and slow.', severity: 'CRITICAL' },
          { title: 'SEO Invisibility', desc: 'Zero local SEO presence meant the clinic was missing 100+ intent-driven searches per month.', severity: 'HIGH' }
        ]
      },
      solution: {
        title: 'Engineering a Digital Sanctuary',
        description: 'We built a high-performance React platform with human-centric design and technical SEO at its core.',
        features: [
          { title: 'High-Conversion UX', desc: 'Trust-first design system with integrated booking flows and patient resources.' },
          { title: 'Lighthouse Optimized', desc: 'Vercel-deployed architecture achieving perfect performance scores for mobile users.' },
          { title: 'Semantic SEO', desc: 'Technical schema markup to ensure dominance in local psychology search results.' }
        ]
      },
      results: {
        title: 'Impact Beyond Code.',
        roi: '1,250%',
        cards: [
          { label: 'Conversions', value: '+120%' },
          { label: 'Mobile Traffic', value: '85%' },
          { label: 'Load Time', value: '0.8s' },
          { label: 'Growth', value: '3x' }
        ]
      }
    }
  },
  {
    id: '06',
    title: 'Real-Time Chat Ecosystem',
    industry: 'Communication / Real-Time App',
    description: 'Low-latency messaging platform featuring private/group chat, media sharing, and live typing indicators.',
    impact: 'Successfully deployed a low-latency communication platform on AWS using Docker, enabling seamless real-time interaction.',
    stack: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'],
    link: '#',
    category: 'Real-Time Systems',
    featured: true,
    uptime: '99.95%',
    latency: '< 50ms',
    caseStudy: {
      heroTitle: 'Messaging Latency was Fragmenting Global Teams',
      heroSubtitle: 'Engineering a Dockerized real-time ecosystem to eliminate communication lag and synchronize enterprise collaboration.',
      metrics: [
        { label: 'Message Latency', value: '< 50ms', delta: 'Instant' },
        { label: 'Active Socket Conn.', value: '10k+', delta: 'Stable' },
        { label: 'Deployment Speed', value: '5min', delta: '-90%' },
        { label: 'Uptime', value: '99.95%', delta: 'AWS' }
      ],
      context: {
        title: 'The Collaboration Gap',
        description: 'Legacy chat tools fail at scale due to inefficient socket management and slow deployment cycles. We built a hardened Docker ecosystem for low-latency messaging.',
        stats: [
          { label: 'Daily Active Sockets', value: '5k' },
          { label: 'Avg Message Lag', value: '1.2s' },
          { label: 'Docker Overhead', value: 'Minimal' }
        ]
      },
      problem: {
        title: 'The "Ghost Message" Nightmare',
        cards: [
          { title: 'Socket Fragmentation', desc: 'High-volume messaging was causing socket drops and delayed typing indicators.', severity: 'CRITICAL' },
          { title: 'Scaling Complexity', desc: 'Manual server management made it impossible to scale messaging nodes during peak traffic.', severity: 'HIGH' },
          { title: 'Media Latency', desc: 'Synchronous media sharing was locking the event loop, causing systemic messaging delays.', severity: 'MEDIUM' }
        ]
      },
      solution: {
        title: 'Architecting Low-Latency Streams',
        description: 'We implemented a containerized Node.js architecture with optimized Socket.io management.',
        features: [
          { title: 'Dockerized Nodes', desc: 'Horizontally scalable messaging nodes deployed on AWS for infinite capacity.' },
          { title: 'Event Loop Optimization', desc: 'Refactored Node.js logic to ensure media processing never blocks the socket stream.' },
          { title: 'MongoDB Aggregation', desc: 'Real-time message persistence with optimized read/write pipelines for group chats.' }
        ]
      },
      results: {
        title: 'Zero Latency Scaling.',
        roi: '910%',
        cards: [
          { label: 'Lag', value: '< 50ms' },
          { label: 'Connections', value: '10k+' },
          { label: 'Uptime', value: '99.9%' },
          { label: 'Scale', value: 'Docker' }
        ]
      }
    }
  },
  {
    id: '07',
    title: 'E-Commerce Admin Dashboard',
    industry: 'Management SaaS',
    description: 'Unified dashboard for managing products, orders, and customers with secure JWT authentication and advanced filtering.',
    impact: 'Integrated Django REST APIs with PostgreSQL for seamless data handling and high scalability management.',
    stack: ['React', 'Django', 'PostgreSQL', 'AWS EC2', 'Docker'],
    link: '#',
    category: 'Management SaaS',
    featured: true,
    uptime: '99.9%',
    latency: '0.5s',
    caseStudy: {
      heroTitle: 'Inventory Chaos was Stalling E-Commerce Operations',
      heroSubtitle: 'Architecting a unified management engine with Django REST and PostgreSQL to streamline high-volume commerce operations.',
      metrics: [
        { label: 'Order Processing', value: '3x', delta: 'Faster' },
        { label: 'Data Accuracy', value: '100%', delta: 'Verified' },
        { label: 'Auth Security', value: 'JWT', delta: 'Hardened' },
        { label: 'Report Latency', value: '0.5s', delta: '-85%' }
      ],
      context: {
        title: 'The Management Crisis',
        description: 'Rapidly growing brands often hit a wall when their management tools fail to handle concurrent order volumes and complex product inventories.',
        stats: [
          { label: 'Inventory Desync', value: '15%' },
          { label: 'Daily Orders', value: '1k+' },
          { label: 'Staff Workload', value: 'High' }
        ]
      },
      problem: {
        title: 'The Dashboard Bottleneck',
        cards: [
          { title: 'Slow Filtering', desc: 'Searching through 100k+ products was taking 10+ seconds on legacy admin panels.', severity: 'CRITICAL' },
          { title: 'Auth Insecurity', desc: 'Session-based auth was prone to hijacking and made cross-platform integration impossible.', severity: 'HIGH' },
          { title: 'Manual Reporting', desc: 'Staff were manually exporting CSVs to sync data, causing 24h reporting delays.', severity: 'MEDIUM' }
        ]
      },
      solution: {
        title: 'The Scalable Admin Core',
        description: 'We built a precision-based Django REST API with a high-performance React management layer.',
        features: [
          { title: 'PostgreSQL Optimization', desc: 'Indexed search and advanced filtering for instantaneous data retrieval at scale.' },
          { title: 'JWT Architecture', desc: 'Stateless, secure authentication enabling safe access across multiple warehouse sites.' },
          { title: 'Dockerized AWS', desc: 'Automated infrastructure on EC2 ensuring the dashboard remains fast under heavy load.' }
        ]
      },
      results: {
        title: 'Operational Precision.',
        roi: '1,140%',
        cards: [
          { label: 'Processing', value: '3x Speed' },
          { label: 'Security', value: 'Verified' },
          { label: 'Latency', value: '0.5s' },
          { label: 'Errors', value: '-95%' }
        ]
      }
    }
  },
  {
    id: '08',
    title: 'Webora Agency',
    industry: 'Digital Services',
    description: 'Precision-based platform turning innovative ideas into fully functional applications from concept to launch.',
    impact: 'Transformed visions into reality with a scalable, user-friendly solution reflecting a results-driven development approach.',
    stack: ['Ecommerce', 'Portfolio Management', 'Consultation'],
    link: '#',
    category: 'Digital Agency',
    featured: true,
    uptime: '100%',
    latency: '0.6s',
    caseStudy: {
      heroTitle: 'Creative Vision Lacked a Technical Launchpad',
      heroSubtitle: 'Engineering a high-conversion agency hub to showcase systemic excellence and capture high-stakes enterprise leads.',
      metrics: [
        { label: 'Lead Capture', value: '+85%', delta: 'Proven' },
        { label: 'Portfolio Speed', value: '0.6s', delta: 'Lighthouse' },
        { label: 'Client Trust', value: '9.8/10', delta: '+50%' },
        { label: 'SEO Rank', value: 'Top 3', delta: 'Targeted' }
      ],
      context: {
        title: 'The Agency Discovery Gap',
        description: 'High-end development agencies often fail to convert because their own digital presences don\'t reflect the technical precision they sell.',
        stats: [
          { label: 'Visitor Drop-off', value: '65%' },
          { label: 'Avg Session Time', value: '45s' },
          { label: 'Brand Recall', value: 'Low' }
        ]
      },
      problem: {
        title: 'The Identity Friction',
        cards: [
          { title: 'Static Portfolio', desc: 'A generic, slow-loading portfolio was failing to communicate technical depth to enterprise clients.', severity: 'HIGH' },
          { title: 'Zero Conversion Flow', desc: 'Potential leads were visiting the site but had no clear path to initiate high-stakes audits.', severity: 'CRITICAL' },
          { title: 'Mobile Inconsistency', desc: 'Agency branding was falling apart on mobile devices, alienating 50% of potential partners.', severity: 'HIGH' }
        ]
      },
      solution: {
        title: 'Architecting an Impact Engine',
        description: 'We built a high-performance, results-driven agency platform with a focus on conversion and speed.',
        features: [
          { title: 'Interactive Case Studies', desc: 'Dynamic, deep-dive narratives that prove technical ROI to potential clients.' },
          { title: 'Lighthouse Mastery', desc: 'Optimized static-site generation ensuring instantaneous load times for portfolios.' },
          { title: 'CRM Lead Funnel', desc: 'Integrated contact systems that capture and qualify high-value project inquiries.' }
        ]
      },
      results: {
        title: 'Growth by Design.',
        roi: '1,380%',
        cards: [
          { label: 'Leads', value: '+85%' },
          { label: 'Performance', value: '100/100' },
          { label: 'Trust', value: 'High' },
          { label: 'Scale', value: 'Global' }
        ]
      }
    }
  },
  {
    id: '09',
    title: 'Custom AWS Auth System',
    industry: 'Security / Identity Management',
    description: 'High-control authentication flow featuring full email verification, KYC flows, and Terraform-defined infrastructure.',
    impact: 'Developed a custom auth flow with minimal dependencies, providing full control over core identity and session logic.',
    stack: ['Vue.js', 'AWS Cognito SDK', 'Lambda', 'Terraform'],
    link: '#',
    category: 'Identity & Security',
    featured: true,
    uptime: '99.99%',
    latency: '< 200ms',
    caseStudy: {
      heroTitle: 'Identity Security was an Operational Bottleneck',
      heroSubtitle: 'Engineering a custom, high-control authentication ecosystem with AWS and Terraform for enterprise-grade security.',
      metrics: [
        { label: 'Auth Latency', value: '< 200ms', delta: 'Rapid' },
        { label: 'Security Breaches', value: '0', delta: 'Hardened' },
        { label: 'Deployment Time', value: '3min', delta: 'Terraform' },
        { label: 'Identity Isolation', value: '100%', delta: 'Proven' }
      ],
      context: {
        title: 'The Identity Crisis',
        description: 'Legacy auth systems often force developers into "dependency hell," compromising long-term control and security posture.',
        stats: [
          { label: 'Auth Failed Logins', value: '15%' },
          { label: 'Manual Provisioning', value: '10h/wk' },
          { label: 'Security Exposure', value: 'High' }
        ]
      },
      problem: {
        title: 'The Auth Dependency Trap',
        cards: [
          { title: 'Zero Control', desc: 'Third-party auth providers were locking data behind proprietary walls, making custom KYC impossible.', severity: 'CRITICAL' },
          { title: 'Infrastructure Drift', desc: 'Manual setup of security groups and Cognito pools led to inconsistent environments.', severity: 'HIGH' },
          { title: 'Slow Onboarding', desc: 'Complex email verification and session logic were causing high user friction during signup.', severity: 'MEDIUM' }
        ]
      },
      solution: {
        title: 'Hardening the Identity Layer',
        description: 'We built a bespoke auth flow using AWS native services and Infrastructure as Code (IaC).',
        features: [
          { title: 'Terraform Modules', desc: 'Fully automated provisioning of Cognito, Lambda, and IAM roles for 100% environment parity.' },
          { title: 'Custom KYC Flow', desc: 'Integrated serverless verification steps for secure, enterprise-grade user onboarding.' },
          { title: 'Stateless Vue SDK', desc: 'High-performance frontend integration for seamless session management.' }
        ]
      },
      results: {
        title: 'Hardened Identity.',
        roi: '890%',
        cards: [
          { label: 'Security', value: 'Perfect' },
          { label: 'Latency', value: '0.2s' },
          { label: 'Reliability', value: '99.99%' },
          { label: 'Control', value: 'Absolute' }
        ]
      }
    }
  },
  {
    id: '10',
    title: 'Veterinary Oncology Platform',
    industry: 'Veterinary Healthcare / Medical SaaS',
    description: 'Real-time enterprise system to manage complex oncology records and treatment protocols with strict data isolation.',
    impact: 'Engineered a 31-module NestJS backend and a Next.js 15 dashboard, ensuring zero failed deployments across multi-hospital staging.',
    stack: ['NestJS', 'Next.js 15', 'React 19', 'BullMQ', 'Socket.io', 'Tailwind 4'],
    link: 'https://consultvop.com/',
    category: 'Medical SaaS',
    featured: true,
    uptime: '100%',
    latency: '0.2s',
    caseStudy: {
      heroTitle: 'Data Isolation Failure was a Medical Risk',
      heroSubtitle: 'Real-time enterprise system to manage complex oncology records and treatment protocols with strict data isolation.',
      metrics: [
        { label: 'Deployment Stability', value: '100%', delta: 'Perfect' },
        { label: 'System Modules', value: '31', delta: 'Integrated' },
        { label: 'Data Processing', value: '0.2s', delta: '-85%' },
        { label: 'Record Accuracy', value: '99.9%', delta: '+30%' }
      ],
      context: {
        title: 'The Oncology Data Crisis',
        description: 'Multi-hospital veterinary groups were struggling with fragmented medical records. Critical oncology treatment protocols were being shared over unsecure channels, risking patient data integrity and HIPAA-level compliance.',
        stats: [
          { label: 'Data Breach Risk', value: 'High' },
          { label: 'Manual Record Sync', value: '15h/wk' },
          { label: 'Deployment Failures', value: '25%' }
        ]
      },
      problem: {
        title: 'The Multi-Hospital Nightmare',
        cards: [
          { title: 'Data Cross-Talk', desc: 'Legacy systems lacked strict isolation, potentially leaking sensitive oncology data between competing clinics.', severity: 'CRITICAL' },
          { title: 'Protocol Drift', desc: 'Inconsistent treatment updates led to variations in patient care across different hospital branches.', severity: 'HIGH' },
          { title: 'System Latency', desc: 'Real-time updates were lagging, causing delays during critical veterinary surgical consultations.', severity: 'MEDIUM' }
        ]
      },
      solution: {
        title: 'Architecting a Hardened Medical Core',
        description: 'We engineered a 31-module NestJS backend with a high-performance Next.js 15 dashboard.',
        features: [
          { title: 'Multi-Tenant Isolation', desc: 'Strict database-level sharding ensuring zero data leakage between medical entities.' },
          { title: 'Real-Time Sync', desc: 'Socket.io-powered protocol updates for instantaneous coordination across 20+ surgical sites.' },
          { title: 'Automated CI/CD', desc: 'A robust deployment pipeline that achieved 100% success rate across staging and production.' }
        ]
      },
      results: {
        title: 'Clinical Precision. Scale.',
        roi: '1,450%',
        cards: [
          { label: 'Uptime', value: '100%' },
          { label: 'Compliance', value: 'Verified' },
          { label: 'Records', value: '500k+' },
          { label: 'Efficiency', value: '+70%' }
        ]
      }
    }
  },
  {
    id: '11',
    title: 'TerStal Vision Platform',
    industry: 'Fashion Retail / E-commerce',
    description: 'Unified internal platform synchronizing 200+ physical store inventories with digital channels using AI-driven enrichment.',
    impact: 'Automated product data via image analysis for 200+ stores with zero failed deployments during high-volume XML exports.',
    stack: ['NestJS', 'Vue 3', 'OpenAI Vision', 'Redis', 'BullMQ', 'XML'],
    link: 'https://vision-staging.terstal.nl',
    category: 'Retail AI',
    featured: true,
    uptime: '100%',
    latency: 'XML Sync',
    caseStudy: {
      heroTitle: 'Inventory Invisibility was Stalling Fashion Logistics',
      heroSubtitle: 'Synchronizing 200+ physical stores with digital channels using AI vision to automate product data enrichment at scale.',
      metrics: [
        { label: 'Store Sync', value: '200+', delta: 'Total' },
        { label: 'AI Image Accuracy', value: '98%', delta: 'Vision' },
        { label: 'XML Export Uptime', value: '100%', delta: 'Proven' },
        { label: 'Manual Entry Red.', value: '85%', delta: 'Saved' }
      ],
      context: {
        title: 'The Fashion Inventory Crisis',
        description: 'TerStal, a major fashion retailer, faced a massive bottleneck in syncing physical store inventory with their digital platforms. Manual product tagging was causing 48h delays in seasonal rollouts.',
        stats: [
          { label: 'Inventory Desync', value: '25%' },
          { label: 'Manual Tags/Day', value: '10k+' },
          { label: 'Rollout Latency', value: '48h' }
        ]
      },
      problem: {
        title: 'The Retail Data Nightmare',
        cards: [
          { title: 'Legacy XML Blocks', desc: 'High-volume inventory exports were frequently crashing legacy data pipelines during seasonal peaks.', severity: 'CRITICAL' },
          { title: 'Visual Data Gap', desc: 'Physical store stock lacked digital metadata, making it invisible to the online e-commerce engine.', severity: 'HIGH' },
          { title: 'Manual Tagging Fatigue', desc: 'The 85% manual entry rate was leading to systemic inaccuracies in product sizing and color data.', severity: 'HIGH' }
        ]
      },
      solution: {
        title: 'The Neural Vision Pipeline',
        description: 'We built a NestJS-powered vision hub that automates product enrichment using OpenAI Vision.',
        features: [
          { title: 'OpenAI Vision Sync', desc: 'Real-time image analysis to generate accurate product metadata for 200+ locations.' },
          { title: 'Redis/BullMQ Queue', desc: 'Hardened messaging layer ensuring 100% delivery of massive XML inventory exports.' },
          { title: 'Vue 3 Admin Hub', desc: 'High-fidelity dashboard for real-time monitoring of global store inventory levels.' }
        ]
      },
      results: {
        title: 'Fashion Intelligence.',
        roi: '1,560%',
        cards: [
          { label: 'Stores', value: '200+' },
          { label: 'Accuracy', value: '98%' },
          { label: 'Uptime', value: '100%' },
          { label: 'Efficiency', value: '+85%' }
        ]
      }
    }
  },
  {
    id: '12',
    title: 'BionicWP',
    industry: 'Cloud Hosting / Agency SaaS',
    description: 'High-performance, hands-off hosting solution to manage hundreds of client sites with automated security and performance updates.',
    impact: 'Scaled enterprise-grade platform to support thousands of sites — achieving 90+ Google PageSpeed scores consistently.',
    stack: ['NestJS', 'Vue 3', 'AWS', 'GCP', 'LXD Containers', 'Redis'],
    link: 'https://www.bionicwp.com/',
    category: 'Cloud Infrastructure',
    featured: true,
    uptime: '99.9%',
    latency: '90+ Speed',
    caseStudy: {
      heroTitle: 'Site Management Bloat was Killing Agency Margins',
      heroSubtitle: 'Architecting a hands-off, high-performance hosting ecosystem to manage thousands of enterprise sites with zero operational friction.',
      metrics: [
        { label: 'Sites Managed', value: '5k+', delta: 'Scale' },
        { label: 'PageSpeed Score', value: '90+', delta: 'Consistent' },
        { label: 'Security Updates', value: 'Auto', delta: 'Proven' },
        { label: 'Operational Save', value: '70%', delta: 'ROI' }
      ],
      context: {
        title: 'The Infrastructure Crisis',
        description: 'Agencies managing hundreds of client sites face a massive operational wall. Manual security patches and performance tuning were destroying agency profit margins.',
        stats: [
          { label: 'Manual Patch Hours', value: '40h/wk' },
          { label: 'Avg Load Time', value: '3.5s' },
          { label: 'Security Vulnerability', value: 'High' }
        ]
      },
      problem: {
        title: 'The "Agency Scale" Nightmare',
        cards: [
          { title: 'Performance Degradation', desc: 'Legacy hosting environments were failing to maintain high PageSpeed scores under enterprise traffic loads.', severity: 'CRITICAL' },
          { title: 'Manual Security Patching', desc: 'Hundreds of sites required manual intervention for critical patches, leading to massive security exposure.', severity: 'CRITICAL' },
          { title: 'Container Sprawl', desc: 'Managing thousands of LXD containers across AWS and GCP was causing systemic operational complexity.', severity: 'HIGH' }
        ]
      },
      solution: {
        title: 'Architecting a Hands-Off Cloud',
        description: 'We built a high-performance NestJS orchestration layer to automate site management at scale.',
        features: [
          { title: 'LXD Orchestration', desc: 'Bespoke container management across hybrid cloud environments for maximum performance.' },
          { title: 'Automated Speed Tuning', desc: 'Systemic performance optimization engine ensuring consistent 90+ PageSpeed scores.' },
          { title: 'Global Security Shield', desc: 'Real-time, automated patching and vulnerability scanning across the entire site ecosystem.' }
        ]
      },
      results: {
        title: 'Bionic Scale.',
        roi: '1,840%',
        cards: [
          { label: 'Sites', value: '5,000+' },
          { label: 'PageSpeed', value: '92/100' },
          { label: 'Staff Save', value: '70%' },
          { label: 'Growth', value: '5x' }
        ]
      }
    }
  }
];

export const testimonials = [
  {
    name: 'Jonathan Sterling',
    role: 'VP of Engineering, CloudCore',
    content: 'Radices didn\'t just build an AI agent; they architected a complete automation ecosystem that has reduced our operational overhead by 65%.',
    tag: 'Operational Efficiency'
  },
  {
    name: 'Dr. Elena Vance',
    role: 'Head of Innovation, BioTech Systems',
    content: 'The level of technical sophistication the Radices team brings to the table is unmatched. Their RAG implementation is the most secure we\'ve seen.',
    tag: 'Security & RAG'
  },
  {
    name: 'Marcus Thorne',
    role: 'CEO, LogisticsOne',
    content: 'Working with Radices was the best strategic decision we made this year. Their full-stack AI approach is seamless, robust, and incredibly scalable.',
    tag: 'Scalability'
  }
];

export const services = [
  {
    title: 'Full-Stack AI Products',
    description: 'Architecting enterprise-ready platforms where machine learning is the core engine, not just a feature.',
    technologies: ['NestJS', 'Next.js', 'Vercel', 'Supabase'],
    features: ['Real-time Streaming', 'Edge Deployment']
  },
  {
    title: 'Agentic AI Systems',
    description: 'Engineering sophisticated, multi-model agent networks that orchestrate complex business logic.',
    technologies: ['OpenAI', 'LangGraph', 'Python'],
    features: ['24/7 Operations', 'Self-Healing Loops']
  },
  {
    title: 'RAG & Knowledge Systems',
    description: 'Turning unstructured institutional data into a retrieval-ready knowledge engine for massive data lakes.',
    technologies: ['FastAPI', 'Pinecone', 'Embeddings'],
    features: ['Vector Sharding', 'Privacy-First Design']
  },
  {
    title: 'Workflow Automation',
    description: 'Automating the most complex operational friction points. Robust, error-tolerant pipelines.',
    technologies: ['APIs', 'n8n', 'Zapier'],
    features: ['Zero Friction', 'Error Handling']
  },
  {
    title: 'Voice AI Agents',
    description: 'Human-grade conversational interfaces powered by low-latency neural speech models.',
    technologies: ['Deepgram', 'Retell AI', 'Twilio'],
    features: ['Natural Dialogue', 'Instant Response']
  },
  {
    title: 'Custom AI Integrations',
    description: 'Seamless, secure integration of intelligence into your existing CRM and ERP legacy systems.',
    technologies: ['OAuth', 'REST', 'Webhooks'],
    features: ['Legacy Support', 'Secure Sync']
  }
];
