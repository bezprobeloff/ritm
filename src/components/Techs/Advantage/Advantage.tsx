import "../../../styles/section.scss";
import "./Advantage.scss";

import iconBox from "../../../images/icon-box.svg";
import iconBrowser from "../../../images/icon-browser.svg";
import iconDevices from "../../../images/icon-devices.svg";
import iconInternet from "../../../images/icon-internet.svg";
const Advantage = () => {
  return (
    <div className="advantage">
      <h3 className="section__subtitle advantage__title">
        Основные преимущества наших решений
      </h3>
      <ul className="section__list">
        <li className="section__item advantage__item">
          <img className="advantage__item-icon" src={iconBox} alt="Коробки" />
          <p className="advantage__item-title">Модульность</p>
          <p className="advantage__item-description">
            веб-приложение состоит из независимых частей, разрабатываемых в
            зависимости от текущих задач
          </p>
        </li>
        <li className="section__item advantage__item">
          <img
            className="advantage__item-icon"
            src={iconBrowser}
            alt="Браузер"
          />
          <p className="advantage__item-title">Масштабируемость</p>
          <p className="advantage__item-description">
            технология веб-приложений позволяет вашей инфраструктуре расти
            вместе с компанией
          </p>
        </li>
        <li className="section__item advantage__item">
          <img
            className="advantage__item-icon"
            src={iconDevices}
            alt="Устройства"
          />
          <p className="advantage__item-title">Универсальность</p>
          <p className="advantage__item-description">
            веб-приложение работает на любом современном устройстве и доступно
            из любой точки
          </p>
        </li>
        <li className="section__item advantage__item">
          <img
            className="advantage__item-icon"
            src={iconInternet}
            alt="Интернет"
          />
          <p className="advantage__item-title">Кроссплатформенность</p>
          <p className="advantage__item-description">
            веб-приложение позволяет интегрировать любое устройство с выходом в
            сеть в экосистему компании
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Advantage;
