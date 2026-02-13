'use client'

import { createContext, useContext, useRef, useState, useEffect } from 'react'

const AudioContext = createContext()

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider')
  }
  return context
}

export function AudioProvider({ children }) {
  const bgMusicRef = useRef(null)
  const letterMusicRef = useRef(null)
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(false)
  const [isLetterMusicPlaying, setIsLetterMusicPlaying] = useState(false)
  const [isBgMusicLoaded, setIsBgMusicLoaded] = useState(false)
  const [isLetterMusicLoaded, setIsLetterMusicLoaded] = useState(false)

  // Initialize audio elements
  useEffect(() => {
    // Background Music
    bgMusicRef.current = new Audio('/music/background.mp3')
    bgMusicRef.current.loop = true
    bgMusicRef.current.volume = 0.4
    bgMusicRef.current.addEventListener('canplaythrough', () => {
      setIsBgMusicLoaded(true)
    })

    // Letter Music
    letterMusicRef.current = new Audio('/music/letter.mp3')
    letterMusicRef.current.loop = true
    letterMusicRef.current.volume = 0.5
    letterMusicRef.current.addEventListener('canplaythrough', () => {
      setIsLetterMusicLoaded(true)
    })

    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause()
        bgMusicRef.current = null
      }
      if (letterMusicRef.current) {
        letterMusicRef.current.pause()
        letterMusicRef.current = null
      }
    }
  }, [])

  // Play background music
  const playBgMusic = async () => {
    if (bgMusicRef.current && isBgMusicLoaded) {
      try {
        await bgMusicRef.current.play()
        setIsBgMusicPlaying(true)
      } catch (error) {
        console.log('Background music autoplay prevented:', error)
      }
    }
  }

  // Pause background music
  const pauseBgMusic = () => {
    if (bgMusicRef.current) {
      bgMusicRef.current.pause()
      setIsBgMusicPlaying(false)
    }
  }

  // Play letter music
  const playLetterMusic = async () => {
    if (letterMusicRef.current && isLetterMusicLoaded) {
      try {
        await letterMusicRef.current.play()
        setIsLetterMusicPlaying(true)
      } catch (error) {
        console.log('Letter music autoplay prevented:', error)
      }
    }
  }

  // Pause letter music
  const pauseLetterMusic = () => {
    if (letterMusicRef.current) {
      letterMusicRef.current.pause()
      setIsLetterMusicPlaying(false)
    }
  }

  // Toggle background music
  const toggleBgMusic = () => {
    if (isBgMusicPlaying) {
      pauseBgMusic()
    } else {
      playBgMusic()
    }
  }

  // Toggle letter music
  const toggleLetterMusic = () => {
    if (isLetterMusicPlaying) {
      pauseLetterMusic()
    } else {
      playLetterMusic()
    }
  }

  const value = {
    playBgMusic,
    pauseBgMusic,
    playLetterMusic,
    pauseLetterMusic,
    toggleBgMusic,
    toggleLetterMusic,
    isBgMusicPlaying,
    isLetterMusicPlaying,
    isBgMusicLoaded,
    isLetterMusicLoaded,
  }

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  )
}
