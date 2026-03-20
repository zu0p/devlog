import type { StorybookConfig } from "@storybook/nextjs-vite"
import { mergeConfig } from "vite"
import path, { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config: StorybookConfig = {
  stories: [
    "../ds/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../ds/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-postcss",
  ],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../"),
        },
      },
    })
  },
}
export default config
