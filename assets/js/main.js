
document.addEventListener("DOMContentLoaded", function() {
  
  	var grid, item;

  	grid = document.querySelector('.works-grid');
  	item = document.querySelectorAll('.work-item');

	imagesLoaded( grid, function() {

		for (let i = 0; i < item.length; i++) {
			item[i].classList.add('img-loaded');	
		}
		


		var mnsry = new Masonry('.works-grid', {
			itemSelector: '.work-item',
			columnWidth: '.work-sizer',
			fitWidth: true,

		});

		// initialize jQuery object
		var $grid,
		 	$btnGroup = $('#filterBtnGroup');

		$grid = $('.grid').isotope({

		});

		$btnGrup.on('click', 'button', function(){
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		

	});
	
	

});

