'use client'

import { useEffect } from 'react'
import Stars from '@/components/Stars'
import BackButton from '@/components/BackButton'
import MusicCard from '@/components/MusicCard'
import { useAudio } from '@/contexts/AudioContext'

export default function PlaylistPage() {
  const { pauseBgMusic, pauseLetterMusic } = useAudio()

  // Pause all music on this page (Spotify will play instead)
  useEffect(() => {
    pauseBgMusic()
    pauseLetterMusic()
  }, [pauseBgMusic, pauseLetterMusic])

  // Customize these songs with your actual playlist songs
  const songs = [
    { 
      type: 'vinyl', 
      title: 'First Song Together', 
      reason: 'The song we first listened to on our video call', 
      emoji: '💕' 
    },
    { 
      type: 'cassette', 
      title: 'Your Favorite Song', 
      reason: 'Always reminds me of you every single time' 
    },
    { 
      type: 'vinyl', 
      title: 'Late Night Vibes', 
      reason: 'Our soundtrack for late night conversations', 
      emoji: '🎶' 
    },
    { 
      type: 'cassette', 
      title: 'Missing You Song', 
      reason: 'What I play when the distance feels too far' 
    },
    { 
      type: 'vinyl', 
      title: 'Happy Memories', 
      reason: 'Takes me back to our sweetest moments together', 
      emoji: '💗' 
    },
    { 
      type: 'cassette', 
      title: 'Future Dreams', 
      reason: 'Reminds me of all our plans and dreams ahead' 
    },
  ]

  return (
    <main className="min-h-screen w-full relative flex flex-col justify-start items-center p-4 md:p-8 gap-6 md:gap-8 bg-gradient-to-b from-[#5c3d9e] via-[#ff6b9d] via-[#ff8c42] via-[#1a2456] to-[#2d4a3e] overflow-y-auto">
      {/* Pixel Background */}
      <div className="pixel-bg"></div>
      
      {/* Animated Stars */}
      <Stars />
      
      {/* Back Button */}
      <BackButton href="/dedication" />
      
      {/* Page Title */}
      <h1 
        className="relative z-10 font-[family-name:var(--font-press-start)] text-white text-2xl md:text-4xl mt-12 md:mt-16 flex items-center gap-2 md:gap-4 px-4 text-center"
        style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.3)' }}
      >
        <span className="text-3xl md:text-5xl">🎵</span>
        <span>OUR PLAYLIST</span>
        <span className="text-3xl md:text-5xl">🎵</span>
      </h1>
      
      {/* Subtitle */}
      <p 
        className="relative z-10 font-[family-name:var(--font-press-start)] text-white text-xs md:text-sm text-center max-w-2xl px-4"
        style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}
      >
        Songs that play in my heart when I think of you
      </p>

      {/* Spotify Embed Player */}
      <div className="relative z-10 max-w-lg w-full my-4 md:my-8 px-4">
        {/* Decorative Vinyl Records */}
        <div 
          className="absolute -top-6 md:-top-8 -left-6 md:-left-8 w-16 md:w-20 h-16 md:h-20 rounded-full border-3 animate-spinVinyl z-0 hidden sm:block"
          style={{
            background: 'radial-gradient(circle, #1a1a1a 35%, #ff1493 35%, #ff1493 45%, #1a1a1a 45%)',
            border: '3px solid white',
            boxShadow: '0 8px 20px rgba(0,0,0,0.5)'
          }}
        />
        <div 
          className="absolute -bottom-6 md:-bottom-8 -right-6 md:-right-8 w-16 md:w-20 h-16 md:h-20 rounded-full border-3 z-0 hidden sm:block"
          style={{
            background: 'radial-gradient(circle, #1a1a1a 35%, #ff1493 35%, #ff1493 45%, #1a1a1a 45%)',
            border: '3px solid white',
            boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
            animation: 'spinVinyl 8s linear infinite reverse'
          }}
        />
        
        {/* Spotify Player */}
        <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
          <iframe 
            className="w-full" 
            src="https://open.spotify.com/embed/playlist/5zKVjTNrXfeA4uBLj71y3k?utm_source=generator&theme=0" 
            width="100%" 
            height="450" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Our Valentine Playlist"
          />
        </div>
      </div>

      {/* Music Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full px-4 pb-16">
        {songs.map((song, index) => (
          <MusicCard key={index} {...song} index={index} />
        ))}
      </div>
      
      {/* Footer Message */}
      <p 
        className="relative z-10 font-[family-name:var(--font-press-start)] text-white text-base md:text-lg mb-8 px-4 text-center"
        style={{ textShadow: '3px 3px 0 rgba(0,0,0,0.3)' }}
      >
        Every song tells our story 💕
      </p>
    </main>
  )
}
