
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/UI/Header';
import Home from './components/Page/Home';
import DogsPage from './components/Page/DogsPage';
import DogInfo from './components/Page/DogInfo';
import Footer from '../../RouterPraktika/src/components/UI/Footer';
import AddNewDog from './components/Page/AddNewDog';




const App = () => {
  return (
    <>
      <Header />

      <Routes>

        <Route index element={<Home />} />


        <Route path='/dogs'>
          <Route index element={<DogsPage />} />
          <Route path='newDog' element={<AddNewDog/>}/>
          <Route path=':id' element={<DogInfo />} />
        </Route>
        
        <Route path='*' element={<h1>All the dogs think you are lost! </h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
