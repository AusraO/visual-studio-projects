//Sukurti ToDo aplikaciją.
//Kuriant UI galima naudotis vizualiu pavyzdžiu esančiu ./images/toDoApp.PNG

//Aplikacijoje reikia turėti galimybes:
//Sukurti naują task'ą.
// Pažymėti task'ą kaip atliktą.
// Atžymėti task'ą kaip neatliktą.
// Ištrinti task'ą.

//1) Sukurti aplikaciją nenaudojant Klasių, nei duomenų, nei duomenų saugojimo vartotojo dalyje.
//2) Patobulinti aplikaciją, kad nauji elementai būtų kuriami su Klasės pagalba.
// Toje pačioje klasėje būtų aprašyti ir funkcionalumai kaip metodai, kurie būtų kviečiami nuspaudus atitinkamą vietą elemente.
//3) Patobulinti aplikaciją taip, kad elementai būtų sukuriami iš duomenų kintamojo.
//4) Patobulinti aplikaciją taip, kad duomenys keistųsi, priklausomai nuo vartotojo atliekamų veiksmų vartotojo sąsajoje.
// Kai sukuriamas naujas elementas - pasipildytų duomenys; kai ištrinamas esantis elementas - jis būtų išimamas iš duomenų; 
//kai pažymimas kaip atliktas arba neatlikas - duomenyse pasikeistų jo atlikimo statusas.
//5) Patobulinti aplikaciją taip, kad duomenys būtų saugojami, trinami arba redaguojami localStorage'e.


import { kurtiNaujaKortele } from "./newCardCreation.js";

const nodeSection = document.querySelector('#nodeElements');

let dezute = document.createElement('div');
dezute.classList.add('kortele')
nodeSection.append(dezute);


let antraste = document.createElement('h1')
let antrastesText = document.createTextNode('My to do list:');
antraste.append(antrastesText);
dezute.append(antraste);

let forma = document.createElement('form');
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'tekstoLaukelis');
input.classList.add('textArea')
forma.append(input)

let inputSubmit = document.createElement('input');
inputSubmit.setAttribute('type', 'submit')
inputSubmit.setAttribute('value', '+ Add new task');
inputSubmit.classList.add('button')
forma.append(inputSubmit);
dezute.append(forma);


inputSubmit.addEventListener('click', naujosKortelesFunkcija);

function naujosKortelesFunkcija(){
    const NaujaKortele=new kurtiNaujaKortele(input, nodeSection )
  
   
}






// function kurtiNaujaKortele(event) {
//     event.preventDefault();


//     let toDoElement = document.createElement('div');
//     toDoElement.classList.add('toDoBox');

//     let itsDone = document.createElement('button');
//     let itsDoneText = document.createTextNode('Done!');
//     itsDone.classList.add('doneButton')
//     itsDone.append(itsDoneText);
//     toDoElement.append(itsDone);

//     let toDoElementTextBox = document.createElement('div')

//     let toDoElementText = document.createTextNode(input.value);
//     toDoElement.append(toDoElementTextBox);
//     toDoElementTextBox.append(toDoElementText);
//     nodeSection.append(toDoElement);

//     itsDone.addEventListener('click', crossOut);


//     function crossOut(event) {
//         event.preventDefault();
//         toDoElementTextBox.classList.add('lineThrough');    //kodel isemus sita kas antra karta daro tik zymejima???
//         itsDoneText.textContent = 'Undo';

//         itsDone.addEventListener('click', () => {
//             if (toDoElementTextBox.classList.contains('lineThrough')) {
//                 toDoElementTextBox.classList.remove('lineThrough');
//                 itsDoneText.textContent = 'Done!'
//             }
//             else if (!toDoElementTextBox.classList.contains('lineThrough')) {
//                 toDoElementTextBox.classList.add('lineThrough');
//                 itsDoneText.textContent = 'Undo';
//             }
//         })



//     }


//     let trynimoMygtukas = document.createElement('button');
//     toDoElement.append(trynimoMygtukas)
//     let trynimoMygtukoTekstas = document.createTextNode('Delete Task');
//     trynimoMygtukas.classList.add('deleteTaskButton')
//     trynimoMygtukas.append(trynimoMygtukoTekstas);
//     trynimoMygtukas.addEventListener('click', (e) => {
//         e.target.parentElement.remove();

//     })
// }



