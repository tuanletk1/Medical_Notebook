import React from 'react'
import "./locations.css";
import SearchIcon from '@mui/icons-material/Search';

export default function Locations() {
    const dummyData=[
        {id: 1, Sitename: "Trung tâm Y tế quận Liên Chiểu", NumberStreet: "525 Tôn Đức Thắng", Ward:  "Hòa Khánh Nam", District:"Liên Chiểu",  Sitemanager:"Lê Văn Sỹ", Numbertable:"9"},
        {id: 2, Sitename: "Bệnh viện Giao thông vận tải", NumberStreet: "", Ward:  "", District:"", Province:"", Sitemanager:"", Numbertable:""},
        {id: 3, Sitename: "Bệnh viện Hoàn Mỹ", NumberStreet: "", Ward:  "", District:"", Province:"", Sitemanager:"", Numbertable:""},
        {id: 4, Sitename: "Trung tâm Y tế quận Thanh Khê", NumberStreet: "", Ward:  "", District:"", Province:"", Sitemanager:"", Numbertable:""},
        {id: 5, Sitename: "Trung tâm Y tế quận Hải Châu", NumberStreet: "", Ward:  "", District:"", Province:"", Sitemanager:"", Numbertable:""},
        {id: 6, Sitename: "Trung tâm Kiểm soát bệnh tật thành phố Đà Nẵng", NumberStreet: "", Ward:  "", District:"", Province:"", Sitemanager:"", Numbertable:""},
        {id: 7, Sitename: "Công ty Cổ phần Y khoa Bác Sỹ Gia Đình", NumberStreet: "", Ward:  "", District:"", Province:"", Sitemanager:"", Numbertable:""},
        {id: 8, Sitename: "Bệnh viện Quân Y 17", NumberStreet: "", Ward:  "", District:"", Province:"", Sitemanager:"", Numbertable:""},
        {id: 9, Sitename: "Bệnh viện Phụ Sản Nhi Đà Nẵng Cơ sở 2", NumberStreet: "", Ward:  "", District:"", Province:"", Sitemanager:"", Numbertable:""},
        {id: 10, Sitename: "Bệnh viện đa khoa quốc tế Vinmec Đà", NumberStreet: "", Ward:  "", District:"", Province:"", Sitemanager:"", Numbertable:""},
   ]
   const handleSearch = function(){
       let filter = document.getElementById("myInput").value.toUpperCase();
       let table = document.getElementById("myTable");
       let tr = table.getElementsByTagName("tr");
       for(var i=0; i<tr.length ;i++){
           let td = tr[i].getElementsByTagName('td')[1];
           if(td){
               let textvalue= td.textContent || td.innerHTML;
               if(textvalue.toUpperCase().indexOf(filter) > -1){
                   tr[i].style.display="";
               }
               else{
                   tr[i].style.display="none";
               }
           }
       }
   }
    return (
        <div class="filter">
            <h3 className="filterTitle"> Điểm tiêm của thành phố</h3>
            <hr />
            {/* <input type="text" id='myInput' placeholder='Vui long nhap ten quan/ huyen' onKeyUp={handleSearch} /> */}
            <div class="search">
                <input type="text" class="searchTerm" id='myInput' placeholder='Nhập Bệnh Viện' onKeyUp={handleSearch} />
                <button type="submit" class="searchButton">
                <SearchIcon/>
                </button>
            </div>
            <table id="myTable" >

                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên điểm tiêm</th>
                        <th>Số nhà, tên đường</th>
                        <th>Xã/Phường </th>
                        <th>Quận/Huyện</th>
                        <th>Người đứng đầu cơ sở tiêm chủng</th>
                        <th>Số bàn tiêm</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map((data,index)=>{
                   return(
                       <tr key={index}>
                           <td>{data.id}</td>
                           <td>{data.Sitename}</td>
                           <td>{data.NumberStreet}</td>
                           <td>{data.Ward}</td>
                           <td>{data.District}</td>
                           {/* <td>{data.Province}</td> */}
                           <td>{data.Sitemanager}</td>
                           <td>{data.Numbertable}</td>
                       </tr>
                   ) 
                })}

                </tbody>
            </table>


            
        </div>
       
            
        
    )
}
