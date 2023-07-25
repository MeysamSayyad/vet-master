import React,{ useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const NumberEgg = () => {
  const [date, setdate] = useState('')
  const [number, setnumber] = useState('')
  const [show, setshow] = useState(false)
  const params = useParams()
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}/View`

return (
<div className='mb-6 '>
  <button onClick={()=> setshow(false)} className='btn opacity-60'> تعداد تخم مرغ تولیدی </button>
  <div className={show?"flex ":'hidden'}>
  <div className="btn-b"><Link className='flex items-center' to={`${param}/V_NumberEggV`}> مشاهده تاریخچه </Link></div>
    <div className="card1">
      <div className="grid grid-cols-2 text-center gap-4 m-auto">
        <h5 className="-m-2"> تخم مرغ تعداد </h5>
        <h5 className="-m-2">تاریخ</h5>
        <input className='' type="number" value={number} onChange={e => setnumber(e.target.value)} />
        <input className='' value={date} onChange={e => setdate(e.target.value)} />
      </div>

      <div className="">
        <button className='btn-r mx-2'>انصراف</button>
        <button className='btn-g'>ثبت</button>
      </div>
    </div>
  </div>
</div>)}
export default NumberEgg