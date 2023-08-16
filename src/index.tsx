import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components'; // Import the createGlobalStyle utility
import App from './App';

// Include the Google Fonts link in the head of the document
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap');
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
