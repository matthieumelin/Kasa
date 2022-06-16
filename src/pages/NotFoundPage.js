import React from 'react'

// react router
import { Link } from "react-router-dom";

// components
import Header from '../components/Header'

// routes
import Routes from '../Routes';

export default function NotFoundPage() {
  return (
    <>
    <Header />
    <div className="container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-description">Oups! La page que vous demandez n'existe pas.</p>
        <Link to={Routes.Home} className="not-found-link">Retourner sur la page d'accueil</Link>
    </div>
    </>
  )
}
