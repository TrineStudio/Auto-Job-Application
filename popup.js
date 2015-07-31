function startApplication() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {action: "start_application"}, function(res){
		});
	});
}

$(document).on('click', '#start', function(){
	startApplication();
});

$(document).on('click', '#amazon', function(){
	chrome.tabs.getSelected(null, function(tab){
		chrome.tabs.executeScript(tab.id, {file: "jquery.js"}, function(){
			chrome.tabs.executeScript(tab.id, {file: "apply-for-amazon.js"}, function(){
			});		
		});
	});	
});

// Here is the support list:
// * Indeed
// End

var support = ["indeed.com"];

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.action == 'open') {
		var links = message.links;
		for (i in links) {
			var cont = false;

			for (var j = 0; j != support.length; j++) {
				if (links[i].indexOf(support[j]) != -1) {
					cont = true;
					break;
				}
			}
			
			if (!cont) {
				continue;
			}

			chrome.tabs.create({ url: links[i], active: false}, function(tab){
				chrome.tabs.executeScript(tab.id, {file: "jquery.js"}, function(){
					chrome.tabs.executeScript(tab.id, {file: "get-application-url.js"}, function(){
					});		
				});
			});
		}
	} else if (message.action == "amazon log") {
		chrome.tabs.getSelected(null, function(tab){
			chrome.tabs.update(tab.id, {url: message.link}, function(){
				chrome.tabs.executeScript(tab.id, {file: "jquery.js", runAt: 'document_idle'}, function(){
					chrome.tabs.executeScript(tab.id, {file: "log-in-amazon.js", runAt: 'document_idle'}, function(){
					});		
				});
			});
		});
	}
});
