import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    body: {
      bg: "background.default",
      color: "text.default",
      _dark: {
        bg: "background._dark",
        color: "text._dark",
      },
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Georgia, serif" },
        body: { value: "Arial, sans-serif" },
      },

      colors: {
        brand: {
          50: { value: "#f5f7ff" },
          100: { value: "#e6e9ff" },
          200: { value: "#c5c9ff" },
          300: { value: "#a3a8ff" },
          400: { value: "#8187ff" },
          500: { value: "#5f66ff" },
          600: { value: "#4c52cc" },
          700: { value: "#393d99" },
          800: { value: "#262966" },
          900: { value: "#131433" },
        },
      },
    },
    semanticTokens: {
      colors: {
        text: {
          default: { value: "#000000" },
          _dark: { value: "#ffffff" },
        },
        background: {
          default: { value: "#ffffff" },
          _dark: { value: "#000000" },
        },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
