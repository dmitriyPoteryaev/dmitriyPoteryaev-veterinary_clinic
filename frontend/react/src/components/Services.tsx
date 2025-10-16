import React from "react";

const services = [
  {
    title: "Консультации по уходу",
    desc: "Консультация по уходу, содержанию, кормлению домашних и сельскохозяйственных животных и птицы",
    img: "/images/cat.png",
  },
  {
    title: "Лабораторные заключения",
    desc: "Консультация специалиста по лабораторным заключениям",
    img: "/images/dog.png",
  },
  {
    title: "Инфекционные и инвазионные болезни",
    desc: "Консультация по лечению и профилактике инфекционных и инвазионных заболеваний животных и птицы ( с составлением комплексного плана )",
    img: "/images/cat.png",
  },
  {
    title: "Терапевтические заболевания",
    desc: "Консультация по лечению и профилактике терапевтических заболеваний животных и птицы ( с составлением комплексного плана )",
    img: "/images/dog.png",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <img src={s.img} alt={s.title} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
