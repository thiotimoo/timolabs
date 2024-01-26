import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: ['var(--font-geist-mono)'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                fore: {
                    DEFAULT: "#000000",
                    dark: "#FFFFFF",
                },
                back: {
                    DEFAULT: "#EEEEEE",
                    dark: "#000000",
                    //dark: "#121212",
                },
                surface: {
                    DEFAULT: "#FFFFFF",
                    dark: "#000000",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
