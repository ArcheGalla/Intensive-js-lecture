function test() {
  console.log('i am working');
}

test();

test.somePropertie = 'Hey i am propertie on function object! ';
console.log(test.somePropertie);