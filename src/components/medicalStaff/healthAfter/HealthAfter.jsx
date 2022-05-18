import React from 'react'
import { Link } from 'react-router-dom'

export default function HealthAfter() {
  return (
    <>
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
              <h2 _ngcontent-mjb-c8>Sức khoẻ sau khi tiêm chủng</h2>
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


                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </app-step-one>
            <app-step-two _ngcontent-mjb-c8 _nghost-mjb-c10 >
              <div _ngcontent-mjb-c10 className="row">
                <div _ngcontent-mjb-c10 className="col-lg-12">
                  <div _ngcontent-mjb-c10 className="row">
                    <div
                      _ngcontent-mjb-c10
                      className="col-lg-12 col-md-12 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <table
                        _ngcontent-mjb-c10
                        className="table table-striped table-hover"
                      >
                        <thead _ngcontent-mjb-c10>
                          <tr _ngcontent-mjb-c10>
                            <th _ngcontent-mjb-c10 style={{ width: "40%" }}>
                              Triệu chứng
                            </th>
                            <th _ngcontent-mjb-c10>Ghi thêm</th>
                            <th _ngcontent-mjb-c10 className="text-center">
                              Có
                            </th>
                            <th _ngcontent-mjb-c10 className="text-center">
                              Không
                            </th>
                            <th _ngcontent-mjb-c10 className="text-center">
                              Không rõ
                            </th>
                          </tr>
                        </thead>
                        <tbody _ngcontent-mjb-c10>
                          {/**/}
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="row" style={{color:'red'}}>
                              Các triệu chứng nhẹ
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="2_yes"
                                className="ng-untouched ng-pristine ng-valid"
                                hidden
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="2_no"
                                className="ng-untouched ng-pristine ng-valid"
                                hidden
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="2_other"
                                className="ng-untouched ng-pristine ng-valid"
                                hidden
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="row">
                              1. Đau, sưng tại chỗ tiêm
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ loại tác nhân dị ứng"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="1_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="1_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="1_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              2. Nôn/ buồn nôn
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="row">
                              3. Tiêu chảy, đau bụng
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ loại vắc xin"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="3_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="3_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="3_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              4. Sốt &lt; 39độ y
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              5. Sốt &gt;= 39độ
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="row">
                              6. Đau họng/ Chảy nước mũi
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ loại bệnh mắc"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="6_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="6_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="6_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="row">
                              7. Ớn lạnh
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ loại bệnh mắc"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="7_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="7_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="7_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              8. Đau đầu
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="row" style={{color:'red'}}>
                              Các triệu chứng nặng
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="2_yes"
                                className="ng-untouched ng-pristine ng-valid"
                                hidden
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="2_no"
                                className="ng-untouched ng-pristine ng-valid"
                                hidden
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="2_other"
                                className="ng-untouched ng-pristine ng-valid"
                                hidden
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              9. Phát ban
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              10. Tê quanh môi hoặc lưỡi
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              11. Ngứa họng, căng cứng, nghẹn họng, nói khó
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              12. Đau đầu kéo dài, dữ dội, li bì
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              13. Tức ngực, đánh trống ngực kéo dài, ngất
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              14. Nôn, đau quặn bụng, tiêu chảy
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              15. Khó thở, thở rít, khò khè, tím tái
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              16. Chóng mặt, choáng, xây xẩm, cảm giác muốn ngã, mệt bất thường
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              17. Đau dữ dội bất thường tại một hay nhiều nơi mà không do va chạm, sang chấn
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              18. Sốt cao liên tục trên 39 độ mà không đáp ứng thuốc hạ sốt
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>
                          <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                            <td _ngcontent-mjb-c10 scope="rowUser">
                              19. Triệu chứng khác
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              {/**/}
                              <input
                                _ngcontent-mjb-c10
                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                maxLength={1000}
                                type="text"
                                placeholder="Nếu có, ghi rõ"

                              />
                              {/**/}
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_yes"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_no"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                            <td _ngcontent-mjb-c10 className="text-center">
                              <input
                                _ngcontent-mjb-c10
                                type="radio"
                                id="12_other"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div _ngcontent-mjb-c11 className="col-12 text-center">
                    <Link to={"/ListHealthAfter"}>
                      <button
                        _ngcontent-mjb-c11
                        className="btn-secondary btn rounded radius20 p-2 mr-3 wbtn"
                        type="button"
                      >
                        <i
                          _ngcontent-mjb-c11
                          className="icofont-rounded-left ml-0"
                        />{" "}
                        Quay lại{" "}
                      </button>
                    </Link>
                    <Link to={"/ListHealthAfter"}>
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
            </app-step-two>


          </div>
        </section>
      </main>
    </>
  )
}
