"use client"
import { useRef } from 'react'

export default function Tilt({ children, active = true }: { children: React.ReactNode; active?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null)

  function onMove(e: React.MouseEvent) {
    if (!active || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rx = ((y - rect.height / 2) / rect.height) * -6
    const ry = ((x - rect.width / 2) / rect.width) * 8
    ref.current.style.setProperty('--rx', rx + 'deg')
    ref.current.style.setProperty('--ry', ry + 'deg')
  }

  function onLeave() {
    if (!ref.current) return
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="tilt">
      {children}
    </div>
  )
}
