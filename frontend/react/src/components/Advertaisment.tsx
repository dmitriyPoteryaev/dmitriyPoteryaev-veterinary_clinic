import React from "react";

const Advertisement: React.FC = () => {
  return (
    <section className="main-banner">
      
      <div className="main-banner__content">

        <h1 className="main-banner__title">Ветеринарная клиника Dr.Hug</h1>

        <p className="main-banner__subtitle">
          Работаем c 10:00 - 22:00
        </p> 


<section className="stats" aria-labelledby="stats-title">
  <h2 id="stats-title" className="sr-only">Вас будет консультировать врач </h2>

          <dl className="stats__list">
    <div className="stat">
      <dd className="stat__value" aria-label="4 года">20</dd>
      <dt className="stat__label">лет помогаем животным быть здоровыми</dt>
    </div>

    <div className="stat">
      <dd className="stat__value" aria-label="тридцать тысяч семьсот восемьдесят один">128</dd>
      <dt className="stat__label">успешных хирургических операций</dt>
    </div>

  </dl>
     
     <ul className="stats__features">
      <li className="stats__feature">
      Опыт лечения кошек, собак, птиц и сельскохозяйственных животных
      </li>
      <li className="stats__feature">
      Онлайн-консультации от профессионала с индивидуальным подходом
      </li>
     </ul>
  </section>

         <div className="main-banner__buttons">
          <button className="main-banner__btn">
            Записаться на приём
          </button>
        </div> 

      </div>

       <div className="main-banner__image">
        <img src="/images/main_banner.png" alt="Пёс в красной кофте" />
      </div>
    </section>
  );
};

export default Advertisement;