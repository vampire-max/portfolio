module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'Roboto' : ['Roboto', 'sans-serif'],
        'Poppins' : ['Poppins', 'sans-serif']
      },

      colors: {
        gray: {
          100: "#e0e0e0",
          200:"#ccc",
          500: "#555",
          700: "#222222",
        },

        red: {
          300: "#e45447",
        },

        blue : {
          light: "#f9f9ff",
          100: "#90acd1"
        },

        yellow: {
          500: "#ffc000"
        },

        padding: {
          16: '4.5rem'
        }
      },

      lineHeight: {
        'extra-loose': '2.5',
      },

      letterSpacing: {
        widest: '0.18em'
      },

      height: {
        xl: '35.7rem',
      },

      zIndex: {
        '9999': 9999,
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '345px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        }
      })
    }
  ],
  important: true,
}
