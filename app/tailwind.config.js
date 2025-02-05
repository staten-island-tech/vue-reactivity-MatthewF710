/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ALDIdarkblue: '#001f78',
      ALDIlightblue: '#00b5db',
      ALDIred: '#f03d14',
      ALDIorange: '#fc6c0c',
      ALDIyellow: '#ffbf45',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}
