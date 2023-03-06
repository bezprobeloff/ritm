import './Footer.scss';
import logo from '../../images/logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <a href='/' className='footer__logo-link'>
        <img src={logo} className='footer__logo' alt='Логотип' />
      </a>
      <nav className='footer__nav'>
        <a href='/' className='footer__nav-link'>
          О компании
        </a>
        <a href='/' className='footer__nav-link'>
          Технологии
        </a>
        <a href='/>' className='footer__nav-link'>
          Процесс работы
        </a>
        <a href='/' className='footer__nav-link'>
          Контакты
        </a>
      </nav>
      <p className='footer__copyright'>
        2023 |{' '}
        <a className='footer__copyright-link' href='/'>
          Политика конфиденциальности персональных данных
        </a>
      </p>
    </footer>
  );
};

export default Footer;
