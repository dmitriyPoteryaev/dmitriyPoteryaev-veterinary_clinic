// basic/frontend/react/src/components/Home.tsx

export type Stats = { years: number; calls: number; reviews: number };

export type HomeProps = {
  clinic?: string;
  cta?: string;
  stats?: Stats;
};

export default function Home({
  clinic = 'Dr.Hug',
  cta = '/appointment',
  stats = { years: 4, calls: 30781, reviews: 9234 },
}: HomeProps) {
  return (
    <>
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__inner">
          <div className="home-hero__text">
            <h1 className="home-hero__title">Ветеринарная клиника {clinic}</h1>
            <p className="home-hero__tag">Работаем круглосуточно, без лишних наценок!</p>

            <ul className="home-hero__stats" aria-label="Статистика клиники">
              <li><span className="num">{stats.years}</span><span>года с вами</span></li>
              <li><span className="num">{stats.calls.toLocaleString('ru-RU')}</span><span>выездов на дом</span></li>
              <li><span className="num">{stats.reviews.toLocaleString('ru-RU')}</span><span>отзывов клиентов</span></li>
            </ul>

            <div className="home-hero__actions">
              <a className="btn btn--primary" href={cta}>Записаться на приём</a>
              <a className="btn btn--ghost" href={`${cta}?type=home`}>Вызвать врача на дом</a>
            </div>
          </div>

          <div className="home-hero__art">
            {/* Положи /web/img/dog-hero.png или поменяй путь */}
            <img
              src="/img/dog-hero.png"
              alt="Пёс-доктор"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.style.display = 'none';
                const holder = document.createElement('div');
                holder.className = 'home-hero__ph';
                (img.parentElement as HTMLElement).appendChild(holder);
              }}
            />
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section className="home-services">
        <div className="home-services__grid">
          {([
            ['Терапия', '/img/s1.png'],
            ['Вакцинация', '/img/s2.png'],
            ['Хирургия', '/img/s3.png'],
            ['Кастрация и стерилизация', '/img/s4.png'],
            ['Стационар', '/img/s5.png'],
            ['Ещё услуги', '/img/s6.png'],
          ] as [string, string][]).map(([title, src], i) => (
            <a className="svc" href="/services" key={i}>
              <div className="svc__img">
                <img
                  src={src}
                  alt=""
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div className="svc__title">{title}</div>
              <div className="svc__arrow">›</div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
