// use let or const?
// {} or () ?
const festivalSchedule = {
  "26th Nov 2022": {
    cityName: "Sydney",
    listOfBands: ["Metallica", "Sabaton", "Guns 'n' Roses"],
  },
  "27th Nov 2022": {
    cityName: "Sydney",
    listOfBands: ["One Direction", "Sabaton", "Guns 'n' Roses"],
  },
  "28th Nov 2022": {
    cityName: "Melbourne",
    listOfBands: ["The Wiggles", "The Teletubbies", "Blues Clues' Band"],
  },
};

console.log(festivalSchedule["26th Nov 2022"].listOfBands);

// Selectors / Elements Selected
const btn = document.querySelector("#submit");
const dropdownEl = document.getElementById("listOfDates");
const scheduleDiv = document.getElementById("schedule");

btn.addEventListener("click", onSubmit);

function onSubmit() {
  let userOption = dropdownEl.value;

  for (const day in festivalSchedule) {
    if (userOption == day) {
        let stringOfItems = ""
        for (i=0; i<festivalSchedule[day].listOfBands.length; i++) {
            stringOfItems += `<li>${festivalSchedule[day].listOfBands[i]}</li>`
        }
      let details = `
           <div class="container">
        <h2 class="heading">${festivalSchedule[day].cityName}</h2>
        <ul id="bandList">
         ${stringOfItems}
        </ul>
      </div>
           `;
      scheduleDiv.innerHTML = details;
    }
  }
}
