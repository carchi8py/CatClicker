var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);

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

	this.currentCat = ko.observable( new Cat({
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'Nope',
		nicknames: ['Tabtab', 'T-bone', 'Mr. T']
	}) );

	//Because we are using with in the HTML this is now inside the CAT binding
	//context and not the viewModel
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());