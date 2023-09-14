/* eslint-disable react/jsx-pascal-case */
import React, { useState,useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import R_BeakV from './OffersRecord/R_BeakV'
import R_VaccinationV from './OffersRecord/R_VaccinationV'
import R_LightClockV from './OffersRecord/R_LightClockV'
import R_RationV from './OffersRecord/R_RationV'
import R_prescriptionV from './OffersRecord/R_prescriptionV'
import { myContext } from '../../../context'

const OffersV = () => {
  const [show,setshow] = useState(false)
  const {epoch} = useContext(myContext)

return (
<>
  <div className='flex flex-col lg:flex-row gap-0 lg:gap-10'>
  <div className={epoch.is_active?"lg:hidden justify-end mb-4 flex -mt-8":'flex lg:hidden justify-end mb-4 -mt-8 opacity-60'}>
        <button className='active text-xs bold w-auto p-2 px-3 shadow-md' onClick={()=>{if(epoch.is_active){setshow(true)}}}> ارسال پیشنهاد </button>
      </div>
    <nav className='border mb-5 lg:mb-0 flex flex-row items-center lg:flex-col p-1 lg-p-2 lg:px-6 shadow-xl rounded-3xl text-center h-min'>
      <NavLink to={'O_VaccinationV'} className={({isActive}) => isActive? 'active lg:w-[9rem] w-[5rem] text-xs bold lg:font-normal lg:text-base':'not_active lg:w-[9rem] w-[5rem] text-xs bold lg:font-normal lg:text-base'}> واکسیناسیون </NavLink> <hr />
      <NavLink to={'O_RationV'} className={({isActive}) => isActive? 'active lg:w-[9rem] w-[5rem] text-xs bold lg:font-normal lg:text-base':'not_active lg:w-[9rem] w-[5rem] text-xs bold lg:font-normal lg:text-base'}> جیره </NavLink> <hr />
      <NavLink to={'O_LightClockV'} className={({isActive}) => isActive? 'active lg:w-[9rem] w-[5rem] text-xs bold lg:font-normal lg:text-base':'not_active lg:w-[9rem] w-[5rem] text-xs bold lg:font-normal lg:text-base'}> ساعات روشنایی </NavLink> <hr />
      {/* <NavLink to={'O_BeakV'} className={({isActive}) => isActive? 'active':'not_active'}> نوک چینی </NavLink> <hr /> */}
      <NavLink to={'O_prescriptionV'} className={({isActive}) => isActive? 'active lg:w-[9rem] w-[5rem] text-xs bold lg:font-normal lg:text-base':'not_active lg:w-[9rem] w-[5rem] text-xs bold lg:font-normal lg:text-base'}> نسخه </NavLink> 
    </nav>

    <div className="w-full ">
      <div className={epoch.is_active?"lg:flex justify-end mb-4 hidden -mt-8":'lg:flex justify-end hidden mb-4 -mt-8 opacity-60'}>
        <button className='active w-auto p-2 px-5 shadow-md' onClick={()=>{if(epoch.is_active){setshow(true)}}}> ارسال پیشنهاد </button>
      </div>
      <Outlet/>
    </div>

  </div>
  {/* moduls */}
  {
    show ?
    <>    
    <div onClick={()=> setshow(false)} className="backdrop"></div>
    <div className="center ">
      <div className="z-40 bg-white rounded-xl lg:p-11 px-4 p-2  lg:px-16 fixed top-[20%]  max-h-[60vh]	"> 
        <R_VaccinationV setshow={setshow} />
        <R_RationV setshow={setshow} />
        <R_LightClockV setshow={setshow} />
        {/* <R_BeakV setshow={setshow} /> */}
        <R_prescriptionV setshow={setshow} />
      </div>
    </div>
    </>
    : ''
  }
</>
)}
export default OffersV