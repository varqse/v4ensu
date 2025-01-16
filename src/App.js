import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Works from "./components/Works";
import Contacts from "./components/Contacts";
import Info from "./components/Info";
import gsap from "gsap";

function App() {
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(
      ".content",
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.inOut" }
    );
  }, [location.pathname]);

  return (
    <>
      <div className="bg"></div>
      <div className="MainContainer">
        <div className="variable">
          <a
            href="/"
            onClick={(e) => e.preventDefault()}
            className="navVariable"
            role="button"
            aria-label="Navigate to variable"
          >
            Var11able
          </a>
        </div>
        <div className="Nav">
          <Link
            to="/"
            className="navLink"
          >
            <span className={location.pathname === "/" ? "active" : ""}>Home</span>
          </Link>
          <Link
            to="/works"
            className="navLink"
          >
            <span className={location.pathname === "/works" ? "active" : ""}>Works</span>
          </Link>
          <Link
            to="/contacts"
            className="navLink"
          >
            <span className={location.pathname === "/contacts" ? "active" : ""}>Contacts</span>
          </Link>
          <Link
            to="/info"
            className="navLink"
          >
            <span className={location.pathname === "/info" ? "active" : ""}>Info</span>
          </Link>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/info" element={<Info />} />
            <Route path="/" element={<Navigate to="/" replace />} />
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





