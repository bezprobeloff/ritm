import '../../../styles/section.scss';
import './Stages.scss';

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
          <div className='stages__item-image-wrap'>
            <img />
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
          <div className='stages__item-image-wrap'>
            <img />
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
          <div className='stages__item-image-wrap'>
            <img />
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
          <div className='stages__item-image-wrap'>
            <img />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Stages;
