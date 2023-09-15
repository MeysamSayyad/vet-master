import React, { useEffect } from 'react'
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import transition from "react-element-popper/animations/transition"
import "react-multi-date-picker/styles/colors/teal.css"
import Icon from 'react-multi-date-picker/components/icon'

const DatePickerF = ({setdate,value,setvalue}) => {
  let jy=value.year
  let jm=value.monthIndex+1
  let jd=value.day

  const weekDays = [
    ["شنبه", "ش"], //[["نام","نام کوتاه"], ... ]
    ["یکشنبه", "ی"],
    ["دوشنبه", "د"],
    ["سه شنبه", "س"],
    ["چهارشنبه", "چ"],
    ["پنجشنبه", "پ"],
    ["جمعه", "ج"]
  ]

  function jalali_to_gregorian(jy, jm, jd) {
    var sal_a, gy, gm, gd, days;
    jy += 1595;
    days = -355668 + (365 * jy) + (~~(jy / 33) * 8) + ~~(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
    gy = 400 * ~~(days / 146097);
    days %= 146097;
    if (days > 36524) {
      gy += 100 * ~~(--days / 36524);
      days %= 36524;
      if (days >= 365) days++;
    }
    gy += 4 * ~~(days / 1461);
    days %= 1461;
    if (days > 365) {
      gy += ~~((days - 1) / 365);
      days = (days - 1) % 365;
    }
    gd = days + 1;
    sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
    // return [gy, gm, gd];
    return setdate(`${gy}-${gm}-${gd}`)
  }
  useEffect(()=>{
    if(value.length !== 0){jalali_to_gregorian(jy,jm,jd)}
  },[value])
 

return (
<div dir='ltr' className='flex justify-between items-center border rounded lg:w-[220px] min-w-[90px]  max-sm:h-7'>
  <DatePicker 
    className='teal '
    value
    onChange={(e)=>{setvalue(e)}}
    render={<Icon/>}
    calendar={persian}
    locale={persian_fa}
    animations={[
      transition({
        from: 35,
        transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
      }),
    ]} 
    weekDays={weekDays}
    // format=" ddd (dddd)"
    
    calendarPosition='bottom'
    mapDays={({ date,currentMonth }) => {
      let props = {}
      let isWeekend = date.weekDay.index === 6
      if (isWeekend) props.className = "highlight highlight-red"
      props.style = {
        borderRadius: "3px",
        // backgroundColor: date.month.index === currentMonth.index ? "#ccc" : ""
      }
      return props
    }}
  />
  <div className={jy ?"text-center w-full max-sm:text-[11px] ":'hidden'}>
    {jy}/{jm}/{jd}
  </div>

</div>
)}
export default DatePickerF