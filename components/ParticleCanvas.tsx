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

    const NODE_COUNT = 110
    const CONNECT_DIST = 185
    // Same cream as --bg: #f7f6f0
    const TRAIL_FILL = 'rgba(247,246,240,0.10)'

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
    let nodes: Node[] = []
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      // Prime canvas with solid cream so trail starts cleanly
      ctx.fillStyle = 'rgb(247,246,240)'
      ctx.fillRect(0, 0, W, H)
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
      // Trail: semi-transparent cream overlay instead of full clear
      ctx.fillStyle = TRAIL_FILL
      ctx.fillRect(0, 0, W, H)

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        a.x += a.vx; a.y += a.vy
        if (a.x < 0 || a.x > W) a.vx *= -1
        if (a.y < 0 || a.y > H) a.vy *= -1

        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        const nearMouse = dm < 160

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < CONNECT_DIST) {
            const prox = 1 - dist / CONNECT_DIST
            const hubBoost = (a.isHub && b.isHub) ? 0.28 : (a.isHub || b.isHub) ? 0.14 : 0
            const alpha = Math.min(prox * (nearMouse ? 0.52 : 0.28) + hubBoost, 0.70)
            ctx.strokeStyle = `rgba(${lineRgb(a, b)},${alpha})`
            ctx.lineWidth = (a.isHub || b.isHub) ? 0.85 : 0.5
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        // Pulse ring — draws behind the node dot
        if (a.isHub) {
          a.pulseClock = (a.pulseClock + 1) % a.pulseInterval
          if (a.pulseClock < 70) {
            const progress = a.pulseClock / 70
            const ringR = a.r + progress * 52
            const ringAlpha = (1 - progress) * 0.38
            ctx.beginPath()
            ctx.arc(a.x, a.y, ringR, 0, Math.PI * 2)
            ctx.strokeStyle = `rgba(${rgb(a.color)},${ringAlpha})`
            ctx.lineWidth = 0.9
            ctx.stroke()
          }
        }

        const nodeAlpha = nearMouse
          ? 0.9
          : a.color === 'dark' ? (a.isHub ? 0.50 : 0.32)
          : (a.isHub ? 0.80 : 0.62)
        const nodeRgb = nearMouse ? '143,199,0' : rgb(a.color)

        ctx.beginPath()
        ctx.arc(a.x, a.y, nearMouse ? a.r * 1.45 : a.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${nodeRgb},${nodeAlpha})`
        ctx.fill()
      }

      animFrame = requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999 }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
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
