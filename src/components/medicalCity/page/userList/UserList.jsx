import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useState } from "react";
import { userRows } from "./dummyData";



export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }
  const handleSearch = function () {
    let filter = document.getElementById("myInput").value.toUpperCase();
    let table = document.getElementById("myTable");
    let tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName('td')[1];
      if (td) {
        let textvalue = td.textContent || td.innerHTML;
        if (textvalue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }
    }
    
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'fullname', headerName: 'Họ Tên', width: 130 },
    { field: 'cccd_cmnd', headerName: 'CCCD/CMND', type: 'number', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'sex',
      headerName: 'Giới tính',
      width: 90,
    },
    {
      field: 'birthDay',
      headerName: 'Ngày sinh',
      width: 120,
    },
    {
      field: 'phone',
      headerName: 'Số điện thoại',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Thao tác',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row.id}>
              <button className="userListEdit">Xem</button>
            </Link>
            <DeleteIcon className="userListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    },
  ];



  return (
    <div style={{ height: 530, width: '100%',padding: '0px 100px' }}>
      <div className="titleName">
        <label >Danh sách người dùng </label>
        <span class="searchBar">
          <input type="text" class="searchTerm" id='myInput' placeholder='CCCD/CMND' onKeyUp={handleSearch} />
          <button type="submit" class="searchBut">Tìm</button>
        </span>
      </div>
      <DataGrid
        rows={data} disableSelectionOnClick
        columns={columns}
        pageSize={8}
        // rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
