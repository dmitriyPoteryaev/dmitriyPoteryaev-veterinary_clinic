import React from "react";
import Advertaisment from "../../components/advertaisment/Advertaisment";
import AppointmentForm from "../../components/AppointmentForm";
import PaymentSteps from "../../components/PaymentSteps";
import Services from "../../components/services/Services";
import Price from "../../components/price/Price";

export const Main: React.FC= () => {

  return (
    <section className="main__block">
    <Advertaisment/>
    <Services/>
    <PaymentSteps/>
    <Price/>
    <AppointmentForm/>
    </section>
  );
};

export default Main;