import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import FusionCharts from 'fusioncharts/core';
// import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
//import "primereact/resources/themes/lara-dark-blue/theme.css";
// import "primereact/resources/themes/mdc-dark-deeppurple/theme.css";
import "primereact/resources/themes/lara-dark-purple/theme.css";
import "primereact/resources/primereact.min.css"; 
//import "fusioncharts/themes/fusioncharts.theme.fusion";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
