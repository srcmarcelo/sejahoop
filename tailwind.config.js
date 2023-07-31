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
      colors: {
        primary: '#1C3D8D',
        secondary: '#0D1B47',
        tertiary: '#2DA186',
        tertiaryDark: '#248A77',
        tertiaryLight: '#5CEECC',
        footer: '#49F1C9',
      },
      fontSize: {
        xxs: '0.6rem',
        '4.5xl': '2.5rem'
      },
      maxHeight: {
        145: '580px',
        165: '660px',
      },
      maxWidth: {
        'xxs': '260px',
      }
    },
  },
  plugins: [],
};
