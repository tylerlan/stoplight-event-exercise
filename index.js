(function() {
  'use strict';

  // YOUR CODE HERE

  let buttonDivs = document.querySelectorAll('div .button');
  let bulbDivs = document.querySelectorAll('div .bulb');

  buttonDivs.forEach((div) => {
    div.addEventListener('click', bulbTOGGLE);
  })

  buttonDivs.forEach((div) => {
    div.addEventListener('mouseover', bulbON);
  })


  buttonDivs.forEach((div) => {
    div.addEventListener('mouseout', bulbOFF);
  })

  function bulbTOGGLE(event) { // This one logs nothing when called

    let eventText = event.target.innerText.toLowerCase();

    for (let bulb in bulbDivs) {
      let idText = bulbDivs[bulb].id;
      if (idText.includes(eventText)) {
        bulbDivs[bulb].classList.toggle(eventText);
      }
    }

  }

  function bulbON(event) { // This one logs that mouseover happened

    let eventText = event.target.innerText.toLowerCase();

    for (let bulb in bulbDivs) {
      let idText = bulbDivs[bulb].id;
      if (idText.includes(eventText)) {
        bulbDivs[bulb].classList.toggle(eventText);
        console.log(`Entered ${eventText} button`);
      }
    }

  }

  function bulbOFF(event) { // This one logs that mouseout happened

    let eventText = event.target.innerText.toLowerCase();

    for (let bulb in bulbDivs) {
      let idText = bulbDivs[bulb].id;
      if (idText.includes(eventText)) {
        bulbDivs[bulb].classList.toggle(eventText);
        console.log(`Left ${eventText} button`);
      }
    }

  }





})();
