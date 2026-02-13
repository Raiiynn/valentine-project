'use client'

import { useRouter } from 'next/navigation'

export default function BackButton({ href }) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(href)}
      className="fixed top-4 left-4 md:top-8 md:left-8 font-[family-name:var(--font-press-start)] bg-white/20 text-white px-4 md:px-6 py-2 md:py-3 text-[0.6rem] md:text-xs cursor-pointer backdrop-blur-md transition-all hover:bg-white/40 hover:-translate-x-1 z-50 focus:outline-none focus:ring-4 focus:ring-yellow-400"
      style={{ border: '3px solid white' }}
      aria-label="Go back to previous page"
    >
      ← BACK
    </button>
  )
}
