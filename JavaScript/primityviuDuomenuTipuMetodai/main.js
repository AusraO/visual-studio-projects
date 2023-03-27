// 1) Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją alert() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).

// function milkPrice (x){
// if (Number.isInteger(x)){
//   return ('mokesit eurus')
// }
// else{
//    return('Mokesit eurus ir centus')
// }
// }
// let atsakymas=milkPrice (2.99)
// alert(atsakymas)

//2) Pakoreguok pirmą pratimą, kad alert taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).

function milkPrice(x) {
    x = x.toFixed(2)
    if (Number.isInteger(x)) {
        return (`mokesit ${x} Eur`)
    }
    else {

        return (`Mokesit ${x} Eur`)
    }
}
let atsakymas = milkPrice(2)
alert(atsakymas)




//3) Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trim skaičias po kablelio, antrame - degalų kiekį,
// su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti).
// Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), 
//su dviem skaičiais po kablelio (pvz. 7.13 Eur).

// let x= document.getElementById('kaina').value;
// let y= document.getElementById('degaluKiekis').value;




function kainosUzrasoFunkcija(event) {
    event.preventDefault(); //neleidzia persikraut
    let x = event.target.elements.kaina.valueAsNumber; //surisam su HTML
    let y = event.target.elements.degaluKiekis.valueAsNumber;
    let atsakymas = x * y    // reikia susikurti viduje atsakyma, kad butu galima panaudoti toFixed
    atsakymas = atsakymas.toFixed(2)

    document.querySelector('#kainosUzrasas').textContent = atsakymas   //paimam tuscia HTML h1 kuriame idedam veiksma reikalinga

}

document
    .querySelector('#inputArea')  //nurodo kurioj HTML vietoj imam duomenis
    .addEventListener('submit', kainosUzrasoFunkcija)  //po submito, kad igyvendintu aprasyta funkcija
















//4) Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių.
// Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.


function varduKartojimoUzrasas(event) {    //susikuriu f-ja kuri veiktu ivedus ir paspaudus submit
    event.preventDefault();                //apsaugo nuo persikrovimo
    let vardas = event.target.elements.vardas.value;     //paima is HTML vardas ir skaicius inputus
    let skaicius = event.target.elements.skaicius.valueAsNumber;
    let vardai = ''  //susikuriu tuscia dezute kuri bus reikalinga sukant cikla
    if (skaicius.isInteger) {     //ar skaicius sveikasis tikrinu su if
        return alert('prasome ivesti sveikaji skaiciu')
    }
    else {
        for (let i = 0; i <= skaicius; i++) {  //suku cikla tiek kiek yra parasyta skaicius dalyje
            vardai += (vardas + ' ')       //i sukurta tuscia dezute pridedu kintamaji vardas ir tarpeli
        }
        document.querySelector('#vardasKartojasiCia').textContent = vardai    //is HTML parenku h1 kurio text'o dalyje suksis ciklas
    }
}

document
    .querySelector('#ketvirtaUzduotis')     //nurodo kurioj HTML vietoj imam duomenis
    .addEventListener('submit', varduKartojimoUzrasas)   //po submito, kad igyvendintu aprasyta funkcija




//5) Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.

function raidziuKiekis(event) {
    event.preventDefault();    //neleidzia persikrauti
    let vardas = event.target.elements.vardas2.value;  //paimu inputa HTML'o

        vardas = vardas.trim();  //nuimu tarpelius
        vardas = vardas.length //paima zodziu ilgi
        alert(vardas)         //ismeta alerta
    }

document
    .querySelector('#penktaUzduotis')  //nurodau is kur paimti HTML duomenis
    .addEventListener('submit', raidziuKiekis) // kad paspaudus submit butu vykdoma funkcija raidziuKiekis



//6) Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). 
//Padaryk, kad JS ekrane atvaizduotų du h1 tag'us, viename - vardas, kitame - pavardė.

function vardoIrPavardesIsskyrimas(event){    //susikuriu funkcija evento
    event.preventDefault();   //kad nepersikrautu
    let vardasIrPavarde= event.target.elements.vardasIrPavarde.value   //paimu verte ivesta i HTML
    vardasIrPavarde=vardasIrPavarde.split(" ");  //verte splitinu per tarpeli
    let vardas =vardasIrPavarde[0];  //sukuriu kintamaji vardas
    let pavarde= vardasIrPavarde[1]  //sukuriu kintamaji pavarde
    let vardoVieta = document.createElement('h1');  //HTML sukuriu du h1 elementus
    let pavardesVieta=document.createElement('h1');
 vardas=document.createTextNode(vardas)    //????????????????????
 pavarde=document.createTextNode(pavarde)

vardoVieta.appendChild(vardas);  // vardo vieta sujungiu su vardu
pavardesVieta.appendChild(pavarde);  //pavardes vieta sujungiu su pavarde
let rezultatas = document.querySelector('#rezultatas');
rezultatas.appendChild(vardoVieta);
rezultatas.appendChild(pavardesVieta);

}
document
.querySelector('#sestaUzduotis>form')
.addEventListener('submit', vardoIrPavardesIsskyrimas)

//7) Pakoreguok šeštą pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis.