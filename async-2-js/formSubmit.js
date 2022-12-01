const btn = document.getElementById("submit");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const taskNameVal = document.getElementById("taskName").value;
  post(taskNameVal);
});

// LOADING TASKS USING ASYNC/AWAIT
// async function loadTasks() {
//   let tasks = await get();
//   let text = "";
//   for (i = 0; i < tasks.length; i++) {
//     text += `<div class="task">
//         <h1>${tasks[i].taskName}</h1>
//         <p>Status: ${tasks[i].status}</p>
//         <button id=${tasks[i].id}>Complete</button>
//         </div>`;
//   }
//   document.getElementById("taskContainer").innerHTML = text;
// }

// loadTasks();

// LOADING TASKS USING PROMISES
// let loadTaskTwo = new Promise((resolve, reject) => {
//   let tasks = get();
//     resolve(tasks);
// }).then(tasks => {
//   let text = "";
//   for (i = 0; i < tasks.length; i++) {
//     text += `<div class="task">
//         <h1>${tasks[i].taskName}</h1>
//         <p>Status: ${tasks[i].status}</p>
//         <button id=${tasks[i].id}>Complete</button>
//         </div>`;
//   }
//   document.getElementById("taskContainer").innerHTML = text;
// });
