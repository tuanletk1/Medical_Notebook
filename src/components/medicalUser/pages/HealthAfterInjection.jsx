import HeaderStep from "../HeadStep";
import {Link, useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom/cjs/react-router-dom";
import db from "../../../assets/db.json";
import {registerInjectionApi} from "../../../api/registerInjectionApi";

const HealthAfterInjection = () => {
    const [data, setData] = useState({})
    const history = useHistory()

    const city = db.province.find(pro => pro.idProvince === data?.city)
    const district = db.district.find(dis => dis.idDistrict === data?.district)
    const ward = db.commune.find(com => com.idCommune === data?.ward)

    // useEffect(() => {
    //     async function getInfo() {
    //         const res = await registerInjectionApi.getInfoById(params?.id)
    //         setData(res.data.data)
    //     }
    //     getInfo()
    // },[])
    return (<>
            <HeaderStep/>
            <main id="main">
                <section
                    className="breadcrumbs hiddentext"
                    style={{margin: " 0 auto", width: "100%"}}
                >
                    <div className="container">
                        <div
                            className="d-flex justify-content-between align-items-center"
                        >
                            <h2>Sức khoẻ sau khi tiêm chủng</h2>
                        </div>
                    </div>
                </section>
                <section
                    className="inner-page mt30"
                    style={{width: "100%"}}
                >
                    <div className="container mt-3">
                        <app-step-one >
                            <div className="rowUser">
                                <div className="col-12">
                                    <div className="rowUser">
                                        <div
                                            className="col-12 text-center mb-3"
                                        ></div>
                                    </div>
                                    <div className="rowUser">
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
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </app-step-one>
                        <app-step-two >
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div
                                            className="col-lg-12 col-md-12 aos-init aos-animate"
                                            data-aos="fade-up"
                                            data-aos-delay={200}
                                        >
                                            <table
                                                className="table table-striped table-hover"
                                            >
                                                <thead>
                                                <tr>
                                                    <th style={{width: "40%"}}>
                                                        Triệu chứng
                                                    </th>
                                                    <th>Ghi thêm</th>
                                                    <th className="text-center">
                                                        Có
                                                    </th>
                                                    <th className="text-center">
                                                        Không
                                                    </th>
                                                    <th className="text-center">
                                                        Không rõ
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {/**/}
                                                <tr className="ng-star-inserted">
                                                    <td scope="row" style={{color: 'red'}}>
                                                        Các triệu chứng nhẹ
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="2_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                            hidden
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="2_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                            hidden
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="2_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                            hidden
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="row">
                                                        1. Đau, sưng tại chỗ tiêm
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ loại tác nhân dị ứng"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="1_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="1_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="1_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        2. Nôn/ buồn nôn
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="row">
                                                        3. Tiêu chảy, đau bụng
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ loại vắc xin"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="3_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="3_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="3_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        4. Sốt &lt; 39độ y
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        5. Sốt &gt;= 39độ
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="row">
                                                        6. Đau họng/ Chảy nước mũi
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ loại bệnh mắc"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="6_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="6_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="6_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="row">
                                                        7. Ớn lạnh
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ loại bệnh mắc"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="7_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="7_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="7_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        8. Đau đầu
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="row" style={{color: 'red'}}>
                                                        Các triệu chứng nặng
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="2_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                            hidden
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="2_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                            hidden
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="2_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                            hidden
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        9. Phát ban
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        10. Tê quanh môi hoặc lưỡi
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        11. Ngứa họng, căng cứng, nghẹn họng, nói khó
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        12. Đau đầu kéo dài, dữ dội, li bì
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        13. Tức ngực, đánh trống ngực kéo dài, ngất
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        14. Nôn, đau quặn bụng, tiêu chảy
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        15. Khó thở, thở rít, khò khè, tím tái
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        16. Chóng mặt, choáng, xây xẩm, cảm giác muốn ngã, mệt bất
                                                        thường
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        17. Đau dữ dội bất thường tại một hay nhiều nơi mà không do va
                                                        chạm, sang chấn
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        18. Sốt cao liên tục trên 39 độ mà không đáp ứng thuốc hạ sốt
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_other"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="ng-star-inserted">
                                                    <td scope="rowUser">
                                                        19. Triệu chứng khác
                                                    </td>
                                                    <td className="text-center">
                                                        {/**/}
                                                        <input
                                                            className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                            maxLength={1000}
                                                            type="text"
                                                            placeholder="Nếu có, ghi rõ"

                                                        />
                                                        {/**/}
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_yes"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            type="radio"
                                                            id="12_no"
                                                            className="ng-untouched ng-pristine ng-valid"
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
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
                                    <div className="col-12 text-center">
                                        <Link to={"/"}>
                                            <button
                                                className="btn-secondary btn rounded radius20 p-2 mr-3 wbtn"
                                                type="button"
                                            >
                                                <i
                                                    className="icofont-rounded-left ml-0"
                                                />{" "}
                                                Quay lại{" "}
                                            </button>
                                        </Link>
                                        <Link to={"/"}>
                                            <button
                                                className="btn-primary btn rounded radius20 p-2 wbtn"
                                                type="button"
                                            >
                                                {" "}
                                                Xác nhận{" "}
                                                <i
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
        </>);
};

export default HealthAfterInjection;

