import logo from "../../images/logo.svg";
import "./Header.scss";
import { ReactComponent as HeaderLine } from "../../images/header-line.svg";
import React, { useContext, useEffect, useRef, useState } from "react";
import useLine from "../../utils/hooks/useLine";
import { LineContext } from "../../contexts/LineContext";

const Header: React.FC = () => {
  const scrollPositionContext = useContext(LineContext);
  const headerElement = useRef(null);
  const line = useLine();
  const [windowSize, setWindowsSize] = useState(window.screen.width);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleWindowSize = () => {
    setWindowsSize(window.screen.width);
  };

  useEffect(() => {
    line.setElement(headerElement.current);
  }, []);

  useEffect(() => {
    line.setScrollPosition(scrollPositionContext);
  }, [scrollPositionContext]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  useEffect(() => {
    if (windowSize < 1440) {
      setIsMenuOpened(false);
    }
  }, [windowSize]);

  const classButtonMenu: string = `header__button-menu${
    isMenuOpened ? " header__button-menu_opened" : ""
  }`;

  const classNav: string = `header__nav${
    isMenuOpened ? " header__nav_opened" : ""
  }`;

  const handleOnButtonMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const handleOnNavLink = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <header id="header" className="header">
      {line.isEnabled ? <HeaderLine className="header__line" /> : ""}
      <a href="/" className="header__logo-link">
        <img src={logo} className="header__logo" alt="Логотип" />
      </a>
      <button className={classButtonMenu} onClick={handleOnButtonMenu}>
        <span className="header__button-menu-icon" />
      </button>
      <nav className={classNav}>
        <a
          href="#header"
          className="link header__nav-link"
          onClick={handleOnNavLink}
        >
          О компании
        </a>
        <a
          href="#techs"
          className="link header__nav-link"
          onClick={handleOnNavLink}
        >
          Технологии
        </a>
        <a
          href="#process"
          className="link header__nav-link"
          onClick={handleOnNavLink}
        >
          Процесс работы
        </a>
        <a
          href="#contacts"
          className="link header__nav-link"
          onClick={handleOnNavLink}
        >
          Контакты
        </a>
      </nav>
      <a
        href="#feedback"
        className="button header__button-link"
        onClick={handleOnNavLink}
      >
        Обсудить проект
      </a>
      <h1 className="header__title" ref={headerElement}>
        <span className="header__title-span">
          Разрабатываем и&nbsp;внедряем веб&#8209;приложения
        </span>
        , которые помогают оптимизировать бизнес-процессы и решить сложные
        управленческие задачи
      </h1>
    </header>
  );
};

export default React.memo(Header);
