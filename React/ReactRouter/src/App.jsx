import Hero from './components/pages/Hero';
import './App.css';
import Header from './components/Organism/Header';
import Footer from './components/Organism/Footer';
import PrekesCards from './components/pages/PrekesCards';
import CountriesCards from './components/pages/CountriesCards';
import { Routes, Route } from 'react-router-dom';
import Counter from './components/pages/Counter';
const App = () => {
  return (
    <>


      <Header />

      <Routes>
        <Route
          path='/'
          element={<Hero />}
        />
        <Route
          path='/prekes'
          element={<PrekesCards/>}
        />
        <Route
          path='/countries'                                     //galima kokius norim pavadinimus daryt
          element={ <CountriesCards />}
        />
          <Route
          path='/counter'                                     //galima kokius norim pavadinimus daryt
          element={ <Counter />}
        />
       

      </Routes>



      <Footer />



    </>
  );
}

export default App;
