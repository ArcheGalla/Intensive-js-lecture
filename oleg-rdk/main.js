;(function () {

  var timerId;
  var currentImg = document.querySelector('div.container img');
  currentImg.style.opacity = 1;

  function showNextImg() {
    currentImg.style.opacity = 0;
    currentImg = currentImg.nextElementSibling ? currentImg.nextElementSibling : currentImg.parentElement.firstElementChild;
    currentImg.style.opacity = 1;

    clearInterval(timerId);
    timerId = setInterval(showNextImg, 3000);
  }

  function showPreviousImg() {
    currentImg.style.opacity = 0;
    currentImg = currentImg.previousElementSibling ? currentImg.previousElementSibling : currentImg.parentElement.lastElementChild;
    currentImg.style.opacity = 1;

    clearInterval(timerId);
    timerId = setInterval(showNextImg, 3000);
  }

  document.querySelector('div.right').addEventListener('click', showNextImg);
  document.querySelector('div.left').addEventListener('click', showPreviousImg);

  document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
      showPreviousImg();
    }
    if (event.keyCode === 39) {
      showNextImg();
    }
  });

})();