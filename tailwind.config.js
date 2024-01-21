/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/contact.tsx",
    "./src/pages/about.tsx",
    "./src/pages/privacy.tsx",
    "./src/pages/termsandconditions.tsx",
    "./src/components/LoginLogout.tsx",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
