
document.addEventListener("DOMContentLoaded", function() {
  
  	var grid, item;

  	grid = document.querySelector('.works-grid');
  	item = document.querySelector('.work-item');

	imagesLoaded( grid, function() {

		item.classList.add('img-loaded');


		var mnsry = new Masonry('.works-grid', {
			itemSelector: '.work-item',
			columnWidth: '.work-sizer',
			fitWidth: true,

		});

	});
	
	

});

