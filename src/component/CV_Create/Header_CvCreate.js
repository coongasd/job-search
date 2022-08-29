import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Action/UserAction";
import './style.css'

function Header_CvCreate () {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo, loading, error} = userLogin;


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
                        <li>
                            <a href="/">Việc làm</a>
                            <div class="subnav">
                                <div>
                                    <ul class="subnav_list">
                                        <li>Tìm việc làm</li>
                                        <li>Việc làm đã ứng tuyển</li>
                                        <li>Việc làm đã lưu</li>
                                        <li>Việc làm phủ hợp</li>
                                        <li>Việc làm từ xa</li>
                                        <li>Việc là IT</li>
                                        <li>Việc làm senior</li>
                                    </ul>
                                </div>
                                <div class="subnav_img">
                                    <img src="https://www.topcv.vn/v4/image/nav-job.png?v=1.0.0" alt=""></img>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="/cv_create">Hồ sơ & CV</a>
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
                        <li>
                            <a href="#">Công ty</a>
                            <div class="subnav">
                                <div>
                                    <ul class="subnav_list">
                                        <li>Danh sách công ty</li>
                                        <li>Top công ty</li>   
                                    </ul>
        
                                </div>
                                <div class="subnav_img">
                                   
                                </div>
                            </div>
                        </li>
                        <li><a href="#">Phát triển sự nghiệp</a></li>
                        <li><a href="#">Công cụ</a></li>
                    </ul>
                </div>
                <div >
                    <ul class="nav_links">
                        <li><a onClick={() => dispatch(logout())} href="#"><img src="images/message.png" alt="logo"></img></a></li>
                        <li>
                            <a href="/profile"><img src="images/admin.jpg" alt="logo"></img>
                              <p>{userInfo?.name}</p>
                            </a>
                        </li>
                   
                    </ul>
                </div>
           </nav>
        </header>
    </div>
    )
}

export default Header_CvCreate
