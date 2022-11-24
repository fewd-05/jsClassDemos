const festivalSchedule = {
  "26th Nov 2022": {
    city: "Sydney",
    bands: ["Metallica", "Sabaton", "Slipknot"],
  },
  "27th Nov 2022": {
    city: "Sydney",
    bands: ["Metallica", "Wolfmother", "Sabaton"],
  },
  "28th Nov 2022": {
    city: "Melbourne",
    bands: ["The Wiggles", "The Teletubbies", "One Direction"],
  },
};

// adding this information onto page depending on user's submission
const btn = document.getElementById("submit");
const div = document.getElementById("schedule");
btn.addEventListener("click", onSubmit);
function onSubmit() {
    const searchVal = document.getElementById("date").value;
  console.log(searchVal);
  for (element in festivalSchedule) {
    if (element == searchVal) {
      console.log(festivalSchedule[element].city);
      let listItems = "";
      for (i = 0; i < festivalSchedule[element].bands.length; i++) {
        console.log(festivalSchedule[element].bands[i]);
        listItems += `<li class="band">${festivalSchedule[element].bands[i]}</li>`;
      }
      let newHTML = ` 
      <div class="container">
           <h2 class="heading">${festivalSchedule[element].city}</h2>
           <blockquote>${element}</blockquote>
           <ul class="list">
              ${listItems}
           </ul>
       </div>`;
       div.innerHTML = newHTML;
       if (festivalSchedule[element].city == "Sydney") {
        div.style.backgroundImage = "url(./images/sydney.jpg)";
       } else {
        div.style.backgroundImage = "url(./images/melbourne.jpg)";
       }
    }
  }
}
