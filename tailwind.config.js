/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-header': '#0b162a',
        'bg-main': '#082a43',
        'text-color': '#0faccf',
        're-color': '#006697',
        're-color-top': '#12a5ca',
        'card-color': '#0087a7',
        'card-color-text': '#11a5a9',
      } 
        
    },
  },
  plugins: [],
  
}