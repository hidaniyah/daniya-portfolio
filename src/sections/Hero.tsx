import {
  SiDjango,
  SiLangchain,
  SiNextdotjs,
  SiNuxt,
  SiPinia,
  SiPython,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import { profile } from '@/data/profile'

const stack = [
  { name: 'Vue', icon: SiVuedotjs },
  { name: 'Nuxt', icon: SiNuxt },
  { name: 'Pinia', icon: SiPinia },
  { name: 'React', icon: SiReact },
  { name: 'React Native', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'Django', icon: SiDjango },
  { name: 'LangGraph', icon: SiLangchain },
]

// Staggered page-load entrance; see `.rise` in globals.css.
const delay = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

/**
 * Opening: name set large, role in mono, intro, and the stack as a row of logos. The backdrop is a static grid with one glow.
 */
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      {/* Backdrop: faint grid fading out, one violet glow. Decorative only. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-24 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent-strong/25 blur-3xl"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-32">
        <h1
          style={delay(0)} className="rise text-5xl font-bold uppercase tracking-tight sm:text-6xl"
        >
          {profile.name}
        </h1>
        <p
          style={delay(160)} className="rise mt-5 font-mono text-sm uppercase tracking-[0.2em] text-body sm:text-base"
        >
          {profile.role}
        </p>
        <p style={delay(240)} className="rise mt-6 max-w-xl">
          {profile.intro}
        </p>

        <div style={delay(320)} className="rise mt-16 w-full">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted">What I build with</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-6">
            {stack.map(({ name, icon: Icon }) => (
              <li key={name} className="flex items-center gap-2 text-muted transition-colors hover:text-ink">
                <Icon className="h-6 w-6" aria-hidden="true" />
                <span className="text-sm">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
