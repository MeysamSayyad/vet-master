import React, { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { myContext } from '../context'
import Fetch from './Fetch'

const BtnEnd = () => {

  const {epoch,setepoch} = useContext(myContext)
  const [data,setdata] = useState('')
  const [update,setupdate] = useState(false)
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId

  function ok(){
    const body={ epoch_id }
    const token=true
    const method='POST'
    const api=`/api/v1/epochs/end/`
    
    if(window.confirm(' آیا از این کار اطمینان دارید این عمل غیر قابل بازگشت است')) {
      Fetch(body,token,setdata,method,api,navigate)
      epoch.end_date = 'now'
      setupdate(!update)
    }
    setepoch(epoch)
  }
return (
  <div className={epoch.end_date?'hidden':"flex justify-end"}>
    <button className='active w-auto p-2 px-5 shadow-md' onClick={ok}> اتمام دوره پرورش </button>
  </div>
)}
export default BtnEnd