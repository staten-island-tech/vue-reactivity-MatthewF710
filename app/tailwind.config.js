/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ALDIdarkblue: '#001f78',
      ALDIblue: '#305464',
      ALDIred: '#f03d14',
      ALDIorange: '#fc6c0c',
      ALDIyellow: '#ffbf45',
      ALDIblack: '#000000',
      ALDIwhite: '#ffffff',
      ALDIgray: '#20242c',
    },
    extend: {
      fontFamily: {
        ALDIFont: ['Darumadrop One', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
