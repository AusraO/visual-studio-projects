
import { Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Home from './components/Page/Home';
import { useContext } from 'react';
import DogsPage from './components/Page/DogsPage';
import Header from './components/UI/Header';
import UsersContext from './contexts/UsersContext';
import Login from './components/Page/Login';







const App = () => {
  const { currentUser } = useContext(UsersContext);
  return (
    <>
<Header/>

      <Routes>

        <Route index element={<Home />} />


        <Route path='/dogs'/>
          <Route  element={<DogsPage />} />
          {/* <Route path="/register" element={<Register />} /> */}
        <Route path='/login' element={<Login />} />
      
      
 
        
        <Route path='*' element={<h1>All the dogs think you are lost! </h1>} />
      </Routes>

    </>
  );
}

export default App;
