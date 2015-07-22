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
		var link = message.link;
		chrome.tabs.create({ url: link});
	}
});
