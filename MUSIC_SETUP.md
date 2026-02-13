# 🎵 Music Setup Guide

This guide will help you add background music to your Valentine website.

## 📋 Required Music Files

You need **2 MP3 files**:

1. **Background Music** (`public/music/background.mp3`)
   - Spotify Track: https://open.spotify.com/track/2rbfCOgXMPoBLBrK2wLX5K
   - Plays on: Homepage, Dedication, Final pages
   - Auto-plays and loops

2. **Letter Music** (`public/music/letter.mp3`)
   - Spotify Track: https://open.spotify.com/track/59c2xv2kMzYM6HR9oY6BIa
   - Plays on: Letter page only
   - User-controlled play/pause

## 🔧 How to Get MP3 Files from Spotify

### Method 1: Use Spotify Downloader (Recommended)

1. **Visit a Spotify to MP3 converter:**
   - https://spotifydown.com
   - https://spotify-downloader.com
   - https://freemake.com/free_music_box/ (desktop app)

2. **For each track:**
   - Copy the Spotify track URL
   - Paste it into the downloader
   - Download as MP3 (320kbps recommended)

3. **Rename the files:**
   ```
   First download → background.mp3
   Second download → letter.mp3
   ```

### Method 2: Screen Record Audio (Alternative)

If downloaders don't work:

1. **For Windows:**
   - Use Audacity (free)
   - Record system audio while playing Spotify
   - Export as MP3

2. **For Mac:**
   - Use QuickTime + Soundflower
   - Or use Audacity

3. **For Linux:**
   - Use Audacity or ffmpeg

### Method 3: Use Your Own Music

Don't like these songs? Use ANY MP3 files!

1. Choose your own background music
2. Choose your own letter music
3. Name them `background.mp3` and `letter.mp3`
4. Place in `public/music/` folder

## 📁 File Placement

After downloading, your folder structure should look like this:

```
valentine-nextjs-complete/
├── public/
│   └── music/
│       ├── background.mp3  ← Background music
│       └── letter.mp3      ← Letter music
├── app/
├── components/
└── ...
```

## ✅ Testing the Music

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Test each page:**
   - Homepage: Background music should auto-play
   - Dedication: Background music continues
   - Playlist: All music pauses (Spotify plays instead)
   - Letter: Letter music available via button
   - Final: Background music continues (doesn't restart)

## 🎚️ Adjusting Volume

Edit `contexts/AudioContext.js`:

```javascript
// Background Music Volume (0.0 to 1.0)
bgMusicRef.current.volume = 0.4  // 40% volume

// Letter Music Volume (0.0 to 1.0)
letterMusicRef.current.volume = 0.5  // 50% volume
```

## 🔇 Autoplay Issues

**Why isn't music auto-playing?**

Modern browsers block autoplay until user interacts with the page. This is normal!

**Solutions:**
1. Music will auto-play after user clicks "PLAY TOGETHER" button
2. User must interact with the page first (click, tap, etc.)
3. Some browsers require user to explicitly allow autoplay

## 🎵 Music Behavior

| Page | Background Music | Letter Music | Spotify |
|------|-----------------|--------------|---------|
| Homepage | ▶️ Auto-play | ⏸️ Paused | ⏸️ N/A |
| Dedication | ▶️ Continue | ⏸️ Paused | ⏸️ N/A |
| Playlist | ⏸️ Paused | ⏸️ Paused | ▶️ Playing |
| Letter | ⏸️ Paused | 🎵 User-control | ⏸️ N/A |
| Final | ▶️ Continue* | ⏸️ Paused | ⏸️ N/A |

*Background music **continues** from where it was, doesn't restart!

## 🚫 Troubleshooting

**Problem: No music files found**
- Check files are named exactly: `background.mp3` and `letter.mp3`
- Check files are in `public/music/` folder
- Restart dev server: `Ctrl+C` then `npm run dev`

**Problem: Music not playing**
- Check browser console for errors (F12)
- Try clicking on the page first (browser autoplay policy)
- Check file format is MP3
- Check volume isn't muted

**Problem: Music plays but sounds bad**
- Download higher quality (320kbps)
- Check original file quality
- Check speaker/headphone connection

**Problem: Music restarts when changing pages**
- This shouldn't happen! Background music should continue
- If it does, check that AudioContext is properly set up
- Make sure you're not creating new Audio instances

## 🎨 Customization Ideas

### Different Music per Page

Edit each page file:

```javascript
// In dedication/page.js
useEffect(() => {
  playCustomMusic('/music/dedication.mp3')
}, [])
```

### Fade In/Out Effects

```javascript
// Fade out
const fadeOut = () => {
  const audio = bgMusicRef.current
  const fadeInterval = setInterval(() => {
    if (audio.volume > 0.1) {
      audio.volume -= 0.1
    } else {
      clearInterval(fadeInterval)
      audio.pause()
    }
  }, 100)
}
```

### Music Visualizer

Add canvas element and use Web Audio API:
```javascript
const audioContext = new AudioContext()
const analyser = audioContext.createAnalyser()
// Create visualizations based on frequency data
```

## 📝 Alternative: Use Embedded Audio

If MP3 files are too large, use embedded Spotify players:

```jsx
<iframe 
  src="https://open.spotify.com/embed/track/YOUR_TRACK_ID"
  width="100%" 
  height="80"
  frameBorder="0"
  allow="autoplay; encrypted-media"
/>
```

**Note:** Spotify embeds don't support programmatic play/pause control.

## 💡 Pro Tips

1. **Keep files small:** Compress MP3 to 128-192kbps for faster loading
2. **Preload audio:** Files load when page first loads
3. **Loop background music:** Already set to `loop: true`
4. **Mobile friendly:** Works on iOS and Android (after user interaction)

## 🎵 Original Tracks Info

**Background Music:**
- Track: https://open.spotify.com/track/2rbfCOgXMPoBLBrK2wLX5K
- Duration: ~3-4 minutes
- Genre: [Check Spotify]

**Letter Music:**
- Track: https://open.spotify.com/track/59c2xv2kMzYM6HR9oY6BIa
- Duration: ~3-4 minutes
- Genre: [Check Spotify]

## ⚠️ Copyright Notice

Please make sure you have the right to use any music files in your project. This website is for **personal use only**. Do not distribute or deploy publicly with copyrighted music without proper licensing.

---

**Need help? All music code is in `contexts/AudioContext.js`**

Enjoy your musical Valentine website! 🎵💕
