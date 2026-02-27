"use client"
import React from 'react'

type DiagramType = 'linear' | 'branching' | 'network' | 'layered'
type Complexity = 'low' | 'medium' | 'high'

export default function SystemDiagram({ type = 'linear', complexity = 'medium', className = '' }: { type?: DiagramType; complexity?: Complexity; className?: string }) {
  const stroke = '#CBD5E1' // neutral gray-400
  const accent = '#94A3B8' // muted slate
  const speed = complexity === 'high' ? '12s' : complexity === 'medium' ? '16s' : '20s'

  return (
    <div className={`w-full rounded-md ${className}`}>
      <svg viewBox="0 0 800 200" className="w-full h-48" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <defs>
          <style>{`
            .sd-fade { animation: fade ${speed} ease-in-out infinite alternate; }
            @keyframes fade { from { opacity: 0.85; transform: translateY(0); } to { opacity: 1; transform: translateY(-2px); } }
            .sd-slow { animation: drift ${speed} linear infinite; }
            @keyframes drift { from { transform: translateX(0); } to { transform: translateX(2px); } }
          `}</style>
        </defs>

        {/* Linear */}
        {type === 'linear' && (
          <g className="sd-fade" transform="translate(40,40)">
            <line x1="0" y1="40" x2="700" y2="40" stroke={stroke} strokeWidth="2" />
            {[0,1,2,3].map((i)=> (
              <g key={i} transform={`translate(${i*180},40)` }>
                <circle cx="80" cy="0" r="18" fill="white" stroke={accent} strokeWidth="2" />
                <text x="80" y="5" fill="#475569" fontSize="10" textAnchor="middle">{i===0? 'Source': i===1? 'Parse': i===2? 'Metadata': 'Archive'}</text>
              </g>
            ))}
          </g>
        )}

        {/* Branching */}
        {type === 'branching' && (
          <g className="sd-fade" transform="translate(40,40)">
            <line x1="80" y1="40" x2="160" y2="40" stroke={stroke} strokeWidth="2" />
            <circle cx="80" cy="40" r="18" fill="white" stroke={accent} strokeWidth="2" />
            <text x="80" y="45" fill="#475569" fontSize="10" textAnchor="middle">Source</text>
            <line x1="160" y1="40" x2="320" y2="0" stroke={stroke} strokeWidth="2" />
            <line x1="160" y1="40" x2="320" y2="80" stroke={stroke} strokeWidth="2" />
            <circle cx="320" cy="0" r="14" fill="white" stroke={accent} strokeWidth="1.5" />
            <circle cx="320" cy="80" r="14" fill="white" stroke={accent} strokeWidth="1.5" />
          </g>
        )}

        {/* Network */}
        {type === 'network' && (
          <g className="sd-slow" transform="translate(40,20)">
            {[0,1,2,3,4].map((i)=> (
              <g key={i} transform={`translate(${i*140},${(i%2)*30})`}>
                <circle cx="60" cy="40" r={complexity==='high'?16:12} fill="white" stroke={accent} strokeWidth="1.6" />
              </g>
            ))}
            <line x1="100" y1="40" x2="340" y2="40" stroke={stroke} strokeWidth="1.5" opacity="0.9" />
          </g>
        )}

        {/* Layered */}
        {type === 'layered' && (
          <g className="sd-fade" transform="translate(40,20)">
            <rect x="0" y="8" width="720" height="36" fill="#F8FAFC" stroke={stroke} />
            <rect x="40" y="56" width="640" height="36" fill="#F8FAFC" stroke={stroke} />
            <rect x="80" y="104" width="560" height="36" fill="#F8FAFC" stroke={stroke} />
            <text x="40" y="30" fill="#475569" fontSize="11">Presentation</text>
            <text x="40" y="78" fill="#475569" fontSize="11">Application</text>
            <text x="40" y="126" fill="#475569" fontSize="11">Data & Integration</text>
          </g>
        )}
      </svg>
    </div>
  )
}
