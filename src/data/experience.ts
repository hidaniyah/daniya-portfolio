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
    period: 'Aug 2026 to Present',
    title: 'Software Engineer III',
    company: 'Lexpool',
    location: 'Lahore, Pakistan',
    summary:
      'I build Lexpool’s AI agent platform, where people describe an agent or workflow in plain English and get one that runs against their real tools.',
    highlights: [
      'Building LLM agents with LangGraph and LangChain that plan, call tools and delegate to other agents, running on Celery workers and streaming progress to the browser over WebSockets.',
      'Integrating the Model Context Protocol (MCP) so agents can securely act in apps like Gmail, Google Calendar, Google Sheets and Slack, with per app permissions and encrypted credentials.',
      'Working on just in time tool discovery: agents search the tool catalog by meaning (OpenAI embeddings in pgvector) and load only what a task needs, keeping context lean.',
      'Adding LLM observability with Langfuse: a trace of every agent run, plus deterministic scores for tool selection, tool arguments and task success.',
      'Breaking down product requirements into clearly scoped technical tasks, bridging product intent and engineering execution.',
    ],
    stack: ['Python', 'Django', 'LangGraph', 'LangChain', 'MCP', 'OpenAI', 'Anthropic', 'pgvector', 'Langfuse', 'Celery'],
  },
  {
    period: 'Mar 2022 to Aug 2026',
    title: 'Software Engineer',
    company: 'StaxSol',
    location: 'Lahore, Pakistan',
    summary:
      'Joined as a software engineering intern (Mar to May 2022) and became the primary full stack engineer on the company’s flagship multi year client platform, a large creator community web application.',
    highlights: [
      'Owned development of the flagship platform from requirements through release and long term production support.',
      'Built highly customisable profile pages with configurable sections, image galleries, moodboards and colour theming, plus linked project pages that group related profiles.',
      'Developed content organisation and discovery tools: nested folders with drag and drop reordering, custom tags and tag based search.',
      'Implemented privacy and safety controls, including private, unlisted and public visibility, mature content flags and content warnings.',
      'Built community features such as comments, follows, quizzes, prompts and events to drive user engagement.',
      'Built a real time, WhatsApp style chat using WebSockets, delivering messages and conversation updates instantly without page reloads.',
      'Led the migration from Vue.js to Nuxt.js, adopting server side rendering and file based routing to improve SEO, route structure and page load performance.',
      'Designed a scalable Pinia state management layer to keep complex, data heavy workflows consistent across the application.',
      'Kept the codebase healthy through refactoring, performance tuning and code reviews.',
      'Also contributed to a mobile dating app with a unique balloon popping matching mechanism, built with React Native and Django.',
      'Built a Python web app that turns basic client details, like a name and a link, into ready to publish social media posts.',
    ],
    stack: ['Vue', 'Nuxt', 'Pinia', 'Python', 'Django', 'WebSockets', 'React Native'],
  },
]
