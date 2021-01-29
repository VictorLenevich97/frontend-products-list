const CracoAlias = require("craco-alias");
const CracoLessPlugin = require("craco-less");
const ThemeVars = require("./src/styles/theme-vars");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { ...ThemeVars },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
