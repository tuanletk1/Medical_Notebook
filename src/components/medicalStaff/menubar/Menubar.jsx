import React from 'react'
import './menubar.css';
import {Link, useHistory} from 'react-router-dom'
import logo from '../../../assets/images/MedicalNotebook.png';
import {useDispatch} from "react-redux";
import {logout} from "../../login/authSlice";


export default function Menubar() {
    const history = useHistory()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
        history.push('/')
    }

    return (
        <div className="group_menu">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__listlogo">
                        <img src={logo} alt="" />
                        {/* <h2>MEDICAL NOTEBOOK</h2> */}
                    </li>
                    <Link to='/' className='link'>
                        <li className="nav__listitem">Trang chủ</li>
                    </Link>
                    
                    <Link to='/InfoAccountStaff' className='link'>
                        <li className="nav__listitem">Thông tin cá nhân</li>
                    </Link>
                    <li className="nav__listitem">Đăng ký tiêm chủng
                        <ul className="nav__listitemdrop">
                            <Link to='/registervaccine' className='link'>
                                <li><a href="#">Danh sách đăng ký</a></li>
                            </Link>
                            <Link to='/listAfterVac' className='link'>
                                <li><a href="#">Danh sách sau tiêm chủng</a></li>
                            </Link>

                        </ul>
                    </li>
                    <li className="nav__listitem">Quản lý vắc-xin
                        <ul className="nav__listitemdrop">
                            <Link to='/addnewvaccine' className='link'>
                                <li><a href="#">Nhập vắc-xin</a></li>
                            </Link>
                            <Link to='/listvaccine' className='link'>
                                <li><a href="#">Danh sách Vắc Xin đã nhập</a></li>
                            </Link>
                        </ul>
                    </li>
                    <Link to='/ListHealthAfter' className='link'>
                        <li className="nav__listitem">Sức khoẻ sau tiêm</li>
                    </Link>
                    <li className="nav__listitem" onClick={logoutHandler}>Đăng xuất</li>

                </ul>
            </nav>
            <div className="profile_mini">
                <h5>Bệnh Viện Hoàn Mỹ</h5>

                <img src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-default-avatar-png-image_5407175.jpg" alt="" />

            </div>
        </div>
    )
}
