/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:
      {
        tua: "#537FE7",
        bata: "#F6E6C2",
        beige: "#060047",
        abu: "#DDDDDD",
        biru: "#93C6E7",
        blue: "#2F58CD",
        bg: "#A5EFFB",
        pink: "#F16767",
        red: "#B73E3E"
      },
      backgroundImage: {
        'hero-pattern': "url('./dist/img/sekolah1.png')",
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
