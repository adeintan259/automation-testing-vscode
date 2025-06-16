const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'your-project-id-here',
  e2e: {
    setupNodeEvents(on, config) {
      // custom setup
    },
  },
})

