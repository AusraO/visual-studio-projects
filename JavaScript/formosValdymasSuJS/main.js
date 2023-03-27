function vardoPavardesIlgis(vardas, pavarde) {
    return vardas.trim().length + pavarde.trim().length; //.trim() panaikina tarpelius nuo pradzios ir nuo galo
}
function vardoIrPavardesIlgioFunkcija(event) {
    event.preventDefault()  //apsaugo, kad tinklapis nepersikrautu kai ivedami duomenys. visada rasyti
    console.log(event)
    // console.dir(event.target[0].value) nelabai geras variantas
    // console.dir(event.target[1].value)

    // console.dir(document.querySelector('#vardas').value); irgi siaip sau variantas
    // console.dir(document.querySelector('#pavarde').value)

    console.dir(event.target.elements.vardas.value); //vardas susije su HTML name dalimi, kas joje parasyta
    console.dir(event.target.elements.pavarde.value);  //padaro, kad inputas butu matomas konsoleje. su siuo keliu konsoleje galima nueiti iki rezultato to kas ivesta

    let ilgiuSuma = vardoPavardesIlgis(event.target.elements.vardas.value, event.target.elements.pavarde.value)
    console.log(ilgiuSuma);

    document.querySelector('#pirmosFormosAts>span').textContent = ilgiuSuma; //kreipiasi i html'o spana. textcontent - kad tekstas prilyginamas tam kas gauta is f-jos

}



document
    .querySelector('#pirmaForma >form')
    .addEventListener('submit', vardoIrPavardesIlgioFunkcija); //submit - kokia forma pateikia, pvz mouse over ir t.t.. suristas su html input type=submit. jei buttonas vistiek submit reikia

















function sudetiesFormosFunkcija(event) {
    event.preventDefault();
    console.log(event);
    let pirmasDomuo = event.target.elements.pirmasisSudetiesDemuo.valueAsNumber;  //valueAsNumber isvercia tekstine informacija i numeri. jei tokiu budu nepavyksta, galima bandyti value+1 rasyti
    let antrasDomuo = event.target.elements.antrasisSudetiesDemuo.valueAsNumber;
    console.log(pirmasDomuo, antrasDomuo)
    document.querySelector('#sudetiesAts').textContent = pirmasDomuo + antrasDomuo
}
document
    .querySelector('form#sudetiesForma')
    .addEventListener('submit', sudetiesFormosFunkcija)






//UZDUOTYS   UZDUOTYS  UZDUOTYS   UZDUOTYS  UZDUOTYS   UZDUOTYS  UZDUOTYS   UZDUOTYS  UZDUOTYS   UZDUOTYS  UZDUOTYS   UZDUOTYS  UZDUOTYS   UZDUOTYS  



//1) Sukurti 4-7 formas HTML'e, kuriose galima būtų įvesti du skaičius ir būtų išvedama tų skaičių: sudėtis, atimtis, daugyba, dalyba, laipsnio kėlimas, šaknies traukimas, liekanos radimas.


function atimtiesFormosFunkcija(event) {
    event.preventDefault(); //neleidzia persikraut
    let pirmasAtimtiesDomuo = event.target.elements.isKoAtimam.valueAsNumber; //surisam su HTML
    let antrasAtimtiesDomuo = event.target.elements.kaAtimam.valueAsNumber;
    document.querySelector('#atimtiesAts').textContent = pirmasAtimtiesDomuo - antrasAtimtiesDomuo   //paimam tuscia HTML spana kuriame idedam veiksma reikalinga
}
document
    .querySelector('#atimtiesForma')  //nurodo kurioj HTML vietoj imam duomenis
    .addEventListener('submit', atimtiesFormosFunkcija)  //po submito, kad igyvendintu aprasyta funkcija


function daugybosFunkcija(event) {
    event.preventDefault();
    let pirmasDauginamasis = event.target.elements.kaDauginam1.valueAsNumber;
    let antrasDauginamasis = event.target.elements.kaDauginam2.valueAsNumber;
    document.querySelector("#daugybosAts").textContent = pirmasDauginamasis * antrasDauginamasis
}
document
    .querySelector('#daugybosForma')
    .addEventListener('submit', daugybosFunkcija)






function dalybosFunkcija(event) {
    event.preventDefault()
    let pirmasDalinamas = event.target.elements.kaDalinam.valueAsNumber;
    let antrasDalinamas = event.target.elements.isKoDalinam.valueAsNumber;
    document.querySelector('#dalybosAts').textContent = pirmasDalinamas / antrasDalinamas
}
document
    .querySelector('#dalybosForma')
    .addEventListener('submit', dalybosFunkcija)


// function kelimoLaipsniuFja(event){
//     event.preventDefault();
//     let skaicius=event.target.elements.kaKeliamLaipsniu.valueAsNumber;
//     let skaiciausLaipsnis=event.target.elements.kokiuLaipsniuKeliam.valueAsNumber;
//     document.querySelector('kelimoLaipsniuAts').textContent= skaicius**skaiciausLaipsnis    //  ????????
// }
// document
// .querySelector('#kelimoLaipsniuForma')
// .addEventListener('submit', kelimoLaipsniuFja)




//2) Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išveda ją h1 elemente. 
//Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60.
function kainaKaina(amziausIvestis) {
    let kaina = ''
    if (amziausIvestis < 16) {
        console.log("3 eurai")
        kaina = "3 eurai"
    }
    else if (amziausIvestis < 60 && amziausIvestis > 16) {

        console.log("6 eurai")
        kaina = "6 eurai"
    }
    else {
        console.log("4.02 euro")
        kaina = "4.02 euro"
    }
    return kaina
}
function bilietoRadimoFunkcija(event) {
    event.preventDefault();
    let amziausIvestis = event.target.elements.amzius.valueAsNumber;
    document.querySelector('#kokiaKaina').textContent = kainaKaina(amziausIvestis)

}

document
    .querySelector('#bilietuForma')
    .addEventListener('submit', bilietoRadimoFunkcija)




//3) Kai kuriose šalyse reikia eiti į kariuomenę, jei tau tarp 18 ir 30 metų ir jei neturi kriminalinio įrašo.
// Sukurti programą, kuri su input + checkBox pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente). 
//Hint: pasirinkite su querySelector tik pažymėtą checkBox input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.
function tinkamumasKariuomenei(kiekMetu, arTeistas) {
    let reikes = ''
    if (kiekMetu >= 18 && kiekMetu <= 30 && arTeistas === false) {  //ar teistas galima rasyti !arTeistas ir bus tas pats!!!
        console.log('i kariuomene jums reiks')
        reikes = 'i kariuomene jums reiks'
    }
    else {
        console.log('amzius netinkamas kariuomenei ir/arba turite teistuma')
        reikes = 'amzius netinkamas kariuomenei ir/arba turite teistuma'
    }
    return reikes
}
function arReiksIKariuomeneFunkcija(event) {
    event.preventDefault();
    let kiekMetu = event.target.elements.amzius1.valueAsNumber

    let teistumas = event.target.elements.arTeistas.checked   // su checkboxais zymisi .checked, o ne .value
    document.querySelector('#arReikesIKariuomene').textContent = tinkamumasKariuomenei(kiekMetu, teistumas)
}
document
    .querySelector('#kariuomenesForma')
    .addEventListener('submit', arReiksIKariuomeneFunkcija)




//4) Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). 
//O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). 
//Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
// Pvz: [16] => "Jūsų bonusas: 100 eurų".


function bonusoApskaiciavimas(ivestisKiekDirba) {
    let ismokes = ''
    if (ivestisKiekDirba < 10) {
        console.log('Jusu bonusas: 50EUR')
        ismokes = 'Jusu bonusas: 50EUR'
    }
    else if (ivestisKiekDirba >= 10 && ivestisKiekDirba < 20) {
        console.log('Jusu bonusas: 100EUR')
        ismokes = 'Jusu bonusas: 100EUR'
    }
    else {
        console.log('Jusu bonusas: 200EUR')
        ismokes = 'Jusu bonusas: 200EUR'
    }
    return ismokes
}
function bonusoFunkcija(event) {
    event.preventDefault();
    let kiekMetuDirba = event.target.elements.stazas.valueAsNumber;
    document.querySelector('#bonusas').textContent = bonusoApskaiciavimas(kiekMetuDirba)
}

document
    .querySelector('#bonusuForma')
    .addEventListener('submit', bonusoFunkcija)


//5) Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma).
// Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji 
//(angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). 
//Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja.
// Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

function metuApskaiciavimas(ivestisMetu) {
    let rezultatas = ''
    if (ivestisMetu % 4 != 0) {
        rezultatas = 'Sie metai nera keliamijei'
    }
    else if (ivestisMetu % 4 === 0 && ivestisMetu % 100 !== 0) {
        rezultatas = 'Sie metai yra keliamieji'
    }
    return rezultatas
}
function metuapskaiciavimoFunkcija(event) {
    event.preventDefault();
    let keliamiMetai = event.target.elements.metai.valueAsNumber;
    document.querySelector('#arSieMetaiKeliamieji').textContent = metuApskaiciavimas(keliamiMetai)
}
document
    .querySelector('#keliamuMetuSkaiciuokle')
    .addEventListener('submit', metuapskaiciavimoFunkcija)




//6) Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.


function laipsniuFunkcija(event) {
    event.preventDefault();
    let celsijausIvestis = event.target.elements.celsijus.valueAsNumber;
    document.querySelector('#kiekBusFarenheitu').textContent = (celsijausIvestis * 1.8) + 32
}
document
    .querySelector('#cToFSkaiciuokle')
    .addEventListener('submit', laipsniuFunkcija)




//7) Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". 
//Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga.
// Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

function arUzregistruos(emailIvestis, arPazymetasCheck) {
    let uzregistruos = ''
    if (emailIvestis.trim().length >= 10 && arPazymetasCheck === true) {
        uzregistruos = `El. pastas ${emailIvestis}" sekmingai uzregistruotas`
    }
    else {
        uzregistruos = "registracija nesekminga"
    }
    return uzregistruos
}

function registracijosFunkcija(event) {
    event.preventDefault();
    let arYraPastas = event.target.elements.adresas.value;
    let arYraSutikimas = event.target.elements.arSutinka.checked;
    document.querySelector('#arPastasUzregistruotas').textContent = arUzregistruos(arYraPastas, arYraSutikimas)
}
document
    .querySelector('#elPastoForma')
    .addEventListener('submit', registracijosFunkcija)


 
