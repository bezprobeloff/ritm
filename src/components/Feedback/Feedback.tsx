import "./Feedback.scss";
import { ReactComponent as FormLine } from "../../images/form-line.svg";

const Feedback = () => {
  return (
    <section id="feedback" className="section feedback">
      <div className="section__wrapper feedback__wrapper">
        <FormLine className="feedback__line" />
        <h2 className="section__title">Форма обратной связи</h2>
        <h3 className="section__subtitle feedback__subtitle">
          Получить консультацию
        </h3>
        <p className="feedback__description">
          Если вы хотите больше узнать о нас, наших технологиях и опыте работы,
          обсудить конкретную задачу или просто получить консультацию, напишите
          нам через форму обратной связи
        </p>
        <form className="feedback__form">
          <input
            className="input feedback__form-input"
            type="text"
            name="name"
            id="name"
            placeholder="Имя"
            minLength={2}
            maxLength={40}
            required
          />
          <input
            className="input feedback__form-input"
            type="tel"
            name="mobile"
            id="mobile"
            placeholder="Телефон"
            required
          />
          <input
            className="input feedback__form-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <textarea
            className=" input feedback__form-input feedback__form-textarea"
            placeholder="Комментарий"
          />
          <label className="feedback__form__checkbox">
            <input type="checkbox" className="feedback__form__checkbox-input" />
            <span className="feedback__form__checkbox-text">
              Нажимая на кнопку, вы даете согласие на обработку своих
              персональных данных.
            </span>
          </label>
          <button className="button feedback__form-button-submit" type="submit">
            Отправить вопрос
          </button>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
