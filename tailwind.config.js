/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que todas las rutas relevantes están aquí
  ],  
  theme: {
    extend: {
      colors: {
        'custom-bg': '#090E1A', 
      },
    },
  },
  plugins: [],
};
