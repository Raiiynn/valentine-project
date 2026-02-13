'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Stars from '@/components/Stars'
import BackButton from '@/components/BackButton'
import { useAudio } from '@/contexts/AudioContext'

export default function LetterPage() {
  const router = useRouter()
  const { 
    pauseBgMusic, 
    toggleLetterMusic, 
    isLetterMusicPlaying 
  } = useAudio()

  // Pause background music and prepare letter music
  useEffect(() => {
    pauseBgMusic()
  }, [pauseBgMusic])

  return (
    <main className="min-h-screen w-full relative flex flex-col justify-start items-center p-4 md:p-8 gap-6 md:gap-8 bg-gradient-to-b from-[#5c3d9e] via-[#ff6b9d] via-[#ff8c42] via-[#1a2456] to-[#2d4a3e] overflow-y-auto">
      {/* Pixel Background */}
      <div className="pixel-bg"></div>
      
      {/* Animated Stars */}
      <Stars />
      
      {/* Back Button */}
      <BackButton href="/dedication" />
      
      {/* Letter Container */}
      <div className="relative z-10 bg-black/70 border-4 border-white rounded-xl p-6 md:p-12 max-w-4xl w-full shadow-2xl mt-12 md:mt-16">
        {/* Letter Header */}
        <div className="text-center mb-6 md:mb-8">
          {/* Title with Butterflies */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 flex-wrap">
            <div 
              className="w-8 md:w-10 h-8 md:h-10 bg-[#ff6b9d] animate-flutter"
              style={{ 
                clipPath: 'polygon(50% 0%, 80% 40%, 100% 20%, 100% 80%, 80% 60%, 50% 100%, 20% 60%, 0% 80%, 0% 20%, 20% 40%)' 
              }}
            />
            <h1 
              className="font-[family-name:var(--font-press-start)] text-[#ff6b9d] text-lg md:text-3xl text-center"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}
            >
              A LETTER FROM MY HEART
            </h1>
            <div 
              className="w-8 md:w-10 h-8 md:h-10 bg-[#ff6b9d] animate-flutter"
              style={{ 
                clipPath: 'polygon(50% 0%, 80% 40%, 100% 20%, 100% 80%, 80% 60%, 50% 100%, 20% 60%, 0% 80%, 0% 20%, 20% 40%)' 
              }}
            />
          </div>
          
          {/* Subtitle */}
          <p className="font-[family-name:var(--font-vt323)] text-white text-lg md:text-2xl mb-4">
            Play our music while reading a letter for you
          </p>
          
          {/* Music Player */}
          <div 
            className="bg-white/10 rounded-full px-6 md:px-8 py-3 md:py-4 inline-flex items-center gap-3 md:gap-4 backdrop-blur-sm"
            style={{ border: '3px solid white' }}
          >
            <button 
              onClick={toggleLetterMusic}
              className="font-[family-name:var(--font-press-start)] bg-[#ff6b9d] text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-[0.6rem] md:text-xs transition-all hover:bg-[#ff9eb5] hover:scale-105 active:scale-95"
            >
              {isLetterMusicPlaying ? '⏸ PAUSE MUSIC' : '▶ PLAY MUSIC'}
            </button>
            <span className="text-white font-[family-name:var(--font-vt323)] text-xl md:text-2xl animate-pulse">
              ♪ ♫ ♪
            </span>
          </div>
        </div>
        
        {/* Letter Content */}
        <div className="font-[family-name:var(--font-vt323)] text-white text-lg md:text-2xl leading-relaxed space-y-4 md:space-y-6">
          <p>Hi Kesii kentuuuutt,</p>
          
          <p>
            Today I want to pause time for a moment and just tell you everything I feel. 
            I want you to know that every thought of you brightens even the quietest moments 
            of my day. Even across the miles, I feel your presence with me — in the way the 
            wind brushes against my skin, in the soft light of the morning, in the quiet 
            night when I close my eyes and imagine your smile. Loving you has become as 
            natural as breathing, a rhythm I never want to lose.
          </p>
          
          <p>
            I remember all the little things that make you who you are — the way your laughter 
            lingers in my mind, the way you care so deeply for the people around you, the tiny 
            quirks that I have fallen in love with over and over. Each memory, each shared 
            moment, feels like a thread weaving us together, even when we&apos;re apart. Distance 
            doesn&apos;t diminish what I feel for you, if anything, it makes me treasure every call, 
            every message, and every adventure we share.
          </p>
          
          <p>
            I recall all the little things that make you who you are — the way your laughter 
            lingers in my mind, the way you care so deeply for the people around you, the tiny 
            quirks that I have fallen in love with over and over. Each memory, each shared 
            moment, feels like a thread weaving us together, even when we&apos;re apart. Distance 
            doesn&apos;t diminish what I feel for you, if anything, it makes me treasure every moment 
            we spend together, however we can connect.
          </p>
          
          <p>Your kentuut,</p>
          
          <p className="text-right text-[#ff9eb5] text-2xl md:text-3xl italic">
            Dapa kentut
          </p>
        </div>
      </div>
      
      {/* Continue Button */}
      <button 
        onClick={() => router.push('/final')}
        className="relative z-10 font-[family-name:var(--font-press-start)] bg-gradient-to-b from-[#ff6b9d] to-[#d14f7a] text-white border-4 border-white px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg uppercase transition-all duration-100 active:translate-y-2 mb-8 hover:scale-105"
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
        💗 CONTINUE → 💗
      </button>
    </main>
  )
}
