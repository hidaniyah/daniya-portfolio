import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Work from '@/sections/Work'
import Experience from '@/sections/Experience'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <div className="mx-auto max-w-6xl px-6">
        <About />
        <Work />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}
