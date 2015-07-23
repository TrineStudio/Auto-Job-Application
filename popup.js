function startApplication() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {action: "start_application"}, function(res){
			// TODO: add the response here
		});
	});
}

$(document).on('click', '#start', function(){
	startApplication();
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.action == 'open') {
		var links = message.links;
		for (i in links) {
			chrome.tabs.create({ url: links[i], active: false}, function(tab){
				chrome.tabs.executeScript(tab.id, {file: "jquery.js"}, function(){
					chrome.tabs.executeScript(tab.id, {file: "get-application-url.js"}, function(){
					});		
				});
			});
		}
	}
});
