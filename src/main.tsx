// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import WebApp from '@twa-dev/sdk';
import App from './App';

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>,
)
