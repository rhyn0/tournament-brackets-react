import type { Config } from "tailwindcss";

const config = {
    content: ["./src/**/*.{tsx,ts,jsx,js}", "index.ts"],
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config;

export default config;
