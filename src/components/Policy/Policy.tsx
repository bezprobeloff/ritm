import React from 'react';
import './Policy.scss';
import POLITICS from './constants';

const Policy: React.FC = () => {
  const politicElements = POLITICS.map((itemPolitic, indexPolitic) => {
    const numberPolitic = indexPolitic + 1;
    const politicKey = `politicItem${numberPolitic}`;
    const title = `${numberPolitic}. ${itemPolitic.title}`;

    const politicTextElements =
      itemPolitic.texts &&
      itemPolitic.texts.map((itemPoliticText, indexPoliticText) => {
        const numberPoliticText = indexPoliticText + 1;
        const politicTextKey = `politicText${numberPolitic}_${numberPoliticText}`;
        const text = itemPoliticText.number
          ? `${numberPolitic}. ${itemPoliticText.number}. ${itemPoliticText.text}`
          : `— ${itemPoliticText.text}`;

        return (
          <p className="policy__item-text" key={politicTextKey}>
            {text}
          </p>
        );
      });

    return (
      <div key={politicKey} className="policy__item">
        <p className="policy__item-title">{title}</p>
        <p className="policy__item-text">{itemPolitic.subtitle}</p>
        {politicTextElements}
      </div>
    );
  });
  return (
    <div className="policy">
      <h3 className="policy__title">Политика в отношении обработки персональных данных</h3>
      {politicElements}
    </div>
  );
};

export default Policy;
