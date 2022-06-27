/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
///<reference path="daisyui"/> 
module.exports = {
  plugins: [daisyui],
  theme: {
  extend: {},
  },
  content: ["./index.html",'./src/**/*.{svelte,js,ts}'],
  variants: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "retro",
  },
}

