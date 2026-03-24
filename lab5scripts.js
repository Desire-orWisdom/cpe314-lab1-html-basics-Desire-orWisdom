let name = "Alice";
console.log("Hello, " + name);
let age = 30;
console.log("You are " + age + " years old.");
let major = "Computer Science";
console.log("Your major is " + major);

function greet(user) {alert("Welcome, " + user);}
greet("Bob");

function add(a, b) {return a + b;}
alert((add(5, 10)));
let num = parseFloat(prompt("Enter a number:"));
if ((num % 2) === 0) {alert(num + " is even.");

} else {alert(num + " is odd.");}
let fruits = ["Apple", "Banana", "Cherry", "Watermelon", "Grapes"];
for (let i = 0; i < fruits.length; i++) {console.log(fruits[i]);}