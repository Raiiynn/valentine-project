'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Stars from '@/components/Stars'
import BackButton from '@/components/BackButton'
import { useAudio } from '@/contexts/AudioContext'

export default function FinalPage() {
  const router = useRouter()
  const { playBgMusic, pauseLetterMusic } = useAudio()

  // Continue background music (without restarting)
  useEffect(() => {
    pauseLetterMusic()
    playBgMusic()
  }, [playBgMusic, pauseLetterMusic])

  return (
    <main className="min-h-screen w-full relative flex flex-col justify-center items-center p-4 md:p-8 gap-6 md:gap-8 bg-gradient-to-b from-[#5c3d9e] via-[#ff6b9d] via-[#ff8c42] via-[#1a2456] to-[#2d4a3e] overflow-hidden">
      {/* Pixel Background */}
      <div className="pixel-bg"></div>
      
      {/* Animated Stars */}
      <Stars />
      
      {/* Back Button */}
      <BackButton href="/letter" />
      
      {/* Main Title */}
      <h1 
        className="relative z-10 font-[family-name:var(--font-press-start)] text-white text-xl md:text-4xl text-center leading-relaxed px-4"
        style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.3)' }}
      >
        Haiii kesi kentuutt<br/>
        HAPPY VALENTINE&apos;S DAY!
      </h1>
      
      {/* Couple Container with Hearts */}
      <div 
        className="relative z-10 bg-white/90 rounded-3xl p-8 md:p-12 shadow-2xl animate-heartbeat"
        style={{ border: '6px solid white' }}
      >
        {/* Top Hearts */}
        <div className="flex gap-3 md:gap-4 justify-center text-4xl md:text-6xl mb-4 md:mb-6 animate-floatHearts">
          <span className="animate-pulse">💗</span>
          <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>💕</span>
          <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>💗</span>
        </div>
        
        {/* Couple Emoji */}
        <div 
          className="text-6xl md:text-9xl text-center my-4 md:my-6"
          style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))' }}
        >
          🐻‍❄️💕🐻
        </div>
        
        {/* Bottom Hearts */}
        <div className="flex gap-3 md:gap-4 justify-center text-4xl md:text-6xl mt-4 md:mt-6 animate-floatHearts" style={{ animationDelay: '0.5s' }}>
          <span className="animate-pulse">✨</span>
          <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>💖</span>
          <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>✨</span>
        </div>
      </div>
      
      {/* Start Over Button */}
      <button 
        onClick={() => router.push('/')}
        className="relative z-10 font-[family-name:var(--font-press-start)] bg-gradient-to-b from-[#ff6b9d] to-[#d14f7a] text-white border-4 border-white px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg uppercase transition-all duration-100 active:translate-y-2 hover:scale-105"
        style={{
          boxShadow: '0 8px 0 #8b3555, 0 12px 20px rgba(0,0,0,0.4)',
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'translateY(8px)'
          e.currentTarget.style.boxShadow = '0 0 0 #8b3555, 0 2px 8px rgba(0,0,0,0.4)'
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 8px 0 #8b3555, 0 12px 20px rgba(0,0,0,0.4)'
        }}
      >
        💗 START OVER 🔄 💗
      </button>
      
      {/* Floating Hearts Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-floatParticle text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            {['💗', '💕', '💖', '✨'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>
    </main>
  )
}
