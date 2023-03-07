import './FAQ.scss';

const FAQ = () => {
  return (
    <section className='section faq'>
      <div className='section__wrapper'>
        <h2 className='section__title'>F.A.Q</h2>
        <h3 className='section__subtitle faq__subtitle'>Частые вопросы</h3>
        <div className='faq__list'>
          <details open={true} className='faq__details'>
            <summary className='faq__question'>
              <span className='faq__question-icon' />
              <p className='faq__question-text'>
                Если мне нужен простой сайт, я могу сделаю его с помощью шаблона. Зачем мне сложное
                веб-приложение?
              </p>
            </summary>
            <p className='faq__answer'>
              Если мне нужен простой сайт, я сделаю его на конструкторе. Зачем мне все эти сложности
              с веб-приложением?
            </p>
          </details>
          <details className='faq__details'>
            <summary className='faq__question'>
              <span className='faq__question-icon' />
              <p className='faq__question-text'>
                Мне предлагают сделать сайт на Bitrix и Wordpress. Эти решения хуже и не будут
                работать?
              </p>
            </summary>
            <p className='faq__answer'>%ДОБАВИТЬ_ТЕКСТ%</p>
          </details>
          <details className='faq__details'>
            <summary className='faq__question'>
              <span className='faq__question-icon' />
              <p className='faq__question-text'>
                Можно ли разбить процесс на этапы и реализовывать их последовательно?
              </p>
            </summary>
            <p className='faq__answer'>%ДОБАВИТЬ_ТЕКСТ%</p>
          </details>
          <details className='faq__details'>
            <summary className='faq__question'>
              <span className='faq__question-icon' />
              <p className='faq__question-text'>
                У меня уже есть сайт, он прекрасно работает. Мне все придется делать заново?
              </p>
            </summary>
            <p className='faq__answer'>%ДОБАВИТЬ_ТЕКСТ%</p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
