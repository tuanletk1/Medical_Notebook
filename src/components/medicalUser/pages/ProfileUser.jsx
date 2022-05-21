import React, {useEffect, useState} from 'react'
import { PermIdentity, Phone, Email  } from '@material-ui/icons'
import CakeIcon from '@mui/icons-material/Cake';
import HomeIcon from '@mui/icons-material/Home';
import PublishIcon from '@mui/icons-material/Publish';
import HeaderStep from '../HeadStep';
import {useSelector} from "react-redux";
import {userApi} from "../../../api/userApi";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

export default function ProfileUser() {
  const authState = useSelector(state => state.auth)
  const [userProfile, setUserProfile] = useState()

  const { register, handleSubmit } = useForm()

  const onSubmit = async data => {
    const user = {
      ...data,
      userId: authState.currentUser.id
    }
    const res = await userApi.update(user)

  }

  useEffect( () => {
    async function getUserProfile() {
      try {
        const res = await userApi.get(authState.currentUser?.id)
        setUserProfile(res.data.data)
      }catch (e) {
        setUserProfile(undefined)
      }
    }
    getUserProfile()
  }, [])

  return (
    
    <div className='user'>
       <HeaderStep />
        <div className="userTitleContainer">
            <h1 className="userTitle">Thông tin cá nhân</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-default-avatar-png-image_5407175.jpg" alt="" className='userShowImg' />
              <div className="userShowTopTitle"> 
                <span className="userShowUsername">{userProfile?.fullname}</span>
                <span className="userShowUserTitle">Người dùng</span>
              </div>
            </div>
            <div className="userShowbutton">
              <span className="userShowTitle">Chi tiết tài khoản</span>
              <div className="userShowInfo">
                <PermIdentity className='userShowInfo'/>
                <span className="userShowInfoTitle">{userProfile?.fullname}</span>
              </div>
              <div className="userShowInfo">
                <CakeIcon className='userShowInfo'/>
                <span className="userShowInfoTitle">23/09/2000</span>
              </div>
              <div className="userShowInfo">
                <Phone className='userShowInfo'/>
                <span className="userShowInfoTitle">{userProfile?.phone}</span>
              </div>
              <div className="userShowInfo">
                <Email className='userShowInfo'/>
                <span className="userShowInfoTitle">{userProfile?.email}</span>
              </div>
              <div className="userShowInfo">
                <HomeIcon className='userShowInfo'/>
                <span className="userShowInfoTitle">{userProfile?.workplace}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Chỉnh Sửa</span>
            <form className='userUpdateForm' onSubmit={handleSubmit(onSubmit)}>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Họ và tên</label>
                  <input type="text" placeholder='full name' className='userUpdateInput' {...register("fullname")} />
                </div>
                <div className="userUpdateItem">
                  <label>CCCD/CMND </label>
                  <input type="text" placeholder='' className='userUpdateInput' {...register("cmnd_cccd")}/>
                </div>
                <div className="userUpdateItem">
                  <label>Nghề nghiệp </label>
                  <input type="text" placeholder='' className='userUpdateInput' {...register("job")}/>
                </div>
                <div className="userUpdateItem">
                  <label>Số điện thoại</label>
                  <input type="text" placeholder='+84' className='userUpdateInput' {...register("phone")} />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="text" placeholder='' className='userUpdateInput' {...register("email")}/>
                </div>
                <div className="userUpdateItem">
                  <label>Password</label>
                  <input type="text" placeholder='' className='userUpdateInput' {...register("password")}/>
                </div>
               
              </div>
              <div className="userUpdateRignt">
                <div className="userUpdateUpload">
                  <img className='userUpdateImg' src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-default-avatar-png-image_5407175.jpg" alt="User image" />
                  <label htmlFor="file"><PublishIcon className='userUpdateIcon'/></label>
                  <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <button className="userUpdateButton" type={'submit'}>Cập nhật</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
