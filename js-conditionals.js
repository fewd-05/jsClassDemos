// if statement only meal options, document.write()
let breakfast = false;
let lunch = true;
let dinner = false;

switch (true) {
  case breakfast:
    document.write("eggs and bacon<br>");
    break;
  case lunch:
    document.write("steak<br>");
    break;
  case dinner:
    document.write("soup<br>");
    break;
  default:
    document.write("oh no, no food!");
}

if (breakfast) {
  document.write("<h1>eggs and bacon</h1>");
} else if (lunch) {
  document.write("<h1>steak and fries</h1>");
} else if (dinner) {
  document.write("<h1>soup</h1>");
} else {
  document.write("it's not a set meal time.");
}

4 > 1 ? console.log("true") : console.log("false");
// israining else-if, meal elseifelse

let isRaining = true;
if (isRaining) {
  document.write("bring an umbrella!");
} else {
  document.write("bring some sunscreen!");
}

isRaining ? console.log("bring an umbrella") : console.log("sunscreen");

// linebreaks documentwrite

//israining ternary operator prac

// switch statement meal options

// switch statement alice prac
let userName = "Alice";

// switch statement: if userName is Alice,
// say Hello Alice!
// if it is John, say hello John
// if it is neither, ask them to leave

switch (userName) {
  case "John":
    console.log("Hello john!");
    break;
  case "Alice":
    console.log("Hello Alice!");
    break;
  default:
    "Leave! ";
}
