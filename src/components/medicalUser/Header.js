import { Link } from "react-router-dom";
import Login from "../login/Login";


const Header = () => {
  return (
    <header>
      <section className="header__content">
        <a href>
          <img src="./images/MedicalNotebook.png" alt />
        </a>
        <ul>
          <Link to={"/"}>
            <span>TRANG CHỦ</span>
          </Link>
          <Link to={"/Inject"}>
            <span>ĐĂNG KÝ TIÊM CHỦNG</span>
          </Link>
          <Link to={"/"}>
            <span>HỒ SƠ SỨC KHOẺ</span>
          </Link>        
          <a href="#">
            <span>ĐĂNG KÝ</span>
          </a>
        </ul>
        
        <Link to={"/login"}>
        <button className="btn-grad">ĐĂNG NHẬP</button>
        </Link> 
      </section>
      <iframe
        src="https://covid19.vnanet.vn/home/indexwigetsummary"
        frameBorder={0}
        width="100%"
        style={{
          minHeight: 250,
          paddingTop: 50,
          paddingRight: 250,
          paddingLeft: 250,
          overflow: "hidden",
        }}
        scrolling="no"
      >
        {" "}
      </iframe>
      <iframe
        src="https://covid19.vnanet.vn/home/indexwiget"
        frameBorder={0}
        width="100%"
        style={{ minHeight: 500, paddingRight: 100, paddingLeft: 100 }}
      >
        {" "}
      </iframe>
    </header>
  );
};

export default Header;
