import React from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import { useHistory } from 'react-router-dom';
export default function OpenOTP(props) {
    const history = useHistory();
    const Wrapper = styled.section`
        .pupup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            border: 1px solid #333;
            text-align: center;
            width: 30%;
            box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
            padding: 60px 30px;
            transition: all 0.3s;
            p.pupup-line_1 {
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                text-align: center;
                color: #000000;
                width: 70%;
                margin: 20px auto;
            }
            .pupup-otp {
                margin: 40px 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                input {
                    width: 30px;
                    height: 35px;
                    background: #FFFFFF;
                    border-bottom: 2px solid #FC0000;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }
            }
            .pupup-line_2 {
                font-weight: 700;
                font-size: 14px;
                line-height: 17px;
                /* identical to box height */
                text-align: center;
                color: #000000;
            }
            .pupup-line_3 {
                padding: 20px 0px;
                font-weight: 700;
                font-size: 14px;
                line-height: 17px;
                /* identical to box height */
                text-align: center;
                color: #000000;
            }
            .pupup-control {
                padding-bottom: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 50px;
                a:first-child {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    color: #000000;
                    padding: 10px 20px;
                    border-radius: 8px 8px 8px 0px;
                    background: #E3E3E3;
                    cursor: pointer;
                }
                a:last-child {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    color: #ffffff;
                    padding: 10px 20px;
                    border-radius: 8px 8px 8px 0px;
                    background: #171A88;
                    cursor: pointer;
                }
            }
        }
        .toggle-pupup {
            opacity: 1;
            visibility: visible;
        }
    `;
    const handleClose = () => {
        props.setOpen(false);
        history.push('/Inject-step4')
    };
    return (
        <Wrapper>
            <Dialog
                open={props.isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="pupup">
                    <h5>Xác Thực OTP</h5>
                    <img src="./images/Green Leaf Plus Hospital Center Logo 3.png" alt="" />
                    <p className="pupup-line_1">Mã xác mình sẽ được gửi đến SĐT mà bạn đăng ký</p>
                    <div className="pupup-otp">
                        <input type="number" />
                        <input type="number" />
                        <input type="number" />
                        <input type="number" />
                        <input type="number" />
                        <input type="number" />
                    </div>
                    <p className="pupup-line_2">Nếu bạn không nhận được tin nhắn, xin vui lòng thử lại sau: </p>
                    <p className="pupup-line_3">00:01:00</p>
                    <div className="pupup-control">
                        <a onclick="togglePupup()">Hủy bỏ</a>
                        <a onClick={handleClose}>Xác nhận</a>
                    </div>
                </div>
            </Dialog>
        </Wrapper>
    );
}
