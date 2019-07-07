var dog = require('./dog');
var cat = require('./cat');

var dog = new dog('An');
var tom = new cat();

dog.eat(tom);
console.log(dog);