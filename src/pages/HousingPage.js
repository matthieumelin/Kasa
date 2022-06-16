import React from "react";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HousingPage() {
  return (
    <>
      <Header />
      <div className="housing">
        <img
          src="https://via.placeholder.com/1280x720"
          alt="Image"
          className="housing-image"
        />
        <h2 className="housing-name">
          Paris center, on the romantic
          <br /> Canal Saint-Martin
        </h2>
        <h3 className="housing-localization">Paris, Île-de-France</h3>
        <div className="housing-tags">
          <div className="housing-tags-tag">Cozy</div>
          <div className="housing-tags-tag">Canal</div>
          <div className="housing-tags-tag">Paris 10</div>
        </div>
        <div className="housing-wrapper">
          <div className="housing-wrapper-feedback">
            <i class="fa-solid fa-star housing-wrapper-feedback-star"></i>
            <i class="fa-solid fa-star housing-wrapper-feedback-star"></i>
            <i class="fa-solid fa-star housing-wrapper-feedback-star"></i>
            <i class="fa-solid fa-star housing-wrapper-feedback-star"></i>
            <i class="fa-solid fa-star housing-wrapper-feedback-star"></i>
          </div>
          <div className="housing-item">
            <div className="housing-item-header">
              <div className="housing-item-header-title">Description</div>
              <i class="fa-solid fa-angle-down housing-item-header-icon"></i>
            </div>
            <div className="housing-item-body">
              <p className="housing-item-body-description">
                Vous serez à 50m du canal Saint-martin où vous pourrez
                pique-niquer l'été et à côté de nombreux bars et restaurants. Au
                cœur de Paris avec 5 lignes de métro et de nombreux bus.
                Logement parfait pour les voyageurs en solo et les voyageurs
                d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes
                à pied).
              </p>
            </div>
          </div>
          <div className="housing-item">
            <div className="housing-item-header">
              <div className="housing-item-header-title">Équipements</div>
              <i class="fa-solid fa-angle-down housing-item-header-icon"></i>
            </div>
            <div className="housing-item-body">
              <ul className="housing-item-body-menu">
                <li className="housing-item-body-menu-item">Climatisation</li>
                <li className="housing-item-body-menu-item">Wi-Fi</li>
                <li className="housing-item-body-menu-item">Cuisine</li>
                <li className="housing-item-body-menu-item">Espace de travail</li>
                <li className="housing-item-body-menu-item">Fer à repasser</li>
                <li className="housing-item-body-menu-item">Sèche-cheveux</li>
                <li className="housing-item-body-menu-item">Cintres</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
