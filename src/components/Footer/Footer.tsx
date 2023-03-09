import "./Footer.scss";
import logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="/" className="footer__logo-link">
        <img src={logo} className="footer__logo" alt="Логотип" />
      </a>
      <nav className="footer__nav">
        <a href="#header" className="link footer__nav-link">
          О компании
        </a>
        <a href="#techs" className="link footer__nav-link">
          Технологии
        </a>
        <a href="#process" className="link footer__nav-link">
          Процесс работы
        </a>
        <a href="#contacts" className="link footer__nav-link">
          Контакты
        </a>
      </nav>
      <p className="footer__copyright">
        {new Date().getFullYear()} |{" "}
        <a className="footer__copyright-link" href="/">
          Политика конфиденциальности персональных данных
        </a>
      </p>
    </footer>
  );
};

export default Footer;
