/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}","./public/index.html"],
  theme: {
    extend: {
      placeholderColor: {
        'black': '#000000',
      },
      backgroundColor: {
        'custom-rgba': 'rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [
    // require('daisyui'),
  ],
}

