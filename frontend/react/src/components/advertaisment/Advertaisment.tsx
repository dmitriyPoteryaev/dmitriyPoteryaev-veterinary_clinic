import React from "react";
import classes from './advertaisment.module.css';


const Advertisement: React.FC = () => {
  return (
    <section  className={classes.mainBanner}>
      
      <div className={classes.mainBanner__content}>

        <h1 className={classes.mainBanner__title}>Ветеринарная клиника Dr.Hug</h1>

        <p className={classes.mainBanner__subtitle}>
          Работаем c 10:00 - 22:00
        </p> 


<section className={classes.stats} aria-labelledby="stats-title">

  <h2 id="stats-title">Вас будет консультировать врач </h2>

      <dl className={classes.stats__list}>
      <div className={classes.stat}>
      <dd aria-label="4 года" className={classes.stat__value}>20</dd>
      <dt className={classes.stat__label}>лет помогаем животным быть здоровыми</dt>
    </div>

    <div className={classes.stat}>
      <dd aria-label="тридцать тысяч семьсот восемьдесят один" className={classes.stat__label}>128</dd>
      <dt className={classes.stat__label}>успешных хирургических операций</dt>
    </div>

  </dl>
     
     <ul className={classes.stats__features}>
      <li className={classes.stats__feature}>
      Опыт лечения кошек, собак, птиц и сельскохозяйственных животных
      </li>
      <li  className={classes.stats__feature}>
      Онлайн-консультации от профессионала с индивидуальным подходом
      </li>
     </ul>
  </section>

         <div className={classes.mainBanner__buttons}>
          <button className={classes.mainBanner__btn}>
            Записаться на приём
          </button>
        </div> 

      </div>

       <div className={classes.mainBanner__image}>
        <img src="/images/main_banner.png" alt="Пёс в красной кофте" />
      </div>
    </section>
  );
};

export default Advertisement;