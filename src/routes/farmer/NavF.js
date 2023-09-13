import React, { useState, useEffect, useContext } from 'react'
import { NavLink, Link, useNavigate, Outlet, useParams, useLocation } from 'react-router-dom'
import Fetch from '../../components/Fetch'
import { myContext } from '../../context'
import BtnEnd from '../../components/BtnEnd'

const NavF = () => {
  const {epoch,salonName,setepoch,access,refresh} = useContext(myContext)
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const id = useParams().id
  const EpochId = useParams().EpochId
  const params = useParams()
  const param = `HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}`
  const location=useLocation();


  useEffect(()=>{
    
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/user-info/`
    Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh)
   if(EpochId){
    fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/epochs/detail/?epoch_id=${EpochId}`,{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access}`
      }
    })
    .then(res=>res.json())
    .then(data=>{setepoch(data);})
   }
  },[])

return (
<>
  <div className=''>
    <div className="bg-[#6FFF7D] flex justify-between items-center p-2">
      <div className="flex items-center">
        <NavLink className='nav text-slate-700 bold rounded  bg-slate-50 w-auto ' to={`/NavF/HomePage/${id}`}>
          <img src="/img/home button.png" alt="" className="w-28  bg-slate-50  lg:w-36 " />
        </NavLink>
       
        <nav className={EpochId?"mx-4":'hidden'}>
          <div className={epoch.is_active?"inline-block":'hidden'}><NavLink className={({isActive}) => isActive? 'activnav':'nav'} to={`${param}/Record`}>ثبت اطلاعات </NavLink></div>
          <NavLink className={({isActive}) => isActive? 'activnav':'nav'} to={`${param}/View`}>مشاهده اطلاعات </NavLink>
          <NavLink className={location.pathname.includes("/NavO") ? 'nav text-slate-700 bold bg-slate-50 rounded':'nav'} to={`${param}/NavO/O_Vaccination`}>پیشنهادات دامپزشک </NavLink>
        </nav>
      </div>
      <div className="flex flex-row-reverse items-center gap-2 lg:gap-0 lg:flex-col mx-1  lg:mx-4 ">
        <img src="/img/download (1).jfif" alt="" className="rounded-full w-12 h-10 mx-auto " />
        <h2 className="bold text-sm">{data.first_name} {data.last_name} </h2>
      </div>
    </div>

    <div  style={{justifyContent:params.SalonId && !EpochId ? 'start':'space-between'}} className=" flex  flex-row px-3 gap-[10%] lg:gap-0 lg:px-0  lg:!justify-start items-center h-14 mb-2 ">
      <div className="lg:px-10   lg:block mt-2 text-lg ">
        <Link to={`/NavF/HomePage/${id}`} className='ads_bar'>{params.id?' سالن ها ':''} </Link>
        <Link to={`/NavF/HomePage/${id}/SalonId/${params.SalonId}`} className='ads_bar'>
          {params.SalonId?`${salonName?`/ سالن ${salonName}`:''} `:''}
        </Link>
        <div className={EpochId?"ads_barr inline-block":'hidden'}>/ دوره {`${epoch.is_active?' فعال ':'غیر فعال'}`}</div>
        <div className={epoch.is_active?"inline-block mx-1":'hidden'}>
          <div className={EpochId?"":'hidden'}> ({epoch.herd_age} روزگی)</div>
        </div>
        
      </div>
      {params.SalonId && !params.EpochId &&<div className=' hidden lg:block mt-2 lg:ml-[80px] lg:mr-[225px]'>دوره های پرورش</div>}
      {EpochId?<BtnEnd />:''}
      {params.SalonId && !params.EpochId && <div className=' mt-2 lg:mr-[225px] '>جدول اطلاعات سالن</div>}
    </div>
    <div className="lg:px-10 px-2 pb-6"><Outlet/></div>
  </div>

  
</>
)}
export default NavF