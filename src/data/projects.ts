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
    slug: 'social-post-generator',
    category: 'Client work',
    title: 'AI Social Media Content Engine',
    tagline: 'From a client’s website to ready to publish, on brand posts',
    year: '2025 to 2026',
    role: 'Generative AI, built at StaxSol',
    summary:
      'An AI pipeline that turns a client’s website and niche into ready to publish, on brand social posts.',
    description:
      'An AI pipeline built at StaxSol that turns a client’s website and niche into ready to publish, on brand social posts. It has produced content for 10+ clients across healthcare, food, construction and real estate.',
    challenge:
      'Every client needs posts that sound like their brand, show their real logo and stay within the rules of their industry. Healthcare and weight loss content in particular cannot make medical claims or guarantees, so output had to be checked before it could go out.',
    architecture:
      'A Python pipeline that scrapes the client’s website, runs search grounded research on their niche, writes posts with Gemini on Vertex AI and renders images with Nano Banana and Veo, then composites the real brand logo with Pillow. Per client prompts return structured JSON for captions, headlines, hashtags and visual scenes.',
    highlights: [
      'End to end pipeline: website scraping, search grounded niche research, LLM post writing and AI image rendering with the real brand logo added',
      'Per client prompts and structured JSON outputs for captions, headlines, hashtags and visual scenes',
      'Automated compliance check that blocks risky claims, such as medical and weight loss guarantees, adds required disclaimers and regenerates failed posts',
    ],
    impact: [
      'Used to produce content for 10+ clients',
      'Covers healthcare, food, construction and real estate',
    ],
    stack: ['Python', 'Gemini', 'Vertex AI', 'Nano Banana', 'Veo', 'Prompt Engineering', 'Structured Outputs', 'Pillow'],
    mock: 'code',
    gallery: ['code', 'assistant'],
  },
  {
    slug: 'ai-resume-analyzer',
    category: 'Personal',
    title: 'AI Resume Analyzer',
    tagline: 'Clear, structured feedback on any résumé',
    year: '2026',
    role: 'Personal project, full stack build',
    summary: 'A web app that reviews résumés and gives clear, structured feedback.',
    description:
      'A web app with a React frontend and a Node.js backend that reads and parses résumés, then uses an LLM to return strengths, gaps and suggested improvements.',
    challenge:
      'Free form model output is hard to trust and hard to display. The feedback needed a consistent shape every time so the interface could present it clearly, and it had to stay specific to the résumé instead of drifting into generic advice.',
    architecture:
      'The React frontend handles upload and presents the results. The Node.js backend reads and parses the résumé, builds the prompt and calls the LLM API, asking for a fixed structure that the frontend can render section by section.',
    highlights: [
      'Node.js backend that reads and parses résumés',
      'Prompts that return strengths, gaps and suggested improvements',
      'React frontend that presents each part of the feedback clearly',
    ],
    impact: [
      'Turns a résumé into structured, actionable feedback in one step',
      'Hands on practice with LLM APIs and prompt engineering in a real app',
    ],
    stack: ['React', 'Node.js', 'LLM APIs', 'Prompt Engineering'],
    mock: 'assistant',
    gallery: ['assistant', 'code'],
  },
  {
    slug: 'homebakely',
    category: 'Personal',
    title: 'HomeBakely',
    tagline: 'Ordering from home bakers, made simple',
    year: '2022',
    role: 'Final year project, full stack build',
    summary: 'A marketplace where customers order baked goods from home bakers.',
    description:
      'My final year project: a marketplace where customers order baked goods from home bakers, built with a Vue 3 frontend and a Python backend.',
    challenge:
      'Home bakers usually take orders through messages and phone calls. The platform had to give them a simple way to list what they bake and receive orders, while giving customers an easy way to browse and order.',
    architecture:
      'A Vue 3 frontend with menus, a cart and separate customer and baker views, backed by a Python service that exposes REST APIs for accounts, menus and orders.',
    highlights: [
      'Vue 3 frontend with menus, cart and separate customer and baker views',
      'Python backend and REST APIs for accounts, menus and orders',
    ],
    impact: [
      'Completed as my BSCS final year project at Kinnaird College for Women University',
      'First full stack product I designed and built end to end',
    ],
    stack: ['Vue 3', 'Python', 'REST APIs'],
    mock: 'dashboard',
    gallery: ['dashboard', 'mobile'],
  },
]

