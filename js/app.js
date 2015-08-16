
var cats = $(".cat");

function bindCounterToCat(idNumber) {
	var cat = "#cat" + idNumber;
	console.log(cat)
	$(cat).click(function(e) {
		var count = $(cat + " > .counter").text();
		count = parseInt(count) + 1;
		$(cat + " > .counter").text(count);
	})
}


for (var i=1; i<=cats.length; i++) {
	bindCounterToCat(i)
}