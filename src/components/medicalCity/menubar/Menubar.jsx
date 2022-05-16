import React from 'react'
import './menubarAdmin.css';
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
                    
                    <Link to='/PersonalInfo' className='link'>
                        <li class="nav__listitem">Thông tin cá nhân</li>
                    </Link>
                    <li class="nav__listitem">Quản lý tài khoản
                        <ul class="nav__listitemdrop">
                            <Link to='/user' className='link'>
                                <li><a href="#">Người dùng</a></li>
                            </Link>
                            <Link to='/staff' className='link'>
                                <li><a href="#">Nhân viên y tế</a></li>
                            </Link>
                            <Link to='/newUser' className='link'>
                                <li><a href="#">Thêm tài khoản</a></li>
                            </Link>

                        </ul>
                    </li>
                    <li class="nav__listitem">Quản lý dữ liệu
                        <ul class="nav__listitemdrop">
                            <Link to='/backup' className='link'>
                                <li><a href="#">Sao lưu dữ liệu</a></li>
                            </Link>
                            <Link to='/sync' className='link'>
                                <li><a href="#">Khôi phục dữ liệu</a></li>
                            </Link>
                        </ul>
                    </li>
                    
                    <li class="nav__listitem">Đăng xuất</li>

                </ul>
            </nav>
            <div className="profile_mini">
                <h3>Admin Tuan</h3>

                <img src="https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg" alt="" />

            </div>
        </div>
    )
}
