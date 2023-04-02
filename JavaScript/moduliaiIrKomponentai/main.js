import { sum as sudetis, division } from './matematika.js';
import mumboJumbo, { kita } from './randomColor.js';
import P from './paragraph.js';
import H from './heading.js';
import Card from './card.js';
import List from './list.js';

console.groupCollapsed('moduliai');
kita(); kita(); kita(); kita(); kita();
console.log(sudetis('spalva:', mumboJumbo()));
console.log(division(80000, 3));
console.groupEnd();

const testSection = document.querySelector('#test');
const paragrafas0 = new P({
    text: 'Sukūrėme paragrafą :)',
    class: ['raudonasTekstas', 'centruotasTekstas']
});
const paragrafas1 = new P({ text: 'Saulė šviet, varom pabėgiot!!!' });
const heading0 = new H({
    text: 'Aš esu antraštė',
    size: 1,
    class: ['raudonasTekstas', 'centruotasTekstas', 'didelisTekstas']
});
const heading1 = new H({
    text: 'Aš esu mažiukas antraščiukas',
    size: 5
});

const card0 = new Card({
    image: {
        src: 'https://assets2.cbsnewsstatic.com/hub/i/r/2012/02/06/1feb5e95-a644-11e2-a3f0-029118418759/thumbnail/1200x630/64a9aba33675cad48043257194ebc838/breading-cats-q013.jpg',
        alt: 'cat ale bread'
    },
    heading: {
        text: 'Cat in da bread',
        size: 1
    },
    paragraph: {
        text: 'Cat is very happy while living inside the bread :)'
    }
});
const sarasas0 = new List({
    listType: 'ol',
    listClass: ["vienaKlase", "kitaKlase"],
    listItemsClass:['liKlase'],
    listItems: [   //pasiekiamas su this.props.listItems
        {
            text:"pirmas"
        },
        {
            text:"antras"
        },
        {
            text:"trecias",
            class:"unikaliKlase"
        },
        {
            text:"ketvirtas"
        },
        {
            text:"penktas"
        }
    ]

})
testSection.append(heading0, paragrafas0, paragrafas1, heading1, card0, sarasas0);



// 0) Sukurti Klasę, kurios pagalba galima būtų kurti IMG elementą, su jo atributais.







//0.1) Patobulinti card.js faile esančią vietą, kur kuriamas paveiksliukas 
//(kreiptis į paveiksliuko komponentą, o ne rašyti visą paveiksliuko kūrimą pačioje kortelėje).
//1) Sukurti Klasę, kurios pagalba galima būtų kurti OL arba UL elementus su LI jų viduje. 
//(kas be ko, galimybė suteikti tekstus ir atributus) P.S. Stilizuoti :)
//2) Sukurti Klasę, kurios pagalba galima būtų kurti SELECT elementą, kurio viduje būtų OPTION'ai. 
//(kas be ko, galimybė suteikti tekstus ir atributus). P.S. Stilizuoti :)