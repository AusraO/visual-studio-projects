/*



*/





var pavadinimas = "reiksme";
var menesis = 'kovas';
var menesiai = 'sausis vasaris kovas balandis';
let grazusSkaicius = 77.7 * 7 / 77 + 7;
let arDabarVasara = false;
let arNoriuMiego = true;
const PI = 3.14
console.log(arDabarVasara);
window.alert('labas as krabas');
let vartotojoReiksme = window.prompt('ar veluojame i pertrauka?');



let sk1 = 9;
let sk2 = 5;
let neSkaicius = '5'
let zodis = 'labas as krabas';
let tiesa = true;

console.groupCollapsed()

console.log('9+5=', sk1 + sk2);
console.log('9*5=', sk1 * sk2);
console.log(sk1 / sk2);
console.log(sk1 ** sk2);
console.log(sk1 ** (1 / sk1));
console.log('labas' * sk1); //NaN
console.groupEnd();




console.groupCollapsed()

console.log(0.1 + 0.2);
let kintamasis = 'labas vakaras'
console.log(kintamasis);
kintamasis = 50;
console.log(kintamasis);
kintamasis = kintamasis + 1;
console.log(kintamasis);



kintamasis += 100;//kintamasis=kintamasis+100
console.log(kintamasis);
console.groupEnd();
console.groupCollapsed()
console.log(10 >= 3);//true
console.log(10 >= 3);//true
console.log(10 == 3);//false
console.log(10 == 3);//false
console.log(10 === '3');
console.groupEnd();

//-----------------------------------------------------------------------------------------------------------//

console.groupCollapsed('uzduotis');
let arPavasaris = true;
let arSiltaLauke = false;
let arSkanusPyragas=true;
let arMegstuMatematika=false;
let arPavargau=true
let kaciuKiekis = 10;
let sunuKiekis = 2;
let liutuKiekis=3;
let zuvuKiekis=5;
let driezuKiekis=6;
let koNoriuAs = "noriu miego";
let koNoriVaikas = 'nori desimt kaciu';
let eilerastis= 'apserksnije musu ziemos balta balta kur dairais';
let instrukcija= 'sukti i kaire pavaziuoti tris simtus metru';
let oruPrognoze='salta, salta ir dar karta salta';

console.groupCollapsed('int+int');
console.log(kaciuKiekis + sunuKiekis);
console.log(kaciuKiekis - sunuKiekis);
console.log(kaciuKiekis * sunuKiekis);
console.log(kaciuKiekis / sunuKiekis);
console.log(kaciuKiekis ** sunuKiekis);


console.groupEnd();
console.groupCollapsed('int+bul');
console.log(kaciuKiekis + arPavargau);
console.log(kaciuKiekis - arMegstuMatematika);
console.log(kaciuKiekis * arSiltaLauke );
console.log(kaciuKiekis /arSkanusPyragas);
console.groupEnd();

console.groupCollapsed('int+str');
console.log(kaciuKiekis + koNoriVaikas);
console.log(kaciuKiekis -koNoriVaikas);
console.log(kaciuKiekis * koNoriVaikas);
console.log(kaciuKiekis /koNoriVaikas);
console.groupEnd();

console.groupCollapsed('bol+bol');
console.log(arSiltaLauke + arMegstuMatematika);
console.log(arSiltaLauke - arSkanusPyragas);
console.log(arSiltaLauke * arMegstuMatematika);
console.log(arSiltaLauke / arSkanusPyragas);
console.groupEnd();

console.groupCollapsed('bol+str');
console.log(arSiltaLauke + koNoriVaikas);
console.log(arSiltaLauke -koNoriuAs);
console.log(arSiltaLauke *eilerastis);
console.log(arSiltaLauke *instrukcija);
console.groupEnd();

console.groupCollapsed('str+str');
console.log(eilerastis + koNoriVaikas);
console.log(eilerastis - koNoriVaikas);
console.log(eilerastis * koNoriVaikas);
console.log(eilerastis / koNoriVaikas);
console.groupEnd();

console.groupCollapsed('aritmetiniai trumpinimai');
console.log(kaciuKiekis +=10);
console.log(kaciuKiekis -=10);
console.log(kaciuKiekis *=10);
console.log(kaciuKiekis /=10);

console.groupCollapsed('palyginimo operatoriai');
console.log(kaciuKiekis >10);
console.log(kaciuKiekis <10);
console.log(kaciuKiekis >=10);
console.log(kaciuKiekis <=10);
console.log(kaciuKiekis ==10);
console.log(kaciuKiekis ===10);
console.log(kaciuKiekis !=10);
console.log(kaciuKiekis !==10);
console.groupEnd();
console.groupEnd();