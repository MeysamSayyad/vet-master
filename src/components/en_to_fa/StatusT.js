import React from 'react'

const StatusT = ({status}) => {
return (
<div>
  {
    status === 'PENDING'?' در انتظار ':
    status === 'REJECTED'?' پذیرفته نشده ':
    status === 'DONE'?' انجام شده ':''
  }
</div>
)}
export default StatusT
