import React from "react";
import Header from "../MainPage/Header";
import './style.css'

function Manager_CV () {
    return (
      <div class="Manager_CV_Container">
        <div class="Manager_CV_BoxLeft">
            <div class="Manager_CV_Items">
                <img class="Banner_Image" src="images/job-banner.jpg" alt="banner Job search"></img>
            </div>

            <div class="Manager_CV_Items">
                <div class="Text_Button">
                    <h1>CV đã tạo trên job search</h1>
                    <button>+ Tạo CV</button>
                </div>
                <div class="Text_Image">
                    <img src="https://www.topcv.vn/v4/image/cv-manager/no-cv.png"></img>
                    <p>Bạn chưa tạo cv nào</p>
                </div>
            </div>

            <div class="Manager_CV_Items">
            <div class="Text_Button">
                    <h1>CV đã tải lên job search</h1>
                    <button>^ Tải CV lên</button>
                </div>
                <div class="Text_Image">
                    <img src="https://www.topcv.vn/v4/image/cv-manager/no-cv-upload.png"></img>
                    <p>Bạn chưa tải cv nào lên</p>
                </div>
            </div>

            <div class="Manager_CV_Items">
            <div class="Text_Button">
                    <h1>job search profile</h1>
                    <button>+ Tạo CV</button>
                </div>
                <div class="Text_Image">
                    <img src="https://www.topcv.vn/v4/image/cv-manager/no-profile.png"></img>
                    <p>Bạn chưa tạo job search profile nào</p>
                </div>
            </div>
        </div>
        <div class="Manager_CV_BoxRight">
            <div class="Manager_CV_BoxTop">
                <div class="BoxTop_Avatar">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_q8yprYUCumkTMHohLWFK6pXeIMCggV-aYyKrr4gjA"></img>
                    <a>Cập nhật ảnh</a>
                </div>
               
                <div class="BoxTop_Text_Button">
                    <p>Chào mừng trở lại</p>
                    <h1>Hacker ẩn danh</h1>
                    <p>Tài khoản chưa được xác thực</p>
                    <button class="BoxRight_Button">Nâng cấp tài khoản</button>
                </div>
                <div class="BoxRight_CheckBox">
                    <div>
                        <input type={'checkbox'} class="check" />
                        <p class="checkbox_text">Trạng thái tìm kiếm việc làm</p>
                    </div>
                    <div class="text_dicription">
                        <p>Bật tìm việc để nhận được nhiều cơ hội việc làm tốt nhất từ Job Search.</p>
                    </div>
                    
                </div>

                <div class="BoxRight_CheckBox">
                    <div>
                        <input type={'checkbox'} class="check" />
                        <p class="checkbox_text">Cho phép NTD liên hệ bạn qua</p>
                    </div>
                    <div class="text_dicription">
                        <p>Bật để cho phép các đơn vị tuyển dụng uy tín, 
                            Headhunter đã được Job search xác thực xem CV Online của bạn.
                        </p>

                        <p style={{color: "red", padding: '20px 0'}} >Khởi tạo TopCV Profile để gia tăng 300% cơ hội việc làm tốt
                        </p>

                        <button style={{position: 'absolute', left:'-14px', width: '275px'}} class="BoxRight_Button">Tạo JobSearch Profile</button>
                    </div>
                </div>
            </div>
            <div class="Manager_CV_BoxBottom">

            </div>
        </div>
      </div>
    );
}

export default Manager_CV;