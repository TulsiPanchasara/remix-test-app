const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  purge: ["./app/**/*.{ts,tsx}"],
  darkMode: false,
  content: [],
  theme: {
    screens: {
      xs: '320px',
      sm: '641px',
      md: '768px',
      lg: '1025px',
      xl: '1281px'
      // '2xl': '1537px'
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    colors: {
      primary: '#e1e1e1',
      customBlack: {
        1: '#010101',
        2: '#9a9a9a',
        3: '#2c2c2c',
        4: '#616167',
        5: '#414141',
        6: '#2a2829',
        7: '#9c9c9c'
        // 6: '#212529',
        // 7: '#505050',
        // 8: '#696969',
        // 9: '#050505',

        // 11: '#030303',
        // 13: '#9f9f9f'
      },
      customGray: {
        1: '#808080',
        2: '#C9C9C9',
        3: '#606060',
        // 4: '#7b7b7b',
        4: '#F7F7F7',
        5: '#f4f4f4',
        6: '#5e5e5e'
        // 7: '#484848',
        // 8: '#7e7e7e',
        // 9: '#767676',
        // 10: '#8b8b8b',
        // 11: '#f0f0f0',
        // 12: '#d7d7d7',
        // 13: '#b1b1b1',
        // 14: '#f5f5f6',
        // 15: '#f2f2f2',
      },
      customRed: {
        1: '#f01818',
        2: 'green'
        // 3: '#fa392f',
        // 4: '#DE2B24',
      },
      customPink: {
        1: '#ff5f9f',
        2: '#c03b71'
      },
      customBlue: {
        1: '#bfdbfe',
        2: '#93c5fd',
        3: '#60a5fa',
        4: '#3b82f6',
        5: '#2563eb',
        6: '#1d4ed8',
        7: '#1e40af',
        8: '#1e3a8a',
      },
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      red: colors.red,
      gray: {
        400: colors.coolGray['400'],
        500: colors.coolGray['500'],
        900: colors.coolGray['900']
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
      // oswald: ['Oswald', 'sans-serif'],
      // sourceSansPro: ['Source Sans Pro', 'sans-serif'],
      // springfieldSlant: ['Springfield Slant'],
      // openSans: ['Open Sans', 'sans-serif']
    },
    zIndex: {
      1: -1,
      0: 0,
      10: 10,
      20: 20,
      25: 25,
      30: 30,
      40: 40,
      50: 50,
      75: 75,
      99: 99,
      100: 100,
      999: 999,
      9999: '9999',
      auto: 'auto',
      modal: '999999',
      options: '9999999'
    },
    opacity: {
      0: '0',
      25: '.25',
      75: '.75',
      10: '.1',
      20: '.2',
      30: '.3',
      40: '.4',
      50: '.5',
      60: '.6',
      70: '.7',
      80: '.8',
      90: '.9',
      100: '1'
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
