chrome.extension.onMessage.addListener(function(msg, sender, senderResponse){
	if (msg.action = "start_application") {
		$('.job').each(function(index){
			var link = $(this).find('a')[0].href;
			chrome.runtime.sendMessage({'action': 'open', 'link': link});
		});
	}
});
