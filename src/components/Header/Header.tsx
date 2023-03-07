import logo from '../../images/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <a href='/' className='header__logo-link'>
        <img src={logo} className='header__logo' alt='Логотип' />
      </a>
      <button className='header__button-menu'>
        <span className='header__button-menu-icon' />
      </button>
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
      </nav>
      <a href='/>' className='header__button-link'>
        Обсудить проект
      </a>
      <h1 className='header__title'>
        <span className='header__title-span'>
          Разрабатываем и&nbsp;внедряем веб&#8209;приложения
        </span>
        , которые помогают оптимизировать бизнес-процессы и решить сложные управленческие задачи
      </h1>
    </header>
  );
};

export default Header;
