// import React from 'react'
// import './MedicalUser.css'

// export default function MedicalUser() {
//   return (
//     <div>
//         <main _ngcontent-mjb-c8 id="main">
//         <section
//           _ngcontent-mjb-c8
//           className="breadcrumbs hiddentext"
//           style={{ margin: " 0 auto", width: "125%" }}
//         >
//           <div _ngcontent-mjb-c8 className="container">
//             <div
//               _ngcontent-mjb-c8
//               className="d-flex justify-content-between align-items-center"
//             >
//               <h2 _ngcontent-mjb-c8>Đăng ký tiêm cá nhân</h2>
//               <ol _ngcontent-mjb-c8>
//                 <li _ngcontent-mjb-c8>
//                   <a _ngcontent-mjb-c8 href="/portal">
//                     Trang chủ
//                   </a>
//                 </li>
//                 <li _ngcontent-mjb-c8>Đăng ký tiêm</li>
//               </ol>
//             </div>
//           </div>
//         </section>
//         <section
//           _ngcontent-mjb-c8
//           className="inner-page mt30"
//           style={{ width: "125%" }}
//         >
//           <div _ngcontent-mjb-c8 className="container mt-3">
//             <div _ngcontent-mjb-c8 className="row bg-light mb-5 shadow">
//               <div
//                 _ngcontent-mjb-c8
//                 className="col-lg-3 col-6 p-2 border-right rounded bgstep"
//               >
//                 <p _ngcontent-mjb-c8 className="mb-1">
//                   Bước 1
//                 </p>
//                 <h5 _ngcontent-mjb-c8 className="sfbold">
//                   Thông tin cá nhân
//                 </h5>
//               </div>
//               <div
//                 _ngcontent-mjb-c8
//                 className="col-lg-3 col-6 p-2 border-right text-black-50"
//               >
//                 <p _ngcontent-mjb-c8 className="mb-1">
//                   Bước 2
//                 </p>
//                 <h5 _ngcontent-mjb-c8 className="sfbold">
//                   Tiền sử bệnh
//                 </h5>
//               </div>
//               <div
//                 _ngcontent-mjb-c8
//                 className="col-lg-3 col-6 p-2 border-right text-black-50"
//               >
//                 <p _ngcontent-mjb-c8 className="mb-1">
//                   Bước 3
//                 </p>
//                 <h5 _ngcontent-mjb-c8 className="sfbold">
//                   Phiếu đồng ý tiêm
//                 </h5>
//               </div>
//               <div
//                 _ngcontent-mjb-c8
//                 className="col-lg-3 col-6 p-2 text-black-50"
//               >
//                 <p _ngcontent-mjb-c8 className="mb-1">
//                   Bước 4
//                 </p>
//                 <h5 _ngcontent-mjb-c8 className="sfbold">
//                   Hoàn thành
//                 </h5>
//               </div>
//             </div>
//             <app-step-one _ngcontent-mjb-c8 _nghost-mjb-c9>
//               <div _ngcontent-mjb-c9 className="row">
//                 <div _ngcontent-mjb-c9 className="col-12">
//                   <div _ngcontent-mjb-c9 className="row">
//                     <div
//                       _ngcontent-mjb-c9
//                       className="col-12 text-center mb-3"
//                     ></div>
//                   </div>
//                   <div _ngcontent-mjb-c9 className="row">
//                     <form
//                       _ngcontent-mjb-c9
//                       noValidate
//                       role="form"
//                       className="ng-pristine ng-invalid ng-touched"
//                     >
//                       {/**/}
//                       <div
//                         _ngcontent-mjb-c9
//                         className="col-12 aos-init aos-animate"
//                         data-aos="fade-up"
//                         data-aos-delay={300}
//                       >
//                         <div _ngcontent-mjb-c9 className="row">
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-3">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Đăng kí mũi tiêm thứ{" "}
//                                 <span _ngcontent-mjb-c9 className="text-danger">
//                                   (*)
//                                 </span>
//                               </label>
//                               <select
//                                 name=""
//                                 id=""
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                               >
//                                 <option value="sds">dsad</option>
//                               </select>
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-12 mb-2">
//                             <h6 _ngcontent-mjb-c9 className="sfbold">
//                               1. Thông tin người đăng ký tiêm
//                             </h6>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Họ và tên{" "}
//                                 <span _ngcontent-mjb-c9 className="text-danger">
//                                   (*)
//                                 </span>
//                               </label>
//                               <input
//                                 _ngcontent-mjb-c9
//                                 aria-describedby="helpId"
//                                 className="form-control ng-pristine ng-invalid ng-touched"
//                                 formcontrolname="fullname"
//                                 id="fullname"
//                                 type="text"
//                                 placeholder="Họ và tên"
//                               />
//                               {/**/}
//                               <div
//                                 _ngcontent-mjb-c9
//                                 className="ng-star-inserted"
//                               >
//                                 {/**/}
//                                 <small
//                                   _ngcontent-mjb-c9
//                                   className="form-text text-danger ng-star-inserted"
//                                 >
//                                   Họ và tên không được bỏ trống{" "}
//                                 </small>
//                               </div>
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Ngày sinh{" "}
//                                 <span _ngcontent-mjb-c9 className="text-danger">
//                                   (*)
//                                 </span>
//                               </label>
//                               <input
//                                 _ngcontent-mjb-c9
//                                 className="form-control w-100 ng-untouched ng-pristine ng-invalid"
//                                 formcontrolname="dateOfBirth"
//                                 placeholder="Ngày/Tháng/Năm"
//                                 aria-haspopup="dialog"
//                                 min="1900-01-31T17:17:56Z"
//                                 max="2022-05-16T09:46:22Z"
//                               />
//                               <mat-datepicker-toggle
//                                 _ngcontent-mjb-c9
//                                 className="iconfix mat-datepicker-toggle"
//                                 matsuffix
//                                 tabIndex={-1}
//                               >
//                                 <button
//                                   className="mat-focus-indicator mat-icon-button mat-button-base"
//                                   mat-icon-button
//                                   type="button"
//                                   aria-haspopup="dialog"
//                                   aria-label="Open calendar"
//                                   tabIndex={0}
//                                 >
//                                   <span className="mat-button-wrapper">
//                                     {/**/}
//                                     <svg
//                                       className="mat-datepicker-toggle-default-icon ng-star-inserted"
//                                       fill="currentColor"
//                                       focusable="false"
//                                       height="24px"
//                                       viewBox="0 0 24 24"
//                                       width="24px"
//                                     >
//                                       <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
//                                     </svg>
//                                   </span>
//                                   <div
//                                     className="mat-button-ripple mat-ripple mat-button-ripple-round"
//                                     matripple
//                                   />
//                                   <div className="mat-button-focus-overlay" />
//                                 </button>
//                               </mat-datepicker-toggle>
//                               <mat-datepicker _ngcontent-mjb-c9 />
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Giới tính{" "}
//                                 <span _ngcontent-mjb-c9 className="text-danger">
//                                   (*)
//                                 </span>
//                               </label>
//                               <ng-select
//                                 _ngcontent-mjb-c9
//                                 formcontrolname="gender"
//                                 role="listbox"
//                                 className="ng-select ng-select-single ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-invalid"
//                               >
//                                 <div className="ng-select-container">
//                                   <div className="ng-value-container">
//                                     <div className="ng-placeholder">
//                                       Giới tính
//                                     </div>
//                                     {/**/}
//                                     {/**/}
//                                     <div className="ng-input">
//                                       <input
//                                         role="combobox"
//                                         type="text"
//                                         autoCorrect="off"
//                                         autoCapitalize="off"
//                                         autoComplete="acce14c82fb6"
//                                         aria-expanded="false"
//                                       />
//                                     </div>
//                                   </div>
//                                   {/**/}
//                                   {/**/}
//                                   <span className="ng-arrow-wrapper">
//                                     <span className="ng-arrow" />
//                                   </span>
//                                 </div>
//                                 {/**/}
//                               </ng-select>
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Số điện thoại {/**/}
//                               </label>
//                               <input
//                                 _ngcontent-mjb-c9
//                                 aria-describedby="helpId"
//                                 className="form-control ng-untouched ng-pristine ng-invalid"
//                                 formcontrolname="phoneNumber"
//                                 nowhitespace
//                                 type="text"
//                                 placeholder="Số điện thoại"
//                               />
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Email{" "}
//                               </label>
//                               <input
//                                 _ngcontent-mjb-c9
//                                 aria-describedby="helpId"
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                                 formcontrolname="email"
//                                 nowhitespace
//                                 type="email"
//                                 placeholder="Email"
//                               />
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-6 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 CCCD/Mã định danh công dân {/**/}
//                                 <span
//                                   _ngcontent-mjb-c9
//                                   className="text-danger ng-star-inserted"
//                                 >
//                                   (*)
//                                 </span>
//                               </label>
//                               <input
//                                 _ngcontent-mjb-c9
//                                 aria-describedby="helpId"
//                                 className="form-control ng-untouched ng-pristine ng-invalid"
//                                 formcontrolname="identification"
//                                 nowhitespace
//                                 type="text"
//                                 placeholder="CCCD/Mã định danh công dân"
//                               />
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Số thẻ BHYT{" "}
//                               </label>
//                               <input
//                                 _ngcontent-mjb-c9
//                                 aria-describedby="helpId"
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                                 formcontrolname="healthInsuranceNumber"
//                                 nowhitespace
//                                 type="text"
//                                 placeholder="Số thẻ BHYT"
//                               />
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Nghề nghiệp{" "}
//                               </label>
//                               <input
//                                 _ngcontent-mjb-c9
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                                 formcontrolname="jobName"
//                                 maxLength={200}
//                                 type="text"
//                                 placeholder="Nghề nghiệp"
//                               />
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Đơn vị công tác{" "}
//                               </label>
//                               <input
//                                 _ngcontent-mjb-c9
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                                 formcontrolname="workplace"
//                                 maxLength={255}
//                                 type="text"
//                                 placeholder="Đơn vị công tác"
//                               />
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-6 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 Địa chỉ hiện tại
//                               </label>
//                               <input
//                                 _ngcontent-mjb-c9
//                                 aria-describedby="helpId"
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                                 formcontrolname="address"
//                                 maxLength={255}
//                                 type="text"
//                                 placeholder="Địa chỉ hiện tại"
//                               />
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 Tỉnh/Thành phố
//                                 <span _ngcontent-mjb-c9 className="text-danger">
//                                   (*)
//                                 </span>
//                               </label>

//                               <select
//                                 name=""
//                                 id=""
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                               >
//                                 <option value="sds">dsad</option>
//                               </select>
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 Quận/Huyện{" "}
//                                 <span _ngcontent-mjb-c9 className="text-danger">
//                                   (*)
//                                 </span>
//                               </label>
//                               <select
//                                 name=""
//                                 id=""
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                               >
//                                 <option value="sds">dsad</option>
//                               </select>
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-6 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 Xã/Phường
//                                 <span _ngcontent-mjb-c9 className="text-danger">
//                                   (*)
//                                 </span>
//                               </label>

//                               <select
//                                 name=""
//                                 id=""
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                               >
//                                 <option value="sds">dsad</option>
//                               </select>
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Dân tộc{" "}
//                               </label>
//                               <select
//                                 name=""
//                                 id=""
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                               >
//                                 <option value="sds">dsad</option>
//                               </select>
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Quốc tịch{" "}
//                               </label>
//                               <select
//                                 name=""
//                                 id=""
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                               >
//                                 <option value="sds">dsad</option>
//                               </select>
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-6 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Nhóm ưu tiên{" "}
//                                 <span _ngcontent-mjb-c9 className="text-danger">
//                                   (*)
//                                 </span>
//                               </label>
//                               <select
//                                 name=""
//                                 id=""
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                               >
//                                 <option value="sds">dsad</option>
//                               </select>
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Họ và tên người giám hộ {/**/}
//                                 <span
//                                   _ngcontent-mjb-c9
//                                   className="text-danger ng-star-inserted"
//                                 >
//                                   (*)
//                                 </span>
//                               </label>
//                               <input
//                                 _ngcontent-mjb-c9
//                                 aria-describedby="helpId"
//                                 className="form-control ng-untouched ng-pristine ng-invalid"
//                                 formcontrolname="guardianFullName"
//                                 type="text"
//                                 placeholder="Họ và tên người giám hộ"
//                               />
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Quan hệ {/**/}
//                                 <span
//                                   _ngcontent-mjb-c9
//                                   className="text-danger ng-star-inserted"
//                                 >
//                                   (*)
//                                 </span>
//                               </label>
//                               <select
//                                 name=""
//                                 id=""
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                               >
//                                 <option value="sds">dsad</option>
//                               </select>
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Số điện thoại người giám hộ {/**/}
//                                 <span
//                                   _ngcontent-mjb-c9
//                                   className="text-danger ng-star-inserted"
//                                 >
//                                   (*)
//                                 </span>
//                               </label>
//                               <input
//                                 _ngcontent-mjb-c9
//                                 aria-describedby="helpId"
//                                 className="form-control ng-untouched ng-pristine ng-invalid"
//                                 formcontrolname="guardianPhoneNumber"
//                                 nowhitespace
//                                 type="text"
//                                 placeholder="Số điện thoại người giám hộ"
//                               />
//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-12 mb-2">
//                             <h6 _ngcontent-mjb-c9 className="sfbold">
//                               2. Thông tin đăng ký tiêm chủng
//                             </h6>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group mb-0">
//                               <label _ngcontent-mjb-c9>
//                                 {" "}
//                                 Ngày muốn được tiêm (dự kiến){" "}
//                               </label>
//                               <input
//                                 _ngcontent-mjb-c9
//                                 className="form-control w-100 ng-untouched ng-pristine ng-valid"
//                                 formcontrolname="dateOfInjectRegistration"
//                                 placeholder="Ngày/Tháng/Năm"
//                                 aria-haspopup="dialog"
//                                 min="1900-01-31T17:17:56Z"
//                               />

//                               {/**/}
//                             </div>
//                           </div>
//                           <div _ngcontent-mjb-c9 className="col-lg-3 col-md-12">
//                             <div _ngcontent-mjb-c9 className="form-group">
//                               <label _ngcontent-mjb-c9 htmlFor>
//                                 {" "}
//                                 Buổi tiêm mong muốn{" "}
//                               </label>
//                               <select
//                                 name=""
//                                 id=""
//                                 className="form-control ng-untouched ng-pristine ng-valid"
//                               >
//                                 <option value="sds">dsad</option>
//                               </select>
//                             </div>
//                           </div>
//                           {/**/}
//                           <div _ngcontent-mjb-c9 className="col-12">
//                             <h6
//                               _ngcontent-mjb-c9
//                               className="sfbold text-danger"
//                             >
//                               Lưu ý:
//                             </h6>
//                             <ul _ngcontent-mjb-c9 className="text-danger">
//                               <li _ngcontent-mjb-c9>
//                                 {" "}
//                                 Việc đăng ký thông tin hoàn toàn bảo mật và phục
//                                 vụ cho chiến dịch tiêm chủng Vắc xin COVID - 19{" "}
//                               </li>
//                               <li _ngcontent-mjb-c9>
//                                 {" "}
//                                 Xin vui lòng kiểm tra kỹ các thông tin bắt
//                                 buộc(VD: Họ và tên, Ngày tháng năm sinh, Số điện
//                                 thoại, CCCD/Mã định danh công dân/HC ...){" "}
//                               </li>
//                               <li _ngcontent-mjb-c9>
//                                 {" "}
//                                 Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn
//                                 hiểu và đồng ý chịu trách nhiệm với các thông
//                                 tin đã cung cấp.{" "}
//                               </li>
//                               <li _ngcontent-mjb-c9>
//                                 {" "}
//                                 Nếu bạn dưới 18 tuổi, vui lòng nhập số điện
//                                 thoại của người giám hộ để tra cứu{" "}
//                               </li>
//                             </ul>
//                           </div>
//                           <div
//                             _ngcontent-mjb-c9
//                             className="col-12 text-center mt-2 mb-2"
//                           >
//                             <button
//                               _ngcontent-mjb-c9
//                               className="btn btn-outline-danger  rounded radius20 p-2 wbtn mr-4"
//                               type="button"
//                             >
//                               <i
//                                 _ngcontent-mjb-c9
//                                 className="fa fa-chervon-left"
//                               />{" "}
//                               Hủy bỏ{" "}
//                             </button>
//                             <button
//                               _ngcontent-mjb-c9
//                               className="btn-primary btn rounded radius20 p-2 wbtn"
//                               type="button"
//                               disabled
//                             >
//                               {" "}
//                               Tiếp tục{" "}
//                               <i
//                                 _ngcontent-mjb-c9
//                                 className="icofont-rounded-right ml-0"
//                               />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </app-step-one>
//             <app-step-two _ngcontent-mjb-c8 _nghost-mjb-c10 hidden>
//               <div _ngcontent-mjb-c10 className="row">
//                 <div _ngcontent-mjb-c10 className="col-lg-12">
//                   <div _ngcontent-mjb-c10 className="row">
//                     <div
//                       _ngcontent-mjb-c10
//                       className="col-lg-12 col-md-12 aos-init aos-animate"
//                       data-aos="fade-up"
//                       data-aos-delay={200}
//                     >
//                       <table
//                         _ngcontent-mjb-c10
//                         className="table table-striped table-hover"
//                       >
//                         <thead _ngcontent-mjb-c10>
//                           <tr _ngcontent-mjb-c10>
//                             <th _ngcontent-mjb-c10 style={{ width: "40%" }}>
//                               Tiền sử
//                             </th>
//                             <th _ngcontent-mjb-c10>Triệu chứng</th>
//                             <th _ngcontent-mjb-c10 className="text-center">
//                               Có
//                             </th>
//                             <th _ngcontent-mjb-c10 className="text-center">
//                               Không
//                             </th>
//                             <th _ngcontent-mjb-c10 className="text-center">
//                               Không rõ
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody _ngcontent-mjb-c10>
//                           {/**/}
//                           <tr _ngcontent-mjb-c10 className="ng-star-inserted">
//                             <td _ngcontent-mjb-c10 scope="row">
//                               1. Tiền sử phản vệ từ độ 2 trở lên
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               {/**/}
//                               <input
//                                 _ngcontent-mjb-c10
//                                 className="form-control ng-untouched ng-pristine ng-star-inserted"
//                                 maxLength={1000}
//                                 type="text"
//                                 placeholder="Nếu có, ghi rõ loại tác nhân dị ứng"
//                                 disabled
//                               />
//                               {/**/}
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="1_yes"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="1_no"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="1_other"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                           </tr>
//                           <tr _ngcontent-mjb-c10 className="ng-star-inserted">
//                             <td _ngcontent-mjb-c10 scope="row">
//                               2. Tiền sử bị COVID-19 trong vòng 6 tháng
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               {/**/}
//                               {/**/}
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="2_yes"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="2_no"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="2_other"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                           </tr>
//                           <tr _ngcontent-mjb-c10 className="ng-star-inserted">
//                             <td _ngcontent-mjb-c10 scope="row">
//                               3. Tiền sử tiêm vắc xin khác trong 14 ngày qua
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               {/**/}
//                               <input
//                                 _ngcontent-mjb-c10
//                                 className="form-control ng-untouched ng-pristine ng-star-inserted"
//                                 maxLength={1000}
//                                 type="text"
//                                 placeholder="Nếu có, ghi rõ loại vắc xin"
//                                 disabled
//                               />
//                               {/**/}
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="3_yes"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="3_no"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="3_other"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                           </tr>
//                           <tr _ngcontent-mjb-c10 className="ng-star-inserted">
//                             <td _ngcontent-mjb-c10 scope="row">
//                               4. Tiền sử suy giảm miễn dịch, ung thư giai đoạn
//                               cuối, cắt lách, xơ gan mất bù ...
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               {/**/}
//                               {/**/}
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="4_yes"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="4_no"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="4_other"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                           </tr>
//                           <tr _ngcontent-mjb-c10 className="ng-star-inserted">
//                             <td _ngcontent-mjb-c10 scope="row">
//                               5. Đang dùng thuốc ức chế miễn dịch, corticoid
//                               liều ca (tương đương hoặc hơn 2mg
//                               prednisolon/kg/ngày trong ít nhất 7 ngày) hoặc
//                               điều trị hóa trị, xạ trị
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               {/**/}
//                               {/**/}
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="5_yes"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="5_no"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="5_other"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                           </tr>
//                           <tr _ngcontent-mjb-c10 className="ng-star-inserted">
//                             <td _ngcontent-mjb-c10 scope="row">
//                               6. Bệnh cấp tính
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               {/**/}
//                               <input
//                                 _ngcontent-mjb-c10
//                                 className="form-control ng-untouched ng-pristine ng-star-inserted"
//                                 maxLength={1000}
//                                 type="text"
//                                 placeholder="Nếu có, ghi rõ loại bệnh mắc"
//                                 disabled
//                               />
//                               {/**/}
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="6_yes"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="6_no"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="6_other"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                           </tr>
//                           <tr _ngcontent-mjb-c10 className="ng-star-inserted">
//                             <td _ngcontent-mjb-c10 scope="row">
//                               7. Tiền sử bệnh mạn tính, đang tiến triển
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               {/**/}
//                               <input
//                                 _ngcontent-mjb-c10
//                                 className="form-control ng-untouched ng-pristine ng-star-inserted"
//                                 maxLength={1000}
//                                 type="text"
//                                 placeholder="Nếu có, ghi rõ loại bệnh mắc"
//                                 disabled
//                               />
//                               {/**/}
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="7_yes"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="7_no"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="7_other"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                           </tr>
//                           <tr _ngcontent-mjb-c10 className="ng-star-inserted">
//                             <td _ngcontent-mjb-c10 scope="row">
//                               8. Tiền sử bệnh mạn tính đã điều trị ổn
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               {/**/}
//                               {/**/}
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="8_yes"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="8_no"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="8_other"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                           </tr>
//                           <tr _ngcontent-mjb-c10 className="ng-star-inserted">
//                             <td _ngcontent-mjb-c10 scope="row">
//                               9. Đang mang thai, phụ nữ đang nuôi con bằng sữa
//                               mẹ
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               {/**/}
//                               {/**/}
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="9_yes"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="9_no"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="9_other"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                           </tr>
//                           <tr _ngcontent-mjb-c10 className="ng-star-inserted">
//                             <td _ngcontent-mjb-c10 scope="row">
//                               10. Độ tuổi: ≥65 tuổi
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               {/**/}
//                               {/**/}
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="10_yes"
//                                 className="ng-untouched ng-pristine"
//                                 disabled
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="10_no"
//                                 className="ng-untouched ng-pristine"
//                                 disabled
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="10_other"
//                                 className="ng-untouched ng-pristine"
//                                 disabled
//                               />
//                             </td>
//                           </tr>
//                           <tr _ngcontent-mjb-c10 className="ng-star-inserted">
//                             <td _ngcontent-mjb-c10 scope="row">
//                               11. Tiền sử rối loạn đông máu/cầm máu hoặc đang
//                               dùng thuốc chống đông
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               {/**/}
//                               {/**/}
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="11_yes"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="11_no"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="11_other"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                           </tr>
//                           <tr _ngcontent-mjb-c10 className="ng-star-inserted">
//                             <td _ngcontent-mjb-c10 scope="row">
//                               12. Tiền sử dị ứng với các dị nguyên khác
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               {/**/}
//                               <input
//                                 _ngcontent-mjb-c10
//                                 className="form-control ng-untouched ng-pristine ng-star-inserted"
//                                 maxLength={1000}
//                                 type="text"
//                                 placeholder="Nếu có, ghi rõ"
//                                 disabled
//                               />
//                               {/**/}
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="12_yes"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="12_no"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                             <td _ngcontent-mjb-c10 className="text-center">
//                               <input
//                                 _ngcontent-mjb-c10
//                                 type="radio"
//                                 id="12_other"
//                                 className="ng-untouched ng-pristine ng-valid"
//                               />
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                     <div _ngcontent-mjb-c10 className="col-12 text-center mt-3">
//                       <button
//                         _ngcontent-mjb-c10
//                         className="btn-secondary btn rounded radius20 p-2 mr-3 wbtn"
//                         type="button"
//                       >
//                         <i
//                           _ngcontent-mjb-c10
//                           className="icofont-rounded-left ml-0"
//                         />{" "}
//                         Quay lại{" "}
//                       </button>
//                       <button
//                         _ngcontent-mjb-c10
//                         className="btn-primary btn rounded radius20 p-2 wbtn"
//                         type="button"
//                       >
//                         {" "}
//                         Tiếp tục{" "}
//                         <i
//                           _ngcontent-mjb-c10
//                           className="icofont-rounded-right ml-0"
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </app-step-two>
//             <app-step-three _ngcontent-mjb-c8 _nghost-mjb-c11 hidden>
//               <div _ngcontent-mjb-c11 className="row">
//                 <div _ngcontent-mjb-c11 className="col-lg-12">
//                   <div _ngcontent-mjb-c11 className="row">
//                     <div
//                       _ngcontent-mjb-c11
//                       className="col-12 aos-init aos-animate"
//                       data-aos="fade-up"
//                       data-aos-delay={200}
//                     >
//                       <ul _ngcontent-mjb-c11 className="list-unstyled">
//                         <li
//                           _ngcontent-mjb-c11
//                           className="mb-3"
//                           style={{ lineHeight: "25pt" }}
//                         >
//                           <div
//                             _ngcontent-mjb-c11
//                             className="d-flex flex-row"
//                             style={{ alignItems: "center" }}
//                           >
//                             <img
//                               _ngcontent-mjb-c11
//                               alt
//                               className="mr-3"
//                               src="assets/portal/img/shield.svg"
//                               style={{ width: 25, height: 50 }}
//                             />
//                             <p _ngcontent-mjb-c11>
//                               1. Tiêm chủng vắc xin là biện pháp phòng chống
//                               dịch hiệu quả, tuy nhiên vắc xin phòng COVID-19 có
//                               thể không phòng được bệnh hoàn toàn. Người được
//                               tiêm chủng vắc xin phòng COVID-19 có thể phòng
//                               được bệnh hoặc giảm mức độ nặng nếu mắc bệnh. Tuy
//                               nhiên, sau khi tiêm chủng vẫn phải tiếp tục thực
//                               hiện nghiêm các biện pháp phòng chống dịch theo
//                               quy định.
//                             </p>
//                           </div>
//                         </li>
//                         <li
//                           _ngcontent-mjb-c11
//                           className="mb-3"
//                           style={{ lineHeight: "25pt" }}
//                         >
//                           <div
//                             _ngcontent-mjb-c11
//                             className="d-flex flex-row"
//                             style={{ alignItems: "center" }}
//                           >
//                             <img
//                               _ngcontent-mjb-c11
//                               alt
//                               className="mr-3"
//                               src="assets/portal/img/vaccine2.svg"
//                               style={{ width: 25, height: 50 }}
//                             />
//                             <p _ngcontent-mjb-c11>
//                               2. Tiêm chủng vắc xin phòng COVID-19 có thể gây ra
//                               một số biểu hiện tại chỗ tiêm hoặc toàn thân như
//                               sưng, đau chỗ tiêm, nhức đầu, buồn nôn, sốt, đau
//                               cơ…hoặc tai biến nặng sau tiêm chủng. Tiêm vắc xin
//                               mũi 2 do Pfizer sản xuất ở người đã tiêm mũi 1
//                               bằng vắc xin AstraZeneca có thể tăng khả năng xảy
//                               ra phản ứng thông thường sau tiêm chủng.
//                             </p>
//                           </div>
//                         </li>
//                         <li
//                           _ngcontent-mjb-c11
//                           className="mb-3"
//                           style={{ lineHeight: "25pt" }}
//                         >
//                           <div
//                             _ngcontent-mjb-c11
//                             className="d-flex flex-row"
//                             style={{ alignItems: "center" }}
//                           >
//                             <img
//                               _ngcontent-mjb-c11
//                               alt
//                               className="mr-3"
//                               src="assets/portal/img/hospital.svg"
//                               style={{ width: 25, height: 50 }}
//                             />
//                             <p _ngcontent-mjb-c11>
//                               3. Khi có triệu chứng bất thường về sức khỏe,
//                               người được tiêm chủng cần đến ngay cơ sở y tế gần
//                               nhất để được tư vấn, thăm khám và điều trị kịp
//                               thời.{" "}
//                             </p>
//                           </div>
//                         </li>
//                       </ul>
//                       <hr _ngcontent-mjb-c11 />
//                       <div _ngcontent-mjb-c11 className="form-inline">
//                         <p _ngcontent-mjb-c11 className="mt-3 ml-3">
//                           {" "}
//                           Sau khi đã đọc các thông tin nêu trên, tôi đã hiểu về
//                           các nguy cơ và:{" "}
//                           <input
//                             _ngcontent-mjb-c11
//                             className="form-control ml-4 ng-untouched ng-pristine ng-valid"
//                             style={{ width: 20, height: 20 }}
//                             type="checkbox"
//                           />{" "}
//                           Đồng ý tiêm chủng
//                         </p>
//                       </div>
//                       <div _ngcontent-mjb-c11 className="col-12 text-center">
//                         <button
//                           _ngcontent-mjb-c11
//                           className="btn-secondary btn rounded radius20 p-2 mr-3 wbtn"
//                           type="button"
//                         >
//                           <i
//                             _ngcontent-mjb-c11
//                             className="icofont-rounded-left ml-0"
//                           />{" "}
//                           Quay lại{" "}
//                         </button>
//                         <button
//                           _ngcontent-mjb-c11
//                           className="btn-primary btn rounded radius20 p-2 wbtn"
//                           type="button"
//                           disabled
//                         >
//                           {" "}
//                           Xác nhận{" "}
//                           <i
//                             _ngcontent-mjb-c11
//                             className="icofont-rounded-right ml-0"
//                           />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </app-step-three>
//             <app-step-four _ngcontent-mjb-c8 _nghost-mjb-c12 hidden>
//               <div _ngcontent-mjb-c12 className="row">
//                 <div _ngcontent-mjb-c12 className="col-lg-12">
//                   <div
//                     _ngcontent-mjb-c12
//                     className="row"
//                     style={{ height: "auto" }}
//                   >
//                     <div
//                       _ngcontent-mjb-c12
//                       className="col-12 aos-init aos-animate"
//                       data-aos="fade-up"
//                       data-aos-delay={200}
//                     >
//                       <div _ngcontent-mjb-c12 className="row">
//                         <div
//                           _ngcontent-mjb-c12
//                           className="col-12 text-center mb-5"
//                         >
//                           <h5 _ngcontent-mjb-c12 className="sfbold">
//                             Đăng ký tiêm chủng COVID-19 thành công. Mã đặt tiêm
//                             của bạn là{" "}
//                             <span className="text-red">
//                               {"{"}
//                               {"{"} code {"}"}
//                               {"}"}
//                             </span>
//                             .
//                           </h5>
//                           <p _ngcontent-mjb-c12>
//                             Cảm ơn quý khách đã đăng ký tiêm chủng vắc xin
//                             COVID-19. Hiện tại Bộ y tế đang tiến hành thu thập
//                             nhu cầu và thông tin để lập danh sách đối tượng đăng
//                             ký tiêm vắc xin COVID-19 theo từng địa bàn. Chúng
//                             tôi sẽ liên hệ với quý khách theo số điện thoại{" "}
//                             <span className="text-primary sfbold">
//                               {" "}
//                               {"{"}
//                               {"{"} phone {"}"}
//                               {"}"}{" "}
//                             </span>{" "}
//                             khi có kế hoạch tiêm trong thời gian sớm nhất.
//                           </p>
//                           <br _ngcontent-mjb-c12 />
//                           <p _ngcontent-mjb-c12>
//                             Mời bạn tải ứng dụng "SỔ SỨC KHỎE ĐIỆN TỬ" tại
//                             <a href="https://hssk.kcb.vn/#/sskdt">
//                               {" "}
//                               https://hssk.kcb.vn/#/sskdt{" "}
//                             </a>
//                             để theo dõi kết quả đăng ký tiêm và nhận chứng nhận
//                             tiêm chủng COVID-19
//                           </p>
//                         </div>
//                         <hr _ngcontent-mjb-c12 />
//                         <div _ngcontent-mjb-c12 className="col-lg-4 col-md-6">
//                           <p _ngcontent-mjb-c12 className="mb-1">
//                             Họ và tên
//                           </p>
//                           <p _ngcontent-mjb-c12 className="sfbold text-dark" />
//                         </div>
//                         <div _ngcontent-mjb-c12 className="col-lg-4 col-md-6">
//                           <p _ngcontent-mjb-c12 className="mb-1">
//                             Ngày sinh
//                           </p>
//                           <p _ngcontent-mjb-c12 className="sfbold text-dark" />
//                         </div>
//                         <div _ngcontent-mjb-c12 className="col-lg-4 col-md-6">
//                           <p _ngcontent-mjb-c12 className="mb-1">
//                             Giới tính
//                           </p>
//                           <p _ngcontent-mjb-c12 className="sfbold text-dark">
//                             Nữ
//                           </p>
//                         </div>
//                         <div _ngcontent-mjb-c12 className="col-lg-4 col-md-6">
//                           <p _ngcontent-mjb-c12 className="mb-1">
//                             Số điện thoại
//                           </p>
//                           <p _ngcontent-mjb-c12 className="sfbold text-dark" />
//                         </div>
//                         <div _ngcontent-mjb-c12 className="col-lg-4 col-md-6">
//                           <p _ngcontent-mjb-c12 className="mb-1">
//                             CCCD/Mã định danh công dân
//                           </p>
//                           <p _ngcontent-mjb-c12 className="sfbold text-dark" />
//                         </div>
//                         <div _ngcontent-mjb-c12 className="col-lg-4 col-md-6">
//                           <p _ngcontent-mjb-c12 className="mb-1">
//                             Số thẻ BHYT
//                           </p>
//                           <p _ngcontent-mjb-c12 className="sfbold text-dark" />
//                         </div>
//                         <div _ngcontent-mjb-c12 className="col-lg-12 col-md-6">
//                           <p _ngcontent-mjb-c12 className="mb-1">
//                             Địa chỉ hiện tại
//                           </p>
//                           <p _ngcontent-mjb-c12 className="sfbold text-dark" />
//                         </div>
//                         <div _ngcontent-mjb-c12 className="col-lg-4 col-md-6">
//                           <p _ngcontent-mjb-c12 className="mb-1">
//                             Tỉnh/Thành phố
//                           </p>
//                           <p _ngcontent-mjb-c12 className="sfbold text-dark" />
//                         </div>
//                         <div _ngcontent-mjb-c12 className="col-lg-4 col-md-6">
//                           <p _ngcontent-mjb-c12 className="mb-1">
//                             Quận/Huyện
//                           </p>
//                           <p _ngcontent-mjb-c12 className="sfbold text-dark" />
//                         </div>
//                         <div _ngcontent-mjb-c12 className="col-lg-4 col-md-6">
//                           <p _ngcontent-mjb-c12 className="mb-1">
//                             Xã/Phường
//                           </p>
//                           <p _ngcontent-mjb-c12 className="sfbold text-dark" />
//                         </div>
//                         <div _ngcontent-mjb-c12 className="col-lg-4 col-md-6" />
//                         <div
//                           _ngcontent-mjb-c12
//                           className="col-12 text-center mt-2 mb-2"
//                         >
//                           <button
//                             _ngcontent-mjb-c12
//                             className="btn btn-primary rounded radius20 p-2 wbtn mr-4"
//                             routerlink="/portal"
//                             type="button"
//                             tabIndex={0}
//                           >
//                             <i
//                               _ngcontent-mjb-c12
//                               className="fa fa-chervon-left"
//                             />
//                             Trang chủ{" "}
//                           </button>
//                           <button
//                             _ngcontent-mjb-c12
//                             className="btn btn-outline-success rounded radius20 p-2 wbtn"
//                           >
//                             <i
//                               _ngcontent-mjb-c12
//                               className="bi bi-file-excel mr-1"
//                             />
//                             Xuất thông tin{" "}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </app-step-four>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }
