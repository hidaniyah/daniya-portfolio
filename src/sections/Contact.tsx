import Image from 'next/image'
import Link from 'next/link'
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import CopyEmail from '@/components/CopyEmail'
import Reveal from '@/components/Reveal'
import { profile } from '@/data/profile'

const socialIcons: Record<string, typeof FiGithub> = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
}

/**
 * Contact: one compact panel with the email and socials beside a small résumé card.
 */
export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-10 sm:py-14">
      <Reveal className="grid gap-8 rounded-xl border border-line bg-raise p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
        {/* Invitation */}
        <div>
          <h2 id="contact-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact
          </h2>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <FiMail className="h-4 w-4" /> {profile.email}
            </a>
            <CopyEmail email={profile.email} />
          </div>

          <ul className="mt-6 flex flex-wrap gap-6 font-mono text-sm">
            {profile.socials.map(({ label, href }) => {
              const Icon = socialIcons[label] ?? FiGithub
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-body transition-colors hover:text-cyan"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Résumé card. Regenerate resume-preview.png whenever resume.pdf changes. */}
        <div className="flex items-center gap-6 rounded-xl bg-gradient-to-br from-accent-strong to-[#5b21b6] p-6 text-white">
          <Link
            href="/resume"
            aria-label="View résumé"
            className="group block w-24 shrink-0 overflow-hidden rounded-md shadow-lg shadow-black/30 ring-1 ring-white/20"
          >
            <Image
              src="/resume-preview.png"
              alt=""
              width={848}
              height={1200}
              className="w-full transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <div>
            <h3 className="text-lg font-semibold text-white">Résumé</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/resume"
                className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-accent-strong transition hover:-translate-y-px"
              >
                View
              </Link>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-px hover:border-white"
              >
                <FiDownload className="h-4 w-4" /> PDF
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
