import React from 'react'
import './menubar.css';
import { Link } from 'react-router-dom'
// import UserList from './../page/userList/'
import LogoutIcon from '@mui/icons-material/Logout';

export default function Menubar() {
    return (
        <div class="menu">
            <nav>
                <ul className='menu_parent'>
                    <Link to='/' className='link'>
                        <li><a title="Trang chủ">Trang chủ</a></li>
                    </Link>
                    <li><a href="#">Thông tin cá nhân</a>
                        <ul className='menu_child'>
                            <Link to='/PersonalInfo'  className='link'>
                                <li><a href="#">Thông tin cá nhân</a></li>
                            </Link>
                            <li><a href="#">Mật khẩu</a></li>
                        </ul>

                    </li>
                    <li><a href="#">Quản lý tài khoản</a>
                        <ul className='menu_child'>
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
                    <li><a href="#">Quản lý dữ liệu</a>
                        <ul className='menu_child'>
                            <Link to='/backup' className='link'>
                                <li><a href="#">Sao lưu dữ liệu</a></li>
                            </Link>

                            <Link to='/sync' className='link'>
                                <li><a href="#">Khôi phục dữ liệu</a></li>
                            </Link>
                        </ul>
                    </li>
                    
                </ul>
                <div className="logoutBtn">
                    <Link to='./login' className='link'> 
                    <li><a href="">Đăng xuất</a></li>    
                    </Link>                  
                 </div>
            </nav>

        </div>
    )
}
