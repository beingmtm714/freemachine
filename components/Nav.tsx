'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
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

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        Free<span>Machine</span>
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
