//8) Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. 
//Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :)

function vardoKartojimas(event) {
    event.preventDefault();
    let vardas = event.target.elements.vardas.value;
    let kartojimas = event.target.elements.kartojimas.valueAsNumber;
    console.log(vardas, kartojimas)
    let sarasas = document.querySelector('#ciaKuriame');
    sarasas.innerHTML = ''
    for (let i = 0; i < kartojimas; i++) {
        sarasas.innerHTML += `<li>${vardas}</li>`
    }

}



document
    .querySelector('#task8>form')
    .addEventListener('submit', vardoKartojimas)




//9) Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. 
//Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį pagal įvestą input. 
//Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).
//Pvz:
//Įvesta: 2
//Rezultatas:
//*
//**

function kurtiTrikampi(event) {
    event.preventDefault()

    let trikampioDydis = event.target.elements.stacDydis.valueAsNumber;

    let trikampioDivas = document.querySelector('#trikampisCia')
    trikampioDivas.innerHTML = ''    //resetina kai ivedi i outputa nauja reiksme
    let zvaigzdes = ''
    for (let i = 0; i < trikampioDydis; i++) {
        zvaigzdes += '*';
        trikampioDivas.innerHTML += `<p>${zvaigzdes}</p>`;
    }
}
document
    .querySelector('#task9>form')
    .addEventListener('submit', kurtiTrikampi)