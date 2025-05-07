import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Course from "./components/Courses";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admission from "./components/Admission";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div data-aos="fade-up">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/course" element={<Course />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
