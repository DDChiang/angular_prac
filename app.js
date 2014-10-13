(function() {
  var app = angular.module('store', []);
  
  app.controller('StoreController', function() {
    this.products = gems;
  });
  
  
  app.controller('ReviewController', function() {
    this.review={};
	
	this.addReview = function(product) {
	  this.review.createdOn= Date.now();
	  product.reviews.push(this.review);
	  this.review = {};
	};
  });
  
  app.directive('productTabs', function() {
    return {
		restrict: 'E',
		templateUrl: '/product-tabs.html',
		controller: function() {
		  this.tab = 1;

		  this.isSet = function(checkTab) {
			return this.tab === checkTab;
		  };

		  this.setTab = function(activeTab) {
			this.tab = activeTab;
		  };
    },
    
    controllerAs: 'tab'
  };
});
  
  var gems = [
    {
      name: 'Dodecahedron', 
	  price:  2,
	  description: 'Some gems have hidden and even explosive powers. Dodecahedron has been known to exhibit some of the most potent.',
      images: [
	      'images/black_full.jpg',
		 'images/black_thumb.jpg'
	  ],
	  reviews: [
	    {
		  stars: 5,
		  body: "I love this products!",
		  author: "joe@thomas.com"
		},
		{
		  stars: 4,
		  body: "A rating of 4!",
		  author: "joe@thomas.com"
		},
		{
		  stars: 3,
		  body: "A rating of 3!",
		  author: "joe@thomas.com"
		},
		{
		  stars: 2,
		  body: "A rating of 4!",
		  author: "joe@thomas.com"
		}
	  ],
	  
	  canPurchase: true,
	  soldOut: false
    }, 
	
	{
      name: 'Pentagon Hedron', 
	  price:  5.95,
	  description: 'The most explosive powers. Dodecahedron has been known to exhibit some of the most potent.',
      images: [
	    'images/white_full.jpg',
		'images/white_thumb.jpg'
	  ],
	  canPurchase: false,
	  soldOut: false
    } 
	];
	
  }) ();
