/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-secondary': '#1A1A1A',
        'bg-card': '#1E1E1E',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B0B0',
        'text-tertiary': '#808080',
        'accent-primary': '#6C5CE7',
        'accent-secondary': '#00D4AA',
        'badge-red': '#FF3B30',
        'notification-orange': '#FF9500',
        'border-color': '#2A2A2A',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'mobile': '428px',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      addUtilities({
        '.bg-bg-primary': { backgroundColor: theme('colors.bg-primary') },
        '.bg-bg-secondary': { backgroundColor: theme('colors.bg-secondary') },
        '.bg-bg-card': { backgroundColor: theme('colors.bg-card') },
        '.text-text-primary': { color: theme('colors.text-primary') },
        '.text-text-secondary': { color: theme('colors.text-secondary') },
        '.text-text-tertiary': { color: theme('colors.text-tertiary') },
        '.bg-accent-primary': { backgroundColor: theme('colors.accent-primary') },
        '.bg-accent-secondary': { backgroundColor: theme('colors.accent-secondary') },
        '.bg-badge-red': { backgroundColor: theme('colors.badge-red') },
        '.bg-notification-orange': { backgroundColor: theme('colors.notification-orange') },
        '.border-border-color': { borderColor: theme('colors.border-color') },
        '.text-accent-primary': { color: theme('colors.accent-primary') },
      })
    },
  ],
}
