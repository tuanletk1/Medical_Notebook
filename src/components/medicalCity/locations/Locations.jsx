import React from 'react'
import "./locations.css";
import SearchIcon from '@mui/icons-material/Search';

export default function Locations() {
    const dummyData = [
        { id: 1, Sitename: "Trung tâm Y tế quận Liên Chiểu", NumberStreet: "525 Tôn Đức Thắng", Ward: "Hòa Khánh Nam", District: "Liên Chiểu", Sitemanager: "Lê Văn Sỹ", Numbertable: "9" },
        { id: 2, Sitename: "Bệnh viện Giao thông vận tải", NumberStreet: "68 Hoàng Văn Thái", Ward: "Hòa Minh", District: "Liên Chiểu", Province: "", Sitemanager: "Trần Viết Gia", Numbertable: "3" },
        { id: 3, Sitename: "Bệnh viện Hoàn Mỹ", NumberStreet: "291 Nguyễn Văn Linh", Ward: "Thạc Gián", District: "Thanh Khê", Province: "", Sitemanager: "Phạm Nguyễn Cẩm Thạch", Numbertable: "3" },
        { id: 4, Sitename: "Trung tâm Y tế quận Thanh Khê", NumberStreet: "62 Hà Huy Tập", Ward: "Hoà Khê", District: "Thanh Khê", Province: "", Sitemanager: "Võ Duy Trinh", Numbertable: "14" },
        { id: 5, Sitename: "Trung tâm Y tế quận Hải Châu", NumberStreet: "Nguyễn Trọng Phương", Ward: "Thanh Bình", District: "Hải Châu", Province: "", Sitemanager: "Lê Thị Phương Khanh", Numbertable: "17" },
        { id: 6, Sitename: "Trung tâm Kiểm soát bệnh tật thành phố Đà Nẵng", NumberStreet: "103 Hùng Vương", Ward: "Hải Châu I", District: "Hải Châu", Province: "", Sitemanager: "Tôn Thất Thạnh", Numbertable: "3" },
        { id: 7, Sitename: "Công ty Cổ phần Y khoa Bác Sỹ Gia Đình", NumberStreet: "2 Nguyễn Hữu Thọ", Ward: "Hoà Thuận Tây", District: "Hải Châu", Province: "", Sitemanager: "Trần Hùng", Numbertable: "3" },
        { id: 8, Sitename: "Bệnh viện Quân Y 17", NumberStreet: "73 Nguyễn Hữu Thọ", Ward: "Hoà Thuận Tây", District: "Hải Châu", Province: "", Sitemanager: "Nguyễn Hồng Hà", Numbertable: "2" },
        { id: 9, Sitename: "Bệnh viện Phụ Sản Nhi Đà Nẵng Cơ sở 2", NumberStreet: "26C Chu Văn An", Ward: "Bình Hiên", District: "Hải Châu", Province: "", Sitemanager: "Trần Đình Vinh", Numbertable: "2" },
        { id: 10, Sitename: "Bệnh viện đa khoa quốc tế Vinmec Đà Nẵng", NumberStreet: "30 Tháng 4", Ward: "Hoà Cường Bắc", District: "Hải Châu", Province: "", Sitemanager: "Nguyễn Tường Vân", Numbertable: "3" },
        { id: 11, Sitename: "Trung Tâm Y Tế quận Sơn Trà", NumberStreet: "1118 Ngô Quyền", Ward: "An Hải Bắc", District: "Hải Châu", Province: "", Sitemanager: "Phạm Hồng Nam", Numbertable: "11" },
        { id: 12, Sitename: "Bệnh viện Đa Khoa Tâm Trí", NumberStreet: "402 Lê Văn Hiến", Ward: "Mỹ An", District: "Hải Châu", Province: "", Sitemanager: "Trần Đình Vinh", Numbertable: "4" },
        { id: 13, Sitename: "Trung tâm Y tế quận Ngũ Hành Sơn", NumberStreet: "582 Lê Văn Hiến", Ward: "Hoà Hải", District: "Sơn Trà", Province: "", Sitemanager: "Nguyễn Văn Dũng", Numbertable: "4" },
        { id: 14, Sitename: "Bệnh viện Đa Khoa Tâm Trí", NumberStreet: "63 Cách Mạng Tháng 8", Ward: "Khuê Trung", District: "Ngũ Hành Sơn", Province: "", Sitemanager: "Võ Văn Thu", Numbertable: "3" },
        { id: 15, Sitename: "Trung tâm Y tế quận Cẩm Lệ", NumberStreet: "105 Nguyễn Nhàn", Ward: "Hoà Thọ Đông", District: "Cẩm Lệ", Province: "", Sitemanager: "Trần Thiện Hùng", Numbertable: "10" },
        { id: 16, Sitename: "Trung tâm Y tế huyện Hòa Vang", NumberStreet: "Thôn Thạch Nam Đông", Ward: "Hoà Nhơn", District: "Hoà Vang", Province: "", Sitemanager: "Nguyễn Đại Vĩnh", Numbertable: "8" },
    ]
    const handleSearch = function () {
        let filter = document.getElementById("myInput").value.toUpperCase();
        let table = document.getElementById("myTable");
        let tr = table.getElementsByTagName("tr");
        for (var i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[4];
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
    return (
        <div class="filter">
            <h3 className="filterTitle"> Điểm tiêm của thành phố</h3>
            <hr />
            {/* <input type="text" id='myInput' placeholder='Vui long nhap ten quan/ huyen' onKeyUp={handleSearch} /> */}
            <div class="search">
                <input type="text" class="searchTerm" id='myInput' placeholder='Nhập Quận/Huyện' onKeyUp={handleSearch} />
                <button type="submit" class="searchButton">
                    <SearchIcon />
                </button>
            </div>
            <table id="myTable" className='table'>

                <thead className=''>
                    <tr className='trLocaltions'>
                        <th className='thLocaltions'>STT</th>
                        <th className='thLocaltions'>Tên điểm tiêm</th>
                        <th className='thLocaltions'>Số nhà, tên đường</th>
                        <th className='thLocaltions'>Xã/Phường </th>
                        <th className='thLocaltions'>Quận/Huyện</th>
                        <th className='thLocaltions'>Người đứng đầu cơ sở tiêm chủng</th>
                        <th className='thLocaltions'>Số bàn tiêm</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map((data, index) => {
                        return (
                            <tr key={index} className="trLocations">
                                <td className='tdLocations'>{data.id}</td>
                                <td className='tdLocations'>{data.Sitename}</td>
                                <td className='tdLocations'>{data.NumberStreet}</td>
                                <td className='tdLocations'>{data.Ward}</td>
                                <td className='tdLocations'>{data.District}</td>
                                {/* <td>{data.Province}</td> */}
                                <td className='tdLocations'>{data.Sitemanager}</td>
                                <td className='tdLocations'>{data.Numbertable}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

        </div>



    )
}
