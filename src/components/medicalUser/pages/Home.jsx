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
      {/* ABOUT */}
      {/* <section class="about">
    <div class="about__content">
  <div class="about__left">
      <div class="about__bg">
          <img src="./images/pic1.jpg" alt="">
      </div>
  </div>
  <div class="about__right">
      <div class="title">
          <h6>About Us</h6>
          <h2>Build Your <br>Business Website <br>Better</h2>
      </div>
      <p>Proin laoreet leo vel enim gravida, at porttitor metus ultricies. Cras eu velit enim. Vivamus
          blandit, dolor ut aliquet rutrum, ex elit mattis sapien, non molestie felis neque et nulla. Sed
          euismod turpis id nibh suscipit semper. Pellentesque dapibus risus arcu.</p>
      <ul>
          <li>We support programs that create advancement opportunities for people.</li>
          <li>Get a view of events and trends. Be updated on our recent news.</li>
          <li>Finally, it all comes down to people. Creating a winning team.</li>
          <li>Get a view of events and trends. Be updated on our recent news.</li>
      </ul>
  </div>
    </div>
</section> */}
      {/* NUMBER */}
      {/* <section class="number">
    <div class="number__content">
  <div class="number__list">
      <div class="number__item">
          <div class="number__icon">
              <i class="flaticon-smile"></i>
          </div>
          <div class="number__text">
              <h2>
                  <span class="numscroller" data-min='1' data-max='18' data-delay='5' data-increment='1'></span>MI
              </h2>
              <span class="nd">Satisfied Clients</span>
          </div>
      </div>
      <div class="number__item">
          <div class="number__icon">
              <i class="flaticon-line-chart"></i>
          </div>
          <div class="number__text">
              <h2>
                  <span class="numscroller" data-min='1' data-max='20' data-delay='5' data-increment='1'></span>MI
              </h2>
              <span>Project Completed</span>
          </div>
      </div>
      <div class="number__item">
          <div class="number__icon">
              <i class="flaticon-startup"></i>
          </div>
          <div class="number__text">
              <h2>
                  <span class="numscroller" data-min='1' data-max='30' data-delay='5' data-increment='1'></span>MI
              </h2>
              <span>Project Lunched</span>
          </div>
      </div>
      <div class="number__item">
          <div class="number__icon">
              <i class="flaticon-confetti"></i>
          </div>
          <div class="number__text">
              <h2>
                  <span class="numscroller" data-min='1' data-max='50' data-delay='5' data-increment='1' ></span>
              </h2>
              <span>Years Completed</span>
          </div>
      </div>
  </div>
    </div>
</section> */}
      {/* STORY */}
      {/* <section class="story">
    <div class="story__content">
  <div class="story__left">
      <div class="title">
          <h6>Our Features</h6>
          <h2>Behind The Story <br>Of Samar Agency</h2>
      </div>
      <div class="story__list">
          <div class="story__item">
              <div class="story__icon">
                  <a href="">
                      <i class="icon1"></i>
                  </a>
              </div>
              <div class="story__text">
                  <h4>Idea & Analysis Gathering</h4>
                  <p>Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue.</p>
              </div>
          </div>
          <div class="story__item" id="o2">
              <div class="story__icon">
                  <a href="">
                      <i class="icon2"></i>
                  </a>
              </div>
              <div class="story__text">
                  <h4>Design & Developing</h4>
                  <p>Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue.</p>
              </div>
          </div>
          <div class="story__item">
              <div class="story__icon">
                  <a href="">
                      <i class="icon3"></i>
                  </a>
              </div>
              <div class="story__text">
                  <h4>Testing & Lunching</h4>
                  <p>Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue.</p>
              </div>
          </div>
      </div>
  </div>
  <div class="story__right">
      <img src="./images/pic3.png" alt="">
  </div>
    </div>
</section> */}
      {/* PORT */}
      {/* <section class="port">
    <div class="title">
  <h6>Portfolio</h6>
  <h2>Our Latest Work</h2>
    </div>
    <div class="port__content" id="animated-thumbnails">
  <div class="port__item port__1">
      <img src="./images/pic1_2.jpg" alt="">
      <div class="port__overlay">
          <div class="port__icon">
              <a data-exthumbimage="./images/pic1_2.jpg" data-lg-size="2500-2500" class="lightimg"
              data-src="./images/pic1_2.jpg" data-sub-html="Design">
              <i class="la la-plus"></i>
              </a>
          </div>
          <div class="port__text">
              <h5><a href="https://samar.dexignzone.com/xhtml/services-details-1.html">Software Landing</a></h5>
              <p>By <a href="https://samar.dexignzone.com/xhtml/services-details-1.html">Jhone Doe</a></p>
          </div>
      </div>
  </div>
  <div class="port__item port__2">
      <img src="./images/pic2_1.jpg" alt="">
      <div class="port__overlay">
          <div class="port__icon">
              <a data-exthumbimage="./images/pic2_1.jpg" data-lg-size="2500-2500" class="lightimg"
              data-src="./images/pic2_1.jpg" data-sub-html="Design">
              <i class="la la-plus"></i>
              </a>
          </div>
          <div class="port__text">
              <h5><a href="https://samar.dexignzone.com/xhtml/services-details-1.html">Software Landing</a></h5>
              <p>By <a href="https://samar.dexignzone.com/xhtml/services-details-1.html">Jhone Doe</a></p>
          </div>
      </div>
  </div>
  <div class="port__item port__3">
      <img src="./images/pic3_1.jpg" alt="">
      <div class="port__overlay">
          <div class="port__icon">
              <a data-exthumbimage="./images/pic3_1.jpg" data-lg-size="2500-2500" class="lightimg"
              data-src="./images/pic3_1.jpg" data-sub-html="Design">
              <i class="la la-plus"></i>
              </a>
          </div>
          <div class="port__text">
              <h5><a href="https://samar.dexignzone.com/xhtml/services-details-1.html">Software Landing</a></h5>
              <p>By <a href="https://samar.dexignzone.com/xhtml/services-details-1.html">Jhone Doe</a></p>
          </div>
      </div>
  </div>
  <div class="port__item port__4">
      <img src="./images/pic4.jpg" alt="">
      <div class="port__overlay">
          <div class="port__icon">
              <a data-exthumbimage="./images/pic4.jpg" data-lg-size="2500-2500" class="lightimg"
              data-src="./images/pic4.jpg" data-sub-html="Design">
              <i class="la la-plus"></i>
              </a>
          </div>
          <div class="port__text">
              <h5><a href="https://samar.dexignzone.com/xhtml/services-details-1.html">Software Landing</a></h5>
              <p>By <a href="https://samar.dexignzone.com/xhtml/services-details-1.html">Jhone Doe</a></p>
          </div>
      </div>
  </div>
  <div class="port__item port__5">
      <img src="./images/pic5.jpg" alt="">
      <div class="port__overlay">
          <div class="port__icon">
              <a data-exthumbimage="./images/pic5.jpg" data-lg-size="2500-2500" class="lightimg"
              data-src="./images/pic5.jpg" data-sub-html="Design">
              <i class="la la-plus"></i>
              </a>
          </div>
          <div class="port__text">
              <h5><a href="https://samar.dexignzone.com/xhtml/services-details-1.html">Software Landing</a></h5>
              <p>By <a href="https://samar.dexignzone.com/xhtml/services-details-1.html">Jhone Doe</a></p>
          </div>
      </div>
  </div>
  <div class="port__item port__6">
      <img src="./images/pic6.jpg" alt="">
      <div class="port__overlay">
          <div class="port__icon">
              <a data-exthumbimage="./images/pic6.jpg" data-lg-size="2500-2500" class="lightimg"
              data-src="./images/pic6.jpg" data-sub-html="Design">
              <i class="la la-plus"></i>
              </a>
          </div>
          <div class="port__text">
              <h5><a href="https://samar.dexignzone.com/xhtml/services-details-1.html">Software Landing</a></h5>
              <p>By <a href="https://samar.dexignzone.com/xhtml/services-details-1.html">Jhone Doe</a></p>
          </div>
      </div>
  </div>
    </div>
</section> */}
      {/* PLAN */}
      {/* <section class="plan">
    <div class="plan__content">
  <div class="title">
      <h6>Choose Your Plan</h6>
      <h2>Choose Your Plan</h2>
  </div>
  <div class="plan__but">
      <span class="monthly">Monthly</span>
      <span class="yearly">Yearly</span>
  </div>
  <div class="plan__list">
      <div class="plan__item">
          <h3>Basic Plan</h3>
          <img src="./images/pic4_1.jpg" width="125" alt="#">
          <h2>$49<small>/Month</small></h2>
          <ul class="plan__listi">
              <li>
                  <i class="fa fa-check"></i>
                  <span>Graphic Design</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>Web Design</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>UI/UX</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>HTML/CSS</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>SEO Marketing</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>Business Analysis</span>
              </li>
          </ul>
          <a href="https://samar.dexignzone.com/xhtml/pricing-table-1.html"><button class="btn">START NOW</button></a>
      </div>
      <div class="plan__item">
          <h3>Standart Plan</h3>
          <img src="./images/pic5_1.jpg" width="125" alt="#">
          <h2>$99<small>/Month</small></h2>
          <ul class="plan__listi">
              <li>
                  <i class="fa fa-check"></i>
                  <span>Graphic Design</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>Web Design</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>UI/UX</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>HTML/CSS</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>SEO Marketing</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>Business Analysis</span>
              </li>
          </ul>
          <a href="https://samar.dexignzone.com/xhtml/pricing-table-1.html"><button class="btn">START NOW</button></a>
      </div>
      <div class="plan__item">
          <h3>Premium Plan</h3>
          <img src="./images/pic6_1.jpg" width="125" alt="#">
          <h2>$149<small>/Month</small></h2>
          <ul class="plan__listi">
              <li>
                  <i class="fa fa-check"></i>
                  <span>Graphic Design</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>Web Design</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>UI/UX</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>HTML/CSS</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>SEO Marketing</span>
              </li>
              <li>
                  <i class="fa fa-check"></i>
                  <span>Business Analysis</span>
              </li>
          </ul>
          <a href="https://samar.dexignzone.com/xhtml/pricing-table-1.html"><button class="btn">START NOW</button></a>
      </div>
  </div>
    </div>
</section> */}
      {/* CLIENT */}
      <section className="client">
        <div className="client__content">
          <div className="title">
            <h2>Khách Hàng Của Chúng Tôi Nói Gì?</h2>
          </div>
          <div className="testimonial-content">
            {/* Swiper */}
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
      </section>
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
      <a href="./" className="backtoTop cd-top text-replace js-cd-top">
        <i className="fa fa-arrow-up" />
      </a>
    </>
  );
};
export default Home;
