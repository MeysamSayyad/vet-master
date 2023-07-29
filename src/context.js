import React,{createContext, useState} from "react";
import Cookies from "universal-cookie";

export const myContext = createContext();

const Context =(props)=>{
  const cookies=new Cookies()
  const [epoch,setepoch] = useState({})
  const [salonName,setsalonName] = useState(()=> localStorage.salonName ? localStorage.salonName:'')
  const [farmerName,setfarmerName] = useState('')
  const [access,setAccess]=useState(()=> cookies.get('access') ? cookies.get('access'):'')
  const [refresh,setRefresh]=useState(()=> cookies.get('refresh')? cookies.get('refresh'):'')
  const [updateG,setupdateG] = useState(false)
  
return(
<myContext.Provider value={{epoch,setepoch,farmerName,setfarmerName,salonName,setsalonName,updateG,setupdateG,access,setAccess,refresh,setRefresh}}> 
  {props.children}
</myContext.Provider>
)}
export default Context