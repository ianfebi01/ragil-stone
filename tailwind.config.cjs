/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT : "1rem",
        md      : "2rem",
        lg      : "1rem",
        xxl     : "4rem",
      },
      screens: {
        lg  : "1280px",
        xxl : "1640px",
      },
    },
    extend: {
      colors: {
        primary : "#A70B20",
        red     : "#EF373E",
        maroon  : "#540026",
        white   : "#FFFFFF",
        grey    : "#BEB7B3",
        yellow  : "#E59818",
        purple  : "#6E0F6C",
        pink    : "#D987D3",
        dust    : "#EFEFEF",
        black   : "#000000",
      },
      lineHeight: {
        normal: "1.1",
      },
    },
    fontFamily: {
      primary: [
        "Inter",
        "Arial",
        "-apple-system",
        "BlinkMacSystemFont",
        "\"Segoe UI\"",
        "Roboto",
        "\"Helvetica Neue\"",
        "sans-serif",
        "\"Apple Color Emoji\"",
        "\"Segoe UI Emoji\"",
        "\"Segoe UI Symbol\"",
      ],
      secondary: [
        "Montserrat",
        "Inter",
        "Arial",
        "-apple-system",
        "BlinkMacSystemFont",
        "\"Segoe UI\"",
        "Roboto",
        "\"Helvetica Neue\"",
        "sans-serif",
        "\"Apple Color Emoji\"",
        "\"Segoe UI Emoji\"",
        "\"Segoe UI Symbol\"",
      ],
      code: ["\"Source Code Pro\""],
    },
  },
}
