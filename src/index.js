import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MedicalStaff from './components/medicalStaff/MedicalStaff'
import MedicalCity from './components/medicalCity/MedicalCity';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <MedicalCity /> */}
    <MedicalStaff/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
