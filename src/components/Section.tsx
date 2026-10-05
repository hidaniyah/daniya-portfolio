import Reveal from './Reveal'

/**
 * Home-page section: a large heading and an optional intro line.
 */
export default function Section({
  id,
  title,
  intro,
  center = false,
  children,
}: {
  id: string
  title: string
  intro?: string
  center?: boolean
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-10 sm:py-14">
      <Reveal className={`mb-10 ${center ? 'text-center' : ''}`}>
        <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro && (
          <p className={`mt-4 max-w-2xl text-muted ${center ? 'mx-auto' : ''}`}>{intro}</p>
        )}
      </Reveal>
      {children}
    </section>
  )
}
