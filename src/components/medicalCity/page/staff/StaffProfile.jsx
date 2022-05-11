import { PermIdentity, Phone, Email  } from '@material-ui/icons'
import CakeIcon from '@mui/icons-material/Cake';
import HomeIcon from '@mui/icons-material/Home';
import PublishIcon from '@mui/icons-material/Publish';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from "react-router-dom";
import face from '../../../../assets/images/face.jpg'
import './staffProfile.css'

export default function StaffProfile() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Thông tin người dùng</h1>
            <Link to="/newUser">
            <div className="userAddButton">Thêm</div>
            </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src={face} alt="" className='userShowImg' />
              <div className="userShowTopTitle"> 
                <span className="userShowUsername">PhamCong</span>
                <span className="userShowUserTitle">Nhân viên y tế</span>
              </div>
            </div>
            <div className="userShowbutton">
              <span className="userShowTitle">Chi tiết tài khoản</span>
              <div className="userShowInfo">
                <PermIdentity className='userShowInfo'/>
                <span className="userShowInfoTitle">Le Van Tuan</span>
              </div>
              <div className="userShowInfo">
                <CakeIcon className='userShowInfo'/>
                <span className="userShowInfoTitle">23/09/2000</span>
              </div>
              <div className="userShowInfo">
                <Phone className='userShowInfo'/>
                <span className="userShowInfoTitle">0865558065</span>
              </div>
              <div className="userShowInfo">
                <Email className='userShowInfo'/>
                <span className="userShowInfoTitle">Tuanletk1@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <CreditCardIcon className='userShowInfo'/>
                <span className="userShowInfoTitle">2062220929</span>
              </div>
              <div className="userShowInfo">
                <HomeIcon className='userShowInfo'/>
                <span className="userShowInfoTitle">60 Lê Thị Tính, phường An Khê, quận Thanh Khê,TP Đà Nẵng</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Sửa</span>
            <form className='userUpdateForm'>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Tài khoản</label>
                  <input type="text" placeholder='Tuanle123'className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Họ và tên</label>
                  <input type="text" placeholder='Le Van Tuan'className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Ngày sinh</label>
                  <input type="date" placeholder=''className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Số điện thoại</label>
                  <input type="text" placeholder='+84'className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="text" placeholder=''className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>CCCD/CMND</label>
                  <input type="text" placeholder=''className='userUpdateInput' />
                </div>
              </div>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Địa chỉ/ Số nhà</label>
                  <input type="text" placeholder=''className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Xã/Phường</label>
                  <input type="text" placeholder=''className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Quận/Huyện</label>
                  <input type="text" placeholder=''className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Tỉnh/Thành phố</label>
                  <input type="text" placeholder=''className='userUpdateInput' />
                </div>
               
              </div>
              <div className="userUpdateRignt">
                <div className="userUpdateUpload">
                  <img className='userUpdateImg' src={face} alt="User image" />
                  <label htmlFor="file"><PublishIcon className='userUpdateIcon'/></label>
                  <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <button className="userUpdateButton">Cập nhật</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
