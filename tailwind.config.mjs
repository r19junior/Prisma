/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        prisma: {
          'dark-red': '#9d0116',
          'red': '#b43238',
          'light-red': '#fb6068',
          'pink': '#ffcfd1',
          'white': '#f8f8f8',
          'black': '#0a0a0a',
          'edu': '#d61c30',        
          'env': '#4b9f37',        
          'inc': '#dd1367',        
          'cul': '#f89d2c',        
          'health': '#66015c',     
          'citizen': '#00689d'     
        }
      },
      fontFamily: {
        'display': ['"Archivo Black"', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
        'brand': ['Gilker', 'sans-serif'],
        'brand-alt': ['"JA Jayagiri Sans"', 'sans-serif'],
      },
      cursor: {
        none: 'none',
      }
    },
  },
  plugins: [],
}
