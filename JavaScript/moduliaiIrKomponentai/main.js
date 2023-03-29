import {sum as sudetis, division as dalyba} from './matematika.js';
import randomColor, {kita} from './randomColor.js';
import Parag from './paragraph.js';
import Heading from './heading.js';

console.groupCollapsed('moduliai')
kita(); kita()

console.log(sudetis('spalva:', randomColor()))
console.log(dalyba(55, 5))

console.groupEnd();








const textSection=document.querySelector('#test');
const paragrafas0= new Parag({
    text:'sukureme paragrafa', 
    class:['raudonasTekstas', 'didelisTekstas', 'centruotasTekstas']
});
const paragrafas1=new Parag ({text:'Labas as krabas'});

textSection.append(paragrafas0, paragrafas1)

const heading0=new Heading({
    text: 'as esu antraste',
    size:1,
    class:['raudonasTekstas', 'didelisTekstas', 'centruotasTekstas']
})
const heading1=new Heading({
    text:'as esu mazas antrasciukas',
    size: 5
})

textSection.append(heading0, paragrafas0, paragrafas1, heading1)