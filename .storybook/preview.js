import "../src/";
import { withThemeByClassName } from "@storybook/addon-themes";
/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [
        withThemeByClassName({
            themes: {
                // nameOfTheme: 'classNameForTheme',
                light: "",
                dark: "dark",
            },
            defaultTheme: "light",
        }),
    ],
};

export default preview;
