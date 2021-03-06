import React, {useState} from "react";
import HeaderStep from "../HeadStep";
import OpenOTP from '../../OTP/index';
import { Link } from "react-router-dom";

const InjectStep3 = () => {
    const [open, setOpen] = React.useState(false);
    const [isConfirmChecked, setIsConfirmChecked] = useState(false)

    const handleOpenOTP = () => {
        setOpen(true);
    }

    const confirmCheckHandler = () => {
        setIsConfirmChecked(!isConfirmChecked)
    }

    return (
        <>
            <HeaderStep />
            <OpenOTP
                isOpen={open}
                setOpen={setOpen}
            />
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

                                className="col-lg-3 col-6 p-2 border-right rounded bgstep"
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

                        <app-step-three  >
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
                                                        type="checkbox"
                                                        checked={isConfirmChecked}
                                                        onChange={confirmCheckHandler}
                                                    />{" "}
                                                    Đồng ý tiêm chủng
                                                </p>
                                            </div>
                                            <hr  />
                                            <br />
                                            <div  className="col-12 text-center">
                                                <Link to={"/Inject-step2"}>
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
                                                        type="button"
                                                        onClick={handleOpenOTP}
                                                        disabled={!isConfirmChecked}
                                                        style={{cursor: isConfirmChecked ? 'pointer' : 'not-allowed'}}
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
                                </div>
                            </div>
                        </app-step-three>

                    </div>
                </section>
            </main>
        </>
    );
};

export default InjectStep3;
