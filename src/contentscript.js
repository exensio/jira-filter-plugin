/**
 * Used by Chrome.
 *
 * Inject script.js into the html site.
 */

var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};