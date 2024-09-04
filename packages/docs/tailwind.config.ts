/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./**/*.md', './node_modules/lcc-vue/src/{components,directives}/**/*.{vue,ts}'],
  theme: {
    extend: {}
  },
  plugins: [daisyui]
}
