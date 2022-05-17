import HeaderStep from "../HeadStep";
import { Link } from "react-router-dom";

const InjectStep2 = () => {
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
                                className="col-lg-3 col-6 p-2 border-right text-black-50"
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

                                className="col-lg-3 col-6 p-2 border-right rounded bgstep"
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
                                                            Tiền sử
                                                        </th>
                                                        <th _ngcontent-mjb-c10>Triệu chứng</th>
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
                                                        <td _ngcontent-mjb-c10 scope="row">
                                                            1. Tiền sử phản vệ từ độ 2 trở lên
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
                                                        <td _ngcontent-mjb-c10 scope="row">
                                                            2. Tiền sử bị COVID-19 trong vòng 6 tháng
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
                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="2_no"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="2_other"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                                                        <td _ngcontent-mjb-c10 scope="row">
                                                            3. Tiền sử tiêm vắc xin khác trong 14 ngày qua
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
                                                        <td _ngcontent-mjb-c10 scope="row">
                                                            4. Tiền sử suy giảm miễn dịch, ung thư giai đoạn
                                                            cuối, cắt lách, xơ gan mất bù ...
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            {/**/}
                                                            {/**/}
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="4_yes"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="4_no"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="4_other"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                                                        <td _ngcontent-mjb-c10 scope="row">
                                                            5. Đang dùng thuốc ức chế miễn dịch, corticoid
                                                            liều ca (tương đương hoặc hơn 2mg
                                                            prednisolon/kg/ngày trong ít nhất 7 ngày) hoặc
                                                            điều trị hóa trị, xạ trị
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            {/**/}
                                                            {/**/}
                                                        </td>

                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="5_no"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="5_no"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="5_other"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                                                        <td _ngcontent-mjb-c10 scope="row">
                                                            6. Bệnh cấp tính
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
                                                            7. Tiền sử bệnh mạn tính, đang tiến triển
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
                                                        <td _ngcontent-mjb-c10 scope="row">
                                                            8. Tiền sử bệnh mạn tính đã điều trị ổn
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            {/**/}
                                                            {/**/}
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="8_yes"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="8_no"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="8_other"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                                                        <td _ngcontent-mjb-c10 scope="row">
                                                            9. Đang mang thai, phụ nữ đang nuôi con bằng sữa
                                                            mẹ
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            {/**/}
                                                            {/**/}
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="9_yes"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="9_no"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="9_other"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                                                        <td _ngcontent-mjb-c10 scope="rowUser">
                                                            10. Độ tuổi: ≥65 tuổi
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            {/**/}
                                                            {/**/}
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="10_yes"
                                                                className="ng-untouched ng-pristine"

                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="10_no"
                                                                className="ng-untouched ng-pristine"

                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="10_other"
                                                                className="ng-untouched ng-pristine"

                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                                                        <td _ngcontent-mjb-c10 scope="rowUser">
                                                            11. Tiền sử rối loạn đông máu/cầm máu hoặc đang
                                                            dùng thuốc chống đông
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            {/**/}
                                                            {/**/}
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="11_yes"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="11_no"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                        <td _ngcontent-mjb-c10 className="text-center">
                                                            <input
                                                                _ngcontent-mjb-c10
                                                                type="radio"
                                                                id="11_other"
                                                                className="ng-untouched ng-pristine ng-valid"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr _ngcontent-mjb-c10 className="ng-star-inserted">
                                                        <td _ngcontent-mjb-c10 scope="rowUser">
                                                            12. Tiền sử dị ứng với các dị nguyên khác
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
                                                <Link to={"/Inject/"}>
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
                                                <Link to={"/Inject-step3/"}>
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
    );
};

export default InjectStep2;
