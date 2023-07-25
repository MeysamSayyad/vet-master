import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavO = () => {


return (
<div className='flex gap-10'>
  <nav className='border flex flex-col p-2 py-6 shadow-xl rounded-3xl text-center h-min'>
    <NavLink to={'O_Vaccination'} className={({isActive}) => isActive? 'active':'not_active'}> واکسیناسیون </NavLink> <hr />
    <NavLink to={'O_Ration'} className={({isActive}) => isActive? 'active':'not_active'}> جیره </NavLink> <hr />
    <NavLink to={'O_LightClock'} className={({isActive}) => isActive? 'active':'not_active '}> ساعات روشنایی </NavLink> <hr />
    <NavLink to={'O_Beak'} className={({isActive}) => isActive? 'active':'not_active'}> نوک چینی </NavLink> <hr />
    <NavLink to={'O_prescription'} className={({isActive}) => isActive? 'active':'not_active'}> نسخه </NavLink> 
  </nav>

  <div className="w-full ">
    <Outlet />
  </div>
</div>
)}
export default NavO