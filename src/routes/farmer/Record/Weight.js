import React,{ useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import HerdAge from '../../../components/HerdAge';
import DatePickerF from '../../../components/DatePickerF';

const Weight = () => {
  const [show, setshow] = useState(false)
  const [beginning,setbeginning] = useState([{id:1,value:''}])
  const [middle,setmiddle] = useState([{id:1,value:''}])
  const [end,setend] = useState([{id:1,value:''}])
  const [herd_age, setherd_age] = useState('')
  const [date,setdate] = useState('')
  const [value,setvalue] = useState('')
  const [data,setdata] = useState([])
  const [update,setupdate] = useState(false)
  const params = useParams()
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}/View`
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId

  useEffect(()=>{
   
  },[])

  function putOff(){
    
    setbeginning([{id:1,value:''}])
    setmiddle([{id:1,value:''}])
    setend([{id:1,value:''}])
    setdate('');setvalue('');setupdate(!update)
    setshow(false)
  }

  useEffect(()=>{
    if(date){HerdAge(setherd_age,date,epoch_id)}
  },[date])

  const save =async()=>{
   let beginningArr=beginning.map((item)=>((item.value*1).toFixed(3))*1)
   let middleArr=middle.map((item)=>((item.value*1).toFixed(3))*1)
   let endArr=end.map((item)=>((item.value*1).toFixed(3))*1)
   console.log(beginningArr)
    const body={
      epoch_id, 
      data:{beginning:beginningArr, middle:middleArr, end:endArr},
      date,
      herd_age,
    }
    const token=true
    const method='POST'
    const api=`/api/v1/hen-weight/`
    Fetch(body,token,setdata,method,api,navigate)
    putOff()
  }

return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> وزن مرغ </button>
  <div className={show?"flex ":'hidden'}>
  <div className="btn-b"><Link className='flex items-center' to={`${param}/V_WeightV`}> مشاهده تاریخچه </Link></div>
    <div dir='ltr' className="card1 flex-col ">
      <h3 className="mb-2 mt-3 text-lg ">: ابتدای سالن </h3>
      <div dir='rtl' className="flex justify-start items-center flex-wrap  ">
      
        {beginning.map((i)=>
          <input dir='ltr' key={i.id} className='w-20 mx-2.5 my-1.5' value={i.value} onChange={e => {setbeginning((perv)=>perv.map((item)=> {return {...item, value :item.id == i.id ? e.target.value:item.value}})); setupdate(!update); }} type='number' />
          )}
          <span onClick={()=>{setbeginning([...beginning,{id:Date.now(),value:''}])}} className=' text-xl text-slate-700 cursor-pointer hover:opacity-60 active:opacity-100 '>&#43;</span>
      </div>
      
      <h3 className="mb-2 mt-3 text-lg ">: وسط سالن </h3>
      <div dir='rtl' className="flex items-center justify-start flex-wrap  ">
      
        {middle.map((i)=>
          <input dir='ltr' key={i.id} className='w-20 mx-2.5 my-1.5' value={i.value} onChange={e => {setmiddle((perv)=>perv.map((item)=> {return {...item, value :item.id == i.id ? e.target.value:item.value}})); setupdate(!update); }} type="number" />
          )}
          <span onClick={()=>{setmiddle([...middle,{id:Date.now(),value:''}])}} className=' text-xl text-slate-700 cursor-pointer hover:opacity-60 active:opacity-100 '>&#43;</span>
      </div>

      <h3 className="mb-2 mt-3 text-lg ">: انتهای سالن</h3>
      <div dir='rtl' className="flex justify-start items-center flex-wrap  ">
      
        {end.map((i)=>
          <input dir='ltr' key={i.id} className='w-20 mx-2.5 my-1.5' value={i.value} onChange={e => {setend((perv)=>perv.map((item)=> {return {...item, value :item.id == i.id ? e.target.value:item.value}})); setupdate(!update); }} type="number" />
          )}
          <span onClick={()=>{setend([...end,{id:Date.now(),value:''}])}} className=' text-xl text-slate-700 cursor-pointer hover:opacity-60 active:opacity-100 '>&#43;</span>
      </div>
      <div className="flex justify-between w-full items-end ">
        <div className="flex mr-2">
          <button className={value?'btn-g':'btn-g opacity-60'} onClick={save} disabled={value?false:true} >ثبت</button>
          <button className='btn-r ml-2 ' onClick={putOff}>انصراف</button>
        </div>

        <div className="flex items-end ">
          <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
          <h3 className="mb-2 mt-3 text-lg mx-2 ">: تاریخ </h3> 
        </div>
      </div>
    </div>
  </div>
</div>
)}
export default Weight