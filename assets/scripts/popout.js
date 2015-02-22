var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-6498065-10']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

window.addEventListener('load', function(evt) {
  drawQrCode();
});

function drawQrCode()
{
  selectionText = chrome.extension.getBackgroundPage().getSelectionText();
  linkUrl       = chrome.extension.getBackgroundPage().getLinkUrl();
  pageUrl       = chrome.extension.getBackgroundPage().getPageUrl();
  favIconUrl    = chrome.extension.getBackgroundPage().getFavIconUrl();

  if(selectionText != 'undefined')
  {
    text = selectionText;
    type = "Your selected text."
  }
  else if(linkUrl != 'undefined')
  {
    text = linkUrl;
    type = "Your selected link."
  }
  else
  {
    text = pageUrl;
    type = "Your selected page."
  }

  $("#hImg").attr("src", favIconUrl);
  $("#hTitle").text(type);

  $(".qrcode").empty().qrcode({
        "size"     : 200,
        "color"    : '#3a3',
        "text"     : text,
        "mode"     : 0,
        "quiet"    : 0,
        "ecLevel"  : 'L',
        "fontname" : 'Arial, sans-serif',
        "fontcolor": '#272eb5',
        "label"    : 'Text',
  }); 
}
