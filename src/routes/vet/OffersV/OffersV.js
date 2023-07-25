import React, { useState,useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import R_BeakV from './OffersRecord/R_BeakV'
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
  <div className='flex gap-10'>
    <nav className='border flex flex-col p-2 px-6 shadow-xl rounded-3xl text-center h-min'>
      <NavLink to={'O_VaccinationV'} className={({isActive}) => isActive? 'active':'not_active'}> واکسیناسیون </NavLink> <hr />
      <NavLink to={'O_RationV'} className={({isActive}) => isActive? 'active':'not_active'}> جیره </NavLink> <hr />
      <NavLink to={'O_LightClockV'} className={({isActive}) => isActive? 'active':'not_active '}> ساعات روشنایی </NavLink> <hr />
      <NavLink to={'O_BeakV'} className={({isActive}) => isActive? 'active':'not_active'}> نوک چینی </NavLink> <hr />
      <NavLink to={'O_prescriptionV'} className={({isActive}) => isActive? 'active':'not_active'}> نسخه </NavLink> 
    </nav>

    <div className="w-full ">
      <div className={epoch.is_active?"flex justify-end mb-4 -mt-8":'flex justify-end mb-4 -mt-8 opacity-60'}>
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
      <div className="z-40 bg-white rounded-xl p-11 px-16 fixed top-[20%] overflow-y-scroll max-h-[60vh]	"> 
        <R_VaccinationV setshow={setshow} />
        <R_RationV setshow={setshow} />
        <R_LightClockV setshow={setshow} />
        <R_BeakV setshow={setshow} />
        <R_prescriptionV setshow={setshow} />
      </div>
    </div>
    </>
    : ''
  }
</>
)}
export default OffersV