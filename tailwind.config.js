/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  "darkMode": "class",
  theme: {
    extend: {
      backgroundImage: {
        'veterinario': "url('/img/veterinario.jpeg')",
        'veterinario3': "url('/img/veterinario3.jpeg')"
      }
    },
  },
  plugins: []
}

