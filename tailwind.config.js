module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
      },
    },
    fontFamily: {
      sans: [
        'Cabin',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Oxygen"',
        'Ubuntu',
        '"Cantarell"',
        'sans-serif',
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/custom-forms'),
  ],
  purge: {
    enabled: true,
    content: ['./src/**/*.vue'],
  },
}


