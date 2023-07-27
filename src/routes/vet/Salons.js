import React, { useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../components/Fetch'
import Epoch from "./Epoch";
import { Loading } from '../../components/Loading';

const Salons = () => {
  const [data,setdata] = useState([])
  const [loading,setLoading]=useState(true)
  const navigate =useNavigate()
  const id = useParams().userId;
  const salonId = useParams().salonId;

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/salons/?farmer_id=${id}`
    Fetch(body,token,setdata,method,api,navigate, setLoading)
  },[])

return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
data.length == 0 ? <h1 className="text">سالنی وجود ندارد</h1> :
(
<div className="flex flex-row">
  <div className='flex flex-col items-center'>
    <span className='mb-4'>سالن ها</span>
    {data.map(i=>
      <Link to={`userId/${id}/salonId/${i.id}`} style={salonId==i.id ? {borderWidth:'1.5px',borderColor:'grey',boxShadow:'0px 2px 3px 1px grey'}:undefined} className="border px-8 py-3 rounded-xl m-2 bg-slate-50 shadow w-[30vw] text-center text-lg ">
        {i.name}
      </Link>
    )}
  </div>

  <div className="mr-20">
    {salonId && <Epoch />}
  </div>
</div>
)}
export default Salons