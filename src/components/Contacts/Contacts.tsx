import "./Contacts.scss";
import { ReactComponent as ContactLine } from "../../images/contact-line.svg";
import React, { useContext, useEffect, useRef } from "react";
import { LineContext } from "../../contexts/LineContext";
import useLine from "../../utils/hooks/useLine";

const Contacts: React.FC = () => {
  const scrollPositionContext = useContext(LineContext);
  const line = useLine();
  const contactElement = useRef(null);

  useEffect(() => {
    line.setElement(contactElement.current);
  }, []);

  useEffect(() => {
    line.setScrollPosition(scrollPositionContext);
  }, [scrollPositionContext]);
  return (
    <section id="contacts" className="section contacts">
      <div className="section__wrapper contacts__wrapper">
        {line.isEnabled ? <ContactLine className="contacts__line" /> : ""}
        <h2 className="section__title" ref={contactElement}>
          Контакты
        </h2>
        <h3 className="section__subtitle contacts__subtitle">
          Как с нами связаться
        </h3>
        <div className="contacts__list">
          <p className="contacts__item">Контактное лицо: Вадим Бакуров, CEO</p>
          <p className="contacts__item">
            <span className="contacts__item-icon contacts__item-icon_type_mobile"></span>
            +7 (962) 350-00-14
          </p>
          <p className="contacts__item">
            <span className="contacts__item-icon contacts__item-icon_type_email"></span>
            vb@ritm.studio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
