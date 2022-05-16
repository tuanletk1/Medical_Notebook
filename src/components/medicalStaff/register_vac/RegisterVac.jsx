import React from 'react'
import ReactDOM from 'react-dom'
import './registerVac.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import BallotIcon from '@mui/icons-material/Ballot';
import SearchIcon from '@mui/icons-material/Search';

export default function RegisterVac() {
    const dummyData = [
        { id: 1, RegisterUserName: "Le Van Tuan", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Sáng" },
        { id: 2, RegisterUserName: "Le Van Tuan", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Sáng" },
        { id: 3, RegisterUserName: "Le Van Tuan", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Sáng" },
        { id: 4, RegisterUserName: "Le Van Tuan", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Sáng" },
        { id: 5, RegisterUserName: "Le Van Tuan", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Sáng" },
        { id: 6, RegisterUserName: "Le Van Tuan", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Sáng" },
        { id: 7, RegisterUserName: "Le Van Tuan", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Sáng" },
        { id: 8, RegisterUserName: "Le Van Tuan", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Sáng" },
        { id: 9, RegisterUserName: "Le Van Tuan", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Sáng" },
        { id: 10, RegisterUserName: "Le Van Tuan", BirthDay: "30/2/2000", Cmnd: "123456789", PhoneNumber: "09090909", Sex: "Nam", RegisterDay: "30/4/2022", RegisterSesion: "Sáng" },

    ]
    
    return (
        <div>
            <div class="filter">
                
                <label className="filterTitle" >Danh sách đăng ký tiêm chủng </label>
                <span class="searchBar">
                    <input type="date" class="searchTerm" id='myInput' placeholder='date' />
                    <button type="submit" class="searchBut">Tìm</button>
                </span>
                <span class="searchBar">
                    <input type="text" class="searchTerm" id='myInput' placeholder='CCCD/CMND' />
                    <button type="submit" class="searchBut">Tìm</button>
                </span>

                <table id="myTableRegisterVacc" className='tableListRegisterVacc' >

                    <thead>
                        <tr className='trListRegisterVac'>
                            <th className='thListRegisterVac'>STT</th>
                            <th className='thListRegisterVac'>Họ và tên</th>
                            <th className='thListRegisterVac'>Ngày sinh</th>
                            <th className='thListRegisterVac'>CCCD/CMND</th>
                            <th className='thListRegisterVac'>Số điện thoại</th>
                            <th className='thListRegisterVac'>Giới tính</th>
                            <th className='thListRegisterVac'>Ngày đăng ký tiêm</th>
                            <th className='thListRegisterVac'>Buổi tiêm</th>
                            <th className='thListRegisterVac'>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.map((data, index) => {
                            return (
                                <tr key={index} className='trListRegisterVac'>
                                    <td className='tdListRegisterVac'>{data.id}</td>
                                    <td className='tdListRegisterVac'>{data.RegisterUserName}</td>
                                    <td className='tdListRegisterVac'>{data.BirthDay}</td>
                                    <td className='tdListRegisterVac'>{data.Cmnd}</td>
                                    <td className='tdListRegisterVac'>{data.PhoneNumber}</td>
                                    <td className='tdListRegisterVac'>{data.Sex}</td>
                                    <td className='tdListRegisterVac'>{data.RegisterDay}</td>
                                    <td className='tdListRegisterVac'>{data.RegisterSesion}</td>
                                    <td className='tdListRegisterVac'>
                                        
                                        <Link to='./UserRegisterForm'>
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
