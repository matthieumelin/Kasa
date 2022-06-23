import React from "react";

export default function Housings({ housings }) {
  return (
    <section className="housings">
      {housings.map((housing) => {
        return (
          <div key={housing.id} style={{
            background: `linear-gradient(
                to bottom,
                rgba(255,96,96,0.5), rgba(189,72,72,0.5)), url(${housing.cover})`
          }} className="housing-card">
            <div className="housing-card-title">{housing.title}</div>
          </div>
        );
      })}
    </section>
  );
}
