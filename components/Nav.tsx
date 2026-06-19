'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '/programs', label: 'Programs' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/press', label: 'Press' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <img src="/images/favicon-192.png" alt="Free Machine" className={styles.logoIcon} />
      </Link>

      <div className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={styles.link}
            aria-current={pathname === href ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>

      <button
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span className={`${styles.bar} ${open ? styles.barOpen : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barOpen : ''}`} />
      </button>
    </nav>
  )
}
