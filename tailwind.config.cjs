/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  theme: {
  extend: {},
},
purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
variants: {
  extend: {},
},
darkMode: false, // or 'media' or 'class'
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// export default {
//   plugins: [],
//     theme: {
//     extend: {},
//   },
//   purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
//   variants: {
//     extend: {},
//   },
//   darkMode: false, // or 'media' or 'class'
// }