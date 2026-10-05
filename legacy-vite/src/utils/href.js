// Single source of truth for link behavior. Only real http(s) links should
// open in a new tab; `mailto:`/anchor links stay in the same context (opening
// a blank tab for a mailto is a known UX annoyance).
export function isHttpLink(href = '') {
  return /^https?:\/\//.test(href)
}

// Props to spread onto an <a> so external links open safely in a new tab.
export function externalLinkProps(href) {
  return isHttpLink(href)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}
}
