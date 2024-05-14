import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-styling-webpack",
            options: {
                rules: [
                    {
                        test: /\.css$/,
                        sideEffects: true,
                        use: [
                            require.resolve("style-loader"),
                            {
                                loader: require.resolve("css-loader"),
                                options: {
                                    importLoaders: 1,
                                },
                            },
                            {
                                loader: require.resolve("postcss-loader"),
                                options: {
                                    implementation: require.resolve("postcss"),
                                },
                            },
                        ],
                    },
                ],
            },
        },
        "@storybook/addon-themes",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    typescript: {
        check: true,
    },
};
export default config;
