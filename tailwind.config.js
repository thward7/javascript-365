/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      'orange-accent': '#f4792e',
      orange: '#f90',
      gray: '#ccc',
      'gray-accent': '#222',
      'gray-transparent': '#3d3d3d',
    },
    extend: {},
  },
  plugins: [],
}
