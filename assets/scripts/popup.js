var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-6498065-10']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

window.addEventListener('load', function(evt) {
  chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
     activeTab = arrayOfTabs[0];
     onPageDetails(activeTab);  
  });
});

var getLinkDetails = function(href) {
    var link = document.createElement("a");
    link.href = href;
    return link;
};

function onPageDetails(activeTab) {
  link = getLinkDetails(activeTab.url);
  $("#hTitle").text(activeTab.title);
  $("#hImg").attr("src",activeTab.favIconUrl);

  $(".qrcode").empty().qrcode({
    "size"     : 200,
    "color"    : '#3a3',
    "text"     : activeTab.url,
    "mode"     : 2,
    "quiet"    : 1,
    "ecLevel"  : 'H',
    "fontname" : 'Arial, sans-serif',
    "fontcolor": '#272eb5',
    "label"    : link.hostname,
  });
}
