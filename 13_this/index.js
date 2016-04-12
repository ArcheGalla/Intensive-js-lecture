function a() {
  console.log(this);
}

var b = function () {
  console.log(this);
};

a();
b();

var humen = {
  name: 'artem',
  showName: function () {
    // add function here
    console.log(this.name);
  }
};


humen.showName();