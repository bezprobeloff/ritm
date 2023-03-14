import '../../styles/section.scss';
import './Techs.scss';
import Web from './Web/Web';
import Advantage from './Advantage/Advantage';
import { ReactComponent as TechLine } from '../../images/tech-line.svg';
import React, { useEffect, useRef, useState } from 'react';
import useIntersection from 'react-use/lib/useIntersection';

const Techs: React.FC = () => {
  const techsElementRef = useRef(null);
  const [isLineEnabled, setIsLineEnabled] = useState(false);
  const techsLineElement = isLineEnabled && <TechLine className="techs__line" />;
  const ROOT_MARGIN = '20px';
  const THRESHOLD = 1;
  const intersection = useIntersection(techsElementRef, {
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
    <section id="techs" className="section techs">
      {techsLineElement}
      <h2 className="section__title" ref={techsElementRef}>
        Технологии
      </h2>
      <Web />
      <Advantage />
    </section>
  );
};

export default Techs;
