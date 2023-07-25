import Cookies from "universal-cookie";

const Fetch = (body,token,setdata,method,api,navigate) => {
  const cookies = new Cookies()
  const access = cookies.get('access')
  const refresh = cookies.get('refresh')

    fetch(`${process.env.REACT_APP_BASE_URL}${api}`,{
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
      if(res.status == 401){ refreshToken() }
      // console.log(res);
      return res.json()
    })
    .then(data => {
      console.log(data);
      setdata(data)
    })
  // }
  // request()

  const refreshToken=async()=>{
    fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/token/refresh/`,{
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
      if(data){cookies.set('access',data.access)}
      console.log(data);
    })
  }
}
export default Fetch