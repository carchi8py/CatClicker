
var cats = $(".cat");
var buttons = $("button");

function hideAllCats(){
	for (var i=0; i<cats.length; i++) {
		$(cats[i]).hide();
	}
}

function bindCounterToCat(idNumber) {
	var cat = "#cat" + idNumber;
	$(cat).click(function(e) {
		var count = $(cat + " > .counter").text();
		count = parseInt(count) + 1;
		$(cat + " > .counter").text(count);
	})
}

function bindButtonTocat(idNumber){
	$("#button" + idNumber).click(function(){
		console.log("#cat" + idNumber);
		hideAllCats();
		$("#cat" + idNumber).show();
	})
}

for (var i=1; i<=buttons.length; i++){
	console.log(i)
	bindButtonTocat(i);
}

for (var i=1; i<=cats.length; i++) {
	bindCounterToCat(i)
}

hideAllCats();