import React from "react";
import Advertaisment from "../../components/Advertaisment";
import AppointmentForm from "../../components/AppointmentForm";
import PaymentSteps from "../../components/PaymentSteps";
import Services from "../../components/Services";
import PriceList from "../../components/PriceList";

export const Main: React.FC= () => {

  return (
    <section style={{  "maxWidth": "1920px", "width": "100%" }}>
    <Advertaisment/>
    <Services/>
    <PaymentSteps/>
    <PriceList/>
    <AppointmentForm/>
    </section>
  );
};

export default Main;