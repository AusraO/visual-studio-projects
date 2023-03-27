// var kartu1 = `
// <h1 class="raudonasTekstas pavadinimoTekstas centruotasTekstas">
// Bandymas su innerHTML
// </h1>

// `;

// kartu1 = document.querySelector('#kartu1');

// kartu1.innerHTML += `

// <div class=' flex flex-wrap justify-center gap2'>
//     <div class='kortele1'>
//         <h3> Korteles pavadinimas </h3>
//         <img src="https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/325666624_2238990026272791_1752925427047283137_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=DFsv8xU3d-UAX96c16I&_nc_ht=scontent.fvno8-1.fna&oh=00_AfDFbHMYLjrBmSTRfn267n2HZZN3iqOfFZLACY3rXePmWA&oe=641DD9F5">
//         <p>
//         Korteles aprasymas bla bla bllaaaaaaaa fjseflkjselkjs

//         </p>
//     </div>
//         <div class='kortele1'>
//         <h3> Korteles pavadinimas </h3>
//         <img src="https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/325666624_2238990026272791_1752925427047283137_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=DFsv8xU3d-UAX96c16I&_nc_ht=scontent.fvno8-1.fna&oh=00_AfDFbHMYLjrBmSTRfn267n2HZZN3iqOfFZLACY3rXePmWA&oe=641DD9F5">
//         <p>
//         Korteles aprasymas bla bla bllaaaaaaaa fjseflkjselkjs

//          </p>
//     </div>
//     <div class='kortele1'>
//         <h3> Korteles pavadinimas </h3>
//         <img src="https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/325666624_2238990026272791_1752925427047283137_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=DFsv8xU3d-UAX96c16I&_nc_ht=scontent.fvno8-1.fna&oh=00_AfDFbHMYLjrBmSTRfn267n2HZZN3iqOfFZLACY3rXePmWA&oe=641DD9F5">
//         <p>
//         Korteles aprasymas bla bla bllaaaaaaaa fjseflkjselkjs

//         </p>
//     </div>
// </div>
// `;

// let visosKorteles=``;

// for(let i=0; i<3; i++){
//     visosKorteles+=`
//     <div class='kortele1'>
//     //         <h3> Korteles pavadinimas </h3>
//     //         <img src="https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/325666624_2238990026272791_1752925427047283137_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=DFsv8xU3d-UAX96c16I&_nc_ht=scontent.fvno8-1.fna&oh=00_AfDFbHMYLjrBmSTRfn267n2HZZN3iqOfFZLACY3rXePmWA&oe=641DD9F5">
//     //         <p>
//     //         Korteles aprasymas bla bla bllaaaaaaaa fjseflkjselkjs

//     //         </p>
//     //     </div>`
// }

// var visosKorteles = ''
// for (let i = 0; i < duomenys.length; i++) {
//     visosKorteles += `
//     <div class='kortele1'>
//     <h3>${duomenys[i].pavadinimas}</h3>
//     <img src='${duomenys[i].paveiksliukas}'>
//     <p>${duomenys[i].paragrafas}</p>
//     </div>
//     `;
// }

// kartu1.innerHTML += `
// <div class=' flex flex-wrap justify-center gap2'>
// ${visosKorteles}
// `

// console.log(duomenys);



//DOM elementu kurimas(geruoju budu)

const testZona = document.querySelector('#testZona');
let naujasDivas = document.createElement('div');
// naujasDivas.className=' kortele1';
naujasDivas.classList.add('kortele1');

let naujasHeading = document.createElement('h3');
let tekstas2 = document.createTextNode('pavadinimas');
naujasHeading.appendChild(tekstas2);

let naujasImage = document.createElement('img');
naujasImage.setAttribute('src', 'https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/325666624_2238990026272791_1752925427047283137_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=DFsv8xU3d-UAX96c16I&_nc_ht=scontent.fvno8-1.fna&oh=00_AfDFbHMYLjrBmSTRfn267n2HZZN3iqOfFZLACY3rXePmWA&oe=641DD9F5')
naujasImage.setAttribute('alt', 'kuprine')
let naujasPar = document.createElement('p');
let tekstas1 = document.createTextNode('tekstas kuris bus atvaizduojamas');



naujasPar.appendChild(tekstas1)

naujasDivas.append(naujasHeading, naujasImage, naujasPar);
testZona.appendChild(naujasDivas);












//kartu pratimas



const kartu2 = document.querySelector('#kartu2');   //sukuriam konstanta kuri paima is HTML id kartu2
let kartu2Heading = document.createElement('h1');   //sukuriam kartu2heading kuriame sukuriame elementa h1
kartu2Heading.classList.add('raudonasTekstas', 'didelisTekstas', 'centruotasTekstas')   //kartu2heading pridedam stilius is CSS
let kartu2Tekstas = document.createTextNode('Bandymas su document create'); //sukuriam kartu2Tekstas kuriame yra tekstas atvaizduojamas tinklapyje
kartu2Heading.appendChild(kartu2Tekstas)          //sujungiame kartu2heading su tekstu, t.y. h1 su jo tekstu


let divKonteineris = document.createElement('div');  //sukuriame divKonteineris kruiame sukuriame div'a
divKonteineris.classList.add('flex', 'flex-wrap', 'justify-center', 'gap2');  //priskiriame divKonteineris CSS stilius

for (let i = 0; i < duomenys.length; i++) {              //sukuriame cikla kuris sukti turi visus elementus is duomenys kuris yra konstanta is kito js failo
    let kortelesDiv = document.createElement('div'); //sukuriame kortelesDiv kuris turi div elementa
    kortelesDiv.classList.add('kortele1');         //kortelesDiv pridedame kortele1 stiliu is CSS
    let kortelesHeading = document.createElement('h3') //sukuriame kortelesHeading kuris turi viduje h3
    let kortelesPavadinimas = document.createTextNode(duomenys[i].pavadinimas); //sukuriame kortelesPavadinimas kuriame viduje bus tekstas is kito js pavadinimo dalies
    kortelesHeading.appendChild(kortelesPavadinimas);// kortelesHeading (h3) sujungiame su kortelesPavadinimas (tekstu)
    let kortelesImage = document.createElement('img');//sukuriame kortelesImage kuriame bus img
    kortelesImage.setAttribute('src', duomenys[i].paveiksliukas); //kortelesImage nustatome atributa src kuris yra is kito js failo paveiksliuko dalies
    kortelesImage.setAttribute('alt', duomenys[i].paveiksliukoAlt);//kortelesImage nustatome atributa alt kuris yra is kito js failo paveiksliukoAlt dalies
    let kortelesParagraph = document.createElement('p');//kuriame kortelesParagraph kuriame sukuriame p
    let kortelesTekstas = document.createTextNode(duomenys[i].paragrafas); //kurieame kortelesTekstas kuriame bus tekstas paimtas is kito js failo paragrafas dalies
    kortelesParagraph.appendChild(kortelesTekstas);  // kortelesParagraph (p) sujungiame su kortelesTekstas (tekstu)
    kortelesDiv.append(kortelesHeading, kortelesImage, kortelesParagraph);  //kortelesDiv visai sekcijai priskiriame kortelesHeading, kortelesImage ir kortelesParagraph
    divKonteineris.appendChild(kortelesDiv)         //divKonteineris (visa divo deze) sujungiame su kortelesDiv (kuriame yra visas korteles turinys)
}
kartu2.append(kartu2Heading, divKonteineris);        //kartu2 (visa dalis) pridedame header dali ir korteles




//PIRMA UZDUOTIS  PIRMA UZDUOTIS  PIRMA UZDUOTIS  PIRMA UZDUOTIS  PIRMA UZDUOTIS  PIRMA UZDUOTIS
//1) Naudodamiesi data[0] duomeninis atlikite šiuos veiksmus:
//1.1) JS'u sekcijoje sukurkite antraštę.
//1.2) JS'u sekciją papildykite paragrafu su tekstu.
//1.3) JS'u sekciją papildykite paveikslėliu.
//1.4 optional) JS'u sekciją stilizuokite priskirdami klases.



const pirmaUzd = document.querySelector('#pirmaUzd');

let deze = document.createElement('div');
deze.classList.add('flex', 'flex-wrap', 'justify-center', 'gap');
deze.classList.add('kortele1')

let dezesHeading = document.createElement('h3');
let h3tekstas = document.createTextNode(data[0].title);
dezesHeading.appendChild(h3tekstas);

let parag = document.createElement('p');
let paragTekstas = document.createTextNode(data[0].paragraph);
parag.appendChild(paragTekstas);

let paveiks = document.createElement('img');
paveiks.setAttribute('src', data[0].image);
deze.append(dezesHeading, parag, paveiks)
pirmaUzd.append(deze);


//ANTRA UZDUOTIS  ANTRA UZDUOTIS  ANTRA UZDUOTIS  ANTRA UZDUOTIS  ANTRA UZDUOTIS  ANTRA UZDUOTIS
//2) Naudodamiesi data[1] duomenimis atlikite šiuos veiksmus:
//	2.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.
//	2.2 optional) JS'u sekciją stilizuokite priskirdami klases.

const antraUzd = document.querySelector('#antraUzd');

let dezute = document.createElement('div');
dezute.classList.add('flex', 'flex-wrap', 'justify-center', 'gap');
dezute.classList.add('kortele1');


let antraste = document.createElement('h3');
let antrastesTekstas = document.createTextNode(data[1].title);
antraste.append(antrastesTekstas);

let paveiksleliuDezute = document.createElement('div')

for (let i = 0; i < data[1].images.length; i++) {

    paveiksleliuDezute.classList.add('flex', 'flex-wrap', 'justify-center', 'gap');

    let paveiksleliai = document.createElement('img');
    paveiksleliai.setAttribute('src', data[1].images[i]);
    // paveiksleliuDezute.classList.add('.kortele1>img')
    paveiksleliuDezute.append(paveiksleliai);

}
dezute.append(antraste, paveiksleliuDezute);
antraUzd.append(dezute);

// let a1
// { a1='abc'}
// console.log(a1)

//TRECIA UZDUOTIS TRECIA UZDUOTIS  TRECIA UZDUOTIS TRECIA UZDUOTIS  TRECIA UZDUOTIS TRECIA UZDUOTIS 
//3) Naudodamiesi data[2] duomenimis atlikite šiuos veiksmus:
//3.1) JS'u sekcijoje sukurkite antraštę.
//3.2) JS'u sekciją papildykite div'ais, kuriuose bus pavadinimai, paveiksliukai ir antraštės.

const treciaUzd = document.querySelector('#treciaUzd');
let box = document.createElement('div');

let head = document.createElement('h3');
let headText = document.createTextNode(data[2].title);
head.append(headText);

let boxName = document.createElement('h3');
// boxName.classList.add('didelisTekstas');
let boxPicture = document.createElement('div');
let boxText = document.createElement('p');

let kortelesdeze = document.createElement('div');

for (let i = 0; i < data[2].works.length; i++) {
   
    boxName = document.createTextNode(data[2].works[i].title)
  

    let picture = document.createElement('img');
    picture.setAttribute('src', data[2].works[i].image);
    boxPicture.append(picture);


    boxText = document.createTextNode(data[2].works[i].paragraph)
    kortelesdeze.append(boxName, boxPicture, boxText)

}

treciaUzd.append(head, kortelesdeze);




    //  //sukuriame kortelesDiv kuris turi div elementa
    //  kortelesDiv.classList.add('kortele1');         //kortelesDiv pridedame kortele1 stiliu is CSS
    //  let kortelesHeading = document.createElement('h3') //sukuriame kortelesHeading kuris turi viduje h3
    //  let kortelesPavadinimas = document.createTextNode(duomenys[i].pavadinimas); //sukuriame kortelesPavadinimas kuriame viduje bus tekstas is kito js pavadinimo dalies
    //  kortelesHeading.appendChild(kortelesPavadinimas);// kortelesHeading (h3) sujungiame su kortelesPavadinimas (tekstu)
    //  let kortelesImage = document.createElement('img');//sukuriame kortelesImage kuriame bus img
    //  kortelesImage.setAttribute('src', duomenys[i].paveiksliukas); //kortelesImage nustatome atributa src kuris yra is kito js failo paveiksliuko dalies
    //  kortelesImage.setAttribute('alt', duomenys[i].paveiksliukoAlt);//kortelesImage nustatome atributa alt kuris yra is kito js failo paveiksliukoAlt dalies
    //  let kortelesParagraph = document.createElement('p');//kuriame kortelesParagraph kuriame sukuriame p
    //  let kortelesTekstas = document.createTextNode(duomenys[i].paragrafas); //kurieame kortelesTekstas kuriame bus tekstas paimtas is kito js failo paragrafas dalies
    //  kortelesParagraph.appendChild(kortelesTekstas);  // kortelesParagraph (p) sujungiame su kortelesTekstas (tekstu)
    //  kortelesDiv.append(kortelesHeading, kortelesImage, kortelesParagraph);  //kortelesDiv visai sekcijai priskiriame kortelesHeading, kortelesImage ir kortelesParagraph
    //  divKonteineris.appendChild(kortelesDiv)         //divKonteineris (visa divo deze) sujungiame su kortelesDiv (kuriame yra visas korteles turinys)
 
 

    //6 uzduotis
    //sukuriame mygtuka kiekvienoje sekcijoje

    const allSections= document.querySelectorAll('section')
    console.log(allSections);
    for (let i=0; i<allSections.length ; i++){
        const rodytiSleptiMygtukas=document.createElement('button');
        const mygtukoTekstas=document.createTextNode('slepti');
        rodytiSleptiMygtukas.appendChild(rodytiSleptiMygtukas);
        rodytiSleptiMygtukas.classList.add('absolute', 'rodytiSleptiMygtukas')
        rodytiSleptiMygtukas.style.top='0'
        rodytiSleptiMygtukas.style.right='0'
rodytiSleptiMygtukas.addEventListener('click', rodytiSlepti)

        allSections[i].appendChild(rodytiSleptiMygtukas);
        allSections[i]. classList.add('relative')


    }
    function rodytiSlepti(event){
        console.log(event);
        let visiElementaiApartMygtuko =event.target.parentNode.querySelectorAll('*:not(button.rodytiSleptiMygtukas')
        if(event.target.innerHTML ==='slepti'){
            for(let i=0; i< visiElementaiApartMygtuko.length; i++){
                visiElementaiApartMygtuko[i].style.display='none'
            }
            event,target.innerHTML==='rodyti';
        }else if(event.target.innerHTML==='rodyti'){
            for(let i=0; i<visiElementaiApartMygtuko.length; i++){
                visiElementaiApartMygtuko[i].style.display='';

            }
            event.target.innerHTML='slepti';

        }else{
            console.log('ivyko klaida')
        }
      
    }