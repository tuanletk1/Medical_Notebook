import React from 'react'
import ReactDOM from 'react-dom'
import './ListHealthAfter.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import BallotIcon from '@mui/icons-material/Ballot';
import SearchIcon from '@mui/icons-material/Search';


export default function RegisterVac() {
    const dummyData = [
        { id: 1, RegisterUserName: "Nguyễn Văn Anh", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Sáng" },
        { id: 2, RegisterUserName: "Huỳnh Thị Lanh", BirthDay: "3/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nữ", RegisterDay: "30/4/2022", RegisterSesion: "Chiều" },
        { id: 3, RegisterUserName: "Doãn Bá Quốc", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Cả ngày" },
        { id: 4, RegisterUserName: "Mai Quốc Bảo", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Sáng" },
        { id: 5, RegisterUserName: "Huỳnh Ngọc Chí", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nữ", RegisterDay: "30/4/2022", RegisterSesion: "Chiều" },
        { id: 6, RegisterUserName: "Nguyễn Huy Hoàng", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nữ", RegisterDay: "30/4/2022", RegisterSesion: "Chiều" },
        { id: 7, RegisterUserName: "Chu Bá Thông", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nữ", RegisterDay: "30/4/2022", RegisterSesion: "Chiều" },
        { id: 8, RegisterUserName: "Võ Văn Vinh", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nữ", RegisterDay: "30/4/2022", RegisterSesion: "Cả ngày" },
        { id: 9, RegisterUserName: "Le Van Tài", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Sáng" },
        { id: 10, RegisterUserName: "Huỳnh Thị Thoi", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nữ", RegisterDay: "30/4/2022", RegisterSesion: "Chiều" },

    ]
    
    return (
        <div>
            <div class="filter">
                
                <label className="filterTitle" >Danh sách sức khoẻ sau tiêm</label>
                <span class="searchBar">
                    <input type="date" class="searchTerm" id='myInput' placeholder='date' />
                    <button type="submit" class="searchBut">Tìm</button>
                </span>
                <span class="searchBar">
                    <input type="text" class="searchTerm" id='myInput' placeholder='CCCD/CMND' />
                    <button type="submit" class="searchBut">Tìm</button>
                </span>

                <table id="myTableListHealthAfter" className='tableListHealthAfter' >

                    <thead>
                        <tr className='trListHealthAfter'>
                            <th className='thListHealthAfter'>STT</th>
                            <th className='thListHealthAfter'>Họ và tên</th>
                            <th className='thListHealthAfter'>Ngày sinh</th>
                            <th className='thListHealthAfter'>CCCD/CMND</th>
                            <th className='thListHealthAfter'>Số điện thoại</th>
                            <th className='thListHealthAfter'>Giới tính</th>
                            <th className='thListHealthAfter'>Ngày đăng ký tiêm</th>
                            <th className='thListHealthAfter'>Buổi tiêm</th>
                            <th className='thListHealthAfter'>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.map((data, index) => {
                            return (
                                <tr key={index} className='trListHealthAfter'>
                                    <td className='tdListHealthAfter'>{data.id}</td>
                                    <td className='tdListHealthAfter'>{data.RegisterUserName}</td>
                                    <td className='tdListHealthAfter'>{data.BirthDay}</td>
                                    <td className='tdListHealthAfter'>{data.Cmnd}</td>
                                    <td className='tdListHealthAfter'>{data.PhoneNumber}</td>
                                    <td className='tdListHealthAfter'>{data.Sex}</td>
                                    <td className='tdListHealthAfter'>{data.RegisterDay}</td>
                                    <td className='tdListHealthAfter'>{data.RegisterSesion}</td>
                                    <td className='tdListHealthAfter'>
                                        
                                        <Link to='./HealthAfter'>
                                            <BallotIcon className="vaccineListEdit" />
                                        </Link>

                                        <DeleteIcon className="vaccineListDelete" />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>          
        </div>
    )
}
