import React from 'react'
import './login.css'

export default function Login() {
    return (
        <div class="containerLogin">
            <div class="col-1">
                <img src="./logo_medical.png" alt="" width="150px" class="icone"/>
                    <h1>Medical Notebook</h1>
                    <button type="submit" class="first-btn">Trang chủ</button>
            </div>
            <div class="col-2">
                <div class="form-box">
                    <div class="btn-box">
                        <div id="btn"></div>
                        <button type="submit" class="button" id="btn-1">Login</button>
                        <button type="submit" class="button"><a id="btn-2" href="./register.html">Register</a></button>
                    </div>
                    <form action="#">
                        <div class="heading">
                            <h1>Đăng Nhập</h1>
                        </div>
                        <div class="inner-form">
                            <div class="clm-1">
                                <h4>Tên đăng nhập</h4>
                                <input type="text" placeholder="Username" required/>
                                    <h4>Mật khẩu</h4>
                                    <input type="password" placeholder="Email" required/>
                                    </div>
                                    <span class="form-check">
                                        <input class="form-check-input" type="checkbox" value="remember" name="remember" id="remember" />
                                        <label class="form-check-label" for="remember">Lưu mật khẩu</label>
                                    </span>
                                    <span class="forgetpass" ><a href="">Quên mật khẩu?</a></span>
                            </div>
                            <button type="submit" class="end-btn">Đăng nhập</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
