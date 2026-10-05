// Generates public/resume.pdf — a clean one-page resume — using only Node's
// stdlib (no external deps). Run with: `node scripts/generate-resume.mjs`.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(__dirname, '../public/resume.pdf')

// Colors (r g b, 0-1)
const V = '0.545 0.361 0.965' // violet
const C = '0.024 0.714 0.831' // cyan
const D = '0.10 0.12 0.20' // dark text
const G = '0.42 0.45 0.55' // gray

const lines = []
const add = (x, y, f, s, col, text) => lines.push({ x, y, f, s, col, text })
const rule = (y) => lines.push({ rule: y })
const heading = (y, text) => {
  add(60, y, 'B', 12, C, text.toUpperCase())
  rule(y - 6)
}
const bullet = (y, text) => {
  add(66, y, 'R', 10, G, '-')
  add(80, y, 'R', 10, D, text)
}

// ---- Header ----
add(60, 770, 'B', 26, D, 'Syeda Daniya Fatima')
add(60, 748, 'R', 12, V, 'Full Stack Software Engineer')
add(
  60,
  730,
  'R',
  9.5,
  G,
  'daniya.fatima@example.com  |  github.com/daniyafatima  |  linkedin.com/in/daniyafatima  |  Remote'
)

// ---- Summary ----
heading(700, 'Summary')
add(60, 684, 'R', 10, G, 'Full Stack Software Engineer building scalable web applications with React, Next.js, Vue.js,')
add(60, 670, 'R', 10, G, 'Nuxt.js and Python. I craft intuitive user experiences backed by reliable, well-tested systems.')

// ---- Skills ----
heading(640, 'Skills')
add(60, 624, 'B', 10, D, 'Frontend:')
add(130, 624, 'R', 10, G, 'React, Next.js, Vue.js 2/3, Nuxt.js, JavaScript, HTML, CSS, Tailwind CSS')
add(60, 608, 'B', 10, D, 'Backend:')
add(130, 608, 'R', 10, G, 'Python, Django, REST APIs')
add(60, 592, 'B', 10, D, 'Tools:')
add(130, 592, 'R', 10, G, 'Git, GitHub, Vercel, Postman, npm, Yarn')
add(60, 576, 'B', 10, D, 'Concepts:')
add(130, 576, 'R', 10, G, 'Composition API, Options API, Responsive Design, Auth, Performance')

// ---- Experience ----
heading(546, 'Experience')
add(60, 530, 'B', 11, D, 'Full Stack Software Engineer')
add(60, 516, 'R', 9.5, V, '2023 - Present')
let y = 500
for (const t of [
  'Built responsive web applications and reusable UI component libraries.',
  'Integrated REST APIs and implemented authentication flows.',
  'Improved application performance and Core Web Vitals.',
  'Worked across Vue 2 and Vue 3 with the Composition API.',
  'Built and shipped applications using React and Next.js.',
  'Collaborated closely with designers and backend developers.',
]) {
  bullet(y, t)
  y -= 15
}

add(60, y - 8, 'B', 11, D, 'Frontend Developer')
add(60, y - 22, 'R', 9.5, V, '2022 - 2023')
let y2 = y - 38
for (const t of [
  'Migrated legacy Options API components to the Composition API.',
  'Implemented design systems with Tailwind CSS.',
  'Optimized bundle size and lazy-loaded heavy routes.',
]) {
  bullet(y2, t)
  y2 -= 15
}

// ---- Projects ----
heading(y2 - 14, 'Selected Projects')
let py = y2 - 30
for (const [name, desc] of [
  ['Character Management Platform', 'Vue 3, Nuxt, Python - profiles, uploads, search, tags, auth.'],
  ['Dating Application', 'React, Next.js - auth, profiles, responsive design, API integration.'],
  ['Vue Modernization', 'Vue 2/3 - Composition API migration maintaining legacy code.'],
]) {
  add(60, py, 'B', 10, D, name)
  add(60, py - 13, 'R', 9.5, G, desc)
  py -= 34
}

// ---- Assemble PDF ----
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')

const content = lines
  .map((item) => {
    if (item.rule !== undefined) {
      const yy = item.rule
      return `0.85 0.85 0.88 RG 1 w 60 ${yy} m 535 ${yy} l S`
    }
    const { x, y, f, s, col, text } = item
    return `BT /${f} ${s} Tf ${col} rg ${x} ${y} Td (${esc(text)}) Tj ET`
  })
  .join('\n')

const stream = Buffer.from(content, 'latin1')

const objects = [
  Buffer.from('<< /Type /Catalog /Pages 2 0 R >>'),
  Buffer.from('<< /Type /Pages /Kids [3 0 R] /Count 1 >>'),
  Buffer.from(
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] ' +
      '/Resources << /Font << /R 5 0 R /B 6 0 R >> >> /Contents 4 0 R >>'
  ),
  Buffer.concat([
    Buffer.from(`<< /Length ${stream.length} >>\nstream\n`),
    stream,
    Buffer.from('\nendstream'),
  ]),
  Buffer.from('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'),
  Buffer.from('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>'),
]

let pdf = Buffer.from('%PDF-1.4\n')
const offsets = []
objects.forEach((obj, i) => {
  offsets.push(pdf.length)
  pdf = Buffer.concat([
    pdf,
    Buffer.from(`${i + 1} 0 obj\n`),
    obj,
    Buffer.from('\nendobj\n'),
  ])
})

const xrefPos = pdf.length
let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
for (const off of offsets) xref += `${String(off).padStart(10, '0')} 00000 n \n`
xref += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`

pdf = Buffer.concat([pdf, Buffer.from(xref)])
writeFileSync(OUT, pdf)
console.log(`wrote ${OUT} (${pdf.length} bytes)`)
