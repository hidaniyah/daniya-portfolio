import { FiCpu, FiLayout, FiLayers } from 'react-icons/fi'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import { profile } from '@/data/profile'

const years = new Date().getFullYear() - profile.since

const expertise = [
  {
    icon: FiLayers,
    title: 'Full Stack Development',
    body: 'Features owned end to end, from requirements and Python REST APIs to the interface, release and production support, including real time messaging over WebSockets.',
    stack: ['JavaScript', 'TypeScript', 'Python', 'Django', 'REST APIs', 'WebSockets'],
  },
  {
    icon: FiLayout,
    title: 'Frontend and Mobile',
    body: 'Responsive interfaces in Vue and Nuxt or React and Next.js, with server side rendering for SEO and well structured state, plus mobile apps in React Native.',
    stack: ['Vue', 'Nuxt', 'React', 'Next.js', 'React Native', 'Pinia', 'Redux'],
  },
  {
    icon: FiCpu,
    title: 'AI Engineering',
    body: 'Agents that do real work: tool calling, runtime tool discovery and agent to agent delegation, connected to real apps through MCP, with tracing and evaluation in production.',
    stack: ['LangGraph', 'LangChain', 'MCP', 'OpenAI', 'Anthropic', 'pgvector', 'Langfuse'],
  },
]

/** About: a short bio, then three expertise boxes joined into one panel. */
export default function About() {
  return (
    <Section
      id="about"
      title="About"
      intro={`${years}+ years building and maintaining production web and mobile applications across the whole stack, including four years as the primary engineer on a large client platform.`}
      center
    >
      <Reveal>
        <div className="grid overflow-hidden rounded-xl border border-line md:grid-cols-3">
          {expertise.map(({ icon: Icon, title, body, stack }, i) => (
            <div
              key={title}
              className={`group relative flex flex-col items-center bg-raise p-8 text-center transition-colors hover:bg-raise/60 ${
                i > 0 ? 'border-t border-line md:border-l md:border-t-0' : ''
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent-strong transition-transform duration-300 group-hover:scale-x-100"
              />
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-strong/20 to-accent-strong/5 ring-1 ring-accent-strong/20 transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{title}</h3>
              <p className="mt-3">{body}</p>
              {/* mt-auto pins the badges to the bottom so all three cards line up. */}
              <ul className="mt-auto flex flex-wrap justify-center gap-1.5 pt-6">
                {stack.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
