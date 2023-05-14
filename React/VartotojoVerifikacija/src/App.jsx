import './App.css';
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UsersContext from './contexts/UsersContext';
import AllPosts from './components/Pages/AllPosts';
import Header from './components/UI/Header';
import Login from './components/Pages/Login';
import UserPage from './components/Pages/UserPage';
import NewPost from './components/Pages/NewPost';
import ManageUsersPage from './components/Pages/ManageUsersPage';
import Register from './components/Pages/Register';

const App = () => {

  const { currentUser } = useContext(UsersContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userPage" element={
          currentUser ?
          <UserPage /> :
          <Navigate to="/login" />
        } />
        <Route path="/posts/newPost" element={
          currentUser ?
          <NewPost /> :
          <Navigate to="/login" />
        } />
        <Route path="/manageUsers" element={
          currentUser?.role === "admin" ?
          <ManageUsersPage /> :
          <Navigate to="/posts" />
        } />
      </Routes>
    </>
  );
}

export default App;