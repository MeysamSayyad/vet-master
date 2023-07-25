import React, { useState ,useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const R_prescriptionV = () => {
  const [file, setfile] = useState('')
  const location = useLocation().pathname
  const params = useParams()
  const param = `/NavV/HomePageV/${params.id}/userId/${params.userId}/salonId/${params.salonId}/EpochId/${params.EpochId}/OffersV`


return (
<div className={location == `${param}/O_prescriptionV`?'':'hidden'}>
  <input className='hidden' type="file" id='O_prescriptionV' accept='image/*' onChange={e=>setfile(e.target.files[0])} />
  <div className="border-2 border-dashed center items-center m-6 my-3">
    <label className='inline-flex text-4xl p-4 px-8 ' htmlFor="O_prescriptionV"> انتخاب فایل</label>
  </div>
  <h6 className="mx-6 ">{file.name} </h6>
</div>
)}
export default R_prescriptionV