
$("#cat-img").click(function(e) {
	var count = $('#cat-count').text();
	count = parseInt(count) + 1;
	$('#cat-count').text(count);
})
