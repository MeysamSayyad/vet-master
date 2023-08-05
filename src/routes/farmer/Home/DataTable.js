import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Fetch from '../../../components/Fetch';
import { useContext } from 'react';
import { myContext } from '../../../context';

export const DataTable = ({setLoading})=> {
    const navigate =useNavigate();
    const SalonId = useParams().SalonId;
    const [data,setdata] = useState([]);
    const {access,refresh}=useContext(myContext);

    useEffect(()=>{
        const body=undefined
        const token=true
        const method='GET'
        const api=`/api/v1/salons/stats/?salon_id=${SalonId}`
        Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)
      },[data])


    return(
        <div className=' mt-16'>
            <table className='table-auto'>
                <thead>
                    <tr className="border-b-2 border-solid border-black">
                        <th className="border-l-2 border-solid border-black pl-4 pb-2">تعداد پرنده های حاضر در سالن</th>
                        <th className="border-l-2 border-solid border-black px-4 pb-2">جمع کل تلفات تا کنون</th>
                        <th className="pr-4 pb-2">مجموع دان مصرف شده سالن</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {data.map((i)=> ( */}
                        <tr className="h-12">
                            <td className="border-l-2 border-solid border-black text-center">{data.total_hen_count}</td>
                            <td className="border-l-2 border-solid border-black text-center">{data.total_loss_count}</td>
                            <td className="text-center" dir='ltr'>{data.total_feed_amount} Kg</td>
                        </tr>
                    {/* ))} */}
                </tbody>
            </table>
        </div>
    );
}