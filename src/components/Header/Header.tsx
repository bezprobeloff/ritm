import logo from '../../images/logo.svg';
import './Header.scss';
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import HeaderLine from '../Lines/HeaderLine/HeaderLine';

const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const classButtonMenu = `header__button-menu${isMenuOpened ? ' header__button-menu_opened' : ''}`;
  const classNav = `header__nav${isMenuOpened ? ' header__nav_opened' : ''}`;
  const classLink = `link header__nav-link`;

  const handleOnButtonMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const handleOnNavLink = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <header id="header" className="header">
      <HeaderLine />
      <a href="/" className="header__logo-link">
        <img src={logo} className="header__logo" alt="Логотип" />
      </a>
      <button className={classButtonMenu} onClick={handleOnButtonMenu}>
        <span className="header__button-menu-icon" />
      </button>
      <Navigation
        classNameNav={classNav}
        classNameLink={classLink}
        onClick={handleOnNavLink}
      ></Navigation>
      <a href="#feedback" className="button header__button-link">
        Обсудить проект
      </a>
      <h1 className="header__title">
        <span className="header__title-span">
          Разрабатываем и&nbsp;внедряем веб&#8209;приложения
        </span>
        , которые помогают оптимизировать бизнес-процессы и решить сложные управленческие задачи
      </h1>
    </header>
  );
};

export default Header;
