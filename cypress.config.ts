import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ss7ape',
  e2e: {
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
