import './Contacts.scss';
import { ReactComponent as ContactLine } from '../../images/contact-line.svg';
import React, { useEffect, useRef, useState } from 'react';
import useIntersection from 'react-use/lib/useIntersection';

const Contacts: React.FC = () => {
  const contactElementRef = useRef(null);
  const [isLineEnabled, setIsLineEnabled] = useState(false);
  const contactLineElement = isLineEnabled && <ContactLine className="contacts__line" />;
  const ROOT_MARGIN = '20px';
  const THRESHOLD = 1;
  const intersection = useIntersection(contactElementRef, {
    root: null,
    rootMargin: ROOT_MARGIN,
    threshold: THRESHOLD
  });

  useEffect(() => {
    if (!isLineEnabled && intersection?.intersectionRatio === 1) {
      setIsLineEnabled(true);
    }
  }, [intersection, isLineEnabled]);

  return (
    <section id="contacts" className="section contacts">
      <div className="section__wrapper contacts__wrapper">
        {contactLineElement}
        <h2 className="section__title" ref={contactElementRef}>
          Контакты
        </h2>
        <h3 className="section__subtitle contacts__subtitle">Как с нами связаться</h3>
        <div className="contacts__list">
          <p className="contacts__item">Контактное лицо: Вадим&nbsp;Бакуров, CEO</p>
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
