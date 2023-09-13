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
  const width = window.innerWidth;

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
      <div className="flex items-center flex-row">
        <NavLink className='nav text-slate-700 bold bg-slate-50 rounded max-sm:w-16' to={`/NavF/HomePage/${id}`}>
          <img src="/img/home button.png" alt="" className="lg:w-36" />
        </NavLink>
        <nav className={EpochId?"lg:mx-4 mx-1 max-sm:w-32 flex justify-center items-center":'hidden'}>
          <div className={epoch.is_active?"lg:inline-block inline":'hidden'}>
            <NavLink className={({isActive}) => isActive? 'activnav header-mobile':'nav header-mobile'} to={`${param}/Record`}>{width >= 640 ? " ثبت اطلاعات " : "ثبت"}</NavLink>
          </div>
          <NavLink className={({isActive}) => isActive? 'activnav':'nav'} to={`${param}/View`}>{width >= 640 ? " مشاهده اطلاعات " : " مشاهده "}</NavLink>
          <NavLink className={location.pathname.includes("/NavO") ? 'p-1 lg:mx-2 lg:text-base text-slate-700 bold bg-slate-50 rounded text-[10px]':'nav'} to={`${param}/NavO/O_Vaccination`}>{width >= 640 ? " پیشنهادات دامپزشک " : " پیشنهادات "}</NavLink>
        </nav>
      </div>
      <div className="flex lg:flex-col flex-row-reverse lg:mx-4 mx-1 items-center">
        <img src="/img/download (1).jfif" alt="" className="rounded-full lg:w-12 lg:h-10 mx-auto w-8 h-8 " />
        <h2 className="bold lg:text-sm text-[10px] ml-2">{data.first_name} {data.last_name} </h2>
      </div>
    </div>

    <div style={{justifyContent: params.SalonId && !EpochId ? 'start':'space-between'}} className="flex flex-row items-center lg:h-14 mb-2 h-12 ">
      <div className="lg:px-10 mt-2 text-lg pr-6 ">
        <Link to={`/NavF/HomePage/${id}`} className='ads_bar'>{params.id?' سالن ها ':''} </Link>
        <Link to={`/NavF/HomePage/${id}/SalonId/${params.SalonId}`} className='ads_bar'>
          {params.SalonId?`${salonName?`/ سالن ${salonName}`:''} `:''}
        </Link>
        <div className={EpochId?"ads_bar inline-block":'hidden'}>/ دوره {`${epoch.is_active?' فعال ':'غیر فعال'}`}</div>
        <div className={epoch.is_active ? "inline-block mx-1":'hidden'}>
          <div className={EpochId ? " max-sm:text-[10px]":'hidden'}> ({epoch.herd_age} روزگی)</div>
        </div>
        
      </div>
      {params.SalonId && !params.EpochId &&<div className=' mt-2 mr-[225px]'>دوره های پرورش</div>}
      {EpochId?<BtnEnd />:''}
      {params.SalonId && !params.EpochId && <div className=' mt-2 mr-[225px]'>جدول اطلاعات سالن</div>}
    </div>
    <div className="lg:px-10 px-6 pb-6"><Outlet/></div>
  </div>

  
</>
)}
export default NavF