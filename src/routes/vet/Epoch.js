import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Fetch from '../../components/Fetch';
import InfoSalon from './InfoSalonV';
import { useContext } from 'react';
import { myContext } from '../../context';
import gregorian_to_jalali from '../../components/Gregorian_to_jalali';

const Epoch = () => {
  const [data,setdata] = useState([]);
  const [show,setshow] = useState(false);
  const [loading,setLoading]=useState(true);
  const [EpochId,setEpochId] = useState('');
  const {access,refresh}=useContext(myContext)
  const navigate =useNavigate();
  const id = useParams().salonId;

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/epochs/?salon_id=${id}`
    Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)
  },[id]);

return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
data.length === 0 ? <h1 className="text">دوره ای وجود ندارد</h1> :
(
<>
  <div className=''>
    <div className="w-96 h-auto flex-col lg:items-center flex cursor-pointer">
      <span className="ml-6 mb-2"> دوره ها</span>
      {
        data.length === 0 ? '':
        data.reverse().map(i => <div key={i.id} className={i.end_date === null?'card2 w-[13rem] lg:w-[20rem] gap-1 pl-1 pr-1 lg:pr-[1.75rem] lg:pl-[1.75rem] lg:gap-2 grid':"card2 grid w-[13rem] lg:w-[20rem]  pl-1 pr-1 lg:pr-[1.75rem] lg:pl-[1.75rem] gap-1 lg:gap-2 opacity-70" } onClick={()=>{setshow(true); setEpochId(i.id)}}>
        
          <h5 className="mb-1"> تاریخ آغاز دوره : </h5>
          <h5 className="mb-1">{gregorian_to_jalali(i.start_date)} </h5>
          <h5 className="mb-1"> تاریخ پایان دوره : </h5> 
          <h5 className="mb-1">{i.end_date? gregorian_to_jalali(i.end_date) :'در حال پرورش'} </h5>
          <h5 className=""> نوع مرغ : </h5>
        <h5 className="">{i.hen_type === 'LAYING'?' مرغ تخمگذار ':' مرغ گوشتی '}</h5>
      
          
         
          
        
      </div>
      )}
    </div>
  </div>
  {show? <InfoSalon setshow={setshow} EpochId={EpochId} />: ''}
  
</>
)}
export default Epoch