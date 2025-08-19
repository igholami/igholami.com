/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#1a1a1a',
        card: '#1f1f1f',
        border: '#333333',
        'text-primary': '#ffffff',
        'text-secondary': '#b0b0b0',
        'text-muted': '#808080',
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        },
        success: '#10b981',
        warning: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '50': '12.5rem',
        '88': '22rem',
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.2' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.2' }],
      },
      lineHeight: {
        '1.6': '1.6',
      },
    },
  },
  plugins: [],
}