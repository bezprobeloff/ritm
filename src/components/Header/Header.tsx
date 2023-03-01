import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header>
      <a href='home'>
        <img src={logo} alt='Логотип' />
      </a>
    </header>
  );
};

export default Header;
