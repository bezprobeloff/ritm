import './Tools.scss';
import React from 'react';
import { TOOLS } from './constants';

const Tools: React.FC = () => {
  const toolItems = TOOLS.map((item, index) => (
    <div key={index} className="tools__item">
      <img
        className={`tools__item-image  ${item.imgClass}`}
        src={item.imgSrc}
        alt={item.imgAlt}
        title={item.imgAlt}
      />
    </div>
  ));

  const toolListElement = <ul className="tools__list">{toolItems}</ul>;

  return <div className="tools">{toolListElement}</div>;
};

export default Tools;
