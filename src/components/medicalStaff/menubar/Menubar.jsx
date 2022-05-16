import React from 'react'
import './menubar.css';
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/MedicalNotebook.png';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Menubar() {
    return (
        <div className="group_menu">
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__listlogo">
                        <img src={logo} alt="" />
                        {/* <h2>MEDICAL NOTEBOOK</h2> */}
                    </li>
                    <Link to='/' className='link'>
                        <li class="nav__listitem">Trang chủ</li>
                    </Link>
                    
                    <Link to='/InfoAccountStaff' className='link'>
                        <li class="nav__listitem">Thông tin cá nhân</li>
                    </Link>
                    <li class="nav__listitem">Đăng ký tiêm chủng
                        <ul class="nav__listitemdrop">
                            <Link to='/registervaccine' className='link'>
                                <li><a href="#">Danh sách đăng ký</a></li>
                            </Link>
                            <Link to='/listAfterVac' className='link'>
                                <li><a href="#">Danh sách sau tiêm chủng</a></li>
                            </Link>

                        </ul>
                    </li>
                    <li class="nav__listitem">Quản lý vắc-xin
                        <ul class="nav__listitemdrop">
                            <Link to='/addnewvaccine' className='link'>
                                <li><a href="#">Nhập vắc-xin</a></li>
                            </Link>
                            <Link to='/listvaccine' className='link'>
                                <li><a href="#">Danh sách Vắc Xin đã nhập</a></li>
                            </Link>
                        </ul>
                    </li>
                    <Link to='/ListHealthAfter' className='link'>
                        <li class="nav__listitem">Sức khoẻ sau tiêm</li>
                    </Link>
                    <li class="nav__listitem">Đăng xuất</li>

                </ul>
            </nav>
            <div className="profile_mini">
                <h3>Bệnh Viện Hoàn Mỹ</h3>

                <img src="https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg" alt="" />

            </div>
        </div>
    )
}
