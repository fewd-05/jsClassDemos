/*
* Problem
It is your birthday and you want to celebrate it with all your friends at the park.
But for that to happen, the weather needs to be good. No raining.
If the weather is not good, your birthday party will happen in your tiny apartment.
Unfortunately, you can't invite all your friends if your birthday party needs to be in your house.

How can your create a Promise for that situation?
Start defining the weather. Is it raining?
Then write a promise (create a promise).
Then check the promise (consume the promise).
*/

//Define the weather as a variable and set it to a boolean value.
let isRaining = true;

//Create a promise. 
// (hint: you may find revising the theory on W3Schools helps: 
// https://www.w3schools.com/js/js_promise.asp)
const birthday = new Promise((resolve,reject) => {
    if (isRaining == false) {
        let venue = {
            location: "Centennial Park",
            attendees: 100
        }
        resolve(venue)
    } else {
        reject('Birthday in the park cancelled!')
    }
});

//Consume the promise using then() and catch().
birthday.then(function(venue) {
    console.log(venue);
}).catch(function(err) {
    console.log(err);
})