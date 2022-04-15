import React from 'react'
import './newUser.css'

export default function NewUser() {
  return (
    <div className='newUser'>
      <div className="newUserTitle">Thêm tài khoản</div>
      
      <div className="selection">
        <input type="radio" name='gender' id='user' value='user' />
        <label for="user">Người dùng</label>
        <input type="radio" name='gender' id='staff' value='staff' />
        <label for="staff">Nhân viên y tế </label>
      </div>
      <form className="newUserForm">
        <div className="newUserItem">
          <label> Tên tài khoản</label>
          <input type="text" />
        </div>
        <div className="newUserItem">
          <label>Họ Tên</label>
          <input type="text" />
        </div>
        <div className="newUserItem">
          <div className="newUserGender">
            <label>Giới tính</label> <br />
            <input type="radio" name='gender' id='male' value='male' />
            <label for="male">Nam</label>
            <input type="radio" name='gender' id='male' value='male' />
            <label for="female">Nữ</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Mật khẩu</label>
          <input type="password" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="newUserItem">
          <label>Số điện thoại</label>
          <input type="text" placeholder='+84' />
        </div>
        <div className="newUserItem">
          <label>CCCD/CMND</label>
          <input type="text" />
        </div>
        <div className="newUserItem">
          <label>Ngày sinh</label>
          <input type="DATE" />
        </div>
        <div className="newUserItem">
          <label>Số nhà</label>
          <input type="text" />
        </div>

        <div className="newUserItem">
          <label>Quận/Huyện</label>
          <select className="newUserSelect" name="active" id='active'>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Phường/Xã</label>
          <select className="newUserSelect" name="active" id='active'>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Thành phố</label>
          <select className="newUserSelect" name="active" id='active'>
            <option value="Yes">Đà Nẵng</option>
          </select>
        </div>
        <button className="newUserButton">Tạo tài khoản</button>
      </form>
    </div>
  )
}
