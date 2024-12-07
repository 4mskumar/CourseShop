/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkmagneta' : '#63345e',
        'magneta' : '#ac61b9',
        'slate' : '#b7c1de',
        'navy' : '#0b468c',
        'darknavy' : '#092047',
      }
    },
  },
  plugins: [],
}