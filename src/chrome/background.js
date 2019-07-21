chrome.browserAction.onClicked.addListener(onIconClicked);

function onIconClicked(tab) {
  chrome.tabs.executeScript(tab.id, { file: 'app.js' });
  process.env.NODE_ENV === "development" && chrome.runtime.reload();
}