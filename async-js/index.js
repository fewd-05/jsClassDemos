// promise example
let phone = true;

const iHaveAPhone = new Promise(function(resolve,reject) {
    if (phone == true) {
        resolve("You own a phone!")
    } else {
        reject("You need to buy a phone.")
    }
})

iHaveAPhone.then(function(resolution) {
    console.log(resolution);
}).catch(function(error) {
    console.log(error);
});

// fetch example
fetch("https://api.imgflip.com/get_memes")
.then((res) => {return res.json()})
.then((res) => {console.log(res.data.memes[0].url);
    let url = res.data.memes[0].url;
    let meme = document.createElement('img');
    meme.setAttribute('src', url);
    document.body.appendChild(meme);
});
