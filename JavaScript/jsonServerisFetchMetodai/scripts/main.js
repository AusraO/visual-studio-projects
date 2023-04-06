import Zmogus from './Zmogus.js';

// const duomenys = {
//   zmones:[
//     {
//       vardas: "Rokas",
//       pavarde: "Banaitis",
//       amzius: 26,
//       vedes: false
//     },{
//       vardas: "Petras",
//       pavarde: "Petrauskas",
//       amzius: 55,
//       vedes: true
//     },{
//       vardas: "Jonas",
//       pavarde: "Jonukauskas",
//       amzius: 5,
//       vedes: true
//     }
//   ], automobiliai:[
//     {
//       marke: "Audi",
//       modelis: "TT",
//       gamybosMetai: 2010
//     },{
//       marke: 'BMW',
//       modelis: "6",
//       gamybosMetai: 2020
//     },{
//       marke: "Fiat",
//       modelis: "Punto",
//       gamybosMetai: 2001
//     }
//   ]
// }
// console.log(JSON.stringify(duomenys));

//            GET metodas
// fetch('http://localhost:3000/automobiliai')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   })
//            GET metodas nurodant specific
// fetch('http://localhost:3000/automobiliai/3')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   })

//          DELETE metodas
// fetch('http://localhost:3000/automobiliai/2', {
//   method: 'DELETE'
// })

//          POST metodas
// fetch('http://localhost:3000/automobiliai', {
//   method: 'POST',
//   headers:{
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     marke: 'BMW',
//     modelis: '6',
//     gamybosMetai: 2020
//   })
// })

/*
      CRUD
  C - create  2
  R - read    1
  U - update  4
  D - delete  3
*/

fetch('http://localhost:3000/zmones')
  .then(res => res.json())
  .then(zmones => {
    console.log(zmones);
    const allCards = document.querySelector('#allCards');
    zmones.forEach(zmogus => {
      const zmogusDiv = new Zmogus(zmogus);
      allCards.appendChild(zmogusDiv);
    });
  });

document.querySelector('#newCard > form').addEventListener('submit', e => {
  e.preventDefault();
  const elementai = e.target.elements;
  // console.log(elementai);
  const zmogus = {
    vardas: elementai.vardas.value,
    pavarde: elementai.pavarde.value,
    amzius: elementai.amzius.valueAsNumber,
    vedes: elementai.vedes.checked,
    lytis: elementai.lytis.value,
    profileImage: elementai.profileImage.value,
    // id: Date.now()
  };
  // console.log(zmogus);
  const zmogusDiv = new Zmogus(zmogus);
  // console.log(zmogusDiv);
  document.querySelector('#allCards').appendChild(zmogusDiv);
  fetch('http://localhost:3000/zmones', {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(zmogus)
  });
  e.target.reset();
});