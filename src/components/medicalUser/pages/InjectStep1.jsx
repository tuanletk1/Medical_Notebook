import HeaderStep from "../HeadStep";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addStep1, clearInjectState} from "../injectSlice";
import {useHistory} from "react-router-dom";
import {useQuery} from "../../../hook/useQuery";
import {useEffect, useState} from "react";
import db from '../../../assets/db.json'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup
      .string()
      .required('Tên không được bỏ trống'),
  phoneNumber: yup
      .string()
      .matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, {message: 'Số điện thoại không hợp lệ'}),
  dateOfBirth: yup.string().required('Ngày sinh không được bỏ trống'),
  email: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {message: 'Email không hợp lệ'}),
  identityCode: yup
      .string()
      .required('CCCD không được bỏ trống')
      .matches(/^[0-9]{12}$/, {message: 'CCCD không hợp lệ'}),
  socialInsurance: yup.string().required('BHYT không được bỏ trống').matches(/^[0-9]{13}$/, {message: 'BHYT không hợp lệ'}),
  job: yup.string().required('Nghề nghiệp không được bỏ trống'),
  workplace: yup.string().required('Đơn vị công tác không được bỏ trống'),
  address: yup.string().required('Địa chỉ hiện tại không được bỏ trống'),
  dateInjection: yup.string().required('Ngày muốn được tiêm không được bỏ trống'),
  timeOfDay: yup.string().required('Buổi tiêm mong muốn không được bỏ trống'),
})

const Inject = () => {
  const [district, setDistrict] = useState([])
  const [ward, setWard] = useState([])

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const dispatch = useDispatch()
  const history = useHistory()
  const query = useQuery()

  useEffect(() => {
    const dis = db.district.filter(dis => dis.idProvince === watch('city'))
    setDistrict(dis)

    const wards = db.commune.filter(com => com.idDistrict === watch('district'))
    setWard(wards)
  }, [watch('city'), watch('district')])

  useEffect(() => {
    if (query.get('action') !== 'back'){
      dispatch(clearInjectState())
    }
  })

  const onSubmit = data => {
    dispatch(addStep1(data))
    history.push('/inject-step2')
  }

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
                      onSubmit={handleSubmit(onSubmit)}
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
                                {...register("theSecondTime")}
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
                                {...register("name")}
                              />
                              {errors.name && <p style={{color: 'red'}}>{errors.name?.message}</p>}
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
                                  type='date'
                                className="form-control w-100 ng-untouched ng-pristine ng-invalid"
                                placeholder="Ngày/Tháng/Năm"
                                {...register("dateOfBirth")}
                              />
                              {errors.dateOfBirth && <p style={{color: 'red'}}>{errors.dateOfBirth?.message}</p>}
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
                                      <input {...register("sex")} type="radio" value="0" checked/> Nam
                                      <input {...register("sex")} type="radio" value="1" /> Nữ

                                    </div>
                                  </div>
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
                                {...register("phoneNumber")}
                              />
                              {errors.phoneNumber && <p style={{color: 'red'}}>{errors.phoneNumber?.message}</p>}
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
                                {...register("email")}
                              />
                              {errors.email && <p style={{color: 'red'}}>{errors.email?.message}</p>}
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
                                {...register("identityCode")}
                              />
                              {errors.identityCode && <p style={{color: 'red'}}>{errors.identityCode?.message}</p>}
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
                                {...register("socialInsurance")}
                              />
                              {errors.socialInsurance && <p style={{color: 'red'}}>{errors.socialInsurance?.message}</p>}
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
                                {...register("job")}
                              />
                              {errors.job && <p style={{color: 'red'}}>{errors.job?.message}</p>}
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
                                {...register("workplace")}
                              />
                              {errors.workplace && <p style={{color: 'red'}}>{errors.workplace?.message}</p>}
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
                                {...register("address")}
                              />
                              {errors.address && <p style={{color: 'red'}}>{errors.address?.message}</p>}
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
                                {...register("city")}
                                  defaultValue={'48'}
                              >
                                {db.province.map(prov => <option value={prov.idProvince}>{prov.name}</option>)}
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
                                {...register("district")}
                              >
                                {district?.map(dis => <option value={dis.idDistrict}>{dis.name}</option>)}
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
                                {...register("ward")}
                              >
                                {ward?.map(war => <option value={war.idCommune}>{war.name}</option>)}
                              </select>
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
                                type='date'
                                className="form-control w-100 ng-untouched ng-pristine ng-valid"
                                placeholder="Ngày/Tháng/Năm"
                                {...register("dateInjection")}
                              />

                              {errors.dateInjection && <p style={{color: 'red'}}>{errors.dateInjection?.message}</p>}
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
                                {...register("timeOfDay")}
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
                          <div

                            className="col-12 text-center mt-2 mb-2"
                          >
                            <button

                              className="btn btn-outline-danger  rounded radius20 p-2 wbtn mr-4"
                              type="button"
                            >
                              <i

                                className="fa fa-chervon-left"
                              />
                              Hủy bỏ
                            </button>
                              <button
                                className="btn-primary btn rounded radius20 p-2 wbtn"
                                type="submit"

                              >
                                Xác nhận
                                <i
                                  className="icofont-rounded-right ml-0"
                                />
                              </button>
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
