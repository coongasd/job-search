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
                    
                </div>
                <div class="BoxTop_Text_Button">
                    
                </div>
            </div>
            <div class="Manager_CV_BoxBottom">

            </div>
        </div>
      </div>
    );
}

export default Manager_CV;