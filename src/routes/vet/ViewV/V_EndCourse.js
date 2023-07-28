import React from 'react';
import { useContext } from 'react';
import { myContext } from '../../../context';



const V_EndCourse = () => {
  const {epoch} = useContext(myContext);

return (
<div className="text-xl mt-4">
    {epoch.is_active ? 
    "تا پایان دوره امکان مشاهده این قسمت امکان پذیر نمی باشد.":
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
    }
</div>
)}
export default V_EndCourse