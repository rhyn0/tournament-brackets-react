import type { Config } from "tailwindcss";

const config = {
    prefix: "tbr-",
    content: ["./src/**/*.{tsx,ts,jsx,js}"],
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config;

export default config;
