
import React from "react";
import classes from './price.module.css';

type Item = { name: string; price: string };

const items: Item[] = [
  { name: "Первичная консультация", price: "1 500 ₽" },
  { name: "Повторная (в течение месяца)", price: "750 ₽" },
];


const Price: React.FC = () => {
  return (
    <section className={classes.priceCard}>
      <ul className={classes.priceList}>
        {items.map((it) => (
          <li key={it.name} className={classes.priceRow}>
            <span className={classes.priceName}>{it.name}</span>
            <span className={classes.priceDots} aria-hidden />
            <span className={classes.priceValue}>{it.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Price;