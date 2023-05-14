
import './App.css';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Page/Home';
import CardInfo from './components/Page/CardInfo';
import Login from './components/Page/Login';
import { useContext } from 'react';
import UsersContext from './contexts/UsersContext';
import UserPage from './components/Page/UserPage';
import ManageUsersPage from './components/Page/ManageUsersPage';
import Register from './components/Page/Register';
import AddNewMovie from './components/Page/AddNewMovie';
const App = () => {

  const { currentUser } = useContext(UsersContext);

  return (
    <>
      <Header />

      <Routes>
      <Route path='/movies'>
           <Route index element={<Home />} />
          <Route path=':id' element={<CardInfo />} />
          
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/userPage" element={
          currentUser ?
          <UserPage /> :
          <Navigate to="/login" />
        } />
        <Route path="/newMovie" element={
          currentUser ?.role ==="admin" ?
          <AddNewMovie /> :
          <Navigate to="/login" />
        } />
        <Route path="/manageUsers" element={
          currentUser?.role === "admin" ?
          <ManageUsersPage /> :
          <Navigate to="/posts" />
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
