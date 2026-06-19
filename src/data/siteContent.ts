export interface WhatIDoItem {
  title: string;
  description: string;
  icon: string;
  bulletPoints: string[];
}

export interface VentureBuild {
  title: string;
  status: "Active" | "Building" | "Concept" | "Rebuilding";
  description: string;
  link?: string;
}

export interface VentureItem {
  title: string;
  status: "Active" | "Building" | "Concept" | "Rebuilding" | "Coming Soon";
  description: string;
  builds: VentureBuild[];
}

export interface WorkExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
}

export interface StackCategory {
  name: string;
  items: string[];
}

export interface SiteContent {
  personalInfo: {
    name: string;
    location: string;
    title: string;
    tagline: string;
    coreMessage: string;
    subheadline: string;
  };
  navigation: { label: string; href: string }[];
  about: {
    paragraphs: string[];
  };
  whatIDo: WhatIDoItem[];
  ventures: VentureItem[];
  workExperience: WorkExperienceItem[];
  digitalStack: StackCategory[];
  contact: {
    ctaText: string;
    email: string;
    linkedin: string;
    github: string;
    twitter?: string;
    travelBlog?: string;
    bookingLink: string;
  };
}

export const siteContent: SiteContent = {
  personalInfo: {
    name: "Steven Morano",
    location: "Rye Brook, NY",
    title: "Marketing Operations & AI Systems Consultant",
    tagline: "Marketing Operations & AI Systems Consultant",
    coreMessage: "I help businesses clean up CRM systems, optimize acquisition funnels, and build automated workflows.",
    subheadline: "I help businesses clean up CRM systems, improve funnels, automate workflows, and use AI practically across campaigns, CRM, content, reporting, and operations."
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#what-i-do" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#ventures" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" }
  ],
  about: {
    paragraphs: [
      "I’m Steven Morano, a Westchester marketing consultant specializing in marketing operations and AI systems. I have spent over a decade working as a digital marketing consultant, scaling paid media budgets, designing CRM architectures, and building automation funnels.",
      "As a dedicated CRM, funnel, and marketing automation consultant, my core focus is walking into complex, scattered setups and turning them into automated, clean engines that make lead flow, operations, and tracking highly efficient.",
      "I also build custom web applications and automate operations utilizing modern frameworks like React, Next.js, and API integrations. This technical building capability allows me to bridge the gap between high-level growth marketing strategy and developer-level execution."
    ]
  },
  whatIDo: [
    {
      title: "Marketing Operations Consulting",
      description: "Auditing, designing, and rebuilding CRM, lead flow, and follow-up architectures to stop qualified leads from slipping through the cracks.",
      icon: "Megaphone",
      bulletPoints: ["CRM Migrations & Audits", "Lead Flow & Nurturing Flows", "Lifecycle Marketing", "HubSpot & GoHighLevel Setup"]
    },
    {
      title: "Paid Media & Growth Strategy",
      description: "Data-driven campaign structures and management to scale customer acquisition, reduce CAC, and maximize return on ad spend.",
      icon: "Target",
      bulletPoints: ["Direct-Response Campaigns", "Meta, Google, & TikTok Ads", "Attribution & ROI Tracking", "Landing Page Strategy"]
    },
    {
      title: "AI Workflow Consulting",
      description: "Designing and deploying custom AI workflows, prompts, and automations to accelerate business operations and content output.",
      icon: "Zap",
      bulletPoints: ["Content & Research Workflows", "SOP Automation Scripts", "Time-Saving Audits", "Practical Team Onboarding"]
    },
    {
      title: "Marketing Tech & Analytics",
      description: "Establishing rock-solid web tracking, custom dashboards, and data pipelines to ensure every marketing dollar is measurable.",
      icon: "Layers",
      bulletPoints: ["GA4 & Google Tag Manager", "Looker Studio Dashboards", "Conversion API Integrations", "Database Optimizations"]
    }
  ],
  ventures: [
    {
      title: "Marketing Ops Consulting",
      status: "Active",
      description: "Operational consulting and tech stack optimization for small and medium businesses.",
      builds: [
        {
          title: "Marketing Systems Consulting",
          status: "Active",
          description: "Helping small businesses fix messy funnels, CRM chaos, lead tracking, and campaign workflows."
        }
      ]
    },
    {
      title: "Home Maintenance Software",
      status: "Coming Soon",
      description: "Manage your home like a professional asset. Preventative logs and projects in one place.",
      builds: [
        {
          title: "HomeBase / Home Maintenance App",
          status: "Building",
          description: "A homeowner management app built in React/Next.js to track preventative logs, boilers, roofs, gutters, and recurring projects."
        }
      ]
    },
    {
      title: "Organization & Productivity",
      status: "Coming Soon",
      description: "Digital templates and organization setups built for neurodivergent professionals.",
      builds: [
        {
          title: "Working From Home With ADHD",
          status: "Rebuilding",
          description: "Templates, calendars, task systems, and focus structures designed to simplify work-from-home execution."
        }
      ]
    },
    {
      title: "Apps & Experiments",
      status: "Active",
      description: "Custom tools, accountability apps, and niche workflow scripts listed on GitHub.",
      builds: [
        {
          title: "Follow Through",
          status: "Concept",
          description: "A friend-based accountability app concept for challenges, goals, and daily progress."
        },
        {
          title: "Unified School Parent App",
          status: "Concept",
          description: "A parent dashboard concept combining school communications, event schedules, and updates."
        }
      ]
    }
  ],
  workExperience: [
    {
      company: "Smart Marketing Digital",
      role: "Freelance Marketing Operations Consultant",
      period: "January 2024 - Present",
      location: "Rye, NY",
      summary: "Leading marketing operations consulting, paid media (PPC/SEO), and CRM migrations (HubSpot, ActiveCampaign) to rebuild sales workflows and optimize funnel velocity for SMB clients."
    },
    {
      company: "Above Ave",
      role: "Director of Marketing Operations",
      period: "January 2022 - December 2023",
      location: "Remote",
      summary: "Owned multi-channel demand-gen campaigns and HubSpot integrations, leading a team to drive a 75% increase in lead generation, a 150% boost in course enrollments, and a 50% reduction in sales cycles."
    },
    {
      company: "Soul Ahimsa",
      role: "E-commerce Founder",
      period: "January 2020 - June 2022",
      location: "Rye, NY",
      summary: "Launched and scaled an e-commerce brand, managing end-to-end storefront operations, inventory, and paid social acquisition (Shopify, Facebook/Instagram Ads) for steady customer retention."
    },
    {
      company: "Basis",
      role: "Senior Media Buyer",
      period: "June 2017 - December 2019",
      location: "Norwalk, CT / San Diego, CA",
      summary: "Managed a $6M annual paid media budget (Google, Facebook, Instagram, LinkedIn, TikTok), delivering a 30% increase in campaign ROI and a 50% growth in qualified leads (MQLs)."
    },
    {
      company: "Digital Chair, Inc.",
      role: "Digital Marketing / Sales",
      period: "May 2014 - December 2016",
      location: "Rye, NY",
      summary: "Led and optimized paid search (PPC), SEO, and content campaigns to substantially boost search visibility, conversion rates, and client ROI."
    }
  ],
  digitalStack: [
    {
      name: "Marketing & Paid Media",
      items: ["Meta Ads", "Google Ads", "TikTok Ads", "YouTube Ads", "LinkedIn Ads", "Snapchat Ads", "Pinterest Ads"]
    },
    {
      name: "CRM & Automation",
      items: ["HubSpot", "goHighLevel", "ActiveCampaign", "Salesforce", "Zapier", "Make", "Asana", "ClickUp", "Monday.com"]
    },
    {
      name: "Analytics & Tracking",
      items: ["GA4", "Google Tag Manager", "Looker Studio", "Conversion APIs", "Hyros", "Pixel Tracking"]
    },
    {
      name: "Web, Ecommerce & AI Tools",
      items: ["React", "Next.js", "Shopify", "WordPress", "OpenAI API", "Anthropic Claude", "GitHub", "Vercel", "HTML/CSS", "JavaScript"]
    }
  ],
  contact: {
    ctaText: "Have a project, business, CRM system, or workflow that needs sorting out? Reach out.",
    email: "steven@stevenmorano.com",
    linkedin: "https://www.linkedin.com/in/stevenmorano/",
    github: "https://github.com/stevenmorano",
    twitter: "https://x.com/SteveMorano",
    travelBlog: "https://travelingsteven.wordpress.com/",
    bookingLink: "#"
  }
};
