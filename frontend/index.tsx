import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'leaflet/dist/leaflet.css';
import './index.css';

const pendingRedirect = sessionStorage.getItem('aaag_redirect');
if (pendingRedirect) {
  sessionStorage.removeItem('aaag_redirect');
  window.history.replaceState(null, '', pendingRedirect);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
