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
              <h2 >????ng k?? ti??m c?? nh??n</h2>
             
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
                  B?????c 1
                </p>
                <h5  className="sfbold">
                  Th??ng tin c?? nh??n
                </h5>
              </div>
              <div

                className="col-lg-3 col-6 p-2 border-right text-black-50"
              >
                <p  className="mb-1">
                  B?????c 2
                </p>
                <h5  className="sfbold">
                  Ti???n s??? b???nh
                </h5>
              </div>
              <div

                className="col-lg-3 col-6 p-2 border-right text-black-50"
              >
                <p  className="mb-1">
                  B?????c 3
                </p>
                <h5  className="sfbold">
                  Phi???u ?????ng ?? ti??m
                </h5>
              </div>
              <div

                className="col-lg-3 col-6 p-2 text-black-50"
              >
                <p  className="mb-1">
                  B?????c 4
                </p>
                <h5  className="sfbold">
                  Ho??n th??nh
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
                                ????ng k?? m??i ti??m th???{" "}
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
                                <option value="1">M??i ti??m th??? nh???t</option>
                                <option value="2">M??i ti??m ti???p theo</option>
                              </select>
                              {/**/}
                            </div>
                          </div>
                          <div  className="col-12 mb-2">
                            <h6  className="sfbold">
                              1. Th??ng tin ng?????i ????ng k?? ti??m
                            </h6>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                {" "}
                                H??? v?? t??n{" "}
                                <span  className="text-danger">
                                  (*)
                                </span>
                              </label>
                              <input

                                aria-describedby="helpId"
                                className="form-control ng-pristine ng-invalid ng-touched"
                                id="fullname"
                                type="text"
                                placeholder="H??? v?? t??n"
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
                                Ng??y sinh{" "}
                                <span  className="text-danger">
                                  (*)
                                </span>
                              </label>
                              <input
                                className="form-control w-100 ng-untouched ng-pristine ng-invalid"
                                placeholder="Ng??y/Th??ng/N??m"
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
                                Gi???i t??nh{" "}
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
                                      N???

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
                                S??? ??i???n tho???i {/**/}
                              </label>
                              <input

                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-invalid"
                                type="text"
                                placeholder="S??? ??i???n tho???i"
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
                                CCCD/M?? ?????nh danh c??ng d??n {/**/}
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
                                placeholder="CCCD/M?? ?????nh danh c??ng d??n"
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
                                S??? th??? BHYT{" "}
                              </label>
                              <input

                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-valid"
                                type="text"
                                placeholder="S??? th??? BHYT"
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
                                Ngh??? nghi???p{" "}
                              </label>
                              <input

                                className="form-control ng-untouched ng-pristine ng-valid"
                                maxLength={200}
                                type="text"
                                placeholder="Ngh??? nghi???p"
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
                                ????n v??? c??ng t??c{" "}
                              </label>
                              <input

                                className="form-control ng-untouched ng-pristine ng-valid"
                                maxLength={255}
                                type="text"
                                placeholder="????n v??? c??ng t??c"
                                value={data?.workplace}
                                disabled
                              />
                            </div>
                          </div>
                          <div  className="col-lg-6 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                ?????a ch??? hi???n t???i
                              </label>
                              <input

                                aria-describedby="helpId"
                                className="form-control ng-untouched ng-pristine ng-valid"
                                maxLength={255}
                                type="text"
                                placeholder="?????a ch??? hi???n t???i"
                                value={data?.address}
                                disabled
                              />
                            </div>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group">
                              <label  htmlFor>
                                T???nh/Th??nh ph???
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
                                Qu???n/Huy???n{" "}
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
                                X??/Ph?????ng
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
                              2. Th??ng tin ????ng k?? ti??m ch???ng
                            </h6>
                          </div>
                          <div  className="col-lg-3 col-md-12">
                            <div  className="form-group mb-0">
                              <label >
                                {" "}
                                Ng??y mu???n ???????c ti??m (d??? ki???n){" "}
                              </label>
                              <input

                                className="form-control w-100 ng-untouched ng-pristine ng-valid"
                                placeholder="Ng??y/Th??ng/N??m"
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
                                Bu???i ti??m mong mu???n{" "}
                              </label>
                              <select
                                name=""
                                id=""
                                className="form-control ng-untouched ng-pristine ng-valid"
                                value={data?.time_of_day}
                                disabled
                              >
                                <option value="Morning">Bu???i s??ng</option>
                                <option value="Afternoon">Bu???i chi???u</option>
                                <option value="All day">C??? ng??y</option>
                              </select>
                            </div>
                          </div>
                          {/**/}
                          <div  className="col-12" style={{ color: "red" }}>
                            <h6

                              className="sfbold text-danger"
                            >
                              L??u ??:
                            </h6>
                            <ul  className="text-danger">
                              <li >
                                {" "}
                                Vi???c ????ng k?? th??ng tin ho??n to??n b???o m???t v?? ph???c
                                v??? cho chi???n d???ch ti??m ch???ng V???c xin COVID - 19{" "}
                              </li>
                              <li >
                                {" "}
                                Xin vui l??ng ki???m tra k??? c??c th??ng tin b???t
                                bu???c(VD: H??? v?? t??n, Ng??y th??ng n??m sinh, S??? ??i???n
                                tho???i, CCCD/M?? ?????nh danh c??ng d??n/HC ...){" "}
                              </li>
                              <li >
                                {" "}
                                B???ng vi???c nh???n n??t "X??c nh???n", b???n ho??n to??n
                                hi???u v?? ?????ng ?? ch???u tr??ch nhi???m v???i c??c th??ng
                                tin ???? cung c???p.{" "}
                              </li>
                              <li >
                                {" "}
                                N???u b???n d?????i 18 tu???i, vui l??ng nh???p s??? ??i???n
                                tho???i c???a ng?????i gi??m h??? ????? tra c???u{" "}
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
                              Ti???n s???
                            </th>
                            <th >Tri???u ch???ng</th>
                            <th  className="text-center">
                              C??
                            </th>
                            <th  className="text-center">
                              Kh??ng
                            </th>
                            <th  className="text-center">
                              Kh??ng r??
                            </th>
                          </tr>
                        </thead>
                        <tbody >
                          {/**/}
                          <tr  className="ng-star-inserted">
                            <td  scope="row">
                              1. Ti???n s??? ph???n v??? t??? ????? 2 tr??? l??n
                            </td>
                            <td  className="text-center">
                              {/**/}
                              <input

                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                type="text"
                                placeholder="N???u c??, ghi r?? lo???i t??c nh??n d??? ???ng"
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
                              2. Ti???n s??? b??? COVID-19 trong v??ng 6 th??ng
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
                              3. Ti???n s??? ti??m v???c xin kh??c trong 14 ng??y qua
                            </td>
                            <td  className="text-center">
                              {/**/}
                              <input

                                  className="form-control ng-untouched ng-pristine ng-star-inserted"
                                  type="text"
                                  placeholder="N???u c??, ghi r?? lo???i t??c nh??n d??? ???ng"
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
                              4. Ti???n s??? suy gi???m mi???n d???ch, ung th?? giai ??o???n
                              cu???i, c???t l??ch, x?? gan m???t b?? ...
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
                              5. ??ang d??ng thu???c ???c ch??? mi???n d???ch, corticoid
                              li???u ca (t????ng ??????ng ho???c h??n 2mg
                              prednisolon/kg/ng??y trong ??t nh???t 7 ng??y) ho???c
                              ??i???u tr??? h??a tr???, x??? tr???
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
                              6. B???nh c???p t??nh
                            </td>
                            <td  className="text-center">
                              {/**/}
                              <input

                                  className="form-control ng-untouched ng-pristine ng-star-inserted"
                                  type="text"
                                  placeholder="N???u c??, ghi r?? lo???i t??c nh??n d??? ???ng"
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
                              7. Ti???n s??? b???nh m???n t??nh, ??ang ti???n tri???n
                            </td>
                            <td  className="text-center">
                              {/**/}
                              <input

                                  className="form-control ng-untouched ng-pristine ng-star-inserted"
                                  type="text"
                                  placeholder="N???u c??, ghi r?? lo???i t??c nh??n d??? ???ng"
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
                              8. Ti???n s??? b???nh m???n t??nh ???? ??i???u tr??? ???n
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
                              9. ??ang mang thai, ph??? n??? ??ang nu??i con b???ng s???a
                              m???
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
                              10. ????? tu???i: ???65 tu???i
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
                              11. Ti???n s??? r???i lo???n ????ng m??u/c???m m??u ho???c ??ang
                              d??ng thu???c ch???ng ????ng
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
                              12. Ti???n s??? d??? ???ng v???i c??c d??? nguy??n kh??c
                            </td>
                            <td  className="text-center">
                              {/**/}
                              <input

                                  className="form-control ng-untouched ng-pristine ng-star-inserted"
                                  type="text"
                                  placeholder="N???u c??, ghi r?? lo???i t??c nh??n d??? ???ng"
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
                              1. Ti??m ch???ng v???c xin l?? bi???n ph??p ph??ng ch???ng
                              d???ch hi???u qu???, tuy nhi??n v???c xin ph??ng COVID-19 c??
                              th??? kh??ng ph??ng ???????c b???nh ho??n to??n. Ng?????i ???????c
                              ti??m ch???ng v???c xin ph??ng COVID-19 c?? th??? ph??ng
                              ???????c b???nh ho???c gi???m m???c ????? n???ng n???u m???c b???nh. Tuy
                              nhi??n, sau khi ti??m ch???ng v???n ph???i ti???p t???c th???c
                              hi???n nghi??m c??c bi???n ph??p ph??ng ch???ng d???ch theo
                              quy ?????nh.
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
                              2. Ti??m ch???ng v???c xin ph??ng COVID-19 c?? th??? g??y ra
                              m???t s??? bi???u hi???n t???i ch??? ti??m ho???c to??n th??n nh??
                              s??ng, ??au ch??? ti??m, nh???c ?????u, bu???n n??n, s???t, ??au
                              c?????ho???c tai bi???n n???ng sau ti??m ch???ng. Ti??m v???c xin
                              m??i 2 do Pfizer s???n xu???t ??? ng?????i ???? ti??m m??i 1
                              b???ng v???c xin AstraZeneca c?? th??? t??ng kh??? n??ng x???y
                              ra ph???n ???ng th??ng th?????ng sau ti??m ch???ng.
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
                              3. Khi c?? tri???u ch???ng b???t th?????ng v??? s???c kh???e,
                              ng?????i ???????c ti??m ch???ng c???n ?????n ngay c?? s??? y t??? g???n
                              nh???t ????? ???????c t?? v???n, th??m kh??m v?? ??i???u tr??? k???p
                              th???i.{" "}
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div  className="form-inline">
                        <p  className="mt-3 ml-3">
                          {" "}
                          Sau khi ???? ?????c c??c th??ng tin n??u tr??n, t??i ???? hi???u v???
                          c??c nguy c?? v??:{" "}
                          <input

                            className="form-control ml-4 ng-untouched ng-pristine ng-valid"
                            style={{ width: 20, height: 20 }}
                            type="checkbox" checked
                          />{" "}
                          ?????ng ?? ti??m ch???ng
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
                    B??? qua{" "}
                  </button>
                  <button
                      onClick={submitHandler}
                      className="btn btn-outline-success rounded radius20 p-2 wbtn"
                  >
                    <i

                        className="bi bi-file-excel mr-1"
                    />
                    X??c Nh???n{" "}
                  </button>
                </div>
            }
          </div>
        </section>
      </main>
    </>
  )
}
