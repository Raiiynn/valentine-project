# 🚀 QUICK START GUIDE

Get your Valentine website running in **3 simple steps**!

## ⚡ Installation (2 minutes)

### Step 1: Install Dependencies
Open terminal/command prompt in this folder and run:

```bash
npm install
```

⏰ This will take 1-2 minutes.

### Step 2: Start the Website
After installation completes, run:

```bash
npm run dev
```

### Step 3: Open in Browser
Go to: **http://localhost:3000**

🎉 **Done!** Your Valentine website is now running!

---

## ✏️ Quick Customization

### Change the Spotify Playlist

1. Open: `app/playlist/page.js`
2. Find line 57: `src="https://open.spotify.com/embed/playlist/..."`
3. Replace with your playlist embed URL

**How to get your Spotify embed URL:**
- Go to your Spotify playlist
- Click "..." → Share → Embed playlist
- Copy the URL from `src="..."`

### Update Song Details

1. Open: `app/playlist/page.js`
2. Find the `songs` array (around line 10)
3. Edit each song:

```javascript
{
  type: 'vinyl',        // or 'cassette'
  title: 'Song Name',   // Change this
  reason: 'Why special',// Change this
  emoji: '💕'           // Change this
}
```

### Edit Your Love Letter

1. Open: `app/letter/page.js`
2. Find the letter content (around line 60-80)
3. Replace with your own words
4. Update signature at the bottom: `[Your Name]`

### Add Background Music (Optional)

1. Download MP3 files from Spotify tracks (see MUSIC_SETUP.md)
2. Place in `public/music/` folder:
   - `background.mp3` - Background music
   - `letter.mp3` - Letter page music
3. Music will auto-play on homepage!

📖 See **MUSIC_SETUP.md** for detailed music instructions

---

## 📦 Build for Production

When ready to share:

```bash
npm run build
npm start
```

---

## 🌐 Deploy Online (FREE)

### Option 1: Vercel (Easiest - 1 click!)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"

✨ **Done!** Your site is now live!

### Option 2: Netlify

1. Run: `npm run build`
2. Drag the `.next` folder to [netlify.com/drop](https://netlify.com/drop)

---

## 🆘 Need Help?

**Problem: Dependencies won't install**
- Make sure you have Node.js 18+ installed
- Try: `npm cache clean --force` then `npm install` again

**Problem: Port 3000 already in use**
- Run on different port: `npm run dev -- -p 3001`
- Or close other apps using port 3000

**Problem: Spotify embed not showing**
- Make sure playlist is Public (not Private)
- Use the embed URL, not regular playlist URL

**Problem: Changes not showing**
- Save the file and refresh browser
- If still not working, stop server (Ctrl+C) and restart: `npm run dev`

---

## 📝 File Structure (What to Edit)

```
valentine-nextjs-complete/
├── app/
│   ├── page.js              ← Edit: Homepage text
│   ├── dedication/page.js   ← Edit: Dedication message
│   ├── playlist/page.js     ← Edit: Songs & Spotify link
│   ├── letter/page.js       ← Edit: Your love letter
│   └── final/page.js        ← Edit: Final message
└── components/
    └── MusicCard.js         ← Edit: Card designs (advanced)
```

---

## ⚙️ Advanced Options

### Change Colors
Edit `app/globals.css` - lines 10-17

### Add More Pages
Create new folder in `app/` with `page.js` file

### Add Music Player
See full README.md for detailed instructions

---

## ✅ Checklist Before Sharing

- [ ] Updated Spotify playlist URL
- [ ] Customized all song titles and reasons
- [ ] Wrote personal love letter
- [ ] Changed signature to your name
- [ ] Tested on mobile (resize browser)
- [ ] All links work correctly

---

**That's it! Enjoy your Valentine website! 💕**

For detailed documentation, see `README.md`
