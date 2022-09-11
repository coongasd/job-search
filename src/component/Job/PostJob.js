import React from "react";
import "../Job/style.css";
import Header_CvCreate from "../CV_Create/Header_CvCreate";
function PostJob() {
  return (
    <div className="post_wrapper">
      <Header_CvCreate></Header_CvCreate>
      <h1>ĐĂNG TIN</h1>
      <div className="post_forms">
        <div className="icon_form"></div>
        <div className="Information_form">
          <form className="list_form">
            <div className="item_form">
              <div>
                <h1>Việc cần tuyển</h1>
                <p>Chọn lĩnh vực cần tuyển</p>
              </div>
              <select
                id="vlance_jobbundle_jobtype_category"
                name="vlance_jobbundle_jobtype[category]"
                required="required"
                placeholder="Chọn lĩnh vực phù hợp"
                data-toggle="popover"
                data-placement="top"
                data-content="Chọn lĩnh vực phù hợp"
                data-trigger="hover"
                class="popovers-input span12"
              >
                <option disabled="disabled" selected="selected">
                  - Tên lĩnh vực -
                </option>{" "}
                <optgroup label="IT và lập trình">
                  <option value="2">Lập trình web</option>
                  <option value="3">Ứng dụng di động</option>
                  <option value="8">Việc lập trình khác</option>
                  <option value="9">Lập trình phần mềm</option>
                  <option value="10">Tối ưu cho công cụ tìm kiếm - SEO</option>
                  <option value="11">Tư vấn, thiết kế hệ thống mạng</option>
                  <option value="40">QA Tester</option>
                  <option value="42">Quản lý dự án</option>
                  <option value="71">Lập trình nhúng</option>
                  <option value="72">
                    AI - Trí tuệ nhân tạo, Machine Learning
                  </option>{" "}
                </optgroup>
                <optgroup label="Marketing &amp; Bán hàng">
                  <option value="26">Quảng cáo google adwords – SEM</option>
                  <option value="27">Cộng tác viên bán hàng</option>
                  <option value="28">
                    Tư vấn bán hàng &amp; Giới thiệu sản phẩm
                  </option>
                  <option value="29">
                    Nghiên cứu &amp; khảo sát thị trường
                  </option>
                  <option value="30">Việc KD và marketing khác</option>
                  <option value="33">Tổ chức sự kiện</option>
                  <option value="50">
                    Tư vấn, lập kế hoạch &amp; triển khai marketing online
                  </option>
                  <option value="51">Quảng cáo facebook</option>
                  <option value="52">Email marketing</option>
                  <option value="53">Forum seeding</option>
                  <option value="83">Tiếp thị liên kết</option>{" "}
                </optgroup>
                <optgroup label="Lĩnh vực khác">
                  <option value="38">Chụp ảnh</option>
                  <option value="39">Tuyển dụng</option>{" "}
                </optgroup>
                <optgroup label="Thiết kế">
                  <option value="7">Thiết kế Logo</option>
                  <option value="13">Thiết kế đồ họa</option>
                  <option value="14">Thiết kế giao diện Website</option>
                  <option value="15">Banner quảng cáo</option>
                  <option value="16">Nhãn hiệu và bao bì</option>
                  <option value="17">Làm video clip</option>
                  <option value="18">Ảnh và chỉnh sửa ảnh</option>
                  <option value="20">Các việc thiết kế khác</option>
                  <option value="43">Thiết kế bộ nhận diện thương hiệu</option>
                  <option value="44">Thiết kế flash &amp; HTML5</option>
                  <option value="45">
                    Thiết kế giao diện ứng dụng di động
                  </option>
                  <option value="46">Thiết kế brochure</option>
                  <option value="47">Thiết kế infographic</option>{" "}
                </optgroup>
                <optgroup label="Kế toán, Thuế &amp; Luật">
                  <option value="34">Kế toán</option>
                  <option value="35">Tư vấn luật</option>
                  <option value="59">Hồ sơ pháp lý</option>{" "}
                </optgroup>
                <optgroup label="Viết lách &amp; dịch thuật">
                  <option value="6">Viết báo &amp; tạp chí</option>
                  <option value="21">Quản lý blog &amp; fanpage</option>
                  <option value="22">Dịch thuật</option>
                  <option value="23">Viết sách</option>
                  <option value="24">
                    Viết bài PR &amp; quảng cáo sáng tạo
                  </option>
                  <option value="48">Copywriting</option>
                  <option value="49">Viết bài SEO, nội dung cho website</option>
                  <option value="61">Biên tập &amp; chỉnh sửa nội dung</option>
                  <option value="73">
                    Viết bài review đánh giá sản phẩm
                  </option>{" "}
                </optgroup>
                <optgroup label="Kiến trúc và xây dựng">
                  <option value="19">Thiết kế nội thất nhà và chung cư</option>
                  <option value="64">Thiết kế ngoại thất</option>
                  <option value="65">Thiết kế xây dựng nhà</option>
                  <option value="66">Dựng phối cảnh 3D</option>{" "}
                </optgroup>
                <optgroup label="Video">
                  <option value="68">Video hoạt hình</option>
                  <option value="69">TVC giới thiệu sản phẩm, công ty</option>
                  <option value="70">Video review</option>{" "}
                </optgroup>
                <optgroup label="Đào tạo &amp; Khoá học">
                  <option value="76">Ngoại ngữ</option>
                  <option value="77">Đào tạo kỹ năng mềm</option>
                  <option value="78">Gia sư</option>{" "}
                </optgroup>
                <optgroup label="Tư vấn doanh nghiệp &amp; Coaching">
                  <option value="80">Cải tiến quy trình doanh nghiệp</option>
                  <option value="81">Tư vấn chiến lược kinh doanh</option>
                  <option value="82">Coaching</option>{" "}
                </optgroup>
              </select>
              <div>
                <p>
                  Chọn dịch vụ phù hợp với yêu cầu tuyển freelancer của bạn nhất
                </p>
              </div>
              <select
                id="vlance_jobbundle_jobtype_service"
                name="vlance_jobbundle_jobtype[service]"
                placeholder="Chọn một dịch vụ cần thuê"
                data-toggle="popover"
                data-placement="top"
                data-content="Chọn một dịch vụ cần thuê"
                data-trigger="hover"
                class="popovers-input span12"
              >
                <option value="">- Tên dịch vụ -</option>{" "}
                <option value="221">Bảo trì các dự án phần mềm</option>
                <option value="51">Bảo trì máy tính</option>
                <option value="80">Biên soạn tài liệu / giáo trình</option>
                <option value="81">Biên tập / Chỉnh sửa nội dung</option>
                <option value="15">Cài đặt / Cấu hình server</option>
                <option value="2">Cắt HTML/CSS từ PSD</option>
                <option value="125">Chỉnh sửa &amp; dựng video</option>
                <option value="69">Chỉnh sửa ảnh sản phẩm</option>
                <option value="208">Chỉnh sửa shell script hệ thống</option>
                <option value="174">Chụp ảnh 360 độ</option>
                <option value="17">Chụp ảnh sản phẩm</option>
                <option value="18">Chụp ảnh sự kiện</option>
                <option value="42">Chụp chân dung chuyên nghiệp</option>
                <option value="41">Chụp hình cưới</option>
                <option value="182">
                  Chuyển đổi thông tin âm thanh và video thành văn bản
                  (transcription)
                </option>
                <option value="124">
                  Chuyển template thành theme Wordpress
                </option>
                <option value="3">Chuyển Template thành Website</option>
                <option value="152">Dạy yoga</option>
                <option value="134">Dịch hợp đồng Anh - Việt</option>
                <option value="135">Dịch phim tiếng Trung</option>
                <option value="136">Dịch văn bản Anh - Trung</option>
                <option value="21">Dịch văn bản Anh-Việt</option>
                <option value="137">Dịch văn bản Đức - Việt</option>
                <option value="138">Dịch văn bản Hàn - Việt</option>
                <option value="139">Dịch văn bản Indonesia - Việt </option>
                <option value="28">Dịch văn bản luật</option>
                <option value="140">Dịch văn bản Nga - Việt</option>
                <option value="141">Dịch văn bản Nhật - Anh</option>
                <option value="22">Dịch văn bản Nhật-Việt</option>
                <option value="23">Dịch văn bản Pháp-Việt</option>
                <option value="142">Dịch văn bản Tây Ban Nha - Việt</option>
                <option value="38">Dịch văn bản Trung-Việt</option>
                <option value="143">Dịch văn bản Việt - Anh</option>
                <option value="144">Dịch văn bản Việt - Đức</option>
                <option value="145">Dịch văn bản Việt - Nhật</option>
                <option value="146">Dịch văn bản Việt - Pháp</option>
                <option value="147">Dịch văn bản Việt - Trung</option>
                <option value="148">Dịch văn bản Ý - Việt</option>
                <option value="179">Diễn họa kiến trúc 3D</option>
                <option value="173">Diễn hoạt nhân vật hoạt hình 2D</option>
                <option value="177">Dựng mô hình 3D sản phẩm nội thất</option>
                <option value="72">Dựng motion video</option>
                <option value="178">Dựng phối cảnh 3D</option>
                <option value="1">Dựng website bán hàng</option>
                <option value="91">
                  Đăng bài lên website / đăng tin rao vặt
                </option>
                <option value="29">
                  Đăng ký / Thay đổi giấy phép đăng ký kinh doanh
                </option>
                <option value="99">Đăng ký quyền sử hữu trí tuệ</option>
                <option value="33">Đăng sản phẩm lên website</option>
                <option value="167">
                  Đánh giá và kiểm định An toàn thông tin
                </option>
                <option value="34">Đánh máy văn bản</option>
                <option value="52">Đổ/nạp mực máy in</option>
                <option value="10">Forum seeding</option>
                <option value="153">Gia sư môn Hoá học</option>
                <option value="155">Gia sư môn Sinh học</option>
                <option value="156">Gia sư môn Toán</option>
                <option value="157">Gia sư môn Văn</option>
                <option value="154">Gia sư môn Vật lý</option>
                <option value="158">Gia sư Tiếng Anh</option>
                <option value="159">
                  Gia sư Tiếng Việt cho người nước ngoài
                </option>
                <option value="84">Giới thiệu / Tư vấn sản phẩm</option>
                <option value="49">Khắc phục sự cố mạng</option>
                <option value="50">Khôi phục dữ liệu</option>
                <option value="214">Làm app IOS</option>
                <option value="73">Làm clip ngắn cho fanpage</option>
                <option value="58">Làm Mobile App theo yêu cầu</option>
                <option value="184">Làm nhạc quảng cáo</option>
                <option value="76">Làm phim hoạt hình</option>
                <option value="226">Làm ứng dụng Android theo yêu cầu</option>
                <option value="70">Làm video giới thiệu công ty</option>
                <option value="71">Làm video giới thiệu về sản phẩm</option>
                <option value="185">Làm video truyền hình</option>
                <option value="27">Lập báo cáo tài chính</option>
                <option value="26">Lập báo cáo thuế doanh nghiệp</option>
                <option value="108">Lập hồ sơ gọi vốn</option>
                <option value="32">Lập kế hoạch kinh doanh</option>
                <option value="213">Lập trình AutoLisp cho Autocad</option>
                <option value="209">Lập trình giao diện GTK</option>
                <option value="215">
                  Lập trình hợp đồng thông minh(Smart Contract)
                </option>
                <option value="216">Lập trình module odoo</option>
                <option value="217">Lập trình phần mềm trên Excel</option>
                <option value="227">Lập trình web Golang</option>
                <option value="181">
                  Mô phỏng năng lượng tiêu thụ cho công trình xây dựng
                </option>
                <option value="112">Nghiên cứu khảo sát thị trường</option>
                <option value="11">Nhập dữ liệu lên website</option>
                <option value="35">Nhập dữ liệu vào bảng tính</option>
                <option value="161">Phân tích mã độc</option>
                <option value="189">
                  Phân tích và thiết kế báo cáo sử dụng Google Data Studio
                </option>
                <option value="188">
                  Phân tích và thiết kế báo cáo sử dụng Power BI
                </option>
                <option value="195">
                  Phân tích và thiết kế báo cáo sử dụng Power Point
                </option>
                <option value="218">Phát triển ứng dụng web</option>
                <option value="83">Phiên dịch</option>
                <option value="160">Phiên dịch Anh - Việt </option>
                <option value="149">Phiên dịch Thổ Nhĩ Kỳ - Việt</option>
                <option value="9">Quản lý blog &amp; fanpage</option>
                <option value="111">Quảng cáo facebook</option>
                <option value="87">Quảng cáo Google Adwords</option>
                <option value="75">Quay clip âm nhạc</option>
                <option value="74">Quay clip quảng cáo</option>
                <option value="123">Review đánh giá sản phẩm</option>
                <option value="92">SEO website</option>
                <option value="100">Soạn hợp đồng kinh doanh</option>
                <option value="13">Sửa laptop</option>
                <option value="210">Sửa lỗi Selinux Android</option>
                <option value="48">Sửa máy in / máy photocopy</option>
                <option value="12">Sửa máy tính để bàn</option>
                <option value="228">Tạo mô hình Deep Learning</option>
                <option value="55">Test và kiểm tra lỗi</option>
                <option value="133">Thiết kế album ảnh cưới</option>
                <option value="47">Thiết kế áo phông / T-shirt</option>
                <option value="46">Thiết kế backdrop</option>
                <option value="7">Thiết kế banner quảng cáo</option>
                <option value="120">Thiết kế bao bì</option>
                <option value="128">Thiết kế bìa sách</option>
                <option value="205">Thiết kế billboard</option>
                <option value="5">Thiết kế bộ nhận diện thương hiệu</option>
                <option value="6">Thiết kế brochure</option>
                <option value="63">Thiết kế business card</option>
                <option value="129">Thiết kế catalogue</option>
                <option value="8">Thiết kế cover và banner Facebook</option>
                <option value="127">Thiết kế CV</option>
                <option value="44">Thiết kế flyer</option>
                <option value="59">Thiết kế giao diện Mobile App</option>
                <option value="180">Thiết kế giao diện trò chơi 2D</option>
                <option value="25">Thiết kế giao diện website</option>
                <option value="219">Thiết kế hạ tầng chạy Odoo V9-13</option>
                <option value="192">Thiết kế hệ thống điện</option>
                <option value="193">
                  Thiết kế hệ thống điều hoà không khí và thông gió - HVAC
                </option>
                <option value="62">Thiết kế hình động / Flash</option>
                <option value="130">Thiết kế hồ sơ năng lực công ty</option>
                <option value="45">Thiết kế infographic</option>
                <option value="131">Thiết kế landing page</option>
                <option value="4">Thiết kế Logo</option>
                <option value="132">Thiết kế mạch điện tử, PCB</option>
                <option value="64">Thiết kế mẫu Powerpoint</option>
                <option value="67">Thiết kế mô hình 3D</option>
                <option value="60">Thiết kế Mockup cho Mobile App</option>
                <option value="54">Thiết kế Mockup cho Website</option>
                <option value="43">
                  Thiết kế nhà cửa / nội thất văn phòng
                </option>
                <option value="61">Thiết kế nhãn hiệu / bao bì sản phẩm</option>
                <option value="172">Thiết kế nhân vật 3D</option>
                <option value="122">Thiết kế nội thất</option>
                <option value="206">Thiết kế POSM</option>
                <option value="121">Thiết kế poster</option>
                <option value="198">Thiết kế Reverse</option>
                <option value="176">Thiết kế sản phẩm in 3D</option>
                <option value="197">Thiết kế sticker</option>
                <option value="68">Thiết kế theo yêu cầu</option>
                <option value="196">Thiết kế thiệp</option>
                <option value="175">Thiết kế trang sức 3D</option>
                <option value="207">Thiết kế UI-UX</option>
                <option value="204">Thiết kế và tư vấn thiết kế cơ khí</option>
                <option value="169">Thu âm lời bình quảng cáo</option>
                <option value="88">Tiếp thị qua email</option>
                <option value="90">Tìm kiếm khách hàng</option>
                <option value="89">Tổ chức sự kiện</option>
                <option value="56">Tối ưu SEO cho trang web</option>
                <option value="183">Trình diễn ánh sáng 3D Mapping</option>
                <option value="36">Trợ lý từ xa</option>
                <option value="14">Tư vấn / Thiết kế hệ thống mạng</option>
                <option value="225">Tư vấn chương trình đào tạo</option>
                <option value="30">
                  Tư vấn đăng ký thành lập doanh nghiệp
                </option>
                <option value="224">Tư vấn giải pháp nhân sự</option>
                <option value="220">Tư vấn giải pháp phần mềm</option>
                <option value="150">
                  Tư vấn giao dịch tiền ảo - Cryptocurrency
                </option>
                <option value="104">Tư vấn gọi vốn từ nhà đầu tư</option>
                <option value="98">Tư vấn luật doanh nghiệp</option>
                <option value="86">Tư vấn PR sản phẩm / dịch vụ</option>
                <option value="101">Tư vấn quản trị doanh nghiệp</option>
                <option value="85">Tư vấn quảng bá thương hiệu</option>
                <option value="103">Tư vấn tài chính doanh nghiệp</option>
                <option value="31">Tư vấn thuế doanh nghiệp</option>
                <option value="223">
                  Tư vấn tuyển dụng giáo viên nước ngoài
                </option>
                <option value="102">Tư vấn tuyển dụng nhân sự</option>
                <option value="109">Tư vấn về Growth Hacking</option>
                <option value="110">Tư vấn về Lean Startup</option>
                <option value="105">Tư vấn về mô hình kinh doanh</option>
                <option value="168">
                  Ứng cứu sự cố khẩn cấp về Hệ thống thông tin
                </option>
                <option value="65">Vẽ hình minh họa</option>
                <option value="191">Vẽ kịch bản phân cảnh (storyboard)</option>
                <option value="66">Vẽ tay theo yêu cầu</option>
                <option value="190">Vẽ tranh tường</option>
                <option value="96">Việc hành chính khác</option>
                <option value="113">Viết bài cho fanpage</option>
                <option value="114">
                  Viết bài cho trang vệ tinh để làm SEO
                </option>
                <option value="118">
                  Viết bài mới chuẩn SEO cho website tiếng Anh
                </option>
                <option value="117">
                  Viết bài mới chuẩn SEO cho website tiếng Việt
                </option>
                <option value="37">Viết bài phỏng vấn / phát biểu</option>
                <option value="24">Viết bài PR</option>
                <option value="115">Viết bài PR báo chí</option>
                <option value="116">
                  Viết bài PR sáng tạo nhiều người đọc
                </option>
                <option value="77">Viết bài review</option>
                <option value="78">Viết báo cáo - nghiên cứu</option>
                <option value="151">Viết blog Tiếng Anh</option>
                <option value="171">Viết CV, hồ sơ xin việc Tiếng Anh</option>
                <option value="57">Viết game di động</option>
                <option value="79">Viết kịch bản</option>
                <option value="40">Viết kịch bản cho video</option>
                <option value="119">Viết kịch bản clip dựa trên chủ đề</option>
                <option value="39">
                  Viết mô tả sản phẩm / hướng dẫn sử dụng
                </option>
                <option value="16">Viết Mobile App cho web có sẵn</option>
                <option value="19">Viết nội dung cho blog</option>
                <option value="20">Viết nội dung cho website</option>
                <option value="82">
                  Viết nội dung học thuật - đơn xin - thư giới thiệu
                </option>
                <option value="126">Viết nội dung website</option>
                <option value="199">Viết phần mềm quản lý</option>
                <option value="200">Viết phần mềm quản lý bán hàng</option>
                <option value="53">Viết phần mềm theo yêu cầu</option>
                <option value="229">Viết tài liệu đặc tả phần mềm (SRS)</option>
                <option value="194">Viết truyện ngôn tình, tiểu thuyết</option>
                <option value="170">
                  Xác minh địa điểm doanh nghiệp trên Google Maps
                </option>
                <option value="201">Xây dựng hệ thống Crawler dữ liệu</option>
                <option value="211">Xây dựng hệ thống Embedded Linux</option>
                <option value="93">
                  Xây dựng liên kết tới trang web - backlink
                </option>
                <option value="107">
                  Xây dựng Mobile App MVP (Minium Viable Product)
                </option>
                <option value="222">Xây dựng model AI</option>
                <option value="94">Xây dựng quy trình quản lý / CSKH</option>
                <option value="212">Xây dựng Web App MVC( .net)</option>
                <option value="106">
                  Xây dựng Web App MVP (Minium Viable Product)
                </option>
                <option value="230">
                  Xây dựng Web thương mại điện tử Magento
                </option>
                <option value="203">Xây dựng website thương mại điện tử</option>
                <option value="202">Xây dựng website wordpress</option>
                <option value="231">Xử lí tác vụ Machine Learning</option>
                <option value="95">Xử lý dữ liệu</option>
                <option value="186">Xử lý hậu kỳ gameshow</option>
                <option value="187">Xử lý hậu kỳ phóng sự tài liệu</option>
                <option disabled="">-----------------------</option>
                <option value="">
                  Dịch vụ khác (hoặc không thấy dịch vụ phù hợp)
                </option>
              </select>
              <div>
                <p>Đặt tên cụ thể cho công việc cần tuyển</p>
              </div>
              <input
                type="text"
                required="required"
                maxlength="255"
                placeholder="VD: Thiết kế trang web bán hàng cao cấp"
              ></input>
            </div>

            <div className="item_form">
              <div>
                <h1>Thông tin đầy đủ về yêu cầu tuyển dụng</h1>
                <p>
                  Nội dung chi tiết, và các đầu việc cần Freelancer thực hiện
                  (càng chi tiết, freelancer càng có đầy đủ thông tin để gửi báo
                  giá chính xác hơn).
                </p>
              </div>
              <textarea
                placeholder="Ví dụ: Các giao diện website cần thiết kế như trang chủ, xem hàng, thanh toán..."
                rows={"20"}
              ></textarea>
              <div>
                <a>Thêm tài liệu đính kèm</a>
              </div>

              <div>
                <p>Kỹ năng yêu cầu phải có</p>
                <input
                  type="text"
                  id="vlance_jobbundle_jobtype_skill"
                  data-provide="typeahead"
                  name="hiddenTagListA"
                  placeholder="VD: Photoshop, Tiếng Anh,..."
                  class="tm-input"
                  data-original-title=""
                  title=""
                ></input>
              </div>
              <div>
                <p>Hạn cuối nhận chào giá của </p>
                <input
                  type="text"
                  id="vlance_jobbundle_jobtype_closeAt"
                  name="vlance_jobbundle_jobtype[closeAt]"
                  required="required"
                  placeholder="VD: 08/10/2022"
                  title=""
                  autocomplete="off"
                  data-toggle="popover"
                  data-placement="top"
                  data-content="Hạn nhận báo giá, VD: 24/11/2016"
                  data-trigger="hover"
                  class="popovers-input span12"
                ></input>
              </div>
              <div>
                <p>Loại hình làm việc </p>
                <select
                  id="vlance_jobbundle_jobtype_type"
                  name="vlance_jobbundle_jobtype[type]"
                  required="required"
                  pattern="[0-9]*"
                  placeholder="ví dụ: 14"
                  class="row-fluid span12"
                >
                  <option value="0" selected="selected">
                    Việc làm dự án
                  </option>
                  <option value="2">Việc bán thời gian</option>
                  <option value="3">Việc toàn thời gian</option>
                </select>
              </div>

              <div>
                <p>Hình thức làm việc</p>
                <select
                  id="vlance_jobbundle_jobtype_onsiteLocation"
                  name="vlance_jobbundle_jobtype[onsiteLocation]"
                  required="required"
                  pattern="[0-9]*"
                  placeholder="ví dụ: 14"
                  class="row-fluid span12"
                >
                  <option value="2">Làm online</option>
                  <option value="0" selected="selected">
                    Làm tại văn phòng
                  </option>
                </select>
              </div>
            </div>
            <div className="item_form">
                <div>
                  <h1>Ngân sách dự kiến chi cho công việc này</h1>
                  <p>Hình thức trả lương</p>
                </div>
                <select
                  id="vlance_jobbundle_jobtype_typePay"
                  name="vlance_jobbundle_jobtype[typePay]"
                  required="required"
                  pattern="[0-9]*"
                  placeholder="ví dụ: 14"
                  class="row-fluid span12 valid"
                >
                  <option value="0" selected="selected">
                    Trả theo dự án
                  </option>
                  <option value="1">Trả theo giờ</option>
                  <option value="2">Trả theo tháng</option>
                </select>
                <div>
                  <p>Số tiền tối đa tôi có thể trả trong khoảng</p>
                  <input type="text" id="vlance_jobbundle_jobtype_budget" name="vlance_jobbundle_jobtype[budget]" required="required" pattern="^(0|[1-9][0-9/.]*)$" placeholder="Từ" data-toggle="popover" data-placement="top" data-content="Thù lao dự kiến, VD: 500.000" data-trigger="hover" class="popovers-input span12" value=""></input>
                  <input type="text" id="vlance_jobbundle_jobtype_budgetMax" name="vlance_jobbundle_jobtype[budgetMax]" required="required" pattern="^(0|[1-9][0-9/.]*)$" placeholder="Đến" data-toggle="popover" data-placement="top" data-content="Thù lao dự kiến, VD: 500.000" data-trigger="hover" class="popovers-input span12" value=""></input>
                </div>
              </div>
              <button>Đăng tin</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
