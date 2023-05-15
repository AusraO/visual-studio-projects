import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DogsProvider } from './contexts/DogsContext';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './contexts/UsersContext';
import  { NewUsersProvider } from './contexts/NewUserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NewUsersProvider>
    <UsersProvider>
 <DogsProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </DogsProvider>
    </UsersProvider>
    </NewUsersProvider>
);