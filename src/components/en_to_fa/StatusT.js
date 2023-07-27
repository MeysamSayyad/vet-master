import React from 'react'

const StatusT = ({status}) => {
return (
<div style={{color:status === 'PENDING'? '#ffc300':status ==='REJECTED'?'#FE0000':'#54B435'}}>
  {
    status === 'PENDING'?' در انتظار ':
    status === 'REJECTED'?' پذیرفته نشده ':
    status === 'DONE'?' انجام شده ':''
  }
</div>
)}
export default StatusT
