import React,{useEffect, useState} from 'react'
import Fetch from '../../../components/Fetch'
import { AgChartsReact } from 'ag-charts-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { myContext } from '../../../context';
const V_SeedV = () => {
const [loading,setLoading]=useState(true)
const [data,setdata]=useState([])
const params=useParams()
const navigate=useNavigate()
const [options, setOptions] = useState({})
const {access,refresh}=useContext(myContext)
  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/feed/?epoch_id=${params.EpochId}`
    Fetch(body,token,setdata,method,api,navigate,setLoading,undefined,undefined,access,refresh)
  },[])
  useEffect(()=>{
    if(data.length >0){

   
    const ndata=data.map((item)=>{
      return {...item,amount:item.amount*1,mean:(item.start_age+ item.end_age)/2}
    })
    const bins=data.map((i)=> [i.start_age,i.end_age] )
    const sortedBins=bins.sort(function(a, b) {
      return a[0]-b[0] ;
    });
    console.log(sortedBins)
    console.log(ndata)
setOptions(
  {
    data:ndata
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
        xName: 'میانگین سنی',
        yKey: 'amount',
        yName: 'مقدار دان مصرفی',
        fontSize:20,
        aggregation: 'mean',
        fill:"#1984c5",
        stroke:"#1984c5",
        highlightStyle: {
          item: {
            fill: '#1984c5',
            fillOpacity:0.7
          }
        },
        bins:sortedBins
      },
    ],
    axes: [
      {
        type: 'number',
        position: 'bottom',
        title: { text: 'سن',fontSize:16 },
        tick: { interval: 3 },
        min:0
      },
      {
        type: 'number',
        position: 'left',
        title: { text: 'میانگین دان مصرفی' ,fontSize:16  ,fontWeight:'normal' },
      },
    ],
  }
)
}
  },[data])
    
// if(data.length === 0)return <h1 className="text"> اطلاعاتی هنوز ثبت نشده</h1>
return loading ? <div className='flex justify-center items-center'> <div className=' border-2 border-gray-700  w-8 h-8 border-r-transparent animate-spin  rounded-full '> </div></div> : 
data.length === 0 ? <h1 className="text"> اطلاعاتی هنوز ثبت نشده</h1>:(

  <div>
    <h3 className=' text-center text-xl font-bold'>نمودار دان مصرفی -سن</h3>
    {options.data  &&<AgChartsReact options={options} />}
  </div>
)}
export default V_SeedV