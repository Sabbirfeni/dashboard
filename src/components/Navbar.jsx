import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/ri';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notifications, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={ customFunc } style={{ color }}
      className='relative text-xl rounded-full p-3
      hover:bg-light-gray'>
      <span style={{ background: dotColor}}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
        {icon}
      </span>
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick } = useStateContext();
  return (
    <div className='flex justify-between p-2
      md:mx-6 relative'>
      <NavButton title='Menu' 
      customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
      icon={<AiOutlineMenu />} color='blue'
      />

      <div className='flex'>
        <NavButton
            title='Cart' customFunc={() => handleClick('cart')}
            icon={<FiShoppingCart />} color='blue'
        />
        <NavButton
          title='Chat' customFunc={() => handleClick('chat')}
          icon={<FiShoppingCart />} color='blue' dotColor='#03C9D7'
        />
        <NavButton
          title='Notifications' customFunc={() => handleClick('notifications')}
          icon={<RiNotification3Line />} color='blue' dotColor='#03C9D7'
        /> 
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            className='flex items-center
            gap-2 cursor-pointer p-1
            hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('profile')}>
            <img
              className='rounded-full w-8 height-8' 
              src={avatar} alt="profile image"
            />
            <p>
              <span className='text-gray-400 text-12'>Hi, </span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-12'>Sabbir</span>
              
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-12'/>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notifications && <Notifications />}
        {isClicked.profile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar;