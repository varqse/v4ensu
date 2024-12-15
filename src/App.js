import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Works from "./components/Works";
import Contacts from "./components/Contacts";
import gsap from "gsap";

function App() {
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(
      ".content",
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.inOut" }
    );
  }, [location]);

  return (
    <>
      <div className="bg"></div>
      <div className="MainContainer">
        <div className="Nav">
          <div className="myname">Ishvara Pranidhana Lakshmana</div>
          <Link to="/home" className="navLink">
            <span className={location.pathname === "/home" ? "active" : ""}>Home</span>
          </Link>
          <Link to="/works" className="navLink">
            <span className={location.pathname === "/works" ? "active" : ""}>Works</span>
          </Link>
          <Link to="/contacts" className="navLink">
            <span className={location.pathname === "/contacts" ? "active" : ""}>Contacts</span>
          </Link>
        </div>
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;



