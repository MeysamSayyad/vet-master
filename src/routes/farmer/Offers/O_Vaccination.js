import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import UseT from '../../../components/en_to_fa/UseT'
import VacccineT from '../../../components/en_to_fa/VacccineT'
import StatusT from '../../../components/en_to_fa/StatusT'
import { useContext } from 'react'
import { myContext } from '../../../context'

const O_Vaccination = () => {
  const [data,setdata] = useState([])
  const [update,setUpdate]=useState(false)
  const [loading,setLoading]=useState(true)
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId
  const {access,refresh}=useContext(myContext)

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/vaccination/suggestions/?epoch_id=${epoch_id}`
    Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)
  },[update])
  
  const decline =(id)=>{
    setLoading(true)
    const body={
      epoch_id:epoch_id,
      suggestion_id:id
    }
    const token=true
    const method='POST'
    const api='/api/v1/vaccination/suggestions/decline/'
    Fetch(body,token,undefined,method,api,navigate,setLoading,undefined,setUpdate,access,refresh)
    
  }
  const acceptsuggest=(id)=>{
    setLoading(true)
    const body={
      epoch_id:epoch_id,
      suggestion_id:id
    }
    const token=true
    const method='POST'
    const api='/api/v1/vaccination/suggestions/accept/'
    Fetch(body,token,undefined,method,api,navigate,setLoading,undefined,setUpdate,access,refresh)
  }

return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
data.length === 0 ? <h1 className="text"> پیشنهادی هنوز ثبت نشده است.</h1>:(
<>
  <h2 className=" text-center text-2xl mb-4"> واکسیناسیون پیشنهادی دامپزشک </h2>
  <div className='center'>
    <div className="flex flex-col text-center">
      {data.map((i,index)=>
      <div key={i.id} className="border-2 rounded-xl w-[65vw] m-2 p-3.5 px-7 max-w-[800px] mb-4">
        <div className="grid grid-cols-5 ">
          <h3 className=" border-l px-1"> نام واکسن </h3>
          <h3 className=" border-l px-1"> طریقه مصرف </h3>
          <h3 className=" border-l px-1"> سن </h3>
          <h3 className=" border-l px-1"> تاریخ </h3>
          <h3 className=""> وضعیت </h3>

          <h6 className="mt-2"><VacccineT vacccine={i.name} /> </h6>
          <h6 className="mt-2"><UseT use={i.how_to_use} /> </h6>
          <h6 className="mt-2">{i.herd_age} </h6>
          <h6 className="mt-2">{Gregorian_to_jalali(i.date)} </h6>
          <div className="mt-2"><StatusT status={i.status} /> </div>
        </div>
        {/* <p className="text-right mt-4">llllllllllll</p> <br /> */}
        <div className="flex justify-between -mb-[30px] w-[100%] ">
          <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 "> تاریخ ثبت {Gregorian_to_jalali(i.suggested_at)} </div>
          <div className="">
            { i.status == 'PENDING' && <button onClick={()=>decline(i.id)} className='btn-r w-5 rounded-full box-content	 border-2 mx-1'>×</button>}
            { i.status == 'PENDING' && <button onClick={()=>acceptsuggest(i.id)} className='btn-g w-5 rounded-full box-content	 border-2'>✓</button>}
          </div>
        </div>
      </div>
      )}
    </div>
  </div>
</>
)}
export default O_Vaccination