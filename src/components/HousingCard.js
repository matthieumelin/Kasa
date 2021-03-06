import React from "react";

// router
import { Link } from "react-router-dom";

import Routes from "../Routes";

export default function HousingCard({ housing }) {
  return (
    <Link
      to={`${Routes.Housing}/${housing.id}`}
      key={housing.id}
      style={{
        background: `url('${housing.cover}')`,
      }}
      className="housing-card"
    >
      <div className="housing-card-title">{housing.title}</div>
    </Link>
  );
}
