import React from "react";

// router
import { useParams, Navigate } from "react-router-dom";
import Routes from "../Routes";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import HousingGallery from "../components/HousingGallery";

export default function HousingPage({ housings }) {
  const { id } = useParams();

  const housing = housings.find((item) => item.id === id);

  if (!housing) {
    return <Navigate to={Routes.Home} />;
  }

  return (
    <>
      <Header />
      <div className="housing">
        <HousingGallery pictures={housing.pictures} />
        <h2 className="housing-name">{housing.title}</h2>
        <h3 className="housing-location">{housing.location}</h3>
        <div className="housing-tags">
          {housing.tags.map((item, key) => {
            return (
              <div key={key} className="housing-tags-tag">
                {item}
              </div>
            );
          })}
        </div>
        <div className="housing-wrapper">
          <div className="housing-wrapper-feedback">
            <i className="fa-solid fa-star housing-wrapper-feedback-star"></i>
            <i className="fa-solid fa-star housing-wrapper-feedback-star"></i>
            <i className="fa-solid fa-star housing-wrapper-feedback-star"></i>
            <i className="fa-solid fa-star housing-wrapper-feedback-star"></i>
            <i className="fa-solid fa-star housing-wrapper-feedback-star"></i>
          </div>
        </div>
        <div className="housing-item">
          <div className="housing-item-header">
            <div className="housing-item-header-title">Description</div>
            <i className="fa-solid fa-angle-down housing-item-header-icon"></i>
          </div>
          <div className="housing-item-body">
            <p className="housing-item-body-description">{housing.description}</p>
          </div>
        </div>
        <div className="housing-item">
          <div className="housing-item-header">
            <div className="housing-item-header-title">Équipements</div>
            <i className="fa-solid fa-angle-down housing-item-header-icon"></i>
          </div>
          <div className="housing-item-body">
            <ul className="housing-item-body-menu">
              {housing.equipments.map((item, key) => {
                return (
                  <li key={key} className="housing-item-body-menu-item">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
