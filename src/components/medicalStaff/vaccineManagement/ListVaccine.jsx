import React from 'react'
import style from "./listVaccine.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

export default function ListVaccine() {
    const dummyData = [
        { id: 1, VaccineName: "vero cell", Number: "111", DateAdd: "6/4/2022", ManufactureDate: "1/4/2022", ExpiryDate: "30/4/2022"},
        { id: 1, VaccineName: "vero cell", Number: "111", DateAdd: "6/4/2022", ManufactureDate: "1/4/2022", ExpiryDate: "30/4/2022"},
    ]
    return (
        <div>
            <div class="filter">
                <h3 className="filterTitle">Danh sách Vắc-xin đã nhập</h3>
                <table id="myTableVaccine" className='tableListVaccine' >

                    <thead>
                        <tr className='trListVaccine'>
                            <th className='thListVaccine'>STT</th>
                            <th className='thListVaccine'>Tên Vắc Xin</th>
                            <th className='thListVaccine'>Số lượng</th>
                            <th className='thListVaccine'>Ngày nhập</th>
                            <th className='thListVaccine'>Hạn sản xuất</th>
                            <th className='thListVaccine'>Hạn sử dụng</th>
                            <th className='thListVaccine'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.map((data, index) => {
                            return (
                                <tr key={index} className='trListVaccine'>
                                    <td className='tdListVaccine'>{data.id}</td>
                                    <td className='tdListVaccine'>{data.VaccineName}</td>
                                    <td className='tdListVaccine'>{data.Number}</td>
                                    <td className='tdListVaccine'>{data.DateAdd}</td>
                                    <td className='tdListVaccine'>{data.ManufactureDate}</td>
                                    <td className='tdListVaccine'>{data.ExpiryDate}</td>
                                    <td className='tdListVaccine'>
                                        {/* <button className="vaccineListEdit">Xem</button> */}
                                        <Link to='./editvaccine'>
                                        <EditIcon className="vaccineListEdit" />
                                        </Link>
                                        
                                        <DeleteIcon className="vaccineListDelete" />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>



            )
        </div>
    )
}
