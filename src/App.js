import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Works from "./components/Works";
import Contacts from "./components/Contacts";
import Info from "./components/Info";
import gsap from "gsap";

function App() {
  const location = useLocation();
  const [quote, setQuote] = useState("");
  const [showTransition, setShowTransition] = useState(false);
  const quotes = [
    { roman: "XIX", text: "— Qui étes-vous . . . qui ètes-vous . . . qui étes-vous . . . repondit l'echo." },
    { roman: "XIX", text: "— Soyez mes amis, je suis seul, dit-il." },
    { roman: "XIX", text: "Je suis seul...je suis seul...Je suis seul...répondit l'écho." },
    { roman: "VIII", text: "Si quelqu'un aime une fleur qui n'existe qu'à un exemplaire dans les millions d'étoiles, ça suffit pour qu'il soit heureux quand il les regarde." },
    { roman: "XXI", text: "-C'est une chose trop oubliée, dit le renart. Ça signifie ''Créer des liens...''" },
    { roman: "IV", text: "Quand un astronome découvre l'une d'elles, il lui donne pour nom un zéro. Il l'appele par exemple: ''l'astéroїde 2351.''" },
    { roman: "XIX", text: "Qui étes-vous . . . qui ètes-vous . . . qui étes-vous . . . repondit l'echo." }
  ];

  useEffect(() => {
    if (showTransition) {
      const timer = setTimeout(() => {
        setShowTransition(false);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      gsap.fromTo(
        ".content",
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power2.inOut" }
      );
    }

  }, [showTransition]);

  const handleNavClick = (quote) => {
    setQuote(quote);
    setShowTransition(true);
  };

  return (
    <>
      <div className="bg"></div>
      <div className="MainContainer">
        {showTransition && (
        <div className="quote">
        <div className="quote-number error">[ {quote.roman} ]</div>
        <div className="quote-text info">{quote.text}</div>
      </div>
        )}
        <div className="Nav">
          <div className="myname">Ishvara Pranidhana Lakshmana</div>
          <Link
            to="/"
            className="navLink"
            onClick={() => handleNavClick(quotes[Math.floor(Math.random() * quotes.length)])}
          >
            <span className={location.pathname === "/" ? "active" : ""}>Home</span>
          </Link>
          <Link
            to="/works"
            className="navLink"
            onClick={() => handleNavClick(quotes[Math.floor(Math.random() * quotes.length)])}
          >
            <span className={location.pathname === "/works" ? "active" : ""}>Works</span>
          </Link>
          <Link
            to="/contacts"
            className="navLink"
            onClick={() => handleNavClick(quotes[Math.floor(Math.random() * quotes.length)])}
          >
            <span className={location.pathname === "/contacts" ? "active" : ""}>Contacts</span>
          </Link>
          <Link
            to="/info"
            className="navLink"
            onClick={() => handleNavClick(quotes[Math.floor(Math.random() * quotes.length)])}
          >
            <span className={location.pathname === "/info" ? "active" : ""}>Info</span>
          </Link>
        </div>
        {!showTransition && (
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/info" element={<Info />} />
              <Route path="/" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        )}
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




