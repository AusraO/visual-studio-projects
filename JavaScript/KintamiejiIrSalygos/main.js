let objektoBandymas = {
    vardas: "Ausra",
    pavarde: "Orsevskiene",
    amzius: 28,
    vedes: true
};

let masyvoBandymas = ["dviratis", "masina", "lektuvas", "laivas"];




let asmenys = [

    {
        vardas: "Jurga",
        pavarde: "Pupeniene",
        amzius: 57,
        vedes: true,
        pomegiai: ['zvejyba', 'mezgimas'],
        gyvenamojiVieta: {
            planeta: 'Zeme',
            zemynas: 'Europa',
            salis: 'Lietuva',
            miestas: 'Vilnius',
            gatve: 'Kauno g.',
            namas: '33',
            butas: '50'
        }
    },
    {
        vardas: "Andrius",
        pavarde: "Rukauskas",
        amzius: 22,
        vedes: false,
        pomegiai: ['zvejyba', 'sportas']
    }
];


let zmogus1 = {
    vardas: "Ausra",
    pavarde: "Orsevskiene",
    amzius: 28,
    vedes: true
};
console.log(zmogus1);

console.log(zmogus1.pavarde);

zmogus1.amzius += 1;
console.log(zmogus1.amzius);
zmogus1.plaukuSpalva = 'blondine';
console.log(zmogus1);
console.groupCollapsed('masyvas paprastas');





let transportoPriemones = ["dviratis", "masina", "lektuvas", "laivas"];
console.log(transportoPriemones);
console.log(transportoPriemones[1]);
transportoPriemones.push('rieduciai');
console.log(transportoPriemones);
console.groupEnd();

console.groupCollapsed('masyve objektas');
console.log(asmenys);
console.log(asmenys[1].vardas);
console.log(asmenys[0].amzius);
console.log(asmenys[0].gyvenamojiVieta.miestas);
console.log(asmenys[0].pomegiai[1]);

asmenys[0].gyvenamojiVieta.namas = '15';
console.log(asmenys[0].gyvenamojiVieta.namas);
console.groupEnd();


console.groupCollapsed('masyvas masyve');

let masyvasMasyve = ['labas', 5, true, 'haha', 10, [5, 'hihi', 7, 10, false], false];
console.log(masyvasMasyve);
console.log(masyvasMasyve[3])
console.log(masyvasMasyve[5][1])
console.groupEnd();



console.groupCollapsed('loginiai operatoriai');
console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); //false
console.log(8 > 2 || 7 < 10); //true


console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false
console.log(8 > 2 && 7 < 10); //true
console.log(5 > 7 && 7 < 10); //false

console.groupEnd();

console.groupCollapsed('Salygos');


let amzius = 16
if (amzius >= 18) { //kodas nebuvo ivykdytas nes buvo false
    console.log('pilnametis')
}

let amzius1 = 19
if (amzius1 >= 18) {
    console.log('pilnametis')
};


if (amzius >= 18) {
    console.log('pilnametis')
} else {
    console.log('nepilnametis') //kodas ivykdytas nes nurodyta ka turi daryti false atveju
}


let amzius2 = 5
if (amzius2 >= 18 && amzius2 < 65) {
    console.log('pilnametis')
} else if (amzius2 >= 65) {
    console.log('pensijinio amziaus')
}
else if (amzius2 < 18) {
    console.log('nepilnametis')

    if (amzius2 >= 7) {
        console.log('mokyklinukas')
    }
    else {
        console.log('darzelinukas')
    };
}
else {
    console.log('klaida')
}
console.groupEnd();

console.groupCollapsed('truthy/falsy');
if (1) { //true. Jei butu 0 butu false
    console.log('tiesa')
}
else {
    console.log('melas')
}
if ([]) { //true. 
    console.log('tiesa')
}
else {
    console.log('melas')
}
if ('') { //true. Jei butu kas nors viduje stringo - false 
    console.log('tiesa')
}
else {
    console.log('melas')
}
console.groupEnd();














console.groupCollapsed('1 uzduotis');
//Susikurti konteinerius ir juos užpildyti reikšmėmis (bent po 1 kiekvieno tipo).
//Objektas bent 6 ilgio. {}
let darbas = {
    aukletojosPadejeja: 0.5,
    aukletoja: 3,
    psichologe: 4,
    issilavinimas: true,
    dabarDirba: false,
    dabarMokosi: 'programavimas'
}
//Masyvas bent 6 ilgio.
let orai = ["sauleta", "salta", 5, true, "15mps", "slidu"];
//Masyvas bent 4 ilgio, kurio viduje būtų kitas masyvas bent 4 ilgio.
let orai2 = ['temperatura', 'vejoKryptis', 'debesuotumas', ['lietus', 'lijundra', 'sniegas', 'krusa']];

//Masyvas bent 4 ilgio, kurio viduje būtų objektas bent 4 ilgio.
let filmai = ['BeautyAndTheBeast', 'HarryPotter', 'Titanic', { aktorius: 'Tom Cruise', metai: 2007, studija: 'disney', arGavoApdovanojimu: true }];

//Objektas bent 4 ilgio, kurio viduje būtų masyvas bent 4 ilgio.
let issilavinimas = {
    mokyklinis: ['pradinis', 'pagrindinis', 'vidurinis'],
    universitetinis: 'magistro',
    profesinis: 'aukstos pridetines vertes'
}
//Objektas bent 4 ilgio, kurio viduje būtų objektas bent 4 ilgio.
let TVseries = {

    Friends: {
        metai: 1994,
        apdovanojimai: true,
        seasons: 10,
        episodes: 236
    },
    Orville: {
        metai: 2017,
        apdovanojimai: true,
        seasons: 3,
        episodes: 36
    }
}
console.groupEnd();


console.groupCollapsed('2 uzduotis');
//Bent po 2 reikšmes iš 1.1 ir 1.2 konteinerių.
console.log(orai[4]);
console.log(orai[3]);
console.log(orai2[1]);
console.log(orai2[3][2]);

//Bent po 3 reikšmes iš 1.3-1.6 konteinerių su bent 1 reikšme esančia konteinerio konteineryje.
console.log(filmai[1]);
console.log(filmai[3].aktorius);
console.log(filmai[3].arGavoApdovanojimu);

console.log(issilavinimas.mokyklinis[2]);
console.log(issilavinimas.universitetinis);
console.log(issilavinimas.profesinis);

console.log(TVseries.Friends.metai);
console.log(TVseries.Orville.apdovanojimai);
console.log(TVseries.Orville.seasons);
console.groupEnd();

console.groupCollapsed('3 uzduotis');
//Parašyti sąlygą, kuri tikrintų ar turi vairuotojo teises.

let teises = true;
if (teises) {//paduodu bul kuris gali but tik true arba false todel nereikia lyginti
    console.log('turi teises')
}
else {
    console.log('neturi teisiu')
};

//3.1) Papildyti užduoties sąlygą, kad tikrintų ar vairuotojas turintis vairuotojo teises - turi automobilį. (nesting)

let teises2 = true;
let automobilis = false;
if (teises2) {   //paduodu bul kuris gali but tik true arba false todel nereikia lyginti
    console.log('turi teises')

    if (automobilis) {
        console.log('turi teises ir automobili')
    }
    else {
        console.log('turi teises, bet neturi automobilio')
    }
}

else {
    console.log('neturi teisiu')
};



//3.2) Papildyti užduoties sąlygą, kad tikrintų ar vairuotojas turintis vairuotojo teises - turi automobilį ir yra blaivas. (AND)

let teises3 = true;
let automobilis3 = false;
let blaivas = false;
if (teises3 && automobilis3 && blaivas) {
    console.log('turi teises, automobili ir yra blaivas')

}
else {
    console.log('Bauda:')
    if (!teises3) {
        console.log('neturi teisiu')
    }
    if (!automobilis3) {
        console.log('neturi automobilio')
    }
    if (!blaivas) {
        console.log('neblaivus')
    }
};

console.groupEnd();
console.groupCollapsed('4 uzduotis');
//2) Padaryti taip, kad puslapis su tavimi pasisveikintų, patikrintų kokiame mieste gyveni ir išvestų su tai susijusią info (pasakytų ką nors gražaus apie tavo miestą(galima tobulinti išskiriant keletą miestų, o ne išvedant tą pačią žinutę apie visus)).

//1) let - kurti kintamuosius (objektus arba masyvus)
//optional) prompt - gauti tavo amžių (+ extra jei tobulini).
//2) alert/console.log - grąžintų atsakymus.
//3) if/elseIf/else - kas be ko...

let miestas= 'Kaunas'
if (miestas=='Vilnius'){
    console.log('Sveikas, vartotojau! ' +miestas+' yra labai grazus miestas')
}
else if(miestas=='Kaunas'){
    console.log('Labas, Zmogau! ' +miestas+ ' yra labai zavus miestas')
}
else{
    console.log('Kodel gyveni tokioj skylej???')
}




console.groupEnd();
console.groupCollapsed('5 uzduotis');

//3) Parašyti if'ą, kuris tikrintų kokia tavo lytis (tikrinimas turi vykti iš object kintamojo (object kintamasis turi turėti bent 4 kintamuosiuos savo viduje)).
//Naudoti:
//1) let - kurti kintamuosius (objektą/us)
//optional) prompt - vartotojas priskirtų objektui reikšmes
//2) alert/console.log - grąžintų atsakymus.
//3) if/elseIf/else - kas be ko...

let pilietis={
    vardas: 'Azuolas',
    pavarde: 'Azuolavicius',
    metai: 29,
    lytis: 'vyras'
}
if (pilietis.lytis==='vyras'){
    console.log(pilietis.vardas+' ' +'yra vyras')
}
else{
    console.log(pilietis.vardas+ ' ' +'yra moteris')
}

console.groupEnd();

console.groupCollapsed('6 uzduotis');
//4) Parašyti if'ą, kuris tikrintų koks dabar mėnuo ir grąžintų koks yra metų laikas
//Naudoti:
//1) let - kurti kintamuosius.
//optional) prompt - gauti mėnesį / metų laiką.
//2) alert/console.log - grąžinti galimus atsakymus.
//3) if/elseIf/else - kas be ko...
//4 extra) Google kaip veikia/atrodo/naudojamas switch'as ir užduotį atlikti su switch vietoj if.

let menesis= window.prompt('koks dabar menesis?');
if(menesis=='sausis'|| menesis=='gruodis' ||menesis== 'vasaris'){
    console.log('Dabar yra ziema')
}
else if (menesis=='kovas'|| menesis=='balandis' ||menesis== 'geguze'){
    console.log('Dabar yra pavasaris')
}
else if (menesis=='birzelis'|| menesis=='liepa' ||menesis== 'rugpjutis'){
    console.log('Dabar yra vasara')
}
else if (menesis=='rugsejis'||menesis== 'spalis' || menesis=='lapkritis'){
    console.log('Dabar yra ruduo')
}
else{
    console.log('error')
}

console.groupEnd();