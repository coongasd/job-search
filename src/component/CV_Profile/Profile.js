import React, { useEffect } from 'react'
import $ from 'jquery'
import './style.css'
function Profile(location) {

    function chooseFile(fileInput) {
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();

            reader.onload = function (event) {
                $('#image').attr('src', event.target.result);
            }
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
    useEffect(() => {

        var button = document.querySelector('button')
        if (button !== null) {
            button.onclick = () => {
                window.print();
            }
            function move() {
                location.assign("index2.html")
            }
        }





    }, [])


    return (
        <div>
            <div class="print-area">
                <div class="header">
                    <form action="">
                        <img src="./images/ezra.jpg" id="image" />
                        <input onChange={chooseFile(this)} type="file" name="" class="custom-file-input" id="imageFile"
                            accept="image/gif , image/jpeg , image/png" />
                    </form>
                    <div class="header-text">
                        <h1> Ezra Miler</h1>
                        <p>Game Designer & Web Designer</p>
                    </div>

                </div>

                <div class="content">
                    <div class="left-area">
                        <div class="contact">
                            <h4>CONTACT</h4>
                            <h5>Name</h5>
                            <p>Ezra Miler</p>
                            <h5>Phone</h5>
                            <p>+98</p>
                            <h5>Email</h5>
                            <p>@gmail.com</p>
                        </div>
                        <div class="skills">
                            <h1>SKILLS</h1>
                            <div class="bars">
                                <div class="bar">
                                    <p>Photoshop</p>
                                    <span></span>
                                </div>
                                <div class="bar">
                                    <p>HTML/CSS</p>
                                    <span></span>
                                </div>
                                <div class="bar">
                                    <p>Javascript</p>
                                    <span></span>
                                </div>
                                <div class="bar">
                                    <p>PHP</p>
                                    <span></span>
                                </div>
                                <div class="bar">
                                    <p>SQL Server</p>
                                    <span></span>
                                </div>
                                <div class="bar">
                                    <p>C++</p>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div class="follow">
                            <h1>FLLOW ME</h1>
                            <h4>Facebook</h4>
                            <p>facebook.com/username</p>
                            <h4>Instagram</h4>
                            <p>instagram.com/username</p>
                        </div>
                    </div>
                    <div class="right-area">
                        <div class="about">
                            <h1 /><span>
                                <i class="far fa-user"></i>
                                ABOUT ME</span>
                            <p>Đỗ Minh Giang là tên mà ba mẹ đặt cho lúc em mới ra đời. Nhưng mọi người trong nhà vẫn
                                quen
                                gọi em là Bé Còi. Cái tên đó xem ra rất hợp với thân hình nhỏ nhắn và nói đúng hơn là
                                còi
                                cọc của em. Ăn rất khoẻ nhưng em nghịch cũng dữ nên mẹ bảo em không thể lớn được. Tuy là
                                con
                                gái nhưng em nghịch như tụi con trai. Mỗi buổi chiều đi học về em thường cùng tụi thằng
                                Sơn,
                                thằng Phúc xách chai đi đổ dế. Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng.
                                Trong nhà em toàn bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng
                                cả.
                                Ba thường vừa cười vừa trêu em “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng”. Thành
                                tích
                                học tập của em rất tốt. Năm ngoái em còn được nhà trường cử đi thi học sinh giỏi môn
                                Toán
                                nữa đấy. Mơ ước lớn nhất của em là được trở thành phi công, lái những chiếc máy bay thật
                                lớn, thật to bay lên bầu trời cao và trong xanh trên kia. Em tin chắc rằng mình sẽ thực
                                hiện
                                được ước mơ đó.</p>
                        </div>
                        <div class="work">
                            <h1><span><i class="fas fa-suitcase-rolling"></i>
                                WORK EXPERIENCE</span></h1>
                            <div class="work-group">
                                <h3>LEAD WEB DESIGNER</h3>
                                <h4>ETC COLLEGE AMERICA</h4>
                                <span>2014/2016</span>
                                <p>Đỗ Minh Giang là tên mà ba mẹ đặt cho lúc em mới ra đời. Nhưng mọi người trong nhà vẫn
                                    quen
                                    gọi em là Bé Còi. Cái tên đó xem ra rất hợp với thân hình nhỏ nhắn và nói đúng hơn là
                                    còi
                                    cọc của em. Ăn rất khoẻ nhưng em nghịch cũng dữ nên mẹ bảo em không thể lớn được. Tuy là
                                    con
                                    gái nhưng em nghịch như tụi con trai. Mỗi buổi chiều đi học về em thường cùng tụi thằng
                                    Sơn,
                                    thằng Phúc xách chai đi đổ dế. Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng.
                                    Trong nhà em toàn bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng
                                    cả.
                                    Ba thường vừa cười vừa trêu em “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng”. Thành
                                    tích
                                    học tập của em rất tốt. Năm ngoái em còn được nhà trường cử đi thi học sinh giỏi môn
                                    Toán
                                    nữa đấy. Mơ ước lớn nhất của em là được trở thành phi công, lái những chiếc máy bay thật
                                    lớn, thật to bay lên bầu trời cao và trong xanh trên kia. Em tin chắc rằng mình sẽ thực
                                    hiện
                                    được ước mơ đó.</p>
                            </div>
                            <div class="work-group">
                                <h3>LEAD WEB DESIGNER</h3>
                                <h4>ETC COLLEGE AMERICA</h4>
                                <span>2014/2016</span>
                                <p>Đỗ Minh Giang là tên mà ba mẹ đặt cho lúc em mới ra đời. Nhưng mọi người trong nhà vẫn
                                    quen
                                    gọi em là Bé Còi. Cái tên đó xem ra rất hợp với thân hình nhỏ nhắn và nói đúng hơn là
                                    còi
                                    cọc của em. Ăn rất khoẻ nhưng em nghịch cũng dữ nên mẹ bảo em không thể lớn được. Tuy là
                                    con
                                    gái nhưng em nghịch như tụi con trai. Mỗi buổi chiều đi học về em thường cùng tụi thằng
                                    Sơn,
                                    thằng Phúc xách chai đi đổ dế. Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng.
                                    Trong nhà em toàn bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng
                                    cả.
                                    Ba thường vừa cười vừa trêu em “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng”. Thành
                                    tích
                                    học tập của em rất tốt. Năm ngoái em còn được nhà trường cử đi thi học sinh giỏi môn
                                    Toán
                                    nữa đấy. Mơ ước lớn nhất của em là được trở thành phi công, lái những chiếc máy bay thật
                                    lớn, thật to bay lên bầu trời cao và trong xanh trên kia. Em tin chắc rằng mình sẽ thực
                                    hiện
                                    được ước mơ đó.</p>
                            </div>
                            <div class="work-group">
                                <h3>LEAD WEB DESIGNER</h3>
                                <h4>ETC COLLEGE AMERICA</h4>
                                <span>2014/2016</span>
                                <p>Đỗ Minh Giang là tên mà ba mẹ đặt cho lúc em mới ra đời. Nhưng mọi người trong nhà vẫn
                                    quen
                                    gọi em là Bé Còi. Cái tên đó xem ra rất hợp với thân hình nhỏ nhắn và nói đúng hơn là
                                    còi
                                    cọc của em. Ăn rất khoẻ nhưng em nghịch cũng dữ nên mẹ bảo em không thể lớn được. Tuy là
                                    con
                                    gái nhưng em nghịch như tụi con trai. Mỗi buổi chiều đi học về em thường cùng tụi thằng
                                    Sơn,
                                    thằng Phúc xách chai đi đổ dế. Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng.
                                    Trong nhà em toàn bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng
                                    cả.
                                    Ba thường vừa cười vừa trêu em “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng”. Thành
                                    tích
                                    học tập của em rất tốt. Năm ngoái em còn được nhà trường cử đi thi học sinh giỏi môn
                                    Toán
                                    nữa đấy. Mơ ước lớn nhất của em là được trở thành phi công, lái những chiếc máy bay thật
                                    lớn, thật to bay lên bầu trời cao và trong xanh trên kia. Em tin chắc rằng mình sẽ thực
                                    hiện
                                    được ước mơ đó.</p>
                            </div>
                        </div>
                        <div class="education">
                            <h1><span><i class="fas fa-book"></i>
                                EDUCATION</span></h1>
                            <div class="edu-group">
                                <h4>Go to sleep <br />
                                </h4>
                                <span>1992/1995</span>
                                <p>Đỗ Minh Giang là tên mà ba mẹ đặt cho lúc em mới ra đời. Nhưng mọi người trong nhà vẫn
                                    quen
                                    gọi
                                    em là Bé Còi. Cái tên đó xem ra rất hợp với thân hình nhỏ nhắn và nói đúng hơn là còi
                                    cọc
                                    của
                                    em. Ăn rất khoẻ nhưng em nghịch cũng dữ nên mẹ bảo em không thể lớn được. Tuy là con gái
                                    nhưng
                                    em nghịch như tụi con trai. Mỗi buổi chiều đi học về em thường cùng tụi thằng Sơn, thằng
                                    Phúc
                                    xách chai đi đổ dế. Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng. Trong nhà
                                    em
                                    toàn
                                    bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng cả. Ba thường vừa
                                    cười
                                    vừa trêu em “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng”. Thành tích học tập của em
                                    rất
                                    tốt. Năm ngoái em còn được nhà trường cử đi thi học sinh giỏi môn Toán nữa đấy. Mơ ước
                                    lớn
                                    nhất
                                    của em là được trở thành phi công, lái những chiếc máy bay thật lớn, thật to bay lên bầu
                                    trời
                                    cao và trong xanh trên kia. Em tin chắc rằng mình sẽ thực hiện được ước mơ đó.</p>
                            </div>
                            <div class="edu-group">
                                <h4>Go to sleep <br />
                                </h4>
                                <span>1992/1997</span>
                                <p>Đỗ Minh Giang là tên mà ba mẹ đặt cho lúc em mới ra đời. Nhưng mọi người trong nhà vẫn
                                    quen
                                    gọi
                                    em là Bé Còi. Cái tên đó xem ra rất hợp với thân hình nhỏ nhắn và nói đúng hơn là còi
                                    cọc
                                    của
                                    em. Ăn rất khoẻ nhưng em nghịch cũng dữ nên mẹ bảo em không thể lớn được. Tuy là con gái
                                    nhưng
                                    em nghịch như tụi con trai. Mỗi buổi chiều đi học về em thường cùng tụi thằng Sơn, thằng
                                    Phúc
                                    xách chai đi đổ dế. Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng. Trong nhà
                                    em
                                    toàn
                                    bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng cả. Ba thường vừa
                                    cười
                                    vừa trêu em “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng”. Thành tích học tập của em
                                    rất
                                    tốt. Năm ngoái em còn được nhà trường cử đi thi học sinh giỏi môn Toán nữa đấy. Mơ ước
                                    lớn
                                    nhất
                                    của em là được trở thành phi công, lái những chiếc máy bay thật lớn, thật to bay lên bầu
                                    trời
                                    cao và trong xanh trên kia. Em tin chắc rằng mình sẽ thực hiện được ước mơ đó.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile