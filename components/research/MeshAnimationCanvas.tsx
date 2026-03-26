"use client"

import { useEffect, useRef } from 'react'

interface MeshNode {
  x: number
  y: number
  vx: number
  vy: number
}

interface MeshAnimationCanvasProps {
  className?: string
}

export default function MeshAnimationCanvas({
  className = 'fixed inset-0 pointer-events-none opacity-40',
}: MeshAnimationCanvasProps) {
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
    const nodeCount = width < 768 ? 22 : 40
    const maxDistance = width < 768 ? 180 : 250

    const nodes: MeshNode[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
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

    const draw = () => {
      if (!visible) return

      ctx.clearRect(0, 0, width, height)
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.05)'
      ctx.lineWidth = 0.5

      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j]
          const dist = Math.hypot(node.x - other.x, node.y - other.y)

          if (dist < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      })

      animationFrameId = window.requestAnimationFrame(draw)
    }

    const handleVisibility = () => {
      visible = document.visibilityState === 'visible'

      if (!visible && animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
        animationFrameId = 0
      }

      if (visible && !animationFrameId) {
        animationFrameId = window.requestAnimationFrame(draw)
      }
    }

    resize()
    animationFrameId = window.requestAnimationFrame(draw)

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
