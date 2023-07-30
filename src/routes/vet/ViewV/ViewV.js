import React, { useState ,useEffect, useContext } from 'react'
import { NavLink, Outlet,useLocation, useParams, useNavigate } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import Fetch from "../../../components/Fetch"
import { myContext } from '../../../context'

const ViewV = () => {
  const [data,setdata]=useState([]);
  const location=useLocation();
  const params=useParams();
  const id = useParams().EpochId
  const navigate=useNavigate();
  const {access,refresh}= useContext(myContext);

  const chart ={
    labels : data.herd_age_list,
    datasets: [
      {
        label: 'شمار',
        data: data.count_list,
        // data: {count:50, min: -100, 10: 100},
        backgroundColor: [
          "#1984c5"
          // 'rgba(115 155 244)',
        ],
        
        
        // borderSkipped:'bottom',

        // base:10
        // barPercentage: 1.3 // فاصله ستون ها
        // barThickness: 75, // ضخامت ستون ها
        // inflateAmount:10, // ضخامت ستون ها
        // grouped:false
        hoverBackgroundColor:['#054658'],
        hoverBorderWidth:0,
        borderRadius:3
        // indexAxis:'y'
      },
      {
        label: 'کاتاف',
        data: data.cutoff_list,
        backgroundColor: [
          // 'rgba(111 255 241)',
          "#F45050"
        ],
        borderRadius:3,
        hoverBackgroundColor:['#054658'],
      }
    ]
  }

  const options ={
    responsive: true,
    scales: {
      x: {stacked: true },
      y: {stacked: true }     
    }
	}

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/loss/daily-count/?epoch_id=${id}`
    Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh)
  },[])
  const chart2 ={
    labels : '',
    datasets: [
      {
        label: '',
        data: [],
        // data: {count:50, min: -100, 10: 100},
        backgroundColor: [
          "#1984c5"
          // 'rgba(115 155 244)',
        ],
        
        
        // borderSkipped:'bottom',

        // base:10
        // barPercentage: 1.3 // فاصله ستون ها
        // barThickness: 75, // ضخامت ستون ها
        // inflateAmount:10, // ضخامت ستون ها
        // grouped:false
        hoverBackgroundColor:['#054658'],
        hoverBorderWidth:0,
        borderRadius:3
        // indexAxis:'y'
      },
    ]
  }
  // const options ={
  //   responsive: true,
    
  //   scales: {
  //     x: {stacked: true },
  //     y: {stacked: true }     
  //   }
	// }

return (
  <div className='flex gap-10'>
  <nav className='border flex flex-col p-2 px-6 shadow-xl rounded-3xl text-center text-sm h-min'>
    {/* <NavLink to={'V_InfoV'} className={({isActive}) => isActive? 'active':'not_active'}> مشخصات دوره پرورش </NavLink> <hr /> */}
    <NavLink to={'V_LossV'} className={({isActive}) => isActive? 'active':'not_active'}> تلفات </NavLink> <hr />
    <NavLink to={'V_VaccinationV'} className={({isActive}) => isActive? 'active':'not_active '}> واکسیناسیون </NavLink> <hr />
    <NavLink to={'V_WeightV'} className={({isActive}) => isActive? 'active':'not_active'}> وزن مرغ </NavLink> <hr />
    {/* <NavLink to={'V_NumberEggV'} className={({isActive}) => isActive? 'active':'not_active'}> تعداد تخم مرغ تولیدی </NavLink> <hr />
    <NavLink to={'V_WeightEggV'} className={({isActive}) => isActive? 'active':'not_active'}> وزن تخم مرغ تولیدی </NavLink> <hr /> */}
    <NavLink to={'V_SeedV'} className={({isActive}) => isActive? 'active':'not_active'}> دان مصرفی روزانه </NavLink> <hr />
    <NavLink to={'V_RationV'} className={({isActive}) => isActive? 'active':'not_active'}> جیره </NavLink> <hr />
    <NavLink to={'V_LightClockV'} className={({isActive}) => isActive? 'active':'not_active'}> ساعات روشنایی </NavLink> <hr />
    <NavLink to={'V_BeakV'} className={({isActive}) => isActive? 'active':'not_active'}> نوک چینی </NavLink> <hr />
    <NavLink to={'V_EndCourse'} className={({isActive}) => isActive? 'active':'not_active'}> داده های آخر دوره </NavLink> 
  </nav>

  <div className="w-full ">
  { location.pathname== `/NavV/HomePageV/${params.id}/userId/${params.userId}/salonId/${params.salonId}/EpochId/${params.EpochId}/ViewV` && <div className="w-[60%] mx-auto ">
 <h2 className="bold text-xl text-center m-4">نمودار سن-تعداد تلفات  </h2>
      <Bar data={chart} options={options} />
      <br />
     <h2 className=' text-center bold text-xl'>میانگین وزن مرغ-سن</h2> 
      <Bar data={chart2}/>
    </div>}
    <Outlet/>
  </div>
</div>
)}
export default ViewV