import React from "react"
import './style.css'

function Header_CvCreate () {
    return (
        <div class="wrappar">
        <header>
           <div class="noti">
                <p>Tài khoản của bạn chưa được xác thực. Vui lòng xác thực tài khoản</p>
                <a href="#">tại đây</a>
           </div>
           <nav class="header_nav">
                <div >
                    <ul class="nav_links">
                        <li><a href="#"><img src="images/logo.png" alt="logo"></img></a></li>
                        <li><a href="#">Việc làm</a></li>
                        <li>
                            <a href="#">Hồ sơ & CV</a>
                            <div class="subnav">
                                <div>
                                    <ul class="subnav_list">
                                        <li>Quản lý CV</li>
                                        <li>Quản lý cover letter</li>
                                        <li>Mẫu CV</li>
                                        <li>Mẫu CV Letter</li>
                                        <li>Dịch vụ tư vấn CV</li>
                                        <li>Hướng dẫn viết CV theo ngành nghề</li>
                                        <li>Top CV profile</li>
                                    </ul>
        
                                </div>
                                <div class="subnav_img">
                                    <img src="https://www.topcv.vn/v4/image/nav-cv.png?v=1.0.0" alt=""></img>
                                </div>
                            </div>
                        </li>
                        <li><a href="#">Công ty</a></li>
                        <li><a href="#">Phát triển sự nghiệp</a></li>
                        <li><a href="#">Công cụ</a></li>
                    </ul>
                </div>
                <div >
                    <ul class="nav_links">
                        <li><a href="#">Công ty</a></li>
                        <li><a href="#">Công cụ</a></li>
                    </ul>
                </div>
           </nav>
        </header>
    </div>
    )
}

export default Header_CvCreate
