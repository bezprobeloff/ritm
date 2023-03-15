import '../../../styles/section.scss';
import './Stages.scss';
import React from 'react';
import { STAGES } from './constants';

const Stages: React.FC = () => {
  const stageItems = STAGES.map((item, indexItem) => {
    const descriptionElements = item.descriptions.map((text, indexText) => (
      <p key={'text' + indexText} className="stages__item-description">
        {text}
      </p>
    ));

    return (
      <li key={'item' + indexItem} className="stages__item">
        <div className="stages__item-text-wrap">
          <p className="stages__item-title">{item.title}</p>
          {descriptionElements}
        </div>
        <div className="stages__item-image-wrapper">
          <img
            className="stages__item-image stages__item-image_type_first"
            src={item.imgSrc}
            alt={item.imgAlt}
          />
        </div>
      </li>
    );
  });

  const stageListElement = <ul className="stages__list">{stageItems}</ul>;

  return (
    <div className="stages">
      <h3 className="section__subtitle stages__title">
        Интеграция IT-решений в&nbsp;ваш&nbsp;бизнес
      </h3>
      {stageListElement}
    </div>
  );
};

export default Stages;
