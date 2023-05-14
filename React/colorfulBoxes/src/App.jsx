
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';



const App = () => {

  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/boxes')
      .then(res => res.json())
      .then(data => setBoxes(data))
  }, []);

  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/colors')
      .then(res => res.json())
      .then(data => setColors(data))
  }, []);




  // const boxChange = (itemId, className) => {
  //   // console.log(itemId)
  //   const sameId = colors.find((color) => color.id === itemId)
  //   // // console.log(sameId)

  //   // //     const check= colors.map(color => console.log(color.id))
  //   // //     console.log(check)
  //   if (sameId) {
  //     console.log(sameId)
  //     if (className.className === "boxInside") {
  //       setColors(colors.map(element => element.id === itemId ? { ...element, className: "boxAfterFirstChange" } : element))
  //       fetch(`http://localhost:8080/colors/${itemId}`, {
  //         method: "PATCH",
  //         headers: {
  //           'Content-Type': 'Application/json'
  //         },
  //         body: JSON.stringify({ className: sameId.className === "boxAfterFirstChange" })
  //       })

  //     }
  //   }
  // }



  return (
    <>
      <Header />
      <div className="defaultBox">
        <Main
          boxes={boxes}
          colors={colors}
          // boxChange={boxChange}

        />
      </div>
    </>
  );
}

export default App;
