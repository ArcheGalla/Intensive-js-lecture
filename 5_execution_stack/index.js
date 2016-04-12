function b() {
  console.log('b is called!');
}

function a() {
  console.log('a is called!');
  b();
}

a();