/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brightGray: '#37384E',
        ebonyClay: '#232743',
        mistyRose: 'rgba(255,232,230,0.9)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
