import React, {useEffect, useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import {DataGrid} from "@mui/x-data-grid";
import {afterRegisterInjectionApi} from "../../../api/afterRegisterInjectionApi";

export default function RegisterVac() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchAllRegisterInjection() {
            const res = await afterRegisterInjectionApi.getAll()
            setData(res.data.data)
        }
        fetchAllRegisterInjection()
    }, [])

    const handleDelete = async (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const getGenderName = (params) => parseInt(params.row.sex) ? 'Nữ': 'Nam'

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Họ Tên', width: 200 },
        { field: 'identity_code', headerName: 'CCCD/CMND', type: 'number', width: 200 },
        {
            field: 'sex',
            headerName: 'Giới tính',
            width: 90,
            valueGetter: getGenderName
        },
        {
            field: 'date_of_birth',
            headerName: 'Ngày sinh',
            width: 200,
        },
        {
            field: 'date_injection',
            headerName: 'Ngày tiêm',
            width: 200,
        },
        {
            field: 'time_of_day',
            headerName: 'Buổi tiêm',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Thao tác',
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/HealthAfter/" + params.row.id + '?action=afterView'}>
                            <button className="userListEdit">Xem</button>
                        </Link>
                        <DeleteIcon className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];



    return (
        <div style={{ height: 530, width: '100%', padding: '0px 100px' }}>
            <div className="titleName">
                <label >Danh sách hồ sơ sức khỏe sau tiêm</label>
            </div>
            <DataGrid
                rows={data} disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    )
}
