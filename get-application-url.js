// indeed
if ($('.view_job_link')[0] != undefined) {
	var link = $('.view_job_link')[0].href;
	window.location.href = link;
} else {
	$('.indeed-apply-button').click();
}

