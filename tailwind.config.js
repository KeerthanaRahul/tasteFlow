/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f8f3ef',
            100: '#e9dfd5',
            200: '#d9c9b9',
            300: '#c6af9a',
            400: '#b39781',
            500: '#9c7a61',
            600: '#8c6d55',
            700: '#725744',
            800: '#5D4037', // Main primary color
            900: '#4a352e',
          },
          secondary: {
            50: '#fcfaf5',
            100: '#f9f5e8',
            200: '#f3e8cb',
            300: '#ead6a5',
            400: '#e0c17c',
            500: '#D4AF37', // Main secondary color
            600: '#c79b2a',
            700: '#a57d23',
            800: '#866423',
            900: '#6e521f',
          },
          accent: {
            50: '#f7f7f7',
            100: '#efefef',
            200: '#dfdfdf',
            300: '#cacaca',
            400: '#a8a8a8',
            500: '#8f8f8f',
            600: '#757575',
            700: '#666666',
            800: '#484848',
            900: '#2a2a2a',
          },
          cream: '#F5F5F5',
        },
        fontFamily: {
          'serif': ['"Playfair Display"', 'serif'],
          'sans': ['Poppins', 'sans-serif'],
        },
        boxShadow: {
          'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
          'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        },
        backgroundImage: {
          'texture': "url('https://images.pexels.com/photos/7135121/pexels-photo-7135121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
        },
      },
    },
    plugins: [],
  };