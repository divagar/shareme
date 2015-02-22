
chrome.contextMenus.create({
    "title": "Share with your Mobile/Tablet.",
    "contexts": ["page", "selection", "image", "link"],
    "onclick" : clickHandler
});

function clickHandler(info, tab) {
  //infoData = JSON.stringify(info);
  //console.log("info: " + infoData);
  //tabData = JSON.stringify(tab);
  //console.log("info: " + tabData);

  sessionStorage.selectionText = info.selectionText;
  sessionStorage.linkUrl       = info.linkUrl;
  sessionStorage.pageUrl       = info.pageUrl;
  sessionStorage.favIconUrl    = tab.favIconUrl;
  chrome.tabs.create({url:"popout.html"});
}

function getSelectionText() {
  return sessionStorage.selectionText;
}
function getLinkUrl() {
  return sessionStorage.linkUrl;
}
function getPageUrl() {
  return sessionStorage.pageUrl;
}
function getFavIconUrl() {
  return sessionStorage.favIconUrl;
}
