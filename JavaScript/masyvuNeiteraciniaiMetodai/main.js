// Užduotys:
//   Atlikite pateiktas užduotis nenaudodami iteracinių metodų.
//   '+' - sunkesnės užduotys (jas galima pradžioj praleisti)
//   1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.

let masyvas = ['labas', 'as', 'krabas']

function masToString(str) {
    str = masyvas.toString()
    console.log(str)
}





//   2+) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 0645234, grąžina 0-6-45234)

//   3) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)

let masyvas2=['sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis', 'liepa', 'rugpjutis'];

function masyvoApvertimas(masyvas){  //kuriu f-ja kuri apsuktu masyva
   
   
    let laikinas=[]
    for (let i=masyvas.length-1; i>=0; i--){  //suku cikla kad eitu nuo pirmo iki paskutinio elemento 
laikinas.push(masyvas[i]);
console.log(masyvas2[i])
    }
    return laikinas
}

console.log (masyvoApvertimas(masyvas2))



//   4+) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes ir grąžintų likusias (išvestų į konsolę). (paduodama masyvas=[1,4,5,6,4,8,4,5], funkcija: func(masyvas, 4,6,8), grąžina: [1,5,5]).


//   5) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.

let skaiciuMasyvas=[1,2,3,4,5]

function funkcijaDuodantiMinMaxSkaicius (isivaizduojamasMasyvas){
  minReiksme=Math.min(...isivaizduojamasMasyvas)
  maxReiksme=Math.max(...isivaizduojamasMasyvas)
  console.log(minReiksme , maxReiksme);
  
}
console.log(funkcijaDuodantiMinMaxSkaicius(skaiciuMasyvas))




//   6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę)
//   7+) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])
//   8) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į konsolę išspausdintų tik unikalius duomenis.
//   9+) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose.




//   10) Parašykite funkciją, kuri iš jai paduoto skaičių masyvo atrinktų n'tąjį didžiausią skaičių. (iš funkcija([12,54,1,65,78,91,45],3) grąžintų 65).


function fVardas(par1, par2){
    return par1 +par2;
}
console.log(fVardas(5,2))

// ---------------------------------------------
const masyvasNeFunkcijos=['a','b','c','d'];
function masyvasIString(masyvas){
    return masyvas.join('; ');
}
let fAtsakymas= masyvasIString(masyvasNeFunkcijos)
console.log(masyvasIString(masyvasNeFunkcijos))


//----------callback----------------------------
function rikiuotiSkaicius(sk1, sk2){
    return sk1-sk2;
}
const nerikiuotasMasyvas=[5,6,85,5,465,565,5,56,2,9,5,3,69,3,65,56]
let rikiuotasMasyvas=nerikiuotasMasyvas.sort(rikiuotiSkaicius);
console.log(rikiuotasMasyvas);

//------------arrow function -------------------------

const arrowFunkcija=(par1, par2)=>{
    return par1*par2;
}
let afAtsakymas=arrowFunkcija(5,6);
console.log(afAtsakymas)


//-------------bevardes funkcijos-----------------------

// (function (par1, par2){
//     return par1+'atlikus veiksmus'+par2;
// })

// ((par1, par2) =>{
//     return par1+'atlikus veiksmus'+par2;
// })

// ((par1, par2) =>par1+'atlikus veiksmus'+par2)


//-------------------Arrow function evente------------------------------
document.querySelector('button')
.addEventListener('click', event=>{
    console.log(event);
    event.target.innerHTML='paspaudei'
})





