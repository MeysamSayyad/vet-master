import React, { useContext } from 'react'
import { myContext } from '../../../context'

import LightClock from './LightClock'
import Loss from './Loss'
import NumberEgg from './NumberEgg'
import Ration from './Ration'
import Seed from './Seed'
import Vaccination from './Vaccination'
import Weight from './Weight'
import WeightEgg from './WeightEgg'
import Beak from './Beak'

const Record = () => {
  const {epoch} = useContext(myContext)

return (
<div className=''>
  <Loss />
  <Vaccination />

  <div className={epoch === "BROILER"?"":'hidden'}>
    <NumberEgg />
    <WeightEgg />
  </div>

  <Weight />
  <Seed />
  <Ration />
  <LightClock />
  <Beak />
</div>
)}
export default Record