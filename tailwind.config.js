/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'rose-pale': '#F8D6D0',
        'green-login': '#418877',
        'green-header': '#A7D2C2'
    },
    colors: {
      'rose-pale': '#F8D6D0',
      'green-login': '#418877'
    },
    height: {
      'screen-whitout-header': '87vh',
  },
  plugins: [],
}
  }}
