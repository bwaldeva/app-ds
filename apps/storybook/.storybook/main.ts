import { dirname, join } from "path";

function getAbsolutePath(value): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config = {
  stories: [
    "../stories/*.mdx",
    "../stories/**/*.mdx",
    "../stories/*.stories.tsx",
    "../stories/**/*.stories.tsx",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    {
      name: getAbsolutePath("@storybook/addon-essentials"),
      options: {
        backgrounds: false,
      },
    },
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-themes"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
};

export default config;
