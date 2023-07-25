import React from 'react'

const UseT = ({use}) => {
return (
<div>
  {
    use === 'DRINK'?'آشامیدنی':
    use === 'EYE_DROP'?'قطره چشمی ':
    use === 'SPRAY'?'اسپری':
    use === 'INTRAMUSCULAR_INJECTION'?' تزریق عضله ':
    use === 'SUBCUTANEOUS_INJECTION'?' تزریق زیر پوستی ':
    use === 'WING_WEB_PRICK'?' تلقیح در بال ':''
  }
</div>
)}
export default UseT