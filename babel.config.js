module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            src: ["./src"],
            // app: "./src/app",
            // assets: "./src/assets",
            // locales: "./src/locales",
            // navigation: "./src/navigation",
            // styles: "./src/styles",
            // utils: "./src/utils",
            // types: "./src/types",
            // components: "./src/app/components",
          },
          root: ["./"],
          extensions: [".tsx", ".json", ".ts", ".js", ".jsx"],
        },
      ],
    ],
  };
};
