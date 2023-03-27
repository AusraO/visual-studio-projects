let zodinis = `tekstinio tipo kintamasis string'as`;
let skaicius = 5 + 1; //paprastas skaicius arba matematine israiska
let bulean = true //arba false
let masyvas = ['labas', 'ate', 'viso gero', 5];
let objektas = { vardas: 'Ausra', lytis: 'moteris' }


let vardas = 'Ausra'
let miestas = 'Vilnius'
console.log("labas " + vardas + ". Esi iš " + miestas + " miesto. Tai yra labai šaunus miestas!")
console.log(`labas ${vardas}. 
Esi iš ${miestas} miesto. Tai yra labai šaunus miestas!`) //backtick'as. Kintamieji ne su pliusais uzsiraso o su ${}.



let filmas1 = {
    pavadinimas: 'Rambo',
    leidimoMetai: 2008,
    rezisierius: 'Sylvester Stallone',
    filmoIlgis: '91 minutes',
    aktoriai: ['Sylvester Stallone', 'Jullie Benz', 'Paul Schulze', 'Matthew Marsden']


}

let filmas2 = {
    pavadinimas: 'Rambo',
    leidimoMetai: 2008,
    rezisierius: 'Sylvester Stallone',
    filmoIlgis: '91 minutes',
    aktoriai: [
        {
            aktorius: 'Sylvester Stallone',
            personazas: "Rambo"
        }, {
            aktorius: 'Jullie Benz',
            personazas: "Sarah Miller"
        }, {
            aktorius: 'Paul Schulze',
            personazas: "Michail Burnett"
        }, {
            aktorius: 'Matthew Marsden',
            personazas: "School Boy"
        }]


};

let filmai = [
    {
        pavadinimas: 'Rambo',
        leidimoMetai: 2008,
        rezisierius: 'Sylvester Stallone',
        filmoIlgis: '91 minutes',
        aktoriai: [
            {
                aktorius: 'Sylvester Stallone',
                personazas: "Rambo"
            }, {
                aktorius: 'Jullie Benz',
                personazas: "Sarah Miller"
            }, {
                aktorius: 'Paul Schulze',
                personazas: "Michail Burnett"
            }, {
                aktorius: 'Matthew Marsden',
                personazas: "School Boy"
            }]

    }, {
        pavadinimas: 'Pulp Fiction',
        leidimoMetai: 1994,
        rezisierius: 'Quentin Tarantino',
        filmoIlgis: '154 minutes',
        aktoriai: [
            {
                aktorius: 'John Travolta',
                personazas: "Vincent Vega"
            }, {
                aktorius: 'Samuel L Jackson',
                personazas: "Jules Winnfield"
            }, {
                aktorius: 'Uma Thurman',
                personazas: "Mia Wallace"
            }, {
                aktorius: 'Harvey Keitel',
                personazas: "Windston Wolfe"
            }]
    }
]
console.groupCollapsed('kada vyksta salygu veiksmai')

//salygos
let salygosSkaicius = 10;
if (5 > salygosSkaicius) {
    console.log('vyksta veiksmas jei ifas tiesa')
    console.log('veiksmu po kiekvienu ifu elseifu arba elsu gali buti ne vienas o daug')
}
else if (5 < salygosSkaicius) {
    console.log('vyksta veiksmas jei ifas netiesa o else ifas tiesa')
}
else {
    console.log('vyksta tik tokiu atveju jei visi ifai ir else ifai anksciau buvo false')
}

console.groupEnd();









console.groupCollapsed('nestinimas ir &&')

let didelisSkaicius = 46;
if (didelisSkaicius >= 100) {
    console.log('skaicius tikrai didelis')
    if (didelisSkaicius > 1000) {
        console.log('ziauriai didelis skaicius')
    }
    else {
        console.log('dar 1000 nesiekia skaicius')
    }
}
else if (didelisSkaicius < 100 && didelisSkaicius % 2 === 0) { //%2 rodo kad tikrintu ar dalinant is 2 yra liekana. Jei liekanos nera reiksia yra lyginis skaicius
    console.log('skaicius ne toks jau ir didelis, bet bent jau lyginis')
}
else if (didelisSkaicius < 100 && didelisSkaicius % 2 !== 0) {
    console.log('skaicius ne toks jau ir didelis ir net ne lyginis')
}
else {
    console.log('kokia cia nesamone parasei??? Cia net ne skaicius!')
}
console.groupEnd();



// LOOPS LOOPS LOOPS LOOPS LOOPS LOOPS LOOPS




console.groupCollapsed('for loop')

for (let i = 1; i <= 10; i++) {
    console.log(i, 'vykdom cikla')
}
console.groupEnd();


console.groupCollapsed('while loop')


let iteracija = 1;
while (iteracija <= 10) {
    console.log('while ciklas', iteracija);
    iteracija++
}
console.groupEnd();



console.groupCollapsed('do while loop')

do {
    console.log('sis veiksmas ivyko bent 1 syki')
} while (false)


console.groupEnd();




console.groupCollapsed('for of loop')

let masive = [5, 8, 9, 12, 58, 78, 2, 6, 14];
for (katinukas of masive) {
    console.log(katinukas);
}
console.groupEnd();



console.groupCollapsed('for in loop')

let object = { pirmas: 'labas', antras: 'as', trecias: 'krabas' };
for (let raktas in object) {
    console.log(objektas[raktas]);
}
console.groupEnd();





console.groupCollapsed('variable scope')

// let katinelis='ryzas';
// console.log(katinelis)
// {
//     console.log(katinelis);
//     let suniukas='taksas';
//     var suniukas2='biglis'
//     console.log(suniukas);
// }
// console.log(suniukas2) //var kintamieji visose vietose gali buti iskvieciamas o ne tik savo skliaustu ribose. (retai sito noresime)
// console.log(suniukas) //sito nepagauna nes suniukas parasyta su let, o ne su var.
console.groupEnd();


console.groupCollapsed('uzduotis')

let gyvunuMasyvas = ['suniukas', 'kate', 'begemotas', 'krokodilas', 'voras', 'uutas', 'zirafa', 'banginis', 'ozka', 'kiaune', 'papuga']


//ciklas spausdinantis visus gyvunus
for (let i = 0; i < gyvunuMasyvas.lenght; i++)// .lenght rodo kiek yra masyve elementu
{
    console.log(gyvunuMasyvas[i])
}
//ciklas spausdinantis visus gyvunus nuo galo

for (let i = gyvunuMasyvas.length - 1; i >= 0; i--) {
    console.log(gyvunuMasyvas[i]);
}

//ciklas spausdinantis kas trecia gyvuna nuo penkto iki galo


for (let i = 4; i < gyvunuMasyvas.length; i += 3) //i+=3 tas pats kas i=i+3
{ console.log(gyvunuMasyvas[i]) }


console.groupEnd();



console.groupCollapsed('uzduotis1')
//1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą

let metai = ['sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'spalis', 'lapkritis',];
for (let i = 0; i < metai.length; i++) {
    console.log(metai[i])
};


// //2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.

for (let i = 0; i < metai.length; i += 3) {
    console.log(metai[i])
};

//3) Parašyti ciklą, kuris išspausdintų kas antrą masyvo elementą nuo galo. ???????

for (let i = metai.length - 1; i >= 0; i -= 2) {
    console.log(metai[i])

};


//4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.



let skaiciuMasyvas = [10, 15, 68, 57, 84, 2, 19, 46, 77, 22];
// for (let i = 0; i <= skaiciuMasyvas.length; i++)
//     if (skaiciuMasyvas[i] > 54) {
//         console.log(skaiciuMasyvas[i])
//     }
   
//5) Parašyti ciklą, kuris iš masyvo išspausdintų tik lyginius/nelyginius skaičius. (2ciklai)


// for(let i=0; i<=skaiciuMasyvas.length; i++){
//     if(skaiciuMasyvas[i]%2===0){
//         console.log(skaiciuMasyvas[i])
//     }
// }

for(let i=0; i<skaiciuMasyvas.length; i++){
    if(skaiciuMasyvas[i]%2!==0){
        console.log(skaiciuMasyvas[i])
    }
}

console.groupEnd();