// Variables and Arrays/Objects pass by value differently.

// Variables pass the actual value stored in the memory location when referred/called
let a = 5;
// b in this instance is being passed the value stored at a, 5 and gets its own memory location to store it in
let b = a;
// b has its own seperate memory location and changes the value to 6
b = 6;
// a and b have different memory spots to look at for their values
console.log(`b : ${b} , a : ${a}`);

// Arrays and objects pass the value as the location/reference of the object/array when called
let arr = [5, 6];
// arr2 in this instance is not being passed the value [5,6], 
// it is being given the directions to a spot in the computer's memory - the same directions arr have
let arr2 = arr;
// arr2 adjusts the values at the location it was given the directions to
arr2.push(5);
// both arr and arr2 look at the same memory spot for the values
console.log(`Arr :  ${arr}, Arr2 : ${arr2}`);