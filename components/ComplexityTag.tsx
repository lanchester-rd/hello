import React from 'react'

export default function ComplexityTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs text-gray-600 bg-gray-100 border border-gray-100">
      {children}
    </span>
  )
}
