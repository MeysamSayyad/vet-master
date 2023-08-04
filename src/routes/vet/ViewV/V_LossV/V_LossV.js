import React from 'react'
import DailyCount from './DailyCount';
import DailyRate from './DailyRate';
import { useParams, useNavigate } from 'react-router-dom';
import { AgChartsReact } from 'ag-charts-react'
import { useState } from 'react';

const V_LossV = () => {
  const id = useParams().EpochId
  const [options,setOptions]=useState({data:[{mean:0,total_count:0}]
    ,
    tooltip: {
      enabled: true,
      showArrow: true,
      class:'tooltipfont'
    },
  series: [
    {
      fillOpacity:0.2,
      type: 'histogram',
      xKey: 'mean',
      xName: 'بازه وزنی مرغ',
      yKey: 'total_count',
      yName: 'تعداد مرغ',
     
      aggregation: 'sum',
      fill:"#1984c5",
      stroke:"#1984c5",
      highlightStyle: {
        item: {
          fill: '#1984c5',
          fillOpacity:0.7
        }
      },
    },
  ],
  navigator:{enabled:false},
  axes: [
    {
      type: 'number',
      position: 'bottom',
      title: { text: 'سن',fontSize:16 },
      tick: { interval: 1 },
      min:0
    },
    {
      type: 'number',
      position: 'left',
      title: { text: 'میانگین درصد تلفات' ,fontSize:16  ,fontWeight:'normal' },
    },
  ],
})
  const navigate=useNavigate()

return (
<div className='flex justify-center flex-col items-center'>
  <DailyCount id={id} navigate={navigate} />
  <br />
  <DailyRate id={id} navigate={navigate} />
  <AgChartsReact  options={options}/>
</div>
)}
export default V_LossV