
import Zmogus from './Card.js';

fetch('http://localhost:3000/asmenys')
  .then(res => res.json())
  .then(zmones => {
    const allCards = document.querySelector('#allCards');
    zmones.forEach(zmogus => {
      const zmogusCard = new Zmogus(zmogus);
      allCards.appendChild(zmogusCard);
    });
  });