import React from 'react';
import { WEB_ITEMS } from './constants';
import Line from '../../Line/Line';
import { ReactComponent as TechLine1 } from '../../../images/tech-line1.svg';
import '../../../styles/section.scss';
import './Web.scss';

const Web: React.FC = () => {
  const webItems = WEB_ITEMS.map((item, index) => (
    <li key={index} className="section__item">
      <p className="web__item-title">{item.title}</p>
      <p className="web__item-description">{item.description}</p>
    </li>
  ));

  const webListElement = <ul className="section__list">{webItems}</ul>;

  return (
    <div className="web">
      <h3 className="section__subtitle web__title">
        Веб-приложение – это программный продукт, работающий в онлайн-среде и состоящий из двух
        основных частей
      </h3>
      {webListElement}
      <Line lineSVG={TechLine1} classLineSVG="techs__line1" />
    </div>
  );
};

export default Web;
