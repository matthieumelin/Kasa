import React from "react";

// components
import Header from "../components/Header";
import Housings from "../components/Housings";
import Footer from "../components/Footer";

export default function HomePage({housings}) {

  return (
    <>
      <Header />
      <main className="main">
        <Housings housings={housings} />
      </main>
      <Footer />
    </>
  );
}
