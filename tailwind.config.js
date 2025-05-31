/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        primary: {
          light: '#6D28D9',  // Color primario en versión clara
          DEFAULT: '#5B21B6',  // Color primario por defecto
          dark: '#4C1D95',  // Color primario en versión oscura
          secondary: {
            light: '#34D399',  // Color secundario en versión clara
            DEFAULT: '#10B981',  // Color secundario por defecto
            dark: '#059669',  // Color secundario en versión oscura
          },
          accent: {
            light: '#F472B6',  // Color de acento en versión clara
            DEFAULT: '#EC4899',  // Color de acento por defecto
            dark: '#DB2777',  // Color de acento en versión oscura
          },
          neutral: {
            light: '#F3F4F6',  // Color neutro en versión clara
            DEFAULT: '#D1D5DB',  // Color neutro por defecto
            dark: '#9CA3AF',  // Color neutro en versión oscura
          },
          background: {
            light: '#FFFFFF',  // Color de fondo en versión clara
            DEFAULT: '#F9FAFB',  // Color de fondo por defecto
            dark: '#1F2937',  // Color de fondo en versión oscura
          },
          text: {
            light: '#1F2937',  // Color del texto en versión clara
            DEFAULT: '#111827',  // Color del texto por defecto
            dark: '#F9FAFB',  // Color del texto en versión oscura
          },
          blackish: "#1b1b1b",
        },

    },
  },
  plugins: [],
},
};