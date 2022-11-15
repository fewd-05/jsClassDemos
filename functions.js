//While
 
let msg = 0
const greeting = "<span>Welcome to the class!</span>"
let appendHTML = document.getElementById("message")
let newText = ""
 
while(msg < 5) {
   newText += greeting
   newText += `<br>`
   //console.log(newText)
   msg++
}
//console.log(appendHTML)
appendHTML.innerHTML = newText
 
// For loop and array iteration
 
const listOfSweets = ["lollipop", "ice-cream", "candy", "caramel", "marshmallow"]
//Array is an ordered list of data that identifies the items inside by their index value. Starts from zero.
listOfSweets[2]
//we can create an array with different data types inside
const nestedArray = [23, "Hi", true, null, [1, 2, 3], [true, "Joe"]]
// how to access the number 2 inside the nested array?
nestedArray[4][1]
//how to access the name "Joe"?
nestedArray[5][1]
 
//arrays have built-in properties and methods that we will learn next session. For now let's see one property:
//array length property
console.log(listOfSweets.length)
console.log(nestedArray.length)
 
//Strings are also an array (list of characters). Space counts.
const fullName = "JonhSmith"
console.log(fullName.length)
console.log(fullName[0])
 
let text = ""
for (let i = 0; i < listOfSweets.length; i++) {
   text += `<li>${listOfSweets[i]}</li>`
}
 
document.getElementById("list").innerHTML = text
 
//Create functions that will display the list of sweets and hide it
function displayListOfSweets() {
   let listOfSweets = ["lollipop", "ice-cream", "candy", "caramel", "marshmallow"]
 
   let text = ""
   for (let i = 0; i < listOfSweets.length; i++) {
       text += `<li>${listOfSweets[i]}</li>`
   }
   document.getElementById("list").innerHTML = text
   document.getElementById("list").style.display = "block"
}
 
function displayNone() {
   document.getElementById("list").style.display = "none"
}
 
//Functions
//keyword function, function name, parentheses, curly brackets, block of code to be executed (when called), and calling the function
 
function sayHello() {
   console.log("Hello you")
}
// sayHello()
 
function sum() {
   const num1 = 10
   const num2 = 20
   console.log(num1 + num2)
}
// sum()
 
function sumWithParameters(num1, num2) {
   console.log(num1 + num2)
}
//Calling sumWithParameters and passing in arguments
//sumWithParameters(10, 20)
 
function sumWithDefaultParametersValues(num1 = 4, num2 = 5) {
   console.log(num1 + num2)
}
//Calling sumWithDefaultParametersValues and not passing in arguments
//sumWithDefaultParametersValues() - NaN
//sumWithDefaultParametersValues(9)
 
// Activity:
/*
   Write a function that multiplies two numbers and call the function to see the result 
*/
function multiplyNumbers (a = 30, b = 5 ) {
   console.log(a * b)
}
multiplyNumbers()
 
//Function and events
 
function addNumbers (a = 30, b = 5 ) {
   console.log(a * b)
}
//You can pass default value or call the function with arguments in the HTML
// addNumbers( 100, 70)
 
//Print message
 
function printMessage() {
   let inputValue = document.getElementById("nameText")
   let nameValue = inputValue.value
   document.getElementById("greeting").innerText = "Hello, " + nameValue  + "!"
}
 
 
 
 
//Activity - create a function that will print "Hello, how are you" once users click on "Say hello" button
function printMsg2() {
   document.getElementById("message").innerText = "Hello, how are you?"
}
