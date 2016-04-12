var person = {
  firstname: 'arche',
  lastname: 'galla',
  greet: function () {
    return 'Hi ' + this.firstname;
  }
};

var john = Object.create(person);

console.log(john);
//console.log(john.__proto__);