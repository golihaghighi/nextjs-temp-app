import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
        black: "#1a0000",
        white:"#fffff8",
        "persian-blue": "#0067a5",
        "azure-persian-blue": "#57c5c6",
        "turquoise-persian-blue": "#1c39bb",
        "persian-indigo": "#32127a",
        "persian-rose": "#fe28a2",
        "persian-pink": "#f77fbe",
        "persian-plum": "#701c1c",
        "persian-red": "#ca3433",
        "persian-green": "#00a693",
        "persian-orange": "#d99058",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
// INCOMPLETE add famous colors
/* red
CHERRY RED #990F02
JAM #60100B
CRIMSON #B90E0A
SCARLET #900D09
WINE #4E0707
BRICK #7E2811
BLOOD #710C04
LIPSTICK #9B1003
Imperial Red #ED2939
Maroon #800000
Hibiscus #B43757
Bittersweet Shimmer #BF4F51
*/
/* orange
MERIGOLD #FCAE1E
CIDER #B56727
RUST #8D4004
GINGER #BE5504
TIGER #FC6A03
FIRE #DD571C
APRICOT #ED820E
HONEY #EC9706
CARROT #ED7117
SANDSTONE #D67229
TANGELO #FC4C02
FULVOUS #E68000
Pumpkin #F5761A
Gamboge #E89611
Pastel Orange #FEBA4F
Burnt Orange #CC5500
*/
/* yellow
TAN #E6DBAC
BEIGE #EEDC9A
MACAROON #F9E076
SAND #D8B863
SEPIA #E3B778
OYSTER #DCD7A0
BISCOTTI #E3C565
HAZELNUT #BDA55D
FLAX #EEDC82
XANTHIC #EEED09
Lemon Yellow #FDFF00
Gold #FFD700
Sunflower #FFDA03
Butter #FFFD74
Banana #FFE135
Dijon #C49102
Pastel Yellow #FFFE71
*/
/* green
JUNIPER #3A5311
LIME #AEF359
OLIVE #98BF64
MOSS #466D1D
MINT #99EDC3
PICKLE #597D35
Forest green #0B6623
Jungle green #29AB87
Army green #4B5320
Dollar Bill #85BB65
*/
/* blue
NAVY #0A1172
INDIGO #281E5D
COBALT #1338BE
OCEAN #016064
AZURE #1520A6
CERULEAN #0492C2
STONE #59788E
AEGEAN #1F456E
BLUEBERRY #241571
ADMIRAL #051094
SAPPHIRE #52B2BF
STEEL #4682B4
Baby blue #89CFF0
Carolina blue #4B9CD3
Maya blue #73C2FB
Egyptian blue #1034A6
Space Cadet #1D2951
Imperial blue #005A92
Blue-Gray #6699CC
Braves Navy #13274F
*/
/* purple
MAUVE #7A4988
BOYSENBERRY #630436
STRONG MAGENTA #A1045A
DEEP LILAC #B65FCF
GRAPE #663046
EGGPLANT #311432
IRIS #9867C5
RAISIN #290916
ORCHID #DA70D6
Veronica #A020F0
Pansy Purple #78184A
Affair #6F4685
Studio #7851A9
*/
/* pink
PUNCH #F25278
BLUSH PINK #FEC5E5
WATERMELON #FE7F9C
CORAL PINK #FE7D6A
PEACH #FC9483
STRAWBERRY #FC4C4E
ROSEWOOD #9E4244
LEMONADE #FCBACB
AMARANTH PINK #E52B50
RAZZMATAZZ #E3256B
Salmon #FF9999
Neon pink #FF6EC7
Magenta #FF00FF
Tulip pink #FF8E8E
Dust Storm #E5CCC9
Hollywood Cerise #F400A1
Steel Pink #CC3366
*/
/* Brown
brown #231709
BROWN OIL #231709
MOCHA #3C280D
PEANUT BROWN #795C34
HICKORY #371D10
WOOD #3F301D
WALNUT #432616
CARAMEL #65350F
SYRUP #481F01
TORTILLA #9A7B4F
UMBER #352315
TAWNY #80471C
PENNY #532915
BOLE #79443B
Coffee #6F4E37
Copper #B87333
Golden brown #996515
Khaki #C3B091
Ochre #CC7722
Deer #BA8759
Coconut #965A3E
chocolate #2e1503
*/
/* black
CHARCOAL #28231D
MIDNIGHT #040406
INK #070504
OIL #050100
ONYX #030104
ASPHALT #0C0404
Smoky black #100C08
Black Rock #010127
Frost Black #191C20
Alien Black #1A2228
Metropolis #1A1A1A
Natural Black #07000B
*/
/* gray
GRAPHITE #594D5B
CLOUD #C5C6D0
SMOKE #59515E
ASH #564C4D
DOVE #7C6E7F
FOG #655967
FOSSIL #787276
ARSENIC #3B444B
Marengo #4C5866
Nickel #727472
Pastel Gray #CCCDC6
Zombie Gray #63645E
*/
/* white
PEARL #FBFCF8
SNOW #F5FEFD
CREAM #FFFADA
COTTON #FBFBF9
PINK SALT #F8EEEC
LACE #F8F2ED
BONE #E7DECC
FROST #ECFBFC
RICE #FAF5EF
MILK #FDFFF5
Harp #EBF5F0
Magnolia #F8F4FF
Ceramic #FCFFF9
Brilliant White #EDF1FE
*/
