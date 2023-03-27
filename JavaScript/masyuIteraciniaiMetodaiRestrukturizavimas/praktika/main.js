//Iteracinių masyvų metodų užduotys:
// 1) Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).

const cars = ["BMW", "VW", "Audi"]

cars.forEach((elementas) => {
    console.log(elementas)
})

//2) Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

cars.forEach((i, elementas) => {
    console.log(i, elementas)
})

// 3) Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). 
//Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija 
//(pvz. "peTras" => "Petras").

let manoVardai = ['DovyDas', 'esMiLe', 'aUsRa'];

let mutuotasVardo = manoVardai.map((elementas) => {
    return naujasVardai = elementas.charAt(0).toUpperCase() + elementas.slice(1).toLowerCase()

})

console.log(mutuotasVardo)





//4) Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

drauguAmzius = [2, 30, 28, 24, 33, 3, 18];


let amzius= drauguAmzius.filter(metai => metai>=18)
 console.log(amzius)


//5) Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

let lietuvosMiestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'plunge'];

const rastiMiestai = lietuvosMiestai.find(miestas => miestas.startsWith('K'));
console.log(rastiMiestai);


//6) Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

let someMiestai = lietuvosMiestai.some((miestass) => {
    return miestass=== miestass.toLowerCase();

});
console.log('ar yra bent vienas miestas is mazosios raides?' + someMiestai)

//  7) Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda iš mažosios, bet ar visi iš didžiosios.

let everyMiestai = lietuvosMiestai.every((mies) => {
    return mies === mies.toLowerCase();
});
console.log('ar visi miestai is didziosios raides? ' + everyMiestai)

//Destruktūrizavimas:
// 1) Naudodami destructuring priskirkite 2 kintamiesiems 2 masyvo reikšmes, 
//iš kurių 1'oji būtų 3'oji masyvo reikšmė, o 2'oji būtų likusios masyvo reikšmės.

let kazkoksMasyvas = ['pirmadienis', 'antradienis', 'treciadienis', 'ketvirtadienis', 'penktadienis', 'sestadienis', 'sekmadienis'];

let [one = three, ...rest] = kazkoksMasyvas
console.log(one, rest)


//2) Naudodami destructuring priskirkite 4 kintamiesiems 4 objekto reikšmes, iš kurių 1'oji būtų pakeistu pavadinimu,
// 2'oji turėtų default reikšmę, 3'oji būtų iš viduje nestinto objekto, 4'oji būtų iš viduje nestinto objekto su pakeistu pavadinimu.
let zmogus = {
    vardas: 'Kaunas',
    pavarde: 'Kauninis',
    pravarde: 'Kauniukas',
    adresas: {
        gatve: 'Kauno gatve',
        miestas: 'Kaunas'
    }
}
let { vardas:pirmasVardas, pavarde = "Vilninis", adresas: { gatve, miestas:gimtasisMiestas } } = zmogus
console.log(pirmasVardas, pavarde, gatve, gimtasisMiestas)

//3) Naudodami destructuring priskirkite 1 kintamajam visas masyvo reikšmes išskyrus pirmas 3.

let masyvas = ['labas', 'as', 'krabas', 'siandien', 'penktadienis', 'pagaliau']

let [viens, du, trys, ...kiti] = masyvas
let paskutiniai = kiti
console.log(paskutiniai);

//4) Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.
let pirmas = 'pagaliau';
let antras = 'penktadienis';

[pirmas, antras] = [antras, pirmas]
console.log(pirmas, antras);


//ForEach, Filter, Reduce ir Map:
//1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. 
//( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}])
const Hesburger = [
    { id: 0, name1: "Burgeris", inStock: true, primeCost: 0.3, cost: 1 },
    { id: 1, name1: "Burgeris su suriu", inStock: true, primeCost: 0.3, cost: 1.20 },
    { id: 2, name1: "Salotos", inStock: false, primeCost: 0.3, cost: 2 },
    { id: 3, name1: "Sultys", inStock: true, primeCost: 0.3, cost: 5 },
    { id: 4, name1: "Arbata", inStock: true, primeCost: 0.3, cost: 1.25 },
    { id: 5, name1: "bulvytes fri", inStock: true, primeCost: 0.3, cost: 1 },
    { id: 6, name1: "Burgerio mega kompleksas", inStock: true, primeCost: 0.3, cost: 20 },
    { id: 7, name1: "Burgerio kompleksas", inStock: true, primeCost: 0.3, cost: 11 },
    { id: 8, name1: "Riesutai", inStock: false, primeCost: 0.3, cost: 1.5 },
    { id: 9, name1: "Jogurtas", inStock: true, primeCost: 0.3, cost: 1.3 },
    { id: 10, name1: "Ledai", inStock: false, primeCost: 0.3, cost: 7 }
]


//2) Naudojant forEach - išvesti masyvą į konsolę.

Hesburger.forEach((food) => {
    console.log(food)
})

//3) Naudojant forEach - išvesti tik masyvo vardus ir kainas į konsolę.


Hesburger.forEach((food1) => {
    console.log(food1.name1, food1.cost)
}
)

//4) Išfiltruoti (for{if{}}) tuos masyvo elementus, kurie yra inStock (inStock yra true)
// ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje 
//(nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).
let inStockItems = []
Hesburger.forEach((maistas) => {
    if (maistas.inStock === true) {
        inStockItems.push(maistas);
        console.log(maistas)
        return maistas
    }

}
)

console.log(inStockItems)



//4.1) Naudojant map ir 4'tos užduoties masyvą - sukurti naują masyvą, kuriame būtų name ir suskaičiuotas bei išsaugotas profit
// (cost-primeCost) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).


// function apskaiciuojaProfit(kaina, pradineKaina) {      //tas pats tik su funkcija map'as
//     let uzdarbis = [];
//     uzdarbis = kaina - pradineKaina;
//     return uzdarbis;
// }
// // console.log(apskaiciuojaProfit(7, 5));


// let profit=inStockItems.map (function(meniuElementas){
//     return meniuElementas= apskaiciuojaProfit (meniuElementas.cost, meniuElementas.primeCost)})
// console.log(profit)


let profit = inStockItems.map(elementas => elementas.cost-elementas.primeCost);
console.log(profit)

//4.2) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje 
//(nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (galima sukurti kelis užsakymus);

const Hesburger2 = [
    { id: 0, name1: "Burgeris", inStock: true, primeCost: 0.3, cost: 1, uzsakyta: 5},
    { id: 1, name1: "Burgeris su suriu", inStock: true, primeCost: 0.3, cost: 1.20, uzsakyta: 15 },   //ka cia reikejo daryti?
    { id: 2, name1: "Salotos", inStock: false, primeCost: 0.3, cost: 2 , uzsakyta: 4},
    { id: 3, name1: "Sultys", inStock: true, primeCost: 0.3, cost: 5, uzsakyta: 6},
    { id: 4, name1: "Arbata", inStock: true, primeCost: 0.3, cost: 1.25 , uzsakyta: 1},
    { id: 5, name1: "bulvytes fri", inStock: true, primeCost: 0.3, cost: 1 , uzsakyta: 2},
    { id: 6, name1: "Burgerio mega kompleksas", inStock: true, primeCost: 0.3, cost: 20, uzsakyta: 5 },
    { id: 7, name1: "Burgerio kompleksas", inStock: true, primeCost: 0.3, cost: 11, uzsakyta: 3 },
    { id: 8, name1: "Riesutai", inStock: false, primeCost: 0.3, cost: 1.5 , uzsakyta: 0},
    { id: 9, name1: "Jogurtas", inStock: true, primeCost: 0.3, cost: 1.3 , uzsakyta: 7},
    { id: 10, name1: "Ledai", inStock: false, primeCost: 0.3, cost: 7 , uzsakyta: 0}
]

//4.3) Suskaičiuoti kiek pelno suteiks 4.2 masyvo užsakymas ir tai atvaizduoti konsolėje 
//(nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (arba užsakymai, jei 4.2 dalyje sukūrėte keletą užsakymų)

let kiekKainuos= Hesburger2.map(menuItem => menuItem.cost*menuItem.uzsakyta)
console.log(kiekKainuos)

//4.4) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta)
// ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje 
//(nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).

// let uzsakymas =Hesburger2.map (menuItem=> )
//???????????????????????

// 5) Išfiltruoti tuos masyvo (1'ojo) elementus, kurių "id" yra didesnis negu 4 ir jo kaina yra didesnė nei 2, bet mažesnė nei 10.

let atfiltruoti= Hesburger.filter(menuItems=> menuItems.id>4 && menuItems.cost>2 && menuItems.cost<10);
console.log(atfiltruoti);


//6) Naudojant map - sukurti nerikiuotą sąrašą(<ul>) su masyvo elementų vardais ir kainomis kaip sąrašo elementais(<li>).

const sarasas = document.querySelector('#sarasas'); 
let ulai = document.createElement('ul');
function sukuriaLi (kazkas){

}



let liai=document.createElement('li');
let liTekstas = document.createTextNode(Hesburger[0].name1);
liai.appendChild(liTekstas)
ulai.appendChild(liai)
sarasas.appendChild(ulai);

// let sarasasNaujas=Hesburger.map(menuItem=>)




//kaip paimt imput ir padaryt ji i object

// const uzsakymas=[
//     {
//         pavadinimas: 'kebabas lekst',
//         kiekis: 5
//     }
//     {
//         pavadinimas: 'kebabas lekst',
//         kiekis: 3
//     }
// ]

// let cekis=uzsakymas.map(uzsakymoDalis => {
//     console.log(uzsakymoDalis)
//     let menuItemIndex=meniu.findIndex(menuItem => {
//         return uzsakymoDalis.pavadinimas===menuItem.pavadinimas
//     })
//     console.log( meniu[menuItemIndex].kaina);
//     return{
//         pavadinimas: uzsakymoDalis.pavadinimas,
//         kiekis: uzsakymoDalis.kiekis,
//         kaina: uzsakymoDalis.kiekis*meniu[menuItemIndex].kaina
//     }
// })
// cekis.bendra=cekis.reduce((bendras, dabar)=>bendras+dabar.kaina,0);
// console.log(cekis)