# 💗 Valentine Website - Next.js + React

A beautiful, interactive Valentine's Day website with pixel art aesthetics, built with Next.js 14 and React 18.

![Version](https://img.shields.io/badge/version-1.0.0-pink)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![React](https://img.shields.io/badge/React-18.2-blue)
![License](https://img.shields.io/badge/license-Personal%20Use-red)

## ✨ Features

- 🎮 **Retro Pixel Art Design** - Authentic 8-bit aesthetic with custom fonts
- 💕 **5 Interactive Pages** - Smooth transitions between scenes
- 🎵 **Spotify Integration** - Embedded playlist with custom music cards
- 🎶 **Background Music System** - Auto-playing music with page persistence
- ⭐ **Animated Effects** - Twinkling stars, floating particles, and smooth animations
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🎨 **Modern Stack** - Built with Next.js App Router and Tailwind CSS
- ♿ **Accessible** - Keyboard navigation and ARIA labels
- 🚀 **Production Ready** - Optimized and ready to deploy

## 🎯 Pages Overview

1. **Homepage** - Romantic landing page with animated intro
2. **Dedication** - Personal message in a retro browser window
3. **Playlist** - Spotify embed + vinyl/cassette music cards
4. **Letter** - Love letter with optional music player
5. **Final** - Happy Valentine's Day message with cute animations

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎵 Music Setup

The website includes a background music system! To enable it:

1. **Download MP3 files** from Spotify or use your own music
2. **Place them** in `public/music/` folder:
   - `background.mp3` - Background music
   - `letter.mp3` - Letter page music

📖 **See [MUSIC_SETUP.md](MUSIC_SETUP.md) for detailed instructions**

**Music Behavior:**
- Homepage, Dedication, Final: Background music auto-plays and loops
- Playlist: All music pauses (Spotify plays)
- Letter: Letter music with play/pause button
- Music continues between pages (doesn't restart!)

## 📁 Project Structure

```
valentine-nextjs-complete/
├── app/
│   ├── page.js                 # Homepage
│   ├── layout.js              # Root layout with fonts
│   ├── globals.css            # Global styles & animations
│   ├── dedication/
│   │   └── page.js            # Dedication page
│   ├── playlist/
│   │   └── page.js            # Music playlist page
│   ├── letter/
│   │   └── page.js            # Love letter page
│   └── final/
│       └── page.js            # Final message page
├── components/
│   ├── Stars.js               # Twinkling stars animation
│   ├── Particles.js           # Floating particles effect
│   ├── BackButton.js          # Navigation button
│   └── MusicCard.js           # Vinyl/cassette display
├── contexts/
│   └── AudioContext.js        # Global music player state
├── public/
│   └── music/                 # MP3 files (add your own)
│       ├── background.mp3     # Background music
│       └── letter.mp3         # Letter page music
├── package.json               # Dependencies
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS config
├── postcss.config.js          # PostCSS config
└── jsconfig.json              # Path aliases config
```

## 🎨 Customization Guide

### 1. Update Spotify Playlist

Edit `app/playlist/page.js`:

```javascript
<iframe 
  src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID"
  // ... rest of props
/>
```

**How to get your playlist ID:**
1. Open Spotify
2. Right-click your playlist → Share → Copy link
3. Extract ID from URL: `spotify.com/playlist/YOUR_ID`

### 2. Customize Song Cards

Edit the `songs` array in `app/playlist/page.js`:

```javascript
const songs = [
  { 
    type: 'vinyl',              // 'vinyl' or 'cassette'
    title: 'Your Song Name',    // Song title
    reason: 'Why it\'s special', // Personal reason
    emoji: '💕'                 // Any emoji
  },
  // Add more songs...
]
```

### 3. Personalize Love Letter

Edit `app/letter/page.js` - replace the letter content with your own words:

```javascript
<p>
  Your personal message here...
</p>
```

Don't forget to update the signature:
```javascript
<p className="text-right...">
  [Your Actual Name]
</p>
```

### 4. Change Colors

Edit `tailwind.config.js` or `app/globals.css`:

```css
:root {
  --purple-dark: #2d1b69;
  --pink-bright: #ff6b9d;
  /* Change these to your preferred colors */
}
```

### 5. Update Metadata

Edit `app/layout.js`:

```javascript
export const metadata = {
  title: 'Your Custom Title',
  description: 'Your custom description',
}
```

## 🎵 Adding Real Music Playback

To add actual audio playback in the letter page:

1. Add an audio file to `public/music.mp3`
2. Update `app/letter/page.js`:

```javascript
import { useRef } from 'react'

const audioRef = useRef(null)

const toggleMusic = () => {
  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }
}

// Add audio element
<audio ref={audioRef} src="/music.mp3" loop />
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All text, buttons, and layouts automatically adjust.

## 🚀 Deployment

### Deploy to Vercel (Recommended - Free)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site will be live in minutes with a free `.vercel.app` domain.

### Deploy to Netlify

```bash
npm run build
```

Then drag the `.next` folder to [netlify.com/drop](https://netlify.com/drop)

### Deploy to Other Platforms

- **Railway**: Connect GitHub repo
- **AWS Amplify**: Import from GitHub
- **Render**: Connect repository

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Press Start 2P, VT323)
- **Package Manager:** npm

## 💡 Tips & Tricks

1. **Performance:** Images load lazily by default
2. **SEO:** Metadata is automatically optimized
3. **Accessibility:** Focus states and ARIA labels included
4. **Animations:** Powered by CSS (no heavy JS libraries)
5. **Mobile:** Touch-optimized buttons and navigation

## 🐛 Troubleshooting

**Spotify embed not loading?**
- Make sure your playlist is set to "Public"
- Check if you're using the embed URL, not the regular URL

**Fonts not loading?**
- Clear your browser cache
- Check internet connection (fonts load from Google)

**Animations choppy?**
- Check browser performance
- Reduce particle/star count in components

**Build errors?**
- Delete `node_modules` and `.next` folders
- Run `npm install` again

## 📄 License

This project is for **personal use only**. Made with 💗 for Valentine's Day.

## 🙏 Credits

- Pixel fonts: Google Fonts
- Inspiration: Retro gaming aesthetics
- Built with love using Next.js and React

## 💌 Need Help?

- Check the code comments - everything is documented
- All components are modular and reusable
- Follow Next.js best practices

---

**Made with 💗 for your Valentine!**

Enjoy your special website! 🚀✨
