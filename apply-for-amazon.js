var logStatus = $('#icims_content_iframe').contents().find('.iCIMS_userMenuLink > a')[0].innerHTML;

if (logStatus === "Log back in!") {
	var loginUrl = $('#icims_content_iframe').contents().find('.iCIMS_userMenuLink > a')[0].href;
	chrome.runtime.sendMessage({'action': 'amazon log', 'link': loginUrl,});
} else {
	alert('already in');
}
