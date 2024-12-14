import React, { useState, useEffect } from "react";
import "./App.scss";
import Home from "./components/Home";
import Works from "./components/Works";
import Contacts from "./components/Contacts";
import gsap from "gsap";

function App() {
  const [activeMenu, setActiveMenu] = useState("home");

  const renderContent = () => {
    switch (activeMenu) {
      case "home":
        return <Home />;
      case "works":
        return <Works />;
      case "contacts":
        return <Contacts />;
      default:
        return <Home />;
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".content",
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.inOut" }
    );
  }, [activeMenu]);
  
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
    <div className="bg"></div>
    <div className="MainContainer">
      <div className="Nav">
        <div className="myname">Ishvara Pranidhana Lakshmana</div>
        <a href="#" onClick={(e) => { e.preventDefault(); handleMenuClick("home"); }}>
          <span>Home</span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleMenuClick("works"); }}>
          <span>Works</span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleMenuClick("contacts"); }}>
          <span>Contacts</span>
        </a>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  </>
  );
}

export default App;


