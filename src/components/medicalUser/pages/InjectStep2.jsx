import HeaderStep from "../HeadStep";
import {Link, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addStep2} from "../injectSlice";

const InjectStep2 = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = data => {
        dispatch(addStep2(data))
        history.push('/inject-step3')
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


                                className="col-lg-3 col-6 p-2 border-right rounded bgstep"
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

                        <app-step-two  >
                            <form onSubmit={handleSubmit(onSubmit)}>
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
                                                            <input type='hidden' value='1. Tiền sử phản vệ từ độ 2 trở lên' {...register("symptom_1")}/>
                                                        </td>
                                                        <td  className="text-center">
                                                            {/**/}
                                                            <input
                                                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                                maxLength={1000}
                                                                type="text"
                                                                placeholder="Nếu có, ghi rõ loại tác nhân dị ứng"
                                                                {...register("name_1")}
                                                            />
                                                            {/**/}
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_1")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={1}
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_1")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={2}
                                                                checked
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_1")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={3}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr  className="ng-star-inserted">
                                                        <td  scope="row">
                                                            2. Tiền sử bị COVID-19 trong vòng 6 tháng
                                                            <input type='hidden' value='2. Tiền sử bị COVID-19 trong vòng 6 tháng' {...register("symptom_2")}/>
                                                        </td>
                                                        <td  className="text-center" >
                                                             <input type='hidden'
                                                                    {...register("name_2")}
                                                                 value='name_2'
                                                             />

                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_2")}
                                                                value={1}
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_2")}
                                                                value={2}
                                                                checked
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_2")}
                                                                value={3}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr  className="ng-star-inserted">
                                                        <td  scope="row">
                                                            3. Tiền sử tiêm vắc xin khác trong 14 ngày qua
                                                            <input type='hidden' value='3. Tiền sử tiêm vắc xin khác trong 14 ngày qua' {...register("symptom_3")}/>
                                                        </td>
                                                        <td  className="text-center">
                                                            {/**/}
                                                            <input

                                                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                                maxLength={1000}
                                                                type="text"
                                                                placeholder="Nếu có, ghi rõ loại vắc xin"
                                                                {...register("name_3")}

                                                            />
                                                            {/**/}
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_3")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={1}
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_3")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={2}
                                                                checked
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_3")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={3}

                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr  className="ng-star-inserted">
                                                        <td  scope="row">
                                                            4. Tiền sử suy giảm miễn dịch, ung thư giai đoạn
                                                            cuối, cắt lách, xơ gan mất bù ...
                                                            <input type='hidden' value='4. Tiền sử suy giảm miễn dịch, ung thư giai đoạn
                                                            cuối, cắt lách, xơ gan mất bù ...' {...register("symptom_4")}/>

                                                        </td>
                                                        <td  className="text-center">
                                                            <input type='hidden'
                                                                   {...register("name_4")}
                                                                   value='name_4'
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_4")}
                                                                value={1}
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_4")}
                                                                value={2}
                                                                checked
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_4")}
                                                                value={3}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr  className="ng-star-inserted">
                                                        <td  scope="row">
                                                            5. Đang dùng thuốc ức chế miễn dịch, corticoid
                                                            liều ca (tương đương hoặc hơn 2mg
                                                            prednisolon/kg/ngày trong ít nhất 7 ngày) hoặc
                                                            điều trị hóa trị, xạ trị
                                                            <input type='hidden' value='5. Đang dùng thuốc ức chế miễn dịch, corticoid
                                                            liều ca (tương đương hoặc hơn 2mg
                                                            prednisolon/kg/ngày trong ít nhất 7 ngày) hoặc
                                                            điều trị hóa trị, xạ trị' {...register("symptom_5")}/>

                                                        </td>
                                                        <td  className="text-center">
                                                            <input type='hidden'
                                                                   {...register("name_5")}
                                                                   value='name_5'
                                                            />
                                                        </td>

                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_5")}
                                                                value={1}
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_5")}
                                                                value={2}
                                                                checked
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_5")}
                                                                value={3}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr  className="ng-star-inserted">
                                                        <td  scope="row">
                                                            6. Bệnh cấp tính
                                                            <input type='hidden' value=' 6. Bệnh cấp tính' {...register("symptom_6")}/>

                                                        </td>
                                                        <td  className="text-center">
                                                            {/**/}
                                                            <input

                                                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                                maxLength={1000}
                                                                type="text"
                                                                placeholder="Nếu có, ghi rõ loại bệnh mắc"
                                                                {...register("name_6")}
                                                            />
                                                            {/**/}
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_6")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={1}
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_6")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={2}
                                                                checked
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_6")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={3}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr  className="ng-star-inserted">
                                                        <td  scope="row">
                                                            7. Tiền sử bệnh mạn tính, đang tiến triển
                                                            <input type='hidden' value=' 7. Tiền sử bệnh mạn tính, đang tiến triển' {...register("symptom_7")}/>

                                                        </td>
                                                        <td  className="text-center">
                                                            {/**/}
                                                            <input

                                                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                                maxLength={1000}
                                                                type="text"
                                                                placeholder="Nếu có, ghi rõ loại bệnh mắc"
                                                                {...register("name_7")}
                                                            />
                                                            {/**/}
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_7")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={1}
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_7")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={2}
                                                                checked
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_7")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={3}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr  className="ng-star-inserted">
                                                        <td  scope="row">
                                                            8. Tiền sử bệnh mạn tính đã điều trị ổn
                                                            <input type='hidden' value='8. Tiền sử bệnh mạn tính đã điều trị ổn' {...register("symptom_8")}/>

                                                        </td>
                                                        <td  className="text-center">
                                                            <input type='hidden'
                                                                   {...register("name_8")}
                                                                   value='name_8'
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_8")}
                                                                value={1}
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_8")}
                                                                value={2}
                                                                checked
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_8")}
                                                                value={3}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr  className="ng-star-inserted">
                                                        <td  scope="row">
                                                            9. Đang mang thai, phụ nữ đang nuôi con bằng sữa
                                                            mẹ
                                                            <input type='hidden' value='9. Đang mang thai, phụ nữ đang nuôi con bằng sữa
                                                            mẹ' {...register("symptom_9")}/>

                                                        </td>
                                                        <td  className="text-center">
                                                            <input type='hidden'
                                                                   {...register("name_9")}
                                                                   value='name_9'
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_9")}
                                                                value={1}
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_9")}
                                                                value={2}
                                                                checked
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                {...register("status_9")}
                                                                value={3}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr  className="ng-star-inserted">
                                                        <td  scope="rowUser">
                                                            10. Độ tuổi: ≥65 tuổi
                                                            <input type='hidden' value='10. Độ tuổi: ≥65 tuổi' {...register("symptom_10")}/>
                                                        </td>
                                                        <td  className="text-center">
                                                            <input type='hidden'
                                                                   {...register("name_10")}
                                                                   value='name_10'
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                                <input
                                                                    type="radio"
                                                                    className="ng-untouched ng-pristine ng-valid"
                                                                    {...register("status_10")}
                                                                    value={1}
                                                                />
                                                        </td>
                                                        <td  className="text-center">
                                                                <input
                                                                    type="radio"
                                                                    className="ng-untouched ng-pristine ng-valid"
                                                                    {...register("status_10")}
                                                                    value={2}
                                                                    checked
                                                                />
                                                        </td>
                                                        <td  className="text-center">
                                                                <input
                                                                    type="radio"
                                                                    className="ng-untouched ng-pristine ng-valid"
                                                                    {...register("status_10")}
                                                                    value={3}
                                                                />
                                                        </td>
                                                    </tr>
                                                    <tr  className="ng-star-inserted">
                                                        <td  scope="rowUser">
                                                            11. Tiền sử rối loạn đông máu/cầm máu hoặc đang
                                                            dùng thuốc chống đông
                                                            <input type='hidden' value='11. Tiền sử rối loạn đông máu/cầm máu hoặc đang
                                                            dùng thuốc chống đông' {...register("symptom_11")}/>

                                                        </td>
                                                        <td  className="text-center">
                                                            <input type='hidden'
                                                                   {...register("name_11")}
                                                                   value='name_11'
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                                <input
                                                                    type="radio"
                                                                    className="ng-untouched ng-pristine ng-valid"
                                                                    {...register("status_11")}
                                                                    value={1}
                                                                />
                                                        </td>
                                                        <td  className="text-center">
                                                                <input
                                                                    type="radio"
                                                                    className="ng-untouched ng-pristine ng-valid"
                                                                    {...register("status_11")}
                                                                    value={2}
                                                                    checked
                                                                />
                                                        </td>
                                                        <td  className="text-center">
                                                                <input
                                                                    type="radio"
                                                                    className="ng-untouched ng-pristine ng-valid"
                                                                    {...register("status_11")}
                                                                    value={3}
                                                                />
                                                        </td>
                                                    </tr>
                                                    <tr  className="ng-star-inserted">
                                                        <td  scope="rowUser">
                                                            12. Tiền sử dị ứng với các dị nguyên khác
                                                            <input type='hidden' value='12. Tiền sử dị ứng với các dị nguyên khác' {...register("symptom_12")}/>

                                                        </td>
                                                        <td  className="text-center">
                                                            {/**/}
                                                            <input

                                                                className="form-control ng-untouched ng-pristine ng-star-inserted"
                                                                maxLength={1000}
                                                                type="text"
                                                                placeholder="Nếu có, ghi rõ"
                                                                {...register("name_12")}
                                                            />
                                                            {/**/}
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_12")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={1}
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_12")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={2}
                                                                checked
                                                            />
                                                        </td>
                                                        <td  className="text-center">
                                                            <input
                                                                {...register("status_12")}
                                                                type="radio"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                                value={3}
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div  className="col-12 text-center">
                                                <Link to={"/Inject?action=back"}>
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
                                                <button

                                                    className="btn-primary btn rounded radius20 p-2 wbtn"
                                                    type="submit"

                                                >
                                                    {" "}
                                                    Xác nhận{" "}
                                                    <i

                                                        className="icofont-rounded-right ml-0"
                                                    />
                                                </button>
                                                
                                            </div>
                                </div>
                            </div>
                            </form>
                        </app-step-two>

                    </div>
                </section>
            </main>
        </>
    );
};

export default InjectStep2;
