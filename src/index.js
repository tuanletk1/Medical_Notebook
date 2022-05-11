import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MedicalStaff from './components/medicalStaff/MedicalStaff'
import MedicalCity from './components/medicalCity/MedicalCity';
import Login from './components/login/Login';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <MedicalCity /> */}
    <MedicalStaff/>
    {/* <Login/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
