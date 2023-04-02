// document.cookie= 'pavadinimas=reiksme';
// // document.cookie=`vardas=ausra; expires=${new Date ('2023 03 31')}`



//Session storage

window.sessionStorage.setItem('raktinisZodis', 'reiksme')
window.sessionStorage.setItem('vardas', 'ausra')
window.sessionStorage.setItem('pavarde', 'orsevskiene')
window.sessionStorage.removeItem('pavarde')
// sessionStorage.clear(); //isvalo visa sessionStorage
let sessionVardas = window.sessionStorage.getItem('vardas')
console.log(sessionVardas);
let sessionRaktas = window.sessionStorage.key(1);
console.log(sessionRaktas)
console.log(window.sessionStorage.length)



//local Storage

window.localStorage.setItem('tema', 'runescape');
window.localStorage.setItem('itema', 'false');
window.localStorage.removeItem('itema');
// localStorage.clear();
console.log(window.localStorage.getItem('tema'));
console.log(window.localStorage.key(0));
console.log(window.localStorage.length)


const duomenys = {
    asmenys: [
        {
            vardas: "Ausra",
            pavarde: "Orsevskiene"

        },
        {
            vardas: "Esmile",
            pavarde: "Orsevskyte"

        }
    ],
    masinos: [
        {
            marke: "audi",
            modelis: "TT",
            metai: 2000

        },
        {
            marke: "BMV",
            modelis: "6",
            metai: 2015

        }
    ],

}
window.localStorage.setItem('duomenys', JSON.stringify(duomenys));
console.log(window.localStorage.getItem('duomenys'));
console.log(JSON.parse(window.localStorage.getItem('duomenys')).asmenys);



// Node ELementai
const nodeSekcija= document.querySelector('#nodeElements')
let divas=document.createElement('div');
divas.classList.add('kortele', 'remeliai');
nodeSekcija.appendChild(divas);
let heading=document.createElement('h1');
divas.append(heading);
let textPavadinimas=document.createTextNode('pavadinimas');
heading.append(textPavadinimas);

heading.addEventListener('mouseenter', () => {
    divas.style.backgroundColor='red'     //arba divas.classList.add('redBG) is CSS jei perkeliam stiliu
});
heading.addEventListener('mouseleave', () => {
    divas.style.backgroundColor=''
})

// if(heading.classList.contains('redBG')){
//     heading.classList.add('redBG')
//     console.log('atemiau fono spalva')
// }

let trynimoMygtukas=document.createElement('button');
divas.append(trynimoMygtukas)
let trynimoMygtukoTekstas=document.createTextNode('trinti');
trynimoMygtukas.append(trynimoMygtukoTekstas);
trynimoMygtukas.addEventListener('click', (e)=>{
    e.target.parentElement.remove();
    console.log("panaikinau divo kortele WUHAHAHHA")
})



const nodeSection=document.querySelector('#nodeElements');
let dezute= document.createElement('div');
dezute.classList.add('kortele2', 'remeliai2')
nodeSection.append (dezute);
let antraste=document.createElement('h1')
let antrastesText=document.createTextNode('Labas Labas Labas');
antraste.append(antrastesText);
dezute.append(antraste);
let paveiksliukas =document.createElement('img');
paveiksliukas.setAttribute('src', 'https://a-z-animals.com/media/2022/09/iStock-467129006.jpg');
paveiksliukas.setAttribute('alt', 'krabas');
paveiksliukas.classList.add('pav')
dezute.append(paveiksliukas);
let dezutesText = document.createTextNode('labas as krabas');
dezute.append(dezutesText);

let dauginimoMygtukas=document.createElement('button');
dezute.append(dauginimoMygtukas);
let dauginimoMygtukoTekstas= document.createTextNode('Noriu daugiau Krabu');
dauginimoMygtukas.append(dauginimoMygtukoTekstas);
dauginimoMygtukas.addEventListener('click', (e)=>{
    e.target.parentElement.append(dezute.cloneNode(true));
})