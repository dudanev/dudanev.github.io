
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
		var $grid = $('.works-grid'),
			 $btnGroup = $('#filterBtnGroup');
			 
		$grid.isotope({
			layoutMode: 'masonry',
			itemSelector: '.work-item',
			masonry: {
				columnWidth: '.work-sizer',
				fitWidth: true,
			}
			
		});

		// $grid = $('.works-grid').isotope({
		// 	layoutMode: 'masonry',

		// });

		$btnGroup.on('click', 'button', function(){
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		

	});
	
	

});

