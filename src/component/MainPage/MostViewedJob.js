import React from 'react'

function MostViewedJob() {
  return (
    <div style={{ backgroundImage: 'url(https://www.topcv.vn/v4/image/welcome/linear_web.png)'}} className='container '>
        <div className='ml-20 mr-20'>
            <h2 className='text-amber-600 text-xl font-bold text-center py-5'>Các công việc được quan tâm nhất</h2>
            <div className='list-job-box  w-2/3 m-auto'>
                <div className='single-job text-left p-5 border-2 rounded '>
                    <a href="#" className='text-amber-500'>Thiết kế website máy ảnh, phụ kiện máy ảnh</a>
                    <p className='ml-5 mt-1'>Minh Nhật</p>
                    <div className='job-required flex justify-between bg-gray-200 mt-5'>
                        <p className='mx-10 text-slate-500 font-bold '>Toàn Quốc | Lập trình web | 15.000.000 đ - 20.000.000 đ</p>
                        <p className=''>Hạn nhận hồ sơ: 20 giờ 44 phút</p>
                    </div>
                    <div className='description mt-5 ml-2'>
                    Phong cách đơn giản, có các cổng thanh toán, vv Ví dụ: https://instaxtrasua.com https://www.amazon.com/stores/ZINKZEROINK/page/FAABB415-3F62-479C-AED2-06FA9CFF4A61?ref_=ast_bln 
                    </div>
                    <div className='job-category mt-3 flex cursor-pointer'>
                        <p className='text-sm p-1 rounded bg-blue-400 text-white'>Dựng website bán hàng</p>
                    </div>
                </div>
                <div className='single-job text-left p-5 border-2 rounded '>
                    <a href="#" className='text-amber-500'>Thiết kế website máy ảnh, phụ kiện máy ảnh</a>
                    <p className='ml-5 mt-1'>Minh Nhật</p>
                    <div className='job-required flex justify-between bg-gray-200 mt-5'>
                        <p className='mx-10 text-slate-500 font-bold '>Toàn Quốc | Lập trình web | 15.000.000 đ - 20.000.000 đ</p>
                        <p className=''>Hạn nhận hồ sơ: 20 giờ 44 phút</p>
                    </div>
                    <div className='description mt-5 ml-2'>
                    Phong cách đơn giản, có các cổng thanh toán, vv Ví dụ: https://instaxtrasua.com https://www.amazon.com/stores/ZINKZEROINK/page/FAABB415-3F62-479C-AED2-06FA9CFF4A61?ref_=ast_bln 
                    </div>
                    <div className='job-category mt-3 flex cursor-pointer'>
                        <p className='text-sm p-1 rounded bg-blue-400 text-white'>Dựng website bán hàng</p>
                    </div>
                </div>
                <div className='single-job text-left p-5 border-2 rounded '>
                    <a href="#" className='text-amber-500'>Thiết kế website máy ảnh, phụ kiện máy ảnh</a>
                    <p className='ml-5 mt-1'>Minh Nhật</p>
                    <div className='job-required flex justify-between bg-gray-200 mt-5'>
                        <p className='mx-10 text-slate-500 font-bold '>Toàn Quốc | Lập trình web | 15.000.000 đ - 20.000.000 đ</p>
                        <p className=''>Hạn nhận hồ sơ: 20 giờ 44 phút</p>
                    </div>
                    <div className='description mt-5 ml-2'>
                    Phong cách đơn giản, có các cổng thanh toán, vv Ví dụ: https://instaxtrasua.com https://www.amazon.com/stores/ZINKZEROINK/page/FAABB415-3F62-479C-AED2-06FA9CFF4A61?ref_=ast_bln 
                    </div>
                    <div className='job-category mt-3 flex cursor-pointer'>
                        <p className='text-sm p-1 rounded bg-blue-400 text-white'>Dựng website bán hàng</p>
                    </div>
                </div>
                
            </div>
            <button className='ml-auto bg-amber-600 p-2 text-center'>Xem tất cả công việc</button>
        </div>
       
    </div>
  )
}

export default MostViewedJob