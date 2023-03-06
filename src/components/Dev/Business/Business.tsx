import './Business.scss';

const Business = () => {
  return (
    <div className='business'>
      <h3 className='section__subtitle business__title'>
        Основные преимущества для вашего бизнеса
      </h3>
      <ul className='business__list'>
        <li className='business__item'>
          <div className='business__item-icon-wrapper' />
          <p className='business__item-description'>
            Мы специализируется на сложных решениях, связанных с глубокой аналитикой
            бизнес-процессов. Совместно с вами мы изучим ваш бизнес и предложим наиболее оптимальное
            и эффективное решение.
          </p>
        </li>
        <li className='business__item'>
          <div className='business__item-icon-wrapper' />
          <p className='business__item-description'>
            Наша стратегия построена на долгосрочных партнерских отношениях. Если сейчас у вас нет
            сложных задач и вам требуется только простой сайт-визитка с обратной связью, мы с
            удовольствием поможем вам.
          </p>
        </li>
        <li className='business__item'>
          <div className='business__item-icon-wrapper' />
          <p className='business__item-description'>
            На каждом этапе развития вашей компании мы поможем вам развивать собственную
            IT-экосистему актуальную для ваших текущих задач и использующую самый современный стек
            технологий.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Business;
