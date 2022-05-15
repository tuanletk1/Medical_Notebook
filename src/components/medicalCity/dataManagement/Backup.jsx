import React from 'react'
import './backup.css'
export default function Backup() {
  return (
    

        <div className="containerBackup">
        <div>
          <h2>
            Sao lưu dữ liệu
          </h2>
        </div>
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col ">
              <input type="checkbox" />
            </div>
            <div class="col col-5">STT</div>
            <div class="col col-6">Bảng</div>
            <div class="col col-7">Trạng thái</div>
            <div class="col col-8">Đồng bộ lần cuối</div>
          </li>
          <li class="table-row">
            <div class="col ">
              <input type="checkbox" />
            </div>
            <div class="col ">1</div>
            <div class="col col-2" data-label="Table Name">Danh sách tài khoản người dùng</div>
            <div class="col col-3" data-label="Status">
              <a class="status" href="">Hoạt động</a>
            </div>
            <div class="col col-4" data-label="Backup Date">15/5/2022</div>
          </li>
          <li class="table-row">
            <div class="col ">
              <input type="checkbox" />
            </div>
            <div class="col ">2</div>
            <div class="col col-2" data-label="Table Name">Danh sách tài khoản sở y tế</div>
            <div class="col col-3" data-label="Status">
              <a class="status" href="">Hoạt động</a>
            </div>
            <div class="col col-4" data-label="Backup Date">15/5/2022</div>
          </li>
          <li class="table-row">
            <div class="col ">
              <input type="checkbox" />
            </div>
            <div class="col ">3</div>
            <div class="col col-2" data-label="Table Name">Danh sách cơ sở Bệnh viện</div>
            <div class="col col-3" data-label="Status">
              <a class="status" href="">Hoạt động</a>
            </div>
            <div class="col col-4" data-label="Backup Date">15/5/2022</div>
          </li>
        </ul>
    <div c>
      <a href="" className="buttonBackup">Sao lưu</a>
    </div>

    </div>
      
  )
}
