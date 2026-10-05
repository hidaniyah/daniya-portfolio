import Section from '../ui/Section'

/**
 * About: a few short paragraphs in the first person.
 */
export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-4">
        <p>
          I&apos;m a full stack engineer who likes building web applications that
          are fast, reliable and pleasant to use. Most of my work spans the whole
          stack — designing REST APIs in Python and building the interfaces on top
          of them in React, Next.js, Vue and Nuxt.
        </p>
        <p>
          I&apos;ve spent a lot of time in Vue 2 and Vue 3 codebases, bringing in
          the Composition API while keeping legacy Options API code healthy. On
          the React side I build with Next.js for performant, SEO-friendly pages.
        </p>
        <p>
          I enjoy taking a messy problem and turning it into something clean and
          maintainable, and I work closely with designers and backend engineers
          to get there.
        </p>
      </div>
    </Section>
  )
}
