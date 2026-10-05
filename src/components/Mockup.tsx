import type { MockVariant } from '@/data/projects'

/* CSS-drawn interface sketches, used as a project preview until a real
   screenshot is added. Purely decorative; hidden from assistive tech. */

function Bar() {
  return (
    <div className="flex gap-1.5 border-b border-line px-3.5 py-3">
      <i className="h-2 w-2 rounded-full bg-line" />
      <i className="h-2 w-2 rounded-full bg-line" />
      <i className="h-2 w-2 rounded-full bg-line" />
    </div>
  )
}

function Profiles() {
  return (
    <div className="grid min-h-64 grid-cols-[84px_1fr] gap-4 p-5">
      <div className="flex flex-col gap-3 border-r border-line pr-3.5">
        <i className="h-2 w-3/5 rounded bg-accent/70" />
        {[...Array(4)].map((_, i) => (
          <i key={i} className="h-2 rounded bg-ink/10" />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 rounded-lg border border-line bg-ink/5 p-3"
          >
            <i
              className={`h-8 w-8 rounded-full ${i === 0 ? 'border border-accent/40 bg-accent/30' : 'bg-ink/10'}`}
            />
            <i className="h-1.5 w-4/5 rounded bg-ink/10" />
          </div>
        ))}
      </div>
    </div>
  )
}

function Match() {
  return (
    <div className="flex min-h-64 items-center justify-center gap-4 p-5">
      <div className="w-1/3 rounded-xl border border-line bg-ink/5 p-3">
        <i className="mb-2 block h-24 rounded-lg bg-ink/10" />
        <i className="mb-1.5 block h-2 w-2/3 rounded bg-ink/15" />
        <i className="block h-1.5 w-1/2 rounded bg-ink/10" />
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/15 font-mono text-sm text-accent">
        ♥
      </div>
      <div className="w-1/3 rounded-xl border border-line bg-ink/5 p-3">
        <i className="mb-2 block h-24 rounded-lg bg-accent/15" />
        <i className="mb-1.5 block h-2 w-2/3 rounded bg-ink/15" />
        <i className="block h-1.5 w-1/2 rounded bg-ink/10" />
      </div>
    </div>
  )
}

function Assistant() {
  return (
    <div className="flex min-h-64 flex-col justify-end gap-3 p-5">
      <div className="max-w-[70%] self-start rounded-xl rounded-bl-sm border border-line bg-ink/5 p-3">
        <i className="mb-1.5 block h-1.5 w-40 rounded bg-ink/15" />
        <i className="block h-1.5 w-28 rounded bg-ink/10" />
      </div>
      <div className="max-w-[70%] self-end rounded-xl rounded-br-sm border border-accent/25 bg-accent/10 p-3">
        <i className="mb-1.5 block h-1.5 w-36 rounded bg-accent/40" />
        <i className="mb-1.5 block h-1.5 w-44 rounded bg-accent/25" />
        <i className="block h-1.5 w-24 rounded bg-accent/25" />
      </div>
      <div className="mt-2 flex items-center gap-2 rounded-full border border-line bg-ink/5 px-4 py-2.5">
        <i className="h-1.5 flex-1 rounded bg-ink/10" />
        <i className="h-5 w-5 rounded-full bg-accent/60" />
      </div>
    </div>
  )
}

function Dashboard() {
  const bars = [40, 65, 45, 80, 55, 90, 70]
  return (
    <div className="flex min-h-64 flex-col gap-4 p-5">
      <div className="grid grid-cols-3 gap-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="rounded-lg border border-line bg-ink/5 p-3">
            <i className="mb-2 block h-1.5 w-1/2 rounded bg-ink/10" />
            <i
              className={`block h-2.5 w-2/3 rounded ${i === 1 ? 'bg-accent/50' : 'bg-ink/15'}`}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-end gap-2.5 rounded-lg border border-line bg-ink/5 p-4">
        {bars.map((h, i) => (
          <i
            key={i}
            style={{ height: `${h}%` }}
            className={`flex-1 rounded-t ${i === 5 ? 'bg-accent/60' : 'bg-ink/15'}`}
          />
        ))}
      </div>
    </div>
  )
}

function Code() {
  const widths = ['w-2/3', 'w-1/2', 'w-4/5', 'w-1/3', 'w-3/5', 'w-1/2', 'w-2/5']
  return (
    <div className="flex min-h-64 flex-col gap-3 p-5 pt-6">
      {widths.map((w, i) => (
        <div key={i} className="flex items-center gap-3">
          <i className="w-4 shrink-0 font-mono text-[10px] not-italic text-muted/50">
            {i + 1}
          </i>
          <i
            className={`h-2 rounded ${w} ${i === 2 || i === 5 ? 'bg-accent/40' : 'bg-ink/12'}`}
          />
        </div>
      ))}
    </div>
  )
}

function Mobile() {
  return (
    <div className="flex min-h-64 items-center justify-center p-5">
      <div className="w-32 rounded-[1.4rem] border border-line bg-ink/5 p-2.5">
        <i className="mx-auto mb-2 block h-1 w-10 rounded bg-ink/15" />
        <i className="mb-2 block h-16 rounded-lg bg-accent/15" />
        <div className="flex flex-col gap-1.5">
          {[...Array(3)].map((_, i) => (
            <i key={i} className="block h-6 rounded-md border border-line bg-ink/5" />
          ))}
        </div>
        <i className="mx-auto mt-2.5 block h-6 w-6 rounded-full bg-accent/50" />
      </div>
    </div>
  )
}

const variants: Record<MockVariant, () => React.JSX.Element> = {
  profiles: Profiles,
  match: Match,
  assistant: Assistant,
  dashboard: Dashboard,
  code: Code,
  mobile: Mobile,
}

export default function Mockup({ variant }: { variant: MockVariant }) {
  const Body = variants[variant]
  return (
    <div aria-hidden="true" className="flex h-full flex-col bg-raise">
      <Bar />
      <div className="flex flex-1 flex-col justify-center">
        <Body />
      </div>
    </div>
  )
}
