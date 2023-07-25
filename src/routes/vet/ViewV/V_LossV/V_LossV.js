import React from 'react'
import DailyCount from './DailyCount';
import DailyRate from './DailyRate';
import { useParams, useNavigate } from 'react-router-dom';

const V_LossV = () => {
  const id = useParams().EpochId
  const navigate=useNavigate()

return (
<div className=' '>
  <DailyCount id={id} navigate={navigate} />
  <br />
  <DailyRate id={id} navigate={navigate} />
</div>
)}
export default V_LossV