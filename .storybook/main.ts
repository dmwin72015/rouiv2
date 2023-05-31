import path from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../packages/react/*/sb/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: true,
        sass: {
          implementation: require("sass"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        ...convertTsConfigPathsToWebpackAliases(),
      },
    },
  }),
};

function convertTsConfigPathsToWebpackAliases() {
  const rootDir = path.resolve(__dirname, "../");
  const tsconfig = require("../tsconfig.json");
  if (!tsconfig.compilerOptions.paths) {
    return {};
  }
  const tsconfigPaths = Object.entries<string[]>(
    tsconfig.compilerOptions.paths
  );
  return tsconfigPaths.reduce((aliases, [realPath, mappedPath]) => {
    aliases[realPath] = path.join(rootDir, mappedPath[0]);
    return aliases;
  }, {});
}

export default config;
