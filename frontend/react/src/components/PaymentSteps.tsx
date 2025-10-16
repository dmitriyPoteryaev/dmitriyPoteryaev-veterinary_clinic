import React from "react";

const PaymentSteps: React.FC = () => {
  return (
<section className="doctor-flow">
  <h2 className="doctor-flow__title">Как проходит связь с врачом</h2>

  <ol className="doctor-flow__list">
    <li className="doctor-flow__item">
      <div className="doctor-flow__num">1</div>
      <div className="doctor-flow__body">
        <h3>Заполните форму заявки</h3>
        <p>Укажите контакты, питомца и кратко опишите проблему.</p>
      </div>
    </li>

    <li className="doctor-flow__item">
      <div className="doctor-flow__num">2</div>
      <div className="doctor-flow__body">
        <h3>Врач изучит запрос</h3>
        <p>Мы проверим данные и при необходимости уточним детали.</p>
      </div>
    </li>

    <li className="doctor-flow__item">
      <div className="doctor-flow__num">3</div>
      <div className="doctor-flow__body">
        <h3>Получите ссылку на оплату</h3>
        <p>Отправим безопасную ссылку на оплату согласованной консультации.</p>
      </div>
    </li>

    <li className="doctor-flow__item">
      <div className="doctor-flow__num">4</div>
      <div className="doctor-flow__body">
        <h3>Связь в течение 30 минут</h3>
        <p>После оплаты врач свяжется с вами в течение <strong>30 минут</strong> (в рабочее время).</p>
      </div>
    </li>
  </ol>

</section>

  );
};

export default PaymentSteps;