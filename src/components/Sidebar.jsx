import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FiGitPullRequest } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className='ml-3 h-screen md:overflow-hidden 
    md:hover:overflow-auto overflow-auto pb-10'>

      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to='/' onClick={() => {}}
           className="items-center gap-3 ml-3 mt-4
            flex text-xl font-extrabold tracking-tight
            dark:text-white text-slate-900">
            <FiGitPullRequest /> <span>Shop Zone</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type='button'
              onClick={() => {}}
              className='text-2xl rounded-full
              p-2 text-neutral-300 hover:text-neutral-900 hover:bg-light-gray mr-1 block
              md:hidden'>
              <MdOutlineCancel/>
            </button>
          </TooltipComponent>
        </div>
      </>)}
    </div>
  )
}

export default Sidebar;