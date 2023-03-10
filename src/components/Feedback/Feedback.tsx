import "./Feedback.scss";
import { ReactComponent as FormLine } from "../../images/form-line.svg";
import Input from "./Input/Input";
import React from "react";
import TextArea from "./TextArea/TextArea";

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
        <form noValidate className="feedback__form">
          <Input name="name" placeholderText="Имя" typeInput="text" />
          <Input name="mobile" placeholderText="Телефон" typeInput="tel" />
          <Input name="email" placeholderText="Email" typeInput="email" />
          <TextArea />
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
