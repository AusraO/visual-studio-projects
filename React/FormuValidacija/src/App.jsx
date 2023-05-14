import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<h1>Home</h1>}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;