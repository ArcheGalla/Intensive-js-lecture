var images = document.getElementsByTagName('img');
var prev   = document.getElementById('prev');
var next   = document.getElementById('next');
var form   = document.getElementById("set_interval");

var index = 2;
var intervalTime = 5000;

images[index].style.display = 'block';

function slider(direction, interval) {
	images[index].style.display = 'none';

	if (index === 0 & direction === -1) {
		index = images.length - 1;
	}

	if (index === images.length-1 & direction === 1) {
		index = 0;
	}

	index += direction;
	images[index].style.display = 'block';
}

next.addEventListener('click', function() {
	slider(1);
})

prev.addEventListener('click', function() {
	slider(-1);
})

var intervalFunc = setInterval(function() {
	if(index === 0) {
		slider(1)
	} else if (index === images.length-1) {
		slider(-1)
	} else {
		Math.random() > 0.5 ? slider(1) : slider(-1);
	}		
}, intervalTime);

form.addEventListener('submit', function(e){
	e.preventDefault();

	clearInterval(intervalFunc);

	var n = document.getElementById("intervar_number").value;
  intervalTime = Number(n);
  
  intervalFunc = setInterval(function() {
		if(index === 0) {
			slider(1)
		} else if (index === images.length-1) {
			slider(-1)
		} else {
			Math.random() > 0.5 ? slider(1) : slider(-1);
		}
	}, intervalTime);
})





