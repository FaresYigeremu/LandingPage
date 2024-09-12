import React from 'react'
import PropTypes from 'prop-types';
MenuLayover.propTypes = {
    menuList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
  };
function MenuLayover({menuList}) {
  return (
    <div className='absolute left-0 min-h-full backdrop-blur-lg w-full mt-7'>
            {menuList.map((item) => (
                <h1 className='text-white text-[24px] 
                mb-6 justify-center mt-10 hover:scale-110 transition-all 
                ease-in-out duration-300 cursor-pointer' key={item.id}>{item.title}</h1>
            ))}
    </div>
  )
}

export default MenuLayover