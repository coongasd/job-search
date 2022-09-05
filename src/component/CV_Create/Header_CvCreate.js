import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Action/UserAction";
import { FaGift, FaLongArrowAltUp,FaUser,FaCog,FaSignOutAlt } from "react-icons/fa";
import {Link} from 'react-router-dom'
import './style.css'

function Header_CvCreate() {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo, loading, error } = userLogin;



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
                            <li><a href="#"><img src="images/message.png" alt="logo"></img></a></li>
                            <li class="nav_links_image name_user">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_q8yprYUCumkTMHohLWFK6pXeIMCggV-aYyKrr4gjA" alt="logo"></img>
                                <p>{userInfo?.name}</p>
                                <div class="subnav">
                                    <div>
                                        <ul class="subnav_list_avatar">
                                            <div>
                                                <li class="items_icons_text">
                                                    <FaLongArrowAltUp display={'block'}></FaLongArrowAltUp>
                                                    <p>Nâng cấp tài khoản vip</p>
                                                </li>
                                                <Link to="/profile">
                                                    <li class="items_icons_text">
                                                        <FaUser display={'block'}></FaUser>
                                                        <p>Hồ sơ</p>
                                                    </li>
                                                </Link>
                                                <Link to="/profile/setting">
                                                    <li class="items_icons_text">
                                                        <FaCog display={'block'}></FaCog>
                                                        <p>Chỉnh sửa hồ sơ</p>
                                                    </li>
                                                </Link>

                                                <li class="items_icons_text">
                                                    <FaGift display={'block'}></FaGift>
                                                    <p>Cài đặt gợi ý việc làm</p>
                                                </li>
                                                <li class="items_icons_text">
                                                    <FaGift display={'block'}></FaGift>
                                                    <p>Cài đặt nhận Email</p>
                                                </li>
                                                <li class="items_icons_text">
                                                    <FaGift display={'block'}></FaGift>
                                                    <p>Cài đặt bảo mật</p>
                                                </li>
                                                <li class="items_icons_text">
                                                    <FaGift display={'block'}></FaGift>
                                                    <p>Đổi mật khẩu</p>
                                                </li>
                                                <li class="items_icons_text">
                                                    <FaSignOutAlt display={'block'}></FaSignOutAlt>
                                                
                                                    <a onClick={() => dispatch(logout())} href="#"><p style={{ color: 'red' }}>Đăng xuất</p></a>
                                                </li>
                                            </div>

                                        </ul>

                                    </div>
                                    <div class="subnav_img">

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header_CvCreate
