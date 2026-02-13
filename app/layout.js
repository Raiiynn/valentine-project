import { Press_Start_2P, VT323 } from 'next/font/google'
import './globals.css'
import { AudioProvider } from '@/contexts/AudioContext'

const pressStart2P = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
  display: 'swap',
})

const vt323 = VT323({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
  display: 'swap',
})

export const metadata = {
  title: 'For My Valentine 💗',
  description: 'A special interactive Valentine website for my love',
  keywords: ['valentine', 'love', 'romantic', 'pixel art'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.variable} ${vt323.variable} antialiased`}>
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  )
}
