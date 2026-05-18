/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class', // Siap untuk fitur dark mode di masa depan
  theme: {
    extend: {
      colors: {
        solar: {
          bg: '#FDFBF7',       // Putih gading hangat (nyaman dibaca)
          text: '#1B3B32',     // Hijau lumut sangat tua
          accent: '#F2BB66',   // Kuning matahari hangat
          teal: '#48E5C2',     // Cyan bio-luminesen
          darkBg: '#0D1F1A',   // Untuk alternatif dark mode
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'], // Font khusus artikel mendalam
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')], // Menangani keindahan teks otomatis
}