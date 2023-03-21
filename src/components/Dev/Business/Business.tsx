import React from 'react';
import Line from '../../Line/Line';
import { BUSINESS_ITEMS } from './constants';
import { ReactComponent as BusinessLine } from '../../../images/business-line.svg';

import './Business.scss';

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
      <Line lineSVG={BusinessLine} classLineSVG="business__line" />
      <h3 className="section__subtitle business__title">
        Основные преимущества для вашего бизнеса
      </h3>
      {businessListElement}
    </div>
  );
};

export default Business;
