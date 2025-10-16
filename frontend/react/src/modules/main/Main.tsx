import React from "react";
import Advertaisment from "../../components/Advertaisment";
import AppointmentForm from "../../components/AppointmentForm";

export const Main: React.FC= () => {

  return (
    <section>
    <Advertaisment/>
    <AppointmentForm/>
    </section>
  );
};

export default Main;