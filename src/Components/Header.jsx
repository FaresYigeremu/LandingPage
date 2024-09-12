import React from 'react'
import { HiBars3 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import MenuLayover from './MenuLayover';

function Header() {
    const [toggle,setToggle] = React.useState(false);
    const menuList = [
        {id:1, title: 'HOME'},
        {id:1, title: 'FEAUTRES'},
        {id:1, title: 'ABOUT'},
        {id:1, title: 'CONTACT'},
    ]
  return (
    <div className='flex items- justify-between '>
        <div>
            <h2 className='text-[24px] font-bold text-white'>E-
            <span className='text-red-500'>commerce</span></h2>
        </div>
        <div className='hidden md:flex gap-4'>
            {menuList.map((item) => (
                <div key={item.id}>
                    <h2 className='text-white text-[15px]
                    hover:border-[1px] hover:border-red-500 rounded-full px-3 px-1
                    cursor-pointer'>{item.title}</h2>
                </div>
            ))}
            <a href="https://e-commerce-483ac.web.app" className='text-white text-[15px]
                    hover:border-[1px] hover:border-red-500 rounded-full px-3 py-1
                    cursor-pointer hover:bg-gradient-to-r from-red-500 to-red-800'>Live Demo</a>
        </div>
        <div>
            {!toggle?<HiBars3  onClick={() => setToggle(!toggle)} className='text-white md:hidden text-[24px]' />
            :<HiMiniXMark onClick={() => setToggle(!toggle)} className='text-white md:hidden text-[24px]' />}
            {toggle? <MenuLayover menuList={menuList}/> : null}
        </div>
    </div>
  )
}

export default Header