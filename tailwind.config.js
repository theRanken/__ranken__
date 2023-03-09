/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  // content: ['./src/**/*.html' /* ... */],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants:{
    extend:{}
  },
  plugins: [],
}
