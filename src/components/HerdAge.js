import Cookies from "universal-cookie";

const HerdAge = (setherd_age,date,id) => {
  const cookies = new Cookies()
  const access = cookies.get('access')
  
  fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/epochs/herd-age/?epoch_id=${id}&date=${date}`,{
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access}`
    }
  })
  .then(res=>res.json())
  .then(data=>{setherd_age(data.herd_age)})

}
export default HerdAge