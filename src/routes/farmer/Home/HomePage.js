import React, { useState,useEffect,useContext } from 'react'
import Fetch from '../../../components/Fetch'
import { useNavigate, useParams } from "react-router-dom";
import { myContext } from '../../../context'
import Salon from './Salon';
import { Loading } from '../../../components/Loading';
import { DataTable } from './DataTable';


const HomePage = () => {
  const {setsalonName,access,refresh} = useContext(myContext)
  const [show,setshow] = useState(false)
  const [name,setname] = useState('')
  const [location,setlocation] = useState('')
  const [data,setdata] = useState([])
  const [update,setupdate] = useState(false)
  const [add,setadd] = useState(0)
  const [loading,setLoading]=useState(false)
  const navigate =useNavigate()
  const id = useParams().id
  const SalonId=useParams().SalonId
  
  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/salons/?farmer_id=${id}`
    setLoading(true)
    Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)
  },[update,add])
  


  const addSalon=async()=>{
    const body = { name, location, farmer: id }
    const token = true
    const method = 'POST'
    const api = '/api/v1/salons/create/'
    Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh)
    setshow(false);setname('');setlocation('');setadd(add+1)
    setTimeout(() => {
      setupdate(add + 1)
      console.log(add);
    }, 1000);
  }
  const navToSalon=(_id,name)=>{
    if(_id==SalonId){
      navigate(`/NavF/HomePage/${id}`)
      setsalonName('')
      localStorage.removeItem('salonName')
    }
    else{
      navigate(`/NavF/HomePage/${id}/SalonId/${_id}`)
      setsalonName(name)
      localStorage.salonName=name
    }
    _id != SalonId && setLoading(true)
  }

  
 
  
return (
<div className="">
  {loading && <Loading loading={loading} setLoading={setLoading}  />}
  <div className=' flex flex-row justify-center lg:justify-start lg:gap-[40px]  gap-3  '>
    <div  className={` border-0 lg:border-l  ${SalonId && "hidden"} lg:block mr-4 lg:mr-0 lg:border-slate-400 w-92 min-h-[90vh] pl-6`}>
      <button className='text-slate-500 bold border-[1.5px] text-xs lg:text-base border-slate-500 p-2 px-6 mb-1 hover:bg-slate-500 transition-all hover:text-white  rounded 'onClick={()=> setshow(true)}> افزودن سالن </button>
      {
        data.length > 0?
        data.map(i => 
          <div style={SalonId==i.id ? {borderWidth:'1.5px',borderColor:'grey',boxShadow:'0px 2px 3px 1px grey'}:undefined} key={i.id} 
          onClick={()=>{navToSalon(i.id,i.name)}} className=" text-xs lg:text-base cursor-pointer rounded-lg py-4 ml-4 mt-4 grid grid-cols-2 text-center gap-2 bg-slate-200 w-[300px]" >
            <h4 className=""> نام سالن:</h4>
            <h4 className=""> {i.name} </h4>
            <h4 className="">مکان سالن:</h4>
            <h4 className="">{i.location} </h4>
          </div>
        )
        :<h2 className='my-3 text-lg '>سالنی برای نمایش وجود ندارد</h2>
      }
    </div>
    {/* 2 */}
    { SalonId &&<><div className={` w-[330px] ${SalonId && 'border-l'}`}>{SalonId &&<Salon setLoading={setLoading} />}</div>
    <div className=''>{SalonId &&<DataTable setLoading={setLoading} />}</div></>}
  </div>
  {/* modul */}
  {
    show ?
    <>    
    <div onClick={()=> setshow(false)} className="backdrop"></div>
    <div className="center ">
      <div className="z-40 bg-white rounded-xl p-8 px-2 lg:px-14 fixed top-[30vh] ">
        <div className="flex justify-between items-center w-full gap-7 ">
          <div className="">
            <h4 className=""> نام سالن </h4>
            <h4 className="mt-8"> مکان سالن </h4>
          </div>
          <div className="">
            <input className="" value={name} onChange={e => setname(e.target.value)} /> <br/>
            <input className="mt-5" value={location} onChange={e => setlocation(e.target.value)} />
          </div>
        </div>
        <div className="flex justify-end mt-10 ">
          <button className='btn-r mx-2'onClick={()=>{setshow(false);setname('');setlocation('')}}>انصراف</button>
          <button className={name&&location?'btn-g':'btn-g opacity-60'} onClick={addSalon} disabled={name&&location?false:true} >ثبت</button>
        </div>
      </div>
    </div>
    </>
    : ''
  }
</div>
)}
export default HomePage