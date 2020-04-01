// creating shortcut for printing
const p = console.log;

// get the references to interactive HTML elements
const ctrlBtns = document.querySelectorAll('.controls button');
const cntnr = document.querySelector('.container');
let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];

// create array that will store the data
let pages = [
    {
        heading: "Tax Exemptions for Green Energy Companies",
        bodyText: "Tax Exemptions for Green Energy Companies - Softening the taxes for companies working towards making widespread use of green energy a reality would leave them with more money to invest into their business and hence, grow rapidly. ",
        thumb: "img/busn.jpg",
	alt: "funds"
    },
    {
        heading: "Powering Community Places",
        bodyText: "The government should strive to turn community events, such as fairs, concerts, conventions etc, along with regularly-used venues such as movie theatres and amusement parks into users of green energy. ",
        thumb: "img/comm.jpg",
	alt: "sun"
    },
    {
        heading: "Subsidies to Households using Green Energy",
        bodyText: "Subsidies to Households & Small Businesses using Green Energy - Subsidies, even if they’re modest, would incentivise some people to opt for green energies in their homes and for their small, local businesses.",
        thumb: "img/small.jpg",
	alt: "windmill"
    }
];
// create function that handles click-event
function clickBtn(ev) {

    // Brightspsce Ref: Week 6
    let clickedButton = ev.target;

    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let index = btnsArray.indexOf(clickedButton);
    p(index);

    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element
    p(clickedButton.id);
    // handle moving id-active to the currently clicked button 

    // remove currently present id="active"
    for (let i = 0; i < ctrlBtns.length; i++) {
        // claiming that current element in the loop containe attribute
        if (ctrlBtns[i].id) {
            // MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
            ctrlBtns[i].removeAttribute('id');
        }
    }

    // assign id="active" to the currently clicked button
    clickedButton.id = 'active';

    // load the corresponding data into <div class="container"></div>
    cntnr.innerHTML = `
        <h2>${pages[index].heading}</h2>
	<img src="${pages[index].thumb}" alt="${pages[index].alt}">
        <p>${pages[index].bodyText}</p>
    `;
}
// register your buttons for click event
for (let i = 0; i < ctrlBtns.length; i++) {
    ctrlBtns[i].addEventListener('click', clickBtn);
}

ctrlBtns[0].setAttribute("id", "active");
cntnr.innerHTML = `
        <h2>${pages[0].heading}</h2>
	<img src="${pages[0].thumb}" alt="${pages[0].alt}">
        <p>${pages[0].bodyText}</p>
    `;
