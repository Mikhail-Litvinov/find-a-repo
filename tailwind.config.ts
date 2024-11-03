import type { Config } from 'tailwindcss'

const config: Config = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '360px',
        md: "768px",
        xl: "1024px"
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
export default config
