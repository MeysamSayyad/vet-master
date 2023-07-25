import React, { useState ,useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ViewV = () => {
return (
  <div className='flex gap-10'>
  <nav className='border flex flex-col p-2 px-6 shadow-xl rounded-3xl text-center text-sm'>
    {/* <NavLink to={'V_InfoV'} className={({isActive}) => isActive? 'active':'not_active'}> مشخصات دوره پرورش </NavLink> <hr /> */}
    <NavLink to={'V_LossV'} className={({isActive}) => isActive? 'active':'not_active'}> تلفات </NavLink> <hr />
    <NavLink to={'V_VaccinationV'} className={({isActive}) => isActive? 'active':'not_active '}> واکسیناسیون </NavLink> <hr />
    <NavLink to={'V_WeightV'} className={({isActive}) => isActive? 'active':'not_active'}> وزن مرغ </NavLink> <hr />
    <NavLink to={'V_NumberEggV'} className={({isActive}) => isActive? 'active':'not_active'}> تعداد تخم مرغ تولیدی </NavLink> <hr />
    <NavLink to={'V_WeightEggV'} className={({isActive}) => isActive? 'active':'not_active'}> وزن تخم مرغ تولیدی </NavLink> <hr />
    <NavLink to={'V_SeedV'} className={({isActive}) => isActive? 'active':'not_active'}> دان مصرفی روزانه </NavLink> <hr />
    <NavLink to={'V_RationV'} className={({isActive}) => isActive? 'active':'not_active'}> جیره </NavLink> <hr />
    <NavLink to={'V_LightClockV'} className={({isActive}) => isActive? 'active':'not_active'}> ساعات روشنایی </NavLink> <hr />
    <NavLink to={'V_BeakV'} className={({isActive}) => isActive? 'active':'not_active'}> نوک چینی </NavLink> <hr />
    <NavLink to={'V_EndCourse'} className={({isActive}) => isActive? 'active':'not_active'}> داده های آخر دوره </NavLink> 
  </nav>

  <div className="w-full ">
    <Outlet/>
  </div>

</div>
)}
export default ViewV