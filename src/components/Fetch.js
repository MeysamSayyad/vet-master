import Cookies from "universal-cookie";

const Fetch = async(body,token,setdata,method,api,navigate,setLoad,setError,setUpdate,access,refresh) => {
  const cookies = new Cookies()


  const refreshToken=async()=>{
   await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/token/refresh/`,{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({refresh})
    })
    .then(res=>{
      if(res.status === 401){ navigate('/') }
      // if(res.status === 200){request()}
      return res.json()
    })
    .then(data=>{
      if(data){cookies.set('access',data.access,{ path: '/' })}
      console.log(data);
    })
  }
   await fetch(`${process.env.REACT_APP_BASE_URL}${api}`,{
      method,
      headers: token?
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access}`
      }
      :
      {
        'Content-Type': 'application/json',
      }
      ,
      body: JSON.stringify(body)
    })
    .then(res=>{ 
      if(res.status == 401){ refreshToken()
      setError && setError('نام کاربری یا رمز عبور اشتباه است')
      }
      // console.log(res);
      console.log(res)
      return  method == 'POST' ? res : res.json()
    })
    .then(data => {
      
      console.log(data);
     setdata && setdata(data)
    })
    .finally(data=>{
      setLoad && setLoad(false)
      setUpdate && setUpdate(perv=> !perv)
    })
  // }
  // request()

  
}
export default Fetch