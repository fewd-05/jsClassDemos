// variables, data types, booleans, linking, displaying
let usersName = false;
// console.log(usersName);

// double quotes and backticks
let quote = '"Wait," said Jo, "Don\'t go without me!"';
let altQuote = `Jane turned around. "Don't be such a scaredy-cat!"`;

// interpolation - injecting value of an expression into a string
let user = "emily";
let user2 = "jane";
let message = "hello there";
let message2 = "and";
const welcome = `${message} ${user} ${message2} ${user2}`;
console.log(welcome);
// console.log(quote + ". " + altQuote);
// console.log(`${quote}. ${altQuote}`);

// var num = 12;
// console.log(num + 2);

// num = num.toString();
// console.log(2 + num);

// console.log(num);

// default false value booleans
const ex = false;
const ex2 = null;
const ex3 = undefined;
const ex4 = 0;
const ex5 = NaN;
const ex6 = "";

if (!ex6) {
  console.log("I will run, because all of the above are false values");
}

let customerOrder = 5;
console.log(customerOrder++);

// operators

// logical operators
let a = 10;
let b = 5;

// console.log(a == b && a != b);
// console.log(a == b || a != b);
// console.log(!(a == b || a != b));
