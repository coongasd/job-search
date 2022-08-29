import React from 'react'
import Header_CvCreate from '../CV_Create/Header_CvCreate'
import BasicInfo from './UserInfo/BasicInfo'


function SettingProfile() {
  return (
    <div>
        <Header_CvCreate/>
        <div className='body h-full m-auto w-1/2'>
            <div>
                <ul className='navbar flex gap-5 justify-center'>
                    <li className="cursor-pointer text-amber-600 border relative border-b-amber-600 after:absolute after:bottom-0 after:h-0.5 after:left-0  after:bg-amber-600 hover:text-amber-600 hover:after:w-full">Thông tin cá nhân</li>
                    <li className="cursor-pointer relative after:absolute after:bottom-0 after:h-0.5 after:left-0  after:bg-amber-600 hover:text-amber-600 hover:after:w-full">Hồ sơ làm việc</li>
                    <li className="cursor-pointer relative after:absolute after:bottom-0 after:h-0.5 after:left-0  after:bg-amber-600 hover:text-amber-600 hover:after:w-full">Hồ sơ năng lực</li>
                    <li className="cursor-pointer relative after:absolute after:bottom-0 after:h-0.5 after:left-0  after:bg-amber-600 hover:text-amber-600 hover:after:w-full">Xác thực thông tin</li>
                </ul>
            </div>
            <BasicInfo/>
        </div>
      
    </div>
  )
}

export default SettingProfile