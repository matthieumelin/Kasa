import React from "react";
// router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// housings
import housings from "./housings.json";

// pages
import HomePage from "./pages/HomePage";
import HousingPage from "./pages/HousingPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

// routes
import MainRoutes from "./Routes";

// css
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage housings={housings} />} />
        <Route
          path={`${MainRoutes.Housing}/:id`}
          element={<HousingPage housings={housings} />}
        />
        <Route path={MainRoutes.About} element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
