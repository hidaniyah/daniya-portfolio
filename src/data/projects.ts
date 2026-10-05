// Case-study data — each project is a piece on the home page and a full
// detail page at /work/[slug]. Add `image` (a path under /public, e.g.
// '/projects/character-platform.png') to replace the sketched preview.
// `github` and `demo` are optional: leave them out and the links are hidden.
export type MockVariant = 'profiles' | 'match' | 'assistant' | 'dashboard' | 'code' | 'mobile'

export type Category = 'Client work' | 'Personal'

export interface Project {
  slug: string
  category: Category
  title: string
  tagline: string
  year: string
  role: string
  summary: string
  description: string
  challenge: string
  architecture: string
  highlights: string[]
  impact: string[]
  stack: string[]
  github?: string
  demo?: string
  mock: MockVariant
  image?: string
  gallery: MockVariant[]
}

export const projects: Project[] = [
  {
    slug: 'ai-resume-analyzer',
    category: 'Personal',
    title: 'AI Resume Analyzer',
    tagline: 'Structured, actionable feedback on any résumé',
    year: '2026',
    role: 'Personal project, full stack build',
    summary:
      'A full stack app that uses an LLM to analyze résumés and return structured, actionable feedback.',
    description:
      'A full stack web app with a React frontend and a Node.js backend. Upload a résumé and it uses an LLM API, guided by careful prompt engineering, to return feedback that is structured and specific enough to act on.',
    challenge:
      'Free form model output is hard to trust and hard to display. The feedback needed a consistent shape every time so the interface could present it clearly, and it had to stay specific to the résumé instead of drifting into generic advice.',
    architecture:
      'The React frontend handles upload and presents the results. The Node.js backend extracts the résumé text, builds the prompt and calls the LLM API, asking for a fixed structure that the frontend can render section by section.',
    highlights: [
      'Prompts designed to return feedback in a consistent, structured format',
      'Results grouped into clear sections the reader can act on',
      'React frontend kept separate from a Node.js API that owns all model calls',
    ],
    impact: [
      'Turns a résumé into structured, actionable feedback in one step',
      'Hands on practice with LLM APIs and prompt engineering in a real app',
    ],
    stack: ['React', 'Node.js', 'LLM API', 'Prompt Engineering'],
    mock: 'assistant',
    gallery: ['assistant', 'code'],
  },
  {
    slug: 'social-post-generator',
    category: 'Client work',
    title: 'Social Post Generator',
    tagline: 'From a name and a link to a ready to publish post',
    year: '2022 to 2026',
    role: 'Built at StaxSol',
    summary:
      'A Python web app that turns basic client details into ready to publish social media posts.',
    description:
      'A Python web app built at StaxSol. Give it basic client details, like a name and a link, and it automatically produces social media posts that are ready to publish.',
    challenge:
      'Writing a post by hand for every client takes time. The app needed to take minimal input and still return posts that could go out without cleanup.',
    architecture:
      'A Python web app that collects the client details through a simple form and generates the finished posts from them.',
    highlights: [
      'Minimal input: a name and a link are enough',
      'Output is ready to publish without editing',
    ],
    impact: ['Turns client details into finished social media posts in one step'],
    stack: ['Python'],
    mock: 'code',
    gallery: ['code', 'assistant'],
  },
  {
    slug: 'homebakely',
    category: 'Personal',
    title: 'HomeBakely',
    tagline: 'Ordering from home bakers, made simple',
    year: '2022',
    role: 'Final year project, full stack build',
    summary:
      'A full stack food ordering platform for ordering baked goods from home bakers.',
    description:
      'My final year project: a full stack food ordering platform that connects customers with home bakers, built with a Vue 3 frontend and a Python backend.',
    challenge:
      'Home bakers usually take orders through messages and phone calls. The platform had to give them a simple way to list what they bake and receive orders, while giving customers an easy way to browse and order.',
    architecture:
      'A Vue 3 frontend for browsing bakers and placing orders, backed by a Python service that exposes REST APIs for listings and orders.',
    highlights: [
      'Browse home bakers and their products',
      'Place and track orders from one place',
      'Vue 3 frontend talking to a Python REST API',
    ],
    impact: [
      'Completed as my BSCS final year project at Kinnaird College for Women University',
      'First full stack product I designed and built end to end',
    ],
    stack: ['Vue 3', 'Python', 'REST API'],
    mock: 'dashboard',
    gallery: ['dashboard', 'mobile'],
  },
]

