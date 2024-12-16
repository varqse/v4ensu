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
    { roman: "XIX", text: "— Qui étes-vous . . . qui ètes-vous . . . qui étes-vous . . . repondit l'écho." },
    { roman: "XIX", text: "— Soyez mes amis, je suis seul, dit-il." },
    { roman: "XIX", text: "Je suis seul...je suis seul...Je suis seul...répondit l'écho." },
    { roman: "VIII", text: "Si quelqu'un aime une fleur qui n'existe qu'à un exemplaire dans les millions d'étoiles, ça suffit pour qu'il soit heureux quand il les regarde." },
    { roman: "XXI", text: "-C'est une chose trop oubliée, dit le renart. Ça signifie ''Créer des liens...''" },
    { roman: "IV", text: "Quand un astronome découvre l'une d'elles, il lui donne pour nom un zéro. Il l'appelle par exemple: ''l'astéroïde 2351.''" },
    { roman: "XXVI", text: "-Les gens ont des étoiles qui ne sont pas les mêmes." },
    { roman: "XXVI", text: "Pour les uns, qui voyagent, les étoiles sont des guides." },
    { roman: "XXVI", text: "Pour d'autres elles ne sont rien que de petites lumières." },
    { roman: "XXVI", text: "Pour d'autres qui sont savants, elles sont des problèmes." },
    { roman: "XXVI", text: "Pour mon businessman elles étaient de l'or. Mais toutes ces étoiles-là, elles se taisent. Toi, tu auras des étoiles comme personne n'en a..." },
    { roman: "XVII", text: "-Je me demande, dit-il, si les étoiles sont éclairées afin que chacun puisse un jour retrouver la sienne. Regarde ma planète. Elle est juste au-dessus de nous... Mais comme elle est loin!." },
    { roman: "III", text: "-Ça ne fait rien, c'est tellement petit, chez moi! Et, avec un peu de mélancolie, peut-être, il ajouta: -Droit devant soi on ne peut pas aller bien loin..." },
    { roman: "XX", text: "Et il se sentit très malheureux. Sa fleur lui avait raconté qu'elle était seule de son espèce dans l'univers. Et voici qu'il en était cinq mille, toutes semblables, dans un seul jardin!" },
    { roman: "XXI", text: "-Va revoir les roses. Tu comprendras que la tienne est unique au monde. Tu reviendras me dire adieu, et je ferai le cadeau d'un secret." },
    { roman: "XXI", text: "-Adieu, dit-il..." },
    { roman: "XXI", text: "-Adieu, dit le renard. Voici mon secret. Il est très simple: on ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux." },
    { roman: "XXI", text: "-L'essentiel est invisible pour les yeux, répéta le petit prince, afin de se souvenir." },
    { roman: "XXI", text: "-C'est le temps que tu as perdu pour ta rose qui fait ta rose si importante." },
    { roman: "XXVI", text: "-Tu regarderas, la nuit, les étoiles. C'est trop petit chez moi pour que je te montre où se trouve la mienne. C'est mieux comme ça. Mon étoile, ça sera pour toi une des étoiles." },
    { roman: "XXVI", text: "Alors, toutes les étoiles, tu aimeras les regarder... Elles seront toutes tes amies. Et puis je vais te faire un cadeau." }
  ];
  
  useEffect(() => {
    if (showTransition) {
      const timer = setTimeout(() => {
        setShowTransition(false);
      }, 700);
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




