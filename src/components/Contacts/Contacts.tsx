import './Contacts.scss';
import { ReactComponent as ContactLine } from '../../images/contact-line.svg';

const Contacts = () => {
  return (
    <section className='section contacts'>
      <div className='section__wrapper contacts__wrapper'>
        <ContactLine className='contacts__line' />
        <h2 className='section__title'>Контакты</h2>
        <h3 className='section__subtitle contacts__subtitle'>Как с нами связаться</h3>
        <div className='contacts__list'>
          <p className='contacts__item'>Контактное лицо: Вадим Бакуров, CEO</p>
          <p className='contacts__item'>
            <span className='contacts__item-icon contacts__item-icon_type_mobile'></span>
            +7 (962) 350-00-14
          </p>
          <p className='contacts__item'>
            <span className='contacts__item-icon contacts__item-icon_type_email'></span>
            vb@ritm.studio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
