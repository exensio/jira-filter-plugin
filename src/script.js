// ==UserScript==
// @name Jira Filter
// @description Remove some useless stuff from the Jira activity stream.
// @version 1.1
// ==/UserScript==

function removeActivityItems(feedItem) {
	var elements = document.getElementsByClassName("activity-item");

	var logged = /logged/g
	var updated = /updated/g

	for (var i = 0; i < elements.length; i++) {
		var summary = elements[i].getElementsByClassName("activity-item-summary")[0];
		for(var j = 0; j < summary.childNodes.length; j++){
		  	if(summary.childNodes[j].nodeType === 3) { //Find TEXT_NODE
		  		if(logged.test(summary.childNodes[j].nodeValue)) {
		  			elements[i].parentNode.removeChild(elements[i]);
		  			i--;
		  		} else if(updated.test(summary.childNodes[j].nodeValue)) {
		  			var list = summary.getElementsByClassName("activity-list");
		  			if (list.length === 0) continue;

		  			var lis = list[0].getElementsByTagName("li");
		  			if (lis.length !== 2) continue;
		  			
		  			if (!/^Changed/.test(lis[0].innerText) || !/^Logged/.test(lis[1].innerText)) continue;

		  			elements[i].parentNode.removeChild(elements[i]);
		  			i--;
		  		}
		  	}
		 }
	}

	var showMoreButton = document.getElementById("activity-stream-show-more");
	if (!showMoreButton.classList.contains("hidden") && elements.length <= 10) {
		showMoreButton.click();
	}
}

try {
	// Only continue if this is an iframe and if the body id is jira
	if ( window != window.top && parent.window.document.getElementsByTagName("body")[0].id === "jira") {
		var activityStream = document.getElementById("activity-stream");
		if (activityStream !== null) {
			activityStream.parentNode.addEventListener("DOMNodeInserted", removeActivityItems, false);
			removeActivityItems();
		}
	} 
} catch(e) {
	// Do not display an error if the browser denies access to document in an iframe.
}
