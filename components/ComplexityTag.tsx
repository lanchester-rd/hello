import React from 'react'

export default function ComplexityTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="badge">{children}</span>
  )
}
