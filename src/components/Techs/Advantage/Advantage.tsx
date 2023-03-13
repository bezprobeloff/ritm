import React from 'react';
import Carousel, { CarouselItem } from '../../Carousel/Carousel';
import '../../../styles/section.scss';
import './Advantage.scss';

import iconBox from '../../../images/icon-box.svg';
import iconBrowser from '../../../images/icon-browser.svg';
import iconDevices from '../../../images/icon-devices.svg';
import iconInternet from '../../../images/icon-internet.svg';
import { useMedia } from 'react-use';
import { MOBILE_WIDTH, PAD_WIDTH_WITHOUT } from '../../../utils/constants';

const dataItems = [
  {
    imgSrc: iconBox,
    imgAlt: 'Коробки',
    title: 'Модульность',
    description:
      'веб-приложение состоит из независимых частей, разрабатываемых в зависимости от текущих задач'
  },
  {
    imgSrc: iconBrowser,
    imgAlt: 'Браузер',
    title: 'Масштабируемость',
    description: 'технология веб-приложений позволяет вашей инфраструктуре расти вместе с компанией'
  },
  {
    imgSrc: iconDevices,
    imgAlt: 'Устройства',
    title: 'Универсальность',
    description: 'веб-приложение работает на любом современном устройстве и доступно из любой точки'
  },
  {
    imgSrc: iconInternet,
    imgAlt: 'Интернет',
    title: 'Кроссплатформенность',
    description:
      'веб-приложение позволяет интегрировать любое устройство с выходом в сеть в экосистему компании'
  }
];

const Advantage: React.FC = () => {
  const queryMediaMobile = `(min-width: ${MOBILE_WIDTH}px) and (max-width: ${PAD_WIDTH_WITHOUT}px`;
  const isMobile = useMedia(queryMediaMobile);
  const advantageItems = dataItems.map((item, index) => (
    <li key={index} className="section__item advantage__item">
      <img className="advantage__item-icon" src={item.imgSrc} alt={item.imgAlt} />
      <p className="advantage__item-title">{item.title}</p>
      <p className="advantage__item-description">{item.description}</p>
    </li>
  ));

  const advantageList = <ul className="section__list advantage__list">{advantageItems}</ul>;

  const carouselItems = dataItems.map((item, index) => (
    <CarouselItem key={index}>
      <div className="section__item advantage__item">
        <img className="advantage__item-icon" src={item.imgSrc} alt={item.imgAlt} />
        <p className="advantage__item-title">{item.title}</p>
        <p className="advantage__item-description">{item.description}</p>
      </div>
    </CarouselItem>
  ));

  const carouselList = <Carousel>{carouselItems}</Carousel>;

  return (
    <div className="advantage">
      <h3 className="section__subtitle advantage__title">Основные преимущества наших решений</h3>
      {isMobile ? carouselList : advantageList}
    </div>
  );
};

export default Advantage;
