/**
 * Main ui file
 */

const mobx = require('mobx');
const store = require('../store').store;
const {APP_STATE, TAB} = require('../store/constants');
const bgApi = require('./bg-api');
const runController = require('./run');
const testsList = require('./tests-list');


exports.start = function() {
  runController.init();
  bgApi.init();
  store.load()
    .then(() => testsList.load())
    .then(() => store.appState = APP_STATE.READY)
};

function onConfigLoaded(data = {}) {
  console.log('config loaded', data.config.tests.length);
  store.tests = data.config.tests || [];
  if (store.selectedTest && store.tests.indexOf(store.selectedTest) === -1) {
    store.selectedTest = '';
  }
  store.appState = APP_STATE.READY;
  /*
  if (data.error) {
    htmlConsole.warn(data.error);
  } else {
    const msg = [
      `Config successfully loaded from: **${data.config.url}**`,
      `Test files found: **${data.config.tests.length}**`,
    ].join('\n');
    htmlConsole.info(msg);
  */
}

/*


function start() {

  smartUrlOpener.listen();
  messaging.start();
  api.setup();


  welcome();

  // for programmatic run
  // todo: move to api
  window.runTests = runTests;
}
*/

function welcome() {
  const buildNumber = chrome.extension.getBackgroundPage().__buildInfo.buildNumber;
  const msg = [
    `Welcome to **Autotester**${buildNumber ? ' (build #**' + buildNumber + '**)' : ''}!\n`,
    `For convenient testing please enable two **chrome flags**:\n`,
    `[silent-debugger-extension-api](chrome://flags#silent-debugger-extension-api) - to remove annoying bar about using debugger api\n`,
    `[extensions-on-chrome-urls](chrome://flags#extensions-on-chrome-urls) - to allow testing other chrome extensions`,
  ].join('');
  htmlConsole.log(msg);
}
