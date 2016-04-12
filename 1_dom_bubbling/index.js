var first = document.querySelector('.first');
var second = document.querySelector('.second');
var third = document.querySelector('.third');

var title = document.querySelector('.title');

var flag = true;

first.addEventListener('click', function (event) {
  console.log('first is clicked');
});

second.addEventListener('click', function (event) {
  console.log('second is clicked');
});

third.addEventListener('click', function (event) {
  console.log('third is clicked');
});

title.addEventListener('click', function (event) {
  console.log('title is clicked');
});

