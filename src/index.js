import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/app.css';
import { AppProvider } from './contextAPI/context';
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('app')
);
