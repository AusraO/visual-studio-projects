


console.groupCollapsed('1 uzduotis')

//1) Sukurti funkcijas, kurios atliktų paprastus matematinius veiksmus su duotaisiais parametrais (du parametrai). (4 funkcijos) (optional 7 funkcijos)

function sudeti(namas1, namas2) {
    return namas1 + namas2
}
console.log(sudeti(10, 5))


function atimtis(buda1, buda2) {
    return buda1 - buda2
}
console.log(atimtis(10, 3))

function daugyba(tvartas1, tvartas2) {
    return tvartas1 * tvartas2
}
console.log(daugyba(5, 5))


function dalyba(kluonas1, kluonas2) {
    return kluonas1 / kluonas2
}
console.log(dalyba(20, 2))
console.groupEnd()




console.groupCollapsed('2 uzduotis')

//2) Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo pirmo iki paskutinio.



function manoFunkcija(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
let masyvas = [1, 2, 5, 10, 58, 79, 65, 82, 1, 22, 35, 4, 65, 85]
manoFunkcija(masyvas)


console.groupEnd()









console.groupCollapsed('3 uzduotis')

//3) Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo paskutinio iki pirmojo.


function rikiuosNuoGalo(isivaizduojamasMasyvas) {
    for (let i = isivaizduojamasMasyvas.length; i >= 0; i--) {
        console.log(isivaizduojamasMasyvas[i])
    }
}
let realusMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
rikiuosNuoGalo(realusMasyvas)


console.groupEnd()








console.groupCollapsed('4 uzduotis')

//4) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su string kintamaisiais))) abeceliškai ir ją išvestų į konsolę.

function rikiuosPagalAbecele(isivaizduojamasMasyvas2) {
    console.log(isivaizduojamasMasyvas2.sort((a, b) => a.localeCompare(b)))
}
let zodziuMasyvas = ['Namas', 'Audinys', 'Barakas', 'Citrina', 'Ozys', 'Kelias']
rikiuosPagalAbecele(zodziuMasyvas)


console.groupEnd()








console.groupCollapsed('5 uzduotis')
//5) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su number kintamaisiais))) nuo didžiausio iki mažiausio ir ją išvestų į konsolę.
function rikiuosNumerius(isivaizduojamasMasyvas3) {
    console.log(isivaizduojamasMasyvas3.sort((a, b) => b - a))
}
let skaiciuMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
rikiuosNumerius(skaiciuMasyvas);

console.groupEnd()









console.groupCollapsed('6 uzduotis')
//6) Sukurti funkciją, kuri į konsolę išvestų visus skaičius nuo pirmo duotojo parametro (imtinai) iki antrojo (imtinai). (paduodu 5,9 => grąžina 5,6,7,8,9)

function isvesSkaiciusTarpe(x, y) {
    for (let i = x; i <= y; i++) {
        console.log(i)
    }

}
isvesSkaiciusTarpe(1, 3)


console.groupEnd()




console.groupCollapsed('7 uzduotis')
//7) Sukurti funkciją, kuri į konsolę išvestų skaičius kas pirmąjį duotajį parametrą nuo antrojo duotojo parametro (imtinai) iki trečiojo duotojo parametro (imtinai). (paduodu 2,5,9 => grąžina 5,7,9)
function isvesSkaiciusImantriai(x, y, z) {
    for (let i = y; i <= z; i += x) {
        console.log(i)
    }

}
isvesSkaiciusImantriai(2, 5, 9)

console.groupEnd()



console.groupCollapsed('8 uzduotis')
//8) Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Petrauskas" => 16).
function grazinsZodziuIlgi(x, y) {
    let vardoilgis = x.length + y.length
    return console.log(vardoilgis)
}
grazinsZodziuIlgi('ausra', 'ausra')

console.groupEnd()





console.groupCollapsed('9 uzduotis')
//9) Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 
//Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.



function grazinaRaides(x) {
    let raidynas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Z'];
    return raidynas[x]
}
console.log(grazinaRaides(3))
grazinaRaides(3)
console.groupEnd()

console.groupCollapsed('10 uzduotis')

//10) Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. 
//Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.

function skaiciuojantiFunkcija(x, y, operator) {
    if (operator === 'sum') {
        let sudetis = x + y
        console.log(sudetis)
    }
    else if (operator === 'sub') {
        let atimtis = x - y
        console.log(atimtis)
    }
    else if (operator === 'multi') {
        let daugyba = x * y
        console.log(daugyba)
    }
    else if (operator === 'div') {
        let dalyba = x / y
        console.log(dalyba)
    }
}
console.log(skaiciuojantiFunkcija(10, 2, 'sub'))


console.groupEnd()

console.groupCollapsed('extra1 uzduotis')
//extra1) Sukurti funkciją, kuri atlieka Fizz Buzz testą nuo-iki duotųjų parametrų.
function fizzBuzz(nuo, iki) {
    console.log(nuo, iki);
    for (let i = nuo; i <= iki; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i, 'FizzBuzz');
        } else if (i % 3 === 0) {
            console.log(i, 'Fizz')
        } else if (i % 5 === 0) {
            console.log(i, 'Buzz')
        }
        else {
            console.log(i)
        }
    }
}
fizzBuzz(1, 106)

console.groupEnd()

console.groupCollapsed('extra2 uzduotis')
//extra2) Sukurti funkciją, kuri randa visus pirminius skaičius iki nurodyto parametro.
function pirminiaiSkaiciai(nuo, iki) {
    console.log(nuo, iki);
    for (let i = nuo; i <= iki; i++) { //sukuria loopa kuris visus skaicius paima nuo-iki
        let arPirminis = true;  //prielaida kad i'tasis yra pirminis skaicius
        for (let j = 2; j < i; j++) {  //pradeda skaiciuoti nuo 2, maziau nei i (visas jau sukurtas loopas), 
            if (i % j === 0) {
                arPirminis = false;
                break;
            }
        }
        if(arPirminis){
            console.log(i, ' yra pirminis skaicius')
        }
    }

}

pirminiaiSkaiciai(8, 30)
console.groupEnd()