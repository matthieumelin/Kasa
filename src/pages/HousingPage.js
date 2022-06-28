import React, { useState } from "react";

// router
import { useParams, Navigate } from "react-router-dom";
import Routes from "../Routes";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import HousingGallery from "../components/HousingGallery";

export default function HousingPage({ housings }) {
  const { id } = useParams();
  const [collapses, setCollapses] = useState({
    description: false,
    equipments: false,
  });
  const housing = housings.filter((item) => item.id === id)[0];

  if (!housing) {
    return <Navigate to={Routes.NotFound} />;
  }

  return (
    <>
      <Header />
      <main className="main">
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
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <i
                    key={index}
                    className={`fa-solid fa-star ${
                      index <= housing.rating
                        ? "housing-wrapper-feedback-star-on"
                        : "housing-wrapper-feedback-star"
                    }`}
                  ></i>
                );
              })}
            </div>
            <div className="housing-wrapper-profile">
              <div className="housing-wrapper-profile-name">
                {housing.host.name.split(" ")[0]}
                <br />
                {housing.host.name.split(" ")[1]}
              </div>
              <img
                src={housing.host.picture}
                alt={housing.host.name}
                className="housing-wrapper-profile-picture"
              />
            </div>
          </div>
          <div className="housing-items">
            <div className="housing-items-item">
              <div
                className="housing-items-item-header"
                onClick={() =>
                  setCollapses({
                    ...collapses,
                    description: !collapses.description,
                  })
                }
              >
                <div className="housing-items-item-header-title">
                  Description
                </div>
                <i
                  className={`fa-solid ${
                    !collapses.description ? "fa-angle-down" : "fa-angle-up"
                  } housing-items-item-header-icon`}
                ></i>
              </div>
              {collapses.description ? (
                <div className="housing-items-item-body">
                  <p className="housing-items-item-body-description">
                    {housing.description}
                  </p>
                </div>
              ) : null}
            </div>
            <div className="housing-items-item">
              <div
                className="housing-items-item-header"
                onClick={() =>
                  setCollapses({
                    ...collapses,
                    equipments: !collapses.equipments,
                  })
                }
              >
                <div className="housing-items-item-header-title">
                  Équipements
                </div>
                <i
                  className={`fa-solid ${
                    !collapses.equipments ? "fa-angle-down" : "fa-angle-up"
                  } housing-items-item-header-icon`}
                ></i>
              </div>
              {collapses.equipments ? (
                <div className="housing-items-item-body">
                  <ul className="housing-items-item-body-menu">
                    {housing.equipments.map((item, key) => {
                      return (
                        <li
                          key={key}
                          className="housing-items-item-body-menu-item"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
