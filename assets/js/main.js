
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
	  				


	  				var mnsry = new Masonry('.works-grid', {
	  					itemSelector: '.work-item',
	  					columnWidth: '.work-sizer',
	  					fitWidth: true,

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
	var scene = document.getElementById('scene');

	var layer = $('.layer');
	var imgs = $('.layer a img');

	
	layer.each(function(e){
		var number = getRandomFloat(0.4,0.7);
		$(this).attr('data-depth', number);
	});
	

	function getRandomFloat(min, max) {
		return Math.random() * (max - min) + min;
	}
	
	
	var parallax = new Parallax(scene);

	
	
});