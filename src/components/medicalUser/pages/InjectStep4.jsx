import HeaderStep from "../HeadStep";
import { Link } from "react-router-dom";
import {useQuery} from "../../../hook/useQuery";
import {useSelector} from "react-redux";
import db from '../../../assets/db.json'

const InjectStep4 = () => {
  const query = useQuery()
  const id = query.get('id')

  const injectState = useSelector(state => state.inject)
  const city = db.province.find(pro => pro.idProvince === injectState.step1?.city)
  const district = db.district.find(dis => dis.idDistrict === injectState.step1?.district)
  const ward = db.commune.find(com => com.idCommune === injectState.step1?.ward)
  return (
    <>
      <HeaderStep />
      <main  id="main">
        <section

          className="breadcrumbs hiddentext"
          style={{ margin: " 0 auto", width: "100%" }}
        >
          <div  className="container">
            <div

              className="d-flex justify-content-between align-items-center"
            >
              <h2 >Đăng ký tiêm cá nhân</h2>
            </div>
          </div>
        </section>
        <section

          className="inner-page mt30"
          style={{ width: "100%" }}
        >
          <div  className="container mt-3">
            <div  className="rowUser bg-light mb-5 shadow">
              <div

                className="col-lg-3 col-6 p-2 border-right text-black-50"
              >
                <p  className="mb-1">
                  Bước 1
                </p>
               
                <h5  className="sfbold">
                  Thông tin cá nhân
                </h5>
              </div>
              <div

                className="col-lg-3 col-6 p-2 border-right text-black-50"
              >
                <p  className="mb-1">
                  Bước 2
                </p>
                <h5  className="sfbold">
                  Tiền sử bệnh
                </h5>
              </div>
              <div

                className="col-lg-3 col-6 p-2 border-right text-black-50"
              >
                <p  className="mb-1">
                  Bước 3
                </p>
                <h5  className="sfbold">
                  Phiếu đồng ý tiêm
                </h5>
              </div>
              <div

                className="col-lg-3 col-6 p-2 border-right rounded bgstep"
              >
                <p  className="mb-1">
                  Bước 4
                </p>
                <h5  className="sfbold">
                  Hoàn thành
                </h5>
              </div>
            </div>
            
            <app-step-four  >
              <div  className="rowUser">
                <div  className="col-lg-12">
                  <div

                    className="rowUser"
                    style={{ height: "auto" }}
                  >
                    <div

                      className="col-12 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <div  className="rowUser">
                        <div

                          className="col-12 text-center mb-5"
                        >
                          <h5  className="sfbold">
                            Đăng ký tiêm chủng COVID-19 thành công. Mã đặt tiêm
                            của bạn là{" "}
                            <span className="text-red" style={{color:'red'}}>
                             
                              {id}
                            
                            </span>
                            .
                          </h5>
                          <p >
                            Cảm ơn quý khách đã đăng ký tiêm chủng vắc xin
                            COVID-19. Hiện tại Bộ y tế đang tiến hành thu thập
                            nhu cầu và thông tin để lập danh sách đối tượng đăng
                            ký tiêm vắc xin COVID-19 theo từng địa bàn. Chúng
                            tôi sẽ liên hệ với quý khách theo số điện thoại{" "}
                            <span className="text-primary sfbold" style={{color: 'red'}}>{injectState.step1?.phoneNumber}</span>
                            {" "}
                            khi có kế hoạch tiêm trong thời gian sớm nhất.
                          </p>
                          <br  />
                          <p >
                            Mời bạn tải ứng dụng "SỔ SỨC KHỎE ĐIỆN TỬ" <a href="https://hssk.kcb.vn/#/sskdt">tại đây</a> để theo dõi kết quả đăng ký tiêm và nhận chứng nhận
                            tiêm chủng COVID-19
                          </p>
                        </div>
                        <hr  />
                        <div  className="col-lg-4 col-md-6">
                          <p  className="mb-1">
                            Họ và tên : {injectState.step1?.name}
                          </p>
                          <p  className="sfbold text-dark" />
                        </div>
                        <div  className="col-lg-4 col-md-6">
                          <p  className="mb-1">
                            Ngày sinh : {injectState.step1?.dateOfBirth}
                          </p>
                          <p  className="sfbold text-dark" />
                        </div>
                        <div  className="col-lg-4 col-md-6">
                          <p  className="mb-1">
                            Giới tính : {parseInt(injectState.step1?.sex) ? 'Nữ' : 'Nam'}
                          </p>
                          
                        </div>
                        <div  className="col-lg-4 col-md-6">
                          <p  className="mb-1">
                            Số điện thoại : {injectState.step1?.phoneNumber}
                          </p>
                          <p  className="sfbold text-dark" />
                        </div>
                        <div  className="col-lg-4 col-md-6">
                          <p  className="mb-1">
                            CCCD/Mã định danh công dân : {injectState.step1?.identityCode}
                          </p>
                          <p  className="sfbold text-dark" />
                        </div>
                        <div  className="col-lg-4 col-md-6">
                          <p  className="mb-1">
                            Số thẻ BHYT : {injectState.step1?.socialInsurance}
                          </p>
                          <p  className="sfbold text-dark" />
                        </div>
                        <div  className="col-lg-12 col-md-6">
                          <p  className="mb-1">
                            Địa chỉ hiện tại: {injectState.step1?.address}
                          </p>
                          <p  className="sfbold text-dark" />
                        </div>
                        <div  className="col-lg-4 col-md-6">
                          <p  className="mb-1">
                            Tỉnh/Thành phố : {city.name}
                          </p>
                          <p  className="sfbold text-dark" />
                        </div>
                        <div  className="col-lg-4 col-md-6">
                          <p  className="mb-1">
                            Quận/Huyện : {district.name}
                          </p>
                          <p  className="sfbold text-dark" />
                        </div>
                        <div  className="col-lg-4 col-md-6">
                          <p  className="mb-1">
                            Xã/Phường : {ward.name}
                          </p>
                          <p  className="sfbold text-dark" />
                        </div>
                        <div  className="col-lg-4 col-md-6" />
                        <div

                          className="col-12 text-center mt-2 mb-2"
                        >
                          <Link to='./'>
                          <button

                            className="btn btn-primary rounded radius20 p-2 wbtn mr-4"
                            type="button"
                            tabIndex={0}
                          >
                            <i

                              className="fa fa-chervon-left"
                            />
                            Trang chủ{" "}
                          </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </app-step-four>
          </div>
        </section>
      </main>
    </>
  );
};

export default InjectStep4;
