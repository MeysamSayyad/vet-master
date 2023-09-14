/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Fetch from '../../../components/Fetch'
import DatePickerF from '../../../components/DatePickerF'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { myContext } from '../../../context'

const CreateSalon = ({ setshow, id, setadd, add }) => {
  const ndate = new Date();
  const y = ndate.getFullYear()
  const m = ndate.getMonth() + 1
  const d = ndate.getDate()
  const toDate =`${y}-${m}-${d}`
  const [date,setdate] = useState('')
  const [value,setvalue] = useState('')
  const [type,settype] = useState('')
  const [race,setrace] = useState('')
  const [name,setname] = useState('')

  const [started,setstarted] = useState(undefined)
  const [firstNum,setfirstNum] = useState('5555555')
  const [lastNum,setlastNum] = useState('')
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const {access,refresh}=useContext(myContext)

  useEffect(()=>{
    setfirstNum('')
    setdate(toDate)
  },[started])
  
  const create =async ()=>{
    const body = {
      salon: id,
      hen_type: type,
      herd_breed: race,
      parent_herd_name: name,
      initial_hen_count: firstNum? firstNum: lastNum,
      start_date: toDate, // 2023-4-2
      herd_birth_date: date, // 2023-4-1
      current_hen_count: lastNum,
    }
    
    const token=true
    const method='POST'
    const api=`/api/v1/epochs/create/`
    if(date&&type&&race&&name&&lastNum){
      Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh)
      setshow(false);setadd(add+1)
      setTimeout(() => {
        setadd(add+10)
      }, 1000);
    }
  }

return (
<>
<div onClick={(e)=> e.target.id == 'outside' && setshow(false)} id='outside' className=" bg-black z-30  bg-opacity-30 inset-0 flex fixed   justify-center items-center">
    <div className="z-40 bg-white rounded-xl  min-w-[260px] box-content  p-8 px-3 lg:px-14 ">
      <div className="flex justify-between w-full gap-4 lg:gap-7 items-center ">
        <div className="w-20">
          <h4 className="mt-1"> نوع مرغ </h4>
          <h4 className="my-5"> نژاد گله </h4>
          <h4 className=""> نام گله مادر </h4>
        </div>
        <div>
          <select className="w-[150px] lg:w-[100%]" onChange={e=>{e.target.value ? settype(e.target.value): settype("")}}> 
            <option value=""> </option>
            <option value="LAYING"> مرغ تخمگذار </option>
            <option value="BROILER"> مرغ گوشتی </option>
          </select><br />
          <input className="my-3 w-[150px] lg:w-[100%]" value={race} onChange={e => setrace(e.target.value)} /> <br/>
          <input className=" w-[150px] lg:w-[100%]" value={name} onChange={e => setname(e.target.value)} /> <br/>
        </div>
      </div>
      <div className="flex mt-5 items-center ">
        <h5 className=" text-xs bold lg:text-base lg:font-normal"> آیا پرورش سالن را از امروز  شروع کرده اید ؟ </h5>
        <label htmlFor='1' className='mr-4' >بله</label>
        <input className='w-min' id='1' type="radio" value={false} onChange={e => setstarted(e.target.defaultValue)} checked={started == 'false'} />

        <label htmlFor='2' className='mr-4' >خیر</label>
        <input className='w-min' id='2' type="radio" value={true} onChange={e => setstarted(e.target.defaultValue)} checked={started == 'true'}/>
      </div>
      <div className={started?"mt-8 flex justify-between items-center":'hidden'}>
        <div className=" ">
          <h5 className={started == 'true'?"text-xs bold lg:text-base lg:font-normal ":'hidden'}>  تاریخ شروع پرورش  </h5>
          <h5 className={started == 'true'?"mt-7 lg:mt-5 text-xs bold lg:text-base lg:font-normal ":'hidden'}>تعداد کل پرنده در روز اول </h5>
          <h5 className={started == 'true'?"inline-block text-xs bold lg:text-base lg:font-normal   mt-7 lg:mt-5":'mt-2 text-xs bold lg:text-base lg:font-normal '}>تعداد کل پرنده در حال حاضر</h5>
        </div>
        <div className="-ml-2">
          <div className={started == 'true'?"mr-2 w-[150px] lg:w-[100%]" :'hidden'}><DatePickerF setdate={setdate} value={value} setvalue={setvalue} /></div>
          <input className={started == 'true'?"mt-3 mx-2 block w-[150px] lg:w-[100%]":'hidden'} type="number" value={firstNum} onChange={e => setfirstNum(e.target.value)} /> 
          <input className='my-0.5 block mx-2 mt-3 w-[150px] lg:w-[100%]' type="number" value={lastNum} onChange={e => setlastNum(e.target.value)} /> 
        </div>
      </div>

      <div className="flex justify-end mt-10 ">
        <button className='btn-r mx-2' onClick={()=>{setdate('');settype('');setrace('');setname('');setfirstNum('');setlastNum('');setstarted(undefined);setshow(false)}}>انصراف</button>
        <button 
          className={date&&type&&race&&name&&lastNum?'btn-g':'btn-g opacity-60'}
          onClick={create} 
          disabled={date&&type&&race&&name&&lastNum?false:true} >ثبت</button>
      </div>
    </div>
  </div>
</>
)}
export default CreateSalon