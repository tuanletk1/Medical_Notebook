import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../login/authSlice";
const HeaderStep = () => {
    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

  return (
    <div className="header__content">
      <a href>
        <img src="./images/MedicalNotebook.png" alt />
      </a>
      <ul>
          <Link to={"/"}>
            <span>TRANG CHỦ</span>
          </Link>
          <Link to={"/ProfileUser"}>
            <span>THÔNG TIN CÁ NHÂN</span>
          </Link>
          <Link to={"/Inject"}>
            <span>ĐĂNG KÝ TIÊM CHỦNG</span>
          </Link>
          <Link to={"/HealthAfterInjection"}>
            <span>HỒ SƠ SỨC KHOẺ</span>
          </Link>
        </ul>

        {authState.isLoggedIn &&
            <button className="btn-grad" onClick={logoutHandler}>ĐĂNG XUẤT</button>
        }
        {!authState.isLoggedIn &&
            <Link to={"/login"}>
                <button className="btn-grad">ĐĂNG NHẬP</button>
            </Link>
        }
    </div>
  );
};

export default HeaderStep;
