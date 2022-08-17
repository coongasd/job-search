import React from 'react'

function Header() {
  return (
   <div className="py-3 mx-5 position-fixed">
        <nav className='flex flex-row justify-between items-center'>
            <div className="Logo basis-1/6 justify-start">
              <a href="/">
                <img width={120} height={70} alt="Job Search ứng dụng tìm việc" src="images/logo.png"></img>
              </a>
            </div>
            <ul className="basis-4/6 flex items-center gap-8 font-medium">
              <li className='cursor-pointer py-1 hover:text-amber-600 relative after:absolute 
              after:left-0 after:bottom-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:ease-in-out after:duration-300'>
                <a href="#">
                  Việc làm
                </a>
              </li>
              <li className='cursor-pointer py-1 hover:text-amber-600 relative after:absolute 
              after:left-0 after:bottom-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:ease-in-out after:duration-300'>
                <a href="#">
                  Hồ sơ & CV
                </a>

              </li>
              <li className='cursor-pointer py-1 hover:text-amber-600 relative after:absolute 
              after:left-0 after:bottom-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:ease-in-out after:duration-300'>
                <a href="#">
                  Công ty
                </a>

              </li>
            </ul>
            <ul className="basis-1/6 flex items-center gap-8 justify-end">
              <li id="nav-notification" className="navbar-right__item icon dropdown notification">
                <a href="javascript:void(0)" className="text-amber-600 text-xl">
                 <li className='fa fa-bell noti-icon'></li>
                </a> 
              </li>
              <li className=''>
                <a className="flex" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p>User</p>
                </a>
              </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header