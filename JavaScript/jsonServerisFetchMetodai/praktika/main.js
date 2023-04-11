import Filmai from "./filmai.js";


fetch('http://localhost:3000/MoviesAndSeries')
  .then(res => res.json())
  .then(filmai => {
    console.log(filmai);
    const allCards = document.querySelector('#cards');
    filmai.forEach(filmas => {
      const filmasDiv = new Filmai(filmas);
     allCards.appendChild(filmasDiv);
    });
  })
  document.querySelector('#createNewCard > form').addEventListener('submit', e => {
    e.preventDefault();
    const cardElements = e.target.elements;
    const filmas = {
      name: cardElements.name.value,
      production: cardElements.production.value,
      genre: cardElements.genre.value,
      year: cardElements.year.valueAsNumber,
      length: cardElements.length.value,
      imdbRating: cardElements.imdbRating.valueAsNumber,
      oscars: cardElements.oscars.checked,
      picture: cardElements.picture.value,
      id: Date.now()
    };
  
    const filmasDiv = new Filmai(filmas);
    document.querySelector('#cards').appendChild(filmasDiv);
    fetch('http://localhost:3000/MoviesAndSeries', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(filmas)
    });
    e.target.reset();
  });