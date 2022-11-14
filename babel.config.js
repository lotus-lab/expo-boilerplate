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
            app: "./src/app",
            assets: "./src/assets",
            locals: "./src/locals",
            navigation: "./src/navigation",
            styles: "./src/styles",
            utils: "./src/utils",
            types: "./src/types",
            components: "./src/components",
          },
        },
      ],
    ],
  };
};
