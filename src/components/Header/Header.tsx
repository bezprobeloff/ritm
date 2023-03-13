import logo from '../../images/logo.svg';
import './Header.scss';
import { ReactComponent as HeaderLine } from '../../images/header-line.svg';
import React, { useEffect, useRef, useState } from 'react';
import useIntersection from 'react-use/lib/useIntersection';

const Header: React.FC = () => {
  const headerElementRef = useRef(null);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isLineEnabled, setIsLineEnabled] = useState(false);
  const intersection = useIntersection(headerElementRef, {
    root: null,
    rootMargin: '20px',
    threshold: 1
  });

  useEffect(() => {
    if (!isLineEnabled && intersection?.intersectionRatio === 1) {
      setIsLineEnabled(true);
    }
  }, [intersection, isLineEnabled]);

  const classButtonMenu = `header__button-menu${isMenuOpened ? ' header__button-menu_opened' : ''}`;
  const classNav = `header__nav${isMenuOpened ? ' header__nav_opened' : ''}`;

  const handleOnButtonMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const handleOnNavLink = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <header id="header" className="header">
      {isLineEnabled ? <HeaderLine className="header__line" /> : ''}
      <a href="/" className="header__logo-link" ref={headerElementRef}>
        <img src={logo} className="header__logo" alt="Логотип" />
      </a>
      <button className={classButtonMenu} onClick={handleOnButtonMenu}>
        <span className="header__button-menu-icon" />
      </button>
      <nav className={classNav}>
        <a href="#header" className="link header__nav-link" onClick={handleOnNavLink}>
          О компании
        </a>
        <a href="#techs" className="link header__nav-link" onClick={handleOnNavLink}>
          Технологии
        </a>
        <a href="#process" className="link header__nav-link" onClick={handleOnNavLink}>
          Процесс работы
        </a>
        <a href="#contacts" className="link header__nav-link" onClick={handleOnNavLink}>
          Контакты
        </a>
      </nav>
      <a href="#feedback" className="button header__button-link" onClick={handleOnNavLink}>
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

export default React.memo(Header);
