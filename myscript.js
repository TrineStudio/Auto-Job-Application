chrome.extension.onMessage.addListener(function(msg, sender, senderResponse){
	if (msg.action = "start_application") {
		var links = new Array();
		$('.job').each(function(index){
			var link = $(this).find('a')[0].href;
			links.push(link);
		});

		chrome.runtime.sendMessage({'action': 'open', 'links': links});
	}
});
