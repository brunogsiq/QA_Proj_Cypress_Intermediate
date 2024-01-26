const { defineConfig } = require('cypress')

module.exports = defineConfig({
	viewportWidth: 1300,
	viewportHeight: 800,
	//chromeWebSecurity: false,
	reporter: "mochawesome",
	reporterOptions: {
		reportDir: 'cypress/report',
		overwrite: true,
		html: true,
		json: false,
		timestamp: 'dd-mm-yyyy_HH-MM-ss',
		overwrite: false,
	},
	e2e: {
		experimentalRunAllSpecs: true,
		baseUrl: 'http://localhost',
	},
	fixturesFolder: false,
	video: false,
})
