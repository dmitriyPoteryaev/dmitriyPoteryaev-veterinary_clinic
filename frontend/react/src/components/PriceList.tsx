
import React from "react";

type Item = { name: string; price: string };

const items: Item[] = [
  { name: "Первичная консультация", price: "1 500 ₽" },
  { name: "Повторная (в течение месяца)", price: "750 ₽" },
];


const PriceList: React.FC = () => {
  return (
    <section className="priceCard">
      <ul className="priceList">
        {items.map((it) => (
          <li key={it.name} className="priceRow">
            <span className="priceName">{it.name}</span>
            <span className="priceDots" aria-hidden />
            <span className="priceValue">{it.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PriceList;