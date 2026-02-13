'use client'

import { useEffect, useState } from 'react'

export default function Particles({ count = 15 }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate random particle positions and animation properties
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [count])

  return (
    <div className="absolute w-full h-full pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1.5 h-1.5 bg-[#ff6b9d] rounded-full animate-floatParticle"
          style={{
            left: `${particle.left}%`,
            bottom: '0',
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
