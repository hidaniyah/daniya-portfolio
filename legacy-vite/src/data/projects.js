// Portfolio projects, in display order. `image` is optional (a path under
// /public, e.g. '/projects/characters.png'); without it a plain typographic
// preview is shown. `year` and `role` add context to each piece.
export const projects = [
  {
    id: 'character-platform',
    title: 'Character Management Platform',
    year: '2024',
    role: 'Full stack',
    description:
      'A platform for creating, organizing and discovering original characters, with rich profiles, image uploads, tagging and search.',
    stack: ['Vue 3', 'Nuxt', 'Python', 'REST API'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    id: 'dating-app',
    title: 'Dating Application',
    year: '2023',
    role: 'Frontend',
    description:
      'A matchmaking app with secure authentication, detailed user profiles, a match system and a fully responsive interface.',
    stack: ['React', 'Next.js'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    id: 'vue-modernization',
    title: 'Vue Modernization',
    year: '2023',
    role: 'Frontend',
    description:
      'Moved a production app from Vue 2 to Vue 3 incrementally, introducing the Composition API while keeping legacy Options API code working.',
    stack: ['Vue 2', 'Vue 3', 'JavaScript'],
    github: 'https://github.com/',
  },
]
