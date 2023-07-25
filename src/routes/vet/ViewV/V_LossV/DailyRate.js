import React, { useState, useEffect, useContext } from 'react'
import Fetch from '../../../../components/Fetch'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const DailyRate = ({id, navigate}) => {
  const [data,setdata] = useState({})

  const chart ={
    labels : data.herd_age_list,
    datasets: [
      {
        label: 'لیست نرخ روزانه',
        data: data.daily_rate_list,
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
    const api=`/api/v1/loss/daily-rate/?epoch_id=${id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<div>
  <h2 className="bold text-xl text-center m-4">نمودار سن-درصد تلفات  </h2>
  <Bar data={chart} options={options}/>
</div>
)}
export default DailyRate