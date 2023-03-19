import './Business.scss';
import React from 'react';
import { BUSINESS_ITEMS } from './constants';
import BusinessLine from '../../Lines/BusinessLine/BusinessLine';

const Business: React.FC = () => {
  const businessItems = BUSINESS_ITEMS.map((item, index) => (
    <li key={index} className="business__item">
      <div className="business__item-icon-wrapper" />
      <p className="business__item-description">{item.description}</p>
    </li>
  ));

  const businessListElement = <ul className="business__list">{businessItems}</ul>;

  return (
    <div className="business">
      <BusinessLine />
      <h3 className="section__subtitle business__title">
        Основные преимущества для вашего бизнеса
      </h3>
      {businessListElement}
    </div>
  );
};

export default Business;
