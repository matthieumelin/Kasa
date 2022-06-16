import React from "react";

// components
import Header from "../components/Header";
import Housings from "../components/Housings";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        <Housings />
      </main>
    </>
  );
}
