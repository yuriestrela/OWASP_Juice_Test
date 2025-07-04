const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));
      return config;
    },
    baseUrl: "https://juice-shop.herokuapp.com/",
    specPattern: "cypress/e2e/features/*.feature",
    stepDefinitions: "cypress/e2e/step_definitions/**/*.{js,ts}"
  }
});
