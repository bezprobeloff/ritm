import "../../styles/section.scss";
import "./Techs.scss";
import Web from "./Web/Web";
import Advantage from "./Advantage/Advantage";
import { ReactComponent as TechLine } from "../../images/tech-line.svg";
import React, { useContext, useEffect, useRef } from "react";
import { LineContext } from "../../contexts/LineContext";
import useLine from "../../utils/hooks/useLine";

const Techs: React.FC = () => {
  const scrollPositionContext = useContext(LineContext);
  const line = useLine();
  const techsElement = useRef(null);

  useEffect(() => {
    line.setElement(techsElement.current);
  }, []);

  useEffect(() => {
    line.setScrollPosition(scrollPositionContext);
  }, [scrollPositionContext]);

  return (
    <section id="techs" className="section techs">
      {line.isEnabled ? <TechLine className="techs__line" /> : ""}
      <h2 className="section__title" ref={techsElement}>
        Технологии
      </h2>
      <Web />
      <Advantage />
    </section>
  );
};

export default Techs;
