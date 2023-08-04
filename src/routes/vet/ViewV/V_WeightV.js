import React,{useContext,useState,useEffect} from 'react'
import { myContext } from '../../../context'
import Fetch from '../../../components/Fetch'
import { useNavigate, useParams } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import { AgChartsReact } from 'ag-charts-react'
const V_WeightV = () => {
  const [data,setdata] = useState([])
  const [countdata,setCountData]=useState([])
  const [newOptions,setOptions]=useState({})
  const {access,refresh}=useContext(myContext)
  const id=useParams().EpochId
  const navigate=useNavigate()
  console.log(countdata)

  const chart ={
    labels : data.herd_age_list,
    datasets: [
      {
        label: 'میانگین وزن مرغ',
        data: data.daily_average_list,
        // data: {count:50, min: -100, 10: 100},
        backgroundColor: [
          "#1984c5"
          // 'rgba(115 155 244)',
        ],
        
        borderWidth: 1,
        // borderSkipped:'bottom',

        // base:10
        // barPercentage: 1.3 // فاصله ستون ها
        // barThickness: 75, // ضخامت ستون ها
        // inflateAmount:10, // ضخامت ستون ها
        // grouped:false
        hoverBackgroundColor:['#054658'],
        hoverBorderWidth:0,
        // indexAxis:'y'
        borderRadius:5
      },
    ]
  }
  const Fsrchart ={
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
        
        borderWidth: 1,
        // borderSkipped:'bottom',

        // base:10
        // barPercentage: 1.3 // فاصله ستون ها
        // barThickness: 75, // ضخامت ستون ها
        // inflateAmount:10, // ضخامت ستون ها
        // grouped:false
        hoverBackgroundColor:['#054658'],
        hoverBorderWidth:0,
        // indexAxis:'y'
        borderRadius:5
      },
    ]
  }

  const options ={
  
   
    scales: {
      x: {stacked: true },
      y: {type:'logarithmic'}     
    }
	}

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/hen-weight/daily-average/?epoch_id=${id}`
    const newapi=`/api/v1/hen-weight/count-weight/?epoch_id=${id}`
    Fetch(body,token,setdata,method,api,navigate,undefined,undefined,undefined,access,refresh)
    Fetch(body,token,setCountData,method,newapi,navigate,undefined,undefined,undefined,access,refresh)
  },[])
  useEffect(()=>{
    console.log(countdata.ranges)
    if(countdata.ranges){

   
    const ndata=countdata.ranges.map((item)=>{
      return {...item,total_count:item.total_count*1,mean:(item.end_range - 0.1)}
    })
    const bins=countdata.ranges.map((i)=> [i.start_range*1,i.end_range*1] )
    let sortedBins=bins.sort(function(a, b) {
      return a[0]-b[0] ;
    });
    sortedBins=sortedBins.sort(function(a,b){
      if(a[1]>b[1]){
        return b[0]-a[0]
      }
    }).reverse()
    console.log(sortedBins)
    console.log(ndata)
setOptions(
  {
    data:ndata.length > 0 ? ndata:[]
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
        bins:sortedBins.length > 0 ? sortedBins:[[1,2],[2,4]]
      },
    ],
    axes: [
      {
        type: 'number',
        position: 'bottom',
        title: { text: 'وزن مرغ',fontSize:16 },
        tick: { interval: 3 },
        min:0
      },
      {
        type: 'number',
        position: 'left',
        title: { text: 'تعداد مرغ' ,fontSize:16  ,fontWeight:'normal' },
      },
    ],
  }
)
}
  },[countdata])


// if(data.length === 0)return 
return (
<div className=' flex flex-col items-center'>
  <section className=' flex gap-5 flex-row w-full '>
    <div className='w-[44%] flex flex-col gap-1 items-center'><span>سن-میانگین وزن مرغ</span><Bar data={chart} options={options}/></div>
    <div className='w-[44%] flex flex-col gap-1 items-center'><span>سن-FCR</span><Bar data={Fsrchart} /></div>
  </section>
  <div className='flex flex-col items-center'>
  {<AgChartsReact options={newOptions} />}
  <span className=' flex flex-row gap-4'> { countdata.cv && <span className=' flex flex-row-reverse'>:CV
  <p className=' hover:text-blue-500 cursor-default'>{countdata.cv}</p>
  </span>}{ countdata.total_weighed_hens && <span className=' flex flex-row' >تعداد مرغ وزن شده:<p className=' cursor-default inline hover:text-blue-400'>{countdata.total_weighed_hens}</p></span>}</span>
  </div>
</div>
)}
export default V_WeightV