'use client'

import { useEffect, useState } from 'react'

export default function Stars({ count = 30 }) {
  const [stars, setStars] = useState([])

  useEffect(() => {
    // Generate random star positions
    const newStars = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      size: Math.random() > 0.5 ? 4 : 3, // Vary star sizes
    }))
    setStars(newStars)
  }, [count])

  return (
    <div className="absolute w-full h-full pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute bg-[#ffd93d] rounded-full animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            boxShadow: '0 0 8px #ffd93d',
          }}
        />
      ))}
    </div>
  )
}
