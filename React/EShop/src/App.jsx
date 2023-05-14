
import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  const [storeItems, setStoreItems] = useState([]) //pasiimu storeItems is jsono ir iskart jam sukuriu useState
  useEffect(() => {
    fetch('http://localhost:8080/StoreItems')
      .then(res => res.json())
      .then(data => setStoreItems(data))
  }, [])

  const [cart, setCart] = useState([])  ////pasiimu cart is jsono ir iskart jam sukuriu useState
  useEffect(() => {
    fetch('http://localhost:8080/cart')
      .then(res => res.json())
      .then(data => setCart(data))
  }, [])

  const storeItemsPriceSum = (cartElement) => { //kuriam f-ja kuri kaip parametra priima cartElement
    return storeItems.find(storeItem => storeItem.id === cartElement.id).price //suka per storeItems cikla find ir ziuri 
      //ar store items turi tokius pat id kaip
      //ir cartElement, kuris paduotas kaip argumentas. Jei turi - grazina visus bendrus, jei ne - grazina undefined. 
      * cartElement.quantity //Jei yra tokiu pat id, tai grazina ju kaina padauginta is parametro cartElement kiekio.
  }

  const cartChange = (itemId, change) => {  //kuriam konstanta kurioje bus funkcija kuri daro, kad paspaudus 
    //+- prisidetu/nusiimtu prekes nuo krepselio. Imam isivaizduojamas vertes.
    const element = cart.find(element => element.id === itemId)//sukuriam konstanta elementas kuris suka cikla per 
    //cart ir iesko ar cart elemento id atitinka prekes id.
    //elementas tikrina ar jo id yra toks pats kaip  prekes id.
    if (element) { //jeigu yra toks elementas, kurio element id toks pats kaip prekes id
     console.log(element)
      if (change === 1) { // ir jei pakitimas yra + 1 .Jei Change yra lygus 1(t.y. ivyko vienas paspaudimas),
        setCart(cart.map(element => element.id === itemId ? { ...element, quantity: element.quantity + 1 } : element))
        //tai issikviecia funkcija setCart kurioje sukame cikla per cart ir jei yra elementu kuriu id toks pats kaip itemId
        // parametro id
        //jei atitinka ju id, tai isskaidomas element objektas sukuriant nauja element objekta tik su prideta quantity reiksme, 
        //kuri yra elemento kiekis +1. Jei id nera lygus, tuomet grazina elementa nepakitusi. Cia nurodoma kaip turi elgtis setCart f-ja.
        fetch(`http://localhost:8080/Cart/${itemId}`, {  //kartu su siuo setCart f-jos igyvendinimu dar ir padaromas patch su jsonu, kad viskas issisaugotu jsone
          //toje vietoje kur turetu buti isivaizduojamos prekes id
          method: "PATCH",
          headers: {
            'Content-Type': 'Application/json'
          },
          body: JSON.stringify({ quantity: element.quantity + 1 }) //prideda toje vietoje quantity, kuris yra elemento quantity +1(t.y. pasipildo)
        });
      } else { //jei elemento id toks pats kaip prekes id ir
        if (element.quantity > 1) { //jei elemento kiekis yra daugiau uz 1 (t.y. jei tas koks skaicius atvaizduotas tarp mygtuku yra daugiau uz 1)
          setCart(cart.map(element => element.id === itemId ? { ...element, quantity: element.quantity - 1 } : element))// setCart tuomet mapina per visa cart 
          //ir tikrina ar elementu id yra toks pats kaip ir itemId. Jei taip, tai destrukturizuoja elementus ir pakeicia quantity, kuris yra elemento kiekis -1.
          //jei id ne toks pats grazina tiesiog nepakitusi elementa.
          fetch(`http://localhost:8080/Cart/${itemId}`, { //kartu  dar ir pridedama viskas i duomenu baze json su patch metodu i item.id vieta.
            method: "PATCH",
            headers: {
              'Content-Type': 'Application/json'
            },
            body: JSON.stringify({ quantity: element.quantity - 1 }) //pridedama, kad quantity yra elemento kiekis-1 (t.y. pamazeja)
          });
        } else { //jei elemento id toks pats kaip ir prekes id ir ne didesnis nei 1, bei nelygus 1, tai
          setCart(cart.filter(element => element.id !== itemId)) //setCart f-ja filtruoja per elementus ir jei elemento id ne toks pats kaip itemId 
          fetch(`http://localhost:8080/Cart/${itemId}`, { //tvarko json: su metodu delete istrina itemId.
            method: "DELETE"
          });
        }
      }
    } else { //jei nera tokio elemento, kurio id yra toks pats kaip ir prekes id
      if (change === 1) {  //ir kitimas yra lygus 1 (t.y. ivyko vienas paspaudimas)
        setCart([...cart, { id: itemId, quantity: 1 }]); //destrukturizuojame cart ir prie jo pridedame id, kuris bus itemId bei quantity, kuris bus 1.
        fetch(`http://localhost:8080/Cart`, { //ir taip pat tai pridedame i cart dali.
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: itemId, quantity: 1 })
        })
      } else {
        console.log('ignoruojame')
      }
    }
  }


  return (
    <>
      <Header
        storeItemsQuantity={cart.reduce((previous, current) => previous + current.quantity, 0)} //Skaiciuoja suma kiek ideta i krepseli. storeItemsQuantity apibreziame kaip cart per kuri sukame cikla 
        //reduce(su previous reiksme(akumuliatoriumi) ir keiciama reiksme (current))
        //is cart ima previous(pirmine reiksme, kuri cia yra nurodyta, kad bus 0 ir prie jos prideda current kurios reiksme yra quantity.
        totalPrice={cart.reduce((previous, current) => previous + storeItemsPriceSum(current), 0).toFixed(2)}//skaiciuoja bendra kaina. totalPrice apibreziam kaip cart per kuri sukame reduce cikla 
      //(su previous reiksme(akumuliatoriumi) ir keiciama reiksme (current))
      //prie pirmines reiksmes (kuri yra nurodyta kaip 0) pridedame current reiksme kuri graunama is auksciau aprasytos StoreItemsPriceSum funkcijos ir padarome,
      // kad ta reiksme butu su fiksuotais 2 skaiciais po kablelio.
      />
      <Main
        storeItems={storeItems}
        cart={cart}
        cartChange={cartChange}
      />
    </>
  );
}

export default App;
