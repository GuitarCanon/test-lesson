const Mocha = require("mocha");
var mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: './docs/mochawesom-reporter',
    }
  });
  mocha.addFile("./service/router.spec.js");
  mocha.run(function () {
      console.log("done");
      process.exit();
  })