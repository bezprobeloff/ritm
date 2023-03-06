import '../../../styles/section.scss';
import './Web.scss';
const Web = () => {
  return (
    <div className='web'>
      <h3 className='section__subtitle web_title'>
        Веб-приложение – это программный продукт, работающий в онлайн-среде и состоящий из двух
        основных частей
      </h3>
      <ul className='section__list'>
        <li className='section__item'>
          <p className='web__item-title'>Клиентская часть</p>
          <p className='web__item-description'>
            Это интерфейс, через который пользователь управляет приложением. Самый простой и
            распространенный пример клиентской части веб-приложения – корпоративный сайт компании.
          </p>
        </li>
        <li className='section__item'>
          <p className='web__item-title'>Серверная часть</p>
          <p className='web__item-description'>
            Это вычислительный и логический центр веб-приложения. Примером серверной части служит
            система управления заказами интернет-магазина.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Web;
