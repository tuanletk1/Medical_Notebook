import React from 'react'
import './menubar.css';
import { Link } from 'react-router-dom'
// import UserList from './../page/userList/'
import LogoutIcon from '@mui/icons-material/Logout';

export default function Menubar() {
    return (
        <div class="menu">
            <nav>
                <ul>
                    <Link to='/' className='link'>
                        <li><a title="Trang chủ">Trang chủ</a></li>
                    </Link>
                    <li><a href="#">Thông tin cá nhân</a>
                        <ul>
                            {/* <Link to='/PersonalInfo'> */}
                                <li><a href="#">Thông tin cá nhân</a></li>
                            {/* </Link> */}
                            <li><a href="#">Mật khẩu</a></li>
                        </ul>

                    </li>
                    <li><a href="#">Danh sách</a>
                        <ul>
                            <Link to='/user' className='link'>
                                <li><a href="#">Nhân viên y tế</a></li>
                            </Link>

                            <li><a href="#">Người dùng</a></li>

                        </ul>
                    </li>
                    <li><a href="#">Khai báo y tế</a></li>
                </ul>
                <div className="logoutBtn">
                    <li><a href="">Đăng xuất</a></li>    
                 </div>
            </nav>

        </div>
    )
}
