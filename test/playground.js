
'use strict';

// ====== for node

var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until,
  test = require('selenium-webdriver/testing');

// =======


// test.describe('Yandex Search', function() {
//   var driver;
//   test.before(function() {
//     driver = new Driver();
//   });
//   test.it('should append query to title', function() {
//     driver.get('https://ya.ru');
//     driver.sleep(1000);
//     driver.findElement(By.name('text')).sendKeys('webdriver'+Key.ENTER);
//     driver.sleep(1000);
//     //driver.findElement(By.name('text')).submit();
//    // driver.findElement(By.name('text')).sendKeys(Key.ENTER);
//
//   });
//   test.after(function() {
//     //driver.quit();
//   });
// });


// let driver = new Driver();
//
// driver.get('chrome://newtab');
//driver.wait(until.elementLocated(By.className('b-tumbs__item_index_0')), 3000);

// переключаемся в бэкграуд ВЗ (пока просто по id, потом сделаем универсально)
//driver.switchTo().extension('nkcpopggjcjkiicpenikeogioednjeac');


//
 //driver.get('https://google.ru');
// // // driver.findElement(By.name('q')).sendKeys('yandex')//.then(() => wwww())
// // // driver.findElement(By.name('btnG')).click();

// driver.getCurrentUrl().then(result => {
//   console.log('result1:', result)
// });
//
// //driver.findElement({css: '.__altsearch_ext_root__'}).then(() => console.log('found!'))
//
// driver.navigate().newTab('http://mail.ru');
//
// driver.getCurrentUrl().then(result => {
//   console.log('result2:', result)
// });
//
// driver.quit();

// demo

// describe('qqq', function () {
//   before(function(done) {
//     console.log('before')
//     asdf()
//     done();
//   })
//
//  after(function() {
//   console.log('after')
//
//  });
//
//   it('www', function(done) {
//
//     console.log('simple test')
//     setTimeout(done, 1000)
//   })
// })


/*
test.describe('demo', function() {
  let driver;

  test.before(function() {
     driver = new Driver();
    // dfgdf()
    // setTimeout(() => {
    //   //dfgdf();
    //
    // }, 0)
    //throw new Error('thrown error (before)');
    //done()
  });

  test.after(function() {
     driver.quit();
  });

  test.it('test', function() {
    console.log(this.runnable().fullTitle());
    //driver.get('http://ya.ru');
     // a()
    // assert(1).equalTo(2);
  });

});
*/


/*
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('http://www.google.com/ncr');
driver.findElements(By.name('q')).then(res => console.log(res))
//driver.findElement(By.name('q')).sendKeys('webdriver')//.then(() => wwww())
// driver.findElement(By.name('btnG')).click();

//driver.wait(until.titleIs('webdriver - Google Search'), 1000);
// driver.getCurrentUrl().then(res => {
//   console.log('res', res)
// });
driver.quit();
*/


/*
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until,
  Browser = webdriver.Browser,
  assert = require('selenium-webdriver/testing/assert'),
  test = require('selenium-webdriver/lib/test');

test.suite(function(env) {
  var driver;

  test.before(function () {
    driver = env.builder().build();
  });

  test.after(function () {
    driver.quit();
  });

  test.beforeEach(function () {
    driver.get(test.Pages.echoPage);
  });

  describe('executeScript;', function () {

    test.it('should append query to title', function() {

      driver.get('http://www.google.com/ncr').then(() =>  qqq())
      assert(driver.getTitle()).equalTo('Google');
    });

  });

});
*/
