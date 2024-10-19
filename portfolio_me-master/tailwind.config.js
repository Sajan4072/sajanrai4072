/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{tsx,js,jsx}","./component/**/*.{tsx,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'custom':'linear-gradient(145deg, #1e2024, #23272b)'
      },
      colors:{
        'template':'#212428'
      },
      boxShadow:{
        'custom':'10px 10px 19px #1c1e22,-10px -10px 19px #262a2e',
        'nemorph':'34px 34px 68px #121416,-34px -34px 68px #30343a'
      },
      fontFamily: {
        'poppin-sans': ['Poppins', 'sans-serif'],
      },
      translate: {
        '45deg': 'rotate(45deg)',
      },
      animation:{
        'barAnimation': 'barAnimation 3s linear infinite',
        'up':'overlayEffectUp 1s ease-in-out',
        'down':'overlayEffectDown  1s ease-in-out',
        'fadeOut':'fadeOut',
        'fadeIn':'fadeIn',
        'ltr':'ltr 3s linear forwards',
        'ttb':'ttb 3s linear ease-in-out',
        'openclose':'openclose 5s ease-in-out infinite',
        'slideup':'slideup 2s '
      },
      keyframes: {
        barAnimation:{
          'from':{
              '-webkit-transform':'translateX(0)',
              transform:'translateX(0)'
          },
          'to':{
              '-webkit-transform':'translateX(75px)',
              transform:'translateX(75px)'
          }
        },
       
        //overlay effectup 
         overlayEffectUp:{
          "0%":{
              "-webkit-transform":"translateY(100%)",
              transform:"translateY(100%)"
          },
          "35%,65%":{
              "-webkit-transform":"translateY(0)",
              transform:"translateY(0)"
          },
          "100%":{
              '-webkit-transform':'translateY(-100%)',
              transform:"translateY(-100%)"
          }
        },
        overlayEffectDown:{
          "0%":{
              "-webkit-transform":"translateY(-100%)",
              "transform":"translateY(-100%)"
          },
          "35%,65%":{
              "-webkit-transform":"translateY(0)",
              "transform":"translateY(0)"
          },
          "100%":{
              "-webkit-transform":"translateY(100%)",
             " transform":"translateY(100%)"
          }
      },
       fadeOut:{
          from:{
              opacity:1
          },
          to:{
              opacity:0
          }
      },
      fadeIn:{
          from:{
              opacity:0
          },
          to:{
              opacity:1
          }
     },
     ltr:{
      '0%':{
        width: '0%'
      },
      '100%': {
        width: '100%'
      }
    },
    ttb:{
      "0%":{marginTop:'0rem'},
    "100%":{heightTop:'2.5rem'}
    },
    slideup:{
      from :{
        marginTop: "20rem"
      },
  
      to: {
        
      }
    },
      },

    }
  },
  plugins: [],
}
