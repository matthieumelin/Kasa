import React from "react";

// react router
import { Link } from "react-router-dom";
import Routes from "../Routes";

// components
import Header from "../components/Header";

export default function NotFoundPage() {
  return (
    <>
      <Header/>
      <main className="main">
        <div className="not-found">
          <h1 className="not-found-title">404</h1>
          <p className="not-found-description">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to={Routes.Home} className="not-found-link">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </main>
    </>
  );
}
