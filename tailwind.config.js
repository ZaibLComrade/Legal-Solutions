/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
	  colors: {
		  'custom-black': '#414040',
		  'custom-grey-1': '#707070',
		  'custom-grey-2': '#E7E7E7',
		  'custom-grey-3': '#F3F3F3',
		  'custom-deer': '#B68C5A',
		  'white': '#FFF'
	  },
    extend: {},
  },
  plugins: [require('daisyui')],
}

