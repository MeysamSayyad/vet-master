/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Fetch from '../../components/Fetch';
import { myContext } from '../../context';
import Salons from './Salons';


const HomePageV = () => {
   const [data,setdata] = useState([]);
   const [loading,setLoading]=useState(true)
   const {setfarmerName,access,refresh} = useContext(myContext);
   const navigate =useNavigate();
   const id = useParams().id;
   const userId = useParams().userId;

   useEffect(()=>{
      const body=undefined
      const token=true
      const method='GET'
      const api=`/api/v1/farmers/?vet_id=${id}`
      Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)
      
      },[])

   return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
   data.length === 0 ? <h1 className="text">مرغداری وجود ندارد</h1>:
   (
   <div className='flex flex-row w-full'>
      {/* farmers name */}
      <div className="flex flex-col justify-start ml-12 flex-wrap gap-6 w-[300px] h-auto items-center">
         <span className="">مرغدار ها</span>
         {data.map(i => 
         <Link key={i.id} to={`userId/${i.id}`} onClick={()=>{ setfarmerName(`${i.first_name} ${i.last_name}`); localStorage.farmerName= `${i.first_name} ${i.last_name}` }}
          style={userId==i.id ? {borderWidth:'1.5px',borderColor:'grey',boxShadow:'0px 2px 3px 1px grey'}:undefined}
          className="border-2 py-6 px-3 w-56 h-28 rounded-xl bg-slate-100 shadow-md center items-center">  
            {i.first_name} {i.last_name}
         </Link>
         )}
      </div>
      {/* salons */}
      <div className='flex h-auto' > 
         {userId && <Salons setLoading={setLoading} />}
      </div>
   </div>
)}
export default HomePageV