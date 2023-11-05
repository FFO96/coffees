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
        'topWide': "url('/images/topWide.png')",
        'footerWide': "url('/images/footerWide.png')",
        'footerPhone': "url('/images/footerPhone.png')",
      },
      boxShadow: {
        card: "10px 10px 20px 0px rgba(0, 0, 0, 0.25)"
      },
      colors: {
        gold: {
          300: '#D3AD7F',
          500: '#BA8039',
        },
        dark: {
          100: "#9B9B9B",
          200: "#838382",
          250: "#3A383D",
          300: "#191919",
          500: "#101011",
          DEFAULT: "#101011",
        },
        aqua: {
          200: '#77A9B0',
          DEFAULT: "#77A9B0",
        }
      }
    },
  },
  plugins: [],
}
