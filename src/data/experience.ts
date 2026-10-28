// Professional history, most recent first.
export interface Role {
  period: string
  title: string
  company: string
  location: string
  summary: string
  highlights: string[]
  stack: string[]
}

export const roles: Role[] = [
  {
    period: 'Feb 2026 to Present',
    title: 'AI Engineer, Software Engineer III',
    company: 'Lexpool',
    location: 'Lahore, Pakistan',
    summary: 'Building a multi agent platform that lets AI agents automate business workflows safely.',
    highlights: [
      'Built the multi agent system in LangGraph with tool calling, sub agents and long term memory.',
      'Made agent runs reliable with crash recovery, safe retries and background jobs on Celery and Redis.',
      'Built a visual workflow builder with triggers, conditions, delays and AI steps.',
      'Added an AI assistant that creates complete workflows from plain English descriptions.',
      'Connected agents to Google Workspace, Slack and MCP services through secure OAuth integrations.',
      'Added safety controls: tool permissions, human approvals, spend limits and audit logs.',
      'Set up Langfuse tracing and automated evaluations to catch quality issues before release.',
      'Developed the React frontend with live agent run updates over WebSockets.',
    ],
    stack: ['Python', 'LangGraph', 'LangChain', 'MCP', 'OpenAI', 'Anthropic', 'pgvector', 'Langfuse', 'Celery', 'Redis', 'React'],
  },
  {
    period: 'Jul 2025 to Feb 2026',
    title: 'Senior Software Engineer',
    company: 'StaxSol',
    location: 'Lahore, Pakistan',
    summary:
      'Led full stack development of a creator community platform with 600K+ monthly visits across web, iOS and Android, where creators publish content, chat with fans and run community events.',
    highlights: [
      'Delivered community events with virtual currency, voting and leaderboards for 100+ users.',
      'Built an AI web app that generates ready to publish social media posts, used for 10+ clients.',
      'Turned unclear rules into working logic: designed permission and age restriction rules for jointly owned content that behave the same for members and guests.',
      'Debugged production issues across 3 platforms: traced Sentry errors and data sync bugs on web, Android and iOS to root cause.',
      'Owned features end to end, reviewed code and coordinated frontend and backend releases.',
    ],
    stack: ['Vue.js', 'Nuxt.js', 'React', 'Ionic Capacitor', 'Python', 'Django REST Framework', 'PostgreSQL', 'Sentry'],
  },
  {
    period: 'Jun 2022 to Jun 2025',
    title: 'Software Engineer',
    company: 'StaxSol',
    location: 'Lahore, Pakistan',
    summary:
      'Built and scaled the creator platform’s web and mobile experience, from UI and UX design to REST API integration and real time features.',
    highlights: [
      'Fixed slow page loads and weak SEO by migrating the frontend from Vue.js to Nuxt.js with server side rendering.',
      'Cut initial page load by code splitting and lazy loading 13 profile sections, 15+ modals and the text editor.',
      'Designed the UI and UX for most platform screens and built them in Vue.js and React on REST APIs.',
      'Built WebSocket chat and notifications, role based auth, media upload, search and privacy settings.',
      'Delivered a React Native mobile app covering authentication, user matching and profile management.',
    ],
    stack: ['Vue.js', 'Nuxt.js', 'React', 'React Native', 'WebSockets', 'REST APIs'],
  },
  {
    period: 'Mar 2022 to May 2022',
    title: 'Software Engineer Intern',
    company: 'StaxSol',
    location: 'Lahore, Pakistan',
    summary: 'Started at StaxSol as an intern on the company’s own web presence.',
    highlights: ['Built the company website with Nuxt.js and reusable Vue components.'],
    stack: ['Nuxt.js', 'Vue.js'],
  },
]
