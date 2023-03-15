import './Business.scss';
import { ReactComponent as BusinessLine } from '../../../images/business-line.svg';
import React, { useEffect, useRef, useState } from 'react';
import useIntersection from 'react-use/lib/useIntersection';
import { BUSINESS_ITEMS } from './constants';

const Business: React.FC = () => {
  const businessElementRef = useRef(null);
  const [isLineEnabled, setIsLineEnabled] = useState(false);
  const businessLineElement = isLineEnabled && <BusinessLine className="business__line" />;
  const ROOT_MARGIN = '20px';
  const THRESHOLD = 1;
  const intersection = useIntersection(businessElementRef, {
    root: null,
    rootMargin: ROOT_MARGIN,
    threshold: THRESHOLD
  });

  const businessItems = BUSINESS_ITEMS.map((item, index) => (
    <li key={index} className="business__item">
      <div className="business__item-icon-wrapper" />
      <p className="business__item-description">{item.description}</p>
    </li>
  ));

  const businessListElement = <ul className="business__list">{businessItems}</ul>;

  useEffect(() => {
    if (!isLineEnabled && intersection?.intersectionRatio === 1) {
      setIsLineEnabled(true);
    }
  }, [intersection, isLineEnabled]);

  return (
    <div className="business">
      {businessLineElement}
      <h3 ref={businessElementRef} className="section__subtitle business__title">
        Основные преимущества для вашего бизнеса
      </h3>
      {businessListElement}
    </div>
  );
};

export default Business;
