import React, {useEffect, useState} from 'react'
import './UserRegisterForm.css'
import { useHistory } from 'react-router-dom'
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {registerInjectionApi} from "../../../api/registerInjectionApi";
import {afterRegisterInjectionApi} from "../../../api/afterRegisterInjectionApi";
import db from "../../../assets/db.json";
import {useQuery} from "../../../hook/useQuery";

export default function UserRegisterForm() {
  const params = useParams()
  const [data, setData] = useState({})
  const history = useHistory()
  const query = useQuery()

  const city = db.province.find(pro => pro.idProvince === data?.city)
  const district = db.district.find(dis => dis.idDistrict === data?.district)
  const ward = db.commune.find(com => com.idCommune === data?.ward)

  useEffect(() => {
    async function getInfo() {
      const res = await registerInjectionApi.getInfoById(params?.id)
      setData(res.data.data)
    }
    getInfo()
  },[])

  const cancelHandler = async () => {
    await registerInjectionApi.deleteById(params?.id)
    history.push('/registervaccine')
  }

  const submitHandler = async () => {
    const userInfo = {
      name: data?.name,
      dateOfBirth: data?.date_of_birth,
      sex: data?.sex,
      phoneNumber: data?.phone_number,
      email: data?.email,
      identityCode: data?.identity_code,
      socialInsurance: data?.social_insurance,
      job: data?.job,
      workplace: data?.workplace,
      address: data?.address,
      city: data?.city,
      district: data?.district,
      ward: data?.ward,
    }
    await registerInjectionApi.deleteById(params?.id)
    await afterRegisterInjectionApi.create(userInfo)
    history.push('/listAfterVac')
  }

  return (
    <>
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

                className="col-lg-3 col-6 p-2 border-right rounded bgstep"
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

                className="col-lg-3 col-6 p-2 text-black-50"
              >
                <p  className="mb-1">
                  Bước 4
                </p>
                <h5  className="sfbold">
                  Hoàn thành
                </h5>
              </div>
            </div>
            <app-step-one >
              <div  className="rowUser">
                <div  className="col-12">
                  <div  className="rowUser">
                    <div

                      className="col-12 text-center mb-3"
                    ></div>
                  </div>
                  <div  className="rowUser">
                    <form

                      noValidate
                      role="form"
                      className="ng-pristine ng-invalid ng-touched"
                    >
                      {/**/}
                      <div

                        className="col-12 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay={300}
                      >
                        <div  className="rowUser">
                          <div  className="col-lg-3 col-md-3">
                            <div  className="form-group">
                              <label  htmlFor>
                                {" "}
                                Đăng kí mũi tiêm thứ{" "}
                                <span  className="text-danger">
                                  (*)
                                </span>
                              </label>
                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                                value={data?.the_second_time}
                              >
                                <option value="1">Mũi tiêm thứ nhất</option>
                                <option value="2">Mũi tiêm tiếp theo</option>
                              </select>
                              {/**/}
                            </div>
                          </div>
                          <div  className="col-12 mb-2">
                            <h6  className="sfbold">
                              1. Thông tin người đăng ký tiêm
                            </h6>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                {" "}
                                Họ và tên{" "}
                                <span  className="text-danger">
                                  (*)
                                </span>
                              </label>
                              <input

                                aria-describedby="helpId"
                                className="form-control ng-pristine ng-invalid ng-touched"
                                id="fullname"
                                type="text"
                                placeholder="Họ và tên"
                                value={data?.name}
                                disabled
                              />
                              {/**/}
                              <div

                                className="ng-star-inserted"
                              >
                                {/**/}
                              </div>
                            </div>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                {" "}
                                Ngày sinh{" "}
                                <span  className="text-danger">
                                  (*)
                                </span>
                              </label>
                              <input
                                className="form-control w-100 ng-untouched ng-pristine ng-invalid"
                                placeholder="Ngày/Tháng/Năm"
                                value={data?.date_of_birth}
                                disabled
                              />
                              {/**/}
                            </div>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                {" "}
                                Giới tính{" "}
                                <span  className="text-danger">
                                  (*)
                                </span>
                              </label>
                              <ng-select

                                formcontrolname="gender"
                                role="listbox"
                                className="ng-select ng-select-single ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-invalid"
                              >
                                <div className="ng-select-container">
                                  <div className="ng-value-container">
                                    <div className="ng-placeholder">

                                      <input type="radio" name='gender' checked={parseInt(data?.sex)} disabled/>
                                      Nam
                                      {" "}
                                      <input type="radio" name='gender' checked={parseInt(data?.sex)} disabled/>
                                      Nữ

                                    </div>

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
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                {" "}
                                Số điện thoại {/**/}
                              </label>
                              <input

                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-invalid"
                                type="text"
                                placeholder="Số điện thoại"
                                value={data?.phone_number}
                                disabled
                              />
                              {/**/}
                            </div>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                {" "}
                                Email{" "}
                              </label>
                              <input

                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-valid"
                                type="email"
                                placeholder="Email"
                                value={data?.email}
                                disabled
                              />
                              {/**/}
                            </div>
                          </div>
                          <div  className="col-lg-6 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                {" "}
                                CCCD/Mã định danh công dân {/**/}
                                <span

                                  className="text-danger ng-star-inserted"
                                >
                                  (*)
                                </span>
                              </label>
                              <input

                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-invalid"
                                type="text"
                                placeholder="CCCD/Mã định danh công dân"
                                value={data?.identity_code}
                                disabled
                              />
                              {/**/}
                            </div>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                {" "}
                                Số thẻ BHYT{" "}
                              </label>
                              <input

                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-valid"
                                type="text"
                                placeholder="Số thẻ BHYT"
                                value={data?.social_insurance}
                                disabled
                              />
                              {/**/}
                            </div>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                {" "}
                                Nghề nghiệp{" "}
                              </label>
                              <input

                                className="form-control ng-untouched ng-pristine ng-valid"
                                maxLength={200}
                                type="text"
                                placeholder="Nghề nghiệp"
                                value={data?.job}
                                disabled
                              />
                              {/**/}
                            </div>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                {" "}
                                Đơn vị công tác{" "}
                              </label>
                              <input

                                className="form-control ng-untouched ng-pristine ng-valid"
                                maxLength={255}
                                type="text"
                                placeholder="Đơn vị công tác"
                                value={data?.workplace}
                                disabled
                              />
                            </div>
                          </div>
                          <div  className="col-lg-6 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                Địa chỉ hiện tại
                              </label>
                              <input

                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-valid"
                                maxLength={255}
                                type="text"
                                placeholder="Địa chỉ hiện tại"
                                value={data?.address}
                                disabled
                              />
                            </div>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                Tỉnh/Thành phố
                                <span  className="text-danger">
                                  (*)
                                </span>
                              </label>

                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                                disabled
                              >
                                <option value={data?.city}>{city?.name}</option>
                              </select>
                              {/**/}
                            </div>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                Quận/Huyện{" "}
                                <span  className="text-danger">
                                  (*)
                                </span>
                              </label>
                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                                disabled
                              >
                                <option value={data?.district} >{district?.name} </option>
                              </select>
                              {/**/}
                            </div>
                          </div>
                          <div  className="col-lg-6 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                Xã/Phường
                                <span  className="text-danger">
                                  (*)
                                </span>
                              </label>

                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                                disabled
                              >
                                <option value={data?.ward} >{ward?.name}</option>
                              </select>
                              {/**/}
                            </div>
                          </div>
                          <div  className="col-12 mb-2">
                            <h6  className="sfbold">
                              2. Thông tin đăng ký tiêm chủng
                            </h6>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group mb-0">
                              <label >
                                {" "}
                                Ngày muốn được tiêm (dự kiến){" "}
                              </label>
                              <input

                                className="form-control w-100 ng-untouched ng-pristine ng-valid"
                                placeholder="Ngày/Tháng/Năm"
                                value={data?.date_injection}
                                disabled
                              />

                              {/**/}
                            </div>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                {" "}
                                Buổi tiêm mong muốn{" "}
                              </label>
                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                                value={data?.time_of_day}
                                disabled
                              >
                                <option value="Morning">Buổi sáng</option>
                                <option value="Afternoon">Buổi chiều</option>
                                <option value="All day">Cả ngày</option>
                              </select>
                            </div>
                          </div>
                          {/**/}
                          <div  className="col-12" style={{ color: "red" }}>
                            <h6

                              className="sfbold text-danger"
                            >
                              Lưu ý:
                            </h6>
                            <ul  className="text-danger">
                              <li >
                                {" "}
                                Việc đăng ký thông tin hoàn toàn bảo mật và phục
                                vụ cho chiến dịch tiêm chủng Vắc xin COVID - 19{" "}
                              </li>
                              <li >
                                {" "}
                                Xin vui lòng kiểm tra kỹ các thông tin bắt
                                buộc(VD: Họ và tên, Ngày tháng năm sinh, Số điện
                                thoại, CCCD/Mã định danh công dân/HC ...){" "}
                              </li>
                              <li >
                                {" "}
                                Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn
                                hiểu và đồng ý chịu trách nhiệm với các thông
                                tin đã cung cấp.{" "}
                              </li>
                              <li >
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
            <app-step-two   >
              <div  className="row">
                <div  className="col-lg-12">
                  <div  className="row">
                    <div

                      className="col-lg-12 col-md-12 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <table

                        className="table table-striped table-hover"
                      >
                        <thead >
                          <tr >
                            <th  style={{ width: "40%" }}>
                              Tiền sử
                            </th>
                            <th >Triệu chứng</th>
                            <th  className="text-center">
                              Có
                            </th>
                            <th  className="text-center">
                              Không
                            </th>
                            <th  className="text-center">
                              Không rõ
                            </th>
                          </tr>
                        </thead>
                        <tbody >
                          {/**/}
                          <tr  className="ng-star-inserted">
                            <td  scope="row">
                              1. Tiền sử phản vệ từ độ 2 trở lên
                            </td>
                            <td  className="text-center">
                              {/**/}
                              <input

                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                type="text"
                                placeholder="Nếu có, ghi rõ loại tác nhân dị ứng"
                                disabled
                                value={data?.pre_histories?.name_1}
                              />
                              {/**/}
                            </td>
                            <td  className="text-center">
                              <input
                                type="radio"
                                className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                checked={data?.pre_histories?.status_1 === 1}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                type="radio"
                                className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                checked={data?.pre_histories?.status_1  === 2}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                type="radio"
                                className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                checked={data?.pre_histories?.status_1 === 3}
                              />
                            </td>
                          </tr>
                          <tr  className="ng-star-inserted">
                            <td  scope="row">
                              2. Tiền sử bị COVID-19 trong vòng 6 tháng
                            </td>
                            <td  className="text-center">
                            </td>
                            <td  className="text-center">
                              <input
                                type="radio"
                                className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                checked={data?.pre_histories?.status_2 === 1}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                type="radio"
                                className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                checked={data?.pre_histories?.status_2 === 2}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                type="radio"
                                className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                checked={data?.pre_histories?.status_2 === 3}
                              />
                            </td>
                          </tr>
                          <tr  className="ng-star-inserted">
                            <td  scope="row">
                              3. Tiền sử tiêm vắc xin khác trong 14 ngày qua
                            </td>
                            <td  className="text-center">
                              {/**/}
                              <input

                                  className="form-control ng-untouched ng-pristine ng-star-inserted"
                                  type="text"
                                  placeholder="Nếu có, ghi rõ loại tác nhân dị ứng"
                                  disabled
                                  value={data?.pre_histories?.name_3}
                              />
                              {/**/}
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_3 === 1}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_3 === 2}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_3 === 3}
                              />
                            </td>


                          </tr>
                          <tr  className="ng-star-inserted">
                            <td  scope="row">
                              4. Tiền sử suy giảm miễn dịch, ung thư giai đoạn
                              cuối, cắt lách, xơ gan mất bù ...
                            </td>
                            <td  className="text-center">
                              {/**/}
                              {/**/}
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_4 === 1}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_4 === 2}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_4 === 3}
                              />
                            </td>
                          </tr>
                          <tr  className="ng-star-inserted">
                            <td  scope="row">
                              5. Đang dùng thuốc ức chế miễn dịch, corticoid
                              liều ca (tương đương hoặc hơn 2mg
                              prednisolon/kg/ngày trong ít nhất 7 ngày) hoặc
                              điều trị hóa trị, xạ trị
                            </td>
                            <td  className="text-center">
                              {/**/}
                              {/**/}
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_5 === 1}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_5 === 2}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_5 === 3}
                              />
                            </td>

                          </tr>
                          <tr  className="ng-star-inserted">
                            <td  scope="row">
                              6. Bệnh cấp tính
                            </td>
                            <td  className="text-center">
                              {/**/}
                              <input

                                  className="form-control ng-untouched ng-pristine ng-star-inserted"
                                  type="text"
                                  placeholder="Nếu có, ghi rõ loại tác nhân dị ứng"
                                  disabled
                                  value={data?.pre_histories?.name_6}
                              />
                              {/**/}
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_6 === 1}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_6 === 2}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_6 === 3}
                              />
                            </td>
                          </tr>
                          <tr  className="ng-star-inserted">
                            <td  scope="row">
                              7. Tiền sử bệnh mạn tính, đang tiến triển
                            </td>
                            <td  className="text-center">
                              {/**/}
                              <input

                                  className="form-control ng-untouched ng-pristine ng-star-inserted"
                                  type="text"
                                  placeholder="Nếu có, ghi rõ loại tác nhân dị ứng"
                                  disabled
                                  value={data?.pre_histories?.name_7}
                              />
                              {/**/}
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_7 === 1}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_7 === 2}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_7 === 3}
                              />
                            </td>
                          </tr>
                          <tr  className="ng-star-inserted">
                            <td  scope="row">
                              8. Tiền sử bệnh mạn tính đã điều trị ổn
                            </td>
                            <td  className="text-center">
                              {/**/}
                              {/**/}
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_8 === 1}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_8 === 2}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_8 === 3}
                              />
                            </td>
                          </tr>
                          <tr  className="ng-star-inserted">
                            <td  scope="row">
                              9. Đang mang thai, phụ nữ đang nuôi con bằng sữa
                              mẹ
                            </td>
                            <td  className="text-center">
                              {/**/}
                              {/**/}
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_9 === 1}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_9 === 2}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_9 === 3}
                              />
                            </td>
                          </tr>
                          <tr  className="ng-star-inserted">
                            <td  scope="rowUser">
                              10. Độ tuổi: ≥65 tuổi
                            </td>
                            <td  className="text-center">
                              {/**/}
                              {/**/}
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_10 === 1}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_10 === 2}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_10 === 3}
                              />
                            </td>
                          </tr>
                          <tr  className="ng-star-inserted">
                            <td  scope="rowUser">
                              11. Tiền sử rối loạn đông máu/cầm máu hoặc đang
                              dùng thuốc chống đông
                            </td>
                            <td  className="text-center">
                              {/**/}
                              {/**/}
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_11 === 1}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_11 === 2}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_11 === 3}
                              />
                            </td>
                          </tr>
                          <tr  className="ng-star-inserted">
                            <td  scope="rowUser">
                              12. Tiền sử dị ứng với các dị nguyên khác
                            </td>
                            <td  className="text-center">
                              {/**/}
                              <input

                                  className="form-control ng-untouched ng-pristine ng-star-inserted"
                                  type="text"
                                  placeholder="Nếu có, ghi rõ loại tác nhân dị ứng"
                                  disabled
                                  value={data?.pre_histories?.name_12}
                              />
                              {/**/}
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_12 === 1}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_12 === 2}
                              />
                            </td>
                            <td  className="text-center">
                              <input
                                  type="radio"
                                  className="ng-untouched ng-pristine ng-valid pointer-event-none"
                                  checked={data?.pre_histories?.status_12 === 3}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
              </div>
            </app-step-two>
            <app-step-three >
              <div  className="rowUser">
                <div  className="col-lg-12">
                  <div  className="rowUser">
                    <div

                      className="col-12 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <ul  className="list-unstyled">
                        <li

                          className="mb-3"
                          style={{ lineHeight: "25pt" }}
                        >
                          <div

                            className="d-flex flex-row"
                            style={{ alignItems: "center" }}
                          >

                            <p >
                              1. Tiêm chủng vắc xin là biện pháp phòng chống
                              dịch hiệu quả, tuy nhiên vắc xin phòng COVID-19 có
                              thể không phòng được bệnh hoàn toàn. Người được
                              tiêm chủng vắc xin phòng COVID-19 có thể phòng
                              được bệnh hoặc giảm mức độ nặng nếu mắc bệnh. Tuy
                              nhiên, sau khi tiêm chủng vẫn phải tiếp tục thực
                              hiện nghiêm các biện pháp phòng chống dịch theo
                              quy định.
                            </p>
                          </div>
                        </li>
                        <li

                          className="mb-3"
                          style={{ lineHeight: "25pt" }}
                        >
                          <div

                            className="d-flex flex-row"
                            style={{ alignItems: "center" }}
                          >

                            <p >
                              2. Tiêm chủng vắc xin phòng COVID-19 có thể gây ra
                              một số biểu hiện tại chỗ tiêm hoặc toàn thân như
                              sưng, đau chỗ tiêm, nhức đầu, buồn nôn, sốt, đau
                              cơ…hoặc tai biến nặng sau tiêm chủng. Tiêm vắc xin
                              mũi 2 do Pfizer sản xuất ở người đã tiêm mũi 1
                              bằng vắc xin AstraZeneca có thể tăng khả năng xảy
                              ra phản ứng thông thường sau tiêm chủng.
                            </p>
                          </div>
                        </li>
                        <li

                          className="mb-3"
                          style={{ lineHeight: "25pt" }}
                        >
                          <div

                            className="d-flex flex-row"
                            style={{ alignItems: "center" }}
                          >

                            <p >
                              3. Khi có triệu chứng bất thường về sức khỏe,
                              người được tiêm chủng cần đến ngay cơ sở y tế gần
                              nhất để được tư vấn, thăm khám và điều trị kịp
                              thời.{" "}
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div  className="form-inline">
                        <p  className="mt-3 ml-3">
                          {" "}
                          Sau khi đã đọc các thông tin nêu trên, tôi đã hiểu về
                          các nguy cơ và:{" "}
                          <input

                            className="form-control ml-4 ng-untouched ng-pristine ng-valid"
                            style={{ width: 20, height: 20 }}
                            type="checkbox" checked
                          />{" "}
                          Đồng ý tiêm chủng
                        </p>
                      </div>
                      <hr  />
                      <br />

                    </div>
                  </div>
                </div>
              </div>
            </app-step-three>
            {query.get('action') !== 'afterView' &&
                <div

                    className="col-12 text-center mt-2 mb-2"
                >
                  <button
                      onClick={cancelHandler}
                      className="btn btn-primary rounded radius20 p-2 wbtn mr-4"
                      type="button"
                      tabIndex={0}
                  >
                    <i

                        className="fa fa-chervon-left"
                    />
                    Bỏ qua{" "}
                  </button>
                  <button
                      onClick={submitHandler}
                      className="btn btn-outline-success rounded radius20 p-2 wbtn"
                  >
                    <i

                        className="bi bi-file-excel mr-1"
                    />
                    Xác Nhận{" "}
                  </button>
                </div>
            }
          </div>
        </section>
      </main>
    </>
  )
}
