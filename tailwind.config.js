/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/contact.jsx",
    "./src/pages/about.jsx",
    "./src/pages/privacy.jsx",
    "./src/pages/termsandconditions.jsx",
    "./src/components/LoginLogout.jsx",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
