const { theme } = require('./src/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: theme.colors,
      fontSize: theme.fontSize,
      borderRadius: theme.borderRadius,
      transitionDuration: {
        DEFAULT: theme.transitions.DEFAULT,
      },
      maxWidth: {
        container: '1440px',
      },
    },
  },
  plugins: [],
} 