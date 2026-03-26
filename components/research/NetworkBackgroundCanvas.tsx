"use client"

import { useEffect, useRef } from 'react'

interface NodePoint {
  x: number
  y: number
  vx: number
  vy: number
}

interface NetworkBackgroundCanvasProps {
  className?: string
}

export default function NetworkBackgroundCanvas({
  className = 'absolute inset-0 pointer-events-none opacity-40',
}: NetworkBackgroundCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    let width = window.innerWidth
    let height = window.innerHeight
    let animationFrameId = 0
    let visible = true
    const nodeCount = width < 768 ? 28 : 60
    const connectionDistance = width < 768 ? 130 : 200

    const nodes: NodePoint[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }))

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const animate = () => {
      if (!visible) return

      ctx.clearRect(0, 0, width, height)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'

      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        ctx.beginPath()
        ctx.arc(node.x, node.y, 1, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j]
          const dx = node.x - other.x
          const dy = node.y - other.y
          const distance = Math.hypot(dx, dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.globalAlpha = 1 - distance / connectionDistance
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      })

      animationFrameId = window.requestAnimationFrame(animate)
    }

    const handleVisibility = () => {
      visible = document.visibilityState === 'visible'

      if (!visible && animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
        animationFrameId = 0
      }

      if (visible && !animationFrameId) {
        animationFrameId = window.requestAnimationFrame(animate)
      }
    }

    resize()
    animationFrameId = window.requestAnimationFrame(animate)

    window.addEventListener('resize', resize, { passive: true })
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
