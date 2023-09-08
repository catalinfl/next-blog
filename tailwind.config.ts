import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [{
      pastel: {
      ...require("daisyui/src/theming/themes")["pastel"],
      "primary": "#d1c1d7",
      "secondary": "#b4e9d6",
      "base-100": "#e0e7ff",
    },  
  }],
  },
  plugins: [ require("daisyui") ],
}
export default config
