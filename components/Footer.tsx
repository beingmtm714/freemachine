import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/images/favicon-192.png" alt="Free Machine" className={styles.logoImg} />
      </div>
      <nav className={styles.links} aria-label="Footer navigation">
        <Link href="/programs">Programs</Link>
        <Link href="/about">About</Link>
        <Link href="/team">Team</Link>
        <Link href="/press">Press</Link>
      </nav>
      <div className={styles.copy}>© 2024 Free Machine — Los Angeles, CA</div>
    </footer>
  )
}
