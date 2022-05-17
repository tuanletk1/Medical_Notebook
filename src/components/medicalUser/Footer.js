const Footer = () => {
  return (
    <footer className="footer__content">
      <div className="footer__top">
        <div className="top__bg">
          <div className="top__content">
            <div className="top__left">
              <h2>Theo Dõi Bản Tin Của Chúng Tôi</h2>
            </div>
            <div className="top__right">
              <div className="top__form">
                <input
                  type="email"
                  placeholder="Nhập địa chỉ email của bạn"
                  className="form__control"
                />
                <button name="submit" value="submit" type="submit">
                  <i className="las la-paper-plane" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__mid">
        <div className="mid__bg">
          <div className="mid__content">
            <div className="mid__info">
              <div className="mid__about">
                <div className="mid__logo">
                  <a href="./index.html">
                    <img src="./images/Medical Notebook.png" alt />
                  </a>
                </div>
                <div className="mid__list">
                  <ul>
                    <li>
                      <i className="fa fa-phone gradient" />
                      <span>
                        1900 6789
                        <br />
                        +84 368053223
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-envelope gradient" />
                      <span>
                        notebookmedical@gmail.com <br />
                        18hcong@gmail.com
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-map-marker gradient" />
                      <span>
                        Demo Address #8901 Marmora Road Chi Minh City, Vietnam
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mid__info">
              <div className="mid__about">
                <div className="mid__title">
                  <h5>Liên Kết Của Chúng Tôi</h5>
                </div>
                <div className="mid__list">
                  <ul>
                    <li>
                      <a href>Trang Chủ</a>
                    </li>
                    <li>
                      <a href>Về Chúng Tôi</a>
                    </li>
                    <li>
                      <a href>Dịch Vụ</a>
                    </li>
                    <li>
                      <a href>Nhóm</a>
                    </li>
                    <li>
                      <a href>Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mid__info">
              <div className="mid__about">
                <div className="mid__title">
                  <h5>Dịch Vụ Của Chúng Tôi</h5>
                </div>
                <div className="mid__list">
                  <ul>
                    <li>
                      <a href>Thông Tin Cá Nhân</a>
                    </li>
                    <li>
                      <a href>Hồ Sơ Sức Khoẻ</a>
                    </li>
                    <li>
                      <a href>Khai Báo Y Tế</a>
                    </li>
                    <li>
                      <a href>Quản Lý Biểu Mẫu</a>
                    </li>
                    <li>
                      <a href>Quản Lý Tài Khoản</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mid__info">
              <div className="mid__about">
                <div className="mid__title">
                  <h5>Các Liên Kết Khác</h5>
                </div>
                <div className="mid__list">
                  <ul>
                    <li>
                      <a href>FAQ</a>
                    </li>
                    <li>
                      <a href>Danh Mục Đầu Tư</a>
                    </li>
                    <li>
                      <a href>Chính Sách Bảo Mật</a>
                    </li>
                    <li>
                      <a href>Điều Khoản &amp; Điều Kiện</a>
                    </li>
                    <li>
                      <a href>Hỗ Trợ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bot">
        <div className="bot__bg">
          <div className="bot__content">
            <div className="bot__left">
              <span className="copyright-text">
                Bản Quyền © 2022{" "}
                <a href="#" target="_blank">
                  Medical Notebook
                </a>
                . Đã đăng ký bản quyền.
              </span>
            </div>
            <div className="bot__right">
              <ul>
                <li>
                  <a className="fa fa-facebook" href="javascript:void(0);">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a className="fa fa-instagram" href="javascript:void(0);">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a className="fa fa-twitter" href="javascript:void(0);">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
