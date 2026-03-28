/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:    '#0b1628',
        navy:   '#102040',
        navy2:  '#1a3560',
        navy3:  '#22477a',
        gold:   '#c8a84b',
        gold2:  '#e2c26e',
        gold3:  '#f5e4b0',
        cream:  '#f9f7f2',
        paper:  '#f2efe8',
        line:   '#e4e0d6',
        muted:  '#8e8b84',
        body:   '#3d3a34',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        outfit:   ['Outfit', 'sans-serif'],
        mono:     ['"DM Mono"', 'monospace'],
      },
      keyframes: {
        fuUp:        { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'none' } },
        floatY:      { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        rotateSlow:  { to: { transform: 'translate(-50%,-50%) rotate(360deg)' } },
        marquee:     { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        strk:        { '0%': { top: '-100%' }, '100%': { top: '100%' } },
        pgreen:      { '0%,100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(74,222,128,.4)' }, '50%': { opacity: '.8', boxShadow: '0 0 0 5px rgba(74,222,128,0)' } },
        shimmer:     { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        'fu-up':       'fuUp .7s forwards',
        'float-y':     'floatY 5s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 30s linear infinite',
        'rotate-rev':  'rotateSlow 18s linear infinite reverse',
        marquee:       'marquee 28s linear infinite',
        strk:          'strk 2s ease-in-out infinite',
        pgreen:        'pgreen 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
