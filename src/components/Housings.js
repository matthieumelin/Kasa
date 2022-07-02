import React from "react";

// router
import { Link } from "react-router-dom";

import Routes from "../Routes";

export default function Housings({ housings }) {
  return (
    <section className="housings">
      {housings.map((housing) => {
        return (
          <Link to={`${Routes.Housing}/${housing.id}`} key={housing.id} style={{
            background: `url('${housing.cover}')`
          }} className="housing-card">
            <div className="housing-card-title">{housing.title}</div>
          </Link>
        );
      })}
    </section>
  );
}
