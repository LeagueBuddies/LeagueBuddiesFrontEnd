/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "primaryColor": "#4338CA", //blue
      "bgColor": "#1A103C", // For most pages, dark purple blue
      "textColor": "#E4E4E4", //white
      "footer": "#C3CAD5", //grey
      "black": "#070410",
      "secondaryColor": "#D62839", //orangered 
      'whiteColor': '#FFFFFF'
    }
  },
  plugins: [],
}
