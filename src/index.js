import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import SkillsPage from "./landing_page/skills/SkillsPage";
import ActivitiesPage from "./landing_page/activities/ActivitiesPage";
import AboutPage from "./landing_page/about/AboutPage";
import QualificationsPage from "./landing_page/qualifications/QualificationsPage";
// import PortFolioPage from "./landing_page/portfolio/PortFolioPage";
import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/activities" element={<ActivitiesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/qualifications" element={<QualificationsPage />} />
      {/* <Route path="/portfolio" element={<PortFolioPage />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);
