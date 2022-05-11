import React from 'react'
import './UserRegisterForm.css'

export default function UserRegisterForm() {
  return (
    <div>
        <div className="container">
        <div className="content">
          <div className="form-container">
            <div className="form-title">
              <h2>PHIẾU ĐĂNG KÝ TIÊM </h2>
            </div>
            <div className="form-content">
              <div className="form-content_firstline">
                <ul>
                  <li>Đăng ký tiêm cá nhân</li>
                </ul>
              </div>
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
                  <h3> PHIẾU SÀNG LỌC TRƯỚC TIÊM CHỦNG VẮC XIN PHÒNG COVID-19 </h3>
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
                <div className=" form-check-vaccine">
                  <p>Đã tiêm mũi 1 vắc xin phòng COVID-19:
                  </p>
                  <input type="checkbox" />
                  <label htmlFor>Chưa tiêm</label>
                  <br />
                  <input type="checkbox" />
                  <label htmlFor>Đã tiêm, loại vaccine</label><input type="text" placeholder=".........................." />
                </div>
                <div className="form-table">
                  <table border="1px">
                    <tbody><tr>
                        <td>1. Tiền sử rõ ràng phản vệ với vắc xin phòng COVID-19 lần trước hoặc các thành phần của Vaccine phòng COVID-19</td>
                        <td>Không <input type="checkbox" /></td>
                        <td>Có <input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>2. Tiền sử bệnh COVID-19 trong vòng 6 tháng</td>
                        <td>Không <input type="checkbox" /></td>
                        <td>Có <input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>3. Đang mắc bệnh cấp tính </td>
                        <td>Không <input type="checkbox" /></td>
                        <td>Có <input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>4. Phụ nữ mang thai *
                        </td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td style={{paddingLeft: '100px'}}>4a. Phụ nữ mang thai dưới 13 tuần</td>
                        <td>Không <input type="checkbox" /></td>
                        <td>Có <input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td style={{paddingLeft: '100px'}}>4b. Phụ nữ mang thai trên 13 tuần </td>
                        <td>Không <input type="checkbox" /></td>
                        <td>Có <input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>5. Phản vệ độ 3 trở lên với bất kỳ dị nguyên nào (Nếu có, loại tác nhân dị ứng) <input type="text" placeholder="............................." /> </td>
                        <td>Không <input type="checkbox" /></td>
                        <td>Có <input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>6. Đang bị suy giảm miễn dịch nặng, ung thư giai đoạn cuối đang điều trị hóa trị, xạ trị</td>
                        <td>Không <input type="checkbox" /></td>
                        <td>Có <input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>7. Tiền sử dị ứng với bất kỳ dị nguyên nào</td>
                        <td>Không <input type="checkbox" /></td>
                        <td>Có <input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>8. Tiền sử rối loạn đông máu/cầm máu</td>
                        <td>Không <input type="checkbox" /></td>
                        <td>Có <input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>9. Rối loạn tri giác, rối loạn hành vi </td>
                        <td>Không <input type="checkbox" /></td>
                        <td>Có <input type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td>10. Bất thường dấu hiệu sống (Nếu có, ghi rõ) <input type="text" placeholder="............................" />
                          <br />
                          <ul>
                            <li>Nhiệt độ: <input type="text" placeholder="............................" /> (Độ C)</li>
                            <li>Mạch: <input type="text" placeholder="............................" />(Lần/phút)</li>
                            <li>Huyết áp: <input type="text" placeholder="............................" /> (mmHg)</li>
                            <li>Nhịp thở: <input type="text" placeholder="............................" /> (Lần/phút)</li>
                          </ul>
                        </td>
                        <td>Không <input type="checkbox" /></td>
                        <td>Có <input type="checkbox" /></td>
                      </tr>
                    </tbody></table>
                </div>
                <div className="form-conclude">
                  <p>II. Kết luận: </p>
                  <ul>
                    <li>- Đủ điều kiện tiêm chủng ngay: Tất cả đều KHÔNG có điểm bất thường □
                    </li>
                    <li>- Chống chỉ định tiêm chủng vắc xin cùng loại: Khi CÓ bất thường tại mục 1 □
                    </li>
                    <li>- Trì hoãn tiêm chủng: Khi CÓ bất kỳ một điểm bất thường tại các mục 2, 3, 4a □
                    </li>
                    <li>- Chỉ định tiêm tại các cơ sở y tế có đủ điều kiện cấp cứu phản vệ: Khi CÓ bất thường tại mục 5 □
                    </li>
                    <li>- Nhóm thận trọng khi tiêm chủng: Khi CÓ bất kỳ một điểm bất thường tại các mục 4b#, 6, 7, 8, 9,10. □
                    </li>
                    <li>* Phụ nữ đang mang thai và cho con bú: Chống chỉ định với vắc xin Sputnik V.
                    </li>
                    <li># Với phụ nữ mang thai ≥ 13 tuần: Giải thích lợi ích/nguy cơ và ký cam kết nếu đồng ý tiêm và chuyển đến cơ sở có cấp cứu sản khoa để tiêm.
                    </li>
                  </ul>
                  <div className="times">
                    <label htmlFor>Thời gian: </label>
                    <input type="text" placeholder="............" />
                    <label htmlFor>giờ </label>
                    <input type="text" placeholder="............" />
                    <label htmlFor>phút, ngày </label>
                    <input type="text" placeholder="............" />
                    <label htmlFor>tháng </label>
                    <input type="text" placeholder="............" />
                    <label htmlFor>năm 2022</label>
                    
                  </div>
                </div>
              </div>
              <div className="form-content_footer">
                <p>Lưu ý:</p>
                <ul>
                  <li>Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho chiến dịch tiêm chủng Vắc xin COVID - 19</li>
                  <li>Xin vui lòng kiểm tra kỹ các thông tin bắt buộc(VD: Họ và tên, Ngày tháng năm sinh, Số điện thoại, CCCD/Mã định danh công dân/HC ...)</li>
                  <li>Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn hiểu và đồng ý chịu trách nhiệm với các thông tin đã cung cấp.</li>
                </ul>
              </div>
            </div>
            {/* step2 */}
            <div className="form-content">
              <div className="form-vaccination-consent ">
                <h3>PHIẾU ĐỒNG Ý THAM GIA TIÊM CHỦNG VẮC XIN COVID - 19</h3>
                <ul>
                  <li>1. Tiêm chủng vắc xin là biện pháp phòng bệnh hiệu quả , tuy nhiên vác xin phòng COVID - 19 có thể không phòng được bệnh hoàn toàn . Người được tiêm chung vắc xin phòng COVID - 19 đủ liều có thể phòng được bệnh hoặc giảm mức
                    độ nặng nếu mặc COVID - 19 . Sau khi được tiêm vắc xin phòng COVID- 19 cần thực hiện đầy đủ Thông điệp 5K phòng , chống dịch COVID - 19</li>
                  <li> 2. Tiêm chủng vác xin phòng COVID - 19 có thể gây ra một số biểu hiện tại chỗ tiêm hoặc toàn thân như sưng , đau chỗ tiêm , nhức đầu , buồn nôn , sốt , đau cơ ... hoặc tại biến nặng sau tiêm chủng</li>
                  <li> 3. Khi có triệu chứng bất thường về sức khỏe , người được tiêm chủng căn liên hệ với cơ sở y tế gần nhất để được tư văn , khám và điều trị kịp thời </li>
                  <li> 4. Thuộc nhóm đối tượng <input type="text" placeholder="..............................." /></li>
                  <li> Sau khi đã đọc các thông tin nêu tôi đã hiểu về các nguy cơ và </li>
                  <li className="flex-between">
                    <p>Đồng ý tiêm chủng <input type="checkbox" /></p>
                    <p>Không đồng ý tiêm chủng <input type="checkbox" /></p>
                  </li>
                  <li> Họ tên người được tiêm chủng <input type="text" placeholder="..........................." /></li>
                  <li> Số điện thoai <input type="text" placeholder="..........................." /></li>
                  <li>
                    <input type="text" placeholder="............" /> <label>, ngày</label>
                    <input type="text" placeholder="............" /> <label> tháng</label>
                    <input type="text" placeholder="............" /> <label> năm 2022</label>
                  </li>
                </ul>
              </div>
              <div className="form-control">
                <a href="./registervaccine">Bỏ qua</a> 
                <button href onclick="togglePupup()">Chấp nhận</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
