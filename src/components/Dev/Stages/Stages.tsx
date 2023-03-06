import '../../../styles/section.scss';
import './Stages.scss';
import imageStep1 from '../../../images/image-step1.svg';
import imageStep2 from '../../../images/image-step2.svg';
import imageStep3 from '../../../images/image-step3.svg';
import imageStep4 from '../../../images/image-step4.svg';

const Stages = () => {
  return (
    <div className='stages'>
      <h3 className='section__subtitle stages__title'>
        Интеграция IT-решений в&nbsp;ваш&nbsp;бизнес
      </h3>
      <ul className='stages__list'>
        <li className='stages__item'>
          <div className='stages__item-text-wrap'>
            <p className='stages__item-title'>Первый этап</p>
            <p className='stages__item-description'>
              Ваша компания только начинает свой путь развития. Вам необходим простой сайт-визитка
              или одностраничный лэндинг для продвижения продукта.
            </p>
            <p className='stages__item-description'>
              С помощью технологии веб-приложения мы разрабатываем быстрый сайт с современным
              адаптивным дизайном.
            </p>
          </div>
          <div className='stages__item-image-wrapper stages__item-image-wrapper_type_first'>
            <img
              className='stages__item-image stages__item-image_type_first'
              src={imageStep1}
              alt='Картинка устройств'
            />
          </div>
        </li>
        <li className='stages__item'>
          <div className='stages__item-text-wrap'>
            <p className='stages__item-title'>Второй этап</p>
            <p className='stages__item-description'>
              Ваши бизнес-процессы становятся все сложнее и требуют новых функциональных
              возможностей. Мы добавляем на сайт каталог товаров с системой уведомления менеджеров.
            </p>
            <p className='stages__item-description'>
              Оба блока работают в единой экосистеме и не конфликтуют между собой.
            </p>
          </div>
          <div className='stages__item-image-wrapper stages__item-image-wrapper_type_second'>
            <img
              className='stages__item-image stages__item-image_type_second'
              src={imageStep2}
              alt='Картинка устройств'
            />
          </div>
        </li>
        <li className='stages__item'>
          <div className='stages__item-text-wrap'>
            <p className='stages__item-title'>Третий этап</p>
            <p className='stages__item-description'>
              Вы решаете сделать шаг в сторону полноценного e-commerce и запустить интернет-магазин.
              Мы разрабатываем систему приема платежей, авторизацию и гео-треккинг.
            </p>
            <p className='stages__item-description'>
              Все разделы вашего корпоративного портала работают вместе над реализацией единой
              задачи.
            </p>
          </div>
          <div className='stages__item-image-wrapper stages__item-image-wrapper_type_third'>
            <img
              className='stages__item-image stages__item-image_type_third'
              src={imageStep3}
              alt='Картинка устройств'
            />
          </div>
        </li>
        <li className='stages__item'>
          <div className='stages__item-text-wrap'>
            <p className='stages__item-title'>Четвертый этап</p>
            <p className='stages__item-description'>
              Ваша компания внедряет системы учета, CRM-модули, контроль эффективности менеджеров и
              продвинутая бизнес-аналитика. Вам требуется создание своей бизнес-экосистемы.
            </p>
            <p className='stages__item-description'>
              Мы продолжаем процесс разработки и создаём уникальный продукт, связывающий все ресурсы
              компании.
            </p>
          </div>
          <div className='stages__item-image-wrapper stages__item-image-wrapper_type_fourth'>
            <img
              className='stages__item-image stages__item-image_type_fourth'
              src={imageStep4}
              alt='Картинка устройств'
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Stages;
