import React,{ useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const WeightEgg = () => {
  const [show, setshow] = useState(false)
  const params = useParams()
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}/View`

return (
<div className='mb-6'>
  <button onClick={()=> setshow(false)} className='btn opacity-60'> وزن تخم مرغ تولیدی </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><Link className='flex items-center' to={`${param}/V_WeightEggV`}> مشاهده تاریخچه </Link></div>
    <div className="card1">
      
    </div>
  </div>
</div>
)}
export default WeightEgg