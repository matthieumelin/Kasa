import React from "react";
// router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoutes from "./Routes";

// housings
import housings from "./housings.json";

// pages
import HomePage from "./pages/HomePage";
import HousingPage from "./pages/HousingPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

// css
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Routes>
          <Route index element={<HomePage housings={housings} />} />
          <Route
            path={`${MainRoutes.Housing}/:id`}
            element={<HousingPage housings={housings} />}
          />
          <Route path={MainRoutes.About} element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
