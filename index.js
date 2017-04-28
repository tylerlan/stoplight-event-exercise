(function() {
  'use strict';

  // YOUR CODE HERE

  let buttonDivs = document.querySelectorAll('div .button');
  let bulbDivs = document.querySelectorAll('div .bulb');

  buttonDivs.forEach( (div) => {
    div.addEventListener('click', transform);
  })

  function transform(event) {
    let eventText = event.target.innerText.toLowerCase();

    for (let bulb in bulbDivs) {
      if (bulbDivs[bulb].id.includes(eventText)) {
        bulbDivs[bulb].classList.toggle(eventText);
      }

    }


}






})();
