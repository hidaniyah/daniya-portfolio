import Link from 'next/link'

export const metadata = { title: '404' }

/** Custom 404. */
export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-md">
        The page you were looking for doesn&apos;t exist or has moved.
      </p>
      <p className="mt-8 flex gap-6 text-sm">
        <Link href="/" className="link">
          Back home
        </Link>
        <Link href="/#work" className="link">
          See projects
        </Link>
      </p>
    </main>
  )
}
