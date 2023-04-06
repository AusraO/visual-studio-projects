//1) Puslapyje paspaudus ant mygtuko "Generuoti vartotoją", po apačia turi būti sukurta vartotojo kortelė,
// kurioje bus atvaizduoti vartotojo duomenys (minimum: Vardas, Pavardė, amžius, šalis, elPaštas, nuotrauka).
//Random vartotojas gaunamas iš https://randomuser.me/api/.
//Vėl paspaudus ant mygtuko "Generuoti vartotoją", vietoj esamo atsiras naujas. (neprikurti puslapio su 999 vartotojais)


import Data from './buttonaprasymas.js'
import TableData from './lentelesAprasymas.js'

    fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    document.querySelector('button').addEventListener('click', e => {
        e.preventDefault();
        console.log(data.results[0])
    new Data(data.results[0]) //? tipo is kur paimta?

    
      });
    //   document.querySelector("#vartGen").innerHTML= "";
  })

  //2) Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me
 // 2.1) Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
 // 2.2) Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
 // 2.3) Pridėkite prie lentelės (tarp id ir name) nuotrauką.

 

 fetch('https://magnetic-melon-yam.glitch.me')
 .then(res => res.json())
 .then(tableData => {
    
       console.log(tableData)
       tableData.forEach(user => {
       const tableData=new TableData({
        id: user.id,
        name: user.name,
        city: user.city,
        fav_color: user.fav_color
       });
       document.querySelector('#tableSec').append(tableData)
     });
   
    })