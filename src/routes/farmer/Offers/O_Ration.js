import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'
import RationT from '../../../components/en_to_fa/RationT'
import StatusT from '../../../components/en_to_fa/StatusT'
import { useContext } from 'react'
import { myContext } from '../../../context'

const O_Ration = () => {
  const [data,setdata] = useState([])
  const [loading,setLoading]=useState(true)
  const [update,setUpdate]=useState(false)
  const navigate =useNavigate()
  const EpochId = useParams().EpochId
  const {access,refresh}=useContext(myContext)

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/ration/suggestions/?epoch_id=${EpochId}`
    Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)
  },[update])
  const decline =(id)=>{
    setLoading(true)
    const body={
      epoch_id:EpochId,
      suggestion_id:id
    }
    const token=true
    const method='POST'
    const api='/api/v1/ration/suggestions/decline/'
    Fetch(body,token,undefined,method,api,navigate,undefined,undefined,setUpdate,access,refresh)
    
  }
  const acceptsuggest=(id)=>{
    setLoading(true)
    const body={
      epoch_id:EpochId,
      suggestion_id:id
    }
    const token=true
    const method='POST'
    const api='/api/v1/ration/suggestions/accept/'
    Fetch(body,token,undefined,method,api,navigate,undefined,undefined,setUpdate,access,refresh)
  }


return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
data.length === 0 ? <h1 className="text"> پیشنهادی هنوز ثبت نشده است.</h1>:(
<>
  <h2 className=" text-center text-2xl mb-4"> جیره های پیشنهادی دامپزشک </h2>

  <div className='flex flex-col text-center mt-4 '>
  {data.map(i=>
    <div key={i.id} className="border-2 rounded-3xl m-2 p-4 md:px-12 px-4 w-4/5 mb-6 mx-auto ">
      <div className="grid grid-cols-5 text-center gap-4">
        <h5 className="mt-2 border-l border-[#707070] "> نوع جیره </h5>
        <h5 className="my-2 border-l border-[#707070] "> مقدار </h5>
        <h5 className="my-2 border-l border-[#707070] ">تاریخ</h5>
        <h5 className=' font-semibold mt-2 border-l border-[#707070]'>مجموع وزن جیره</h5>
        <h3 className="my-2 "> وضعیت </h3>

        <div>{i.data.map((i,inx)=> <h6 key={inx} className="mx-2 -mt-1"><RationT ration={i.name} /> </h6>)}</div>
        <div>{i.data.map((i,inx)=> <h6 key={inx} className="mx-2">{i.amount} </h6>)}</div>
        <h6 className='mx-2'>{Gregorian_to_jalali(i.date)} </h6>
        <div className='flex flex-col justify-start gap-2 '><p>{i.total_weight} کیلوگرم</p></div>
        <div className="mt-2"><StatusT status={i.status} /> </div>
      </div>

      <div className="flex justify-between -mb-[32px] mt-2 w-[102%] ">
        <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 -mr-4 "> تاریخ ثبت {Gregorian_to_jalali(i.suggested_at)} </div>
          <div className="">
          { i.status == 'PENDING' && <button  onClick={()=>decline(i.id)} className='btn-r w-5 rounded-full box-content	 border-2 mx-1'>×</button>}
            { i.status == 'PENDING' && <button onClick={()=>acceptsuggest(i.id)}  className='btn-g w-5 rounded-full box-content	 border-2'>✓</button>}
          </div>
        </div>
    </div>
  )}
</div>
</>
)}
export default O_Ration