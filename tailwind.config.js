/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/public/assets/images/webp/hero-car-bg.webp')",
      },
      colors: {
        "dark-blue": "#0046AD",
        "dark-gray": "#525252",
        "deep-blue":"#023DA0"
      },
      screens: {
        xlg: '1050px',
        lg: '1025px',
        md: '770px',
      },
      fontSize: {
        'custom-13': '13px',
        'custom-61': '61px',
        'custom-22': '22px',
        'custom-64': '64px',
      },
    },
  },
  plugins: [],
}