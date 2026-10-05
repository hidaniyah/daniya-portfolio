import { FiArrowUpRight } from 'react-icons/fi'
import { externalLinkProps, isHttpLink } from '../../utils/href'

/**
 * Inline text link. http(s) links open in a new tab and get a small arrow
 * that nudges on hover; mailto/anchor links stay plain.
 */
export default function ExternalLink({ href, children, className = '', ...rest }) {
  return (
    <a
      href={href}
      {...externalLinkProps(href)}
      {...rest}
      className={`group inline-flex items-center gap-0.5 link ${className}`}
    >
      {children}
      {isHttpLink(href) && (
        <FiArrowUpRight
          aria-hidden="true"
          className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
        />
      )}
    </a>
  )
}
