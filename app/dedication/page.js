'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Stars from '@/components/Stars'
import BackButton from '@/components/BackButton'
import { useAudio } from '@/contexts/AudioContext'

export default function DedicationPage() {
  const router = useRouter()
  const { playBgMusic, pauseLetterMusic } = useAudio()

  // Ensure background music is playing
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
      <BackButton href="/" />
      
      {/* Browser Window with Dedication Message */}
      <div 
        className="relative z-10 bg-gradient-to-b from-[#e0b0ff] to-[#ffb6d9] rounded-2xl max-w-3xl w-full shadow-2xl animate-slideDown"
        style={{ border: '6px solid white' }}
      >
        {/* Browser Header */}
        <div 
          className="bg-gradient-to-b from-[#ffd0e8] to-[#ffb6d9] p-3 md:p-4 border-b-4 border-white flex items-center gap-2 md:gap-4"
        >
          {/* Browser Control Buttons */}
          <div className="flex gap-1.5 md:gap-2">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-[#ff6b6b] border-2 border-black/30 rounded-sm"></div>
            <div className="w-3 h-3 md:w-4 md:h-4 bg-[#ffd93d] border-2 border-black/30 rounded-sm"></div>
            <div className="w-3 h-3 md:w-4 md:h-4 bg-[#6bcf7f] border-2 border-black/30 rounded-sm"></div>
          </div>
          
          {/* URL Bar */}
          <div 
            className="flex-1 bg-white rounded-full px-3 md:px-4 py-1.5 md:py-2 font-[family-name:var(--font-press-start)] text-[0.5rem] md:text-xs text-center"
            style={{ border: '3px solid rgba(0,0,0,0.2)' }}
          >
            ❤ love.letter ❤
          </div>
        </div>
        
        {/* Browser Content */}
        <div className="bg-white/90 p-6 md:p-8 font-[family-name:var(--font-vt323)] text-xl md:text-3xl leading-relaxed text-[#5c3d9e]">
          <p className="mb-4">This is for you.</p>
          <p className="mb-4">For the person I choose</p>
          <p className="mb-4">in every version of the day.</p>
          <p className="mb-4">Near or far,</p>
          <p>you are where my heart goes.</p>
        </div>
      </div>
      
      {/* Surprise Folders Section */}
      <div className="relative z-10 flex flex-col gap-6 md:gap-8 animate-slideUp">
        <h2 
          className="font-[family-name:var(--font-press-start)] text-white text-lg md:text-2xl text-center px-4"
          style={{ textShadow: '3px 3px 0 rgba(0,0,0,0.3)' }}
        >
          Surprise Files
        </h2>
        
        {/* Folders Grid */}
        <div className="flex gap-6 md:gap-8 justify-center flex-wrap">
          {/* Folder 1 - Playlist */}
          <button
            onClick={() => router.push('/playlist')}
            className="group cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-2 text-center focus:outline-none focus:ring-4 focus:ring-yellow-400"
          >
            <div 
              className="w-28 md:w-32 h-20 md:h-24 bg-gradient-to-b from-[#ffd93d] to-[#f0c020] border-4 border-white rounded-t-lg relative shadow-xl group-hover:shadow-2xl transition-shadow"
              style={{ borderBottom: 'none' }}
            >
              {/* Folder Tab */}
              <div className="absolute -top-4 md:-top-5 left-0 w-1/2 h-4 md:h-5 bg-gradient-to-b from-[#ffd93d] to-[#f0c020] border-4 border-white border-b-0 rounded-t-lg"></div>
            </div>
            <p 
              className="font-[family-name:var(--font-press-start)] text-white text-xs md:text-sm mt-3 md:mt-4 group-hover:scale-110 transition-transform"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}
            >
              Surprise 1
            </p>
          </button>
          
          {/* Folder 2 - Letter */}
          <button
            onClick={() => router.push('/letter')}
            className="group cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-2 text-center focus:outline-none focus:ring-4 focus:ring-yellow-400"
          >
            <div 
              className="w-28 md:w-32 h-20 md:h-24 bg-gradient-to-b from-[#ffd93d] to-[#f0c020] border-4 border-white rounded-t-lg relative shadow-xl group-hover:shadow-2xl transition-shadow"
              style={{ borderBottom: 'none' }}
            >
              {/* Folder Tab */}
              <div className="absolute -top-4 md:-top-5 left-0 w-1/2 h-4 md:h-5 bg-gradient-to-b from-[#ffd93d] to-[#f0c020] border-4 border-white border-b-0 rounded-t-lg"></div>
            </div>
            <p 
              className="font-[family-name:var(--font-press-start)] text-white text-xs md:text-sm mt-3 md:mt-4 group-hover:scale-110 transition-transform"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}
            >
              Surprise 2
            </p>
          </button>
        </div>
      </div>
    </main>
  )
}
