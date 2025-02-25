/** @type {import('tailwindcss').Config} */
export default {
  mode: 'aot',
  purge: false,

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PPNeueMontreal Regular', 'sans-serif'], // Normal para el cuerpo
        mono: ['PPNeueMontrealMono Regular', 'monospace'], // Mono Regular
      },
      fontWeight: {
        normal: 400, // Regular
        medium: 500, // Medium
        semibold: 600, // Puedes usar Medium en lugar de SemiBold si decides eso
        bold: 700, // Bold o Mono Bold
      },
      screens: {
        'short': { 'raw': '(max-height: 660px)' },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
