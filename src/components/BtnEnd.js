import React, { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { myContext } from '../context'
import Fetch from './Fetch'

const BtnEnd = () => {

  const {epoch,setepoch,access,refresh} = useContext(myContext)
  const [data,setdata] = useState('')
  const [update,setupdate] = useState(false)
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId
  const width = window.innerWidth;

  function ok(){
    const body={ epoch_id }
    const token=true
    const method='POST'
    const api=`/api/v1/epochs/end/`
    
    if(window.confirm(' آیا از این کار اطمینان دارید این عمل غیر قابل بازگشت است')) {
      Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh)
      epoch.end_date = 'now'
      setupdate(!update)
    }
    setepoch(epoch)
  }
return (
  <div className={epoch.end_date?'hidden':"flex justify-center max-sm:mt-2"}>
    <button className='active w-auto p-2 lg:px-5 px-2 shadow-md max-sm:text-[12px]' onClick={ok}>{width >= 640 ? " اتمام دوره پرورش " : " اتمام دوره "}</button>
  </div>
)}
export default BtnEnd