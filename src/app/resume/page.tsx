import type { Metadata } from 'next'
import { FiDownload, FiExternalLink, FiFileText } from 'react-icons/fi'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Résumé',
  description: `Résumé of ${profile.name}, ${profile.role}.`,
}

/**
 * Résumé viewer. Desktop browsers render the PDF inline; phones (which
 * mostly can't embed PDFs) get a card that opens it in the native viewer.
 * To update, replace /public/resume.pdf — nothing else needs to change.
 */
export default function ResumePage() {
  const file = profile.resumeUrl
  const fileName = `${profile.name.replace(/\s+/g, '-')}-Resume.pdf`

  return (
    <main id="main" className="mx-auto max-w-5xl px-6 pb-20 pt-12 sm:pt-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-sm font-medium text-accent">Résumé</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{profile.name}</h1>
          <p className="mt-2 text-muted">{profile.role}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={file} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <FiExternalLink className="h-4 w-4" />
            Open in new tab
          </a>
          <a href={file} download={fileName} className="btn-primary">
            <FiDownload className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </div>

      {/* Inline viewer (tablet and up) */}
      <div className="card mt-10 hidden overflow-hidden p-2 md:block">
        <object
          data={`${file}#view=FitH&toolbar=1`}
          type="application/pdf"
          aria-label={`Résumé of ${profile.name}`}
          className="h-[80vh] min-h-[640px] w-full rounded-xl bg-bg"
        >
          <Fallback file={file} />
        </object>
      </div>

      {/* Phones */}
      <div className="mt-10 md:hidden">
        <Fallback file={file} />
      </div>
    </main>
  )
}

function Fallback({ file }: { file: string }) {
  return (
    <div className="card flex flex-col items-center px-6 py-14 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <FiFileText className="h-5 w-5" />
      </span>
      <p className="mt-4 font-medium text-ink">View the résumé as a PDF</p>
      <p className="mt-1 max-w-xs text-sm text-muted">
        It opens in your device&apos;s PDF viewer, where you can zoom and save it.
      </p>
      <a href={file} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
        Open résumé
      </a>
    </div>
  )
}
