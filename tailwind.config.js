/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray': {
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
    extend: {
      fontFamily: {
        vazirmatn100: ['Vazirmatn100'],
        vazirmatn200: ['Vazirmatn200'],
        vazirmatn300: ['Vazirmatn300'],
        vazirmatn300: ['Vazirmatn400'],
        vazirmatn500: ['Vazirmatn500'],
      },
    },
  },
  plugins: [],
}