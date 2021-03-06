const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
      },
    },
    fontFamily: {
      sans: [
        "Ubuntu",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Oxygen"',
        "Ubuntu",
        '"Cantarell"',
        "sans-serif",
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    extend: {
      colors: {
        gray: colors.blueGray,
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    // require('@tailwindcss/custom-forms'),
  ],
  purge: {
    enabled: true,
    content: ["./src/**/*.vue"],
  },
};
