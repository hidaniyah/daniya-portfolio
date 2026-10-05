// Home-page sections, in page order. Used by the header nav and
// active-section tracking.
export const sections = [
  { id: 'about', label: 'about' },
  { id: 'work', label: 'work' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact' },
] as const

export const sectionIds = sections.map((s) => s.id)
