import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { VehiclesContextProvider } from './contexts/VehicleContext';

ReactDOM.render(
  <VehiclesContextProvider>
    <App />
  </VehiclesContextProvider>,
  document.getElementById('root')
);

