import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Alerts from "./pages/Alerts";
import About from "./pages/About";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
