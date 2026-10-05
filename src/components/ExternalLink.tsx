/**
 * Inline text link. http(s) links open in a new tab with a small ↗ marker;
 * mailto and same-site links stay plain.
 */
export default function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const external = /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`link ${className}`}
    >
      {children}
      {external && (
        <span aria-hidden="true" className="ml-0.5 text-sm">
          ↗
        </span>
      )}
    </a>
  )
}
