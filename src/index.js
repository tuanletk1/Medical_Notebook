import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MedicalStaff from './components/medicalStaff/MedicalStaff'
import MedicalCity from './components/medicalCity/MedicalCity';
import reportWebVitals from './reportWebVitals';
import MedicalUser from './components/medicalUser/MedicalUser'

ReactDOM.render(
  <React.StrictMode>
    {/* <MedicalUser /> */}
    <MedicalStaff/>
    {/* <MedicalCity /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
