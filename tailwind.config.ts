import type { Config } from "tailwindcss";

/**
 * Tailwind Configuration for Next.js
 *
 * Features:
 * - Supports **Dark Mode** via `class`
 * - Optimized **file watching** for Next.js project structure
 * - **Extended color palette** with famous colors
 * - Custom **font families**
 * - Enhanced **transition easing functions**
 * - Includes useful **Tailwind plugins**
 */

const config: Config = {
  // Enable Dark Mode using "class" strategy
  darkMode: ["class"],

  // Define paths where Tailwind should scan for class usage
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      /**
       * Custom Easing Function
       * Adds smooth transitions for animations
       */
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.65, 0.05, 0.36, 1)",
      },

      /**
       * Custom Font Families
       */
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },

      /**
       * Extended Color Palette
       * Includes Persian colors & famous colors
       */
      colors: {
        /* 🔹 Persian Colors with Tints & Shades */
        "persian-blue": {
          DEFAULT: "#0067a5",
          1: "#F2ffFF",
          5: "#E6F3FA",
          10: "#CCE6F4",
          20: "#99CCE9",
          30: "#66B3DF",
          40: "#3399D4",
          50: "#0067a5", // Original
          60: "#005E95",
          70: "#005485",
          80: "#004A75",
          90: "#003F65",
          95: "#003355",
          99: "#000023",
        },

        "persian-indigo": {
          DEFAULT: "#32127a",
          1: "#FFFeFF",
          5: "#EAE6F3",
          10: "#D5CCE6",
          20: "#AB99CC",
          30: "#8066B3",
          40: "#553399",
          50: "#32127a", // Original
          60: "#2D106E",
          70: "#290E62",
          80: "#240B56",
          90: "#20084A",
          95: "#1A063E",
          99: "#00001c",
        },

        "persian-rose": {
          DEFAULT: "#fe28a2",
          1: "#fffaff",
          5: "#FDE6F2",
          10: "#FCCCE5",
          20: "#F99ACC",
          30: "#F667B3",
          40: "#F33499",
          50: "#fe28a2", // Original
          60: "#E32492",
          70: "#C91F82",
          80: "#AE1A72",
          90: "#931562",
          95: "#781052",
          99: "#1e0000",
        },

        "persian-red": {
          DEFAULT: "#ca3433",
          1: "#fffff8",
          5: "#F7E6E6",
          10: "#EED5D5",
          20: "#DDAAAA",
          30: "#CC8080",
          40: "#BB5555",
          50: "#ca3433", // Original
          60: "#B32F2E",
          70: "#9D2A29",
          80: "#872524",
          90: "#711F1F",
          95: "#5C1A1A",
          99: "#0f0000",
        },

        "persian-green": {
          DEFAULT: "#00a693",
          1: "#faffff",
          5: "#E6F7F5",
          10: "#CCEFEB",
          20: "#99DFD7",
          30: "#66D0C2",
          40: "#33C0AE",
          50: "#00a693", // Original
          60: "#009580",
          70: "#00846E",
          80: "#00735B",
          90: "#006249",
          95: "#005137",
          99: "#000500",
        },

        "persian-orange": {
          DEFAULT: "#d99058",
          1: "#fffffe",
          5: "#F9EFE6",
          10: "#F4E0CC",
          20: "#E9C299",
          30: "#DFA366",
          40: "#D48533",
          50: "#d99058", // Original
          60: "#C07F4E",
          70: "#A86E44",
          80: "#905D3A",
          90: "#784C30",
          95: "#603B26",
          99: "#230000",
        },

        /* 🔹 Famous Colors */
        reds: {
          cherry: "#990F02",
          jam: "#60100B",
          crimson: "#B90E0A",
          scarlet: "#900D09",
          hibiscus: "#B43757",
          lipstick: "#9B1003",
          maroon: "#800000",
        },

        oranges: {
          marigold: "#FCAE1E",
          cider: "#B56727",
          rust: "#8D4004",
          carrot: "#ED7117",
          pumpkin: "#F5761A",
          tangelo: "#FC4C02",
        },

        yellows: {
          lemon: "#FDFF00",
          gold: "#FFD700",
          sunflower: "#FFDA03",
          butter: "#FFFD74",
          banana: "#FFE135",
        },

        greens: {
          juniper: "#3A5311",
          lime: "#AEF359",
          olive: "#98BF64",
          mint: "#99EDC3",
          pickle: "#597D35",
          forest: "#0B6623",
          jungle: "#29AB87",
          army: "#4B5320",
        },

        blues: {
          navy: "#0A1172",
          indigo: "#281E5D",
          cobalt: "#1338BE",
          ocean: "#016064",
          azure: "#1520A6",
          cerulean: "#0492C2",
          admiral: "#051094",
          sapphire: "#52B2BF",
          egyptian: "#1034A6",
          space: "#1D2951",
          imperial: "#005A92",
        },

        purples: {
          mauve: "#7A4988",
          boysenberry: "#630436",
          lilac: "#B65FCF",
          orchid: "#DA70D6",
          pansy: "#78184A",
        },

        pinks: {
          punch: "#F25278",
          blush: "#FEC5E5",
          watermelon: "#FE7F9C",
          coral: "#FE7D6A",
          peach: "#FC9483",
          strawberry: "#FC4C4E",
          lemonade: "#FCBACB",
          magenta: "#FF00FF",
        },

        browns: {
          mocha: "#3C280D",
          peanut: "#795C34",
          walnut: "#432616",
          caramel: "#65350F",
          syrup: "#481F01",
          tortila: "#9A7B4F",
          umber: "#352315",
          penny: "#532915",
          coffee: "#6F4E37",
          copper: "#B87333",
        },

        grays: {
          charcoal: "#28231D",
          graphite: "#594D5B",
          cloud: "#C5C6D0",
          smoke: "#59515E",
          ash: "#564C4D",
          dove: "#7C6E7F",
          fog: "#655967",
          fossil: "#787276",
          arsenic: "#3B444B",
          marengo: "#4C5866",
          nickel: "#727472",
        },

        whites: {
          pearl: "#FBFCF8",
          snow: "#F5FEFD",
          cream: "#FFFADA",
          cotton: "#FBFBF9",
          lace: "#F8F2ED",
          bone: "#E7DECC",
          frost: "#ECFBFC",
          rice: "#FAF5EF",
          milk: "#FDFFF5",
          ceramic: "#FCFFF9",
          magnolia: "#F8F4FF",
        },
        /* 🔹 Base Colors */
        black: "#0f0000",
        white: "#fffff8",
      },
    },
  },

  /**
   * Plugins
   * - `tailwindcss-animate` → Provides pre-defined animations
   * - `@tailwindcss/typography` → Improves readability of text
   */
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
