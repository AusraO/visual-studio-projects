import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CardsProvider } from './contexts/CardsContext';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './contexts/UsersContext';
import { NewUsersProvider } from './contexts/NewUsersContext';
import { ThemeProvider} from './contexts/ThemeContext';
import { NewMovieProvider } from './contexts/NewMovieContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <NewMovieProvider>
   <ThemeProvider>
   <NewUsersProvider>
      <UsersProvider>
         <CardsProvider>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </CardsProvider>
      </UsersProvider>
   </NewUsersProvider>
   </ThemeProvider>
   </NewMovieProvider>
);