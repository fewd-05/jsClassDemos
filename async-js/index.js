// // promise example
// let groceriesDone = false;

// const iHaveDoneGroceries = new Promise((resolve,reject) => {
//     if (groceriesDone) {
//         resolve('You can finally watch some TV!');
//     } else {
//         reject('You need to do groceries!');
//     }
// });

// iHaveDoneGroceries.then(function(res) {
//     console.log(res);
// }).catch(function(penguin) {
//     console.log(penguin)
// })

// fetch example
// console.log("start");

// fetch('https://api.chucknorris.io/jokes/random?category=travel')
// .then(function(res){
//     return res.json();
// }).then(function(res) {
//     console.log(res);
// });

// console.log("end");

// fetch("https://api.imgflip.com/get_memes")
// .then((res) => {return res.json()})
// .then((res) => {console.log(res.data.memes[0].url);
//     let url = res.data.memes[0].url;
//     let meme = document.createElement('img');
//     meme.setAttribute('src', url);
//     document.body.appendChild(meme);
// });


   




