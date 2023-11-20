/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary_70: '#695CFF',
        secondary_70: '#FFE366',
        bg: '#FDFDFD',
        Neutral_10: '#EFEFEF',
        Neutral_30: '#C9C9C9',
        Neutral_70: '#393939',
        Neutral_90: '#1A1A1A',
        Eror_70: '#ef4444',
      },
      fontFamily: {
        worksans: ['Work+Sans'],
        Poppins: ['Poppins'],
        title: ['clash display'],
      },
    },
  },
  plugins: [],
};
