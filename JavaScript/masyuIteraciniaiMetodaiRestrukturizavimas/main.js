

masyvas = ['a', 'b', 'c', 'd', 'a', 'c', 'e']


//---------------------ForEach-------------------------------------------

//------------paprastas for---------------
console.groupCollapsed('paparastas for')
for (let i = 0; i < masyvas.length; i++) {
    console.log(masyvas[i]);

}
console.groupEnd();
//------------------ForEach----------------------
console.groupCollapsed('forEach')
masyvas.forEach((elementas, i) => {
    console.log(i, elementas);
});
console.groupEnd();



//------------------filtravimas su paprastu for-------
console.groupCollapsed('filtravimas su paprastu for')
let masyvasBeAFor = []
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] !== 'a') {
        masyvasBeAFor.push(masyvas[i])
    }
}
console.log(masyvasBeAFor)



console.groupEnd();




//-----------------------------Filter----------------
console.groupCollapsed('filter')
let masyvasBeaAFilter =
    masyvas.filter((element) => {  //filtruoja kiekviena elementa
        if (element !== 'a') {   // jei elemento reiksme ne a
            return element    //grazina elementa
        }
    })
console.groupEnd();



//--------------------for mutuotas masyvas--------
console.groupCollapsed('for mutuotas masyvas')
let mutuotassuFor = [];
for (let i = 0; i < masyvas.length; i++) {
    mutuotassuFor.push(':)' + masyvas[i])
}

console.groupEnd();


//-------------------------------------map--------------------
console.groupCollapsed('map')

let mutuotasSuMap = masyvas.map((elementas) => {
    return ':)' + elementas
})
console.log(mutuotasSuMap)

console.groupEnd();




//--------------------------for reduce be initial---------------
console.groupCollapsed('for reduce be initial')
let reduceForBe = '';
for (let i = 0; i < masyvas.length; i++) {
    reduceForBe += masyvas[i];
    console.log(reduceForBe)
}
console.groupEnd();

//--------------------------for reduce su initial---------------
console.groupCollapsed('for reduce be initial')
let reduceForSu = 'pradine reiksme:';
for (let i = 0; i < masyvas.length; i++) {
    reduceForSu += masyvas[i];
    console.log(reduceForSu)
}

console.groupEnd();



//-------------------------- reduce be initial---------------
console.groupCollapsed('reduce be initial')
let reduceBe = masyvas.reduce((acc, curr) => {
    return acc + curr;
});

console.log(reduceBe)

console.groupEnd();

//--------------------------reduce su initial---------------
console.groupCollapsed('for reduce be initial')
let reduceSu = masyvas.reduce((acc, curr) => {
    return acc + curr;
}, 'pradine reiksme:');

console.log(reduceSu)

console.groupEnd();


//--------------------------some---------------
console.groupCollapsed('some')
let someAts = masyvas.some((letter) => {
    return letter === letter.toUpperCase();
});

console.log('ar bent viena raide yra didzioji?', someAts)

console.groupEnd();



//--------------------------every---------------
console.groupCollapsed('every')
let everyAts = masyvas.every((letter) => {
    return letter === letter.toUpperCase();
});

console.log('ar visos raides didziosios?', everyAts)

console.groupEnd();


//condition---------------------------
console.groupCollapsed('conditions')
let amzius = 26
//--------------------------if---------------
console.groupCollapsed('if')
if (amzius >= 18) {
    console.log('esi pilnametis')
}
else {
    console.log('neesi pilnametis')
}

console.groupEnd();
//----------------------ternary-----------------------

console.groupCollapsed('ternary')
amzius >= 18 ? console.log('esi pilnametis') : console.log('neesi pilnametis')




console.groupEnd();


//---------------logical END----------------------



console.groupCollapsed('logical END')

amzius >= 18 && console.log('esi pilnametis')



console.groupEnd();

//---------------ternary chaining----------------------



console.groupCollapsed('ternary chaining')

amzius < 18
    ? console.log('nesi pilnametis') //jei atitinki salyga neesi pilnametis
    : amzius > 65     //nauja salyga viduje
        ? console.log('esi pensininkas') //jei atitinki salyga esi pensininkas
        : console.log('esi pilnametis')    //jei neatitinki salygos esi pilnametis


console.groupEnd();
console.groupEnd();


//--------------destrukturizavimas----------------------
console.groupCollapsed('destrukturizavimas')
let masyvasDes=['labas', undefined, 'krabas', 5 , 'sdg']





//---------------masyvas be destrukturizavimo------------
console.groupCollapsed('masyvas be destrukturizavimo')
let el0=masyvasDes[0]
let el1=masyvasDes[1]? masyvasDes[1]: 'kokia norime reiksme'
let el2=masyvasDes[2] 
let elMas=masyvasDes.slice(3)
console.log(el0, el1, el2, elMas)
console.groupEnd();
//-----------masyvo destrukturizavimas---------

console.groupCollapsed(' masyvo destrukturizavimas')

let [em0, em1='kokia norime reiksme', em2, ...emMas]=masyvasDes
console.log(em0, em1, em2, emMas)

console.groupEnd();

//-------------------------objekto destrukturizavimas-----------------
console.groupCollapsed(' objekto destrukturizavimas')
let objektasDes={
    vardas:'Ausra',
    amzius2: 28,
    gyvenamojiVieta:{
        miestas:'Vilnius', 
        salis: 'Lietuva'
    } ,
    plaukuSpalva:'ruda',
    vedes: 'taip'
}
//-----Obektas be destrukturizavimo------------------
console.groupCollapsed(' objekto destrukturizavimas')
let vardasBe=objektasDes.vardas;
let amziusBe=objektasDes.amzius2;
let salisBe=objektasDes.gyvenamojiVieta.salis
console.log(vardasBe, amziusBe, salisBe)
console.groupEnd();

//---------objekto destrukturizavimas--------
console.groupCollapsed(' objekto destrukturizavimas')
let {vardas, amzius2:metai, gyvenamojiVieta:{salis}, vairuotojoTeises='neturi', ...rest}= objektasDes;
console.log(vardas, metai, salis, vairuotojoTeises, rest)
console.groupEnd();
//---------funkcijos parametru destrukturizavimas--------
console.groupCollapsed('funkcijos parametru destrukturizavimas')
function sudetis(sk1, sk2,...rest){
    return sk1+sk2+rest.reduce((acc, curr)=>acc+curr, 0)
}
console.log(sudetis(4,5,1))
console.groupEnd();




//-----------------------sukeitimas vietomis dvieju kintamuju------------

console.groupCollapsed('sukeitimas vietomis dvieju kintamuju')
let a='labas';
let b='krabas';
[a,b]=[b,a]
console.log(a,b)
console.groupEnd();

console.groupEnd();