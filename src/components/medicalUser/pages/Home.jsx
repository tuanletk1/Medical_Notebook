import Header from "../Header";
import Footer from "../Footer";


const Home = () => {
  return (
    <>
      <Header />
     
      {/* SERVICE */}
      <section className="service">
        <div className="service__content">
          <div className="title">
            <h6>Những Gì Chúng Tôi Làm Tốt Nhất</h6>
            <h2>DỊCH VỤ CỦA CHÚNG TÔI</h2>
          </div>
          <div className="service__list">
            <div className="service__item">
              <img src="./images/icons8-search.gif" alt />
              <h4>Tìm Kiếm Tin Tức</h4>
              <p>Tìm kiếm tình hình dịch bệnh COVID-19...</p>
            </div>
            <div className="service__item">
              <img src="./images/icons8-hand-100.png" alt />
              <h4>Tình Hình Tiêm</h4>
              <p>
                Tổng số liều được cung cấp 201tr Số người đã tiêm đủ liều 77.6tr
                % đã tiêm đủ Vaccine 79.8%.
              </p>
            </div>
            <div className="service__item">
              <img src="./images/icons8-veterinary-100.png" alt />
              <h4>Cẩm Nang F0</h4>
              <p>
                Bộ Y tế vừa ban hành hướng dẫn chăm sóc F0 tại nhà. Trong đó, có
                hướng dẫn cụ thể cách theo dõi sức khỏe người bệnh tại nhà....
              </p>
            </div>
          </div>
          <div className="service__item__button">
            <button type="button" className="btn-success">
              XEM THÊM
            </button>
          </div>
        </div>
        {/* DINH DƯỠNG */}
        <div className="service__content__dinhduong">
          <div className="title">
            <h2>CHẾ ĐỘ DINH DƯỠNG</h2>
            <h2></h2>
          </div>
          <div className="service__list__dinhduong">
            <div className="service__item__dinhduong">
              <img src="./images/article.jfif" width={300} height={200} alt />
              <h4>
                F0 điều trị tại nhà nên ăn gì
                <br />
                để mau hồi phục ?
              </h4>
              <p>
                Những ngày gần đây số ca mắc mới COVID-19 liên tục gia tăng trên
                cả nước. Ngoài việc điều trị tại nhà, F0 cần một chế độ dinh
                dưỡng hợp lý để mau hồi phục.
              </p>
              <a
                href="https://moh.gov.vn/tin-lien-quan/-/asset_publisher/vjYyM7O9aWnX/content/f0-ieu-tri-tai-nha-nen-an-gi-e-mau-hoi-phuc-"
                target="”_blank”"
              >
                Xem thêm
              </a>
            </div>
            <div className="service__item__dinhduong">
              <img
                src="./images/2-1641045276275772086370.jpg"
                width={300}
                height={200}
                alt
              />
              <h4>
                F0 sau khi điều trị COVID-19
                <br /> kiêng ăn gì?
              </h4>
              <p>
                F0 sau thời gian điều trị COVID-19 có nguy cơ bị suy dinh dưỡng
                ở các mức độ khác nhau khiến cơ thể bị suy kiệt, giảm sức đề
                kháng và dễ mắc các bệnh...
              </p>
              <a
                href="https://moh.gov.vn/tin-lien-quan/-/asset_publisher/vjYyM7O9aWnX/content/f0-ieu-tri-tai-nha-nen-an-gi-e-mau-hoi-phuc-"
                target="”_blank”"
              >
                Xem thêm
              </a>
            </div>
            <div className="service__item__dinhduong">
              <img src="./images/1.jpeg" width={300} height={200} alt />
              <h4>
                Bốn nhóm thực phẩm bổ phổi <br />
                hậu Covid-19.
              </h4>
              <p>
                Gừng, tỏi, nghệ; các loại hạt; hoa quả như bưởi, dâu, táo; rau
                lá xanh... là bốn nhóm thực phẩm tốt cho những người mắc chứng
                khó thở, ho kéo dài hậu Covid.
              </p>
              <a
                href="https://vnexpress.net/4-nhom-thuc-pham-bo-phoi-hau-covid-19-4436487.html"
                target="”_blank”"
              >
                Xem thêm
              </a>
            </div>
          </div>
          <div className="service__item__button">
            <button type="button" className="btn-success">
              Xem Tất Cả
            </button>
          </div>
        </div>
      </section>
      
      {/* CLIENT */}
      {/* <section className="client">
        <div className="client__content">
          <div className="title">
            <h2>Khách Hàng Của Chúng Tôi Nói Gì?</h2>
          </div>
          <div className="testimonial-content">
     
            <div className="swiper-container testimonial-thumbs">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-pic">
                    <img
                      src="https://samar.dexignzone.com/xhtml/images/testimonials/pic1.jpg"
                      alt
                    />
                    <div className="shape-bx" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-pic">
                    <img
                      src="https://samar.dexignzone.com/xhtml/images/testimonials/pic2.jpg"
                      alt
                    />
                    <div className="shape-bx" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-pic">
                    <img
                      src="https://samar.dexignzone.com/xhtml/images/testimonials/pic3.jpg"
                      alt
                    />
                    <div className="shape-bx" />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-container testimonial-comment">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-4">
                    <div className="testimonial-text">
                      <strong className="testimonial-name">Mỹ Phụng </strong>
                      <span className="testimonial-position text-primary m-b20">
                        CEO &amp; Founder{" "}
                      </span>
                      <p>
                        “ Website tương tác với người dùng của bạn và cổng thông
                        tin web cho phép tôi truy cập thông tin ngay lập tức
                        (không có hình thức rườm rà, đăng kí nhanh gọn) và an
                        toàn. ”
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-4">
                    <div className="testimonial-text">
                      <strong className="testimonial-name">Công Hoàng </strong>
                      <span className="testimonial-position text-primary m-b20">
                        Nhân Viên Văn Phòng{" "}
                      </span>
                      <p>
                        Tôi muốn bày tỏ lòng biết ơn sâu sắc về sự chăm sóc tận
                        tình và chu đáo mà các bạn đã dành cho tôi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-4">
                    <div className="testimonial-text">
                      <strong className="testimonial-name">Viet Tuong </strong>
                      <span className="testimonial-position text-primary m-b20">
                        Phó Giám Đốc &amp; Người Sáng lập{" "}
                      </span>
                      <p>
                        Đối với một công ty kinh doanh trong thời kỳ công nghệ
                        số như hiện nay thì website đóng một vai trò hết sức
                        quan trọng. Và bài toán đặt ra khi bạn bắt đầu cho một
                        website chính là lựa chọn đơn vị thiết kế.
                        <br />
                        Để tìm được một đơn vị uy tín và chuyên nghiệp giữa hàng
                        ngàn các công ty thiết kế là một điều khó khăn. Kinh
                        nghiệm của bản thân tôi khi chọn đơn vị thiết kế là đánh
                        giá năng lực của đối tác về kiến thức, kỹ năng, tính
                        chuyên nghiệp, sự nhiệt tình..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section> */}
      {/* BLOG */}
      <section className="blog">
        <div className="blog__content">
          <div className="title">
            <h6>Blog Của Chúng Tôi</h6>
            <h2>Tin Tức &amp; Blog Mới Nhất</h2>
          </div>
          <div className="blog__list" >
            <div className="blog__item">
              <div className="blog__img">
                <a
                  href="https://baotintuc.vn/tags/vaccine.htm"
                  target="”_blank”"
                >
                  <img src="./images/pic1_1.jpg" alt="#" />
                </a>
              </div>
              <div className="blog__info">
                <h4>
                  <a
                    href="https://baotintuc.vn/tags/vaccine.htm"
                    target="”_blank”"
                  >
                    VACCINE - Tin tức mới nhất về VACCINE COVID-19.
                  </a>
                </h4>
                <p>
                  CẬP NHẬT TÌNH HÌNH, TIN TỨC COVID-19 MỚI NHẤT TẠI VIỆT NAM.
                </p>
                <div className="blog__bot">
                  <ul>
                    <li>
                      <i className="las la-user-circle"></i>
                      BY
                      <a href="javascript:void(0)" className="blog__left">
                        ADMIN
                      </a>
                    </li>
                    <li>
                      <i className="las la-comment"></i>
                      <a href="javascript:void(0)" className="blog__right">
                        BÌNH LUẬN
                        <span>15</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog__button">
                  <p>25 MARCH 2022</p>
                </div>
              </div>
            </div>
            <div className="blog__item">
              <div className="blog__img">
                <a
                  href="https://baotintuc.vn/tags/vaccine.htm"
                  target="”_blank”"
                >
                  <img src="./images/pic2.jpg" alt="#" />
                </a>
              </div>
              <div className="blog__info">
                <h4>
                  <a
                    href="https://baotintuc.vn/tags/vaccine.htm"
                    target="”_blank”"
                  >
                    VACCINE - Tin tức mới nhất về VACCINE COVID-19.
                  </a>
                </h4>
                <p>
                  CẬP NHẬT TÌNH HÌNH, TIN TỨC COVID-19 MỚI NHẤT TẠI VIỆT NAM.
                </p>
                <div className="blog__bot">
                  <ul>
                    <li>
                      <i className="las la-user-circle"></i>
                      BY
                      <a href="javascript:void(0)" className="blog__left">
                        ADMIN
                      </a>
                    </li>
                    <li>
                      <i className="las la-comment"></i>
                      <a href="javascript:void(0)" className="blog__right">
                        BÌNH LUẬN
                        <span>15</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog__button">
                  <p>28 JUNE 2022</p>
                </div>
              </div>
            </div>
            <div className="blog__item">
              <div className="blog__img">
                <a
                  href="https://baotintuc.vn/tags/vaccine.htm"
                  target="”_blank”"
                >
                  <img src="./images/pic3.jpg" alt="#" />
                </a>
              </div>
              <div className="blog__info">
                <h4>
                  <a
                    href="https://baotintuc.vn/tags/vaccine.htm"
                    target="”_blank”"
                  >
                    VACCINE - Tin tức mới nhất về VACCINE COVID-19.
                  </a>
                </h4>
                <p>
                  CẬP NHẬT TÌNH HÌNH, TIN TỨC COVID-19 MỚI NHẤT TẠI VIỆT NAM.
                </p>
                <div className="blog__bot ">
                  <ul>
                    <li>
                      <i className="las la-user-circle"></i>
                      BY
                      <a href="javascript:void(0)" className="blog__left">
                        ADMIN
                      </a>
                    </li>
                    <li>
                      <i className="las la-comment"></i>
                      <a href="javascript:void(0)" className="blog__right">
                        BÌNH LUẬN
                        <span>15</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog__button ">
                  <p>28 JUNE 2022</p>
                </div>
              </div>
            </div>
            <div className="blog__item">
              <div className="blog__img">
                <a
                  href="https://baotintuc.vn/tags/vaccine.htm"
                  target="”_blank”"
                >
                  <img src="./images/pic1_1.jpg" alt="#" />
                </a>
              </div>
              <div className="blog__info">
                <h4>
                  <a
                    href="https://baotintuc.vn/tags/vaccine.htm"
                    target="”_blank”"
                  >
                    VACCINE - Tin tức mới nhất về VACCINE COVID-19.
                  </a>
                </h4>
                <p>
                  CẬP NHẬT TÌNH HÌNH, TIN TỨC COVID-19 MỚI NHẤT TẠI VIỆT NAM.
                </p>
                <div className="blog__bot">
                  <ul>
                    <li>
                      <i className="las la-user-circle"></i>
                      BY
                      <a href="javascript:void(0)" className="blog__left">
                        ADMIN
                      </a>
                    </li>
                    <li>
                      <i className="las la-comment"></i>
                      <a href="javascript:void(0)" className="blog__right">
                        BÌNH LUẬN
                        <span>15</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog__button">
                  <p>25 MARCH 2022</p>
                </div>
              </div>
            </div>
            <div className="blog__item">
              <div className="blog__img">
                <a
                  href="https://baotintuc.vn/tags/vaccine.htm"
                  target="”_blank”"
                >
                  <img src="./images/pic2.jpg" alt="#" />
                </a>
              </div>
              <div className="blog__info">
                <h4>
                  <a
                    href="https://baotintuc.vn/tags/vaccine.htm"
                    target="”_blank”"
                  >
                    VACCINE - Tin tức mới nhất về VACCINE COVID-19.
                  </a>
                </h4>
                <p>
                  CẬP NHẬT TÌNH HÌNH, TIN TỨC COVID-19 MỚI NHẤT TẠI VIỆT NAM.
                </p>
                <div className="blog__bot">
                  <ul>
                    <li>
                      <i className="las la-user-circle"></i>
                      BY
                      <a href="javascript:void(0)" className="blog__left">
                        ADMIN
                      </a>
                    </li>
                    <li>
                      <i className="las la-comment"></i>
                      <a href="javascript:void(0)" className="blog__right">
                        BÌNH LUẬN
                        <span>15</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog__button">
                  <p>28 JUNE 2022</p>
                </div>
              </div>
            </div>
            <div className="blog__item">
              <div className="blog__img">
                <a
                  href="https://baotintuc.vn/tags/vaccine.htm"
                  target="”_blank”"
                >
                  <img src="./images/pic3.jpg" alt="#" />
                </a>
              </div>
              <div className="blog__info">
                <h4>
                  <a
                    href="https://baotintuc.vn/tags/vaccine.htm"
                    target="”_blank”"
                  >
                    VACCINE - Tin tức mới nhất về VACCINE COVID-19.
                  </a>
                </h4>
                <p>
                  CẬP NHẬT TÌNH HÌNH, TIN TỨC COVID-19 MỚI NHẤT TẠI VIỆT NAM.
                </p>
                <div className="blog__bot ">
                  <ul>
                    <li>
                      <i className="las la-user-circle"></i>
                      BY
                      <a href="javascript:void(0)" className="blog__left">
                        ADMIN
                      </a>
                    </li>
                    <li>
                      <i className="las la-comment"></i>
                      <a href="javascript:void(0)" className="blog__right">
                        BÌNH LUẬN
                        <span>15</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog__button ">
                  <p>28 JUNE 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LOGO */}
      <section className="logo">
        <div className="logo__content">
          <div className="logo__list">
            <div className="logo__item">
              <div className="logo__main">
                <img src="./images/logo-pink1.png" alt />
              </div>
              <div className="logo__hover">
                <img src="./images/logo-light1.png" alt />
              </div>
            </div>
            <div className="logo__item">
              <div className="logo__main">
                <img src="./images/logo-pink2.png" alt />
              </div>
              <div className="logo__hover">
                <img src="./images/logo-light2.png" alt />
              </div>
            </div>
            <div className="logo__item">
              <div className="logo__main">
                <img src="./images/logo-pink3.png" alt />
              </div>
              <div className="logo__hover">
                <img src="./images/logo-light3.png" alt />
              </div>
            </div>
            <div className="logo__item">
              <div className="logo__main">
                <img src="./images/logo-pink4.png" alt />
              </div>
              <div className="logo__hover">
                <img src="./images/logo-light4.png" alt />
              </div>
            </div>
            <div className="logo__item">
              <div className="logo__main">
                <img src="./images/logo-pink5.png" alt />
              </div>
              <div className="logo__hover">
                <img src="./images/logo-light5.png" alt />
              </div>
            </div>
            <div className="logo__item">
              <div className="logo__main">
                <img src="./images/logo-pink6.png" alt />
              </div>
              <div className="logo__hover">
                <img src="./images/logo-light6.png" alt />
              </div>
            </div>
            <div className="logo__item">
              <div className="logo__main">
                <img src="./images/logo-pink1.png" alt />
              </div>
              <div className="logo__hover">
                <img src="./images/logo-light1.png" alt />
              </div>
            </div>
            <div className="logo__item">
              <div className="logo__main">
                <img src="./images/logo-pink2.png" alt />
              </div>
              <div className="logo__hover">
                <img src="./images/logo-light2.png" alt />
              </div>
            </div>
            <div className="logo__item">
              <div className="logo__main">
                <img src="./images/logo-pink3.png" alt />
              </div>
              <div className="logo__hover">
                <img src="./images/logo-light3.png" alt />
              </div>
            </div>
            <div className="logo__item">
              <div className="logo__main">
                <img src="./images/logo-pink4.png" alt />
              </div>
              <div className="logo__hover">
                <img src="./images/logo-light4.png" alt />
              </div>
            </div>
            <div className="logo__item">
              <div className="logo__main">
                <img src="./images/logo-pink5.png" alt />
              </div>
              <div className="logo__hover">
                <img src="./images/logo-light5.png" alt />
              </div>
            </div>
            <div className="logo__item">
              <div className="logo__main">
                <img src="./images/logo-pink6.png" alt />
              </div>
              <div className="logo__hover">
                <img src="./images/logo-light6.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
      <a href="./" class="backtoTop cd-top text-replace js-cd-top"><i class="fa fa-arrow-up"></i></a>
    </>
  );
};
export default Home;
