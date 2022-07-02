import { React, useState } from "react";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  // events
  const [cards, setCards] = useState([
    {
      title: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
      collapse: false,
    },
    {
      title: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      collapse: false,
    },
    {
      title: "Service",
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      collapse: false,
    },
    {
      title: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      collapse: false,
    },
  ]);

  const toggleCard = (index, card) => {
    let tempState = [...cards];
    let tempElement = { ...cards[index] };
    tempElement.collapse = !card.collapse;
    tempState[index] = tempElement;
    setCards(tempState);
  };

  return (
    <>
      <div className="page-responsive">
        <Header />
        <main className="main">
          <section className="about">
            {cards.map((item, key) => {
              return (
                <div key={key} className="about-item">
                  <div
                    className="about-item-header"
                    onClick={() => toggleCard(key, item)}
                  >
                    <div className="about-item-header-title">{item.title}</div>
                    <i
                      className={`fa-solid ${
                        !item.collapse ? "fa-angle-down" : "fa-angle-up"
                      } about-item-header-icon`}
                    ></i>
                  </div>
                  {item.collapse ? (
                    <div className="about-item-body">
                      <p className="about-item-body-description">
                        {item.description}
                      </p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
