//Function and return keyword
//without console.log or document.write()
function addNumbers (a, b) {
    a + b
 }
 addNumbers() //nothing happens here
  
 function addNumbers2 (a, b) {
    a + b
 }
 console.log(addNumbers2(10, 9)) //undefined
 //document.write(addNumbers2(10, 9)) //undefined
  
 function addNumbers3 (a, b) {
    return a + b
 }
 //console.log(addNumbers3(10, 9))
 //document.write(addNumbers3(10, 9))
  
 //Global and local scope variables
 let num2 = 20 //global scoped variable
  
 function addNumbers4 (){
    const num1 = 30 //local scoped variable
    const num2 = 40 //local scoped variable
    console.log(num2)
    console.log(num1)
    return num1 + num2
 }
 //console.log(num2)
 //console.log(num1)
  
 //console.log(addNumbers4())
  
  
 //Array
 const listOfCities = ['Brisbaine', 'Melbourne', 'Sydney', 'Adelaide', 'Perth', [1,2, [2,4]]]
 listOfCities[1] = 'Hobart'
  
 //Methods
 //1- add Canberra to the end of the array(push())
 listOfCities.push('Canberra')
 //2- add Newcastle to the beginning of the array (unshift())
 listOfCities.unshift('Newcastle')
 //3- remove Newcastle from the array (pop()) - end of the array
 listOfCities.pop()
 //4- remove Canberra from the array (shift()) - beginning of the array
 listOfCities.shift()
  
  
 /*slice()-> creates and returns a new array. It does not mutate the original array
 (console.log days)
 *the first is the index where the slice should begin and the second
 is the index before which it should end
 */
 const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
 days.slice(2, 5); // => ["Wed", "Thu", "Fri"]
 days.slice(1);
  
 /*splice() -> mutates the original array
 *the first is still the index at which to begin splicing, and the second
 dictates how many elements we want to remove from the Array
 */
 days.splice(2, 3);
 days.splice(2);
  
 /*spread operator...copies an array to a new array
 *allows us to "spread out" the elements of an existing
 Array into a new Array, creating a copy
 */
 const copyOfListOfCities = ['Gold Coast',...listOfCities, 'Sunshine Coast']
  
 //Objects
 /* w3schools pages:
 https://www.w3schools.com/js/js_object_definition.asp
 https://www.w3schools.com/js/js_object_properties.asp
 https://www.w3schools.com/js/js_object_methods.asp
 */
 const studentInfo = {
    Id: 1234,
    Name:"Joe",
    CityOfDreams:"San Francisco",
    Grade: 8
 }
  
 studentInfo.City
 //or
 studentInfo['City']
  
 //nested data structures
 //object and object
 const address = {
    street: {
      line1: '11 Broadway',
      line2: '2nd Floor'
    },
    city: 'New York',
    state: 'NY',
    zipCode: '10004'
  };
  
  address.street.line2
  //or
  address['street']['line2']
  
  //object and array
  const australiaBands = {
    sydney: [
        {
        bandName: "QueenVic",
        members: ["Joe", "Maya", "Shannon"]
        },
        {
            bandName: "PrinceWill",
            members: ["Jane", "Paul", "Jen", "Ross"]
        }
    ],
    melbourne: [
        {
        bandName: "QueenLiz",
        members: ["Peter", "John", "Julia", "Ian"]
        }
    ]
 }
  
 //access QueenVic
 australiaBands.sydney[0].bandName
 australiaBands['sydney'][0]['bandName']
 australiaBands['sydney'][1]['bandName']
  
 //access Julia
 australiaBands.melbourne[0].members[2]
 australiaBands['melbourne'][0]['members'][2]
 