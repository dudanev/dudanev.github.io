
document.addEventListener("DOMContentLoaded", function() {
  

  	(function homeGrid(){
  		  	var grid, item;

  		  	grid = document.querySelector('.works-grid');
  		  	item = document.querySelectorAll('.work-item');

  		  	if (grid) {
	  			imagesLoaded( grid, function() {

	  				for (let i = 0; i < item.length; i++) {
	  					item[i].classList.add('img-loaded');	
	  				}
	  				

					  // initialize jQuery object
					var $grid = $(grid),
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
  			}
  	})();
  	



	/* CREATE COLUMN TEXT */
	(function createColumnText(){

		var colOne = "coluna_um!",
			colTwo = "coluna_dois!";


		// console.log(isTrue);

		var paragraphs = $('.wrk__content p');

		paragraphs.each(function (){
			var _ = $(this);
			var found = false;
			var newColOne, newColTwo;
			// console.log(colOne);
			var index = _.text().indexOf(colOne);
			
			// console.log(index);

			if(index > -1) {
				// console.log(index);
				_.addClass('txt-col txt-col__one');
				var txt = _.text();

				txt = txt.slice(colOne.length, txt.length);
				// console.log(txt, colOne.length );
				_.text(txt)
				// console.log(_.text());
				// _.wrap(container);
				
			}

			index = _.text().indexOf(colTwo);
			if (index > -1) {
				_.addClass('txt-col txt-col__two');
				var txt = _.text();

				txt = txt.slice(colTwo.length, txt.length);
				// console.log(txt, colOne.length );
				_.text(txt)
				// container.html(_);
				// _.remove();
				found = true;
			}

			if (found) {
				var container = "<div class='txt-col-container'></div>";
				$('.txt-col').wrapAll(container);
			}

			


		});


		



	})();


	(function alignTextCenter(){

		var paragraphs = $('.wrk__content p');
		var txtCenter = "texto_centro!";

		if (paragraphs) {

			paragraphs.each(function(){
				var ele = $(this);
				var index = ele.text().indexOf(txtCenter);
				
				if (index > -1){
					var txt = ele.text();

					ele.addClass('text-center');
					txt = txt.slice(txtCenter.length, txt.length);
					ele.text(txt);
				}



			});	
		}
		
	})();	

	
	

});

$(function(){

	// console.log($(location).attr('pathname'));
	var paragraphs = $('.wrk__content p');
	if($(location).attr('pathname') == '/about/') {
		
		paragraphs.each(function(){
			a = $(this);
			if ($(this).children('a')){
				a.css('text-align', 'center');
			}
		});
	}
});