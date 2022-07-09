import React from "react";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import HousingCard from "../components/HousingCard";

export default function HomePage({ housings }) {
  return (
    <>
      <div className="page-responsive">
        <Header />
        <main className="main">
          <section className="housings">
            {housings.map((housing) => {
              return (
                <HousingCard key={housing.id} housing={housing} />
              );
            })}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
