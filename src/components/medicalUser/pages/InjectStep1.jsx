import HeaderStep from "../HeadStep";
import { Link } from "react-router-dom";

const Inject = () => {
  return (
    <>
      <HeaderStep />
      <main _ngcontent-mjb-c8 id="main">
        <section
          _ngcontent-mjb-c8
          className="breadcrumbs hiddentext"
          style={{ margin: " 0 auto", width: "100%" }}
        >
          <div _ngcontent-mjb-c8 className="container">
            <div
              _ngcontent-mjb-c8
              className="d-flex justify-content-between align-items-center"
            >
              <h2 _ngcontent-mjb-c8>Đăng ký tiêm cá nhân</h2>
              {/* <ol _ngcontent-mjb-c8>
                <li _ngcontent-mjb-c8>
                  <a _ngcontent-mjb-c8 href="/portal">
                    Trang chủ
                  </a>
                </li>
                <li _ngcontent-mjb-c8>Đăng ký tiêm</li>
              </ol> */}
            </div>
          </div>
        </section>
        <section
          _ngcontent-mjb-c8
          className="inner-page mt30"
          style={{ width: "100%" }}
        >
          <div _ngcontent-mjb-c8 className="container mt-3">
            <div _ngcontent-mjb-c8 className="rowUser bg-light mb-5 shadow">
              <div
                _ngcontent-mjb-c8
                className="col-lg-3 col-6 p-2 border-right rounded bgstep"
              >
                <p _ngcontent-mjb-c8 className="mb-1">
                  Bước 1
                </p>
                <h5 _ngcontent-mjb-c8 className="sfbold">
                  Thông tin cá nhân
                </h5>
              </div>
              <div
                _ngcontent-mjb-c8
                className="col-lg-3 col-6 p-2 border-right text-black-50"
              >
                <p _ngcontent-mjb-c8 className="mb-1">
                  Bước 2
                </p>
                <h5 _ngcontent-mjb-c8 className="sfbold">
                  Tiền sử bệnh
                </h5>
              </div>
              <div
                _ngcontent-mjb-c8
                className="col-lg-3 col-6 p-2 border-right text-black-50"
              >
                <p _ngcontent-mjb-c8 className="mb-1">
                  Bước 3
                </p>
                <h5 _ngcontent-mjb-c8 className="sfbold">
                  Phiếu đồng ý tiêm
                </h5>
              </div>
              <div
                _ngcontent-mjb-c8
                className="col-lg-3 col-6 p-2 text-black-50"
              >
                <p _ngcontent-mjb-c8 className="mb-1">
                  Bước 4
                </p>
                <h5 _ngcontent-mjb-c8 className="sfbold">
                  Hoàn thành
                </h5>
              </div>
            </div>
            <app-step-one _ngcontent-mjb-c8 _nghost-mjb-c9>
              <div _ngcontent-mjb-c9 className="rowUser">
                <div _ngcontent-mjb-c9 className="col-12">
                  <div _ngcontent-mjb-c9 className="rowUser">
                    <div
                      _ngcontent-mjb-c9
                      className="col-12 text-center mb-3"
                    ></div>
                  </div>
                  <div _ngcontent-mjb-c9 className="rowUser">
                    <form
                      _ngcontent-mjb-c9
                      noValidate
                      role="form"
                      className="ng-pristine ng-invalid ng-touched"
                    >
                      {/**/}
                      <div
                        _ngcontent-mjb-c9
                        className="col-12 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay={300}
                      >
                        <div _ngcontent-mjb-c9 className="rowUser">
                          <div _ngcontent-mjb-c9 className="col-lg-3 col-md-3">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Đăng kí mũi tiêm thứ{" "}
                                <span _ngcontent-mjb-c9 className="text-danger">
                                  (*)
                                </span>
                              </label>
                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                              >
                                <option value="sds">Mũi tiêm thứ nhất</option>
                                <option value="sds">Mũi tiêm tiếp theo</option>
                              </select>
                              {/**/}
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-12 mb-2">
                            <h6 _ngcontent-mjb-c9 className="sfbold">
                              1. Thông tin người đăng ký tiêm
                            </h6>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Họ và tên{" "}
                                <span _ngcontent-mjb-c9 className="text-danger">
                                  (*)
                                </span>
                              </label>
                              <input
                                _ngcontent-mjb-c9
                                aria-describedby="helpId"
                                className="form-control ng-pristine ng-invalid ng-touched"
                                formcontrolname="fullname"
                                id="fullname"
                                type="text"
                                placeholder="Họ và tên"
                              />
                              {/**/}
                              <div
                                _ngcontent-mjb-c9
                                className="ng-star-inserted"
                              >
                                {/**/}
                                <small
                                  _ngcontent-mjb-c9
                                  className="form-text text-danger ng-star-inserted"
                                >
                                  Họ và tên không được bỏ trống{" "}
                                </small>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Ngày sinh{" "}
                                <span _ngcontent-mjb-c9 className="text-danger">
                                  (*)
                                </span>
                              </label>
                              <input
                                _ngcontent-mjb-c9
                                className="form-control w-100 ng-untouched ng-pristine ng-invalid"
                                formcontrolname="dateOfBirth"
                                placeholder="Ngày/Tháng/Năm"
                                aria-haspopup="dialog"
                                min="1900-01-31T17:17:56Z"
                                max="2022-05-16T09:46:22Z"
                              />
                              <mat-datepicker-toggle
                                _ngcontent-mjb-c9
                                className="iconfix mat-datepicker-toggle"
                                matsuffix
                                tabIndex={-1}
                              >
                                <button
                                  className="mat-focus-indicator mat-icon-button mat-button-base"
                                  mat-icon-button
                                  type="button"
                                  aria-haspopup="dialog"
                                  aria-label="Open calendar"
                                  tabIndex={0}
                                >
                                  <span className="mat-button-wrapper">
                                    {/**/}
                                    <svg
                                      className="mat-datepicker-toggle-default-icon ng-star-inserted"
                                      fill="currentColor"
                                      focusable="false"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      width="24px"
                                    >
                                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                    </svg>
                                  </span>
                                  <div
                                    className="mat-button-ripple mat-ripple mat-button-ripple-round"
                                    matripple
                                  />
                                  <div className="mat-button-focus-overlay" />
                                </button>
                              </mat-datepicker-toggle>
                              <mat-datepicker _ngcontent-mjb-c9 />
                              {/**/}
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Giới tính{" "}
                                <span _ngcontent-mjb-c9 className="text-danger">
                                  (*)
                                </span>
                              </label>
                              <ng-select
                                _ngcontent-mjb-c9
                                formcontrolname="gender"
                                role="listbox"
                                className="ng-select ng-select-single ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-invalid"
                              >
                                <div className="ng-select-container">
                                  <div className="ng-value-container">
                                    <div className="ng-placeholder">

                                      <input type="radio" name='gender' />
                                      Nam
                                      <input type="radio" name='gender' />
                                      Nữ

                                    </div>

                                    {/* <div className="ng-input">
                                      <input
                                        role="combobox"
                                        type="text"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        autoComplete="acce14c82fb6"
                                        aria-expanded="false"
                                      />
                                    </div> */}
                                  </div>
                                  {/**/}
                                  {/**/}
                                  <span className="ng-arrow-wrapper">
                                    <span className="ng-arrow" />
                                  </span>
                                </div>
                                {/**/}
                              </ng-select>
                              {/**/}
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Số điện thoại {/**/}
                              </label>
                              <input
                                _ngcontent-mjb-c9
                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-invalid"
                                formcontrolname="phoneNumber"
                                nowhitespace
                                type="text"
                                placeholder="Số điện thoại"
                              />
                              {/**/}
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Email{" "}
                              </label>
                              <input
                                _ngcontent-mjb-c9
                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-valid"
                                formcontrolname="email"
                                nowhitespace
                                type="email"
                                placeholder="Email"
                              />
                              {/**/}
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-6 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                CCCD/Mã định danh công dân {/**/}
                                <span
                                  _ngcontent-mjb-c9
                                  className="text-danger ng-star-inserted"
                                >
                                  (*)
                                </span>
                              </label>
                              <input
                                _ngcontent-mjb-c9
                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-invalid"
                                formcontrolname="identification"
                                nowhitespace
                                type="text"
                                placeholder="CCCD/Mã định danh công dân"
                              />
                              {/**/}
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Số thẻ BHYT{" "}
                              </label>
                              <input
                                _ngcontent-mjb-c9
                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-valid"
                                formcontrolname="healthInsuranceNumber"
                                nowhitespace
                                type="text"
                                placeholder="Số thẻ BHYT"
                              />
                              {/**/}
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Nghề nghiệp{" "}
                              </label>
                              <input
                                _ngcontent-mjb-c9
                                className="form-control ng-untouched ng-pristine ng-valid"
                                formcontrolname="jobName"
                                maxLength={200}
                                type="text"
                                placeholder="Nghề nghiệp"
                              />
                              {/**/}
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Đơn vị công tác{" "}
                              </label>
                              <input
                                _ngcontent-mjb-c9
                                className="form-control ng-untouched ng-pristine ng-valid"
                                formcontrolname="workplace"
                                maxLength={255}
                                type="text"
                                placeholder="Đơn vị công tác"
                              />
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-6 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                Địa chỉ hiện tại
                              </label>
                              <input
                                _ngcontent-mjb-c9
                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-valid"
                                formcontrolname="address"
                                maxLength={255}
                                type="text"
                                placeholder="Địa chỉ hiện tại"
                              />
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                Tỉnh/Thành phố
                                <span _ngcontent-mjb-c9 className="text-danger">
                                  (*)
                                </span>
                              </label>

                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                              >
                                <option value="sds">Đà Nẵng</option>
                              </select>
                              {/**/}
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                Quận/Huyện{" "}
                                <span _ngcontent-mjb-c9 className="text-danger">
                                  (*)
                                </span>
                              </label>
                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                              >
                                <option value="sds">dsad</option>
                              </select>
                              {/**/}
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-6 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                Xã/Phường
                                <span _ngcontent-mjb-c9 className="text-danger">
                                  (*)
                                </span>
                              </label>

                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                              >
                                <option value="choose" >zz</option>
                              </select>
                              {/**/}
                            </div>
                          </div>
                          {/* <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Dân tộc{" "}
                              </label>
                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                              >
                                <option value="sds">dsad</option>
                              </select>
                            </div>
                          </div> */}
                          {/* <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Quốc tịch{" "}
                              </label>
                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                              >
                                <option value="sds">dsad</option>
                              </select>
                            </div>
                          </div> */}
                          {/* <div _ngcontent-mjb-c9 className="col-lg-6 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Nhóm ưu tiên{" "}
                                <span _ngcontent-mjb-c9 className="text-danger">
                                  (*)
                                </span>
                              </label>
                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                              >
                                <option value="sds">dsad</option>
                              </select>
                            </div>
                          </div> */}
                          {/* <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Họ và tên người giám hộ 
                                <span
                                  _ngcontent-mjb-c9
                                  className="text-danger ng-star-inserted"
                                >
                                  (*)
                                </span>
                              </label>
                              <input
                                _ngcontent-mjb-c9
                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-invalid"
                                formcontrolname="guardianFullName"
                                type="text"
                                placeholder="Họ và tên người giám hộ"
                              />
                             
                            </div>
                          </div> */}
                          {/* <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Quan hệ 
                                <span
                                  _ngcontent-mjb-c9
                                  className="text-danger ng-star-inserted"
                                >
                                  (*)
                                </span>
                              </label>
                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                              >
                                <option value="sds">dsad</option>
                              </select>
                             
                            </div>
                          </div> */}
                          {/* <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Số điện thoại người giám hộ 
                                <span
                                  _ngcontent-mjb-c9
                                  className="text-danger ng-star-inserted"
                                >
                                  (*)
                                </span>
                              </label>
                              <input
                                _ngcontent-mjb-c9
                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-invalid"
                                formcontrolname="guardianPhoneNumber"
                                nowhitespace
                                type="text"
                                placeholder="Số điện thoại người giám hộ"
                              />
                              
                            </div>
                          </div> */}
                          <div _ngcontent-mjb-c9 className="col-12 mb-2">
                            <h6 _ngcontent-mjb-c9 className="sfbold">
                              2. Thông tin đăng ký tiêm chủng
                            </h6>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group mb-0">
                              <label _ngcontent-mjb-c9>
                                {" "}
                                Ngày muốn được tiêm (dự kiến){" "}
                              </label>
                              <input
                                _ngcontent-mjb-c9
                                className="form-control w-100 ng-untouched ng-pristine ng-valid"
                                formcontrolname="dateOfInjectRegistration"
                                placeholder="Ngày/Tháng/Năm"
                                aria-haspopup="dialog"
                                min="1900-01-31T17:17:56Z"
                              />

                              {/**/}
                            </div>
                          </div>
                          <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
                            <div _ngcontent-mjb-c9 className="form-group">
                              <label _ngcontent-mjb-c9 htmlFor>
                                {" "}
                                Buổi tiêm mong muốn{" "}
                              </label>
                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                              >
                                <option value="Choose">Buổi sáng</option>
                                <option value="Choose">Buổi tối</option>
                                <option value="Choose">Cả ngày</option>
                              </select>
                            </div>
                          </div>
                          {/**/}
                          <div _ngcontent-mjb-c9 className="col-12" style={{ color: "red" }}>
                            <h6
                              _ngcontent-mjb-c9
                              className="sfbold text-danger"
                            >
                              Lưu ý:
                            </h6>
                            <ul _ngcontent-mjb-c9 className="text-danger">
                              <li _ngcontent-mjb-c9>
                                {" "}
                                Việc đăng ký thông tin hoàn toàn bảo mật và phục
                                vụ cho chiến dịch tiêm chủng Vắc xin COVID - 19{" "}
                              </li>
                              <li _ngcontent-mjb-c9>
                                {" "}
                                Xin vui lòng kiểm tra kỹ các thông tin bắt
                                buộc(VD: Họ và tên, Ngày tháng năm sinh, Số điện
                                thoại, CCCD/Mã định danh công dân/HC ...){" "}
                              </li>
                              <li _ngcontent-mjb-c9>
                                {" "}
                                Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn
                                hiểu và đồng ý chịu trách nhiệm với các thông
                                tin đã cung cấp.{" "}
                              </li>
                              <li _ngcontent-mjb-c9>
                                {" "}
                                Nếu bạn dưới 18 tuổi, vui lòng nhập số điện
                                thoại của người giám hộ để tra cứu{" "}
                              </li>
                            </ul>
                          </div>
                          <div
                            _ngcontent-mjb-c9
                            className="col-12 text-center mt-2 mb-2"
                          >
                            <button
                              _ngcontent-mjb-c9
                              className="btn btn-outline-danger  rounded radius20 p-2 wbtn mr-4"
                              type="button"
                            >
                              <i
                                _ngcontent-mjb-c9
                                className="fa fa-chervon-left"
                              />{" "}
                              Hủy bỏ{" "}
                            </button>
                            <Link to={"/Inject-step2"}>
                              <button
                                _ngcontent-mjb-c11
                                className="btn-primary btn rounded radius20 p-2 wbtn"
                                type="button"

                              >
                                {" "}
                                Xác nhận{" "}
                                <i
                                  _ngcontent-mjb-c11
                                  className="icofont-rounded-right ml-0"
                                />
                              </button>
                            </Link>
                          </div>

                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </app-step-one>

          </div>
        </section>
      </main>
    </>
  );
};

export default Inject;
