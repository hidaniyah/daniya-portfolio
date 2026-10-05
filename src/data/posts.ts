// Blog-ready architecture: posts are typed data today; swap this module for
// MDX/CMS later without touching the routes that render it.
export interface Post {
  slug: string
  title: string
  date: string
  readingTime: string
  excerpt: string
  body: string[] // paragraphs
}

export const posts: Post[] = [
  {
    slug: 'calm-interfaces',
    title: 'Calm interfaces are an engineering choice',
    date: '2026-02-03',
    readingTime: '4 min',
    excerpt:
      'Why "feels fast" and "feels quiet" are properties of the architecture, not the CSS, and how performance budgets keep design promises honest.',
    body: [
      'When an interface feels frantic, the instinct is to blame the design. More often the culprit lives lower: layout shift from images without dimensions, spinners where optimistic UI belonged, animation jank from work scheduled on the wrong thread.',
      'Calm is a systems property. It comes from streaming what can be streamed, deferring what is not visible, and refusing to ship interactions that cannot hit their frame budget on a mid range phone.',
      'Design sets the intention; engineering keeps the promise. A performance budget in CI does more for how a product feels than any easing curve ever will.',
    ],
  },
]
