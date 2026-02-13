'use client'

export default function MusicCard({ type, title, reason, emoji = '♪', index = 0 }) {
  return (
    <div 
      className="group bg-white/10 backdrop-blur-md border-4 border-white rounded-2xl p-4 md:p-6 text-center transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:bg-white/20 shadow-xl hover:shadow-2xl"
      style={{
        animation: `musicCardReveal 0.6s ease both`,
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Render Vinyl or Cassette based on type */}
      {type === 'vinyl' ? (
        <VinylRecord emoji={emoji} />
      ) : (
        <CassetteTape />
      )}
      
      {/* Song Info */}
      <div className="pt-4">
        <h3 
          className="font-[family-name:var(--font-press-start)] text-white text-xs md:text-sm mb-3 leading-relaxed"
          style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}
        >
          {title}
        </h3>
        <p className="font-[family-name:var(--font-vt323)] text-[#ff9eb5] text-lg md:text-xl leading-snug">
          {reason}
        </p>
      </div>
    </div>
  )
}

// Vinyl Record Component
function VinylRecord({ emoji }) {
  return (
    <div 
      className="w-28 md:w-32 h-28 md:h-32 mx-auto mb-4 rounded-full border-3 relative transition-transform duration-500 group-hover:rotate-180"
      style={{
        background: 'radial-gradient(circle, #1a1a1a 30%, #ff1493 30%, #ff1493 35%, #1a1a1a 35%, #1a1a1a 95%, #333 95%)',
        border: '3px solid white',
        boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
      }}
    >
      {/* Vinyl Center Label */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border-2 border-white/30"
        style={{ background: 'linear-gradient(135deg, #ff69b4, #ff1493)' }}
      >
        <span className="text-2xl animate-pulse">{emoji}</span>
      </div>
      
      {/* Vinyl Grooves */}
      <div className="absolute inset-0 rounded-full opacity-20">
        <div className="absolute inset-4 rounded-full border border-white/10"></div>
        <div className="absolute inset-8 rounded-full border border-white/10"></div>
        <div className="absolute inset-12 rounded-full border border-white/10"></div>
      </div>
    </div>
  )
}

// Cassette Tape Component
function CassetteTape() {
  return (
    <div 
      className="w-32 md:w-36 h-20 md:h-24 mx-auto mb-4 bg-gradient-to-b from-[#ff1493] to-[#c71585] rounded-lg relative transition-transform duration-300 group-hover:scale-110"
      style={{
        border: '3px solid white',
        boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
      }}
    >
      {/* Cassette Window */}
      <div 
        className="absolute top-3 md:top-4 left-3 md:left-4 right-3 md:right-4 h-7 md:h-9 bg-black/60 rounded border-2 border-white/30"
      ></div>
      
      {/* Cassette Reels */}
      <div className="absolute bottom-2 md:bottom-3 left-0 right-0 flex justify-around px-4 md:px-5">
        <div 
          className="w-5 md:w-6 h-5 md:h-6 rounded-full border-2 border-white/40 animate-rotateReel"
          style={{ background: 'radial-gradient(circle, #333 40%, #666 40%, #666 60%, #333 60%)' }}
        >
          {/* Reel Center Hole */}
          <div className="w-2 h-2 bg-black/60 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div 
          className="w-5 md:w-6 h-5 md:h-6 rounded-full border-2 border-white/40 animate-rotateReel"
          style={{ 
            background: 'radial-gradient(circle, #333 40%, #666 40%, #666 60%, #333 60%)',
            animationDirection: 'reverse',
          }}
        >
          {/* Reel Center Hole */}
          <div className="w-2 h-2 bg-black/60 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      
      {/* Cassette Label Area */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-2 bg-white/20 rounded-sm"></div>
      
      {/* Cassette Screws */}
      <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
      <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
      <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
      <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
    </div>
  )
}
