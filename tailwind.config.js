/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor: 'var(--bg-color)',
        textMain:'var(--text-color-main)',
        textDefault:'var(--text-color-default)',
        accent:'var(--color-accent)',
        borderColor:'var(--color-border)',
        shadowColor:'var(--color-shadow)',
        error:'var(--color-error)',
        success:'var(--color-success)',
        info:'var(--color-info)',
        warning:'var(--color-warning)',
      },
    },
  },
  plugins: [],
}

