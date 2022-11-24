// --- Traversing the DOM/ Nodes ---
// console.log(document.getElementsByClassName('whiteText'));
console.log(document.body.firstElementChild);
// --- JS Selectors ---
const headings = document.getElementsByClassName('text');
const redParagraph = document.getElementsByClassName('redText');
// const greenDiv = document.querySelector('.redtext');
const styledParagraph = document.getElementsByTagName('p');
const list = document.querySelectorAll('p');

// --- JS Appending/Creating Elements ---
const newParagraph = document.createElement('p');
const newElement = document.getElementById('append');
newParagraph.innerText = 'This paragraph is inserted with JS!';
newElement.appendChild(newParagraph);

// newElement.removeChild(newParagraph);

// --- on____ Events ---
const greenDiv = document.getElementById('greenDiv');
console.log(greenDiv);

greenDiv.addEventListener('click', logGreen);
// greenDiv.removeEventListener('mouseover', logGreen);

function logGreen(e) {
    console.log("GREEEEEEN!!")
    // event target
    console.log(e.target);
}

// --- event listeners ---

// --- JS Adding Events ---
function changeStyles () {
    const styledParagraph = document.getElementsByTagName('p');
    console.log(styledParagraph);
    for (i=0; i < styledParagraph.length; i++) {
        if (styledParagraph[i].style.backgroundColor == 'black') {
            styledParagraph[i].style.backgroundColor = 'white';
            styledParagraph[i].classList.remove('changeWhiteText', 'redBorders');
        } else {
            styledParagraph[i].style.backgroundColor = 'black';
            styledParagraph[i].classList.add('changeWhiteText', 'redBorders');
        }
    }
}

const stylesBtn = document.querySelector('#stylesBtn');

stylesBtn.addEventListener('click', changeStyles);




