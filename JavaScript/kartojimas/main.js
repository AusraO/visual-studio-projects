
//----------------------------------- kintamieji

let zodis="zodinis kintamasis";
let skaicius=654;
let loginis=false;
let masyvas=['tekstas', 54, true];
let objektas={
    raktinisZodis: 'reiksme',
    rytmetis: true,
    valanda: 9
}



//----------------------------------------salygos

console.log(!true); //false
console.log(5=="5"); //true
console.log(5==="5"); //false
console.log(false && true); //false
console.log(true &&true); //true
console.log(false || true); //true
console.log(false || false); //false

// if(salyga){
// }else if(salyga){
// }else{
// }


// switch(salygosReiksme){
//     case salyga: //veiksmai
//     break;
//     case salyga: //veiksmai
//     break;
//     default: //veiksmai
// }


// salyga ? tiesa :melas


// salyga? tiesa: kitaSalyga? tiesa :melas


// salyga &&tiesa


//----------------------------------------ciklai


// for(let iteracija=0; salygaSuIteracija; iteracija ++){
//     //veiksmai
// }

// while(tiesa){
//     //veiksmai
// }

// for(const elementas of masyvas){
//     //veiksmai su elementais
// }

// for(const raktinisZodis in objektas){
//     //veiksmai su objekto elementu
// }

// do{
//     //veiksmas
// }while(tiesa)


// //----------------------------------------------funkcijos

// function nameofFunction (par1, par2, par3){
//     //veiksmai su par1, par2, par3
// }
// nameofFunction(arg1, arg2, arg3)
// nameofFunction(arg5, arg2, arg7)



// const arrowFunction =(par1, par2) => {
//   //  veiksmai su par1, par2
// }



// //------------------------------------------------NODE\
// //selektinimas
// const rastasElementas =document.querySelector('selektorius')


// //event

// document.addEventListener('click', funkcija)

// //kurimas

// // const divas=document.createElement('div');
// // divas.setAttribute('id', 'idName');
// // divas.classList.add('pridedamKlase');
// // divas.append(kazkasKitas)


// //-------------------------------formu nuskaitymas

// document.querySelector('FORMOSSelektorius').addEventListener('submit',event =>{ 
//     event.preventDefault();
//     event.target.elements.inputName.value// keiciasi tik InputName
//  })


//  //------------------------------metodai

//  masyvas.forEach(masyvoElementas => {
//     console.log(masyvoElementas)
//  });


//  //-----------------------------------------destrukturizavimas
//  function ageAfter10Years({amzius, ...rest}){
//    return amzius+10
//  }
//  funcName({ vardas:"Ausra", pavarde: "Orsevskiene", amzius: 28});


//  //------------------------moduliai


// //  export default function vardas(){}
// //  import vardasKaipNori from './kazkur.js'

// // export{data1, data2, data3};
// // import{data1,data2,data3} from './kazkur.js'

// //-----------------------klases
// class KlasesVardas{
//     constructor(pros){
//         this.kaipVadinsiPropsKlasesViduje=props
//     }
//     render(){
//         //kazka darau su...
//         this.kaipVadinsiPropsKlasesViduje;
//     }
// }


// class Gyvunas{
//     constructor(vardas,kokuKiekis,spalva,veisle){
//         this.vardas=vardas;
//         this.kojuKiekis=kokuKiekis;
//         this.spalva=spalva;
//         this.veisle=veisle;
//     }
// }

// class Kate extends Gyvunas{
//     constructor(balsas, matoNakti, ...rest){
//         this.balsas=balsas;
//         this.super(rest)
//     }
//     }
// const gyvunas0=new Gyvunas ('Bobas', 2, 'oranzine', 'kengura')
// const gyvunas1=new Gyvunas ('miau','Buba', 4, 'oranzine', 'siamo')


// //---------------------------------session Storage

// window.sessionStorage.setItem('raktas'{
// })


// //--------------------------------------duomenu saugojimas atskirame faile -JSON


// JSON.stringify(objektas);//saugojimui
// JSON.parse(JSON_sintaksei)//paemimui



// //-------------------------------------------fetch

// fetch('URL').them(res =>res.json())
// .then(data =>{
//   //  veiksmai su data
// })

// fetch('URL',{
//     method: "POST",
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body: JSON.stringify(objektas)
// }).them(res =>res.json())
// .then(data =>{
//   //  data yra issiustas objektas, kazkaip galbut pakeistas API, sugrazintas.
// })

// fetch('URL/ID',{
//     method: "DELETE"
// }).then(res => res.json())
// .then(data =>{
//     //data gali buti kazkoks atsakymas is serverio ar pavyko ar nepavyko trinti nurodyta irasa
// })

// fetch('URL/ID'),{
//     method: "PUT",
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body: JSON.stringify({rytmetis:false})
// }.then(res=>res.json())
// .then(data=>{
//     //data gali buti pakites duomuo, pagal pateikta informacija
// })