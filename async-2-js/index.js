const postBtn = document.getElementById('POST');
const getBtn = document.getElementById('GET');
const putBtn = document.getElementById('PUT');
postBtn.addEventListener('click', post);
getBtn.addEventListener('click', get);
putBtn.addEventListener('click', put);

let taskIdCounter = 0;
// GET METHOD
async function get() {
    let value = fetch("http://localhost:3000/tasks")
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res);
        return res;
    });
    return value;
}

// ASYNC GET METHOD
// async function get() {
//     let res = await fetch("http://localhost:3000/tasks");
//     let resJson = await res.json();
//     console.log(resJson);
//     return resJson;
// }

// POST METHOD
async function post(taskName) {
    const tasks = await get();
    let taskId = tasks.length;
    
    fetch("http://localhost:3000/tasks",
    {
        method: "POST",
        body: JSON.stringify({
            taskName: taskName,
            status: "Incomplete",
            id: taskId
        }),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then((res) => {
        return res.json()
    })
    .then((res) => {console.log(res)})
    .catch(function(err) {
        console.log("Request failed!")
    })
}

// PATCH METHOD
function put() {
    fetch("http://localhost:3000/tasks/1", 
    { 
        method: 'PUT',
        body: JSON.stringify({
        taskName: "Do the Laundry",
        status: "Incomplete",
        id: 1
        }),
        headers: {
        "Content-type": "application/json"
        }
        }
    )
        .then(response => response.json())
        .then(json => console.log(json))
}
