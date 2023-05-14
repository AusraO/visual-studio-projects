import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {

  const [prekes, setPrekes] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/prekes')
      .then(res => res.json())
      .then(data => setPrekes(data))
  }, []);
  const [krepselis, setKrepselis] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/krepselis')
      .then(res => res.json())
      .then(data => setKrepselis(data))
  }, []);



  const krepselioKitimas = (prekesId, kitimas) => {
    // console.log(prekesId, kitimas);
    const element = krepselis.find(el => el.id === prekesId);
    if(element){
      if(kitimas === 1){
        setKrepselis(krepselis.map(el => el.id === prekesId ? {...el, kiekis:el.kiekis+1} : el))
        fetch(`http://localhost:8080/krepselis/${prekesId}`,{
          method: "PATCH",
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({kiekis:element.kiekis+1})
        });
      } else {
        if(element.kiekis > 1){
          setKrepselis(krepselis.map(el => el.id === prekesId ? {...el, kiekis:el.kiekis-1} : el))
          fetch(`http://localhost:8080/krepselis/${prekesId}`,{
            method: "PATCH",
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify({kiekis:element.kiekis-1})
          });
        } else {
          setKrepselis(krepselis.filter(el => el.id !== prekesId));
          fetch(`http://localhost:8080/krepselis/${prekesId}`, {
            method: 'DELETE'
          });
        }
      }
    } else {
      if(kitimas === 1){
        setKrepselis([...krepselis, {id:prekesId, kiekis: 1}]);
        fetch(`http://localhost:8080/krepselis`, {
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({id:prekesId, kiekis: 1})
        });
      } else {
        console.log('ignoruojame');
      }
    }
  }





  const prekesSuma = (krepselioEl) => {
    return prekes.find(preke => preke.id === krepselioEl.id).kaina * krepselioEl.kiekis //prekes kaina padauginta is krepselio kiekio
  }



  return (
    <>
      <Header
        prekiuKiekis={krepselis.reduce((prev, curr) => prev + curr.kiekis, 0)}
        bendraKaina={(krepselis.reduce((prev, curr) => prev + prekesSuma(curr), 0).toFixed(2))}
      />
      <Main
        prekes={prekes}
        mazintiSkaiciu={mazintiSkaiciu}
        didintiSkaiciu={didintiSkaiciu}
        skaicius={skaicius}
        changeStatus={changeStatus}
        masyvas={masyvas}
        setMasyvas={setMasyvas}
        krepselis={krepselis}
        krepselioKitimas={krepselioKitimas}
      />
    </>
  );
}

export default App;
