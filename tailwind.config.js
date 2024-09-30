/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray': {
        100: '#f3f4f6',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      'Slate': {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: '#e2e8f0',
      },
      'red': {
        600: '#dc2626',
        700: '#F83839',
      },
      "Blue": '#3b82f6',
      "green": "#32CD32",
      "yellow": "#f6f100",
      "backGround": "#e9e9e9",
    },
    extend: {
      fontFamily: {
        vazirmatn100: ['Vazirmatn100'],
        vazirmatn200: ['Vazirmatn200'],
        vazirmatn300: ['Vazirmatn300'],
        vazirmatn400: ['Vazirmatn400'],
        vazirmatn500: ['Vazirmatn500'],
      },
    },
  },
  plugins: [],
}