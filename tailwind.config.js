/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blur": "rgba(0, 0, 0, 0.70)"
      },

      backgroundImage: {
        'order-image': 'url("./src/assets/images/order.webp")',
        'bg-gradient': 'linear-gradient(236deg, rgba(244,244,244,.21), rgba(255,255,255,.08))'
      },
      
      colors: {
        'primary-color': '#3c6469',
        'secondary-color': '#c19b7c',
        'text-color': '#b00c00'
      },

      boxShadow: {
        'button-shadow': '0 2px 5px rgba(0,0,0,.2)',
        'card': '0 20px 20px rgba(0,0,0,.1), 0 2px 5px rgba(0,0,0,.1)',
        'card-shadow': '0 10px 20px rgba(0,0,0,.05), 0 2px 5px rgba(0,0,0,.05)',
      },

      fontFamily: {
        'SG': ['Schibsted Grotesk', 'sans-serif']
      },

      keyframes: {
        slideDown: {
          '0%': { top: '100%'},
          '100%': { top: '190%'}
        }
      },

      animation: {
        slideDown: 'slideDown 0.3s ease-in'
      }
    },
  },
  plugins: [],
}