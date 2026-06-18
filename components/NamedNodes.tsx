'use client'
import { useEffect, useState } from 'react'
import styles from './NamedNodes.module.css'

const NODES = [
  { label: 'Free Machine', sub: '',             xFrac: 0.72, yFrac: 0.50, r: 44, variant: 'dark',   center: true  },
  { label: 'Policy',       sub: 'Advocacy',     xFrac: 0.58, yFrac: 0.28, r: 36, variant: 'purple', center: false },
  { label: 'Technology',   sub: 'Emerging',     xFrac: 0.86, yFrac: 0.28, r: 36, variant: 'dark',   center: false },
  { label: 'Culture',      sub: 'Storytelling', xFrac: 0.72, yFrac: 0.79, r: 36, variant: 'acid',   center: false },
  { label: 'Civic',        sub: '',             xFrac: 0.57, yFrac: 0.67, r: 22, variant: 'neutral', center: false },
  { label: 'Public',       sub: '',             xFrac: 0.87, yFrac: 0.71, r: 22, variant: 'neutral', center: false },
]

export default function NamedNodes() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight
      setOpacity(Math.max(0, 1 - window.scrollY / (h * 0.4)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles.wrap} style={{ opacity }} aria-hidden="true">
      {NODES.map((n, i) => (
        <div
          key={i}
          className={`${styles.node} ${styles[n.variant]}`}
          style={{
            left: `${n.xFrac * 100}%`,
            top: `${n.yFrac * 100}%`,
            width:  n.r * 2,
            height: n.r * 2,
          }}
        >
          <span className={styles.label}>
            {n.label === 'Free Machine'
              ? <><span>Free</span><span>Machine</span></>
              : n.label}
          </span>
          {n.sub && <span className={styles.sub}>{n.sub}</span>}
        </div>
      ))}
    </div>
  )
}
