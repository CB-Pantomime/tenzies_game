import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This variable is referencing the react dom w/ the createRoot method
// which is saying go to the document and get element by ID and that element is 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
// at that variable 'root', use the render method and render our App component
// React.StrictMode is wrapped around it
// this helps highlight possible issues with our application. StrictMode does not render any visible UI. 
// It activates additional checks and warnings for its descendants (our <App />).
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);


