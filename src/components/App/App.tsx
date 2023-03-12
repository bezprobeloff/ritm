import React, { useEffect, useState } from "react";
import "./App.css";
import { LineContext } from "../../contexts/LineContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <LineContext.Provider value={scrollPosition}>
        <Header />
        <Main />
        <Footer />
      </LineContext.Provider>
    </div>
  );
}

export default App;
