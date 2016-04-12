function waitTreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {
  }
  console.log('finished function');
}

document.addEventListener('click', function () {
  console.log('click event');
});

waitTreeSeconds();
console.log('finished execution');