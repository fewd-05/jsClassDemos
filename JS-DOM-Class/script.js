// --- Traversing the DOM/ Nodes ---

// --- JS Selectors ---
// const headings = document.getElementsByClassName('text');
// const redParagraph = document.getElementsByClassName('redText');
// const greenDiv = document.querySelector('.redtext');
// const styledParagraph = document.getElementsByTagName('p');
// const list = document.querySelectorAll('p');

// --- JS Appending/Creating Elements ---
const newParagraph = document.createElement('p');
const newElement = document.getElementById('append');
newParagraph.innerText = 'This paragraph is inserted with JS!';
newElement.appendChild(newParagraph);

// --- on____ Events ---
const greenDiv = document.getElementById('greenDiv');
// console.log(greenDiv);

function logGreen() {
    console.log("GREEEEEEN!!")
    // event target
}

// --- event listeners ---

// --- JS Adding Events ---
function changeStyles () {
    const styledParagraph = document.getElementsByTagName('p');
    console.log(styledParagraph);
    document.getElementById('myDiv').style.backgroundColor = 'lightblue';
    for (i=0; i < styledParagraph.length; i++) {
        styledParagraph[i].style.backgroundColor = 'black';
        styledParagraph[i].classList.add('changeWhiteText', 'redBorders');
    }
}




