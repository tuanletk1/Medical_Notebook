import { Link } from "react-router-dom";
const HeaderStep = () => {
  return (
    <div className="header__content">
      <a href>
        <img src="./images/MedicalNotebook.png" alt />
      </a>
      <ul>
          <Link to={"/"}>
            <span>TRANG CHỦ</span>
          </Link>
          <Link to={"/"}>
            <span>THÔNG TIN CÁ NHÂN</span>
          </Link>
          <Link to={"/Inject"}>
            <span>ĐĂNG KÝ TIÊM CHỦNG</span>
          </Link>
          <Link to={"/"}>
            <span>HỒ SƠ SỨC KHOẺ</span>
          </Link>
        </ul>
      <button className="btn-grad">ĐĂNG XUẤT</button>
    </div>
  );
};

export default HeaderStep;
