'use client'

import { FiArrowUp } from 'react-icons/fi'
import { useScrollThreshold } from '@/lib/useScrollThreshold'

/** Square back-to-top button, shown once the reader is a screen down. */
export default function BackToTop() {
  const show = useScrollThreshold(700)

  return (
    <a
      href="#"
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-raise text-accent shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 ${
        show ? 'opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <FiArrowUp className="h-5 w-5" />
    </a>
  )
}
