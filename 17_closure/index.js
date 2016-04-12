function greet(whattosay) {

  return function (name) {
    console.log(whattosay + ' ' + name);
  }

}

var seyHi = greet('hi');

seyHi('arche');
