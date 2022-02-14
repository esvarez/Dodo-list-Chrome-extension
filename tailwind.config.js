module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regular-bk': '#343434',
        'primary': '#1E6F5C',
        'secondary': '#29BB89',
        'warning': '#F6ED46'
      }
    },
  },
  plugins: [ 
    require('@tailwindcss/forms'), 
  ],  
}
