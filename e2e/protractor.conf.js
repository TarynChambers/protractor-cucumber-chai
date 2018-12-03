// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 10000,
  SELENIUM_PROMISE_MANAGER: false,
  specs: [
    './src/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome',
    /**
     * If this is set to be true, specs will be sharded by file (i.e. all
     * files to be run by this set of capabilities will run in parallel).
     * Default is false.
     */
    shardTestFiles: true
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  restartBrowserBetweenTests: true,
  cucumberOpts: {
    format: ['progress', './node_modules/cucumber-pretty:output.txt', './node_modules/cucumber-pretty'],
    compiler: [],
    require: [
      './src/stepDefinitions/**/*.ts',
    ],  // require step definition files before executing features
    tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    strict: true,                  // <boolean> fail if there are any undefined or pending steps
    'dry-run': false,              // <boolean> invoke formatters without executing steps
  },
  /**
   * A callback function called once protractor is ready and available, and
   * before the stepDefinitions are executed. If multiple capabilities are being run,
   * this will run once per capability.
   *
   * You can specify a file containing code to run by setting onPrepare to
   * the filename string. onPrepare can optionally return a promise, which
   * Protractor will wait for before continuing execution. This can be used if
   * the preparation involves any asynchronous calls, e.g. interacting with
   * the browser. Otherwise Protractor cannot guarantee order of execution
   * and may start the tests before preparation finishes.
   *
   * At this point, global variable 'protractor' object will be set up, and
   * globals from the test framework will be available. For example, if you
   * are using Jasmine, you can add a reporter with:
   *
   *    jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
   *      'outputdir/', true, true));
   *
   * If you need access back to the current configuration object,
   * use a pattern like the following:
   *
   *    return browser.getProcessedConfig().then(function(config) {
   *      // config.capabilities is the CURRENT capability being run, if
   *      // you are using multiCapabilities.
   *      console.log('Executing capability', config.capabilities);
   *    });
   */
  onPrepare: function () {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

    const {Given, Then, When, Before} = require('cucumber');
    global.Given = Given;
    global.When = When;
    global.Then = Then;
    global.Before = Before;
  }
};
