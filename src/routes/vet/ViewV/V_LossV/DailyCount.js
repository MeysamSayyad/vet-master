import React, { useState, useEffect, useContext } from 'react'
import Fetch from '../../../../components/Fetch'

import { Bar } from 'react-chartjs-2';

const DailyCount = ({id, navigate}) => {
  const [data,setdata] = useState({})
 console.log(data)
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
    Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<div>
  <h2 className="bold text-xl text-center m-4">نمودار سن-تعداد تلفات  </h2>
  <Bar data={chart} options={options}/>
</div>
)}
export default DailyCount