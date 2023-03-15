import './Steps.scss';
import React from 'react';
import { STEPS } from './constants';

const Steps: React.FC = () => {
  const stepItems = STEPS.map((item, index) => (
    <li key={index} className="section__item steps__item">
      <div className="steps__item-number-wrapper">
        <p className="steps__item-number">{index + 1}</p>
      </div>
      <p className="steps__item-title">{item.title}</p>
      <p className="steps__item-description">{item.description}</p>
    </li>
  ));

  const stepListElement = <ul className="section__list steps__list">{stepItems}</ul>;

  return (
    <div className="steps">
      <h3 className="section__subtitle steps__title">
        Взаимодействие с нами состоит из следующих шагов
      </h3>
      {stepListElement}
    </div>
  );
};

export default Steps;
