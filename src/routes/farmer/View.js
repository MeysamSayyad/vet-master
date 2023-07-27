import React, { useContext } from 'react'
import { myContext } from '../../context'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'

const View = () => {
  const {epoch} = useContext(myContext)
  const params=useParams()
  const location=useLocation()

  const chart ={
    labels : [],
    datasets: [
      {
        label: '',
        data: [],
        // data: {count:50, min: -100, 10: 100},
        backgroundColor: [
          'rgba(111 255 241)',
          // 'rgba(115 155 244)',
        ],
        borderColor: [
          'rgb(111 255 241)',
        ],
        borderWidth: 1,
        // borderSkipped:'bottom',

        // base:10
        // barPercentage: 1.3 // فاصله ستون ها
        // barThickness: 75, // ضخامت ستون ها
        // inflateAmount:10, // ضخامت ستون ها
        // grouped:false
        hoverBackgroundColor:['rgba(111 25 241)'],
        hoverBorderWidth:0,
        // indexAxis:'y'
      },
    ]
  }

return (
  <div className='flex gap-10'>
  <nav className='border flex flex-col p-2 px-6 shadow-xl rounded-3xl text-center text-sm h-min'>
    <NavLink to={'V_LossV'} className={({isActive}) => isActive? 'active':'not_active'}> تلفات </NavLink> <hr />
    <NavLink to={'V_VaccinationV'} className={({isActive}) => isActive? 'active':'not_active '}> واکسیناسیون </NavLink> <hr />
    <NavLink to={'V_WeightV'} className={({isActive}) => isActive? 'active':'not_active'}> وزن مرغ </NavLink> <hr />
    <div className={epoch === "BROILER"?"":'hidden'}>
      <NavLink to={'V_NumberEggV'} className={({isActive}) => isActive? 'active':'not_active'}> تعداد تخم مرغ تولیدی </NavLink> <hr />
      <NavLink to={'V_WeightEggV'} className={({isActive}) => isActive? 'active':'not_active'}> وزن تخم مرغ تولیدی </NavLink> <hr />
    </div>
    <NavLink to={'V_SeedV'} className={({isActive}) => isActive? 'active':'not_active'}> دان مصرفی روزانه </NavLink> <hr />
    <NavLink to={'V_RationV'} className={({isActive}) => isActive? 'active':'not_active'}> جیره </NavLink> <hr />
    <NavLink to={'V_LightClockV'} className={({isActive}) => isActive? 'active':'not_active'}> ساعات روشنایی </NavLink> <hr />
    <NavLink to={'V_BeakV'} className={({isActive}) => isActive? 'active':'not_active'}> نوک چینی </NavLink> <hr />
    <NavLink to={'V_EndCourse'} className={({isActive}) => isActive? 'active':'not_active'}> داده های آخر دوره </NavLink> 
  </nav>

  <div className="w-full ">
 { location.pathname== `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}/View` && <div className="w-[60%] ">
      <Bar data={chart} />
      <br />
      <Bar data={chart} />
    </div>}
    <Outlet/>
  </div>
</div>
)}
export default View