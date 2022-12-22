import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "ss7ape",
  e2e: {
    env: {
      CYPRESS_RECORD_KEY: "690a20b7-73e9-456d-b052-72c5663d1f7a",
    },
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      let value:any;

      on("task", {
        log(message) {
          console.log(message);

          return null;
        },

        save(v) {
          value = v;

          return null;
        },

        load() {
          return value || null;
        },
      });
      // implement node event listeners here
    },
  },
});
