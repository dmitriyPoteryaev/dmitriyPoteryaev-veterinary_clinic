import React from "react";
import Advertaisment from "../../components/advertaisment/Advertaisment";
import AppointmentForm from "../../components/AppointmentForm";
import Payment from "../../components/payment/Payment";
import Services from "../../components/services/Services";
import Price from "../../components/price/Price";

export const Main: React.FC= () => {

  return (
    <section className="main__block">
    <Advertaisment/>
    <Services/>
    <Payment/>
    <Price/>
    <AppointmentForm/>
    </section>
  );
};

export default Main;