

function createSlideController(sliderElements) {
    var slideController = {			 
		  slides : sliderElements,
		  slideIndex : 0,
		  intervalFunc : null,

		  getSlideIndex : function () {
    		return this.slideIndex;
      },
      setSlideIndex : function (newIndex) {
	    	this.slides[this.slideIndex].style.display = 'none';
				this.slides[newIndex].style.display = 'block';
				this.slideIndex = newIndex;
    	},
    	getLastIndex : function () { 
				return this.slides.length - 1;
			},
			nextSlide : function () {
				next = this.getSlideIndex() + 1;
				if (next > this.getLastIndex()) {
					next = 0;
				}

				this.setSlideIndex(next);
			},
			prevSlide : function () {
				prev = this.getSlideIndex() - 1;

				if (prev < 0) {
					prev = this.getLastIndex();
				}

				this.setSlideIndex(prev);
			},
			
			setAutoPlayInterval: function(interval) {
				if (this.intervalFunc !== null) {
					window.clearInterval(this.intervalFunc);
					this.intervalFunc = null;
				}

				if (interval <= 0) {
					return;
				}

				var controller = this;
				this.intervalFunc = window.setInterval(function() {
					controller.nextSlide();
				}, interval);
			}
		};

    //set first slide as initial one
	  slideController.setSlideIndex(0);	  
	  
	  return slideController;
}

function slider_controller() {
		var slides = document.getElementsByClassName('slide');
		var controller = createSlideController(slides);

		var nextButton = document.getElementById('next');
		nextButton.onclick = function () {
			controller.nextSlide();
		}

		var prevButton = document.getElementById('prev');
		prevButton.onclick = function() {
			controller.prevSlide();
		}
		//set default interval to 2 sec
		controller.setAutoPlayInterval(2000);	

		var intervalInput = document.getElementById('interval');
	  intervalInput.onchange = function(event) {
	  	controller.setAutoPlayInterval(
	  		parseInt(intervalInput.value)
	  	);
	  }	  
}


function slider() {

	var slides = document.getElementsByClassName('slide');
	var currentSlide = 0;
	slides[currentSlide].style.display = 'block';

	var forward = function(curSlide) {
		var nextSlide = curSlide + 1;

		if (nextSlide > slides.length - 1) {
			nextSlide = 0;
		}

		return nextSlide;
	}

	var backward = function(curSlide) {
		var prevSlide = curSlide - 1;

		if (prevSlide < 0) {
			prevSlide = slides.length - 1;
		}

		return prevSlide;
	}

	var clicker = function(direction) {
		return function() {
			slides[currentSlide].style.display = 'none';
			currentSlide = direction(currentSlide);
			slides[currentSlide].style.display = 'block';
		}
	}


	var nextButton = document.getElementById('next');
  nextButton.onclick = clicker(forward);

  var prevButton = document.getElementById('prev');
	prevButton.onclick = clicker(backward);

}

/*First version of slider*/

function slider_sucks(argument) {

	var nextButton = document.getElementById('next');
	var prevButton = document.getElementById('prev');

	var slides = document.getElementsByClassName('slide');
	var currentSlide = 0;
	slides[currentSlide].style.display = 'block';

	var prev = slides.length-1;
	var next = currentSlide + 1;

	nextButton.onclick = function () {
		slides[currentSlide].style.display = 'none';

		prev = currentSlide;		
		currentSlide = next;
		next++;

		if (next >= slides.length) {
			next = 0;
		}

		slides[currentSlide].style.display = 'block';
	}


	prevButton.onclick = function () {
		slides[currentSlide].style.display = 'none';

		next = currentSlide;		
		currentSlide = prev;
		prev--;

		if (prev < 0) {
			prev = slides.length-1;
		}

		slides[currentSlide].style.display = 'block';
	}
}

slider_controller();