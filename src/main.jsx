import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { OffersProvider } from './context/OffersContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OffersProvider>
      <App />
    </OffersProvider>
  </React.StrictMode>
);
