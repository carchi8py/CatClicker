var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('Nope');
	this.nicknames = ko.observableArray(['Tabtab', 'T-bone', 'Mr. T']);

	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = 'Newborn';
		} else if (clicks < 50) {
			title = 'Infant';
		} else if (clicks < 100) {
			title = 'Child';
		} else if (clicks < 200) {
			title = 'Teen';
		} else if (clicks < 500) {
			title = 'Adult';
		} else {
			title = 'Ninja';
		}
		return title;
	}, this);
}

var ViewModel = function() {
	//store the out this (ViewModel) this, and not the CAT this.
	//I am not using this, but i want to keep it here so i know
	var self = this;

	this.currentCat = ko.observable( new Cat() );

	//Because we are using with in the HTML this is now inside the CAT binding
	//context and not the viewModel
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());