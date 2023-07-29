import Cookies from "universal-cookie";


const firstFetch = async(body,method,api,navigate,setLoad,setError,setAccess,setRefresh,ref) => {
  const cookies = new Cookies()
  const access = cookies.get('access')
  const refresh = cookies.get('refresh')
  const refreshToken=async()=>{
   await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/token/refresh/`,{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(refresh?{refresh}:ref)
    })
    .then(res=>{
      if(res.status === 401){ navigate('/') }
      // if(res.status === 200){request()}
      return res.json()
    })
    .then(data=>{
      if(data){cookies.set('access',data.access,{path:data.role=="VET" ? '/NavV':'/NavF'})}
      console.log(data);
    })
  }

    fetch(`${process.env.REACT_APP_BASE_URL}${api}`,{
      method,
      headers: 
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
      return res.json()
    })
    .then(data => {
       
        data.access && setAccess(data.access); data.role === 'VET' ? cookies.set('access',data.access,{ path: '/NavV' }):cookies.set('access',data.access,{ path: '/NavF' })
         if(data.role === 'VET' ){ navigate(`/NavV/HomePageV/${data.id}`)}
        if(data.role === "FARMER" ){ navigate(`/NavF/HomePage/${data.id}`)}
        if(data.refresh){ setRefresh(data.refresh);   data.role === 'VET' ? cookies.set('refresh',data.access,{ path: '/NavV' }):cookies.set('refresh',data.access,{ path: '/NavF' })}
    })
    .finally(data=>{
      setLoad && setLoad(false)
    })
  // }
  // request()
 
}
export default firstFetch