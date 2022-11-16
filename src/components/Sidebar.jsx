import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FiGitPullRequest } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLink = `flex items-center gap-5
  pl-4 p-3 rounded-lg text-white bg-black text-sm m-2`;
  const normalLink = `flex items-center gap-5
  pl-4 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-200
  dark:hover:text-black hover:bg-light-gray m-2`

  return (
    <div className='pl-2 pr-2 h-screen md:overflow-hidden 
    md:hover:overflow-auto overflow-auto pb-10'>

      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to='/'
          //  onClick={() => setActiveMenu(false)}
           className="items-center gap-3 ml-3 mt-4
            flex text-xl font-extrabold tracking-tight
            dark:text-white text-slate-900">
            <FiGitPullRequest /> <span>Shop Zone</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type='button'
              onClick={() => setActiveMenu(
                (preActiveMenu) => !preActiveMenu
              )}
              className='text-3xl rounded-full
              text-neutral-300 hover:text-neutral-900 hover:bg-light-gray mr-1 block
              md:hidden'>
              <MdOutlineCancel/>
            </button>
          </TooltipComponent>
        </div>

        <div className='mt-10'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3
                mt-4 uppercase text-xs border-b-1 pb-1'>
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink to={`/${link.name}`}
                 key={link.name}
                 onClick={() => {}}
                 className={({ isActive }) => isActive ? activeLink : normalLink}>
                  <span>{link.icon}</span>
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar;