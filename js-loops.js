// while loop
let counter = 0;

while (counter < 3) {
  document.write(`I am at ${counter}<br>`);
  counter++;
}

let msg = 0;

while (msg < 5) {
  document.write(`Good morning!<br>`);
  msg++;
}

// teaching note: in built object properties, methods in console.
// html div with id message

const greeting = `Welcome to the class!<br>`;

document.getElementById("message").innerHTML = greeting;

// do ... while
// runs the code at least once
let increment = 0;
do {
  document.write(greeting);
  increment++;
} while (increment < 5);

// for loop (first expression runs once before code block ;
// second expression is condition for running code block ;
// third expression happens each time the code block ends);
for (let counter1 = 0; counter1 < 3; counter1++) {
  document.write(`I am a ${counter1} number-counter and I love to count!<br>`);
}
