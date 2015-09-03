var initalCats = [
		{
			clickCount : 0,
			name : "Tabby",
			imgSrc : "img/434164568_fea0ad4013_z.jpg",
			imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
			nicknames: ['Tabtab', 'T-bone', 'Mr. T']
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : "img/4154543904_6e2428c421_z.jpg",
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
            nicknames: ['Tigger']
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : "img/22252709_010df3379e_z.jpg",
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
            nicknames: ['Casper']
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : "img/1413379559_412a540d29_z.jpg",
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
            nicknames: ['shooby']
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : "img/9648464288_2516b35537_z.jpg",
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
            nicknames: ['Zzzzzz']
        }
    ];

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

	this.catList = ko.observableArray([]);

	initalCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem));
	});

	this.currentCat = ko.observable( this.catList()[0] );

	//Because we are using with in the HTML this is now inside the CAT binding
	//context and not the viewModel
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());