import React from "react";
import Advertaisment from "../../components/Advertaisment";
import AppointmentForm from "../../components/AppointmentForm";
import PaymentSteps from "../../components/PaymentSteps";
import Services from "../../components/Services";

export const Main: React.FC= () => {

  return (
    <section>
    <Advertaisment/>
    <Services/>
    <PaymentSteps/>
    <AppointmentForm/>
    </section>
  );
};

export default Main;