import React, { useEffect, useState } from "react";
import "./App.css";
import { LineContext } from "../../contexts/LineContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import useResponsive from "../../utils/hooks/useResponsive";
import Techs from "../Techs/Techs";
import Dev from "../Dev/Dev";
import Process from "../Process/Process";
import Feedback from "../Feedback/Feedback";
import FAQ from "../FAQ/FAQ";
import Contacts from "../Contacts/Contacts";

function App() {
  const responsive = useResponsive();
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
        <Main>
          <Techs isMobile={responsive.type.isMobile} />
          <Dev />
          <Process />
          <Feedback />
          <FAQ />
          <Contacts />
        </Main>
        <Footer />
      </LineContext.Provider>
    </div>
  );
}

export default App;
