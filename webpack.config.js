// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const DIST_DIR = path.resolve(__dirname, "dist");

const config = {
    entry: {
        "tournament-brackets-react.min": "./src/main.ts",
    },
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
    },
    devServer: {
        open: true,
        host: "localhost",
        port: 3000,
        hot: true,
        compress: true,
        historyApiFallback: true,
        static: {
            directory: DIST_DIR,
        },
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
                exclude: [
                    "/node_modules/",
                    "/jest.config.ts/",
                    "/jest.setup.ts/",
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src"),
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    { loader: "postcss-loader" },
                ],
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};
