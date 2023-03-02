import logo from '../../images/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <a href='/' className='header__logo-link'>
        <img src={logo} className='header__logo' alt='Логотип' />
      </a>
      <nav className='header__nav'>
        <a href='/' className='header__nav-link'>
          О компании
        </a>
        <a href='/' className='header__nav-link'>
          Технологии
        </a>
        <a href='/>' className='header__nav-link'>
          Процесс работы
        </a>
        <a href='/' className='header__nav-link'>
          Контакты
        </a>
        <a href='/>' className='header__nav-link-project'>
          Обсудить проект
        </a>
      </nav>
    </header>
  );
};

export default Header;
