/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    minHeight: {
      "2/3": "66.6vh",
      "3/4": "75vh",
    },
    extend: {
      colors: {
        primary: {
          700: "#090E43",
          900: "#050824",
        },
        accent: {
          // 400: "#FF5335",
          400: "#E86840",
        },
      },
    },
  },
  plugins: [],
};
