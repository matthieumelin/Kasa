import React from "react";
// router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Route index element={<HomePage />} />
        <Route path={MainRoutes.Housing} element={<HousingPage />} />
        <Route path={MainRoutes.About} element={<AboutPage />} /> 
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
