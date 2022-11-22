// Functions and the return statement

// Click me button function --> display 'Hello, ___ !' onClick
// button is on the page and onclick, it should run a function

// creating a function
function clickMe() {
// take the value of the input field
    // locate the input field element
    let inputFieldLoc = document.getElementById("nameText");
    // extract its value
    let val = inputFieldLoc.value;
// place the value into a string with "Hello ____!"
    let message = `Hello ${val}!`
// place that string onto the page
    // locating the element that the string will be added to
    let headerLoc = document.getElementById("greeting");
    // adding the string to the element's innerHTML
    headerLoc.innerHTML = message;
}



// Basic array recovery/syntax / [array.length - 1]
const arr = ["Great Dane", "Beagle", "Daschund"];

// Function to create array, iterate/add to ul, add to innerhtml and change style display to block
// Function to hide list

function displayList() {
    const listOfSweets = ["lollipop", "ice-cream", "candy", "caramel", "marshmallow"]

    let text = ""
    for (let i = 0; i < listOfSweets.length; i++) {
       text += `<li>${listOfSweets[i]}</li>`
    }
     
    document.getElementById("list").innerHTML = text;
    document.getElementById("list").style.display = "block";
}

function hideList() {
    // get the element of the unordered list
    document.getElementById("list").style.display = "none";
    // need to set its display to none
}

// Arrays using const cannot be reassigned but we can reassign key values

const listOfPlants = ["lotus", "peace lily", "palm tree"];
// listOfPlants.shift();
const listOfNature = ["Koala Bear", "Dog", ...listOfPlants, "Cockatoo"]
// console.log(listOfNature);
// -----Destructive Array Methods----
// .push() and .unshift() --> destructive, adds from end and start respectively
// const copy = [...arrayToBeCopied] --> used for non-nested arrays, creates copy
// .pop() and .shift(). --> destructive

// ---Non-Destructive Array Methods----
// .slice() --> non-destructive, 2 params (start index, end index)
// .splice() --> destructive, 3+ params (where to start, how many, items to add into missing chunk (if any))

// Objects
const address = {
    street: {
      line1: '11 Broadway',
      line2: '2nd Floor'
    },
    city: 'New York',
    state: 'NY',
    zipCode: '10004'
  };

const myCat = {
    firstName: "Bella",
    age: 3,
    isHappy: true,
    appearance: {
        eyeColor: "green",
        furColor: "black",
        nose: "pink"
    },
    happyBirthday: function () {
        myCat.age++;
    }
}

myCat.toys = ["yarn", "mouse", "cat tower", "laser pointer"];
myCat.happyBirthday();
console.log(myCat.age);



  // Reading properties of objects

  // Modifying Pre-existing properties

  // Add new properties/ deleting old properties

  // Spread operator to copy

  // for ( ... in ), for ( ... of )


