/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { myContext } from "./context";

import Login from "./routes/Login";
import HomePageV from "./routes/vet/HomePageV";
import NavV from "./routes/vet/NavV";
import Salons from "./routes/vet/Salons";
import Epoch from "./routes/vet/Epoch";

import OffersV from "./routes/vet/OffersV/OffersV";
import O_BeakV from "./routes/vet/OffersV/O_BeakV";
import O_LightClockV from "./routes/vet/OffersV/O_LightClockV";
import O_RationV from "./routes/vet/OffersV/O_RationV";
import O_VaccinationV from "./routes/vet/OffersV/O_VaccinationV";
import O_prescriptionV from "./routes/vet/OffersV/O_prescriptionV";

import HomePage from "./routes/farmer/Home/HomePage";
import Record from "./routes/farmer/Record/Record";
import Salon from "./routes/farmer/Home/Salon";

import NavF from "./routes/farmer/NavF";
import NavO from "./routes/farmer/Offers/NavO";
import O_Beak from "./routes/farmer/Offers/O_Beak";
import O_LightClock from "./routes/farmer/Offers/O_LightClock";
import O_Ration from "./routes/farmer/Offers/O_Ration";
import O_Vaccination from "./routes/farmer/Offers/O_Vaccination";
import O_prescription from "./routes/farmer/Offers/O_prescription";

import ViewV from "./routes/vet/ViewV/ViewV";
import V_BeakV from "./routes/vet/ViewV/V_BeakV";
import V_EndCourse from "./routes/vet/ViewV/V_EndCourse";
import V_InfoV from "./routes/vet/ViewV/V_InfoV";
import V_LightClockV from "./routes/vet/ViewV/V_LightClockV";
import V_LossV from "./routes/vet/ViewV/V_LossV/V_LossV";
import V_NumberEggV from "./routes/vet/ViewV/V_NumberEggV";
import V_RationV from "./routes/vet/ViewV/V_RationV";
import V_VaccinationV from "./routes/vet/ViewV/V_VaccinationV";
import V_WeightEggV from "./routes/vet/ViewV/V_WeightEggV";
import V_WeightV from "./routes/vet/ViewV/V_WeightV";
import V_SeedV from "./routes/vet/ViewV/V_SeedV";

import View from "./routes/farmer/View";
import NotFound from "./NotFound";
import { useContext } from "react";

function App() {
const {access}=useContext(myContext)


  return <div className="" dir="rtl">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/NavF' element={access ?<NavF/>:<Navigate to={'/'}/>} >
          <Route path="HomePage/:id" element={<HomePage />} >
            <Route path="SalonId/:SalonId" element={<></>} />
          </Route>
          
          <Route path="HomePage/:id/SalonId/:SalonId/EpochId/:EpochId/Record" element={<Record />} />

          <Route path="HomePage/:id/SalonId/:SalonId/EpochId/:EpochId/View" element={<View />} >
            <Route path="V_BeakV" element={<V_BeakV />} />
            <Route path="V_EndCourse" element={<V_EndCourse />} />
            <Route path="V_LightClockV" element={<V_LightClockV />} />
            <Route path="V_LossV" element={<V_LossV />} />
            <Route path="V_NumberEggV" element={<V_NumberEggV />} />
            <Route path="V_RationV" element={<V_RationV />} />
            <Route path="V_VaccinationV" element={<V_VaccinationV />} />
            <Route path="V_WeightEggV" element={<V_WeightEggV />} />
            <Route path="V_WeightV" element={<V_WeightV />} />
            <Route path="V_SeedV" element={<V_SeedV />} />
          </Route>

          <Route path="HomePage/:id/SalonId/:SalonId/EpochId/:EpochId/NavO" element={<NavO />} >
            <Route path="O_Beak" element={<O_Beak />} />
            <Route path="O_LightClock" element={<O_LightClock />} />
            <Route path="O_Ration" element={<O_Ration />} />
            <Route path="O_Vaccination" element={<O_Vaccination />} />
            <Route path="O_prescription" element={<O_prescription />} />
          </Route>
        </Route>

        <Route path='/NavV' element={access ? <NavV/>:<Navigate to={'/'}/>} >
          <Route path="HomePageV/:id" element={<HomePageV />}>
            <Route path="userId/:userId" element={<></>}>
              <Route path="salonId/:salonId" element={<></>} />
            </Route>
          </Route>

          <Route path="HomePageV/:id/userId/:userId/salonId/:salonId/EpochId/:EpochId/OffersV" element={<OffersV />} >
            <Route path="O_BeakV" element={<O_BeakV />} />
            <Route path="O_LightClockV" element={<O_LightClockV />} />
            <Route path="O_RationV" element={<O_RationV />} />
            <Route path="O_VaccinationV" element={<O_VaccinationV />} />
            <Route path="O_prescriptionV" element={<O_prescriptionV />} />
          </Route>
          <Route path="HomePageV/:id/userId/:userId/salonId/:salonId/EpochId/:EpochId/ViewV" element={<ViewV />} >
            <Route path="V_BeakV" element={<V_BeakV />} />
            <Route path="V_EndCourse" element={<V_EndCourse />} />
            <Route path="V_InfoV" element={<V_InfoV />} />
            <Route path="V_LightClockV" element={<V_LightClockV />} />
            <Route path="V_LossV" element={<V_LossV />} />
            <Route path="V_NumberEggV" element={<V_NumberEggV />} />
            <Route path="V_RationV" element={<V_RationV />} />
            <Route path="V_VaccinationV" element={<V_VaccinationV />} />
            <Route path="V_WeightEggV" element={<V_WeightEggV />} />
            <Route path="V_WeightV" element={<V_WeightV />} />
            <Route path="V_SeedV" element={<V_SeedV />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}
export default App;
