import React from 'react';
import './Footer.scss';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

interface IProps {
  onClickPolicy: (evt: React.MouseEvent) => void;
}

const Footer: React.FC<IProps> = ({ onClickPolicy }) => {
  const classNav = 'footer__nav';
  const classLink = 'link footer__nav-link';
  return (
    <footer className="footer">
      <a href="/" className="footer__logo-link">
        <img src={logo} className="footer__logo" alt="Логотип" />
      </a>
      <Navigation classNameNav={classNav} classNameLink={classLink} />
      <p className="footer__copyright">
        {new Date().getFullYear()} |{' '}
        <a rel="nofollow" onClick={onClickPolicy} className="footer__copyright-link" href="/">
          Политика конфиденциальности персональных данных
        </a>
      </p>
    </footer>
  );
};

export default Footer;
