import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            perspective: {
                "120": "120px",
            },
            perspectiveOrigin: {
                bottom: "bottom",
            },
            colors: {
                kana: "#C47B5A",
                gelica: "#FE552A",
                "outrageous-orange": {
                    "50": "#fff3ed",
                    "100": "#ffe2d4",
                    "200": "#ffc2a9",
                    "300": "#ff9772",
                    "400": "#fe552a",
                    "500": "#fd3812",
                    "600": "#ee1e08",
                    "700": "#c51109",
                    "800": "#9c1010",
                    "900": "#7e1110",
                    "950": "#440608",
                },
            },
        },
    },
    plugins: [],
};
export default config;
