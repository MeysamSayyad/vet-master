import React from 'react'

const V_EndCourse = () => {

// if(data.length === 0)return <h1 className="text"> اطلاعاتی هنوز ثبت نشده</h1>
return (
<div className="text-xl mt-4">
  <div className="center gap-60">
    <div className="">
      <h4 className="mt-4 drop-shadow-sm"> درصد ماندگاری گله :</h4>
      <h4 className="mt-4 drop-shadow-sm"> شاخص تولیدی مرغ گوشتی :</h4>
    </div>
    <div dir='ltr' className="">
      <p className="mt-4 drop-shadow-sm">{0} </p>
      <p className="mt-4 drop-shadow-sm">{0} </p>
    </div>
  </div>
</div>
)}
export default V_EndCourse