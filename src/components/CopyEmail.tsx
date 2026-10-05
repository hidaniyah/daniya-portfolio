'use client'

import { useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi'

/** Copies the email address to the clipboard with brief confirmation. */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — the mailto button still works */
    }
  }

  return (
    <button type="button" onClick={copy} className="btn-secondary">
      {copied ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  )
}
