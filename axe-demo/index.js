// here we are grabbing axe builder
// this will tell selenium how to do automated testing of the page 
var AxeBuilder = require('axe-webdriverjs');
// this is the selenium web driver that is going to automate 
// opening up a browser and sending commands to it
var WebDriver = require('selenium-webdriver');

// we start things off by creating a new instance of 
// WebDriver and we tell it which browser we want to use
var driver = new WebDriver.Builder()
  .forBrowser('chrome')
  .build();

driver
  .get('https://jjavorek.github.io/') // this returns a promise for when it's finally ready to go
  .then(function () {
    AxeBuilder(driver) // here we say ok take axe-builder and make sure it has been passed the instance of Selenium WebDriver
      .analyze(function (results) { // and tell it to analyze the given url
        console.log(results); //when it does that it is going to return a JS object full of results
      });
  });

//   before this can run we need to install ChromeDriver for Selenium (every browser has a sort of specific binary that it need to work with Selenium)

