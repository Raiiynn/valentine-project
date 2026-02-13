/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['var(--font-press-start)'],
        'vt323': ['var(--font-vt323)'],
      },
      colors: {
        'valentine': {
          'purple-dark': '#2d1b69',
          'purple-mid': '#5c3d9e',
          'pink-light': '#ff9eb5',
          'pink-bright': '#ff6b9d',
          'orange': '#ff8c42',
          'yellow': '#ffd93d',
          'blue-dark': '#1a2456',
          'green-dark': '#2d4a3e',
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease forwards',
        'float': 'float 3s ease-in-out infinite',
        'twinkle': 'twinkle 3s infinite',
        'slideDown': 'slideDown 0.6s ease',
        'slideUp': 'slideUp 0.6s ease',
        'spinVinyl': 'spinVinyl 8s linear infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
        'floatHearts': 'floatHearts 3s ease-in-out infinite',
        'musicCardReveal': 'musicCardReveal 0.6s ease both',
        'pulse': 'pulse 2s ease-in-out infinite',
        'rotateReel': 'rotateReel 2s linear infinite',
        'photoReveal': 'photoReveal 0.6s ease both',
        'flutter': 'flutter 2s ease-in-out infinite',
        'floatParticle': 'floatParticle 4s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' }
        },
        slideDown: {
          'from': { transform: 'translateY(-100px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        slideUp: {
          'from': { transform: 'translateY(100px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        spinVinyl: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '10%, 30%': { transform: 'scale(1.05)' },
          '20%, 40%': { transform: 'scale(1)' }
        },
        floatHearts: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        musicCardReveal: {
          'from': { opacity: '0', transform: 'translateY(30px) scale(0.9)' },
          'to': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        },
        rotateReel: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        },
        photoReveal: {
          'from': { transform: 'scale(0) rotate(180deg)', opacity: '0' },
          'to': { transform: 'scale(1) rotate(0)', opacity: '1' }
        },
        flutter: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(5deg)' },
          '75%': { transform: 'translateY(-5px) rotate(-5deg)' }
        },
        floatParticle: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(50px)', opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}
