

//function pavadinimas (parametrai){veiksmai}
//pavadinimas(parametrai); <----- kreipimasis i f-ja




// function pasisveikinimas(){

// console.log('hello world');
// }

// pasisveikinimas();





// function pasisveikinimas(vardas){

// console.log('Labas ' +vardas);
// }

// pasisveikinimas('Ausra');
// pasisveikinimas('Dovydai');
// pasisveikinimas('Esmile');



// function dauginti(number1, number2){
//     console.log(number1*number2)
// }

// dauginti (2, 20)



function dauginti(number1, number2) {
    return number1 * number2;
}
console.log(dauginti(5, 4))
let funkcijosAtsakymas = dauginti(2, 2) + 5
console.log(funkcijosAtsakymas)







//KREIPIMASIS I DOM


function keiciamDiva() {


    let divas = document.querySelector('#cantGetMe');
    console.log(divas)

    console.dir(divas); //norint atvaizduoti HTML elementa (node'a) su issamia informacija, naudojame ne console.log, o console.dir

    divas.style.fontSize = '50px';
    divas.style.color = 'red';
    divas.textContent += ', bet pakeistas'
}


document
    .querySelector('#pressMe')                ///geresnis budas kaip pakeisti html elementa
    .addEventListener('click', keiciamDiva)   //prideda ivyki



//METODAI



let zemynai = ['Europa', 'Azija', 'Afrika', 'Siaures Amerika', 'Pietu Amierika', 'Antarktida', 'Australija']

console.log(zemynai.pop()); //isima paskutini
console.log(zemynai.shift()); //isima pirmaji
console.log(zemynai.push('Europaa'));//prideda i gala
console.log(zemynai.unshift('Australiaa')); //prideda i pradzia

console.log(zemynai)
console.log(zemynai.reverse()) //apsuka duomenis


const lietuvybes = ['šalis', 'ąsotis', 'ėdalas', 'egle', 'stiprus', 'šakotis', 'žirafa', 'ąžuolas'];
const skaiciai = [1, 53, 27, 11, 4, 98, 65, 7, 885, 22, 32, 1, 55, 85, 21, 56, 16, 26, 5, 55];
console.log(skaiciai.sort((a, b) => a - b)) //rikiuoja didejancia tvarka
console.log(skaiciai.sort((a, b) => b - a)) //rikiuoja mazejancia tvarka



console.log(lietuvybes.sort((a, b) => a.localeCompare(b)))  //norint surikiuoti su lietuviskomis raidemis



console.log(lietuvybes.slice(5, 8)) //iskirps nuo 5 (imtinai) iki 8 masyvo elemento(neimtinai)

console.log(lietuvybes.splice(5, 3, "naujas", "dar"));  //nuo pirmo parametro (5) iskerpa nurodyta kieki elementu (3) ir kitus iklijuoja i ju vieta

console.log(lietuvybes.concat(zemynai)); //grazina sujungtus masyvus, nei vieno is ju nemutuoja(nekeicia)



//FUNKCIJOS SU MASYVAIS

function spausdinuMasyvus(masyvas) {
    let nenorimeModifikuoti = masyvas.slice()
    console.log(nenorimeModifikuoti)
    while (nenorimeModifikuoti.length) {
        console.log(nenorimeModifikuoti.shift())
    }
}


let skaiciuMasyvas = [5, 4, 15, 5, 8, 98, 5, 563, 66, 54, 88, 55, 15]
spausdinuMasyvus(skaiciuMasyvas)
spausdinuMasyvus(lietuvybes);
spausdinuMasyvus(zemynai);
spausdinuMasyvus(skaiciai)