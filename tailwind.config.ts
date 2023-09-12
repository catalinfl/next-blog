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
      "primary": "#62466d",
      "secondary": "#cfc1d7",
      "base-100": "#a383af",
    },  
  }],
  },
  plugins: [ require("daisyui") ],
}
export default config
