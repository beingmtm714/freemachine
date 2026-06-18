'use client'
import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let animFrame: number
    let W = 0, H = 0
    let scrollY = 0

    const NODE_COUNT = 78
    const CONNECT_DIST = 117
    const TRAIL_FILL = 'rgba(247,246,240,0.15)'

    type NodeColor = 'purple' | 'acid' | 'dark'
    type Node = {
      x: number; y: number
      vx: number; vy: number
      r: number
      color: NodeColor
      isHub: boolean
      pulseClock: number
      pulseInterval: number
    }

    type NamedNode = {
      label: string
      sub: string
      xFrac: number
      yFrac: number
      x: number
      y: number
      r: number
      fill: string
      textColor: string
    }

    const NAMED: NamedNode[] = [
      { label: 'Free Machine', sub: '',             xFrac: 0.72, yFrac: 0.50, x: 0, y: 0, r: 44, fill: '#1c1c1c', textColor: '#8fc700' },
      { label: 'Policy',       sub: 'Advocacy',     xFrac: 0.58, yFrac: 0.28, x: 0, y: 0, r: 36, fill: '#5500cc', textColor: 'white' },
      { label: 'Technology',   sub: 'Emerging',     xFrac: 0.86, yFrac: 0.28, x: 0, y: 0, r: 36, fill: '#1c1c1c', textColor: 'white' },
      { label: 'Culture',      sub: 'Storytelling', xFrac: 0.72, yFrac: 0.79, x: 0, y: 0, r: 36, fill: '#8fc700', textColor: 'white' },
      { label: 'Civic',        sub: '',             xFrac: 0.57, yFrac: 0.67, x: 0, y: 0, r: 22, fill: '#eeede7', textColor: '#1c1c1c' },
      { label: 'Public',       sub: '',             xFrac: 0.87, yFrac: 0.71, x: 0, y: 0, r: 22, fill: '#eeede7', textColor: '#1c1c1c' },
    ]

    const NAMED_EDGES = [[0,1],[0,2],[0,3],[1,2],[1,4],[2,5],[3,4],[3,5]]

    let nodes: Node[] = []
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      ctx.fillStyle = 'rgb(247,246,240)'
      ctx.fillRect(0, 0, W, H)
      NAMED.forEach(n => { n.x = n.xFrac * W; n.y = n.yFrac * H })
      initNodes()
    }

    const initNodes = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => {
        const isHub = Math.random() < 0.14
        const cr = Math.random()
        const color: NodeColor = cr < 0.28 ? 'purple' : cr < 0.44 ? 'acid' : 'dark'
        const r = isHub ? (Math.random() * 2.5 + 3.5) : (Math.random() * 1.2 + 0.8)
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          r, color, isHub,
          pulseClock: Math.floor(Math.random() * 300),
          pulseInterval: Math.floor(Math.random() * 180) + 220,
        }
      })
    }

    const rgb = (c: NodeColor) =>
      c === 'purple' ? '85,0,204' : c === 'acid' ? '143,199,0' : '28,28,28'

    const lineRgb = (a: Node, b: Node) => {
      if (a.color === 'acid' || b.color === 'acid') return '143,199,0'
      if (a.color === 'purple' || b.color === 'purple') return '85,0,204'
      return '28,28,28'
    }

    const draw = () => {
      ctx.fillStyle = TRAIL_FILL
      ctx.fillRect(0, 0, W, H)

      const desktopWidth = W >= 768
      // Named nodes fade out over the first 40% of viewport height scrolled
      const namedAlpha = desktopWidth
        ? Math.max(0, 1 - scrollY / (H * 0.4))
        : 0

      // Dashed edges between named nodes
      if (namedAlpha > 0) {
        ctx.setLineDash([4, 4])
        ctx.lineWidth = 0.75
        for (const [i, j] of NAMED_EDGES) {
          const a = NAMED[i], b = NAMED[j]
          ctx.strokeStyle = `rgba(28,28,28,${0.08 * namedAlpha})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
        ctx.setLineDash([])
      }

      // Random particles
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        a.x += a.vx; a.y += a.vy
        if (a.x < 0 || a.x > W) a.vx *= -1
        if (a.y < 0 || a.y > H) a.vy *= -1

        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        const nearMouse = dm < 160

        // Particle-to-particle connections
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < CONNECT_DIST) {
            const prox = 1 - dist / CONNECT_DIST
            const hubBoost = (a.isHub && b.isHub) ? 0.04 : (a.isHub || b.isHub) ? 0.02 : 0
            const alpha = Math.min(prox * (nearMouse ? 0.18 : 0.10) + hubBoost, 0.20)
            ctx.strokeStyle = `rgba(${lineRgb(a, b)},${alpha})`
            ctx.lineWidth = (a.isHub || b.isHub) ? 0.85 : 0.5
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        // Particle-to-named-node connections (fade with named nodes)
        if (namedAlpha > 0) {
          for (const n of NAMED) {
            const dist = Math.hypot(a.x - n.x, a.y - n.y)
            const reach = CONNECT_DIST * 2.0
            if (dist < reach) {
              const prox = 1 - dist / reach
              ctx.strokeStyle = `rgba(28,28,28,${prox * 0.10 * namedAlpha})`
              ctx.lineWidth = 0.4
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(n.x, n.y)
              ctx.stroke()
            }
          }
        }

        // Pulse ring
        if (a.isHub) {
          a.pulseClock = (a.pulseClock + 1) % a.pulseInterval
          if (a.pulseClock < 70) {
            const progress = a.pulseClock / 70
            ctx.beginPath()
            ctx.arc(a.x, a.y, a.r + progress * 52, 0, Math.PI * 2)
            ctx.strokeStyle = `rgba(${rgb(a.color)},${(1 - progress) * 0.08})`
            ctx.lineWidth = 0.9
            ctx.stroke()
          }
        }

        const nodeAlpha = nearMouse
          ? 0.92
          : a.color === 'dark' ? (a.isHub ? 0.12 : 0.07)
          : (a.isHub ? 0.15 : 0.10)

        ctx.beginPath()
        ctx.arc(a.x, a.y, nearMouse ? a.r * 1.45 : a.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${nearMouse ? '143,199,0' : rgb(a.color)},${nodeAlpha})`
        ctx.fill()
      }

      // Named nodes drawn on top, fading on scroll
      if (namedAlpha > 0) {
        ctx.globalAlpha = namedAlpha
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        for (const n of NAMED) {
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
          ctx.fillStyle = n.fill
          ctx.fill()

          ctx.fillStyle = n.textColor

          if (n.label === 'Free Machine') {
            ctx.font = '500 11px Epilogue, sans-serif'
            ctx.fillText('Free', n.x, n.y - 6)
            ctx.fillText('Machine', n.x, n.y + 8)
          } else if (n.sub) {
            ctx.font = '500 10px Epilogue, sans-serif'
            ctx.fillText(n.label, n.x, n.y - 5)
            ctx.globalAlpha = namedAlpha * 0.7
            ctx.font = '400 8px Epilogue, sans-serif'
            ctx.fillText(n.sub, n.x, n.y + 7)
            ctx.globalAlpha = namedAlpha
          } else {
            ctx.font = '400 9px Epilogue, sans-serif'
            ctx.fillText(n.label, n.x, n.y)
          }
        }

        ctx.globalAlpha = 1
      }

      animFrame = requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    const onScroll = () => { scrollY = window.scrollY }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      role="presentation"
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
