import React,{ useState, useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import HerdAge from '../../../components/HerdAge';
import { useParams, useNavigate, Link } from 'react-router-dom'
import RationOption from '../../../components/option/Ration'
import DatePickerF from '../../../components/DatePickerF';
import { useContext } from 'react';
import { myContext } from '../../../context';

const Ration = () => {
  const [show, setshow] = useState(false)
  const [data,setdata] = useState([])
  const [herd_age, setherd_age] = useState('')
  const [update,setupdate] = useState(false)
  const [amount,setamount] = useState([{name:'', amount:''}])
  const [date, setdate] = useState('')
  const [value,setvalue] = useState('')
  const EpochId = useParams().EpochId
  const navigate =useNavigate()
  const params = useParams()
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}/View`
  const {access,refresh}=useContext(myContext)
  
  useEffect(()=>{
    if(date){HerdAge(setherd_age,date,EpochId)}
  },[date])

  console.log(herd_age);
  const save =async()=>{
    const body={ epoch_id:EpochId, herd_age, data:amount, date }
    const token=true
    const method='POST'
    const api=`/api/v1/ration/`
    Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh)
    putOff()
  }

  function putOff(){
    setamount([{name:'', amount:''}]);setvalue('');setdate('')
    setshow(false)
  }

  const plus =()=> {
    amount.push({name:'', amount:''})
    setupdate(!update)
  }

return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> جیره </button>
  <div className={show?"flex ":'hidden'}>
  <div className="btn-b"><Link className='flex items-center' to={`${param}/V_RationV`}> مشاهده تاریخچه </Link></div>
    <div className="card1">
      <div className="w-full">
        <div className="center ">
          <table className=''>
            <thead>
              <tr className="">
                <th className="th_Ration"> نوع جیره </th>
                <th className="th_Ration"> مقدار (kg)</th>
              </tr>
            </thead>
            <tbody>
              {amount.map((i,inx)=>
                <tr key={inx} className="">
                  <td className="t_Ration">
                    <select className='w-full' onChange={e=> {i.name = e.target.value; setamount(amount); setupdate(!update) }}><RationOption /> </select>
                  </td>
                  <td className="t_Ration">
                    <input className='w-full ' value={i.amount} onChange={e=> {i.amount = Number(e.target.value); setamount(amount); setupdate(!update)}} type="number" />
                  </td>
                </tr>
              )}
            </tbody>
          </table> 
        </div>
        <div className="center"><button className='text-4xl px-2 text-center ' onClick={plus}>+</button></div>

        <div className="flex items-end ">
          <h3 className="mb-2 mt-3 text-lg mx-2 "> تاریخ :</h3> 
          <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
        </div>
        <div className="flex justify-end w-full mt-4">
          <button className='btn-r mx-2' onClick={putOff}>انصراف</button>
          <button className={amount[0].amount&&amount[0].name&&value?'btn-g':'btn-g opacity-60'} onClick={save} disabled={amount[0].amount&&amount[0].name&&value?false:true} >ثبت</button>
        </div>
      </div>
    </div>
  </div>
</div>
)}
export default Ration