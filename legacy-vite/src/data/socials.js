import { personal } from './personal'

// Links reused by the intro, Contact section and footer.
export const socials = [
  { id: 'github', label: 'GitHub', href: personal.socials.github },
  { id: 'linkedin', label: 'LinkedIn', href: personal.socials.linkedin },
  { id: 'email', label: 'Email', href: `mailto:${personal.email}` },
]
