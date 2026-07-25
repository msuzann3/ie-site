'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'What we do', href: '/#what-we-do' },
  { label: 'Ways of work', href: '/#ways-of-work' },
  { label: 'Who we are', href: '/#team' },
  { label: 'Speaking', href: '/speaking' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 h-16 bg-midnight/[0.97] backdrop-blur-[12px] border-b border-white/10 px-5 md:px-10 flex items-center justify-between"
        style={{ fontFamily: 'var(--font-outfit)' }}
      >
        <Link
          href="/"
          className="font-display text-[18px] font-normal text-white tracking-[-0.3px]"
          onClick={close}
        >
          I<span className="text-emerald">+</span>E&nbsp;&nbsp;Innovate{' '}
          <span className="text-emerald hidden sm:inline">+</span>
          <span className="text-emerald hidden sm:inline"> Elevate</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive =
              pathname === href ||
              (href !== '/' && !href.includes('#') && pathname.startsWith(href))
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-[13px] transition-colors duration-150 ${
                    isActive ? 'text-white/90' : 'text-white/50 hover:text-white/90'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-block text-[13px] font-medium text-white py-[9px] px-5 rounded-3xl transition-colors duration-150 bg-emerald hover:bg-emerald-mid"
        >
          Get in touch
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] text-white/75 hover:text-white transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="fixed top-16 inset-x-0 z-40 bg-midnight/[0.98] border-b border-white/10 md:hidden">
          <ul className="flex flex-col list-none px-5 pt-2 pb-5">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-3.5 text-[15px] text-white/65 border-b border-white/[0.07] last:border-0 hover:text-white transition-colors"
                  onClick={close}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="#contact"
                className="block text-center text-[14px] font-medium text-white py-3 rounded-[32px] transition-colors duration-150 bg-emerald hover:bg-emerald-mid"
                onClick={close}
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
