chrome.browserAction.onClicked.addListener(onIconClicked);

function onIconClicked(tab) {
  chrome.tabs.executeScript(tab.id, { file: 'app.js' });
  process.env.RELOAD === "true" && chrome.runtime.reload();
}