'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Stars from '@/components/Stars'
import Particles from '@/components/Particles'
import { useAudio } from '@/contexts/AudioContext'

export default function Home() {
  const router = useRouter()
  const { playBgMusic, pauseLetterMusic } = useAudio()

  // Auto-play background music when component mounts
  useEffect(() => {
    // Stop letter music if playing
    pauseLetterMusic()
    
    // Try to play background music
    // Note: Some browsers block autoplay, user may need to interact first
    const playMusic = async () => {
      try {
        await playBgMusic()
      } catch (error) {
        console.log('Autoplay prevented, user interaction required')
      }
    }
    
    playMusic()
  }, [playBgMusic, pauseLetterMusic])

  return (
    <main className="min-h-screen w-full relative flex flex-col justify-center items-center text-center p-4 md:p-8 bg-gradient-to-b from-[#5c3d9e] via-[#ff6b9d] via-[#ff8c42] via-[#1a2456] to-[#2d4a3e] overflow-hidden">
      {/* Pixel Background Pattern */}
      <div className="pixel-bg"></div>
      
      {/* Animated Stars */}
      <Stars />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl">
        {/* Title with Pixel Font */}
        <h1 
          className="font-[family-name:var(--font-press-start)] text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-relaxed mb-6 md:mb-8 animate-float px-4"
          style={{ 
            textShadow: '4px 4px 0 rgba(0,0,0,0.3), 8px 8px 0 rgba(0,0,0,0.2)',
            lineHeight: '1.8'
          }}
        >
          FOR MY<br/>
          VALENTINE,<br/>
          ALWAYS 💗
        </h1>
        
        {/* Subtitle */}
        <p 
          className="font-[family-name:var(--font-press-start)] text-white text-sm sm:text-base md:text-xl mb-8 md:mb-12 px-4"
          style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}
        >
          OPEN GENTLY. IT&apos;S MEANT FOR YOU.
        </p>
        
        {/* Play Button */}
        <button 
          onClick={() => {
            playBgMusic() // Ensure music plays on user interaction
            router.push('/dedication')
          }}
          className="group font-[family-name:var(--font-press-start)] bg-gradient-to-b from-[#ff6b9d] to-[#d14f7a] text-white border-4 border-white px-6 md:px-8 py-4 md:py-6 text-base md:text-xl uppercase transition-all duration-100 active:translate-y-2 hover:scale-105"
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
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 8px 0 #8b3555, 0 12px 20px rgba(0,0,0,0.4)'
          }}
        >
          <span className="inline-block transition-transform group-hover:scale-110">
            💗 PLAY TOGETHER 💗
          </span>
        </button>
      </div>
      
      {/* Floating Particles */}
      <Particles />
    </main>
  )
}
