import React from 'react'
import "./header.css"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../../../assets/images/logo_medical.png';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logoMedical">
                  <img src={logo} alt="" />
                </span>
            </div>
            <div className="topRight">
                <div className="phoneNumber">
                  <LocalPhoneIcon/>
                  <span>1900 6789 - 0905445345</span>
                </div>
                <div className="email">
                <MailIcon/>
                <span>medicalnotebook@email.com</span>
                </div>
                <img src="" alt="" className="topAvatar" />
            </div>
            
        </div>
        </div>
  )
}
