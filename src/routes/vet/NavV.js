import React, { useEffect, useState, useContext } from 'react'
import { NavLink,Link, Outlet, useParams,useNavigate, useLocation } from 'react-router-dom'
import Fetch from '../../components/Fetch'
import { myContext } from '../../context'
import Cookies from "universal-cookie";

const NavV = () => {
  const [data,setdata] = useState([])
  const location=useLocation();
  const {epoch,salonName,setepoch,farmerName} = useContext(myContext)
  const cookies = new Cookies()
  const access = cookies.get('access')
  
  const navigate =useNavigate()
  const params = useParams()
  const id = params.id
  
  const EpochId = params.EpochId;
  const param = `HomePageV/${params.id}/userId/${params.userId}/salonId/${params.salonId}/EpochId/${params.EpochId}`

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/user-info/`
    Fetch(body,token,setdata,method,api,navigate)

    fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/epochs/detail/?epoch_id=${EpochId}`,{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access}`
      }
    })
    .then(res=>res.json())
    .then(data=>{setepoch(data);})
  },[])

return (
<>
  <div className="">
    <div className='bg-[#6FFFF1] flex justify-between items-center p-2'>
      <div className="flex items-center">
      <Link className='nav text-slate-700 bold bg-slate-50 rounded' to={`/NavV/HomePageV/${id}`} > 
        <img src="/img/home button.png" alt="" className="w-36 " />
      </Link>
        <nav className={params.EpochId?"mx-6":'hidden'}>
          <NavLink 
            className={location.pathname.includes("/OffersV")? 'nav text-slate-700 bold bg-slate-50 rounded':'nav'} 
            to={`${param}/OffersV/O_VaccinationV`}
            > پیشنهادات دامپزشک 
          </NavLink>
          <NavLink 
            className={({isActive}) => isActive? 'nav text-slate-700 bold bg-slate-50 rounded':'nav'} 
            to={`${param}/ViewV`}
            > مشاهده اطلاعات مرغداری 
          </NavLink>
        </nav>
      </div>
      <div className="flex flex-col mx-4 ">
        <img src="/img/download (1).jfif" alt="" className="rounded-full w-12 h-10 mx-auto " />
        <h2 className="bold text-sm">{data.first_name} {data.last_name} </h2>
      </div>
    </div>
    
    <div className="px-10 mt-2 text-[17px] ">
    <Link to={`/NavV/HomePageV/${id}`} className='ads_bar'>{params.id?`  ${farmerName}`:''} </Link>
    {/* <Link to={`/NavV/HomePageV/${id}`} className='ads_bar'> مرغدار ها </Link> }

      <Link to={`/NavV/HomePageV/${id}/userId/${params.userId}`} className='ads_bar'>
        / سالن ها 
      </Link> */}

      <Link to={`/NavV/HomePageV/${id}/userId/${params.userId}/salonId/${params.salonId}`} className='ads_bar'>
        {params.salonId?`/ سالن ${salonName}`:''}
      </Link>

      <div className={params.EpochId?"ads_barr inline-block":'hidden'}>/ دوره {`${epoch.is_active?' فعال ':'غیر فعال'}`}</div>
      <div className={epoch.is_active&&params.EpochId?"inline-block mx-1":'hidden'}>
        <div className={params.EpochId?"":'hidden'}> ({epoch.herd_age} روزگی)</div>
      </div>
    </div>
  </div>

  <div className="px-10 py-6"><Outlet/></div>
</>
)}
export default NavV