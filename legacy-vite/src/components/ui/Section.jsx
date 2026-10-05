/**
 * Page section with a consistent heading. Sections are separated by a hairline
 * rule so the page reads as one continuous document.
 */
export default function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-14 sm:py-16">
      <h2 id={`${id}-title`} className="mb-8 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
        {title}
      </h2>
      {children}
    </section>
  )
}
