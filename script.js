// Closure
function outerFunction() {
  var outerVariable = "Closure";
  return function innerFunction() {
    console.log(outerVariable);
  };
}
var closureExample = outerFunction();
closureExample();

// Destructuring
const person1 = ["Alice", 25];
const [name1, age1] = person1;
console.log("Destructuring", name1);
console.log("Destructuring", age1);

// Default Parameters
function greet(name = "Guest") {
  console.log(`Default Parameter: Hello, ${name}!`);
}
greet();
greet("Alice");

// Rest Parameter
function sum(...numbers) {
  console.log("Rest Parameter", numbers);
}
sum(1, 2, 3, 4, 5, 6);

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Spread Operator", arr2);
