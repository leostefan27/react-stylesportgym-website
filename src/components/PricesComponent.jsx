import React from "react";

const PricesComponent = () => {
  const subs = [
    { name: "FULL STYLE", price: "130", about: "Full time access" },
    { name: "PERSONAL 8", price: "400", about: "8 Personal trainer sessions" },
    { name: "PERSONAL 12", price: "500", about: "12 Personal trainer sessions" },
    { name: "PERSONAL 16", price: "600", about: "16 Personal trainer sessions" },
    { name: "1 YEAR GYM STYLE", price: "850", about: "1 year full time access" },
    { name: "3 MONTHS FULL STYLE", price: "330", about: "3 months full time access" },
    { name: "6 MONTHS FULL STYLE", price: "540", about: "6 months full time access" },
    { name: "GYM STYLE", price: "20", about: "1 entry" },
    { name: "WEEKEND STYLE", price: "70", about: "Only weekend access" },
    { name: "FRESH STYLE", price: "100", about: "Only morning access" },
    { name: "PERSONAL TRAINER - 1 SESSION", price: "50" },
  ];
  return (
    <section id="prices-section">
      <div className="container">
        <ul className="subscriptions">
          {subs.map((sub, idx) => {
            return (<li key={idx}>
                <div><span>{sub.name}</span><span>{`${sub.price} RON`}</span></div>
                <small>{sub.about}</small>
            </li>)
          })}
        </ul>
      </div>
    </section>
  );
};

export default PricesComponent;
