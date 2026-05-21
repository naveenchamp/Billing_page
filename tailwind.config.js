/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',       // Blue buttons
        background: '#F2F2F2',    // Body bg from Figma
        cardBg: '#FFFFFF',
        textPrimary: '#111827',
        textSecondary: '#6B7280', // "Back to plans" color from Figma
        border: '#E5E7EB',
        success: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}