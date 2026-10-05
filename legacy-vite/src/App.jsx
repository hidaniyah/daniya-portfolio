import Header from './components/Header'
import Intro from './components/sections/Intro'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'
import { navLinks } from './data/navLinks'

// Section ids observed for the active-nav indicator.
const sectionIds = navLinks.map((link) => link.id)

export default function App() {
  const { toggleTheme, isDark } = useTheme()
  const activeSection = useActiveSection(sectionIds)

  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-bg focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <Header activeSection={activeSection} isDark={isDark} onToggleTheme={toggleTheme} />

      <main id="main" className="mx-auto max-w-3xl px-6">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
