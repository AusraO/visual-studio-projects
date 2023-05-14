import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PostsProvider } from './contexts/PostsContext';
import { UsersProvider } from './contexts/UsersContext';
import { NewUsersProvider } from './contexts/NewUserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NewUsersProvider>
  <UsersProvider>
    <PostsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostsProvider>
  </UsersProvider>
  </NewUsersProvider>
);