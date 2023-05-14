import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CardProvider } from './contexts/CardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <CardProvider>

<App />
 </CardProvider>
  
);