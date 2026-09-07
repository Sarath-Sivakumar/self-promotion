/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#08090B',
          secondary: '#101216',
          card: '#12141A',
          hover: '#181A22',
        },
        content: {
          main: '#F5F5F5',
          secondary: '#A3A3A3',
          muted: '#737373',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          hover: 'rgba(255, 255, 255, 0.15)',
          accent: 'rgba(124, 140, 255, 0.3)',
        },
        accent: {
          primary: '#7C8CFF',
          secondary: '#A78BFA',
          muted: 'rgba(124, 140, 255, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        card: '16px',
        btn: '10px',
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 30px -4px rgba(0, 0, 0, 0.7)',
        glow: '0 0 35px -5px rgba(124, 140, 255, 0.15)',
      },
      lineHeight: {
        relaxed: '1.7',
      }
    },
  },
  plugins: [],
}
