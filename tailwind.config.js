/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}","./public/index.html"],
  theme: {
    extend: {
      placeholderColor: {
        'black': '#000000',
      },
    },
  },
  plugins: [
    // require('daisyui'),
  ],
}

