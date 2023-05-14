import { useState} from 'react';
import './App.css';
import Heading from './components/Heading';
const App = () => {
  // let skaicius=10
  // const skaicius=useState(10)[0]
  //const skaiciausKeitimas=useState(10)[1]

  const [skaicius, setSkaicius] = useState(10)

  const mazintiSkaiciu = () => {
    if(skaicius>0){
      setSkaicius(skaicius - 1)
    }

    
  }
  const didinsSkaiciu = () => {
    setSkaicius(skaicius + 1)
    console.log(skaicius)
  }


  // let arPrisijunges = false
  const[arPrisijunges, setArPrisijunges]=useState(true)
  const atsijungti = () => {
    setArPrisijunges(false)
    console.log(atsijungti)
  }


  return (
    <>
      <header>
        {
          arPrisijunges ?
            <button onClick={() => atsijungti()}>Log Out</button> :
            <>
              <button>Sign In</button>
            </>
        }

        <button>Log In</button>
      </header>


      <div>
        <p>
          Mano skaicius yra {skaicius}
        </p>
        <button onClick={() => mazintiSkaiciu()}>Mazinti skaiciu</button>
        <button onClick={() => didinsSkaiciu()}>Didinti skaiciu</button>

      </div>
      <Heading
      size={2}
      text={skaicius}
      />

    </>
  );
}

export default App;
