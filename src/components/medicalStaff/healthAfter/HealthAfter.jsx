import React from 'react'

export default function HealthAfter() {
  return (
    <div>
         <div className="container">
        <div className="content">
          <div className="form-container">
            <div className="form-title">
              <h2>SỨC KHOẺ SAU KHI TIÊM</h2>
            </div>
            <div className="form-content">
              <div className="form-content_middle">
                <div className="flex-between  form-branch">
                  <div className="form-group">
                    <p>CƠ SỞ TIÊM CHỦNG </p>
                    <input type="text" placeholder="...................." />
                    <br />
                  </div>
                  <div className="form-group">
                    <br />
                    <p>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                    <span> Độc lập - Tự do - Hạnh phúc </span>
                  </div>
                </div>
                <div className="flex-between  form-title">
                  <h3> PHIẾU KHAI BÁO TÌNH TRẠNG SAU KHI TIÊM CHỦNG </h3>
                </div>
                <div className="flex-between form-name">
                  <div className="form-group">
                    <label htmlFor>  Họ và tên:</label>
                    <input type="text" placeholder="............................" />
                  </div>
                  <div className="form-group">
                    <label htmlFor>Ngày sinh:</label>
                    <input type="text" placeholder="............................" />
                  </div>
                  <div className="form-group">
                    <label htmlFor>  Nam</label>
                    <input type="checkbox" />
                    <label htmlFor>  Nữ</label>
                    <input type="checkbox" />
                  </div>
                </div>
                <div className="flex-between form-ID">
                  <div className="form-group">
                    <label htmlFor>  Số CCCD: </label>
                    <input type="text" placeholder="............................" />
                  </div>
                  <div className="form-group">
                    <label htmlFor> Số điện thoại: </label>
                    <input type="text" placeholder="............................" />
                  </div>
                </div>
                <div className="flex-between form-work">
                  <div className="form-group">
                    <label htmlFor>  Địa chỉ liên hệ: </label>
                    <input type="text" placeholder="............................" />
                  </div>
                </div>
                <div className="flex-between form-address">
                  <div className="form-group">
                    <label htmlFor>  Đơn vị công tác: </label>
                    <input type="text" placeholder="............................" />
                  </div>
                  <div className="form-group">
                    <label htmlFor> Phường: </label>
                    <input type="text" placeholder="............................" />
                  </div>
                  <div className="form-group">
                    <label htmlFor>  Quận: </label>
                    <input type="text" placeholder="............................" />
                  </div>
                </div>
                <br />
                <div className="form-table">
                  <table border="1px">
                    <tbody><tr>
                        <td><h2>Các triệu chứng phản ứng sau tiêm</h2></td>
                        <td>Không</td>
                        <td>Có</td>
                      </tr>
                      <tr>
                        <td style={{ color: 'rgb(43, 33, 176)'}}>Các triệu chứng nhẹ</td>  
                      </tr>
                      <tr>
                        <td>1. Đau, sưng tại chỗ tiêm</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>2. Nôn/ buồn nôn</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>3. Tiêu chảy, đau bụng</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>4. Sốt &lt; 39độ </td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>5. Sốt &gt;= 39độ </td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>6. Đau họng/ Chảy nước mũi</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>7. Ớn lạnh</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>8. Đau đầu</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>9. Phát ban</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td style={{ color: 'rgb(43, 33, 176)'}}>Các triệu chứng nặng</td>  
                      </tr>
                      <tr>
                        <td>10. Tê quanh môi hoặc lưỡi</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>11. Ngứa họng, căng cứng, nghẹn họng, nói khó </td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>12. Đau đầu kéo dài, dữ dội, li bì </td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>13. Tức ngực, đánh trống ngực kéo dài, ngất</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>14. Nôn, đau quặn bụng, tiêu chảy</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>15. Khó thở, thở rít, khò khè, tím tái</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>16. Chóng mặt, choáng, xây xẩm, cảm giác muốn ngã, mệt bất thường</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>17. Đau dữ dội bất thường tại một hay nhiều nơi mà không do va chạm, sang chấn</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>18. Sốt cao liên tục trên 39 độ mà không đáp ứng thuốc hạ sốt</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>19. Triệu chứng khác</td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <div className="form-content_footer">
                <p>Lưu ý:</p>
                <ul>
                  <li>Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho chiến dịch tiêm chủng Vắc xin COVID - 19</li>
                  <li>Xin vui lòng kiểm tra kỹ các thông tin bắt buộc</li>
                  <li>Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn hiểu và đồng ý chịu trách nhiệm với các thông tin đã cung cấp.</li>
                </ul>
              </div>
              <div className="form-control">
                <a href="./index1.html">Bỏ qua</a> 
                <button href onclick="togglePupup()">Chấp nhận</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    </div>
  )
}
