import React, { useState ,useEffect, useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import RationOption from '../../../../components/option/Ration'
import DatePickerF from '../../../../components/DatePickerF';
import Fetch from '../../../../components/Fetch';
import HerdAge from '../../../../components/HerdAge';
import { myContext } from '../../../../context'

const R_RationV = ({setshow}) => {
  const [type, settype] = useState([{name:'',amount:''}])
  const [data, setdata] = useState([])
  const [update,setupdate] = useState(false)
  const [date, setdate] = useState('')
  const [value,setvalue] = useState('')
  const [herd_age, setherd_age] = useState('')
  const {updateG,setupdateG} = useContext(myContext)

  const location = useLocation().pathname
  const params = useParams()
  const param = `/NavV/HomePageV/${params.id}/userId/${params.userId}/salonId/${params.salonId}/EpochId/${params.EpochId}/OffersV`
  const navigate =useNavigate()
  const EpochId = useParams().EpochId

  useEffect(()=>{
    if(date){HerdAge(setherd_age,date,EpochId)}
  },[date])

  const save =async()=>{
    const body={ epoch_id:EpochId, herd_age, data:type, date }
    const token=true
    const method='POST'
    const api=`/api/v1/ration/suggestions/`
    Fetch(body,token,setdata,method,api,navigate);
    setTimeout(() => {setupdateG(!updateG)}, 1000); 
    putOff()
  }

  const plus =()=> {
    type.push({name:'',number:''})
    setupdate(!update)
  }

  function putOff(){
    setshow(false)
  }

return (
<div className={location == `${param}/O_RationV`?'':'hidden'}>
  <table className={location == `${param}/O_RationV`?'':'hidden'}>
    <thead>
      <tr className="">
        <th className="th_Ration"> نوع جیره </th>
        <th className="th_Ration"> مقدار (kg)</th>
      </tr>
    </thead>
    <tbody>
      {type.map((i,inx)=>      
        <tr key={inx} className="">
          <td className="t_Ration"><select className='w-full' onChange={e=> {type[inx].name = e.target.value; settype(type); setupdate(!update)}} ><RationOption /> </select></td>
          <td className="t_Ration">
            <input className='w-full ' value={i.amount} onChange={e=> {type[inx].amount = Number(e.target.value); settype(type); setupdate(!update)}} type="number" />
          </td>
        </tr>
      )}
    </tbody>
  </table>
  <div className="center" onClick={plus}><button className='text-4xl px-2'>+</button></div>
  <div className="flex items-end ">
    <h3 className="mb-2 mt-3 text-lg mx-2 "> تاریخ :</h3> 
    <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
  </div>
  <div className="flex justify-end w-full mt-4">
    <button className='btn-r mx-2' onClick={putOff}>انصراف</button>
    <button className={type[0].amount&&type[0].name?'btn-g':'btn-g opacity-60'} onClick={save} disabled={type[0].amount&&type[0].name?false:true} >ثبت</button>
  </div>
</div>
)}
export default R_RationV