import React from "react";
import Advertaisment from "../../components/Advertaisment";
import AppointmentForm from "../../components/AppointmentForm";
import PaymentSteps from "../../components/PaymentSteps"

export const Main: React.FC= () => {

  return (
    <section>
    <Advertaisment/>
    <PaymentSteps/>
    <AppointmentForm/>
    </section>
  );
};

export default Main;