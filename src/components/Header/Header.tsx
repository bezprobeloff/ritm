import logo from "../../images/logo.svg";
import "./Header.scss";
import { ReactComponent as HeaderLine } from "../../images/header-line.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [windowSize, setWindowsSize] = useState(window.screen.width);
  const [menuOpened, setMenuOpened] = useState(false);
  const handleWindowSize = () => {
    setWindowsSize(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  useEffect(() => {
    if (windowSize < 1440) {
      setMenuOpened(false);
    }
  }, [windowSize]);

  const classButtonMenu: string = `header__button-menu${
    menuOpened ? " header__button-menu_opened" : ""
  }`;

  const classNav: string = `header__nav${
    menuOpened ? " header__nav_opened" : ""
  }`;

  const handleOnButtonMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const handleOnNavLink = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header id="header" className="header">
      <HeaderLine className="header__line" />
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
      <h1 className="header__title">
        <span className="header__title-span">
          Разрабатываем и&nbsp;внедряем веб&#8209;приложения
        </span>
        , которые помогают оптимизировать бизнес-процессы и решить сложные
        управленческие задачи
      </h1>
    </header>
  );
};

export default Header;
