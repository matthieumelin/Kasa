import React from "react";

// router
import { useParams, Navigate } from "react-router-dom";
import Routes from "../Routes";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import HousingGallery from "../components/HousingGallery";
import Collapse from "../components/Collapse";

export default function HousingPage({ housings }) {
  const { id } = useParams();
  const housing = housings.find((item) => item.id === id);

  if (!housing) {
    return <Navigate to={Routes.NotFound} />;
  }

  return (
    <>
      <div className="page-responsive">
        <Header />
        <main className="main">
          <div className="housing">
            <HousingGallery pictures={housing.pictures} />
            <div className="housing-wrapper">
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
              <div className="housing-inline">
                <div className="housing-inline-feedback">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <i
                        key={index}
                        className={`fa-solid fa-star ${
                          index <= housing.rating
                            ? "housing-inline-feedback-star-on"
                            : "housing-inline-feedback-star"
                        }`}
                      ></i>
                    );
                  })}
                </div>
                <div className="housing-inline-profile">
                  <div className="housing-inline-profile-name">
                    {housing.host.name.split(" ")[0]}
                    <br />
                    {housing.host.name.split(" ")[1]}
                  </div>
                  <img
                    src={housing.host.picture}
                    alt={housing.host.name}
                    className="housing-inline-profile-picture"
                  />
                </div>
              </div>
            </div>
            <div className="housing-items">
              <Collapse
                title="Description"
                type="Description"
                housing={housing}
              />
              <Collapse
                title="Équipements"
                type="Equipements"
                housing={housing}
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
