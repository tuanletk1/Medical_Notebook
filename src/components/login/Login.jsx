import React, { useEffect } from 'react'
import './login.css'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { login } from './authSlice';

export default function Login() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const history = useHistory()

    const onSubmit = data => {
        dispatch(login(data))
    }

    useEffect(() =>{
        if (authState.isLoggedIn === true){
            console.log('abfc')
            history.push('/')
        }
    }, [authState, history])

    return (
        <div className="containerLogin">
            <div className="coll-1">
                <img src="./logo_medical.png" alt="" width="150px" className="icone"/>
                    <h1>Medical Notebook</h1>
                    <Link to={"/"}>
                    <button type="submit" className="first-btn">Trang chủ</button>
                    </Link>
            </div>
            <div className="coll-2">
                <div className="form-box">
                    <div className="btn-box">
                        <div id="button"></div>
                        <button type="submit" className="button" id="btn-1">Login</button>
                        <button type="submit" className="button"><a id="btn-2" href="./register.html">Register</a></button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="heading">
                            <h1>Đăng Nhập</h1>
                        </div>
                        <div className="inner-form">
                            <div className="clm-1">
                                <h4>Tên đăng nhập</h4>
                                <input type="text" placeholder="phone" required {...register("phone")}/>
                                    <h4>Mật khẩu</h4>
                                    <input type="password" placeholder="Password" required {...register("password")}/>
                                    </div>
                                    <span className="form-check">
                                        <input className="form-check-input" type="checkbox" value="remember" name="remember" id="remember" />
                                        <label className="form-check-label" for="remember">Lưu mật khẩu</label>
                                    </span>
                                    <span className="forgetpass" ><a href="">Quên mật khẩu?</a></span>
                            </div>
                            <button type="submit" className="end-button">Đăng nhập</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
